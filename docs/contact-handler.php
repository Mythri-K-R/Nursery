<?php
/**
 * Contact Form Handler with SMTP Support
 * 
 * Handles form submissions with email validation, sanitization, and delivery.
 * Supports SMTP for reliable delivery + fallback to mail() function.
 * Includes error logging for debugging.
 */

require_once __DIR__ . '/config.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Location: contact.html');
    exit;
}

// ============== SANITIZATION ==============
function sanitize_text($value) {
    return trim(filter_var($value, FILTER_SANITIZE_FULL_SPECIAL_CHARS));
}

// ============== LOGGING ==============
function log_mail($message, $status = 'INFO') {
    if (!LOG_ENABLED || !LOG_FILE) return;
    
    $dir = dirname(LOG_FILE);
    if (!is_dir($dir)) {
        @mkdir($dir, 0755, true);
    }
    
    $timestamp = date('Y-m-d H:i:s');
    $logEntry = "[{$timestamp}] [{$status}] {$message}\n";
    @error_log($logEntry, 3, LOG_FILE);
}

// ============== INPUT VALIDATION ==============
$name = isset($_POST['name']) ? sanitize_text($_POST['name']) : '';
$email = isset($_POST['email']) ? trim($_POST['email']) : '';
$subject = isset($_POST['subject']) ? sanitize_text($_POST['subject']) : '';
$message = isset($_POST['message']) ? sanitize_text($_POST['message']) : '';

if ($name === '' || $subject === '' || $message === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    log_mail("Invalid form submission: name={$name}, email={$email}, subject={$subject}", 'WARN');
    header('Location: contact.html?status=invalid');
    exit;
}

// ============== EMAIL CONTENT ==============
$mailSubject = 'Website Consultation Request: ' . $subject;
$mailBody = "Name: {$name}\n" .
            "Email: {$email}\n" .
            "Subject: {$subject}\n\n" .
            "Message:\n{$message}\n";

$headers = [];
$headers[] = 'From: ' . SMTP_FROM_NAME . ' <' . SMTP_FROM_EMAIL . '>';
$headers[] = 'Reply-To: ' . $email;
$headers[] = 'Content-Type: text/plain; charset=UTF-8';

// ============== SEND EMAIL VIA SMTP ==============
$sent = false;
$sendMethod = 'none';

if (SMTP_ENABLED && SMTP_HOST && SMTP_USER && SMTP_PASS) {
    $sent = send_via_smtp(
        $email,
        RECIPIENT_EMAIL,
        $mailSubject,
        $mailBody,
        SMTP_FROM_EMAIL,
        SMTP_FROM_NAME
    );
    $sendMethod = 'SMTP (' . SMTP_HOST . ':' . SMTP_PORT . ')';
} else {
    $sent = mail(RECIPIENT_EMAIL, $mailSubject, $mailBody, implode("\r\n", $headers));
    $sendMethod = 'mail() function';
}

if ($sent) {
    log_mail("Email sent successfully via {$sendMethod} | From: {$email} | Subject: {$subject}", 'SUCCESS');
    header('Location: contact.html?status=success');
    exit;
} else {
    log_mail("Email delivery failed via {$sendMethod} | From: {$email} | Subject: {$subject}", 'ERROR');
    header('Location: contact.html?status=error');
    exit;
}

// ============== SMTP EMAIL FUNCTION ==============
/**
 * Send email via SMTP
 * Uses PHP streams for SMTP communication (no external libraries required)
 */
function send_via_smtp($replyTo, $to, $subject, $message, $fromEmail, $fromName) {
    // Connect to SMTP server
    $socket = @fsockopen(SMTP_HOST, SMTP_PORT, $errno, $errstr, 15);
    
    if (!$socket) {
        log_mail("SMTP Connection failed: {$errno} - {$errstr}", 'ERROR');
        return false;
    }
    
    stream_set_blocking($socket, true);
    stream_set_timeout($socket, 15);
    
    try {
        // Read SMTP greeting
        $response = fgets($socket, 1024);
        if (!preg_match('/^220/', $response)) {
            throw new Exception("SMTP greeting failed: {$response}");
        }
        
        // Send EHLO
        send_command($socket, "EHLO " . gethostname());
        
        // Start TLS
        send_command($socket, "STARTTLS");
        
        if (!stream_context_set_option($socket, "ssl", "allow_self_signed", true)) {
            throw new Exception("Failed to set SSL context");
        }
        
        if (!stream_socket_enable_crypto($socket, true, STREAM_CRYPTO_METHOD_TLS_CLIENT)) {
            throw new Exception("Failed to enable crypto");
        }
        
        // Authenticate
        $auth = base64_encode(SMTP_USER . ":" . SMTP_PASS);
        send_command($socket, "AUTH LOGIN");
        send_command($socket, base64_encode(SMTP_USER));
        send_command($socket, base64_encode(SMTP_PASS));
        
        // Send email
        send_command($socket, "MAIL FROM:<{$fromEmail}>");
        send_command($socket, "RCPT TO:<{$to}>");
        send_command($socket, "DATA");
        
        // Compose headers
        $headers = "From: {$fromName} <{$fromEmail}>\r\n";
        $headers .= "Reply-To: {$replyTo}\r\n";
        $headers .= "To: {$to}\r\n";
        $headers .= "Subject: {$subject}\r\n";
        $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
        $headers .= "\r\n";
        
        // Send message
        fwrite($socket, $headers . $message . "\r\n.\r\n");
        $response = fgets($socket, 1024);
        
        if (!preg_match('/^250/', $response)) {
            throw new Exception("Message rejected: {$response}");
        }
        
        // Quit
        send_command($socket, "QUIT");
        
        fclose($socket);
        return true;
        
    } catch (Exception $e) {
        log_mail("SMTP error: " . $e->getMessage(), 'ERROR');
        if ($socket) fclose($socket);
        return false;
    }
}

/**
 * Send SMTP command and read response
 */
function send_command(&$socket, $command) {
    fwrite($socket, $command . "\r\n");
    $response = fgets($socket, 1024);
    
    if (!preg_match('/^[23]\d\d/', $response)) {
        throw new Exception("SMTP error: {$response}");
    }
    
    return $response;
}

<?php
/**
 * Email Configuration
 * 
 * Configure SMTP settings here for reliable email delivery.
 * Leave SMTP_HOST empty to fall back to PHP mail() function.
 */

define('SMTP_ENABLED', false);  // Set to true once you have the email password
define('SMTP_HOST', 'mail.balajiplantnursery.in');      // Your hosting provider's mail server
define('SMTP_PORT', 587);                                // 587 (TLS) or 465 (SSL)
define('SMTP_USER', 'info@balajiplantnursery.in');      // Your email account
define('SMTP_PASS', '');                                 // Ask your hosting provider for this password
define('SMTP_FROM_EMAIL', 'info@balajiplantnursery.in');
define('SMTP_FROM_NAME', 'Balaji Nursery');

define('RECIPIENT_EMAIL', 'mythrikr88@gmail.com');
define('LOG_ENABLED', true);
define('LOG_FILE', __DIR__ . '/../logs/mail.log');

/**
 * Instructions:
 * 
 * 1. Ask your hosting provider for SMTP credentials:
 *    - SMTP server address (host)
 *    - SMTP port (usually 587 for TLS or 465 for SSL)
 *    - Email account username
 *    - Email account password
 * 
 * 2. Update the values above with your credentials
 * 
 * 3. If you don't have SMTP access, set SMTP_ENABLED to false
 *    and the system will use PHP mail() function instead
 * 
 * 4. Ensure logs/ directory exists and is writable:
 *    mkdir logs/
 *    chmod 755 logs/
 */
?>

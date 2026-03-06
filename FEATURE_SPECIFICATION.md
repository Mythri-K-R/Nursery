# BALAJI PLANTATION NURSERY - COMPLETE FEATURE SPECIFICATION

**Document Version:** 1.0  
**Last Updated:** March 2026  
**Website:** balajiplantnursery.in  
**Type:** Plant Nursery E-Commerce & Information Portal

---

## 1. EXECUTIVE SUMMARY

Balaji Plantation Nursery is a comprehensive web platform for a plant nursery business based in Tiptur, Karnataka. The website serves as both an informational hub and an e-commerce platform for selling plants, providing plantation guidance, and showcasing the nursery's portfolio. The site is built using HTML5, CSS3, SCSS, and JavaScript with responsive Bootstrap framework design.

**Business Purpose:**

- Sell grafted plants (particularly Macadamia) and fruit saplings
- Provide plantation guidance and farmer support
- Showcase portfolio and case studies
- Maintain blog for plant care knowledge
- Handle customer inquiries and bulk orders

---

## 2. SITE STRUCTURE & NAVIGATION

### 2.1 Navigation Hierarchy

```
HOME (index.html)
├── ABOUT (about.html)
├── PAGES (Pages Dropdown)
│   ├── Home
│   ├── About
│   ├── SHOP
│   │   ├── Shop (shop.html)
│   │   ├── Shop Details (shop-details.html)
│   │   ├── Shopping Cart (cart.html)
│   │   └── Checkout (checkout.html)
│   ├── PORTFOLIO
│   │   ├── Portfolio (portfolio.html)
│   │   └── Portfolio Details (single-portfolio.html)
│   ├── BLOG
│   │   ├── Blog (blog.html)
│   │   └── Blog Details (single-post.html)
│   └── CONTACT (contact.html)
├── SHOP (shop.html)
├── PORTFOLIO (portfolio.html)
└── CONTACT (contact.html)
```

### 2.2 Header Structure

**Top Header Area:**

- Email contact display with icon
- Phone numbers display (8618834969 / 9481021545)
- Language dropdown (commented out, available for future use)
- Login link (commented out, available for future use)
- Shopping cart link (commented out, available for future use)
- Tooltips on hover for contact info

**Navigation Bar:**

- Brand Logo: "BALAJI NURSERY"
- Multi-level dropdown navigation
- Responsive hamburger menu for mobile
- Search icon trigger (top right)
- Sticky navigation on scroll
- Mobile hamburger menu with collapsible sections

---

## 3. PAGE SPECIFICATIONS

### 3.1 HOME PAGE (index.html)

#### Components:

**Navigation Header**

- Preloader animation (leaf spin animation)
- Fixed/sticky navigation menu
- Search form overlay

**Hero Section**

- Full-width background image
- Centered content overlay with:
  - Headline: "Trusted Macadamia & Fruit Plant Nursery in Tiptur"
  - Subheadline: "Supplying high quality grafted plants, plantation guidance and farmer support across Karnataka"
  - Two CTA buttons: "View Plants" (links to shop) and "Contact Us" (links to contact)
  - Dark overlay for text readability

**Services Section**

- Background: Light gray (bg-gray)
- Heading: "OUR SERVICES"
- Subtext: "Complete support for farmers and plantation projects"
- Three Service Cards in grid layout:
  1. Quality Plant Supply (with icon)
     - Icon: s1.png
     - Description: "Healthy Macadamia, fruit and ornamental plants."
  2. Plantation Guidance (with icon)
     - Icon: s2.png
     - Description: "Expert advice on spacing, irrigation and care."
  3. Bulk Orders (with icon)
     - Icon: s3.png
     - Description: "Large scale supply for farms and projects."

**About Section**

- Section heading: "ABOUT BALAJI NURSERY"
- Subtext: "Serving farmers with dedication and trust"
- Full-width text content:
  - Company overview
  - Specialization: Macadamia plants and fruit saplings
  - Value proposition: High survival rate plants, professional guidance
  - Additional services: Natural lawn grass, turf for sports grounds, landscaping

**Featured Plants Section (Popular Plants)**

- Background: Light gray (bg-gray)
- Section heading: "POPULAR PLANTS"
- Subtext: "Best selling nursery plants"
- Product grid layout (4 columns on desktop, 1-2 on mobile):

  Product cards include:
  1. Macadamia Grafted Plant - ₹750
     - Image: macadamia-bush-nut-190905.webp
  2. Mango Plant - ₹250
     - Image: mango plant.jpg
  3. Areca Palm - ₹150
     - Image: Areca.webp
  4. Rose Plants - ₹120
     - Image: rose.webp

  Each product card features:
  - Product image (clickable for lightbox popup)
  - Plant name
  - Price in Indian Rupees (₹)
  - Hover effects
  - Class "plant-popup" for image zoom/gallery feature

**Footer Section**

- Four-column layout on desktop
- Column 1: Branding
  - Logo + "BALAJI NURSERY"
  - Social media icons (Facebook, Twitter, Google+, Instagram, LinkedIn)
- Column 2: Quick Links
  - Home, About, Shop, Shop Details, Shopping Cart
  - Checkout, Portfolio, Blog, Contact Us
- Column 3: Best Sellers
  - Two product cards with thumbnails, names, and prices
  - Cactus Flower ($10.99)
  - Tulip Flower ($11.99)
- Column 4: Contact Information
  - Address: "Balaji Nursery, Hayana bavi near, Mathihalli golara hatti gate, Tiptur Tumkur dist-572201"
  - Phone: "8618834969/9481021545"
  - Email: "balajinursery2110@gmail.com"
  - Hours: "Mon - Sun: 9 AM to 6 PM"

**Footer Bottom**

- Border line separator
- Remaining footer links area (currently styled but content placeholder)

---

### 3.2 ABOUT PAGE (about.html)

Structure (Inferred from HTML structure):

- Hero/Breadcrumb section with page title
- About company details
- Mission and values
- Services overview
- Team information (structure available)
- Contact call-to-action

---

### 3.3 SHOP PAGE (shop.html)

#### Components:

**Breadcrumb Navigation**

- Home icon + "Shop" current page indicator

**Shop Header Section**

- Page title: "Shop"
- Background overlay image

**Sorting & Display Controls**

- "Showing 1-9 of 72 results" counter
- Sort dropdown: "Sort by Popularity"
  - Options: Newest, Sales, Ratings
- Display count dropdown: "Show: 9"
  - Options: 12, 18, 24

**Sidebar Filters (Left Column)**

1. Price Filter
   - Slider range input
   - Min: $8, Max: $30
   - Display: "Price: $8 - $30"

2. Categories Filter
   - Checkbox: All plants (72)
   - Checkbox: Outdoor plants (20)
   - [Additional categories structure available]

**Product Grid Display**

- Main content area with product listings
- Expected 72 products total (as per counter)
- Product cards structure same as featured products
- Image + name + price + hover effects

---

### 3.4 SHOP DETAILS PAGE (shop-details.html)

Structure (Inferred):

- Single product display
- Large product image
- Product details:
  - Name, price, rating
  - Description
  - Specifications
  - Quantity selector
  - Add to Cart button
- Related products section
- Breadcrumb navigation

---

### 3.5 SHOPPING CART PAGE (cart.html)

Structure (Inferred):

- Breadcrumb navigation
- Cart items listing with:
  - Product image
  - Product name
  - Unit price
  - Quantity selector
  - Line total
  - Remove button
- Cart totals:
  - Subtotal
  - Tax (if applicable)
  - Shipping
  - Total price
- Continue Shopping button
- Proceed to Checkout button

---

### 3.6 CHECKOUT PAGE (checkout.html)

Structure (Inferred):

- Breadcrumb navigation
- Two-column layout:
  - Left: Order summary (items, prices)
  - Right: Checkout form with sections:
    - Billing information
    - Shipping address
    - Payment method
    - Order notes
- Form validation
- Complete order button

---

### 3.7 PORTFOLIO PAGE (portfolio.html)

Structure (Inferred):

- Page heading: "Portfolio"
- Breadcrumb navigation
- Portfolio filter buttons (by category)
- Masonry gallery grid layout
- Project cards with:
  - Project image
  - Project title
  - Category tag
  - Link to details
- Lightbox image gallery on image click

---

### 3.8 PORTFOLIO DETAILS PAGE (single-portfolio.html)

Structure (Inferred):

- Project hero image
- Project information:
  - Title
  - Location
  - Area details
  - Category
  - Description
  - Images gallery
- Client testimonial (optional)
- Related projects carousel
- Back to portfolio link

---

### 3.9 BLOG PAGE (blog.html)

Structure (Inferred):

- Page heading: "Blog"
- Breadcrumb navigation
- Blog posts listing with:
  - Featured image
  - Title
  - Date published
  - Author
  - Excerpt/summary
  - Read More link
- Pagination or Load More
- Blog categories sidebar
- Search functionality

---

### 3.10 BLOG DETAILS PAGE (single-post.html)

Structure (Inferred):

- Full blog post display
- Post header:
  - Title
  - Date, author, category
  - Featured image
- Post content with formatting
- Related articles
- Comments section
- Navigation to prev/next posts
- Breadcrumb

---

### 3.11 CONTACT PAGE (contact.html)

#### Components:

**Breadcrumb Navigation**

- Home icon + "Contact" current page

**Hero Section**

- Page title: "CONTACT US"
- Background overlay image

**Contact Information Section**

- Two-column layout:

Left Column:

- Contact image/thumbnail

Right Column:

- Section heading: "CONTACT US"
- Subtext: "We are improving our services to serve you better."
- Contact form (structure visible, form fields expected):
  - Name field
  - Email field
  - Subject field
  - Message textarea
  - Submit button

**Footer Contact Info** (also displayed in main footer):

- Address
- Phone numbers
- Email
- Business hours

---

## 4. UI COMPONENTS & DESIGN SYSTEM

### 4.1 Header & Navigation

**Preloader Component**

- Centered circular loading animation
- Animated leaf image (leaf.png)
- Pre-fade effect on page load
- Auto-removes after page load completes

**Navigation Menu**

- Class: "classy-navbar" (Classy Nav Plugin)
- Responsive design with hamburger toggle
- Three-tier nested dropdowns
- Mobile-friendly with collapsible sections
- Sticky behavior (stays at top during scroll)

**Search Form**

- Icon-triggered overlay form
- Search input with placeholder: "Type keywords & press enter..."
- Submit button (hidden visually, accessible)
- Close icon (X) to dismiss
- Action: Search form submits to shop.html

### 4.2 Buttons & CTAs

**Primary Button Style: `.alazea-btn`**

- Background: Primary green color (#2e7d32)
- Hover state: Darker green
- Padding: Standard button spacing
- Text: Uppercase, bold
- Variants:
  - Default state
  - Active state (different background)

**Button Examples:**

- "VIEW PLANTS" - Links to shop
- "CONTACT US" - Links to contact form
- "GET STARTED" - Hero action
- "ADD TO CART" - Product action
- "CONTINUE SHOPPING" - Cart action
- "CHECKOUT" - Final purchase action

### 4.3 Cards & Containers

**Service Card**

- Layout: Flex layout with icon + text
- Icon: 50px image on left
- Text content: Right side
- Title + description
- Spacing: mb-50 (margin bottom 50px)

**Product Card**

- Layout: Centered, text-center class
- Image: `plant-box` container with image
- Image class: `.plant-popup` for lightbox trigger
- Plant name: Div with class `.plant-name`
- Price: H6 tag with price in Indian Rupees (₹)
- Hover effect: Image zoom/scale
- Margin-bottom: 50px

**Portfolio Card**

- Image container
- Category filter class
- Title overlay or below
- Hover state: Lightbox trigger

**Blog Post Card**

- Featured image
- Title
- Date/author meta
- Excerpt text
- Read More link

### 4.4 Forms & Inputs

**Form Structure Standards:**

- Bootstrap form classes used
- Input validation styling
- Placeholder text for guidance
- Required field indicators

**Form Fields in Use:**

- Text inputs: Name, subject
- Email input: Email address
- Textarea: Message
- Select dropdowns: Categories, sorting, quantity
- Checkbox: Product filters, terms/conditions
- Price range slider: jQuery Slider for price filtering

### 4.5 Footer

**Footer Layout:**

- Class: "footer-area bg-img"
- 4-column grid on desktop
- Full-width on mobile (stacked)
- Main footer area + footer bottom area
- Social media integrations
- Quick navigation links
- Best sellers showcase
- Contact information

**Footer Widgets:**

- `.single-footer-widget`
- Widget titles: `.widget-title`
- Widget descriptions: `.widget-desc`
- Widget navigation: `.widget-nav`

---

## 5. FUNCTIONALITY & INTERACTIVE FEATURES

### 5.1 JavaScript Functionality (from active.js)

#### Core Features Implemented:

**1. Preloader**

- Fades out when page fully loads
- Self-removes from DOM
- Provides loading state UX

**2. Navigation**

- Classy Nav initialization
- Mobile menu toggle
- Nested submenu handling
- Search icon toggle

**3. Search Functionality**

- Click `.searchIcon` to toggle search form
- Close search with `.closeIcon`
- Search form submits to shop.html
- GET request with search parameter

**4. Carousels/Sliders (Owl Carousel)**

- Hero carousel: `welcomeSlide` (`.hero-post-slides`)
  - Items: 1
  - Auto-play: Yes (5000ms)
  - Animation: Smooth 1000ms
  - Navigation: No nav controls
- Testimonials carousel: `testiSlides` (`.testimonials-slides`)
  - Items: 1
  - Dots pagination: Yes
  - Auto-play: Yes
  - Animation: Fade in/out
- Portfolio carousel: `portfolioSlides` (`.portfolio-slides`)
  - Items: 2 (responsive)
  - Navigation arrows: Yes
  - Dots pagination: Yes
  - Manual control: No auto-play

**5. Gallery/Lightbox (Magnific Popup)**

- Portfolio images: `.portfolio-img` trigger
- Product images: `.product-img` trigger
- Video icons: `.video-icon` for iframe embedding
- Gallery mode enabled with navigation
- Custom body class management (mfp-no-scroll)

**6. Masonry Gallery (Isotope)**

- Portfolio filtering: `.portfolio-filter` buttons
- Masonry layout: `.alazea-portfolio`
- Item selector: `.single_portfolio_item`
- Filter attribute: `data-filter`
- Smooth layout transitions

**7. Progress Bars (Barfiller Plugin)**

- Elements: `#bar1`, `#bar2`, `#bar3`, `#bar4`
- Color: Green (#70c745)
- With tooltips
- Animation duration: 1000ms

**8. Scroll Effects**

- Scroll to top button (scrollUp plugin)
  - Class: Auto-added by plugin
  - Icon: Angle up (`<i class="fa fa-angle-up"></i>`)
  - Speed: 1500ms

**9. Counters (counterUp Plugin)**

- Element selector: `.counter`
- Animation: Count up effect
- Delay: 10ms between counts
- Duration: 2000ms total

**10. Sticky Navigation**

- Element: `.alazea-main-menu`
- Sticky position maintained during scroll
- Top spacing: 0

**11. Tooltips**

- Bootstrap tooltips
- Trigger: `data-toggle="tooltip"`
- Placement: Bottom (configurable)
- Applied to contact info links

**12. Price Range Slider**

- Element selector: `.slider-range-price`
- Data attributes:
  - `data-min`: Minimum price
  - `data-max`: Maximum price
  - `data-unit`: Currency symbol ($)
  - `data-value-min`: Initial min
  - `data-value-max`: Initial max
  - `data-label-result`: Display label
- Output: Updates `.range-price` element
- Range: True for dual handles

---

### 5.2 E-Commerce Features

**Shopping Cart System**

- Add to Cart functionality
- Cart page display
- Item removal
- Quantity adjustment
- Cart totals calculation

**Checkout Process**

- Multi-step form
- Billing/shipping information
- Payment processing integration (backend)
- Order confirmation

**Product Management**

- Product listing with images
- Price display
- Category filtering
- Search functionality
- Product details page

---

### 5.3 Contact & Forms

**Contact Form** (contact.html)

- Fields: Name, Email, Subject, Message
- Validation: Client-side (expected)
- Submission: Server-side processing required
- Success/error feedback: Backend dependent

**Newsletter Signup** (if implemented)

- Email subscription form
- Footer placement (structure available)

---

## 6. TECHNICAL STACK

### 6.1 Frontend Technologies

**HTML5**

- Semantic markup
- Accessibility features (ARIA labels)
- Meta tags for SEO
- Favicon support

**CSS3 & SCSS**

- Custom stylesheet: style.css
- SCSS source files:
  - `_fonts.scss`: Font definitions
  - `_mixin.scss`: Reusable mixins
  - `_responsive.scss`: Media queries
  - `_theme_color.scss`: Color variables
  - `style.scss`: Main stylesheet (compiles to style.css)

**CSS Framework: Bootstrap 4/5**

- Grid system: 12-column responsive layout
- Components: Forms, buttons, grid, cards
- Utilities: Spacing, display, text alignment
- Responsive breakpoints: Mobile-first design

**CSS Libraries**

- Font Awesome: Icon font library
- Elegant Icons: Additional icon set
- Classy Nav CSS: Custom navigation styling
- Owl Carousel CSS: Slider styling
- Magnific Popup CSS: Lightbox styling
- Animate.css: Animation effects

### 6.2 JavaScript Libraries & Plugins

**jQuery** (Required dependency)

- DOM manipulation
- Event handling
- Plugin initialization

**Bootstrap JavaScript**

- Modal functionality
- Dropdown menus
- Tooltip and popover
- Collapse component

**jQuery Plugins in Use:**

1. **Classy Nav Plugin** (classyNav)
   - Responsive navigation menu
   - Submenu handling
   - Mobile menu toggle

2. **Owl Carousel** (owlCarousel)
   - Responsive carousel slider
   - Touch support
   - Multiple carousel instances

3. **Magnific Popup** (magnificPopup)
   - Image lightbox gallery
   - Video iframe support
   - Gallery navigation

4. **Isotope** (isotope)
   - Masonry gallery layout
   - Filter functionality
   - Smooth animations

5. **Images Loaded** (imagesLoaded)
   - Image loading detection
   - Isotope initialization trigger

6. **Barfiller** (barfiller)
   - Animated progress bars
   - Tooltips

7. **Scroll Up** (scrollUp)
   - Scroll to top button
   - Auto-hide on top

8. **Counter Up** (counterUp)
   - Number counting animation
   - On-scroll trigger

9. **Sticky** (sticky)
   - Sticky element positioning
   - Scroll behavior

10. **jQuery Slider** (slider)
    - Price range input
    - Dual handle support

11. **jQuery UI** (used by slider plugin)
    - Core widget foundation

### 6.3 Directory Structure

```
d:\PROJECTS\nursery\public_html\
├── index.html
├── about.html
├── contact.html
├── shop.html
├── shop-details.html
├── cart.html
├── checkout.html
├── portfolio.html
├── single-portfolio.html
├── blog.html
├── single-post.html
├── style.css (compiled from SCSS)
├── css/
│   ├── bootstrap.min.css
│   ├── font-awesome.min.css
│   ├── classy-nav.css
│   ├── owl.carousel.min.css
│   ├── magnific-popup.css
│   ├── elegant-icon.css
│   └── animate.css
├── js/
│   ├── active.js (custom functionality)
│   ├── bootstrap/ (Bootstrap JS files)
│   ├── jquery/ (jQuery library)
│   └── plugins/ (jQuery plugins)
├── fonts/ (Font files for Font Awesome, Dosis, etc.)
├── img/
│   ├── core-img/ (logos, icons, UI images)
│   │   ├── favicon.ico
│   │   ├── leaf.png (preloader)
│   │   ├── s1.png, s2.png, s3.png (service icons)
│   │   └── [other core images]
│   ├── bg-img/ (background images)
│   │   ├── 1.jpg, 2.jpg (hero slides)
│   │   ├── 4.jpg, 5.jpg (footer products)
│   │   ├── 25.jpg (contact page)
│   │   └── [other backgrounds]
│   └── popular plants/ (Product images)
│       ├── macadamia-bush-nut-190905.webp
│       ├── mango plant.jpg
│       ├── Areca.webp
│       └── rose.webp
├── scss/ (SCSS source files)
│   ├── _fonts.scss
│   ├── _mixin.scss
│   ├── _responsive.scss
│   ├── _theme_color.scss
│   └── style.scss
└── cgi-bin/ (Server-side scripts)
```

---

## 7. DESIGN SYSTEM & STYLING

### 7.1 Color Palette

**Primary Colors**

- Primary Dark: #1b5e20 (Forest Green)
- Primary Main: #2e7d32 (Garden Green)
- Primary Light: #7CFC00 (Lime Green)

**Text Colors**

- Text Dark: #1f3d1f (Dark text on light backgrounds)
- Text Muted: #6a7d6a (Secondary text)

**Background Colors**

- Light: #f7fbf7 (Soft white with green tint)
- Softer: #f5faf5 (Even lighter tint)
- Border: #e0f2e0 (Light green border)

**Accent Colors**

- Green theme for primary actions
- White for contrast
- Transparent overlays for hero sections

### 7.2 Typography

**Font Family:** Dosis (Google Font), fallback to system sans-serif

- Dosis weights available: Regular, Bold (600-700 weight)
- Fallbacks: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif

**Heading Sizes**

- H1: 2.5rem (40px)
- H2: 2rem (32px) - Section headings
- H3: 1.5rem (24px)
- H4: 1.25rem (20px)
- H5: 1.1rem (17.6px) - Card titles
- H6: 1rem (16px) - Prices, labels

**Body Text**

- Font size: 16px
- Line height: 1.6
- Letter spacing: 0.3px

**Heading Styles**

- Font weight: 600-700
- Line height: 1.3
- Color: Dark (#1f3d1f)
- Margin-bottom: 15px

### 7.3 Spacing

**Standard Spacing Scale**

- Section padding: 100px top/bottom (section-padding-100)
- Component margin-bottom: 50px (mb-50)
- Small spacing: 15px (paragraph margins)
- Icon spacing: 30px (mr-30)

### 7.4 Shadows & Effects

**Shadow Levels**

- Small: `0 2px 8px rgba(0,0,0,0.08)` (--shadow-sm)
- Medium: `0 4px 15px rgba(0,0,0,0.1)` (--shadow-md)
- Large: `0 8px 25px rgba(0,0,0,0.1)` (--shadow-lg)

**Transitions**

- Default: `all 0.3s cubic-bezier(0.4, 0, 0.2, 1)`
- Used for: Hover effects, color changes, transforms

**Hover Effects**

- Image zoom on product cards
- Color transitions on buttons
- Shadow increases on cards
- Smooth opacity changes

### 7.5 Responsive Design

**Breakpoints:**

- Mobile: < 576px
- Tablet: 576px - 991px
- Desktop: 992px+
- Large Desktop: 1200px+

**Responsive Utilities:**

- Bootstrap grid: col-12, col-md-6, col-lg-3, etc.
- Flex utilities: flex-wrap, justify-content-between
- Display utilities: d-none, d-flex, d-block
- Text alignment: text-center, text-left

**Mobile Considerations:**

- Hamburger menu activation
- Single column layouts
- Touch-friendly button sizes
- Optimized image sizes
- Hidden elements on small screens

---

## 8. BUSINESS LOGIC & WORKFLOWS

### 8.1 Customer Purchasing Workflow

1. **Browse Products**
   - View home page featured plants
   - Click "View Plants" → Shop page
   - Filter by category, price range
   - Sort by popularity, newest, sales, rating

2. **View Product Details**
   - Click product image → Shop Details page
   - View full description, specifications
   - Select quantity
   - Click "Add to Cart"

3. **Manage Shopping Cart**
   - Navigate to "Shopping Cart" page
   - Review items, quantities, prices
   - Adjust quantities or remove items
   - View cart totals

4. **Checkout**
   - Click "Proceed to Checkout"
   - Enter shipping address
   - Enter billing information
   - Select payment method
   - Review order summary
   - Submit order

5. **Order Confirmation**
   - Confirmation page display
   - Email confirmations sent
   - Order tracking information

### 8.2 Content Management

**Products**

- Displayed on shop.html in grid
- Filterable by category
- Sortable by multiple criteria
- 72 total products (or dynamic count)
- Each has: Image, name, price, category

**Portfolio/Case Studies**

- Displayed on portfolio.html
- Filterable by project category
- Grid layout with masonry
- Linked to single-portfolio.html for details
- Shows client testimonials, gallery

**Blog Posts**

- Displayed on blog.html with pagination
- Linked to single-post.html for full content
- Categorized by topic
- Searchable
- Date and author metadata

**Service Information**

- 3 main services displayed on home
- About company on about.html
- Contact information in footer and contact page

### 8.3 User Communication

**Contact Form** (contact.html)

- Captures: Name, Email, Subject, Message
- Uses: Server-side processing
- Notifications: Email confirmation to user/admin
- Integration: CRM or email system

**Newsletter Signup** (optional)

- Email collection
- Marketing communication consent
- Backend integration

**Social Media Links**

- Footer placement
- Links to: Facebook, Twitter, Google+, Instagram, LinkedIn
- Share buttons on content (optional)

---

## 9. SEO & METADATA

### 9.1 Meta Tags Implementation

**Global Meta Tags:**

- Charset: UTF-8
- Viewport: width=device-width, initial-scale=1, shrink-to-fit=no
- X-UA-Compatible: IE=edge
- Description: Site description (incomplete in current version)

**Page-Specific Titles:**

- Home: "Macadamia Plants - BALAJI PLANTATION NURSERY TIPTUR"
- Shop: "BALAJI PLANTATION NURSERY TIPTUR"
- Contact: "BALAJI PLANTATION NURSERY TIPTUR"
- About: "[Title] - BALAJI PLANTATION NURSERY TIPTUR"

**Favicon:**

- File: img/core-img/favicon.ico
- Supports browser tab identification

### 9.2 Semantic HTML

- Navigation: `<nav>` tags with `aria-label`
- Headings: Proper h1-h6 hierarchy
- Lists: Semantic `<ul>`, `<ol>` usage
- Links: Descriptive link text, aria-labels
- Forms: Proper label associations
- Images: Alt text attributes
- Breadcrumbs: Semantic `<ol>` structure

### 9.3 Accessibility Features

- ARIA labels on buttons and icons
- Proper heading hierarchy
- Color contrast compliance
- Focus states on interactive elements
- Keyboard navigation support
- Form validation messages
- Screen reader compatibility

---

## 10. THIRD-PARTY INTEGRATIONS (Ready for Implementation)

### 10.1 Payment Gateway

- Razorpay (preferred for India)
- PayPal (international)
- Integration point: checkout.html form submission

### 10.2 Email Service

- Gmail/corporate email for notifications
- Transactional email templates
- Newsletter management (optional)

### 10.3 SMS Service (Optional)

- Order status updates
- Delivery notifications
- Promotional messages

### 10.4 Analytics

- Google Analytics for traffic tracking
- GoSearch Console for indexing
- Conversion tracking
- User behavior analysis

### 10.5 Social Media

- Social sharing buttons (content pages)
- Instagram feed integration (optional)
- Facebook pixel for retargeting

### 10.6 Maps Integration

- Google Maps on contact page
- Location marker for nursery
- Directions link

---

## 11. PERFORMANCE SPECIFICATIONS

### 11.1 Image Optimization

**Image Types & Formats:**

- PNG: Icons, logos (core-img)
- JPG: Background images, galleries
- WebP: Product images (modern format)
- File sizes: Optimized for web (< 500KB per image)

**Lazy Loading:**

- Implementation ready for images
- Load on-demand or near viewport
- Improves page speed

### 11.2 CSS & JS Optimization

**Minified Files:**

- bootstrap.min.css
- font-awesome.min.css
- owl.carousel.min.css
- All JS files minified

**Load Performance:**

- CSS in HEAD (critical rendering)
- JS at end of BODY (async load)
- async/defer attributes for non-critical JS

### 11.3 Caching Strategies

- Browser caching enabled
- CDN for CSS/JS libraries
- Static file versioning
- Server-side caching for dynamic content

---

## 12. BROWSER & DEVICE COMPATIBILITY

### 12.1 Browsers Supported

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (Chrome, Safari, Firefox)

### 12.2 Responsive Support

- Desktop: 1920px - 1200px+
- Tablet: 768px - 1024px
- Mobile: 320px - 767px
- Large screens: 2560px+

### 12.3 Mobile Optimization

- Responsive viewport meta tag
- Touch-friendly interface
- Mobile menu navigation
- Readable font sizes
- Tap targets >= 48px

---

## 13. DATA MODELS & BUSINESS ENTITIES

### 13.1 Product

```
Product {
  id: uint
  name: string
  description: string
  price: decimal
  currency: string (default: "₹")
  category: string
  image: string (file path)
  inventory: uint
  rating: float (0-5)
  reviews: integer
  specifications: object
  survival_rate: string (optional)
  tags: array
  created_date: datetime
  updated_date: datetime
}
```

### 13.2 Portfolio/Project

```
Project {
  id: uint
  title: string
  description: string
  location: string
  area_details: string
  category: string
  images: array
  client_name: string
  testimonial: string
  completion_date: datetime
  featured: boolean
  created_date: datetime
}
```

### 13.3 Blog Post

```
BlogPost {
  id: uint
  title: string
  content: string
  excerpt: string
  featured_image: string
  author: string
  category: string
  tags: array
  published_date: datetime
  updated_date: datetime
  status: enum("draft", "published", "archived")
  comments_count: integer
}
```

### 13.4 Contact Inquiry

```
ContactInquiry {
  id: uint
  name: string
  email: string
  subject: string
  message: string
  submitted_date: datetime
  read: boolean
  response_sent: boolean
  response_text: string (optional)
}
```

### 13.5 Order

```
Order {
  id: uint
  order_number: string
  customer_name: string
  customer_email: string
  customer_phone: string
  items: array
  subtotal: decimal
  tax: decimal
  shipping: decimal
  total: decimal
  status: enum("pending", "processing", "shipped", "delivered")
  shipping_address: object
  billing_address: object
  payment_method: string
  payment_status: enum("pending", "completed", "failed")
  created_date: datetime
  updated_date: datetime
}
```

### 13.6 Cart

```
Cart {
  session_id: string
  customer_id: uint (if logged in)
  items: array of {
    product_id: uint
    quantity: uint
    price: decimal
    total: decimal
  }
  subtotal: decimal
  tax: decimal
  shipping: decimal
  total: decimal
  created_date: datetime
  updated_date: datetime
  expires_date: datetime
}
```

---

## 14. SECURITY CONSIDERATIONS

### 14.1 Frontend Security

- Input validation on all forms
- XSS protection via sanitization
- CSRF tokens in forms
- Secure form submission (HTTPS)
- Password fields with proper masking

### 14.2 Data Protection

- HTTPS/SSL certificate required
- Sensitive data encryption
- Secure payment gateway integration
- PCI-DSS compliance for payments
- GDPR compliance for user data

### 14.3 User Authentication (Backend)

- Hashed password storage (bcrypt)
- Session management
- Logout functionality
- Account recovery mechanism
- Two-factor authentication (optional)

---

## 15. FUTURE ENHANCEMENTS

### 15.1 Currently Disabled Features (Available in HTML)

1. **Language Dropdown**
   - Currently commented out
   - Ready for multi-language implementation
   - Options: USA, UK, Bangla, Hindi, Spanish, Latin

2. **User Login**
   - Currently commented out
   - Structure in place
   - Requires backend implementation
   - Account dashboard features

3. **Shopping Cart Link in Header**
   - Currently commented out
   - Cart counter badge
   - Quick view mini cart

### 15.2 Potential Enhancements

1. **User Accounts**
   - Registration and login
   - Account dashboard
   - Order history
   - Saved addresses
   - Wishlist functionality

2. **Advanced Search**
   - Full-text search
   - Auto-complete suggestions
   - Filter by multiple criteria
   - Search history

3. **Reviews & Ratings**
   - Product reviews
   - Photo upload in reviews
   - Rating system (1-5 stars)
   - Verified purchase badge

4. **Inventory Management**
   - Real-time stock updates
   - Pre-order functionality
   - Stock notifications
   - Backorder handling

5. **Bulk Order System**
   - Bulk order form
   - Volume discounts
   - Minimum order quantities
   - Quote generation

6. **Live Chat**
   - Real-time customer support
   - Chat bot for FAQs
   - Agent assignment

7. **Email Notifications**
   - Order confirmations
   - Shipping updates
   - Delivery notifications
   - Marketing campaigns

8. **Loyalty Program**
   - Points system
   - Member tiers
   - Exclusive offers
   - Referral bonuses

9. **Mobile App**
   - Native iOS and Android apps
   - Push notifications
   - Offline browsing
   - App-exclusive deals

10. **Advanced Analytics**
    - Customer behavior tracking
    - Conversion funnel analysis
    - Product performance metrics
    - Traffic source analysis

---

## 16. DEPLOYMENT SPECIFICATIONS

### 16.1 Server Requirements

- Apache web server with .htaccess support
- PHP 7.4+ (for backend processing)
- MySQL 5.7+ or MariaDB (database)
- SSL certificate (HTTPS)
- FTP/SFTP access for deployment
- Sufficient disk space for media files

### 16.2 Database Setup

- WordPress database (if CMS-based) OR custom database
- Tables: products, orders, customers, blog posts, portfolio, contacts
- Indexing on frequently queried columns
- Regular backups (daily)
- Database optimization

### 16.3 File Permissions

- public_html: 755
- Files: 644
- Writable directories: 777 (tmp, uploads, logs)
- .htaccess: 644

### 16.4 Email Configuration

- SMTP server setup
- Mail from addresses
- Bounce handling
- Spam filter configuration

---

## 17. MAINTENANCE & UPDATES

### 17.1 Regular Maintenance Tasks

**Weekly:**

- Check server uptime
- Review error logs
- Monitor backups

**Monthly:**

- Database optimization
- Update product inventory
- Blog content updates
- Security patching

**Quarterly:**

- Full backup verification
- Performance analysis
- User feedback review
- Feature prioritization

### 17.2 Content Updates

**Product Management:**

- Add new plants/products
- Update prices
- Modify descriptions
- Add seasonal items
- Manage inventory

**Blog Management:**

- Publish care guides
- Share farming tips
- Update case studies
- Community stories

**Design Updates:**

- Seasonal banner changes
- Feature highlights
- Promotional campaigns
- Layout improvements

---

## 18. SUPPORT & CONTACT

**Admin Contact:**

- Email: balajinursery2110@gmail.com
- Phone: 8618834969 / 9481021545
- Hours: Mon - Sun, 9 AM to 6 PM
- Address: Balaji Nursery, Hayana bavi near, Mathihalli golara hatti gate, Tiptur Tumkur dist-572201

**Social Media:**

- Facebook: [Link]
- Twitter: [Link]
- Instagram: [Link]
- LinkedIn: [Link]

---

## 19. DOCUMENT REVISION HISTORY

| Version | Date       | Author      | Changes                             |
| ------- | ---------- | ----------- | ----------------------------------- |
| 1.0     | March 2026 | AI Analysis | Initial comprehensive specification |

---

## 20. APPENDIX: FILE CHECKLIST FOR REBUILD

### HTML Files (11 Total)

- [ ] index.html - Homepage
- [ ] about.html - About page
- [ ] shop.html - Product listing
- [ ] shop-details.html - Single product detail
- [ ] cart.html - Shopping cart
- [ ] checkout.html - Checkout process
- [ ] portfolio.html - Portfolio/projects listing
- [ ] single-portfolio.html - Single project detail
- [ ] blog.html - Blog listing
- [ ] single-post.html - Single blog post
- [ ] contact.html - Contact page

### CSS Files (12 Total)

- [ ] style.css (compiled main stylesheet)
- [ ] css/bootstrap.min.css
- [ ] css/font-awesome.min.css
- [ ] css/classy-nav.css
- [ ] css/owl.carousel.min.css
- [ ] css/magnific-popup.css
- [ ] css/elegant-icon.css
- [ ] css/animate.css
- [ ] scss/\_fonts.scss
- [ ] scss/\_mixin.scss
- [ ] scss/\_responsive.scss
- [ ] scss/\_theme_color.scss

### JavaScript Files (Core 5 Categories)

- [ ] js/active.js (custom functionality)
- [ ] js/bootstrap/ (Bootstrap components)
- [ ] js/jquery/ (jQuery library)
- [ ] js/plugins/ (All jQuery plugins)

### Image Directories

- [ ] img/core-img/ (logos, icons)
- [ ] img/bg-img/ (backgrounds)
- [ ] img/popular plants/ (product images)
- [ ] fonts/ (web fonts)

### Backend Requirements

- [ ] Contact form processor
- [ ] Shopping cart backend
- [ ] Order management system
- [ ] Product database
- [ ] Blog content management
- [ ] Customer account system
- [ ] Payment gateway integration
- [ ] Email notification system

---

**End of Document**

This specification provides comprehensive documentation for rebuilding Balaji Plantation Nursery website from scratch while preserving all existing features, functionality, and user experience.

<?php
/**
 * Run To Win Physiotherapy Theme Functions & Definitions
 *
 * @package Run_To_Win_Physio
 */

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

function rtw_physio_setup() {
    // Make theme available for translation
    load_theme_textdomain('run-to-win-physio', get_template_directory() . '/languages');

    // Add default posts and comments RSS feed links to head
    add_theme_support('automatic-feed-links');

    // Let WordPress manage the document title
    add_theme_support('title-tag');

    // Enable support for Post Thumbnails on posts and pages
    add_theme_support('post-thumbnails');

    // Register Primary Navigation Menu
    register_nav_menus(array(
        'primary' => esc_html__('Primary Header Menu', 'run-to-win-physio'),
        'footer'  => esc_html__('Footer Quick Links', 'run-to-win-physio'),
    ));

    // Switch default core markup for search form, comment form, and comments to HTML5
    add_theme_support('html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
        'style',
        'script',
    ));

    // Custom Logo support
    add_theme_support('custom-logo', array(
        'height'      => 80,
        'width'       => 280,
        'flex-height' => true,
        'flex-width'  => true,
    ));

    // Align wide & block styles
    add_theme_support('align-wide');
    add_theme_support('responsive-embeds');
}
add_action('after_setup_theme', 'rtw_physio_setup');

/**
 * Enqueue scripts and styles.
 */
function rtw_physio_scripts() {
    // Google Fonts: Plus Jakarta Sans & Outfit
    wp_enqueue_style(
        'rtw-google-fonts',
        'https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&display=swap',
        array(),
        null
    );

    // Tailwind CSS Play CDN for ultra-fast, responsive styling on WP
    wp_enqueue_script(
        'rtw-tailwind',
        'https://cdn.tailwindcss.com',
        array(),
        '3.4.1',
        false
    );

    // Lucide Icons CDN
    wp_enqueue_script(
        'rtw-lucide',
        'https://unpkg.com/lucide@latest',
        array(),
        null,
        true
    );

    // Main Theme Stylesheet
    wp_enqueue_style('rtw-style', get_stylesheet_uri(), array(), '1.0.0');

    // Main Custom JS for Interactivity (Body pain map, appointment modal, FAQ accordion, filter tabs)
    wp_enqueue_script(
        'rtw-main-js',
        get_template_directory_uri() . '/assets/js/theme-main.js',
        array('jquery'),
        '1.0.0',
        true
    );

    // Localize Script for AJAX Booking
    wp_localize_script('rtw-main-js', 'rtwPhysioAjax', array(
        'ajax_url' => admin_url('admin-ajax.php'),
        'nonce'    => wp_create_nonce('rtw_physio_booking_nonce'),
        'whatsapp_number' => '919833633857',
        'phone_number'    => '+919833633857',
    ));
}
add_action('wp_enqueue_scripts', 'rtw_physio_scripts');

/**
 * Add Tailwind custom configuration directly into WP header
 */
function rtw_physio_tailwind_config() {
    ?>
    <script>
      tailwind.config = {
        theme: {
          extend: {
            fontFamily: {
              sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
              heading: ['"Outfit"', 'system-ui', 'sans-serif'],
            },
            colors: {
              brand: {
                50: '#eff6ff',
                100: '#dbeafe',
                200: '#bfdbfe',
                300: '#93c5fd',
                400: '#60a5fa',
                500: '#3b82f6',
                600: '#2563eb',
                700: '#1d4ed8',
                800: '#1e40af',
                900: '#1e3a8a',
              }
            }
          }
        }
      }
    </script>
    <?php
}
add_action('wp_head', 'rtw_physio_tailwind_config', 5);

/**
 * Handle AJAX Booking Form Submission in WordPress
 */
function rtw_physio_handle_booking() {
    check_ajax_referer('rtw_physio_booking_nonce', 'security');

    $patient_name   = sanitize_text_field($_POST['patient_name'] ?? '');
    $phone_number   = sanitize_text_field($_POST['phone_number'] ?? '');
    $service_type   = sanitize_text_field($_POST['service_type'] ?? 'General Assessment');
    $preferred_date = sanitize_text_field($_POST['preferred_date'] ?? '');
    $preferred_slot = sanitize_text_field($_POST['preferred_slot'] ?? '');
    $care_mode      = sanitize_text_field($_POST['care_mode'] ?? 'Clinic Visit');
    $area_location  = sanitize_text_field($_POST['area_location'] ?? '');
    $pain_details   = sanitize_textarea_field($_POST['pain_details'] ?? '');

    if (empty($patient_name) || empty($phone_number)) {
        wp_send_json_error(array('message' => 'Please provide your name and contact phone number.'));
    }

    // Send email to clinic admin
    $admin_email = get_option('admin_email');
    $subject = sprintf('[New Appointment Request] %s - %s', $patient_name, $care_mode);
    
    $message = "New appointment booking request received from website:\n\n";
    $message .= "Patient Name: {$patient_name}\n";
    $message .= "Phone: {$phone_number}\n";
    $message .= "Care Mode: {$care_mode}\n";
    $message .= "Service: {$service_type}\n";
    if (!empty($area_location)) {
        $message .= "Mumbai Area / Address: {$area_location}\n";
    }
    $message .= "Preferred Date: {$preferred_date}\n";
    $message .= "Preferred Time Slot: {$preferred_slot}\n";
    $message .= "Pain Condition Details:\n{$pain_details}\n\n";
    $message .= "---\nRun To Win Physiotherapy Booking System";

    $headers = array('Content-Type: text/plain; charset=UTF-8');
    @wp_mail($admin_email, $subject, $message, $headers);

    wp_send_json_success(array(
        'message' => 'Your appointment request has been submitted! Dr Pawan Gupta\'s team will confirm via WhatsApp/Call within 15 minutes.',
        'whatsapp_url' => 'https://wa.me/919833633857?text=' . urlencode("Hello Dr Pawan Gupta, I submitted an appointment request for {$patient_name} ({$service_type} - {$care_mode}) on {$preferred_date}.")
    ));
}
add_action('wp_ajax_rtw_book_appointment', 'rtw_physio_handle_booking');
add_action('wp_ajax_nopriv_rtw_book_appointment', 'rtw_physio_handle_booking');

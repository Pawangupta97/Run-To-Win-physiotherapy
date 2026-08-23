<?php
/**
 * Header Template for Run To Win Physiotherapy Theme
 *
 * @package Run_To_Win_Physio
 */
?><!DOCTYPE html>
<html <?php language_attributes(); ?> class="scroll-smooth">
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="profile" href="https://gmpg.org/xfn/11">
    <?php wp_head(); ?>
</head>
<body <?php body_class('bg-white text-slate-800 antialiased selection:bg-blue-600 selection:text-white'); ?>>
<?php wp_body_open(); ?>

<!-- Top Urgent Emergency & Home Visit Ribbon -->
<aside aria-label="Announcement" class="bg-slate-900 text-slate-200 text-xs py-2 px-4 border-b border-slate-800">
  <div class="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
    <div class="flex items-center space-x-2 text-center sm:text-left">
      <span class="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
        <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-1.5 animate-pulse"></span>
        OPEN TODAY
      </span>
      <span class="text-slate-300">
        Sewri Clinic &amp; Mumbai Home Visits (8:00 AM – 9:00 PM)
      </span>
    </div>

    <div class="flex items-center space-x-4 text-xs font-medium">
      <a href="tel:+919833633857" class="text-blue-300 hover:text-white flex items-center space-x-1 transition">
        <i data-lucide="phone" class="w-3.5 h-3.5"></i>
        <span>+91 98336 33857</span>
      </a>
      <span class="text-slate-700 hidden sm:inline">•</span>
      <a href="https://wa.me/919833633857?text=Hello%20Dr%20Pawan%20Gupta,%20I%20would%20like%20to%20consult%20for%20physiotherapy." target="_blank" rel="noopener noreferrer" class="text-emerald-400 hover:text-emerald-300 flex items-center space-x-1 transition">
        <i data-lucide="message-square" class="w-3.5 h-3.5"></i>
        <span>Instant WhatsApp</span>
      </a>
    </div>
  </div>
</aside>

<!-- Main Navigation Bar -->
<header class="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-all duration-200 shadow-sm" id="site-header">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between h-20">
      
      <!-- Brand Logo & Identity -->
      <a href="<?php echo esc_url(home_url('/')); ?>" class="flex items-center space-x-3 group">
        <img 
          src="<?php echo esc_url(get_template_directory_uri() . '/assets/images/regenerated_image_1787083514422.jpg'); ?>" 
          alt="Run To Win Physiotherapy Logo" 
          class="h-12 w-12 rounded-xl object-contain shadow-sm border border-slate-200 bg-white p-0.5 group-hover:scale-105 transition-transform"
        />
        <div class="flex flex-col">
          <div class="flex items-center space-x-1.5">
            <span class="text-lg font-black tracking-tight text-slate-900 font-heading">
              RUN TO WIN
            </span>
            <span class="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-blue-100 text-blue-800">
              PHYSIOTHERAPY
            </span>
          </div>
          <span class="text-[11px] font-semibold text-slate-500 tracking-wide">
            Dr Pawan Gupta (PT) • Sewri &amp; Mumbai Home Visits
          </span>
        </div>
      </a>

      <!-- Desktop Navigation Menu Links -->
      <nav class="hidden lg:flex items-center space-x-7 text-sm font-semibold text-slate-700">
        <a href="#services" class="hover:text-blue-600 transition">Services</a>
        <a href="#pain-map" class="hover:text-blue-600 transition flex items-center space-x-1">
          <span>Body Pain Triage</span>
          <span class="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
        </a>
        <a href="#doctor" class="hover:text-blue-600 transition">Dr Pawan Gupta</a>
        <a href="#home-care" class="hover:text-blue-600 transition">Home Visits</a>
        <a href="#reviews" class="hover:text-blue-600 transition flex items-center space-x-1">
          <span>Reviews</span>
          <span class="text-[10px] text-amber-500 font-bold">4.9 ★</span>
        </a>
        <a href="#faq" class="hover:text-blue-600 transition">FAQ</a>
        <a href="#contact" class="hover:text-blue-600 transition">Clinic Location</a>
      </nav>

      <!-- CTA Action Buttons -->
      <div class="hidden md:flex items-center space-x-3">
        <a 
          href="https://wa.me/919833633857?text=Hello%20Dr%20Pawan%20Gupta,%20I%20would%20like%20to%20book%20a%20physiotherapy%20session."
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center space-x-1.5 px-4 py-2.5 rounded-full text-xs font-bold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition shadow-sm"
        >
          <i data-lucide="message-square" class="w-4 h-4 text-emerald-600"></i>
          <span>WhatsApp Consultation</span>
        </a>

        <button 
          type="button"
          onclick="openBookingModal('General Physiotherapy Consultation')"
          class="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-500/20 transition-all hover:scale-105 active:scale-95"
        >
          <i data-lucide="calendar" class="w-4 h-4"></i>
          <span>Book Appointment</span>
        </button>
      </div>

      <!-- Mobile Menu Button -->
      <button 
        type="button"
        id="mobile-menu-toggle"
        class="lg:hidden p-2.5 rounded-xl text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
        aria-label="Toggle Navigation Menu"
      >
        <i data-lucide="menu" class="w-6 h-6"></i>
      </button>

    </div>
  </div>

  <!-- Mobile Collapsible Menu -->
  <div id="mobile-menu" class="hidden lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-lg">
    <a href="#services" class="block py-2 text-sm font-semibold text-slate-800 border-b border-slate-100">Specialized Services</a>
    <a href="#pain-map" class="block py-2 text-sm font-semibold text-slate-800 border-b border-slate-100">Interactive Body Pain Map</a>
    <a href="#doctor" class="block py-2 text-sm font-semibold text-slate-800 border-b border-slate-100">Dr Pawan Gupta (PT) Profile</a>
    <a href="#home-care" class="block py-2 text-sm font-semibold text-slate-800 border-b border-slate-100">Mumbai Home Care Physiotherapy</a>
    <a href="#reviews" class="block py-2 text-sm font-semibold text-slate-800 border-b border-slate-100">Patient Reviews &amp; Outcomes</a>
    <a href="#faq" class="block py-2 text-sm font-semibold text-slate-800 border-b border-slate-100">Frequently Asked Questions</a>
    <a href="#contact" class="block py-2 text-sm font-semibold text-slate-800 border-b border-slate-100">Sewri Clinic Map &amp; Timings</a>

    <div class="pt-2 flex flex-col gap-2">
      <button 
        type="button"
        onclick="openBookingModal('General Consultation'); document.getElementById('mobile-menu').classList.add('hidden');"
        class="w-full py-3 rounded-xl font-bold text-sm text-white bg-blue-600 hover:bg-blue-700 text-center shadow-md flex items-center justify-center space-x-2"
      >
        <i data-lucide="calendar" class="w-4 h-4"></i>
        <span>Book Consultation Now</span>
      </button>
      <a 
        href="tel:+919833633857"
        class="w-full py-2.5 rounded-xl font-bold text-xs text-slate-700 bg-slate-100 hover:bg-slate-200 text-center flex items-center justify-center space-x-2"
      >
        <i data-lucide="phone" class="w-4 h-4 text-blue-600"></i>
        <span>Call: +91 98336 33857</span>
      </a>
    </div>
  </div>
</header>

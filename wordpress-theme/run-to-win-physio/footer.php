<?php
/**
 * Footer Template for Run To Win Physiotherapy Theme
 *
 * @package Run_To_Win_Physio
 */
?>

<!-- Global Appointment Booking Modal -->
<div id="booking-modal" class="fixed inset-0 z-50 hidden bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4">
  <div class="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 max-h-[90vh] overflow-y-auto relative animate-in fade-in zoom-in-95 duration-200">
    <button 
      type="button"
      onclick="closeBookingModal()"
      class="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition"
      aria-label="Close Modal"
    >
      <i data-lucide="x" class="w-5 h-5"></i>
    </button>

    <div class="space-y-4">
      <div class="flex items-center space-x-3">
        <div class="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
          <i data-lucide="calendar" class="w-6 h-6"></i>
        </div>
        <div>
          <h3 class="text-xl font-bold text-slate-900 font-heading">Book Physiotherapy Session</h3>
          <p class="text-xs text-slate-500">Dr Pawan Gupta (PT) • Sewri Clinic &amp; Mumbai Home Visits</p>
        </div>
      </div>

      <div id="booking-alert" class="hidden p-3 rounded-xl text-xs font-semibold"></div>

      <form id="wp-booking-form" class="space-y-3.5 pt-2">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label class="block text-xs font-bold text-slate-700 mb-1">Patient Name *</label>
            <input type="text" name="patient_name" required placeholder="Full Name" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" />
          </div>
          <div>
            <label class="block text-xs font-bold text-slate-700 mb-1">Phone Number (WhatsApp) *</label>
            <input type="tel" name="phone_number" required placeholder="10-digit Mobile Number" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" />
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label class="block text-xs font-bold text-slate-700 mb-1">Care Mode *</label>
            <select name="care_mode" id="care-mode-select" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-blue-500 outline-none bg-white">
              <option value="Clinic Visit (Sewri East)">Clinic Visit (Sewri East)</option>
              <option value="Home Visit (Anywhere in Mumbai)">Home Visit (Anywhere in Mumbai)</option>
              <option value="Online Video Triage">Online Video Triage</option>
            </select>
          </div>
          <div>
            <label class="block text-xs font-bold text-slate-700 mb-1">Treatment / Service *</label>
            <select name="service_type" id="modal-service-select" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-blue-500 outline-none bg-white">
              <option value="Orthopedic &amp; Spine Rehab">Orthopedic &amp; Spine Rehab</option>
              <option value="Sports Injury &amp; Athletic Performance">Sports Injury &amp; Athletic Performance</option>
              <option value="Post-Operative TKR/THR Recovery">Post-Operative TKR/THR Recovery</option>
              <option value="Dedicated Mumbai Home Visit">Dedicated Mumbai Home Visit</option>
              <option value="Neurological &amp; Stroke Rehab">Neurological &amp; Stroke Rehab</option>
              <option value="Dry Needling &amp; Cupping Therapy">Dry Needling &amp; Cupping Therapy</option>
              <option value="Corporate Ergonomics &amp; Posture">Corporate Ergonomics &amp; Posture</option>
              <option value="Geriatric &amp; Senior Mobility">Geriatric &amp; Senior Mobility</option>
            </select>
          </div>
        </div>

        <div id="home-address-field" class="hidden">
          <label class="block text-xs font-bold text-slate-700 mb-1">Mumbai Area / Residence Address</label>
          <input type="text" name="area_location" placeholder="e.g., Bandra West, Dadar, Worli, Andheri..." class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-blue-500 outline-none" />
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label class="block text-xs font-bold text-slate-700 mb-1">Preferred Date</label>
            <input type="date" name="preferred_date" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-blue-500 outline-none" />
          </div>
          <div>
            <label class="block text-xs font-bold text-slate-700 mb-1">Preferred Time Slot</label>
            <select name="preferred_slot" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-blue-500 outline-none bg-white">
              <option value="Morning (8:00 AM – 12:00 PM)">Morning (8:00 AM – 12:00 PM)</option>
              <option value="Afternoon (12:00 PM – 4:00 PM)">Afternoon (12:00 PM – 4:00 PM)</option>
              <option value="Evening (4:00 PM – 9:00 PM)">Evening (4:00 PM – 9:00 PM)</option>
            </select>
          </div>
        </div>

        <div>
          <label class="block text-xs font-bold text-slate-700 mb-1">Describe Pain / Medical Condition</label>
          <textarea name="pain_details" rows="2" placeholder="e.g., Lower back pain radiating to left leg since 3 weeks..." class="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-blue-500 outline-none"></textarea>
        </div>

        <div class="pt-2 flex flex-col sm:flex-row gap-3">
          <button 
            type="submit" 
            id="modal-submit-btn"
            class="flex-1 py-3 px-6 rounded-xl font-bold text-sm text-white bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-500/20 transition flex items-center justify-center space-x-2"
          >
            <i data-lucide="check-circle" class="w-4 h-4"></i>
            <span>Confirm &amp; Send to Doctor</span>
          </button>
          <button 
            type="button" 
            onclick="sendDirectWhatsAppFromModal()" 
            class="py-3 px-5 rounded-xl font-bold text-xs text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition flex items-center justify-center space-x-1.5"
          >
            <i data-lucide="message-square" class="w-4 h-4 text-emerald-600"></i>
            <span>Send on WhatsApp</span>
          </button>
        </div>
      </form>
    </div>
  </div>
</div>

<!-- Main Footer Section -->
<footer class="bg-slate-950 text-slate-300 pt-16 pb-24 lg:pb-12 border-t border-slate-800" id="contact">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      
      <!-- Brand & Doctor Info -->
      <div class="space-y-4">
        <div class="flex items-center space-x-3">
          <img 
            src="<?php echo esc_url(get_template_directory_uri() . '/assets/images/regenerated_image_1787083514422.jpg'); ?>" 
            alt="Run To Win Logo" 
            class="h-10 w-10 rounded-lg object-contain bg-white p-0.5"
          />
          <div>
            <h4 class="text-base font-bold text-white font-heading">RUN TO WIN</h4>
            <p class="text-xs text-blue-400 font-semibold">Physiotherapy Care To Cure</p>
          </div>
        </div>

        <p class="text-xs text-slate-400 leading-relaxed">
          Led by <strong>Dr Pawan Gupta (PT)</strong>, delivering evidence-based musculoskeletal, orthopedic, spine, and neuro rehabilitation across Mumbai with dedicated clinic &amp; doorstep home care.
        </p>

        <div class="pt-2 flex items-center space-x-2">
          <div class="flex text-amber-400">
            <i data-lucide="star" class="w-4 h-4 fill-amber-400"></i>
            <i data-lucide="star" class="w-4 h-4 fill-amber-400"></i>
            <i data-lucide="star" class="w-4 h-4 fill-amber-400"></i>
            <i data-lucide="star" class="w-4 h-4 fill-amber-400"></i>
            <i data-lucide="star" class="w-4 h-4 fill-amber-400"></i>
          </div>
          <span class="text-xs font-bold text-white">4.9 / 5.0 (128+ Verified Reviews)</span>
        </div>
      </div>

      <!-- Quick Clinic Links -->
      <div class="space-y-3">
        <h4 class="text-sm font-bold text-white uppercase tracking-wider font-heading">Specialized Rehab</h4>
        <ul class="space-y-2 text-xs text-slate-400">
          <li><a href="#services" class="hover:text-white transition">Orthopedic &amp; Spine Rehabilitation</a></li>
          <li><a href="#services" class="hover:text-white transition">Sports Injury &amp; ACL Recovery</a></li>
          <li><a href="#services" class="hover:text-white transition">Post-Surgical TKR &amp; THR Rehab</a></li>
          <li><a href="#home-care" class="hover:text-white transition">Mumbai Home Care Visits</a></li>
          <li><a href="#services" class="hover:text-white transition">Stroke &amp; Paralysis Neuro Rehab</a></li>
          <li><a href="#services" class="hover:text-white transition">Dry Needling &amp; Cupping Therapy</a></li>
        </ul>
      </div>

      <!-- Clinic Timings & Service Area -->
      <div class="space-y-3">
        <h4 class="text-sm font-bold text-white uppercase tracking-wider font-heading">Timings &amp; Coverage</h4>
        <div class="space-y-2 text-xs text-slate-400">
          <div class="flex items-start space-x-2">
            <i data-lucide="clock" class="w-4 h-4 text-blue-400 shrink-0 mt-0.5"></i>
            <div>
              <p class="font-bold text-white">Mon – Sat:</p>
              <p>8:00 AM – 9:00 PM</p>
            </div>
          </div>
          <div class="flex items-start space-x-2">
            <i data-lucide="clock" class="w-4 h-4 text-emerald-400 shrink-0 mt-0.5"></i>
            <div>
              <p class="font-bold text-white">Sunday:</p>
              <p>9:00 AM – 2:00 PM (Prior Appt)</p>
            </div>
          </div>
          <div class="flex items-start space-x-2 pt-1">
            <i data-lucide="map-pin" class="w-4 h-4 text-rose-400 shrink-0 mt-0.5"></i>
            <div>
              <p class="font-bold text-white">Mumbai Home Care:</p>
              <p>South Mumbai, Central &amp; Western Suburbs (7:00 AM – 8:30 PM)</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Direct Contact & Address -->
      <div class="space-y-3">
        <h4 class="text-sm font-bold text-white uppercase tracking-wider font-heading">Clinic Contact</h4>
        <div class="space-y-2.5 text-xs text-slate-400">
          <div class="flex items-start space-x-2">
            <i data-lucide="map-pin" class="w-4 h-4 text-blue-400 shrink-0 mt-0.5"></i>
            <span>Shop No. 4, Ground Floor, Near Sewri Station, Sewri East, Mumbai, Maharashtra 400015</span>
          </div>
          <div class="flex items-center space-x-2">
            <i data-lucide="phone" class="w-4 h-4 text-emerald-400 shrink-0"></i>
            <a href="tel:+919833633857" class="text-white font-bold hover:text-emerald-400 transition">+91 98336 33857</a>
          </div>
          <div class="flex items-center space-x-2">
            <i data-lucide="message-square" class="w-4 h-4 text-emerald-400 shrink-0"></i>
            <a href="https://wa.me/919833633857" target="_blank" rel="noopener noreferrer" class="text-emerald-400 font-bold hover:underline">WhatsApp Direct Consult</a>
          </div>
        </div>

        <div class="pt-2">
          <button 
            type="button"
            onclick="openBookingModal('General Consultation')"
            class="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 transition text-center shadow"
          >
            Book Consultation
          </button>
        </div>
      </div>

    </div>

    <!-- Copyright & Disclaimer -->
    <div class="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
      <p>&copy; <?php echo date('Y'); ?> Run To Win Healthcare Services. Dr Pawan Gupta (PT). All rights reserved.</p>
      <div class="flex items-center space-x-4">
        <a href="#services" class="hover:text-slate-400">Services</a>
        <a href="#doctor" class="hover:text-slate-400">Doctor</a>
        <a href="#faq" class="hover:text-slate-400">FAQ</a>
        <a href="#contact" class="hover:text-slate-400">Location</a>
      </div>
    </div>

  </div>
</footer>

<!-- Sticky Mobile Action Bar -->
<div class="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white/95 backdrop-blur-md border-t border-slate-200 p-2.5 px-4 flex items-center justify-between gap-3 shadow-2xl">
  <a 
    href="tel:+919833633857" 
    class="flex-1 py-2.5 px-3 rounded-xl bg-slate-900 text-white font-bold text-xs flex items-center justify-center space-x-1.5 shadow"
  >
    <i data-lucide="phone" class="w-3.5 h-3.5 text-blue-400"></i>
    <span>Call Doctor</span>
  </a>
  <a 
    href="https://wa.me/919833633857?text=Hello%20Dr%20Pawan%20Gupta,%20I%20would%20like%20to%20consult%20for%20physiotherapy." 
    target="_blank" 
    rel="noopener noreferrer"
    class="flex-1 py-2.5 px-3 rounded-xl bg-emerald-600 text-white font-bold text-xs flex items-center justify-center space-x-1.5 shadow"
  >
    <i data-lucide="message-square" class="w-3.5 h-3.5"></i>
    <span>WhatsApp</span>
  </a>
  <button 
    type="button"
    onclick="openBookingModal('General Consultation')" 
    class="flex-1 py-2.5 px-3 rounded-xl bg-blue-600 text-white font-bold text-xs flex items-center justify-center space-x-1.5 shadow"
  >
    <i data-lucide="calendar" class="w-3.5 h-3.5"></i>
    <span>Book Appt</span>
  </button>
</div>

<!-- LocalBusiness JSON-LD Schema for Google SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "PhysiotherapyClinic",
  "name": "Run To Win Physiotherapy - Dr Pawan Gupta (PT)",
  "image": "<?php echo esc_url(get_template_directory_uri() . '/assets/images/regenerated_image_1787083514422.jpg'); ?>",
  "telephone": "+919833633857",
  "url": "<?php echo esc_url(home_url('/')); ?>",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Shop No. 4, Ground Floor, Near Sewri Station",
    "addressLocality": "Sewri East, Mumbai",
    "addressRegion": "Maharashtra",
    "postalCode": "400015",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 19.0017,
    "longitude": 72.8596
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "128"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "08:00",
      "closes": "21:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Sunday"],
      "opens": "09:00",
      "closes": "14:00"
    }
  ]
}
</script>

<?php wp_footer(); ?>
</body>
</html>

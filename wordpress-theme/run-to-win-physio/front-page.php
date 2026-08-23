<?php
/**
 * Front Page Template for Run To Win Physiotherapy WordPress Theme
 *
 * @package Run_To_Win_Physio
 */

get_header();

$theme_uri = get_template_directory_uri();
?>

<main id="primary" class="site-main">

  <!-- HERO SECTION -->
  <section class="relative bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white pt-12 pb-20 overflow-hidden">
    <div class="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:24px_24px] opacity-15"></div>
    <div class="absolute top-1/4 -left-32 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none"></div>
    <div class="absolute top-1/3 -right-32 w-96 h-96 bg-emerald-600/15 rounded-full blur-3xl pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        <!-- Left Hero Copy & CTAs -->
        <div class="lg:col-span-7 space-y-6 text-center lg:text-left">
          
          <div class="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 text-xs font-bold tracking-wide shadow-sm">
            <i data-lucide="shield-check" class="w-4 h-4 text-blue-400"></i>
            <span>MEMBER INDIAN ASSOCIATION OF PHYSIOTHERAPISTS (MIAP)</span>
          </div>

          <h1 class="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight font-heading">
            Live Pain-Free. <br class="hidden sm:inline" />
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-emerald-400">
              Evidence-Based Physiotherapy
            </span> in Mumbai.
          </h1>

          <p class="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            Led by <strong>Dr Pawan Gupta (PT)</strong> with <strong>8+ Years Experience</strong> and <strong>1,000+ Recovered Patients</strong>. We cure severe sciatica, slip disc, knee arthritis, sports injuries, and post-op joint replacements without unnecessary surgeries.
          </p>

          <!-- Quick Interactive Pain Selector Buttons -->
          <div class="pt-2">
            <p class="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Where is your pain located?</p>
            <div class="flex flex-wrap gap-2 justify-center lg:justify-start">
              <a href="#pain-map" class="px-3 py-1.5 rounded-xl bg-slate-800/90 hover:bg-blue-600/40 border border-slate-700 text-xs font-semibold text-slate-200 transition">⚡ Lower Back / Sciatica</a>
              <a href="#pain-map" class="px-3 py-1.5 rounded-xl bg-slate-800/90 hover:bg-blue-600/40 border border-slate-700 text-xs font-semibold text-slate-200 transition">⚡ Knee Pain / TKR</a>
              <a href="#pain-map" class="px-3 py-1.5 rounded-xl bg-slate-800/90 hover:bg-blue-600/40 border border-slate-700 text-xs font-semibold text-slate-200 transition">⚡ Frozen Shoulder</a>
              <a href="#pain-map" class="px-3 py-1.5 rounded-xl bg-slate-800/90 hover:bg-blue-600/40 border border-slate-700 text-xs font-semibold text-slate-200 transition">⚡ Cervical Neck Stiffness</a>
              <a href="#pain-map" class="px-3 py-1.5 rounded-xl bg-slate-800/90 hover:bg-blue-600/40 border border-slate-700 text-xs font-semibold text-slate-200 transition">⚡ Sports &amp; ACL Rehab</a>
            </div>
          </div>

          <!-- Hero Action Buttons -->
          <div class="pt-4 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button 
              type="button" 
              onclick="openBookingModal('General Consultation')" 
              class="px-8 py-4 rounded-full font-bold text-sm text-white bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-500/30 transition transform hover:-translate-y-0.5 flex items-center justify-center space-x-2"
            >
              <i data-lucide="calendar" class="w-5 h-5"></i>
              <span>Book Appointment Online</span>
            </button>
            <a 
              href="https://wa.me/919833633857?text=Hello%20Dr%20Pawan%20Gupta,%20I%20would%20like%20to%20consult%20for%20physiotherapy." 
              target="_blank" 
              rel="noopener noreferrer" 
              class="px-8 py-4 rounded-full font-bold text-sm text-emerald-400 bg-slate-800 hover:bg-slate-700 border border-emerald-500/40 transition flex items-center justify-center space-x-2 shadow"
            >
              <i data-lucide="message-square" class="w-5 h-5 text-emerald-400"></i>
              <span>Chat on WhatsApp</span>
            </a>
          </div>

        </div>

        <!-- Right Hero Visual Card -->
        <div class="lg:col-span-5">
          <div class="bg-white rounded-3xl shadow-2xl p-6 sm:p-7 border border-slate-100 text-slate-900 space-y-5 relative">
            
            <div class="relative h-56 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200">
              <img 
                src="<?php echo esc_url($theme_uri . '/assets/images/regenerated_image_1787088212933.png'); ?>" 
                alt="Dr Pawan Gupta Physiotherapy Clinic Session" 
                class="w-full h-full object-cover"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
              
              <div class="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-slate-800 flex items-center space-x-1.5 shadow">
                <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Sewri Clinic &amp; Mumbai Home Visits</span>
              </div>

              <div class="absolute bottom-3 left-3 right-3 text-white">
                <div class="flex items-center space-x-1.5">
                  <h3 class="text-base font-bold font-heading">Dr Pawan Gupta (PT)</h3>
                  <i data-lucide="shield-check" class="w-4 h-4 text-blue-400"></i>
                </div>
                <p class="text-[11px] text-blue-200">B.P.Th, M.P.Th • Consultant Physiotherapist</p>
              </div>
            </div>

            <!-- Stats Grid -->
            <div class="grid grid-cols-2 gap-3">
              <div class="bg-emerald-50 p-3.5 rounded-2xl border border-emerald-100">
                <div class="text-emerald-700 font-extrabold text-2xl font-heading">1,000+</div>
                <div class="text-[11px] text-emerald-600 font-bold uppercase tracking-wider mt-0.5">Patients Healed</div>
              </div>
              <div class="bg-blue-50 p-3.5 rounded-2xl border border-blue-100">
                <div class="text-blue-700 font-extrabold text-2xl font-heading">8+</div>
                <div class="text-[11px] text-blue-600 font-bold uppercase tracking-wider mt-0.5">Years Experience</div>
              </div>
            </div>

            <div class="p-3.5 rounded-2xl bg-slate-900 text-white flex items-center justify-between">
              <div>
                <span class="text-[10px] font-bold text-emerald-400 uppercase tracking-wider block">Urgent Clinical Triage</span>
                <span class="text-sm font-bold">+91 98336 33857</span>
              </div>
              <a href="tel:+919833633857" class="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs transition">
                Call Now
              </a>
            </div>

          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- SPECIALIZED SERVICES SECTION -->
  <section id="services" class="py-20 bg-slate-50 border-b border-slate-200 scroll-mt-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      <div class="text-center max-w-3xl mx-auto space-y-3">
        <span class="text-xs font-extrabold text-blue-600 uppercase tracking-wider px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200">
          Targeted Clinical Expertise
        </span>
        <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading">
          Comprehensive Specialized Physiotherapy
        </h2>
        <p class="text-sm text-slate-600 leading-relaxed">
          Advanced protocols combining joint mobilization, trigger point dry needling, spinal decompression, and progressive exercise biomechanics.
        </p>
      </div>

      <!-- Services Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        <!-- Service Card 1 -->
        <div class="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
          <div class="relative h-44 overflow-hidden bg-slate-100">
            <img src="<?php echo esc_url($theme_uri . '/assets/images/regenerated_image_1787088217070.png'); ?>" alt="Orthopedic & Spine Rehabilitation" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div class="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
            <span class="absolute top-3 right-3 text-[10px] font-bold px-2.5 py-1 rounded-full bg-blue-600 text-white">High Demand</span>
            <h3 class="absolute bottom-3 left-3 right-3 text-sm font-bold text-white font-heading">Orthopedic &amp; Spine Rehab</h3>
          </div>
          <div class="p-5 space-y-3 flex-1 flex flex-col justify-between">
            <p class="text-xs text-slate-600 leading-relaxed">
              Non-surgical recovery for chronic back pain, cervical neck stiffness, slip disc, sciatica, and joint arthritis.
            </p>
            <button type="button" onclick="openBookingModal('Orthopedic & Spine Rehabilitation')" class="w-full py-2 px-3 rounded-xl text-xs font-bold text-blue-600 bg-blue-50 hover:bg-blue-100 transition text-center">
              Book Orthopedic Rehab &rarr;
            </button>
          </div>
        </div>

        <!-- Service Card 2 -->
        <div class="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
          <div class="relative h-44 overflow-hidden bg-slate-100">
            <img src="<?php echo esc_url($theme_uri . '/assets/images/regenerated_image_1787088221289.png'); ?>" alt="Sports Injury & Athletic Performance" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div class="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
            <span class="absolute top-3 right-3 text-[10px] font-bold px-2.5 py-1 rounded-full bg-blue-600 text-white">Athletes</span>
            <h3 class="absolute bottom-3 left-3 right-3 text-sm font-bold text-white font-heading">Sports &amp; Athletic Injury</h3>
          </div>
          <div class="p-5 space-y-3 flex-1 flex flex-col justify-between">
            <p class="text-xs text-slate-600 leading-relaxed">
              Evidence-based return-to-play for runners, gym athletes, ACL/ligament tears, rotator cuff, and ankle sprains.
            </p>
            <button type="button" onclick="openBookingModal('Sports Injury & Athletic Performance')" class="w-full py-2 px-3 rounded-xl text-xs font-bold text-blue-600 bg-blue-50 hover:bg-blue-100 transition text-center">
              Book Sports Rehab &rarr;
            </button>
          </div>
        </div>

        <!-- Service Card 3 -->
        <div class="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
          <div class="relative h-44 overflow-hidden bg-slate-100">
            <img src="<?php echo esc_url($theme_uri . '/assets/images/regenerated_image_1787088225175.png'); ?>" alt="Post-Surgical Joint & Spine Rehab" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div class="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
            <span class="absolute top-3 right-3 text-[10px] font-bold px-2.5 py-1 rounded-full bg-blue-600 text-white">Surgeon Approved</span>
            <h3 class="absolute bottom-3 left-3 right-3 text-sm font-bold text-white font-heading">Post-Operative TKR/THR</h3>
          </div>
          <div class="p-5 space-y-3 flex-1 flex flex-col justify-between">
            <p class="text-xs text-slate-600 leading-relaxed">
              Protocol-driven recovery following Total Knee/Hip Replacement (TKR/THR), ACL reconstruction, and spine surgery.
            </p>
            <button type="button" onclick="openBookingModal('Post-Surgical Joint Rehabilitation')" class="w-full py-2 px-3 rounded-xl text-xs font-bold text-blue-600 bg-blue-50 hover:bg-blue-100 transition text-center">
              Book Post-Op Rehab &rarr;
            </button>
          </div>
        </div>

        <!-- Service Card 4 -->
        <div class="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
          <div class="relative h-44 overflow-hidden bg-slate-100">
            <img src="<?php echo esc_url($theme_uri . '/assets/images/regenerated_image_1787088229284.png'); ?>" alt="Mumbai Home Care Visits" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div class="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
            <span class="absolute top-3 right-3 text-[10px] font-bold px-2.5 py-1 rounded-full bg-emerald-600 text-white">Doorstep Care</span>
            <h3 class="absolute bottom-3 left-3 right-3 text-sm font-bold text-white font-heading">Mumbai Home Visits</h3>
          </div>
          <div class="p-5 space-y-3 flex-1 flex flex-col justify-between">
            <p class="text-xs text-slate-600 leading-relaxed">
              Complete clinical physiotherapy setup brought right to your residence across Mumbai for post-op and seniors.
            </p>
            <button type="button" onclick="openBookingModal('Dedicated Mumbai Home Visit')" class="w-full py-2 px-3 rounded-xl text-xs font-bold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 transition text-center">
              Book Home Visit &rarr;
            </button>
          </div>
        </div>

        <!-- Service Card 5 -->
        <div class="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
          <div class="relative h-44 overflow-hidden bg-slate-100">
            <img src="<?php echo esc_url($theme_uri . '/assets/images/regenerated_image_1787088232497.png'); ?>" alt="Neurological Rehab & Stroke" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div class="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
            <span class="absolute top-3 right-3 text-[10px] font-bold px-2.5 py-1 rounded-full bg-blue-600 text-white">Intensive</span>
            <h3 class="absolute bottom-3 left-3 right-3 text-sm font-bold text-white font-heading">Neuro &amp; Stroke Rehab</h3>
          </div>
          <div class="p-5 space-y-3 flex-1 flex flex-col justify-between">
            <p class="text-xs text-slate-600 leading-relaxed">
              Neuroplasticity-focused therapy for Stroke (Paralysis), Parkinson's, Bell's Palsy, and gait re-education.
            </p>
            <button type="button" onclick="openBookingModal('Neurological Rehabilitation')" class="w-full py-2 px-3 rounded-xl text-xs font-bold text-blue-600 bg-blue-50 hover:bg-blue-100 transition text-center">
              Book Neuro Rehab &rarr;
            </button>
          </div>
        </div>

        <!-- Service Card 6 -->
        <div class="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
          <div class="relative h-44 overflow-hidden bg-slate-100">
            <img src="<?php echo esc_url($theme_uri . '/assets/images/regenerated_image_1787088240020.png'); ?>" alt="Dry Needling & Cupping" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div class="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
            <span class="absolute top-3 right-3 text-[10px] font-bold px-2.5 py-1 rounded-full bg-blue-600 text-white">Certified</span>
            <h3 class="absolute bottom-3 left-3 right-3 text-sm font-bold text-white font-heading">Dry Needling &amp; Cupping</h3>
          </div>
          <div class="p-5 space-y-3 flex-1 flex flex-col justify-between">
            <p class="text-xs text-slate-600 leading-relaxed">
              Target deep myofascial trigger points, chronic trapezius knots, and sports stiffness instantly with biomedical needling.
            </p>
            <button type="button" onclick="openBookingModal('Dry Needling & Cupping Therapy')" class="w-full py-2 px-3 rounded-xl text-xs font-bold text-blue-600 bg-blue-50 hover:bg-blue-100 transition text-center">
              Book Dry Needling &rarr;
            </button>
          </div>
        </div>

        <!-- Service Card 7 -->
        <div class="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
          <div class="relative h-44 overflow-hidden bg-slate-100">
            <img src="<?php echo esc_url($theme_uri . '/assets/images/regenerated_image_1787088933047.png'); ?>" alt="Corporate Ergonomics & Posture" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div class="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
            <span class="absolute top-3 right-3 text-[10px] font-bold px-2.5 py-1 rounded-full bg-blue-600 text-white">Corporate</span>
            <h3 class="absolute bottom-3 left-3 right-3 text-sm font-bold text-white font-heading">Corporate Ergonomics</h3>
          </div>
          <div class="p-5 space-y-3 flex-1 flex flex-col justify-between">
            <p class="text-xs text-slate-600 leading-relaxed">
              Scientific desk assessments, tech neck correction, spinal alignment, and corporate ergonomics across Mumbai hubs.
            </p>
            <button type="button" onclick="openBookingModal('Corporate Ergonomics & Posture')" class="w-full py-2 px-3 rounded-xl text-xs font-bold text-blue-600 bg-blue-50 hover:bg-blue-100 transition text-center">
              Book Ergonomics &rarr;
            </button>
          </div>
        </div>

        <!-- Service Card 8 -->
        <div class="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
          <div class="relative h-44 overflow-hidden bg-slate-100">
            <img src="<?php echo esc_url($theme_uri . '/assets/images/regenerated_image_1787088243680.png'); ?>" alt="Geriatric Physiotherapy & Fall Prevention" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div class="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
            <span class="absolute top-3 right-3 text-[10px] font-bold px-2.5 py-1 rounded-full bg-emerald-600 text-white">Senior Care</span>
            <h3 class="absolute bottom-3 left-3 right-3 text-sm font-bold text-white font-heading">Geriatric &amp; Senior Mobility</h3>
          </div>
          <div class="p-5 space-y-3 flex-1 flex flex-col justify-between">
            <p class="text-xs text-slate-600 leading-relaxed">
              Gentle balance therapy, joint lubrication, and fall prevention to keep senior citizens active and independent.
            </p>
            <button type="button" onclick="openBookingModal('Geriatric & Senior Mobility')" class="w-full py-2 px-3 rounded-xl text-xs font-bold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 transition text-center">
              Book Senior Care &rarr;
            </button>
          </div>
        </div>

      </div>

    </div>
  </section>

  <!-- INTERACTIVE BODY PAIN SYMPTOM TRIAGE SECTION -->
  <section id="pain-map" class="py-20 bg-white border-b border-slate-200 scroll-mt-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      <div class="text-center max-w-3xl mx-auto space-y-3">
        <span class="text-xs font-extrabold text-emerald-600 uppercase tracking-wider px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200">
          Self-Assessment &amp; Clinical Triage
        </span>
        <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading">
          Interactive Body Pain &amp; Symptom Map
        </h2>
        <p class="text-sm text-slate-600 leading-relaxed">
          Select a pain region below to understand common conditions, physiotherapy approaches, and recovery timelines.
        </p>
      </div>

      <!-- Quick Pain Region Selector Tabs -->
      <div class="flex flex-wrap gap-2.5 justify-center" id="pain-region-tabs">
        <button type="button" data-region="lower-back" class="pain-tab active px-4 py-2.5 rounded-full text-xs font-bold bg-blue-600 text-white shadow-md transition">Lower Back / Sciatica</button>
        <button type="button" data-region="cervical-neck" class="pain-tab px-4 py-2.5 rounded-full text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-700 transition">Neck &amp; Cervical</button>
        <button type="button" data-region="knee" class="pain-tab px-4 py-2.5 rounded-full text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-700 transition">Knee &amp; ACL</button>
        <button type="button" data-region="shoulder" class="pain-tab px-4 py-2.5 rounded-full text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-700 transition">Shoulder / Rotator Cuff</button>
        <button type="button" data-region="ankle-foot" class="pain-tab px-4 py-2.5 rounded-full text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-700 transition">Ankle &amp; Plantar Fascia</button>
        <button type="button" data-region="hip-pelvis" class="pain-tab px-4 py-2.5 rounded-full text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-700 transition">Hip &amp; Piriformis</button>
      </div>

      <!-- Pain Region Details Container -->
      <div id="pain-region-display" class="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-slate-800 max-w-4xl mx-auto space-y-6">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
          <div>
            <span class="text-xs font-bold text-blue-400 uppercase tracking-wider block" id="region-badge">LUMBAR SPINE &amp; SCIATICA</span>
            <h3 class="text-2xl font-bold font-heading text-white" id="region-title">Lower Back &amp; Sciatic Nerve Pain</h3>
          </div>
          <button 
            type="button" 
            onclick="openBookingModal('Lower Back / Sciatica Consultation')" 
            class="px-5 py-2.5 rounded-xl font-bold text-xs text-white bg-blue-600 hover:bg-blue-700 shadow-md transition self-start sm:self-auto"
          >
            Consult Doctor for this Area
          </button>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="space-y-3">
            <h4 class="text-xs font-bold text-slate-400 uppercase tracking-wider">Common Clinical Conditions:</h4>
            <ul id="region-conditions" class="space-y-2 text-xs text-slate-200">
              <li class="flex items-center space-x-2"><i data-lucide="check-circle" class="w-3.5 h-3.5 text-blue-400 shrink-0"></i><span>L4-L5 / L5-S1 Disc Bulge (Slip Disc)</span></li>
              <li class="flex items-center space-x-2"><i data-lucide="check-circle" class="w-3.5 h-3.5 text-blue-400 shrink-0"></i><span>Sciatica radiating pain &amp; leg numbness</span></li>
              <li class="flex items-center space-x-2"><i data-lucide="check-circle" class="w-3.5 h-3.5 text-blue-400 shrink-0"></i><span>Lumbar Canal Stenosis &amp; Spondylolisthesis</span></li>
              <li class="flex items-center space-x-2"><i data-lucide="check-circle" class="w-3.5 h-3.5 text-blue-400 shrink-0"></i><span>Chronic Postural Myofascial Spasm</span></li>
            </ul>
          </div>

          <div class="space-y-3">
            <h4 class="text-xs font-bold text-slate-400 uppercase tracking-wider">Our Evidence-Based Approach:</h4>
            <ul id="region-approaches" class="space-y-2 text-xs text-slate-200">
              <li class="flex items-center space-x-2"><i data-lucide="check-circle" class="w-3.5 h-3.5 text-emerald-400 shrink-0"></i><span>McKenzie MDT Spinal Decompression Protocols</span></li>
              <li class="flex items-center space-x-2"><i data-lucide="check-circle" class="w-3.5 h-3.5 text-emerald-400 shrink-0"></i><span>Deep Core Multifidus &amp; Transversus Activation</span></li>
              <li class="flex items-center space-x-2"><i data-lucide="check-circle" class="w-3.5 h-3.5 text-emerald-400 shrink-0"></i><span>Sciatic Nerve Gliding &amp; Neurodynamic Release</span></li>
              <li class="flex items-center space-x-2"><i data-lucide="check-circle" class="w-3.5 h-3.5 text-emerald-400 shrink-0"></i><span>Trigger Point Dry Needling for Gluteal Knots</span></li>
            </ul>
          </div>
        </div>

        <div class="pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-3">
          <div><strong class="text-white">Expected Recovery:</strong> <span id="region-recovery">3 to 6 weeks with non-surgical protocol.</span></div>
          <div><strong class="text-white">Modalities:</strong> <span id="region-modality">Spinal Traction + Dry Needling + Core Stabilizers</span></div>
        </div>

      </div>

    </div>
  </section>

  <!-- DOCTOR PROFILE SECTION -->
  <section id="doctor" class="py-20 bg-slate-50 border-b border-slate-200 scroll-mt-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        <!-- Left Doctor Visual Card -->
        <div class="lg:col-span-5">
          <div class="bg-gradient-to-tr from-slate-900 via-slate-800 to-blue-950 rounded-3xl p-7 text-white shadow-2xl relative overflow-hidden border border-slate-800 space-y-5">
            
            <div class="flex items-center space-x-4">
              <div class="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border-2 border-blue-400/50 shadow-lg shadow-blue-500/25 shrink-0 bg-slate-800">
                <img 
                  src="<?php echo esc_url($theme_uri . '/assets/images/regenerated_image_1787089379420.jpg'); ?>" 
                  alt="Dr Pawan Gupta (PT)" 
                  class="w-full h-full object-cover object-top"
                />
              </div>
              <div>
                <div class="flex items-center space-x-1.5">
                  <h3 class="text-xl sm:text-2xl font-extrabold text-white font-heading">Dr Pawan Gupta</h3>
                  <span class="text-emerald-400 font-bold">(PT)</span>
                </div>
                <p class="text-xs text-blue-300 font-semibold tracking-wide">Consultant Physiotherapist &amp; Rehab Specialist</p>
                <p class="text-xs text-slate-300 mt-1">8+ Years Clinical Excellence in Mumbai</p>
              </div>
            </div>

            <div class="grid grid-cols-2 gap-3 pt-1">
              <div class="p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700">
                <span class="text-2xl font-black text-blue-400 font-heading block">8+</span>
                <span class="text-xs text-slate-300">Years Experience</span>
              </div>
              <div class="p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700">
                <span class="text-2xl font-black text-emerald-400 font-heading block">1,000+</span>
                <span class="text-xs text-slate-300">Treated Patients</span>
              </div>
            </div>

            <div class="p-3 rounded-2xl bg-slate-800/60 border border-slate-700 flex items-center justify-between">
              <div class="flex items-center space-x-2">
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

            <button 
              type="button" 
              onclick="openBookingModal('Consultation with Dr Pawan Gupta')" 
              class="w-full py-3.5 px-6 rounded-2xl font-bold text-xs text-white bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-500/30 transition flex items-center justify-center space-x-2"
            >
              <i data-lucide="calendar" class="w-4 h-4"></i>
              <span>Book Appointment with Dr Pawan</span>
            </button>

          </div>
        </div>

        <!-- Right Doctor Credentials & Philosophy -->
        <div class="lg:col-span-7 space-y-6">
          <div class="space-y-2">
            <span class="text-xs font-extrabold text-blue-600 uppercase tracking-wider px-3 py-1 rounded-full bg-blue-50 border border-blue-200">
              Meet Your Specialist
            </span>
            <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading">
              Evidence-Based Recovery Focused on Non-Surgical Healing
            </h2>
            <p class="text-sm text-slate-600 leading-relaxed">
              Dr Pawan Gupta (PT) holds extensive postgraduate training in orthopedic biomechanics, sports rehabilitation, and neurological recovery. He believes that true rehabilitation goes beyond symptom suppression by re-aligning kinetic chains and strengthening deep stabilizing muscles.
            </p>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div class="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-1">
              <h4 class="text-xs font-bold text-slate-900">B.P.Th &amp; M.P.Th (Musculoskeletal)</h4>
              <p class="text-xs text-slate-600">Advanced postgraduate training in spine and sports biomechanics.</p>
            </div>
            <div class="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-1">
              <h4 class="text-xs font-bold text-slate-900">Certified Dry Needling (CDNP)</h4>
              <p class="text-xs text-slate-600">Biomedical trigger point release for deep stubborn muscular spasms.</p>
            </div>
            <div class="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-1">
              <h4 class="text-xs font-bold text-slate-900">Certified Manual Therapist (MIAP)</h4>
              <p class="text-xs text-slate-600">Maitland and Mulligan joint mobilizations for spine and peripheral joints.</p>
            </div>
            <div class="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-1">
              <h4 class="text-xs font-bold text-slate-900">Kinesiology Taping &amp; IASTM</h4>
              <p class="text-xs text-slate-600">Dynamic muscle offloading and instrument fascial mobilization.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- MUMBAI HOME CARE VISITS SECTION -->
  <section id="home-care" class="py-20 bg-slate-900 text-white scroll-mt-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div class="lg:col-span-6 space-y-6">
          <span class="text-xs font-extrabold text-emerald-400 uppercase tracking-wider px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30">
            Doorstep Clinical Physiotherapy
          </span>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-white font-heading">
            Dedicated Home Care Physiotherapy Across Mumbai
          </h2>
          <p class="text-sm text-slate-300 leading-relaxed">
            Eliminate the stress of Mumbai traffic and painful travel. We bring hospital-grade portable electrotherapy, ultrasound, mobilization equipment, and targeted exercise modalities directly to your doorstep.
          </p>

          <div class="space-y-3">
            <div class="flex items-start space-x-3 text-xs text-slate-200">
              <i data-lucide="check-circle" class="w-4 h-4 text-emerald-400 shrink-0 mt-0.5"></i>
              <span><strong>Total Knee &amp; Hip Replacement (TKR/THR):</strong> Immediate bedside mobilization and safe walker-to-walking gait progression.</span>
            </div>
            <div class="flex items-start space-x-3 text-xs text-slate-200">
              <i data-lucide="check-circle" class="w-4 h-4 text-emerald-400 shrink-0 mt-0.5"></i>
              <span><strong>Stroke &amp; Paralysis Recovery:</strong> Neuroplasticity, bed mobility, transfer training, and caregiver handling education.</span>
            </div>
            <div class="flex items-start space-x-3 text-xs text-slate-200">
              <i data-lucide="check-circle" class="w-4 h-4 text-emerald-400 shrink-0 mt-0.5"></i>
              <span><strong>Elderly Fall Prevention:</strong> Senior citizen balance audits, home safety assessments, and osteo-mobility routines.</span>
            </div>
          </div>

          <div class="pt-2 flex flex-col sm:flex-row gap-4">
            <button 
              type="button" 
              onclick="openBookingModal('Dedicated Mumbai Home Visit')" 
              class="px-6 py-3.5 rounded-full font-bold text-xs text-white bg-emerald-600 hover:bg-emerald-700 shadow-md transition flex items-center justify-center space-x-2"
            >
              <i data-lucide="home" class="w-4 h-4"></i>
              <span>Book Mumbai Home Visit</span>
            </button>
            <a 
              href="https://wa.me/919833633857?text=Hello%20Dr%20Pawan%20Gupta,%20I%20need%20a%20physiotherapy%20home%20visit%20in%20Mumbai." 
              target="_blank" 
              rel="noopener noreferrer" 
              class="px-6 py-3.5 rounded-full font-bold text-xs text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition flex items-center justify-center space-x-2"
            >
              <i data-lucide="message-square" class="w-4 h-4 text-emerald-400"></i>
              <span>WhatsApp Home Care Enquiry</span>
            </a>
          </div>
        </div>

        <div class="lg:col-span-6">
          <div class="bg-slate-800/80 rounded-3xl p-6 sm:p-8 border border-slate-700 space-y-4">
            <h4 class="text-base font-bold text-white font-heading flex items-center space-x-2">
              <i data-lucide="map-pin" class="w-5 h-5 text-rose-400"></i>
              <span>Mumbai Suburbs &amp; Zones Covered:</span>
            </h4>
            <div class="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs text-slate-300">
              <span class="p-2 rounded-xl bg-slate-900/60 border border-slate-700">Sewri &amp; Wadala</span>
              <span class="p-2 rounded-xl bg-slate-900/60 border border-slate-700">Dadar &amp; Matunga</span>
              <span class="p-2 rounded-xl bg-slate-900/60 border border-slate-700">Parel &amp; Lower Parel</span>
              <span class="p-2 rounded-xl bg-slate-900/60 border border-slate-700">Worli &amp; Prabhadevi</span>
              <span class="p-2 rounded-xl bg-slate-900/60 border border-slate-700">Bandra &amp; Khar</span>
              <span class="p-2 rounded-xl bg-slate-900/60 border border-slate-700">BKC &amp; Kurla</span>
              <span class="p-2 rounded-xl bg-slate-900/60 border border-slate-700">Santacruz &amp; Juhu</span>
              <span class="p-2 rounded-xl bg-slate-900/60 border border-slate-700">Andheri &amp; Vile Parle</span>
              <span class="p-2 rounded-xl bg-slate-900/60 border border-slate-700">Chembur &amp; Ghatkopar</span>
            </div>
            <p class="text-[11px] text-slate-400 pt-2 italic">
              *Daily morning to night slots available (7:00 AM – 8:30 PM). Same-day urgent home visit requests accommodated.
            </p>
          </div>
        </div>
      </div>

    </div>
  </section>

  <!-- PATIENT REVIEWS & GOOGLE 4.9 RATING -->
  <section id="reviews" class="py-20 bg-white border-b border-slate-200 scroll-mt-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      <div class="text-center max-w-3xl mx-auto space-y-3">
        <span class="text-xs font-extrabold text-amber-600 uppercase tracking-wider px-3.5 py-1 rounded-full bg-amber-50 border border-amber-200">
          Google Verified Patient Outcomes
        </span>
        <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading">
          Real Patient Recoveries &amp; 4.9★ Stories
        </h2>
        <p class="text-sm text-slate-600">
          Rated 4.9/5 based on 128+ verified reviews across Mumbai clinics and home care visits.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <!-- Review 1 -->
        <div class="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-4 shadow-sm flex flex-col justify-between">
          <div class="space-y-2">
            <div class="flex text-amber-400">
              <i data-lucide="star" class="w-4 h-4 fill-amber-400"></i>
              <i data-lucide="star" class="w-4 h-4 fill-amber-400"></i>
              <i data-lucide="star" class="w-4 h-4 fill-amber-400"></i>
              <i data-lucide="star" class="w-4 h-4 fill-amber-400"></i>
              <i data-lucide="star" class="w-4 h-4 fill-amber-400"></i>
            </div>
            <h4 class="text-sm font-bold text-slate-900">Severe L5-S1 Sciatica Healed Without Surgery</h4>
            <p class="text-xs text-slate-600 leading-relaxed">
              "I was advised spine surgery by two doctors for my severe sciatica. Dr Pawan Gupta used targeted traction and dry needling. Within 4 weeks my pain dropped from 9/10 to zero. Truly grateful!"
            </p>
          </div>
          <div class="border-t border-slate-200 pt-3">
            <span class="text-xs font-bold text-slate-900 block">Rajesh Mehta, 48</span>
            <span class="text-[10px] text-slate-500">Dadar • Orthopedic Patient</span>
          </div>
        </div>

        <!-- Review 2 -->
        <div class="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-4 shadow-sm flex flex-col justify-between">
          <div class="space-y-2">
            <div class="flex text-amber-400">
              <i data-lucide="star" class="w-4 h-4 fill-amber-400"></i>
              <i data-lucide="star" class="w-4 h-4 fill-amber-400"></i>
              <i data-lucide="star" class="w-4 h-4 fill-amber-400"></i>
              <i data-lucide="star" class="w-4 h-4 fill-amber-400"></i>
              <i data-lucide="star" class="w-4 h-4 fill-amber-400"></i>
            </div>
            <h4 class="text-sm font-bold text-slate-900">Post-Knee Replacement (TKR) Home Visits</h4>
            <p class="text-xs text-slate-600 leading-relaxed">
              "My 72-year-old mother had bilateral TKR. Dr Pawan visited daily at our residence. His gentle yet progressive approach helped her walk independently without walker in just 3 weeks."
            </p>
          </div>
          <div class="border-t border-slate-200 pt-3">
            <span class="text-xs font-bold text-slate-900 block">Ananya Sharma</span>
            <span class="text-[10px] text-slate-500">Worli • Home Visit Care</span>
          </div>
        </div>

        <!-- Review 3 -->
        <div class="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-4 shadow-sm flex flex-col justify-between">
          <div class="space-y-2">
            <div class="flex text-amber-400">
              <i data-lucide="star" class="w-4 h-4 fill-amber-400"></i>
              <i data-lucide="star" class="w-4 h-4 fill-amber-400"></i>
              <i data-lucide="star" class="w-4 h-4 fill-amber-400"></i>
              <i data-lucide="star" class="w-4 h-4 fill-amber-400"></i>
              <i data-lucide="star" class="w-4 h-4 fill-amber-400"></i>
            </div>
            <h4 class="text-sm font-bold text-slate-900">ACL Reconstruction Return-to-Cricket</h4>
            <p class="text-xs text-slate-600 leading-relaxed">
              "As a club cricket player, post-ACL rehab was daunting. Dr Pawan's plyometrics and agility drills got my knee stability back to 100%. Highly recommended for athletes in Mumbai."
            </p>
          </div>
          <div class="border-t border-slate-200 pt-3">
            <span class="text-xs font-bold text-slate-900 block">Karan Deshmukh, 26</span>
            <span class="text-[10px] text-slate-500">Bandra • Sports Rehab</span>
          </div>
        </div>

      </div>

    </div>
  </section>

  <!-- FAQ SECTION -->
  <section id="faq" class="py-20 bg-slate-50 border-b border-slate-200 scroll-mt-16">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      
      <div class="text-center space-y-2">
        <span class="text-xs font-extrabold text-blue-600 uppercase tracking-wider px-3 py-1 rounded-full bg-blue-50 border border-blue-200">
          Clear Answers
        </span>
        <h2 class="text-3xl font-extrabold text-slate-900 font-heading">
          Frequently Asked Questions
        </h2>
      </div>

      <div class="space-y-3" id="faq-accordion">
        
        <details class="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm cursor-pointer">
          <summary class="font-bold text-sm text-slate-900 list-none flex items-center justify-between">
            <span>Do I need a doctor's referral to start physiotherapy?</span>
            <i data-lucide="chevron-down" class="w-4 h-4 text-slate-500"></i>
          </summary>
          <p class="text-xs text-slate-600 leading-relaxed pt-3">
            No referral is required. Dr Pawan Gupta (PT) is an autonomous, licensed physical therapist who performs complete clinical musculoskeletal and biomechanical evaluations before starting treatment. If imaging (MRI/X-ray) is needed, we guide you accordingly.
          </p>
        </details>

        <details class="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm cursor-pointer">
          <summary class="font-bold text-sm text-slate-900 list-none flex items-center justify-between">
            <span>How many sessions will I need to recover?</span>
            <i data-lucide="chevron-down" class="w-4 h-4 text-slate-500"></i>
          </summary>
          <p class="text-xs text-slate-600 leading-relaxed pt-3">
            Acute strains and simple neck spasms often resolve in 3–6 sessions. Chronic slip disc, sciatica, or severe frozen shoulder typically requires 10–18 sessions. Post-TKR and stroke rehabilitation require continuous progressive phase-wise protocols over 4–8 weeks.
          </p>
        </details>

        <details class="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm cursor-pointer">
          <summary class="font-bold text-sm text-slate-900 list-none flex items-center justify-between">
            <span>How do home visits in Mumbai work?</span>
            <i data-lucide="chevron-down" class="w-4 h-4 text-slate-500"></i>
          </summary>
          <p class="text-xs text-slate-600 leading-relaxed pt-3">
            We bring all necessary portable electrotherapy modalities, weights, resistance loops, ultrasound units, and mobilization tools directly to your residence across Mumbai. Sessions are 45–60 minutes of dedicated, one-on-one doctor care.
          </p>
        </details>

        <details class="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm cursor-pointer">
          <summary class="font-bold text-sm text-slate-900 list-none flex items-center justify-between">
            <span>Does dry needling hurt?</span>
            <i data-lucide="chevron-down" class="w-4 h-4 text-slate-500"></i>
          </summary>
          <p class="text-xs text-slate-600 leading-relaxed pt-3">
            Dry needling uses ultra-fine solid monofilament needles (much thinner than injection needles). Most patients only feel a brief "muscle twitch response" followed by an immediate sensation of muscle release and pain relief.
          </p>
        </details>

      </div>

    </div>
  </section>

</main>

<?php
get_footer();

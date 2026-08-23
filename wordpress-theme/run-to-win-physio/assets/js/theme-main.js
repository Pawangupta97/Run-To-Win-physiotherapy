/**
 * Run To Win Physiotherapy Theme Main JavaScript
 */

(function($) {
  'use strict';

  // Initialize Lucide Icons on DOM ready
  document.addEventListener('DOMContentLoaded', function() {
    if (typeof lucide !== 'undefined') {
      lucide.createIcons();
    }
  });

  // Mobile Menu Toggle
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', function() {
      mobileMenu.classList.toggle('hidden');
    });
  }

  // Care Mode Selection toggle address field
  const careSelect = document.getElementById('care-mode-select');
  const addressField = document.getElementById('home-address-field');

  if (careSelect && addressField) {
    careSelect.addEventListener('change', function() {
      if (this.value.includes('Home Visit')) {
        addressField.classList.remove('hidden');
      } else {
        addressField.classList.add('hidden');
      }
    });
  }

  // Pain Region Data for Interactive Body Map
  const PAIN_REGIONS = {
    'lower-back': {
      badge: 'LUMBAR SPINE & SCIATICA',
      title: 'Lower Back & Sciatic Nerve Pain',
      recovery: '3 to 6 weeks with non-surgical decompression protocol.',
      modality: 'Spinal Traction + Dry Needling + Core Multifidus Rehab',
      conditions: [
        'L4-L5 / L5-S1 Disc Bulge (Slip Disc)',
        'Sciatica radiating shooting pain & leg numbness',
        'Lumbar Canal Stenosis & Spondylolisthesis',
        'Chronic Postural Myofascial Spasm'
      ],
      approaches: [
        'McKenzie MDT Spinal Decompression Protocols',
        'Deep Core Multifidus & Transversus Activation',
        'Sciatic Nerve Gliding & Neurodynamic Release',
        'Trigger Point Dry Needling for Gluteal Knots'
      ]
    },
    'cervical-neck': {
      badge: 'CERVICAL SPINE & TRAPEZIUS',
      title: 'Cervical Neck Stiffness & Tech Neck',
      recovery: '2 to 4 weeks with postural kinetic correction.',
      modality: 'Maitland Cervical Mobilization + Trapezius Needling',
      conditions: [
        'Cervical Radiculopathy (Arm Tingling / Numbness)',
        'Tech-Neck & Forward Head Posture Strain',
        'Upper Trapezius Trigger Points & Tension Headaches',
        'Cervical Spondylosis & Disc Bulge'
      ],
      approaches: [
        'Maitland & Mulligan Cervical Joint Mobilization',
        'Deep Neck Flexor (Longus Colli) Activation',
        'Dry Needling for Levator Scapulae & Trapezius',
        'Ergonomic Workstation & Pillow Correction'
      ]
    },
    'knee': {
      badge: 'KNEE & PATELLOFEMORAL JOINT',
      title: 'Knee Osteoarthritis, Meniscus & ACL Rehab',
      recovery: '4 to 8 weeks depending on surgical or conservative care.',
      modality: 'Quad Bio-loading + Joint Decompression + Ultrasound',
      conditions: [
        'Knee Osteoarthritis (Grade 1 to 4 Joint Space Narrowing)',
        'Post-Total Knee Replacement (TKR) Rehabilitation',
        'ACL, PCL, and Meniscus Tears (Conservative / Post-Op)',
        'Patellofemoral Pain Syndrome (Runner\'s Knee)'
      ],
      approaches: [
        'VMO & Gluteus Medius Progressive Loading Protocol',
        'Patellar Mobilization & Capsular Stretching',
        'Gait Retraining & Balance Agility Drills',
        'Therapeutic Ultrasound & Kinesiology Taping'
      ]
    },
    'shoulder': {
      badge: 'GLENOHUMERAL JOINT & ROTATOR CUFF',
      title: 'Frozen Shoulder & Rotator Cuff Tears',
      recovery: '4 to 10 weeks with stage-specific mobilization.',
      modality: 'Capsular Distension Therapy + Scapular Dysrhythmia Rehab',
      conditions: [
        'Adhesive Capsulitis (Frozen Shoulder - Freezing/Frozen Stages)',
        'Supraspinatus & Rotator Cuff Tendinopathy',
        'Subacromial Shoulder Impingement',
        'AC Joint Sprain & Post-Dislocation Rehab'
      ],
      approaches: [
        'End-Range Capsular Stretching & Joint Distraction',
        'Scapular Stabilizer (Serratus Anterior) Strengthening',
        'Rotator Cuff Eccentric Strengthening Program',
        'IASTM Fascial Mobilization of Pectoralis Minor'
      ]
    },
    'ankle-foot': {
      badge: 'ANKLE & PLANTAR COMPLEX',
      title: 'Plantar Fasciitis & Ankle Ligament Sprains',
      recovery: '2 to 6 weeks with load management.',
      modality: 'Plantar Needling + Calf Offloading + Balance Board',
      conditions: [
        'Plantar Fasciitis & Morning Heel Pain',
        'Inversion Ankle Sprain (ATFL Ligament Strain)',
        'Achilles Tendonitis & Retrocalcaneal Bursitis',
        'Flat Foot Biomechanical Strain (Overpronation)'
      ],
      approaches: [
        'Dry Needling & Myofascial Release of Gastrocnemius/Soleus',
        'Proprioception & Wobble Board Balance Training',
        'High-Load Strength Training for Plantar Fascia',
        'Custom Orthotic Insole Consultation'
      ]
    },
    'hip-pelvis': {
      badge: 'HIP JOINT & SACROILIAC PELVIS',
      title: 'Piriformis Syndrome, SI Joint & Hip Arthritis',
      recovery: '3 to 5 weeks with pelvic stabilization.',
      modality: 'Piriformis Dry Needling + SI Joint Muscle Energy (MET)',
      conditions: [
        'Piriformis Syndrome (Deep Buttock Nerve Pain)',
        'Sacroiliac (SI) Joint Dysfunction',
        'Hip Osteoarthritis & Post-THR Recovery',
        'Trochanteric Bursitis (Lateral Hip Pain)'
      ],
      approaches: [
        'Muscle Energy Techniques (MET) for Pelvic Torsion',
        'Deep Trigger Point Dry Needling for Piriformis',
        'Gluteal Strengthening & Kinetic Chain Integration',
        'Hip Joint Long-Axis Traction'
      ]
    }
  };

  // Tab click handler
  const tabs = document.querySelectorAll('.pain-tab');
  if (tabs.length) {
    tabs.forEach(tab => {
      tab.addEventListener('click', function() {
        tabs.forEach(t => {
          t.classList.remove('bg-blue-600', 'text-white', 'shadow-md', 'active');
          t.classList.add('bg-slate-100', 'text-slate-700');
        });
        this.classList.add('bg-blue-600', 'text-white', 'shadow-md', 'active');
        this.classList.remove('bg-slate-100', 'text-slate-700');

        const regionKey = this.getAttribute('data-region');
        const data = PAIN_REGIONS[regionKey];
        if (!data) return;

        document.getElementById('region-badge').textContent = data.badge;
        document.getElementById('region-title').textContent = data.title;
        document.getElementById('region-recovery').textContent = data.recovery;
        document.getElementById('region-modality').textContent = data.modality;

        // Render conditions
        const condList = document.getElementById('region-conditions');
        condList.innerHTML = data.conditions.map(c => 
          `<li class="flex items-center space-x-2"><i data-lucide="check-circle" class="w-3.5 h-3.5 text-blue-400 shrink-0"></i><span>${c}</span></li>`
        ).join('');

        // Render approaches
        const appList = document.getElementById('region-approaches');
        appList.innerHTML = data.approaches.map(a => 
          `<li class="flex items-center space-x-2"><i data-lucide="check-circle" class="w-3.5 h-3.5 text-emerald-400 shrink-0"></i><span>${a}</span></li>`
        ).join('');

        if (typeof lucide !== 'undefined') {
          lucide.createIcons();
        }
      });
    });
  }

  // AJAX Booking Form Submission
  const bookingForm = document.getElementById('wp-booking-form');
  if (bookingForm) {
    bookingForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const submitBtn = document.getElementById('modal-submit-btn');
      const alertBox = document.getElementById('booking-alert');
      
      const formData = new FormData(bookingForm);
      formData.append('action', 'rtw_book_appointment');
      if (typeof rtwPhysioAjax !== 'undefined') {
        formData.append('security', rtwPhysioAjax.nonce);
      }

      submitBtn.disabled = true;
      submitBtn.innerHTML = '<span>Submitting Request...</span>';

      fetch(typeof rtwPhysioAjax !== 'undefined' ? rtwPhysioAjax.ajax_url : '/wp-admin/admin-ajax.php', {
        method: 'POST',
        body: formData
      })
      .then(res => res.json())
      .then(data => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = '<i data-lucide="check-circle" class="w-4 h-4"></i><span>Confirm & Send to Doctor</span>';
        if (typeof lucide !== 'undefined') lucide.createIcons();

        if (data.success) {
          alertBox.className = 'p-3.5 rounded-xl text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200 block';
          alertBox.innerHTML = `<strong>Success!</strong> ${data.data.message}`;
          
          if (data.data.whatsapp_url) {
            setTimeout(() => {
              window.open(data.data.whatsapp_url, '_blank');
            }, 1000);
          }
          bookingForm.reset();
        } else {
          alertBox.className = 'p-3.5 rounded-xl text-xs font-semibold bg-rose-50 text-rose-800 border border-rose-200 block';
          alertBox.textContent = data.data && data.data.message ? data.data.message : 'Error sending booking. Please contact via WhatsApp directly.';
        }
      })
      .catch(err => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = '<i data-lucide="check-circle" class="w-4 h-4"></i><span>Confirm & Send to Doctor</span>';
        if (typeof lucide !== 'undefined') lucide.createIcons();
        sendDirectWhatsAppFromModal();
      });
    });
  }

})(jQuery);

// Global Modal Functions accessible from inline onclick handlers
window.openBookingModal = function(serviceName) {
  const modal = document.getElementById('booking-modal');
  if (!modal) return;
  modal.classList.remove('hidden');
  
  if (serviceName) {
    const select = document.getElementById('modal-service-select');
    if (select) {
      for (let i = 0; i < select.options.length; i++) {
        if (select.options[i].text.toLowerCase().includes(serviceName.toLowerCase())) {
          select.selectedIndex = i;
          break;
        }
      }
    }
  }

  const alertBox = document.getElementById('booking-alert');
  if (alertBox) {
    alertBox.classList.add('hidden');
  }

  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
};

window.closeBookingModal = function() {
  const modal = document.getElementById('booking-modal');
  if (modal) modal.classList.add('hidden');
};

window.sendDirectWhatsAppFromModal = function() {
  const form = document.getElementById('wp-booking-form');
  if (!form) return;

  const name = form.querySelector('[name="patient_name"]')?.value || 'Patient';
  const service = form.querySelector('[name="service_type"]')?.value || 'Physiotherapy Consultation';
  const mode = form.querySelector('[name="care_mode"]')?.value || 'Clinic Visit';
  const date = form.querySelector('[name="preferred_date"]')?.value || 'Soonest available';
  const details = form.querySelector('[name="pain_details"]')?.value || 'Consultation requested';

  const text = `Hello Dr Pawan Gupta, I would like to book a physiotherapy session:%0A%0A• Patient: ${encodeURIComponent(name)}%0A• Treatment: ${encodeURIComponent(service)}%0A• Care Mode: ${encodeURIComponent(mode)}%0A• Preferred Date: ${encodeURIComponent(date)}%0A• Condition: ${encodeURIComponent(details)}`;
  window.open(`https://wa.me/919833633857?text=${text}`, '_blank');
};

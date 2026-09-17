import React, { useState } from 'react';
import { 
  MapPin, 
  ShieldCheck, 
  Clock, 
  Phone, 
  MessageSquare, 
  CheckCircle2, 
  Calendar, 
  ChevronRight, 
  ChevronDown, 
  ArrowRight, 
  Activity, 
  Building, 
  Home, 
  Award,
  Zap,
  AlertCircle,
  Stethoscope,
  Users,
  Navigation
} from 'lucide-react';
import { CLINIC_CONTACT } from '../data/clinicData';
import { LOCATION_GROUPS, HOME_VISIT_LOCATIONS } from '../data/homeVisitLocations';
import { SeoMeta } from './SeoMeta';
import { Breadcrumbs } from './Breadcrumbs';

import doctorPhoto from '../assets/images/regenerated_image_1787089379420.webp';
import clinicImg from '../assets/images/regenerated_image_1787088229284.webp';

interface PhysiotherapyMumbaiPageProps {
  onBackToHome: () => void;
  onNavigatePage: (page: string) => void;
  onSelectLocation: (locationId: string) => void;
  onSelectCondition: (conditionId: string) => void;
  onOpenBooking: (prefillService?: string, prefillArea?: string) => void;
  onOpenAiAssistant: (context?: string) => void;
}

export const PhysiotherapyMumbaiPage: React.FC<PhysiotherapyMumbaiPageProps> = ({
  onBackToHome,
  onNavigatePage,
  onSelectLocation,
  onSelectCondition,
  onOpenBooking,
  onOpenAiAssistant
}) => {
  const [openFaqId, setOpenFaqId] = useState<number | null>(0);

  const regionalZones = [
    {
      title: 'South Mumbai',
      description: 'Sewri Clinic headquarters plus premium home visit care across Colaba, Marine Lines, Malabar Hill, Cuffe Parade, and Worli.',
      locations: ['Sewri', 'Parel', 'Worli', 'Colaba', 'Marine Lines', 'Byculla'],
      highlight: 'Clinic & Home Care'
    },
    {
      title: 'Central Mumbai',
      description: 'Rapid response physical therapy for corporate hubs and residences in Dadar, Wadala, Matunga, Sion, and Lower Parel.',
      locations: ['Dadar', 'Wadala', 'Matunga', 'Sion', 'Lower Parel'],
      highlight: '15-30 Min Response'
    },
    {
      title: 'Western Suburbs',
      description: 'Comprehensive doorstep rehab along the Western corridor from Bandra, Khar, and Juhu through Andheri, Goregaon, and Borivali.',
      locations: ['Bandra West', 'Khar', 'Santacruz', 'Juhu', 'Andheri West', 'Goregaon', 'Malad', 'Borivali'],
      highlight: 'High Demand Suburbs'
    },
    {
      title: 'Eastern Suburbs & Thane',
      description: 'Expert orthopedic and stroke home care in Kurla, Ghatkopar, Powai, Mulund, and Thane West.',
      locations: ['Ghatkopar', 'Powai', 'Vikhroli', 'Mulund', 'Thane West'],
      highlight: 'Comprehensive Mobility Care'
    }
  ];

  const conditionsAddressed = [
    {
      title: 'Orthopedic & Joint Disorders',
      desc: 'Osteoarthritis of knees, frozen shoulder, hip stiffness, and rotator cuff tendinopathy restored through targeted manual therapy and loading.',
      conditionId: 'knee'
    },
    {
      title: 'Spine & Sciatica Decompression',
      desc: 'Cervical spondylosis, lumbar disc herniation, and nerve impingement relieved with McKenzie mechanical assessment and traction.',
      conditionId: 'lower-back'
    },
    {
      title: 'Post-Surgical Joint Rehabilitation',
      desc: 'Surgeon-aligned protocols for Total Knee Replacement (TKR), Hip Replacement (THR), and ACL reconstruction at clinic or home.',
      conditionId: 'knee-replacement-rehab'
    },
    {
      title: 'Sports Injuries & Athletic Overuse',
      desc: 'Ankle sprains, hamstring strains, runner’s knee, and tennis elbow managed with biomechanical analysis and sports conditioning.',
      conditionId: 'orthopedic-injuries'
    },
    {
      title: 'Neurological & Stroke Rehabilitation',
      desc: 'Neuro-developmental therapy for hemiplegia, Parkinson’s disease, balance ataxia, and motor relearning.',
      conditionId: 'stroke-rehab'
    },
    {
      title: 'Geriatric Mobility & Fall Prevention',
      desc: 'Safe balance re-education, gait re-training with walkers/canes, and sarcopenia resistance exercises for seniors in Mumbai.',
      conditionId: 'senior-rehab'
    }
  ];

  const assessmentSteps = [
    {
      step: '01',
      title: 'Comprehensive Subjective Interview',
      desc: 'Review of symptom history, onset mechanisms, daily functional triggers, aggravating factors, and previous MRI / X-ray imaging reports.'
    },
    {
      step: '02',
      title: 'Biomechanical Movement & Postural Screen',
      desc: 'Static posture, spinal curves, joint kinematics, gait pattern, and functional squat/reach movement screening.'
    },
    {
      step: '03',
      title: 'Special Orthopedic & Neurological Tests',
      desc: 'Goniometric range of motion, manual muscle testing (MMT), deep tendon reflexes, dermatome sensation, and joint ligament stress tests.'
    },
    {
      step: '04',
      title: 'Transparent Clinical Goal Formulation',
      desc: 'Setting measurable, time-bound functional milestones tailored to your occupation, home setup, or sporting goals.'
    }
  ];

  const treatmentTechniques = [
    {
      name: 'Maitland & Mulligan Joint Mobilization',
      detail: 'Precision oscillatory and sustained manual glides to restore normal joint arthrokinematics and reduce nociceptive input.'
    },
    {
      name: 'Certified Dry Needling (CDNP)',
      detail: 'Targeted myofascial trigger point deactivation using sterile micro-filaments to release persistent muscular knots.'
    },
    {
      name: 'Computerized Cervical & Lumbar Traction',
      detail: 'Clinical spinal decompression at our Sewri clinic to alleviate compressive disc pressure on exiting nerve roots.'
    },
    {
      name: 'Therapeutic Ultrasound & Digital TENS',
      detail: 'Hospital-grade electro-physical modalities to accelerate soft-tissue repair, resolve edema, and alleviate acute spasms.'
    },
    {
      name: 'Functional Strength & Neuromuscular Loading',
      detail: 'Progressive closed-kinetic chain exercises, core stabilization, and eccentric tendon loading.'
    },
    {
      name: 'Ergonomic & Home Program Education',
      detail: 'Practical postural strategies and digital video exercise prescriptions for long-term self-management.'
    }
  ];

  const faqs = [
    {
      q: 'Where is your primary physiotherapy clinic located in Mumbai?',
      a: 'Our verified physical outpatient clinic is located in Sewri, Central Mumbai (Pin: 400015), offering easy transit accessibility from Dadar, Parel, Wadala, and Byculla. We also provide certified doorstep home visit physiotherapy across 35+ suburbs in Mumbai.'
    },
    {
      q: 'Looking for a physiotherapist near me in Mumbai: Should I visit the Sewri clinic or request a home visit?',
      a: 'If you are mobile and seeking clinical modalities or manual spine therapy, visiting our Sewri clinic is ideal. If you are experiencing acute back spasms, severe sciatica, post-knee or hip replacement, or mobility restrictions in senior family members, our certified home physiotherapy team brings hospital-grade electrotherapy, ultrasound, and exercise gear directly to your home.'
    },
    {
      q: 'What is included in orthopedic physiotherapy in Mumbai at Run To Win?',
      a: 'Our orthopedic physiotherapy protocols target slip disc, sciatica, cervical spondylosis, frozen shoulder, osteoarthritis, and post-surgical joint rehabilitation. Care includes Maitland joint mobilizations, trigger point dry needling, therapeutic ultrasound, and progressive strengthening.'
    },
    {
      q: 'Do you offer sports physiotherapy in Mumbai for runners, cricketers, and athletes?',
      a: 'Yes. Led by Dr. Pawan Gupta (PT), we provide dedicated sports physiotherapy for running injuries, ACL tears, rotator cuff tendinopathy, tennis elbow, and ankle sprains with functional return-to-sport testing.'
    },
    {
      q: 'What does neuro physiotherapy and stroke rehabilitation involve at home?',
      a: 'For stroke survivors, Parkinson’s disease, and neuromuscular conditions, our neuro physiotherapy emphasizes neuroplasticity stimulation, PNF trunk control, gait retraining, spasticity management, and family transfer safety guidance in the patient’s real home environment.'
    },
    {
      q: 'How do I schedule an in-clinic or home physiotherapy appointment in Mumbai?',
      a: 'You can book an appointment with Dr. Pawan Gupta (PT) by calling +91 9838688745 or messaging us directly on WhatsApp. Clinic visits run Mon–Sat 8 AM – 9 PM (Sun 9 AM – 2 PM), while home visits are scheduled daily from 7:00 AM to 8:30 PM.'
    }
  ];

  const mumbaiPageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["PhysiotherapyClinic", "MedicalBusiness", "LocalBusiness"],
        "@id": "https://runtowinphysiotherapy.com/#physiotherapy-clinic",
        "name": "Run To Win Healthcare Services Mumbai",
        "url": "https://runtowinphysiotherapy.com/",
        "telephone": CLINIC_CONTACT.phone,
        "email": CLINIC_CONTACT.email,
        "priceRange": "₹₹",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Sewri",
          "addressLocality": "Mumbai",
          "addressRegion": "Maharashtra",
          "postalCode": "400015",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "19.0016",
          "longitude": "72.8550"
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
        ],
        "founder": {
          "@type": "Physician",
          "@id": "https://runtowinphysiotherapy.com/#dr-pawan-gupta",
          "name": "Dr. Pawan Gupta (PT)",
          "jobTitle": "Senior Consultant Physiotherapist",
          "url": "https://runtowinphysiotherapy.com/dr-pawan-gupta/"
        },
        "areaServed": [
          "Mumbai",
          "South Mumbai",
          "Central Mumbai",
          "Western Suburbs",
          "Eastern Suburbs",
          "Thane"
        ]
      },
      {
        "@type": "Physician",
        "@id": "https://runtowinphysiotherapy.com/#dr-pawan-gupta",
        "name": "Dr. Pawan Gupta (PT)",
        "givenName": "Pawan",
        "familyName": "Gupta",
        "honorificPrefix": "Dr.",
        "honorificSuffix": "PT, B.P.Th, M.P.Th, MIAP",
        "jobTitle": "Senior Consultant Physiotherapist & Clinical Director",
        "url": "https://runtowinphysiotherapy.com/dr-pawan-gupta/",
        "worksFor": {
          "@type": "PhysiotherapyClinic",
          "name": "Run To Win Healthcare Services Mumbai",
          "url": "https://runtowinphysiotherapy.com/"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqs.map(f => ({
          "@type": "Question",
          "name": f.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": f.a
          }
        }))
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://runtowinphysiotherapy.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Physiotherapy in Mumbai",
            "item": "https://runtowinphysiotherapy.com/physiotherapy-mumbai"
          }
        ]
      }
    ]
  };

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 antialiased selection:bg-blue-600 selection:text-white">
      <SeoMeta
        title="Physiotherapy in Mumbai | Clinic & Home Visits | Dr. Pawan Gupta (PT)"
        description="Comprehensive physiotherapy in Mumbai by Dr. Pawan Gupta (PT). Advanced outpatient clinic in Sewri & certified doorstep home visits across 35+ Mumbai localities."
        canonicalUrl="https://runtowinphysiotherapy.com/physiotherapy-mumbai"
        schema={mumbaiPageSchema}
      />

      {/* Breadcrumbs */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <Breadcrumbs
            className="!py-0 !px-0 !bg-transparent !border-0 text-xs"
            onHomeClick={onBackToHome}
            items={[
              { label: 'Physiotherapy in Mumbai', current: true }
            ]}
          />
        </div>
      </div>

      {/* Hero Header */}
      <header className="bg-gradient-to-b from-blue-50/70 via-white to-slate-50 py-12 md:py-16 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider">
                <MapPin className="w-3.5 h-3.5 text-blue-600" />
                <span>Sewri Clinic & 35+ Localities Doorstep Care</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-heading leading-tight">
                Physiotherapy in Mumbai
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                Evidence-based musculoskeletal, orthopedic, neurological, and post-surgical physical therapy. Led by <strong className="text-slate-900">Dr. Pawan Gupta (PT)</strong>, delivering clinical care at our Sewri outpatient center and certified home visits across Mumbai.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => onOpenBooking('Physiotherapy Assessment in Mumbai', 'Mumbai Consultation')}
                  className="px-6 py-3.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-sm flex items-center space-x-2 shadow-md transition"
                >
                  <Calendar className="w-4 h-4 text-blue-200" />
                  <span>Book Mumbai Assessment</span>
                </button>

                <a
                  href={`tel:${CLINIC_CONTACT.phone}`}
                  className="px-5 py-3.5 rounded-xl bg-white border border-slate-300 hover:border-slate-400 text-slate-800 font-bold text-sm flex items-center space-x-2 shadow-2xs transition"
                >
                  <Phone className="w-4 h-4 text-blue-600" />
                  <span>Call {CLINIC_CONTACT.phoneDisplay}</span>
                </a>

                <a
                  href={`https://wa.me/${CLINIC_CONTACT.whatsappNumber}?text=Hello%20Dr.%20Pawan%20Gupta,%20I%20am%20looking%20for%20Physiotherapy%20treatment%20in%20Mumbai.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm flex items-center space-x-2 shadow-2xs transition"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-100" />
                  <span>WhatsApp Fast Reply</span>
                </a>
              </div>

              <div className="pt-4 flex flex-wrap gap-4 text-xs text-slate-500 font-medium">
                <span className="flex items-center space-x-1.5">
                  <Building className="w-4 h-4 text-blue-600" />
                  <span>Sewri Outpatient Center</span>
                </span>
                <span className="flex items-center space-x-1.5">
                  <Home className="w-4 h-4 text-emerald-600" />
                  <span>Doorstep Visits Across 35+ Suburbs</span>
                </span>
                <span className="flex items-center space-x-1.5">
                  <Award className="w-4 h-4 text-blue-600" />
                  <span>8+ Years Clinical Excellence</span>
                </span>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-slate-100 relative">
                <img
                  src={clinicImg}
                  alt="Dr. Pawan Gupta providing physiotherapy treatment in Mumbai"
                  className="w-full h-72 sm:h-80 object-cover"
                  loading="eager"
                  width="500"
                  height="360"
                />
                <div className="p-4 bg-white border-t border-slate-200 text-xs text-slate-600 flex items-center justify-between">
                  <span className="font-semibold text-slate-900">Dr. Pawan Gupta (PT)</span>
                  <span className="text-blue-700 font-semibold">Lead Physiotherapist, Mumbai</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </header>

      {/* Two Flexible Delivery Models */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">Clinical Access</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading mt-1">
              Two Flexible Delivery Models Across Mumbai
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              Receive world-class therapy at our equipped Sewri center or at your bedside anywhere in the city.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Model 1: Clinic */}
            <div className="p-7 rounded-2xl bg-slate-50 border border-slate-200 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
                  <Building className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 font-heading">
                  1. In-Clinic Care: Sewri Outpatient Center
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Equipped with digital cervical and lumbar traction tables, electrotherapy, ultrasound, active gym resistance equipment, and private treatment cabins in Central Mumbai.
                </p>
                <ul className="space-y-1.5 text-xs text-slate-700">
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <span>Comprehensive spinal mechanical traction and dry needling</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <span>Close transit access from Dadar, Parel, Wadala, and Byculla</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <span>Minimal waiting times with pre-scheduled slots</span>
                  </li>
                </ul>
              </div>

              <button
                onClick={() => onOpenBooking('Sewri Clinic Appointment', 'Sewri Clinic')}
                className="w-full py-3 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs transition shadow-2xs"
              >
                Book In-Clinic Assessment in Sewri
              </button>
            </div>

            {/* Model 2: Home Care */}
            <div className="p-7 rounded-2xl bg-slate-50 border border-slate-200 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
                  <Home className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 font-heading">
                  2. Doorstep Home Care: Across 35+ Localities
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Hospital-grade portable modalities, joint mobilization, and gait training delivered directly to your home. No traffic exhaustion or painful car transfers.
                </p>
                <ul className="space-y-1.5 text-xs text-slate-700">
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Ideal for post-TKR/THR, acute disc pain, and stroke recovery</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Visiting hours 7:00 AM – 8:30 PM daily</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Coverage spanning South, Central, Western & Eastern Mumbai</span>
                  </li>
                </ul>
              </div>

              <button
                onClick={() => onOpenBooking('Home Visit Physiotherapy', 'Mumbai Residence')}
                className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition shadow-2xs"
              >
                Request Home Visit Physiotherapy
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* Conditions Commonly Addressed */}
      <section className="py-14 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">Clinical Scope</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading mt-1">
              Conditions We Treat in Mumbai
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              From acute spinal disc episodes to complex joint replacements, our protocols emphasize active, lasting recovery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {conditionsAddressed.map((c, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-3 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="text-base font-bold text-slate-900 font-heading">{c.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{c.desc}</p>
                </div>
                <button
                  onClick={() => onSelectCondition(c.conditionId)}
                  className="text-xs font-bold text-blue-700 hover:text-blue-800 flex items-center space-x-1 pt-2 border-t border-slate-100"
                >
                  <span>Explore Condition Guide</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Assessment Process */}
      <section className="py-14 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">Diagnostic Rigor</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading mt-1">
              Our 4-Step Clinical Assessment Process
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              Every patient receives an individualized mechanical evaluation to uncover root causes rather than just treating symptoms.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {assessmentSteps.map((s) => (
              <div key={s.step} className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 relative">
                <span className="text-xs font-extrabold text-blue-700 bg-blue-100 px-2.5 py-1 rounded-md inline-block">
                  Step {s.step}
                </span>
                <h3 className="text-sm font-bold text-slate-900 pt-1">{s.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Approach */}
      <section className="py-14 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">Therapeutic Techniques</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading mt-1">
              Modern Treatment Modalities
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              Combining hands-on joint mobilization, precision dry needling, spinal traction, and active exercise retraining.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {treatmentTechniques.map((t, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-2">
                <h3 className="text-sm font-bold text-slate-900 flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                  <span>{t.name}</span>
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">{t.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mumbai Regional Coverage */}
      <section className="py-14 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">Citywide Reach</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading mt-1">
              Mumbai Geographic Zones We Serve
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              Select your Mumbai locality to view dedicated service information and home visit availability:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {regionalZones.map((zone) => (
              <div key={zone.title} className="bg-slate-50 rounded-2xl p-6 border border-slate-200 space-y-3 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-bold text-blue-700 uppercase tracking-wider block mb-1">
                    {zone.highlight}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 font-heading mb-2">
                    {zone.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {zone.description}
                  </p>

                  <div className="space-y-1.5 mb-4">
                    <div className="text-[11px] font-bold text-slate-900 uppercase tracking-wider">
                      Key Localities:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {zone.locations.map((locName) => {
                        const matchedLoc = HOME_VISIT_LOCATIONS.find(
                          l => l.name.toLowerCase().includes(locName.toLowerCase()) || locName.toLowerCase().includes(l.name.toLowerCase())
                        );
                        return (
                          <button
                            key={locName}
                            type="button"
                            onClick={() => {
                              if (matchedLoc) {
                                onSelectLocation(matchedLoc.id);
                              } else {
                                onNavigatePage('home-visits');
                              }
                            }}
                            className="px-2 py-1 rounded bg-white hover:bg-blue-50 hover:text-blue-700 text-slate-700 text-[11px] font-medium transition border border-slate-200"
                          >
                            {locName}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => onNavigatePage('home-visits')}
                  className="inline-flex items-center text-xs font-bold text-blue-700 hover:text-blue-800 pt-2 border-t border-slate-200"
                >
                  <span>Explore all {zone.title} suburbs</span>
                  <ChevronRight className="w-3.5 h-3.5 ml-1" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Clinic & Service Area Section with Embedded Google Map */}
      <section className="py-14 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10 space-y-2">
            <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">Local Clinic & Contact Details</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
              Sewri Rehabilitation Center & Mumbai Doorstep Dispatch
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Run To Win Healthcare Services Mumbai provides two clinical pathways: physical consultations at our verified Sewri center and certified doorstep visits across 35+ Mumbai localities.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Clinic Details Card */}
            <div className="lg:col-span-6 space-y-6">
              <div className="bg-slate-50 rounded-2xl p-6 sm:p-7 border border-slate-200 space-y-5">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                    <Building className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 font-heading">
                      Run To Win Healthcare Services Mumbai
                    </h3>
                    <p className="text-xs text-slate-500">Verified Physical Clinic & Rehabilitation Hub</p>
                  </div>
                </div>

                <div className="space-y-3.5 text-xs sm:text-sm text-slate-700 border-t border-slate-200 pt-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900">Verified Clinic Address:</strong>
                      <p className="text-slate-600">Sewri, Mumbai, Maharashtra 400015, India</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Clock className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900">Outpatient Clinic Hours:</strong>
                      <p className="text-slate-600">Monday – Saturday: 8:00 AM – 9:00 PM</p>
                      <p className="text-slate-600">Sunday: 9:00 AM – 2:00 PM (Prior Appointment & Emergencies)</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Home className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900">Doorstep Home Visit Timings:</strong>
                      <p className="text-slate-600">Daily: 7:00 AM – 8:30 PM (Covering 35+ Suburbs)</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Phone className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900">Telephone / Booking Desk:</strong>
                      <p>
                        <a href={`tel:${CLINIC_CONTACT.phone}`} className="text-blue-600 font-bold hover:underline">
                          {CLINIC_CONTACT.phoneDisplay}
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Navigation className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900">Transit & Neighborhood Access:</strong>
                      <p className="text-slate-600">
                        Conveniently accessible via Sewri Railway Station (Harbour Line), the Eastern Freeway, and direct arterial roads from Dadar, Lower Parel, Wadala, and Byculla.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 pt-2">
                  <button
                    onClick={() => onOpenBooking('In-Clinic Assessment at Sewri', 'Sewri Outpatient Clinic')}
                    className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-sm transition"
                  >
                    Book In-Clinic Slot
                  </button>
                  <button
                    onClick={() => onOpenBooking('Home Visit Physiotherapy (Mumbai)', 'Doorstep Service')}
                    className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-sm transition"
                  >
                    Request Home Visit
                  </button>
                  <a
                    href={CLINIC_CONTACT.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-xl bg-white border border-slate-300 hover:bg-slate-100 text-slate-700 font-bold text-xs flex items-center space-x-1.5 transition"
                  >
                    <Navigation className="w-3.5 h-3.5 text-blue-600" />
                    <span>Google Maps Directions</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Embedded Google Map for Sewri Clinic */}
            <div className="lg:col-span-6">
              <div className="bg-slate-50 rounded-2xl p-2 border border-slate-200 overflow-hidden shadow-sm">
                <div className="px-4 py-3 bg-white rounded-t-xl border-b border-slate-200 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                    <span className="text-xs font-bold text-slate-800">Sewri Clinic Location (Mumbai 400015)</span>
                  </div>
                  <span className="text-[11px] text-slate-500 font-medium">Verified Practice Facility</span>
                </div>
                <div className="w-full h-80 rounded-b-xl overflow-hidden relative">
                  <iframe
                    title="Run To Win Healthcare Services Mumbai - Clinic Map"
                    src="https://maps.google.com/maps?q=Sewri,+Mumbai,+Maharashtra+400015&t=&z=14&ie=UTF8&iwloc=&output=embed"
                    className="w-full h-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                <p className="text-[11px] text-slate-500 p-2.5 text-center">
                  📍 Verified Physical Clinic: Sewri, Mumbai, Maharashtra 400015. Home visit services dispatched from here across Mumbai.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* When Assessment is Appropriate + Red Flags */}
      <section className="py-12 bg-amber-50/50 border-b border-amber-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-amber-900 font-bold text-sm">
                <Clock className="w-4 h-4 text-amber-700" />
                <span>When Professional Assessment is Appropriate</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 font-heading">
                Signs You Should Schedule an Evaluation
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-2 shrink-0"></span>
                  <span>Persistent musculoskeletal pain lasting more than 2 to 3 weeks</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-2 shrink-0"></span>
                  <span>Recent hospital discharge following knee replacement, hip surgery, or spinal fixation</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-2 shrink-0"></span>
                  <span>Pins-and-needles or radiating numbness down the arm or leg from the spine</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-2 shrink-0"></span>
                  <span>Sports injury involving joint swelling, inability to bear weight, or giving way</span>
                </li>
              </ul>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-amber-300 shadow-2xs space-y-3">
              <div className="flex items-center space-x-2 text-red-700 font-bold text-xs uppercase tracking-wider">
                <AlertCircle className="w-4 h-4 text-red-600" />
                <span>Safety Notice: When to Seek Immediate Medical Emergency Care</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                If your symptoms include any of the following emergency medical indicators, bypass outpatient physiotherapy and go directly to a hospital emergency room:
              </p>
              <ul className="space-y-1.5 text-xs text-slate-800 font-medium">
                <li>• Sudden bowel or bladder incontinence or loss of pelvic sensation (Cauda Equina)</li>
                <li>• Acute chest tightness, pain radiating down left arm, or sudden breathlessness</li>
                <li>• Sudden facial droop, slurred speech, or acute one-sided limb weakness (Stroke)</li>
                <li>• Severe acute trauma with visible bone deformity, severe open wound, or joint dislocation</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-14 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">FAQ</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading mt-1">
              Frequently Asked Questions: Physiotherapy in Mumbai
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqId === idx;
              return (
                <div key={idx} className="border border-slate-200 rounded-2xl overflow-hidden bg-slate-50 transition">
                  <button
                    onClick={() => setOpenFaqId(isOpen ? null : idx)}
                    className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 font-bold text-slate-900 text-sm hover:text-blue-800 transition"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${isOpen ? 'rotate-180 text-blue-600' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-4 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 pt-3">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Internal Navigation Links */}
      <section className="py-10 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4 text-center">
            Explore Dedicated Specialized Service Pages
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            <button
              onClick={() => onNavigatePage('orthopedic-physiotherapy')}
              className="text-xs px-3.5 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-blue-300 text-slate-700 hover:text-blue-700 transition font-medium"
            >
              Orthopedic Physiotherapy
            </button>
            <button
              onClick={() => onNavigatePage('sports-physiotherapy')}
              className="text-xs px-3.5 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-blue-300 text-slate-700 hover:text-blue-700 transition font-medium"
            >
              Sports Physiotherapy
            </button>
            <button
              onClick={() => onNavigatePage('neuro-physiotherapy')}
              className="text-xs px-3.5 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-blue-300 text-slate-700 hover:text-blue-700 transition font-medium"
            >
              Neuro Physiotherapy
            </button>
            <button
              onClick={() => onNavigatePage('home-physiotherapy')}
              className="text-xs px-3.5 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-blue-300 text-slate-700 hover:text-blue-700 transition font-medium"
            >
              Home Physiotherapy
            </button>
            <button
              onClick={() => onNavigatePage('online-physiotherapy')}
              className="text-xs px-3.5 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-blue-300 text-slate-700 hover:text-blue-700 transition font-medium"
            >
              Online Physiotherapy
            </button>
            <button
              onClick={() => onNavigatePage('pain-management')}
              className="text-xs px-3.5 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-blue-300 text-slate-700 hover:text-blue-700 transition font-medium"
            >
              Pain Management
            </button>
            <button
              onClick={() => onNavigatePage('post-surgical-rehab')}
              className="text-xs px-3.5 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-blue-300 text-slate-700 hover:text-blue-700 transition font-medium"
            >
              Post-Surgical Rehabilitation
            </button>
            <button
              onClick={() => onNavigatePage('areas-we-serve')}
              className="text-xs px-3.5 py-1.5 rounded-lg bg-emerald-50 border border-emerald-200 hover:border-emerald-400 text-emerald-800 font-bold transition flex items-center space-x-1"
            >
              <span>Areas We Serve (35+ Suburbs)</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => onNavigatePage('dr-pawan-gupta')}
              className="text-xs px-3.5 py-1.5 rounded-lg bg-blue-50 border border-blue-200 hover:border-blue-400 text-blue-800 font-bold transition flex items-center space-x-1"
            >
              <span>Dr. Pawan Gupta (PT) Profile</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => onNavigatePage('contact')}
              className="text-xs px-3.5 py-1.5 rounded-lg bg-slate-100 border border-slate-300 hover:border-slate-400 text-slate-800 font-bold transition flex items-center space-x-1"
            >
              <span>Sewri Clinic Desk & Contact</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* Booking CTA Banner */}
      <section className="py-14 bg-gradient-to-tr from-slate-900 via-slate-800 to-blue-950 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wider border border-blue-400/30">
            <span>Clinical Care in Sewri & Doorstep Visits Across Mumbai</span>
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight font-heading">
            Schedule Your Physiotherapy Assessment in Mumbai
          </h2>

          <p className="text-slate-300 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
            Begin your recovery journey with Senior Consultant Dr. Pawan Gupta (PT) at our Sewri clinic or at your doorstep.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              onClick={() => onOpenBooking('Physiotherapy Assessment in Mumbai', 'Mumbai Consultation')}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm flex items-center justify-center space-x-2 shadow-lg transition"
            >
              <Calendar className="w-4 h-4 text-blue-200" />
              <span>Book Appointment</span>
            </button>

            <a
              href={`tel:${CLINIC_CONTACT.phone}`}
              className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-sm flex items-center justify-center space-x-2 transition"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>Call {CLINIC_CONTACT.phoneDisplay}</span>
            </a>

            <a
              href={`https://wa.me/${CLINIC_CONTACT.whatsappNumber}?text=Hello%20Dr.%20Pawan%20Gupta,%20I%20am%20looking%20for%20Physiotherapy%20in%20Mumbai.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm flex items-center justify-center space-x-2 transition"
            >
              <MessageSquare className="w-4 h-4 text-emerald-200" />
              <span>WhatsApp Doctor</span>
            </a>
          </div>

          <div className="pt-4 border-t border-slate-700/60 text-xs text-slate-400 flex flex-wrap justify-center gap-4">
            <span>📍 Sewri Outpatient Clinic, Mumbai 400015</span>
            <span>🏠 35+ Suburbs Covered for Home Visits</span>
            <span>⏱ Mon – Sat: 8:00 AM – 9:00 PM</span>
          </div>
        </div>
      </section>

    </div>
  );
};

import React from 'react';
import doctorPhoto from '../assets/images/dr_pawan_gupta.webp';
import { 
  Award, 
  CheckCircle2, 
  Calendar, 
  Phone, 
  MapPin, 
  ShieldCheck, 
  GraduationCap, 
  HeartHandshake, 
  Clock, 
  Sparkles, 
  Activity, 
  Zap, 
  Users, 
  MessageCircle, 
  ChevronRight, 
  Stethoscope, 
  Building, 
  Star, 
  Play, 
  Dumbbell,
  BookOpen,
  HelpCircle,
  FileText,
  Mail,
  ExternalLink,
  Brain
} from 'lucide-react';
import { CLINIC_CONTACT } from '../data/clinicData';
import { CLINICAL_ARTICLES } from '../data/articlesData';
import { SeoMeta } from './SeoMeta';
import { Breadcrumbs } from './Breadcrumbs';
import { DoctorExerciseVideoStudio } from './DoctorExerciseVideoStudio';

interface DoctorProfilePageProps {
  onBackToHome: () => void;
  onOpenBooking: (prefillService?: string, prefillArea?: string) => void;
  onOpenAiAssistant: (context?: string) => void;
  onNavigatePage: (page: string) => void;
  onSelectArticle?: (articleId: string) => void;
}

export const DoctorProfilePage: React.FC<DoctorProfilePageProps> = ({
  onBackToHome,
  onOpenBooking,
  onOpenAiAssistant,
  onNavigatePage,
  onSelectArticle
}) => {
  // Schema.org Person & Physician Structured Data
  const doctorPersonSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Physician",
        "@id": "https://runtowinphysiotherapy.com/#dr-pawan-gupta",
        "name": "Dr. Pawan Gupta (PT)",
        "givenName": "Pawan",
        "familyName": "Gupta",
        "honorificPrefix": "Dr.",
        "honorificSuffix": "PT, B.P.Th, M.P.Th, MIAP",
        "jobTitle": "Senior Consultant Physiotherapist & Clinical Director",
        "image": {
          "@type": "ImageObject",
          "@id": "https://runtowinphysiotherapy.com/#dr-pawan-gupta-photo",
          "name": "Dr. Pawan Gupta (PT) - Run To Win Healthcare Mumbai",
          "url": "https://runtowinphysiotherapy.com/images/dr_pawan_gupta.jpg",
          "contentUrl": "https://runtowinphysiotherapy.com/images/dr_pawan_gupta.jpg",
          "caption": "Dr. Pawan Gupta (PT) - Run To Win Healthcare Mumbai | Senior Consultant Physiotherapist & Rehabilitation Specialist",
          "description": "Professional clinical portrait of Dr. Pawan Gupta (PT), Lead Physiotherapist and Clinical Director at Run To Win Healthcare Services Mumbai.",
          "width": 400,
          "height": 500,
          "representativeOfPage": true
        },
        "url": "https://runtowinphysiotherapy.com/dr-pawan-gupta",
        "sameAs": [
          "https://instagram.com/runtowin.in",
          "https://runtowinphysiotherapy.com/"
        ],
        "description": "Dr. Pawan Gupta (PT) is a Senior Consultant Physiotherapist and Clinical Director at Run To Win Healthcare Services Mumbai, specializing in Orthopedic, Sports, Post-Surgical, and Neurological Rehabilitation with 8+ years of clinical experience.",
        "medicalSpecialty": [
          "Physiotherapy",
          "Orthopedic",
          "SportsMedicine",
          "Neurology"
        ],
        "hasCredential": [
          {
            "@type": "EducationalOccupationalCredential",
            "credentialCategory": "degree",
            "name": "Bachelor of Physiotherapy (B.P.Th)"
          },
          {
            "@type": "EducationalOccupationalCredential",
            "credentialCategory": "degree",
            "name": "Master of Physiotherapy (M.P.Th - Musculoskeletal & Sports Specialist)"
          },
          {
            "@type": "EducationalOccupationalCredential",
            "credentialCategory": "certification",
            "name": "Certified Dry Needling Practitioner (CDNP)"
          },
          {
            "@type": "EducationalOccupationalCredential",
            "credentialCategory": "certification",
            "name": "Certified Manual Therapist (Maitland / Mulligan Concepts)"
          }
        ],
        "memberOf": [
          {
            "@type": "Organization",
            "name": "Indian Association of Physiotherapists (IAP)",
            "alternateName": "MIAP"
          },
          {
            "@type": "Organization",
            "name": "Maharashtra State Council of Occupational Therapy and Physiotherapy (MSOTPT)"
          }
        ],
        "worksFor": {
          "@id": "https://runtowinphysiotherapy.com/#clinic"
        },
        "telephone": CLINIC_CONTACT.phone,
        "email": CLINIC_CONTACT.email,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "10, Ground Floor, Manish Investment, Datta Mandir Marg, Off TJ Road, Near Post Office, Sewri",
          "addressLocality": "Mumbai",
          "addressRegion": "Maharashtra",
          "postalCode": "400015",
          "addressCountry": "IN"
        },
        "knowsAbout": [
          "Musculoskeletal Physiotherapy",
          "Sports Injury Rehabilitation",
          "Post-Surgical Joint Rehabilitation",
          "Spine and Disc Rehabilitation",
          "Dry Needling Therapy",
          "Manual Therapy",
          "Neurological Gait Retraining"
        ]
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
            "name": "Dr. Pawan Gupta (PT)",
            "item": "https://runtowinphysiotherapy.com/dr-pawan-gupta"
          }
        ]
      }
    ]
  };

  return (
    <article className="bg-slate-50 min-h-screen text-slate-900 animate-in fade-in duration-200">
      <SeoMeta
        title="Dr. Pawan Gupta (PT) | Senior Consultant Physiotherapist Mumbai | B.P.Th, M.P.Th, MIAP"
        description="Profile of Dr. Pawan Gupta (PT), Senior Consultant Physiotherapist & Clinical Director at Run To Win Healthcare Services Mumbai. 8+ years clinical experience in orthopedic, sports, post-surgical & neuro rehabilitation."
        canonicalUrl="https://runtowinphysiotherapy.com/dr-pawan-gupta"
        schema={doctorPersonSchema}
      />

      {/* Breadcrumbs Navigation */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <Breadcrumbs
            className="!py-0 !px-0 !bg-transparent !border-0 text-xs"
            onHomeClick={onBackToHome}
            items={[
              { label: 'Dr. Pawan Gupta (PT)', current: true }
            ]}
          />
        </div>
      </div>

      {/* 1. Hero Header & Professional Introduction */}
      <header className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white py-14 sm:py-20 relative overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Col: Core Identity & Introduction */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-bold uppercase tracking-wider">
                  <Stethoscope className="w-3.5 h-3.5 text-blue-400" />
                  <span>Senior Consultant Physiotherapist</span>
                </span>
                <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Clinical Director</span>
                </span>
              </div>

              {/* H1 Heading */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-heading leading-tight">
                Dr. Pawan Gupta <span className="text-blue-400">(PT)</span>
              </h1>

              {/* Verified Credentials String */}
              <p className="text-base sm:text-lg text-slate-200 font-medium leading-relaxed">
                B.P.Th, M.P.Th (Musculoskeletal & Sports Specialist), MIAP<br />
                <span className="text-blue-300 font-normal text-sm sm:text-base">
                  Certified Dry Needling Practitioner • Certified Manual Therapist
                </span>
              </p>

              {/* Section 1: Professional Introduction */}
              <div className="text-sm sm:text-base text-slate-300 leading-relaxed space-y-3 font-normal max-w-2xl">
                <p>
                  Dr. Pawan Gupta (PT) is the Clinical Director and Lead Physiotherapist at <strong>Run To Win Healthcare Services Mumbai</strong>. With over 8 years of hands-on clinical practice in Mumbai, he provides evidence-based rehabilitation for complex spine conditions, sports trauma, post-surgical joint replacements, and neurological recovery.
                </p>
                <p className="text-xs sm:text-sm text-slate-400">
                  Practicing from Sewri Clinic and delivering specialized home visit physiotherapy across more than 35 Mumbai suburbs, Dr. Pawan collaborates closely with leading orthopedic and neuro-surgeons to ensure safe, protocol-driven patient recovery.
                </p>
              </div>

              {/* Clinical Experience Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-slate-800/80">
                {CLINIC_CONTACT.stats.map((stat, idx) => (
                  <div key={idx} className="bg-white/5 backdrop-blur-sm rounded-2xl p-3.5 border border-white/10">
                    <div className="text-2xl font-extrabold text-blue-400 font-heading">
                      {stat.value}
                    </div>
                    <div className="text-[11px] text-slate-300 mt-0.5 font-medium leading-tight">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Primary Contact / Booking Actions */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => onOpenBooking('Consultation with Dr. Pawan Gupta', 'Sewri Clinic Consultation')}
                  className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-lg shadow-blue-900/40 transition flex items-center space-x-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Consultation With Dr. Pawan</span>
                </button>

                <button
                  onClick={() => onOpenBooking('Home Visit Assessment by Dr. Pawan Gupta', 'Home Visit across Mumbai')}
                  className="px-5 py-3.5 rounded-xl bg-white/15 hover:bg-white/25 text-white font-bold text-sm border border-white/20 transition flex items-center space-x-2"
                >
                  <MapPin className="w-4 h-4 text-emerald-400" />
                  <span>Request Mumbai Home Visit</span>
                </button>

                <a
                  href={`https://wa.me/${CLINIC_CONTACT.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent('Hello Dr. Pawan Gupta, I would like to schedule a physiotherapy consultation.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition flex items-center space-x-2 shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </div>

            </div>

            {/* Right Col: Authentic Professional Photograph Card */}
            <div className="lg:col-span-5">
              <div className="bg-slate-900/90 rounded-3xl p-6 sm:p-7 border border-slate-800 shadow-2xl backdrop-blur relative overflow-hidden">
                
                {/* Authentic Professional Photograph with Proper SEO */}
                <figure
                  itemScope
                  itemType="https://schema.org/ImageObject"
                  className="w-full aspect-[4/5] max-h-[460px] rounded-2xl overflow-hidden border-2 border-blue-500/40 shadow-xl relative bg-slate-950 mb-5 group"
                >
                  <meta itemProp="name" content="Dr. Pawan Gupta (PT) - Run To Win Healthcare Mumbai" />
                  <meta itemProp="caption" content="Dr. Pawan Gupta (PT), Senior Consultant Physiotherapist & Clinical Director at Run To Win Healthcare Services Mumbai" />
                  <meta itemProp="contentUrl" content="https://runtowinphysiotherapy.com/images/dr_pawan_gupta.jpg" />
                  <meta itemProp="representativeOfPage" content="true" />
                  <img
                    id="dr-pawan-gupta-photo"
                    src={doctorPhoto}
                    alt="Dr. Pawan Gupta (PT) - Run To Win Healthcare Mumbai | Senior Consultant Physiotherapist & Rehabilitation Specialist"
                    title="Dr. Pawan Gupta (PT) - Run To Win Healthcare Mumbai"
                    itemProp="image"
                    loading="eager"
                    fetchPriority="high"
                    decoding="async"
                    width="400"
                    height="500"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top filter brightness-[1.02] contrast-[1.04] transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent pointer-events-none" />
                  <figcaption className="absolute bottom-3 left-3 right-3 bg-slate-950/85 backdrop-blur-md rounded-xl p-3 border border-white/10 text-white flex items-center justify-between shadow-lg">
                    <div>
                      <div className="text-xs font-bold font-heading">Dr. Pawan Gupta (PT)</div>
                      <div className="text-[10px] text-blue-300 font-medium">Run To Win Healthcare Mumbai</div>
                    </div>
                    <div className="flex items-center space-x-1 text-amber-400 text-xs font-bold">
                      <Star className="w-3.5 h-3.5 fill-amber-400" />
                      <span>4.9 / 5.0</span>
                    </div>
                  </figcaption>
                </figure>

                {/* Verified Identity Indicators */}
                <div className="space-y-2.5 text-xs text-slate-300">
                  <div className="flex items-center space-x-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Member, Indian Association of Physiotherapists (MIAP)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Registered with Maharashtra State Council (MSOTPT)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>Sewri Clinic (10, Manish Investment) & Home Visits Across 35+ Suburbs</span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </header>

      {/* Main Content Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

          {/* Left Column: 10 Core Authority Modules */}
          <div className="lg:col-span-8 space-y-12">

            {/* 2. Education */}
            <section className="bg-white rounded-3xl p-7 sm:p-9 border border-slate-200/90 shadow-sm">
              <div className="flex items-center space-x-2 text-xs font-bold text-blue-600 uppercase tracking-wider mb-3">
                <GraduationCap className="w-4 h-4" />
                <span>Academic Foundation</span>
              </div>
              <h2 className="text-2xl font-bold font-heading text-slate-900 mb-6">
                Education & Formal Medical Training
              </h2>

              <div className="space-y-4">
                <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/80">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="text-base font-bold text-slate-900 font-heading">
                        Bachelor of Physiotherapy (B.P.Th)
                      </h3>
                      <p className="text-xs font-semibold text-blue-700 mt-0.5">
                        4.5-Year Comprehensive Clinical Degree Program
                      </p>
                    </div>
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-blue-100 text-blue-800">
                      Undergraduate
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
                    Rigorous academic curriculum and mandatory clinical rotations across general medicine, orthopedic surgery, neurology, intensive care, and community rehabilitation. Developed core proficiencies in gross anatomy, joint kinematics, neuro-physiology, and manual physical examination.
                  </p>
                </div>

                <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/80">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="text-base font-bold text-slate-900 font-heading">
                        Master of Physiotherapy (M.P.Th)
                      </h3>
                      <p className="text-xs font-semibold text-blue-700 mt-0.5">
                        Postgraduate Specialization in Musculoskeletal & Sports Physiotherapy
                      </p>
                    </div>
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800">
                      Postgraduate Specialization
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
                    Advanced clinical mastery in orthopedic disorders, spine derangements, sports biomechanics, joint arthroplasty rehabilitation, and manual therapy. Focus on high-precision physical assessment, tissue-healing kinetics, and return-to-sport testing batteries.
                  </p>
                </div>
              </div>
            </section>

            {/* 3. Clinical Experience */}
            <section className="bg-white rounded-3xl p-7 sm:p-9 border border-slate-200/90 shadow-sm">
              <div className="flex items-center space-x-2 text-xs font-bold text-emerald-600 uppercase tracking-wider mb-3">
                <Clock className="w-4 h-4" />
                <span>Practice History</span>
              </div>
              <h2 className="text-2xl font-bold font-heading text-slate-900 mb-4">
                Clinical Experience & Track Record
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                Over the past 8+ years, Dr. Pawan Gupta (PT) has provided comprehensive physical therapy care to diverse patient populations across Mumbai — from active marathoners and desk-bound corporate professionals to post-operative geriatric patients recovering at home.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4.5 bg-slate-50 rounded-2xl border border-slate-200">
                  <div className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-1">
                    8+ Years Clinical Practice
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Active clinical practice treating acute spinal emergencies, sports trauma, chronic joint degeneration, and neurological deficits in Mumbai.
                  </p>
                </div>

                <div className="p-4.5 bg-slate-50 rounded-2xl border border-slate-200">
                  <div className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-1">
                    1,000+ Recovered Patients
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Structured rehabilitation delivery resulting in pain resolution, restored joint mobility, and return to independent living.
                  </p>
                </div>

                <div className="p-4.5 bg-slate-50 rounded-2xl border border-slate-200">
                  <div className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-1">
                    4.9 ★ Google Reviews
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Documented clinical feedback and 128+ verified reviews from patients treated at Sewri Clinic and via home visit sessions.
                  </p>
                </div>

                <div className="p-4.5 bg-slate-50 rounded-2xl border border-slate-200">
                  <div className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-1">
                    Surgeon Collaboration
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Close coordination with orthopedic surgeons, neurosurgeons, and spine specialists across Mumbai hospitals for operative protocol adherence.
                  </p>
                </div>
              </div>
            </section>

            {/* 4. Areas of Clinical Focus */}
            <section className="bg-white rounded-3xl p-7 sm:p-9 border border-slate-200/90 shadow-sm">
              <div className="flex items-center space-x-2 text-xs font-bold text-blue-600 uppercase tracking-wider mb-3">
                <Activity className="w-4 h-4" />
                <span>Specialized Practice Domains</span>
              </div>
              <h2 className="text-2xl font-bold font-heading text-slate-900 mb-6">
                Areas of Clinical Focus
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                  <h3 className="text-sm font-bold text-slate-900 font-heading mb-2 flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-blue-600" />
                    <span>Orthopedic & Spine Care</span>
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Cervical spondylosis, lumbar disc herniation, sciatica nerve decompression, postural thoracic kyphosis, and degenerative joint osteoarthritis.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                  <h3 className="text-sm font-bold text-slate-900 font-heading mb-2 flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-amber-600" />
                    <span>Sports Injury & Return-to-Sport</span>
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    ACL tear rehabilitation, runner's knee (patellofemoral pain), ankle inversion sprains, rotator cuff tendinitis, and athletic kinetic chain retraining.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                  <h3 className="text-sm font-bold text-slate-900 font-heading mb-2 flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-600" />
                    <span>Post-Surgical Joint Rehabilitation</span>
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Total Knee Replacement (TKR), Total Hip Replacement (THR), spine decompression/fusion, and arthroscopic ligament reconstruction with surgeon compliance.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                  <h3 className="text-sm font-bold text-slate-900 font-heading mb-2 flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-purple-600" />
                    <span>Neurological Rehabilitation</span>
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Post-stroke motor relearning, hemiplegic tone modulation, Parkinson's amplitude training, balance stability, and fall risk prevention.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                  <h3 className="text-sm font-bold text-slate-900 font-heading mb-2 flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-rose-600" />
                    <span>Chronic Pain Management</span>
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Myofascial pain syndrome, tension cervicogenic headaches, chronic low back strain, and persistent joint stiffness treated via active mechanotherapy.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                  <h3 className="text-sm font-bold text-slate-900 font-heading mb-2 flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-600" />
                    <span>Geriatric Mobility & Home Visits</span>
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Bedbound-to-standing transfers, walker-assisted gait training, fall prevention home audits, and senior functional independence across Mumbai.
                  </p>
                </div>
              </div>
            </section>

            {/* 5. Physiotherapy Philosophy */}
            <section className="bg-white rounded-3xl p-7 sm:p-9 border border-slate-200/90 shadow-sm">
              <div className="flex items-center space-x-2 text-xs font-bold text-blue-600 uppercase tracking-wider mb-3">
                <HeartHandshake className="w-4 h-4" />
                <span>Treatment Principles</span>
              </div>
              <h2 className="text-2xl font-bold font-heading text-slate-900 mb-4">
                Physiotherapy Philosophy: "Care To Cure"
              </h2>
              <div className="prose prose-slate max-w-none text-xs sm:text-sm text-slate-700 leading-relaxed space-y-4">
                <p>
                  Dr. Pawan Gupta’s clinical philosophy centers on <strong>root-cause mechanical resolution</strong> rather than transient symptom suppression. Passive modalities (like hot packs or temporary massage) can offer momentary comfort, but long-term recovery demands correcting faulty movement mechanics, muscle length-tension deficits, and tissue load capacity.
                </p>
                <div className="bg-blue-50/70 p-4.5 rounded-2xl border border-blue-100 space-y-2 text-blue-950 font-medium">
                  <div className="text-xs font-bold uppercase tracking-wider text-blue-900">
                    Core Clinical Maxims:
                  </div>
                  <ul className="space-y-1.5 text-xs text-blue-900">
                    <li className="flex items-start space-x-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                      <span><strong>Criteria-Based Progression:</strong> Milestones are cleared based on objective tissue readiness and functional capacity, not arbitrary calendar dates.</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                      <span><strong>Empowerment Over Dependency:</strong> Patients are guided to become self-reliant managers of their spine and joint health.</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                      <span><strong>Ethical Transparency:</strong> Honest clinical prognoses without exaggerated promises or 100% cure claims.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 6. Rehabilitation Approach */}
            <section className="bg-white rounded-3xl p-7 sm:p-9 border border-slate-200/90 shadow-sm">
              <div className="flex items-center space-x-2 text-xs font-bold text-blue-600 uppercase tracking-wider mb-3">
                <Zap className="w-4 h-4" />
                <span>Clinical Methodology</span>
              </div>
              <h2 className="text-2xl font-bold font-heading text-slate-900 mb-6">
                Structured 4-Phase Rehabilitation Approach
              </h2>

              <div className="space-y-4">
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-blue-600 bg-blue-100 px-2.5 py-0.5 rounded-md">
                    Phase 1
                  </span>
                  <h3 className="text-base font-bold text-slate-900 font-heading mt-2 mb-1">
                    Detailed 45-Minute Biomechanical Assessment
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Subjective case history, physical palpation, active and passive range of motion goniometry, manual muscle testing, neural tension testing (SLR, Slump), and functional gait analysis.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-blue-600 bg-blue-100 px-2.5 py-0.5 rounded-md">
                    Phase 2
                  </span>
                  <h3 className="text-base font-bold text-slate-900 font-heading mt-2 mb-1">
                    Hands-On Manual Therapy & Pain Relief
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Application of Maitland and Mulligan joint mobilization, intramuscular dry needling for myofascial trigger points, therapeutic ultrasound, and kinesiology taping to alleviate acute spasm and restore arthrokinematics.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-blue-600 bg-blue-100 px-2.5 py-0.5 rounded-md">
                    Phase 3
                  </span>
                  <h3 className="text-base font-bold text-slate-900 font-heading mt-2 mb-1">
                    Progressive Functional Loading & Stabilization
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Transition from low-load isometrics to dynamic concentric/eccentric loading, kinetic chain strengthening, neuromuscular re-education, and postural core stabilization.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-blue-600 bg-blue-100 px-2.5 py-0.5 rounded-md">
                    Phase 4
                  </span>
                  <h3 className="text-base font-bold text-slate-900 font-heading mt-2 mb-1">
                    Return to Sport, Work & Long-Term Relapse Prevention
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Objective battery clearance (hop testing, balance reach, functional transfer independence), workstation ergonomic optimization, and home exercise maintenance.
                  </p>
                </div>
              </div>
            </section>

            {/* 7. Certifications Only Where Verified */}
            <section className="bg-white rounded-3xl p-7 sm:p-9 border border-slate-200/90 shadow-sm">
              <div className="flex items-center space-x-2 text-xs font-bold text-emerald-600 uppercase tracking-wider mb-3">
                <ShieldCheck className="w-4 h-4" />
                <span>Verified Credentials</span>
              </div>
              <h2 className="text-2xl font-bold font-heading text-slate-900 mb-6">
                Professional Memberships & Verified Certifications
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-slate-50 p-4.5 rounded-2xl border border-slate-200 flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                      Life Member of IAP (MIAP)
                    </h3>
                    <p className="text-xs text-slate-600 mt-1">
                      Registered Life Member with the Indian Association of Physiotherapists.
                    </p>
                  </div>
                </div>

                <div className="bg-slate-50 p-4.5 rounded-2xl border border-slate-200 flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                      Maharashtra State Council (MSOTPT)
                    </h3>
                    <p className="text-xs text-slate-600 mt-1">
                      Licensed with Maharashtra State Council for Occupational Therapy and Physiotherapy.
                    </p>
                  </div>
                </div>

                <div className="bg-slate-50 p-4.5 rounded-2xl border border-slate-200 flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                      Certified Dry Needling Practitioner (CDNP)
                    </h3>
                    <p className="text-xs text-slate-600 mt-1">
                      Formal certification in intramuscular trigger point dry needling for myofascial pain syndromes.
                    </p>
                  </div>
                </div>

                <div className="bg-slate-50 p-4.5 rounded-2xl border border-slate-200 flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                      Certified Manual Therapist
                    </h3>
                    <p className="text-xs text-slate-600 mt-1">
                      Specialized training in Maitland and Mulligan joint mobilization concepts.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 8. Professional Development Only Where Verified */}
            <section className="bg-white rounded-3xl p-7 sm:p-9 border border-slate-200/90 shadow-sm">
              <div className="flex items-center space-x-2 text-xs font-bold text-blue-600 uppercase tracking-wider mb-3">
                <BookOpen className="w-4 h-4" />
                <span>Continuous Learning</span>
              </div>
              <h2 className="text-2xl font-bold font-heading text-slate-900 mb-4">
                Professional Development & Evidence-Based Practice
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed space-y-2">
                Dr. Pawan Gupta (PT) actively stays informed on updated clinical guidelines from international bodies in orthopedics, sports medicine, and stroke rehabilitation. This includes regular continuing education in non-operative spine treatment, post-surgical arthroplasty protocols, and neuromuscular retraining techniques.
              </p>
            </section>

            {/* 9. Patient Education Approach & Interactive Studio */}
            <section className="bg-white rounded-3xl p-7 sm:p-9 border border-slate-200/90 shadow-sm">
              <div className="flex items-center space-x-2 text-xs font-bold text-blue-600 uppercase tracking-wider mb-3">
                <Play className="w-4 h-4" />
                <span>Patient Education & Visual Guidance</span>
              </div>
              <h2 className="text-2xl font-bold font-heading text-slate-900 mb-3">
                Patient Education Approach
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                Understanding your diagnosis removes anxiety and accelerates healing. Dr. Pawan educates patients on their spinal and joint mechanics, posture ergonomics, and safe movement strategies. To support daily home exercises, he provides high-definition video demonstrations with biomechanical cueing.
              </p>

              {/* Interactive Video Studio Embedded */}
              <div className="rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 p-5">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-xs font-bold text-white uppercase tracking-wider flex items-center space-x-2">
                    <Play className="w-4 h-4 text-blue-400 fill-current" />
                    <span>Dr. Pawan Gupta Exercise Video Studio</span>
                  </div>
                  <span className="text-[10px] text-blue-300 bg-blue-900/50 px-2 py-0.5 rounded border border-blue-500/30">
                    Clinical Demonstrations
                  </span>
                </div>
                <DoctorExerciseVideoStudio
                  onOpenBooking={(service, area) => onOpenBooking(service || 'Exercise & Physical Therapy Session', area)}
                  standalone={false}
                />
              </div>
            </section>

            {/* 13. Author Identity & Published Medical Articles */}
            <section className="bg-white rounded-3xl p-7 sm:p-9 border border-slate-200/90 shadow-sm">
              <div className="flex items-center space-x-2 text-xs font-bold text-blue-600 uppercase tracking-wider mb-3">
                <FileText className="w-4 h-4" />
                <span>Clinical Author & Medical Reviewer</span>
              </div>
              <h2 className="text-2xl font-bold font-heading text-slate-900 mb-3">
                Medical & Clinical Articles Written by Dr. Pawan Gupta (PT)
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                All patient education guides, condition explanations, and rehabilitation protocols on this website are authored or clinically reviewed by Dr. Pawan Gupta (PT) to ensure medical accuracy, ethical compliance, and patient safety.
              </p>

              <div className="space-y-3">
                {CLINICAL_ARTICLES.map((article) => (
                  <div
                    key={article.id}
                    className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-300 transition flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                  >
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-wider text-blue-600">
                        {article.category} • {article.readTime}
                      </div>
                      <h3 className="text-sm font-bold text-slate-900 mt-1">
                        {article.title}
                      </h3>
                      <div className="text-[11px] text-slate-500 mt-1">
                        Written by Dr. Pawan Gupta (PT) • {article.publishedDate}
                      </div>
                    </div>

                    <button
                      onClick={() => onSelectArticle ? onSelectArticle(article.id) : (window.location.hash = `#article/${article.id}`)}
                      className="px-3.5 py-1.5 rounded-xl bg-white border border-slate-200 hover:bg-blue-50 text-blue-700 font-bold text-xs transition flex items-center space-x-1 shrink-0 self-start sm:self-center"
                    >
                      <span>Read Guide</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            </section>

          </div>

          {/* Right Column: 10. Clinic Information & 11. Contact/Booking CTA */}
          <div className="lg:col-span-4 space-y-6">

            {/* 10. Clinic Information Card (Sticky) */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm sticky top-6 space-y-6">
              
              <div className="flex items-center space-x-3 pb-4 border-b border-slate-100">
                <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center font-bold text-lg shadow-md shadow-blue-200">
                  PG
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 font-heading">
                    Dr. Pawan Gupta (PT)
                  </h3>
                  <p className="text-xs text-blue-700 font-semibold">
                    Clinical Director & Lead Physical Therapist
                  </p>
                </div>
              </div>

              {/* Clinic Information */}
              <div className="space-y-3.5 text-xs text-slate-600">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                  Clinic Location & Practice Hours
                </h4>

                <div className="flex items-start space-x-2.5">
                  <MapPin className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block">Sewri Clinic Address:</strong>
                    <span className="text-slate-800 font-medium leading-snug block">
                      10, Ground Floor, Manish Investment, Datta Mandir Marg, Off TJ Road, Near Post Office, Sewri, Mumbai 400015
                    </span>
                    <a
                      href={CLINIC_CONTACT.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1 text-blue-600 hover:text-blue-800 font-semibold text-[11px] mt-1"
                    >
                      <span>Get Directions on Google Maps →</span>
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-2.5">
                  <Clock className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block">Clinic Hours:</strong>
                    <span>{CLINIC_CONTACT.clinicHours.weekdays}</span>
                    <span className="block text-slate-500 text-[11px]">{CLINIC_CONTACT.clinicHours.sunday}</span>
                  </div>
                </div>

                <div className="flex items-start space-x-2.5">
                  <Activity className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block">Mumbai Home Visits:</strong>
                    <span>{CLINIC_CONTACT.clinicHours.homeVisits}</span>
                    <span className="block text-slate-500 text-[11px]">35+ Suburbs Covered</span>
                  </div>
                </div>

                <div className="flex items-start space-x-2.5">
                  <Phone className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block">Phone Consultation:</strong>
                    <a href={`tel:${CLINIC_CONTACT.phone}`} className="text-blue-700 font-semibold hover:underline">
                      {CLINIC_CONTACT.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-2.5">
                  <Mail className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block">Email:</strong>
                    <span>{CLINIC_CONTACT.email}</span>
                  </div>
                </div>
              </div>

              {/* 11. Contact & Booking CTA */}
              <div className="pt-4 border-t border-slate-100 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                  Book Clinical Evaluation
                </h4>

                <button
                  onClick={() => onOpenBooking('Sewri Clinic Consultation with Dr. Pawan Gupta', 'Sewri Clinic')}
                  className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md transition flex items-center justify-center space-x-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Sewri Clinic Consultation</span>
                </button>

                <button
                  onClick={() => onOpenBooking('Doorstep Home Visit with Dr. Pawan Gupta', 'Home Visit across Mumbai')}
                  className="w-full py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition flex items-center justify-center space-x-2"
                >
                  <MapPin className="w-4 h-4 text-emerald-400" />
                  <span>Book Doorstep Home Visit</span>
                </button>

                <a
                  href={`https://wa.me/${CLINIC_CONTACT.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent('Hello Dr. Pawan Gupta, I would like to book a physiotherapy appointment.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Dr. Pawan</span>
                </a>

                <button
                  onClick={() => onOpenAiAssistant('I have a question for Dr. Pawan Gupta regarding physiotherapy treatment in Mumbai.')}
                  className="w-full py-2.5 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-800 border border-blue-200 font-semibold text-xs transition flex items-center justify-center space-x-1.5"
                >
                  <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                  <span>Ask AI Assistant About Dr. Pawan</span>
                </button>
              </div>

              {/* Ethical Transparency Note */}
              <div className="p-3.5 rounded-2xl bg-amber-50/80 border border-amber-200 text-[11px] text-amber-950 leading-relaxed">
                <strong>Ethical Clinical Standard:</strong> No treatment guarantees or fixed recovery timelines are fabricated. All therapies adhere strictly to in-person physical assessment and operating surgeon guidance.
              </div>

            </div>

          </div>

        </div>
      </div>
    </article>
  );
};

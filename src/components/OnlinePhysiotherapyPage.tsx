import React, { useState } from 'react';
import { 
  Video, 
  ShieldCheck, 
  Clock, 
  Phone, 
  MessageSquare, 
  CheckCircle2, 
  Calendar, 
  ChevronRight, 
  ChevronDown, 
  ArrowRight, 
  Globe, 
  Laptop, 
  AlertCircle,
  FileCheck,
  Zap
} from 'lucide-react';
import { CLINIC_CONTACT } from '../data/clinicData';
import { SeoMeta } from './SeoMeta';
import { Breadcrumbs } from './Breadcrumbs';

import doctorPhoto from '../assets/images/regenerated_image_1787089379420.webp';
import ergonomicImg from '../assets/images/regenerated_image_1787088933047.webp';

interface OnlinePhysiotherapyPageProps {
  onBackToHome: () => void;
  onNavigatePage: (page: string) => void;
  onSelectCondition: (conditionId: string) => void;
  onOpenBooking: (prefillService?: string, prefillArea?: string) => void;
  onOpenAiAssistant: (context?: string) => void;
}

export const OnlinePhysiotherapyPage: React.FC<OnlinePhysiotherapyPageProps> = ({
  onBackToHome,
  onNavigatePage,
  onSelectCondition,
  onOpenBooking,
  onOpenAiAssistant
}) => {
  const [openFaqId, setOpenFaqId] = useState<number | null>(0);

  const teleConditions = [
    {
      title: 'Desk Worker Neck & Tech-Neck Strain',
      desc: 'Forward head posture, trapezius spasms, and thoracic stiffness evaluated live over video with immediate desk ergonomic adjustments.',
      conditionId: 'cervical-neck'
    },
    {
      title: 'Ergonomic Workstation & Posture Strain',
      desc: 'Camera-guided evaluation of chair height, monitor alignment, keyboard angle, and lumbar support to eliminate daily postural fatigue.',
      conditionId: 'cervical-neck'
    },
    {
      title: 'Mild-to-Moderate Lower Back Pain',
      desc: 'Guided directional movement testing (McKenzie protocol) to identify extension or flexion preference and prescribe home decompression routines.',
      conditionId: 'lower-back'
    },
    {
      title: 'Repetitive Strain Injury (RSI) & Tendinopathy',
      desc: 'Mouse wrist strain, tennis elbow, and forearm tightness managed through self-massage techniques, nerve glides, and progressive tendon loading.',
      conditionId: 'shoulder'
    },
    {
      title: 'Post-Surgery & Post-Discharge Follow-Ups',
      desc: 'Reviewing exercise form, answering questions, and advancing resistance bands for patients transitioning to independent home programs.',
      conditionId: 'knee-replacement-rehab'
    },
    {
      title: 'Second Opinion on MRI & Physio Protocols',
      desc: 'Detailed discussion of your MRI / X-ray findings with Dr. Pawan Gupta (PT) to understand non-surgical rehabilitation options.',
      conditionId: 'lower-back'
    }
  ];

  const assessmentSteps = [
    {
      step: '01',
      title: 'Virtual Clinical Intake & Report Review',
      desc: 'Review of medical history, pain triggers, daily schedule, and previous imaging reports sent in advance via WhatsApp or email.'
    },
    {
      step: '02',
      title: 'Guided Movement & Directional Testing',
      desc: 'Dr. Pawan Gupta guides you through specific active neck, spine, or joint movements on camera to assess range of motion and symptom response.'
    },
    {
      step: '03',
      title: 'Live Workstation / Environment Audit',
      desc: 'Positioning your laptop or phone camera to analyze your actual sitting posture, monitor eye-level, and ergonomic setup.'
    },
    {
      step: '04',
      title: 'Real-Time Exercise Instruction & Video Prescription',
      desc: 'Coaching you through 3 to 5 targeted therapeutic exercises with real-time feedback on form, followed by digital video prescription.'
    }
  ];

  const treatmentTechniques = [
    {
      name: 'Interactive McKenzie Mechanical Guidance',
      detail: 'Self-administered directional movements (repeated extensions or lateral glides) coached live to test for pain centralization.'
    },
    {
      name: 'Workstation Ergonomic Optimization',
      detail: 'Personalized modifications to chair lumbar support, desk height, monitor distance, and mouse positioning.'
    },
    {
      name: 'Neural Mobilization & Nerve Gliding',
      detail: 'Gentle, structured nerve slider exercises for median and sciatic nerve pathways that can be performed safely at your desk.'
    },
    {
      name: 'Real-Time Form Correction & Loading Pacing',
      detail: 'Live visual feedback on squat mechanics, hip hinge, scapular retraction, and core bracing using household props.'
    },
    {
      name: 'Digital HD Exercise Video Library',
      detail: 'Personalized video links and step-by-step instructions sent straight to your phone after the session.'
    },
    {
      name: 'Honest Clinical Triage',
      detail: 'If your condition requires hands-on manual therapy or in-person special tests, we transparently guide you to an in-clinic consultation.'
    }
  ];

  const faqs = [
    {
      q: 'Can physiotherapy really be done effectively online over video call?',
      a: 'Yes! International clinical studies demonstrate that tele-physiotherapy is highly effective for mechanical spine pain, desk posture syndrome, tendinopathy, and post-operative exercise progression. A significant portion of successful physiotherapy relies on clinical assessment, movement analysis, patient education, and correct exercise execution—all of which are delivered seamlessly via video.'
    },
    {
      q: 'What platform is used for the online consultation?',
      a: 'Online consultations are conducted via Google Meet or WhatsApp Video. Once your appointment is confirmed, you receive a direct secure link. No complicated software download is required; you can connect via smartphone, tablet, or laptop.'
    },
    {
      q: 'What should I prepare before my online consultation?',
      a: 'Wear comfortable clothing that allows easy movement (shorts and a T-shirt), ensure adequate room lighting, position your camera so your full body or relevant joint is visible, and have any previous MRI, CT, or X-ray reports ready on your device.'
    },
    {
      q: 'Can I consult Dr. Pawan Gupta (PT) if I live outside Mumbai or abroad?',
      a: 'Yes. We routinely consult patients across India (Delhi, Bengaluru, Hyderabad, Pune) and international NRI clients in the UAE, UK, and USA seeking expert non-surgical orthopedic second opinions and structured exercise guidance.'
    },
    {
      q: 'What happens if Dr. Pawan Gupta determines I need hands-on therapy?',
      a: 'If your clinical evaluation indicates acute joint blockages, high-grade spasticity, or neurological red flags that require hands-on mobilization or dry needling, Dr. Pawan Gupta will honestly inform you and either schedule an in-clinic appointment at our Sewri facility or guide you to a reputable in-person specialist in your city.'
    }
  ];

  const pageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://runtowinphysiotherapy.com/online-physiotherapy#webpage",
        "name": "Online Physiotherapy Consultation | Tele-Rehab | Dr. Pawan Gupta (PT)",
        "url": "https://runtowinphysiotherapy.com/online-physiotherapy",
        "description": "Consult senior physiotherapist Dr. Pawan Gupta (PT) online from anywhere. Expert posture assessment, exercise video prescription, and recovery progression.",
        "isPartOf": {
          "@id": "https://runtowinphysiotherapy.com/#website"
        },
        "about": {
          "@id": "https://runtowinphysiotherapy.com/#clinic"
        }
      },
      {
        "@type": "MedicalTherapy",
        "@id": "https://runtowinphysiotherapy.com/online-physiotherapy#service",
        "name": "Online Physiotherapy Consultation",
        "description": "Virtual tele-rehabilitation, posture assessment, and personalized exercise prescription by Dr. Pawan Gupta (PT).",
        "relevantSpecialty": {
          "@type": "MedicalSpecialty",
          "name": "PhysicalTherapy"
        },
        "provider": {
          "@id": "https://runtowinphysiotherapy.com/#clinic"
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
            "name": "Services",
            "item": "https://runtowinphysiotherapy.com/services"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Online Physiotherapy",
            "item": "https://runtowinphysiotherapy.com/online-physiotherapy"
          }
        ]
      }
    ]
  };

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 antialiased selection:bg-blue-600 selection:text-white">
      <SeoMeta
        title="Online Physiotherapy Consultation | Tele-Rehab | Dr. Pawan Gupta (PT)"
        description="Consult senior physiotherapist Dr. Pawan Gupta (PT) online from anywhere. Expert posture assessment, exercise video prescription, and recovery progression."
        canonicalUrl="https://runtowinphysiotherapy.com/online-physiotherapy"
        schema={pageSchema}
      />

      {/* Breadcrumbs */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <Breadcrumbs
            className="!py-0 !px-0 !bg-transparent !border-0 text-xs"
            onHomeClick={onBackToHome}
            items={[
              { label: 'Services', onClick: () => onNavigatePage('services') },
              { label: 'Online Physiotherapy Consultation', current: true }
            ]}
          />
        </div>
      </div>

      {/* Hero Header */}
      <header className="bg-gradient-to-b from-sky-50/70 via-white to-slate-50 py-12 md:py-16 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider">
                <Video className="w-3.5 h-3.5 text-sky-600" />
                <span>Global & Pan-India Tele-Rehabilitation</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-heading leading-tight">
                Online Physiotherapy Consultation
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                Consult <strong className="text-slate-900">Dr. Pawan Gupta (PT)</strong> securely from the comfort of your home or office. Receive comprehensive biomechanical evaluation, live exercise form coaching, and customized digital recovery protocols.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => onOpenBooking('Online Tele-Physio Consultation', 'Online Video Consultation')}
                  className="px-6 py-3.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-sm flex items-center space-x-2 shadow-md transition"
                >
                  <Calendar className="w-4 h-4 text-blue-200" />
                  <span>Book Online Consultation</span>
                </button>

                <a
                  href={`tel:${CLINIC_CONTACT.phone}`}
                  className="px-5 py-3.5 rounded-xl bg-white border border-slate-300 hover:border-slate-400 text-slate-800 font-bold text-sm flex items-center space-x-2 shadow-2xs transition"
                >
                  <Phone className="w-4 h-4 text-blue-600" />
                  <span>Call {CLINIC_CONTACT.phoneDisplay}</span>
                </a>

                <a
                  href={`https://wa.me/${CLINIC_CONTACT.whatsappNumber}?text=Hello%20Dr.%20Pawan%20Gupta,%20I%20would%20like%20to%20inquire%20about%20an%20Online%20Physiotherapy%20Consultation.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm flex items-center space-x-2 shadow-2xs transition"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-100" />
                  <span>WhatsApp Doctor</span>
                </a>
              </div>

              <div className="pt-4 flex flex-wrap gap-4 text-xs text-slate-500 font-medium">
                <span className="flex items-center space-x-1.5">
                  <Globe className="w-4 h-4 text-sky-600" />
                  <span>Available Across India & Worldwide</span>
                </span>
                <span className="flex items-center space-x-1.5">
                  <Laptop className="w-4 h-4 text-blue-600" />
                  <span>HD Video via Google Meet / WhatsApp</span>
                </span>
                <span className="flex items-center space-x-1.5">
                  <FileCheck className="w-4 h-4 text-emerald-600" />
                  <span>Digital Exercise Prescriptions Included</span>
                </span>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-slate-100 relative">
                <img
                  src={ergonomicImg}
                  alt="Online physiotherapy assessment and ergonomics evaluation by Dr. Pawan Gupta"
                  className="w-full h-72 sm:h-80 object-cover"
                  loading="eager"
                  width="500"
                  height="360"
                />
                <div className="p-4 bg-white border-t border-slate-200 text-xs text-slate-600 flex items-center justify-between">
                  <span className="font-semibold text-slate-900">Dr. Pawan Gupta (PT)</span>
                  <span className="text-sky-700 font-semibold">Tele-Physiotherapy Consultant</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </header>

      {/* Who the Service is For */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold text-sky-700 uppercase tracking-wider">Candidate Profiles</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading mt-1">
              Who Online Physiotherapy is For
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              Tele-physiotherapy provides high-touch clinical guidance without requiring physical travel to our Mumbai clinic.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                title: 'Corporate & Remote Workers',
                desc: 'Professionals experiencing neck, wrist, or lower back strain who want live workstation ergonomic optimization.'
              },
              {
                title: 'Patients Outside Mumbai / NRIs',
                desc: 'Individuals across India or overseas seeking Dr. Pawan Gupta’s specialized second opinion on spine or knee conditions.'
              },
              {
                title: 'Post-Rehab Maintenance',
                desc: 'Patients who have completed in-person sessions and need weekly check-ins to advance their strength progression.'
              },
              {
                title: 'Frequent Business Travelers',
                desc: 'Clients whose travel schedules prevent weekly clinic visits but who want continuity in their rehabilitation routines.'
              }
            ].map((item, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <CheckCircle2 className="w-5 h-5 text-sky-600" />
                <h3 className="text-sm font-bold text-slate-900">{item.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conditions Commonly Addressed */}
      <section className="py-14 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold text-sky-700 uppercase tracking-wider">Tele-Rehab Scope</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading mt-1">
              Conditions Well-Suited for Virtual Care
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              Virtual guidance excels at postural re-education, self-decompression, and active exercise progression.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teleConditions.map((c, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-3 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="text-base font-bold text-slate-900 font-heading">{c.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{c.desc}</p>
                </div>
                <button
                  onClick={() => onSelectCondition(c.conditionId)}
                  className="text-xs font-bold text-blue-700 hover:text-blue-800 flex items-center space-x-1 pt-2 border-t border-slate-100"
                >
                  <span>Read Condition Protocol</span>
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
            <span className="text-xs font-bold text-sky-700 uppercase tracking-wider">Step-By-Step Workflow</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading mt-1">
              How the Online Consultation Works
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              A structured 40-minute clinical process focused on functional assessment, root cause analysis, and actionable exercises.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {assessmentSteps.map((s) => (
              <div key={s.step} className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 relative">
                <span className="text-xs font-extrabold text-sky-700 bg-sky-100 px-2.5 py-1 rounded-md inline-block">
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
            <span className="text-xs font-bold text-sky-700 uppercase tracking-wider">Active Clinical Coaching</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading mt-1">
              Virtual Treatment & Educational Tools
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              Empowering you with self-management strategies, movement adjustments, and high-clarity video tutorials.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {treatmentTechniques.map((t, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-2">
                <h3 className="text-sm font-bold text-slate-900 flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-sky-600"></span>
                  <span>{t.name}</span>
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">{t.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rehabilitation Approach & What Patients Can Expect */}
      <section className="py-14 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            
            <div className="space-y-4">
              <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 inline-block">
                Virtual Milestones
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
                Tele-Rehabilitation Progression
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Rehabilitation through telehealth progresses systematically from symptom de-loading to active habit formation:
              </p>

              <div className="space-y-3 pt-2">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <h4 className="text-xs font-bold text-sky-900 uppercase">Phase 1: Ergonomic De-loading & Directional Preference</h4>
                  <p className="text-xs text-slate-600">Adjusting workstation posture, eliminating symptom triggers, and performing relieving movements.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <h4 className="text-xs font-bold text-sky-900 uppercase">Phase 2: Supervised Motor Control & Form Mastery</h4>
                  <p className="text-xs text-slate-600">Coaching deep neck flexor activation, scapular retraction, and pelvic stability on live video.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <h4 className="text-xs font-bold text-sky-900 uppercase">Phase 3: Progressive Resistance & Loading</h4>
                  <p className="text-xs text-slate-600">Introducing theraband resistance, increasing hold durations, and building muscular endurance.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <h4 className="text-xs font-bold text-sky-900 uppercase">Phase 4: Self-Sustaining Workplace Maintenance</h4>
                  <p className="text-xs text-slate-600">Embedding micro-break routines and lifelong ergonomic self-awareness into your workday.</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <span className="text-xs font-bold text-blue-700 uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full border border-blue-100 inline-block">
                Virtual Standards
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
                What You Can Expect During Your Call
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                A seamless, high-quality healthcare experience from anywhere:
              </p>

              <ul className="space-y-2.5 pt-2 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start space-x-2 bg-slate-50 p-3 rounded-xl border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Dedicated 40 Minutes:</strong> Focused, uninterrupted 1-on-1 time with Dr. Pawan Gupta (PT).</span>
                </li>
                <li className="flex items-start space-x-2 bg-slate-50 p-3 rounded-xl border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Comprehensive Report Review:</strong> Clear, non-technical explanation of your MRI and X-ray imaging reports.</span>
                </li>
                <li className="flex items-start space-x-2 bg-slate-50 p-3 rounded-xl border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Digital Prescription:</strong> Clear video exercise routine delivered to your WhatsApp within 2 hours after the call.</span>
                </li>
                <li className="flex items-start space-x-2 bg-slate-50 p-3 rounded-xl border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Honest Triage:</strong> If physical tests are required, we immediately advise appropriate in-person care.</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* When Assessment is Appropriate + Safety Red Flags */}
      <section className="py-12 bg-amber-50/50 border-b border-amber-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-amber-900 font-bold text-sm">
                <Clock className="w-4 h-4 text-amber-700" />
                <span>When Online Physiotherapy is Appropriate</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 font-heading">
                Good Candidates for Virtual Consultation
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-2 shrink-0"></span>
                  <span>Recurrent desk-work neck, shoulder, or lower spine fatigue</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-2 shrink-0"></span>
                  <span>Seeking an experienced second opinion before committing to spinal or joint surgery</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-2 shrink-0"></span>
                  <span>Mild recurring tendon aches from running, gym workouts, or mouse use</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-2 shrink-0"></span>
                  <span>Post-rehab check-ins to advance exercise loads and maintain gains</span>
                </li>
              </ul>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-amber-300 shadow-2xs space-y-3">
              <div className="flex items-center space-x-2 text-red-700 font-bold text-xs uppercase tracking-wider">
                <AlertCircle className="w-4 h-4 text-red-600" />
                <span>When Online Tele-Physio is NOT Appropriate</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Online physiotherapy cannot replace emergency or acute emergency medical intervention. Do not book an online consultation if you have:
              </p>
              <ul className="space-y-1.5 text-xs text-slate-800 font-medium">
                <li>• Recent acute traumatic fall, bone fracture suspicion, or joint dislocation</li>
                <li>• Sudden progressive loss of motor power (dropping foot or objects falling from hand)</li>
                <li>• Sudden bowel or bladder incontinence or perineal sensory loss (Cauda Equina warning)</li>
                <li>• Acute chest pain, shortness of breath, or unexplained high fever with joint swelling</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-14 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold text-sky-700 uppercase tracking-wider">FAQ</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading mt-1">
              Frequently Asked Questions: Online Physiotherapy
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqId === idx;
              return (
                <div key={idx} className="border border-slate-200 rounded-2xl overflow-hidden bg-slate-50 transition">
                  <button
                    onClick={() => setOpenFaqId(isOpen ? null : idx)}
                    className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 font-bold text-slate-900 text-sm hover:text-sky-800 transition"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${isOpen ? 'rotate-180 text-sky-600' : ''}`} />
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
            Related Rehabilitation Protocols & Pages
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            <button
              onClick={() => onNavigatePage('orthopedic-physiotherapy')}
              className="text-xs px-3.5 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-blue-300 text-slate-700 hover:text-blue-700 transition font-medium"
            >
              Orthopedic Physiotherapy in Mumbai
            </button>
            <button
              onClick={() => onNavigatePage('pain-management')}
              className="text-xs px-3.5 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-blue-300 text-slate-700 hover:text-blue-700 transition font-medium"
            >
              Chronic Pain Management
            </button>
            <button
              onClick={() => onNavigatePage('home-physiotherapy')}
              className="text-xs px-3.5 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-blue-300 text-slate-700 hover:text-blue-700 transition font-medium"
            >
              Home Visit Physiotherapy in Mumbai
            </button>
            <button
              onClick={() => onNavigatePage('physiotherapy-mumbai')}
              className="text-xs px-3.5 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-blue-300 text-slate-700 hover:text-blue-700 transition font-medium"
            >
              Physiotherapy in Mumbai Clinic & Home Care
            </button>
            <button
              onClick={() => onNavigatePage('services')}
              className="text-xs px-3.5 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-blue-300 text-slate-700 hover:text-blue-700 transition font-medium"
            >
              All Clinical Services & Tariffs
            </button>
          </div>
        </div>
      </section>

      {/* Booking CTA Banner */}
      <section className="py-14 bg-gradient-to-tr from-slate-900 via-slate-800 to-sky-950 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 text-xs font-bold uppercase tracking-wider border border-sky-400/30">
            <span>Virtual Video Consultation • Dr. Pawan Gupta (PT)</span>
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight font-heading">
            Connect With an Expert Physiotherapist From Anywhere
          </h2>

          <p className="text-slate-300 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
            Get your posture assessed, MRI reports reviewed, and exercise form corrected via high-definition video call.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              onClick={() => onOpenBooking('Online Tele-Physio Consultation', 'Online Video Consultation')}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm flex items-center justify-center space-x-2 shadow-lg transition"
            >
              <Calendar className="w-4 h-4 text-blue-200" />
              <span>Book Video Consultation</span>
            </button>

            <a
              href={`tel:${CLINIC_CONTACT.phone}`}
              className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-sm flex items-center justify-center space-x-2 transition"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>Call {CLINIC_CONTACT.phoneDisplay}</span>
            </a>

            <a
              href={`https://wa.me/${CLINIC_CONTACT.whatsappNumber}?text=Hello%20Dr.%20Pawan%20Gupta,%20I%20would%20like%20to%20inquire%20about%20an%20Online%20Physiotherapy%20Consultation.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm flex items-center justify-center space-x-2 transition"
            >
              <MessageSquare className="w-4 h-4 text-emerald-200" />
              <span>WhatsApp Doctor</span>
            </a>
          </div>

          <div className="pt-4 border-t border-slate-700/60 text-xs text-slate-400 flex flex-wrap justify-center gap-4">
            <span>💻 Secure Google Meet / WhatsApp Video</span>
            <span>📱 Personalized Exercise Routine Included</span>
            <span>⏱ Appointments Scheduled Around Your Timezone</span>
          </div>
        </div>
      </section>

    </div>
  );
};

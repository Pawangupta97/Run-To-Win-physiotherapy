import React, { useState } from 'react';
import { 
  Activity, 
  ShieldCheck, 
  Clock, 
  Phone, 
  MessageSquare, 
  CheckCircle2, 
  Calendar, 
  ChevronRight, 
  ChevronDown, 
  ArrowRight, 
  Stethoscope, 
  MapPin, 
  Home, 
  AlertCircle,
  Dumbbell,
  FileText
} from 'lucide-react';
import { CLINIC_CONTACT } from '../data/clinicData';
import { SeoMeta } from './SeoMeta';
import { Breadcrumbs } from './Breadcrumbs';

import orthopedicImg from '../assets/images/regenerated_image_1787088217070.webp';
import doctorPhoto from '../assets/images/regenerated_image_1787089379420.webp';

interface OrthopedicPhysiotherapyPageProps {
  onBackToHome: () => void;
  onNavigatePage: (page: string) => void;
  onSelectCondition: (conditionId: string) => void;
  onOpenBooking: (prefillService?: string, prefillArea?: string) => void;
  onOpenAiAssistant: (context?: string) => void;
}

export const OrthopedicPhysiotherapyPage: React.FC<OrthopedicPhysiotherapyPageProps> = ({
  onBackToHome,
  onNavigatePage,
  onSelectCondition,
  onOpenBooking,
  onOpenAiAssistant
}) => {
  const [openFaqId, setOpenFaqId] = useState<number | null>(0);

  const conditionsAddressed = [
    {
      title: 'Lumbar Disc Herniation & Sciatica',
      desc: 'Radiating leg pain, numbness, and disc bulges assessed through McKenzie mechanical diagnosis and directional preference.',
      conditionId: 'lower-back'
    },
    {
      title: 'Cervical Spondylosis & Tech-Neck',
      desc: 'Neck stiffness, radiating arm nerve tension, and postural forward-head overload common among corporate professionals in Mumbai.',
      conditionId: 'cervical-neck'
    },
    {
      title: 'Knee Osteoarthritis & Patellar Maltracking',
      desc: 'Joint space narrowing, morning stiffness, crepitus, and quadriceps inhibition managed through joint preservation protocols.',
      conditionId: 'knee'
    },
    {
      title: 'Adhesive Capsulitis (Frozen Shoulder)',
      desc: 'Progressive shoulder capsule restriction treated with gentle Maitland glenohumeral mobilizations and scapulothoracic retraining.',
      conditionId: 'shoulder'
    },
    {
      title: 'Rotator Cuff Tendinopathy & Impingement',
      desc: 'Painful overhead reach and subacromial bursitis rehabilitated through eccentric tendon loading and rotator cuff strengthening.',
      conditionId: 'shoulder'
    },
    {
      title: 'Sacroiliac (SI) Joint Dysfunction',
      desc: 'Asymmetric pelvic pain, localized buttock discomfort, and leg-length imbalances resolved via pelvic alignment and stabilization.',
      conditionId: 'lower-back'
    }
  ];

  const assessmentSteps = [
    {
      step: '01',
      title: 'Comprehensive Clinical History',
      desc: 'Detailed review of symptom onset, aggravating/relieving postures, previous imaging (MRI/X-ray), and occupational movement demands.'
    },
    {
      step: '02',
      title: 'Spine & Joint Biomechanical Screen',
      desc: 'Range of motion measurement using goniometry, intervertebral accessory motion palpation, and spinal directional preference assessment.'
    },
    {
      step: '03',
      title: 'Neurological & Special Tests',
      desc: 'Dermatomal sensation checks, deep tendon reflexes, manual muscle testing, and nerve tension tests (e.g., Slump test, Straight Leg Raise).'
    },
    {
      step: '04',
      title: 'Kinetic Chain Functional Analysis',
      desc: 'Evaluating pelvic tilt, core activation, gait patterns, and movement compensation patterns that overload the affected structure.'
    }
  ];

  const treatmentTechniques = [
    {
      name: 'McKenzie MDT Assessment & Treatment',
      detail: 'Mechanical diagnosis to classify spinal derangements and identify directional preferences that centralize and reduce radiating pain.'
    },
    {
      name: 'Maitland & Mulligan Joint Mobilizations',
      detail: 'Grades I–IV rhythmic oscillatory mobilizations and Mobilization with Movement (MWM) to restore arthrokinematic glide without irritation.'
    },
    {
      name: 'Certified Dry Needling (CDNP)',
      detail: 'Targeted filament needle insertion into taut myofascial trigger points to release deep muscle spasm in glutes, piriformis, and paraspinals.'
    },
    {
      name: 'Mechanical & Manual Spinal Traction',
      detail: 'Gentle intervertebral decompression for cervical and lumbar disc compressions to reduce foraminal nerve root pressure.'
    },
    {
      name: 'Instrument-Assisted Soft Tissue Mobilization (IASTM)',
      detail: 'Specialized stainless steel tools to break down dense fascial adhesions and stimulate localized microcirculation.'
    },
    {
      name: 'Progressive Neuromuscular Stabilization',
      detail: 'Targeted strengthening of deep stabilizers (transversus abdominis, multifidus, deep neck flexors) to maintain long-term spinal stability.'
    }
  ];

  const faqs = [
    {
      q: 'Do I need an MRI or X-ray before booking an orthopedic physiotherapy consultation?',
      a: 'No, prior imaging is not mandatory for an initial assessment. Dr. Pawan Gupta (PT) conducts a comprehensive physical and mechanical examination to evaluate your joints, nerves, and muscles. However, if you already have existing MRI, CT, or X-ray reports, bringing them helps correlate clinical findings with structural anatomy.'
    },
    {
      q: 'Can orthopedic physiotherapy help avoid spine or knee surgery?',
      a: 'In many cases of lumbar disc herniation, sciatica, and mild-to-moderate knee osteoarthritis, structured conservative physical therapy can significantly alleviate pain and restore function, allowing patients to avoid surgical intervention. When surgery is genuinely required, pre-habilitation strengthens surrounding musculature for faster post-surgical recovery.'
    },
    {
      q: 'How many sessions will I need for chronic lower back pain or cervical spondylosis?',
      a: 'Treatment duration depends on chronicity, tissue irritation, and compliance with prescribed home exercises. Acute mechanical episodes often show meaningful reduction in discomfort within 3 to 6 sessions, while chronic degenerative conditions typically follow a 4 to 8 week progressive stabilization protocol.'
    },
    {
      q: 'Is Dry Needling safe for neck and back muscle spasms?',
      a: 'Yes. Dry needling is administered using single-use, sterile, ultra-fine acupuncture filaments. Dr. Pawan Gupta is a Certified Dry Needling Practitioner (CDNP) with advanced training in anatomical landmarking to safely target deep myofascial trigger points without medication.'
    },
    {
      q: 'Do you offer home visit orthopedic physiotherapy in Mumbai?',
      a: 'Yes. For patients with acute spinal pain who cannot sit or commute, or elderly patients with severe knee osteoarthritis, we provide certified home visit physiotherapy across South Mumbai, Central Mumbai, Western Suburbs, and Thane with portable treatment equipment.'
    }
  ];

  const pageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://runtowinphysiotherapy.com/orthopedic-physiotherapy#webpage",
        "name": "Orthopedic Physiotherapy in Mumbai | Spine & Joint Care | Dr. Pawan Gupta (PT)",
        "url": "https://runtowinphysiotherapy.com/orthopedic-physiotherapy",
        "description": "Evidence-based orthopedic physiotherapy in Mumbai for back pain, slip disc, sciatica, cervical spondylosis, and knee arthritis at our Sewri clinic and via doorstep home visits.",
        "isPartOf": {
          "@id": "https://runtowinphysiotherapy.com/#website"
        },
        "about": {
          "@id": "https://runtowinphysiotherapy.com/#clinic"
        }
      },
      {
        "@type": "MedicalTherapy",
        "@id": "https://runtowinphysiotherapy.com/orthopedic-physiotherapy#service",
        "name": "Orthopedic Physiotherapy Mumbai",
        "description": "Evidence-based non-surgical orthopedic physical therapy for spine, disc herniation, sciatica, and joint disorders by Dr. Pawan Gupta (PT).",
        "relevantSpecialty": {
          "@type": "MedicalSpecialty",
          "name": "Orthopedic"
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
            "name": "Orthopedic Physiotherapy",
            "item": "https://runtowinphysiotherapy.com/orthopedic-physiotherapy"
          }
        ]
      }
    ]
  };

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 antialiased selection:bg-blue-600 selection:text-white">
      <SeoMeta
        title="Orthopedic Physiotherapy in Mumbai | Spine & Joint Care | Dr. Pawan Gupta (PT)"
        description="Evidence-based orthopedic physiotherapy in Mumbai for back pain, slip disc, sciatica, cervical spondylosis, and knee arthritis at our Sewri clinic and via doorstep home visits."
        canonicalUrl="https://runtowinphysiotherapy.com/orthopedic-physiotherapy"
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
              { label: 'Orthopedic Physiotherapy', current: true }
            ]}
          />
        </div>
      </div>

      {/* Hero Section */}
      <header className="bg-gradient-to-b from-blue-50/70 via-white to-slate-50 py-12 md:py-16 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider">
                <Activity className="w-3.5 h-3.5 text-blue-600" />
                <span>Specialized Musculoskeletal Rehabilitation</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-heading leading-tight">
                Orthopedic Physiotherapy in Mumbai
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                Conservative, evidence-based management for spine disorders, joint arthritis, and acute or chronic musculoskeletal pain. Led by <a href="/dr-pawan-gupta/" onClick={(e) => { e.preventDefault(); onNavigatePage('dr-pawan-gupta'); }} className="font-bold text-blue-700 hover:text-blue-800 underline decoration-blue-300">Dr. Pawan Gupta (PT)</a>, our clinical approach prioritizes mechanical decompression, joint mobilization, and progressive muscle stabilization to restore pain-free movement.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => onOpenBooking('Orthopedic Physiotherapy Consultation')}
                  className="px-6 py-3.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-sm flex items-center space-x-2 shadow-md transition"
                >
                  <Calendar className="w-4 h-4 text-blue-200" />
                  <span>Book Orthopedic Assessment</span>
                </button>

                <a
                  href={`tel:${CLINIC_CONTACT.phone}`}
                  className="px-5 py-3.5 rounded-xl bg-white border border-slate-300 hover:border-slate-400 text-slate-800 font-bold text-sm flex items-center space-x-2 shadow-2xs transition"
                >
                  <Phone className="w-4 h-4 text-blue-600" />
                  <span>Call {CLINIC_CONTACT.phoneDisplay}</span>
                </a>

                <a
                  href={`https://wa.me/${CLINIC_CONTACT.whatsappNumber}?text=Hello%20Dr.%20Pawan%20Gupta,%20I%20would%20like%20to%20inquire%20about%20Orthopedic%20Physiotherapy%20in%20Mumbai.`}
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
                  <MapPin className="w-4 h-4 text-blue-600" />
                  <span>Sewri Outpatient Clinic</span>
                </span>
                <span className="flex items-center space-x-1.5">
                  <Home className="w-4 h-4 text-emerald-600" />
                  <span>Home Visits Across Mumbai</span>
                </span>
                <span className="flex items-center space-x-1.5">
                  <ShieldCheck className="w-4 h-4 text-blue-600" />
                  <span>Certified Manual Therapy (MIAP)</span>
                </span>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-slate-100 relative">
                <img
                  src={orthopedicImg}
                  alt="Orthopedic physical therapy session for lumbar spine decompression by Dr. Pawan Gupta (PT) in Mumbai"
                  className="w-full h-72 sm:h-80 object-cover"
                  loading="eager"
                  width="500"
                  height="360"
                />
                <div className="p-4 bg-white border-t border-slate-200 text-xs text-slate-600 flex items-center justify-between">
                  <span className="font-semibold text-slate-900">Dr. Pawan Gupta (PT)</span>
                  <span className="text-blue-700 font-medium">M.P.Th (Musculoskeletal Specialist)</span>
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
            <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">Candidate Profile</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading mt-1">
              Who Orthopedic Physiotherapy is For
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              Orthopedic physical therapy is indicated for individuals experiencing musculoskeletal limitations resulting from postural strain, degenerative disc conditions, acute joint sprains, or post-immobilization stiffness.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                title: 'Corporate Professionals',
                desc: 'Individuals spending prolonged hours seated, experiencing upper back spasms, tech-neck stiffness, or lower spine fatigue.'
              },
              {
                title: 'Spine & Disc Patients',
                desc: 'Patients with diagnosed MRI disc bulges, sciatica tingling, or facet arthropathy seeking conservative non-surgical recovery.'
              },
              {
                title: 'Active Adults & Seniors',
                desc: 'Seniors and adults with knee osteoarthritis, frozen shoulder stiffness, or hip discomfort limiting stair climbing and walking.'
              },
              {
                title: 'Post-Cast / Post-Injury',
                desc: 'Individuals needing joint mobilization, tendon lengthening, and muscular rebuilding following fracture union or ligament sprains.'
              }
            ].map((item, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <CheckCircle2 className="w-5 h-5 text-blue-600" />
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
            <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">Clinical Indications</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading mt-1">
              Conditions Commonly Addressed
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              Our targeted protocols focus on stabilizing joint kinematics and decompressing irritated neurological pathways.
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
            <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">Thorough Evaluation</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading mt-1">
              Our Orthopedic Assessment Process
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              Before initiating physical treatment, we conduct an objective, multi-point mechanical evaluation to establish your baseline and identify root-cause drivers.
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

      {/* Treatment Approach & Modalities */}
      <section className="py-14 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">Active & Manual Modalities</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading mt-1">
              Evidence-Based Treatment Approach
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              We do not rely on passive heat packs alone. Every session integrates hands-on manual joint mobilization, mechanical decompression, and supervised functional loading.
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

      {/* Rehabilitation Approach & What Patients Can Expect */}
      <section className="py-14 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            
            <div className="space-y-4">
              <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 inline-block">
                Structured Loading
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
                Progressive Rehabilitation Approach
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Relieving acute pain is only the first phase. True recovery requires restoring tissue load capacity so daily tasks, sitting, and stair climbing do not trigger relapses. Our orthopedic rehabilitation progresses through 3 defined stages:
              </p>

              <div className="space-y-3 pt-2">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <h4 className="text-xs font-bold text-blue-900 uppercase">Phase 1: Pain Decompression & Directional Preference</h4>
                  <p className="text-xs text-slate-600">Offloading irritated disc walls, opening intervertebral foramina, and calming reactive muscle spasms.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <h4 className="text-xs font-bold text-blue-900 uppercase">Phase 2: Joint Range of Motion & Deep Core Stabilization</h4>
                  <p className="text-xs text-slate-600">Rebuilding active spinal flexion/extension, segmental mobilization, and activating transversus abdominis.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <h4 className="text-xs font-bold text-blue-900 uppercase">Phase 3: Functional Load Tolerance & Ergonomic Habituation</h4>
                  <p className="text-xs text-slate-600">Lifting mechanics, standing endurance, and customized workplace ergonomics to prevent recurrence.</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <span className="text-xs font-bold text-blue-700 uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full border border-blue-100 inline-block">
                Patient Experience
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
                What You Can Expect During Treatment
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                We believe in complete clinical transparency. From your initial examination through functional discharge, here is what your experience entails:
              </p>

              <ul className="space-y-2.5 pt-2 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start space-x-2 bg-slate-50 p-3 rounded-xl border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Dedicated 1-on-1 Sessions:</strong> 45 to 60 minutes of direct consultant attention with Dr. Pawan Gupta (PT).</span>
                </li>
                <li className="flex items-start space-x-2 bg-slate-50 p-3 rounded-xl border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Clear Diagnostic Explanation:</strong> Plain-language breakdown of what is generating your discomfort without alarming medical jargon.</span>
                </li>
                <li className="flex items-start space-x-2 bg-slate-50 p-3 rounded-xl border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Home Exercise Video Prescriptions:</strong> Simple 10-minute targeted daily routines accessible via your phone.</span>
                </li>
                <li className="flex items-start space-x-2 bg-slate-50 p-3 rounded-xl border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>No False Guarantees:</strong> Realistic recovery timelines based on clinical tissue healing science.</span>
                </li>
              </ul>
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
                <span>When Professional Assessment May Be Appropriate</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 font-heading">
                Signs You Should Schedule an Evaluation
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-2 shrink-0"></span>
                  <span>Spine or joint discomfort lasting more than 3 to 5 days without spontaneous resolution</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-2 shrink-0"></span>
                  <span>Sharp, aching, or burning sensations traveling into your glutes, thigh, calf, or arm</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-2 shrink-0"></span>
                  <span>Inability to sit comfortably for more than 20 minutes due to lower back pain</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-2 shrink-0"></span>
                  <span>Morning joint stiffness in knees, neck, or shoulders lasting over 30 minutes</span>
                </li>
              </ul>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-amber-300 shadow-2xs space-y-3">
              <div className="flex items-center space-x-2 text-red-700 font-bold text-xs uppercase tracking-wider">
                <AlertCircle className="w-4 h-4 text-red-600" />
                <span>Important Safety Warning: Medical Red Flags</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                If you experience any of the following symptoms, standard physical therapy is not indicated as initial care. Please seek immediate emergency medical evaluation at a hospital casualty department:
              </p>
              <ul className="space-y-1.5 text-xs text-slate-800 font-medium">
                <li>• Sudden loss of bowel or bladder control (incontinence or retention)</li>
                <li>• Numbness in the saddle area (inner thighs, groin, or perianal region)</li>
                <li>• Sudden progressive weakness causing foot drop or inability to bear weight</li>
                <li>• Severe back or joint pain accompanied by unexplained high fever or night sweats</li>
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
              Frequently Asked Questions: Orthopedic Physiotherapy
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqId === idx;
              return (
                <div key={idx} className="border border-slate-200 rounded-2xl overflow-hidden bg-slate-50 transition">
                  <button
                    onClick={() => setOpenFaqId(isOpen ? null : idx)}
                    className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 font-bold text-slate-900 text-sm hover:text-blue-700 transition"
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
            Related Rehabilitation Protocols & Pages
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            <button
              onClick={() => onNavigatePage('rehabilitation')}
              className="text-xs px-3.5 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-blue-300 text-slate-700 hover:text-blue-700 transition font-medium"
            >
              Post-Surgical Rehabilitation Programs
            </button>
            <button
              onClick={() => onNavigatePage('sports-physiotherapy')}
              className="text-xs px-3.5 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-blue-300 text-slate-700 hover:text-blue-700 transition font-medium"
            >
              Sports Injury Rehabilitation
            </button>
            <button
              onClick={() => onNavigatePage('home-physiotherapy')}
              className="text-xs px-3.5 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-blue-300 text-slate-700 hover:text-blue-700 transition font-medium"
            >
              Home Visit Physiotherapy in Mumbai
            </button>
            <button
              onClick={() => onNavigatePage('pain-management')}
              className="text-xs px-3.5 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-blue-300 text-slate-700 hover:text-blue-700 transition font-medium"
            >
              Chronic Pain Management
            </button>
            <button
              onClick={() => onNavigatePage('physiotherapy-mumbai')}
              className="text-xs px-3.5 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-blue-300 text-slate-700 hover:text-blue-700 transition font-medium"
            >
              Physiotherapy in Mumbai Overview
            </button>
            <button
              onClick={() => onNavigatePage('dr-pawan-gupta')}
              className="text-xs px-3.5 py-1.5 rounded-lg bg-blue-50 border border-blue-200 hover:border-blue-400 text-blue-800 font-bold transition flex items-center space-x-1"
            >
              <span>Dr. Pawan Gupta (PT) Profile</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* High-Conversion Booking CTA Banner */}
      <section className="py-14 bg-gradient-to-tr from-slate-900 via-slate-800 to-blue-950 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wider border border-blue-400/30">
            <span>Direct Scheduling with Dr. Pawan Gupta (PT)</span>
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight font-heading">
            Relieve Spine & Joint Pain With Structured Physical Therapy
          </h2>

          <p className="text-slate-300 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
            Consultations are available at our Sewri clinic and via dedicated home physiotherapy visits across Mumbai suburbs.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              onClick={() => onOpenBooking('Orthopedic Physiotherapy Consultation')}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm flex items-center justify-center space-x-2 shadow-lg transition"
            >
              <Calendar className="w-4 h-4 text-blue-200" />
              <span>Book Appointment Now</span>
            </button>

            <a
              href={`tel:${CLINIC_CONTACT.phone}`}
              className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-sm flex items-center justify-center space-x-2 transition"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>Call {CLINIC_CONTACT.phoneDisplay}</span>
            </a>

            <a
              href={`https://wa.me/${CLINIC_CONTACT.whatsappNumber}?text=Hello%20Dr.%20Pawan%20Gupta,%20I%20would%20like%20to%20inquire%20about%20Orthopedic%20Physiotherapy.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm flex items-center justify-center space-x-2 transition"
            >
              <MessageSquare className="w-4 h-4 text-emerald-200" />
              <span>WhatsApp Doctor</span>
            </a>
          </div>

          <div className="pt-4 border-t border-slate-700/60 text-xs text-slate-400 flex flex-wrap justify-center gap-4">
            <span>📍 Sewri Clinic, Mumbai 400015</span>
            <span>⏱ Mon – Sat: 8:00 AM – 9:00 PM</span>
            <span>🏠 Home Visits Across Mumbai Daily</span>
          </div>
        </div>
      </section>

    </div>
  );
};

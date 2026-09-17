import React, { useState } from 'react';
import { 
  Home, 
  ShieldCheck, 
  Clock, 
  Phone, 
  MessageSquare, 
  CheckCircle2, 
  Calendar, 
  ChevronRight, 
  ChevronDown, 
  ArrowRight, 
  MapPin, 
  Activity, 
  AlertCircle,
  Briefcase,
  Users
} from 'lucide-react';
import { CLINIC_CONTACT } from '../data/clinicData';
import { HOME_VISIT_LOCATIONS, LOCATION_GROUPS, getLocationPath } from '../data/homeVisitLocations';
import { SeoMeta } from './SeoMeta';
import { Breadcrumbs } from './Breadcrumbs';

import homeVisitImg from '../assets/images/regenerated_image_1787088229284.webp';
import doctorPhoto from '../assets/images/regenerated_image_1787089379420.webp';

interface HomePhysiotherapyPageProps {
  onBackToHome: () => void;
  onNavigatePage: (page: string) => void;
  onSelectLocation: (locationId: string) => void;
  onSelectCondition: (conditionId: string) => void;
  onOpenBooking: (prefillService?: string, prefillArea?: string) => void;
  onOpenAiAssistant: (context?: string) => void;
}

export const HomePhysiotherapyPage: React.FC<HomePhysiotherapyPageProps> = ({
  onBackToHome,
  onNavigatePage,
  onSelectLocation,
  onSelectCondition,
  onOpenBooking,
  onOpenAiAssistant
}) => {
  const [openFaqId, setOpenFaqId] = useState<number | null>(0);

  const conditionsAddressed = [
    {
      title: 'Post-Total Knee & Hip Replacement (TKR / THR)',
      desc: 'Immediate post-discharge protocol: swelling management, surgical knee extension, quadriceps activation, and safe walker ambulation.',
      conditionId: 'knee-replacement-rehab'
    },
    {
      title: 'Acute Lumbar Disc Herniation & Severe Sciatica',
      desc: 'Bedside mechanical decompression and directional preference exercises when excruciating pain prevents sitting in Mumbai traffic.',
      conditionId: 'lower-back'
    },
    {
      title: 'Stroke (CVA) & Hemiplegia Bedside Care',
      desc: 'Preventing contractures, tone modulation, bed-to-wheelchair transfers, and step-by-step gait retraining in the comfort of home.',
      conditionId: 'stroke-rehab'
    },
    {
      title: 'Geriatric Mobility, Frailty & Fall Prevention',
      desc: 'Gentle progressive resistance exercises, sit-to-stand endurance, bathroom safety assessment, and balance re-education for elderly parents.',
      conditionId: 'senior-rehab'
    },
    {
      title: 'Parkinson’s Disease Functional Maintenance',
      desc: 'Home-based sensory cues to reduce freezing, transfer drills from low beds or sofas, and dynamic trunk rotation exercises.',
      conditionId: 'parkinsons-rehab'
    },
    {
      title: 'Post-Fracture & Post-Immobilization Rehab',
      desc: 'Restoring joint range of motion and weight-bearing confidence after cast removal or surgical fixation of hip, ankle, or wrist.',
      conditionId: 'orthopedic-injuries'
    }
  ];

  const assessmentSteps = [
    {
      step: '01',
      title: 'Home Environmental & Safety Audit',
      desc: 'Evaluating throw rugs, bathroom threshold height, lighting, and grab rails to immediately eliminate fall hazards.'
    },
    {
      step: '02',
      title: 'Bed Mobility & Functional Transfers',
      desc: 'Assessing how independently the patient rolls, bridges, sits up, and transitions between bed, armchair, and commode.'
    },
    {
      step: '03',
      title: 'Objective Musculoskeletal & Neuro Screen',
      desc: 'Measuring joint range of motion with portable goniometer, edema with circumferential tape, motor control, and sensation.'
    },
    {
      step: '04',
      title: 'Personalized Daily Routine Prescription',
      desc: 'Customizing a realistic daily home program using everyday household fixtures (chairs, counter edges, resistance bands).'
    }
  ];

  const treatmentTechniques = [
    {
      name: 'Portable Hospital-Grade Electrotherapy',
      detail: 'Digital TENS and therapeutic ultrasound units brought to your bedside to alleviate acute pain, swelling, and muscle spasms.'
    },
    {
      name: 'Bedside Manual Therapy & Mobilization',
      detail: 'Gentle passive joint movements, patellar mobilization, and soft-tissue release to eliminate post-operative stiffness.'
    },
    {
      name: 'Progressive Ambulation & Stair Training',
      detail: 'Step-by-step progression from walker to elbow crutches to walking stick, followed by safe apartment stair climbing.'
    },
    {
      name: 'Chest Physical Therapy & Secretion Clearance',
      detail: 'Breathing exercises, thoracic expansion, and gentle percussion for bedbound post-operative patients to prevent atelectasis.'
    },
    {
      name: 'Caregiver & Attendant Transfer Coaching',
      detail: 'Hands-on practical training for family members and home nursing attendants on safe ergonomic patient handling.'
    },
    {
      name: 'Balance & Fall Reduction Drills',
      detail: 'Static and dynamic balance training using portable balance pads and sensory perturbation in the patient’s hallway.'
    }
  ];

  const faqs = [
    {
      q: 'Which areas in Mumbai do you cover for home physiotherapy visits?',
      a: 'We provide certified doorstep home visit physiotherapy across more than 35 localities in Mumbai, including South Mumbai (Colaba, Marine Drive, Malabar Hill, Worli, Parel, Sewri), Central Mumbai (Dadar, Wadala, Matunga, Sion), Western Suburbs (Bandra, Khar, Santacruz, Juhu, Andheri, Goregaon, Borivali), and Eastern Suburbs & Thane West.'
    },
    {
      q: 'What equipment do the physiotherapists bring for home visits?',
      a: 'Our visiting physiotherapists carry portable clinical kits including digital electrotherapy (TENS/IFT), therapeutic ultrasound devices, goniometers for joint measurement, resistance therabands, balance equipment, and sterile dry needling supplies if clinically indicated.'
    },
    {
      q: 'How long does a home visit physiotherapy session take?',
      a: 'Each home visit session is approximately 45 to 60 minutes long, dedicated entirely 1-on-1 to the patient without clinic waiting rooms or shared attention.'
    },
    {
      q: 'Are home physiotherapy sessions as effective as visiting a clinic?',
      a: 'Yes, particularly for post-operative joint replacements, acute disc herniations, and stroke rehabilitation. In fact, receiving therapy in the patient’s real living environment allows the physiotherapist to address actual daily challenges like bathroom transfers, chair heights, and stair climbing directly.'
    },
    {
      q: 'How do I schedule a home visit and how quickly can a therapist arrive?',
      a: 'You can book online, call us at +91 98386 88745, or send a WhatsApp message. Depending on suburb availability, same-day or next-morning home visit slots are routinely scheduled between 7:00 AM and 8:30 PM.'
    }
  ];

  const pageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://runtowinphysiotherapy.com/home-physiotherapy#webpage",
        "name": "Home Physiotherapy in Mumbai | Doorstep Care | Dr. Pawan Gupta (PT)",
        "url": "https://runtowinphysiotherapy.com/home-physiotherapy",
        "description": "Certified home visit physiotherapy across 35+ Mumbai localities for post-surgical, elderly, spine, and stroke care by Dr. Pawan Gupta (PT) and team.",
        "isPartOf": {
          "@id": "https://runtowinphysiotherapy.com/#website"
        },
        "about": {
          "@id": "https://runtowinphysiotherapy.com/#clinic"
        }
      },
      {
        "@type": "MedicalTherapy",
        "@id": "https://runtowinphysiotherapy.com/home-physiotherapy#service",
        "name": "Home Physiotherapy Mumbai",
        "description": "Certified doorstep home visit physiotherapy across 35+ Mumbai localities for post-surgical, elderly, and neurological rehabilitation led by Dr. Pawan Gupta (PT).",
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
            "name": "Home Physiotherapy",
            "item": "https://runtowinphysiotherapy.com/home-physiotherapy"
          }
        ]
      }
    ]
  };

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 antialiased selection:bg-blue-600 selection:text-white">
      <SeoMeta
        title="Home Physiotherapy in Mumbai | Doorstep Care | Dr. Pawan Gupta (PT)"
        description="Certified home visit physiotherapy across 35+ Mumbai localities for post-surgical, elderly, spine, and stroke care by Dr. Pawan Gupta (PT) and team."
        canonicalUrl="https://runtowinphysiotherapy.com/home-physiotherapy"
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
              { label: 'Home Physiotherapy in Mumbai', current: true }
            ]}
          />
        </div>
      </div>

      {/* Hero Header */}
      <header className="bg-gradient-to-b from-emerald-50/70 via-white to-slate-50 py-12 md:py-16 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
                <Home className="w-3.5 h-3.5 text-emerald-600" />
                <span>Doorstep Physical Therapy Across 35+ Mumbai Localities</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-heading leading-tight">
                Home Physiotherapy in Mumbai
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                Hospital-grade physical therapy brought directly to your bedside. Led by <strong className="text-slate-900">Dr. Pawan Gupta (PT)</strong>, we eliminate the discomfort of navigating Mumbai traffic for post-surgical patients, seniors, and acute spine pain cases.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => onOpenBooking('Home Visit Physiotherapy', 'Mumbai Home Visit')}
                  className="px-6 py-3.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-sm flex items-center space-x-2 shadow-md transition"
                >
                  <Calendar className="w-4 h-4 text-blue-200" />
                  <span>Book Doorstep Home Visit</span>
                </button>

                <a
                  href={`tel:${CLINIC_CONTACT.phone}`}
                  className="px-5 py-3.5 rounded-xl bg-white border border-slate-300 hover:border-slate-400 text-slate-800 font-bold text-sm flex items-center space-x-2 shadow-2xs transition"
                >
                  <Phone className="w-4 h-4 text-blue-600" />
                  <span>Call {CLINIC_CONTACT.phoneDisplay}</span>
                </a>

                <a
                  href={`https://wa.me/${CLINIC_CONTACT.whatsappNumber}?text=Hello%20Dr.%20Pawan%20Gupta,%20I%20would%20like%20to%20book%20a%20Home%20Visit%20Physiotherapy%20session%20in%20Mumbai.`}
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
                  <Clock className="w-4 h-4 text-emerald-600" />
                  <span>Visits 7:00 AM – 8:30 PM Daily</span>
                </span>
                <span className="flex items-center space-x-1.5">
                  <Briefcase className="w-4 h-4 text-blue-600" />
                  <span>Portable Electrotherapy & Kits</span>
                </span>
                <span className="flex items-center space-x-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Experienced Licensed Therapists</span>
                </span>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-slate-100 relative">
                <img
                  src={homeVisitImg}
                  alt="Doctor Pawan Gupta conducting home visit physiotherapy session for elderly knee replacement patient in Mumbai"
                  className="w-full h-72 sm:h-80 object-cover"
                  loading="eager"
                  width="500"
                  height="360"
                />
                <div className="p-4 bg-white border-t border-slate-200 text-xs text-slate-600 flex items-center justify-between">
                  <span className="font-semibold text-slate-900">Dr. Pawan Gupta (PT)</span>
                  <span className="text-emerald-700 font-semibold">Home Care Clinical Director</span>
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
            <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">Patient Eligibility</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading mt-1">
              Who Home Physiotherapy is For
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              Our doorstep service is engineered for individuals who face significant barriers or medical risks in traveling to an outpatient clinic.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                title: 'Post-Operative Patients',
                desc: 'Individuals within the first 6 weeks following knee replacement, hip surgery, or spinal fusion when car transit is agonizing.'
              },
              {
                title: 'Senior Citizens & Frail Adults',
                desc: 'Elderly relatives with balance impairments, osteoarthritis, or generalized muscle deconditioning where stairs pose fall risks.'
              },
              {
                title: 'Neurological Conditions',
                desc: 'Stroke survivors and individuals with Parkinson’s disease who require therapy in their familiar daily living environment.'
              },
              {
                title: 'Acute Severe Spine Spasms',
                desc: 'Patients with sudden acute sciatica or severe lumbago who physically cannot sit upright in an automobile.'
              }
            ].map((item, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
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
            <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">Home Care Indications</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading mt-1">
              Conditions Commonly Treated at Home
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              Delivering full clinical protocols right to your bedroom, living room, or apartment corridors.
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
                  <span>Explore Condition Details</span>
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
            <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">In-Home Evaluation</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading mt-1">
              Our In-Home Assessment Process
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              Assessing both the patient’s physical clinical status and the actual architectural safety of their home environment.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {assessmentSteps.map((s) => (
              <div key={s.step} className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 relative">
                <span className="text-xs font-extrabold text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-md inline-block">
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
            <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">Portable Capabilities</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading mt-1">
              Treatment Approaches Brought to Your Doorstep
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              We bring the essential modalities of an orthopedic rehabilitation department directly into your residence.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {treatmentTechniques.map((t, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-2">
                <h3 className="text-sm font-bold text-slate-900 flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                  <span>{t.name}</span>
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">{t.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rehabilitation Methodology & What Patients Can Expect */}
      <section className="py-14 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            
            <div className="space-y-4">
              <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 inline-block">
                Doorstep Milestones
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
                Step-by-Step Home Rehabilitation
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Rebuilding functional mobility in progressive stages directly aligned with daily domestic tasks:
              </p>

              <div className="space-y-3 pt-2">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <h4 className="text-xs font-bold text-emerald-900 uppercase">Phase 1: Bedside Mobilization & Pain Control</h4>
                  <p className="text-xs text-slate-600">Pain modulation with digital TENS, gentle active-assisted range of motion, and swelling reduction.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <h4 className="text-xs font-bold text-emerald-900 uppercase">Phase 2: Safe Transfers & Room Ambulation</h4>
                  <p className="text-xs text-slate-600">Bed-to-chair standing transfers, posture correction, and walker-assisted walking across room corridors.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <h4 className="text-xs font-bold text-emerald-900 uppercase">Phase 3: Stair Navigation & Cane Transition</h4>
                  <p className="text-xs text-slate-600">Progressing from walker to single-point cane and safe stair negotiation (good leg up, operated leg down).</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <h4 className="text-xs font-bold text-emerald-900 uppercase">Phase 4: Independent Outdoor Walking</h4>
                  <p className="text-xs text-slate-600">Building walking endurance in building compounds, uneven ground navigation, and long-term home exercises.</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <span className="text-xs font-bold text-blue-700 uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full border border-blue-100 inline-block">
                Home Visit Standards
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
                What You Can Expect During Home Visits
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Hospital-standard clinical professionalism maintained within your home:
              </p>

              <ul className="space-y-2.5 pt-2 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start space-x-2 bg-slate-50 p-3 rounded-xl border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Full 45 to 60 Minute Focus:</strong> Uninterrupted 1-on-1 attention with no clinical distractions or rushed care.</span>
                </li>
                <li className="flex items-start space-x-2 bg-slate-50 p-3 rounded-xl border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Sanitized Portable Equipment:</strong> Clean electrotherapy units, sanitized bands, and clinical hygiene protocols.</span>
                </li>
                <li className="flex items-start space-x-2 bg-slate-50 p-3 rounded-xl border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Punctual Scheduling:</strong> Flexible arrival slots between 7:00 AM and 8:30 PM with prior WhatsApp confirmation.</span>
                </li>
                <li className="flex items-start space-x-2 bg-slate-50 p-3 rounded-xl border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Transparent Fees:</strong> Upfront pricing without unexpected travel surcharges within covered Mumbai zones.</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Mumbai Suburb Coverage */}
      <section className="py-14 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">35+ Mumbai Suburbs</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading mt-1">
              Doorstep Coverage Across Mumbai & Thane
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              Select your suburb to view dedicated local response times and coverage details:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {LOCATION_GROUPS.map((group, idx) => (
              <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-200 space-y-3">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-emerald-600" />
                  <h3 className="text-sm font-bold text-slate-900">{group.category}</h3>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {group.locations.map((loc) => (
                    <button
                      key={loc.id}
                      onClick={() => onSelectLocation(loc.id)}
                      className="text-[11px] px-2.5 py-1 rounded-md bg-slate-100 hover:bg-emerald-50 hover:text-emerald-700 text-slate-700 transition font-medium border border-slate-200"
                    >
                      {loc.name}
                    </button>
                  ))}
                </div>
              </div>
            ))}
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
                <span>When to Book a Home Visit</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 font-heading">
                Ideal Situations for Doorstep Care
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-2 shrink-0"></span>
                  <span>Discharge from hospital following knee replacement, hip fracture fixation, or spinal surgery</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-2 shrink-0"></span>
                  <span>Severe acute back pain making walking or sitting down in an auto or cab agonizing</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-2 shrink-0"></span>
                  <span>Elderly parent who has stopped walking or experienced a recent fall in the apartment</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-2 shrink-0"></span>
                  <span>Stroke hemiplegia patient requiring bed positioning and transfer re-education</span>
                </li>
              </ul>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-amber-300 shadow-2xs space-y-3">
              <div className="flex items-center space-x-2 text-red-700 font-bold text-xs uppercase tracking-wider">
                <AlertCircle className="w-4 h-4 text-red-600" />
                <span>Important Safety Warning: Post-Surgical Red Flags</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                If the patient exhibits any of the following symptoms post-surgery, please immediately contact the operating surgeon or emergency hospital casualty:
              </p>
              <ul className="space-y-1.5 text-xs text-slate-800 font-medium">
                <li>• Sudden unilateral calf swelling, intense heat, redness, or deep vein pain (DVT suspicion)</li>
                <li>• Sudden shortness of breath, acute chest pain, or rapid coughing (PE suspicion)</li>
                <li>• Active bleeding, foul-smelling yellowish discharge, or gaping surgical incision wound</li>
                <li>• High body temperature (exceeding 101°F / 38.3°C) accompanied by chills or surgical site redness</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-14 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">FAQ</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading mt-1">
              Frequently Asked Questions: Home Physiotherapy
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqId === idx;
              return (
                <div key={idx} className="border border-slate-200 rounded-2xl overflow-hidden bg-slate-50 transition">
                  <button
                    onClick={() => setOpenFaqId(isOpen ? null : idx)}
                    className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 font-bold text-slate-900 text-sm hover:text-emerald-800 transition"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${isOpen ? 'rotate-180 text-emerald-600' : ''}`} />
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
              Post-Surgical Knee & Hip Rehabilitation
            </button>
            <button
              onClick={() => onNavigatePage('neuro-physiotherapy')}
              className="text-xs px-3.5 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-blue-300 text-slate-700 hover:text-blue-700 transition font-medium"
            >
              Neuro Physiotherapy for Stroke & Parkinson’s
            </button>
            <button
              onClick={() => onNavigatePage('orthopedic-physiotherapy')}
              className="text-xs px-3.5 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-blue-300 text-slate-700 hover:text-blue-700 transition font-medium"
            >
              Orthopedic Physiotherapy in Mumbai
            </button>
            <button
              onClick={() => onNavigatePage('physiotherapy-mumbai')}
              className="text-xs px-3.5 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-blue-300 text-slate-700 hover:text-blue-700 transition font-medium"
            >
              Physiotherapy in Mumbai Clinic & Coverage
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
      <section className="py-14 bg-gradient-to-tr from-slate-900 via-slate-800 to-emerald-950 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider border border-emerald-400/30">
            <span>Doorstep Home Care Across Mumbai • Dr. Pawan Gupta (PT)</span>
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight font-heading">
            Receive Hospital-Grade Physical Therapy At Home
          </h2>

          <p className="text-slate-300 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
            Eliminate painful car rides across Mumbai. Our licensed physiotherapists bring complete clinical care to your residence.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              onClick={() => onOpenBooking('Home Visit Physiotherapy', 'Mumbai Home Visit')}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm flex items-center justify-center space-x-2 shadow-lg transition"
            >
              <Calendar className="w-4 h-4 text-blue-200" />
              <span>Schedule Home Visit</span>
            </button>

            <a
              href={`tel:${CLINIC_CONTACT.phone}`}
              className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-sm flex items-center justify-center space-x-2 transition"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>Call {CLINIC_CONTACT.phoneDisplay}</span>
            </a>

            <a
              href={`https://wa.me/${CLINIC_CONTACT.whatsappNumber}?text=Hello%20Dr.%20Pawan%20Gupta,%20I%20would%20like%20to%20inquire%20about%20Home%20Visit%20Physiotherapy%20in%20Mumbai.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm flex items-center justify-center space-x-2 transition"
            >
              <MessageSquare className="w-4 h-4 text-emerald-200" />
              <span>WhatsApp Doctor</span>
            </a>
          </div>

          <div className="pt-4 border-t border-slate-700/60 text-xs text-slate-400 flex flex-wrap justify-center gap-4">
            <span>🏠 Available across 35+ Mumbai Suburbs</span>
            <span>⏱ Visiting Hours: 7:00 AM – 8:30 PM Daily</span>
            <span>💼 Portable Electrotherapy Included</span>
          </div>
        </div>
      </section>

    </div>
  );
};

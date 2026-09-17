import React, { useState } from 'react';
import { 
  Zap, 
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
  MapPin, 
  Home, 
  AlertCircle,
  Dumbbell,
  Target
} from 'lucide-react';
import { CLINIC_CONTACT } from '../data/clinicData';
import { SeoMeta } from './SeoMeta';
import { Breadcrumbs } from './Breadcrumbs';

import sportsImg from '../assets/images/regenerated_image_1787088221289.webp';
import doctorPhoto from '../assets/images/regenerated_image_1787089379420.webp';

interface SportsPhysiotherapyPageProps {
  onBackToHome: () => void;
  onNavigatePage: (page: string) => void;
  onSelectCondition: (conditionId: string) => void;
  onOpenBooking: (prefillService?: string, prefillArea?: string) => void;
  onOpenAiAssistant: (context?: string) => void;
}

export const SportsPhysiotherapyPage: React.FC<SportsPhysiotherapyPageProps> = ({
  onBackToHome,
  onNavigatePage,
  onSelectCondition,
  onOpenBooking,
  onOpenAiAssistant
}) => {
  const [openFaqId, setOpenFaqId] = useState<number | null>(0);

  const sportsConditions = [
    {
      title: 'ACL, PCL & Collateral Ligament Tears',
      desc: 'Pre-operative prehabilitation and post-reconstruction phase-wise rehabilitation focusing on quadriceps index symmetry and knee stability.',
      conditionId: 'acl-rehab'
    },
    {
      title: 'Runner’s Knee & Patellofemoral Pain',
      desc: 'Anterior knee aching exacerbated by downhill running, stairs, and squatting, managed through hip abductor strengthening and running gait mechanics.',
      conditionId: 'knee'
    },
    {
      title: 'Meniscal Tears & Cartilage Overload',
      desc: 'Rotational joint line tenderness and catching treated conservatively through axial unloading, hamstring-quad balanced recruitment, and proprioception.',
      conditionId: 'knee'
    },
    {
      title: 'Rotator Cuff & Shoulder Labral Injuries',
      desc: 'Overhead throwing athlete pain, swimmer’s shoulder, and subacromial impingement managed with rotator cuff eccentric loading and scapular rhythm.',
      conditionId: 'shoulder'
    },
    {
      title: 'Ankle Inversion Sprains & Chronic Instability',
      desc: 'Lateral ligament laxity (ATFL/CFL), persistent swelling, and recurrent roll-overs rehabilitated via dynamic wobble-board balance and agility drills.',
      conditionId: 'sports-injuries'
    },
    {
      title: 'Hamstring & Groin Strain Recurrence',
      desc: 'High-speed running injuries treated through Nordic hamstring curls, adductor kinetic control, and progressive sprinting mechanics.',
      conditionId: 'sports-injuries'
    }
  ];

  const assessmentSteps = [
    {
      step: '01',
      title: 'Injury Mechanism Analysis',
      desc: 'Evaluating exact contact vs non-contact force vectors, joint pop sensations, immediate effusion onset, and training volume spikes.'
    },
    {
      step: '02',
      title: 'Orthopedic Joint Stability Tests',
      desc: 'Manual laxity screening including Lachman, anterior/posterior drawer, pivot shift, McMurray, and talar tilt assessments.'
    },
    {
      step: '03',
      title: 'Kinetic Chain Biomechanical Screen',
      desc: 'Examining ankle dorsiflexion restrictions, hip drop (Trendelenburg), core rotational stiffness, and foot pronation patterns.'
    },
    {
      step: '04',
      title: 'Functional Hop & Symmetry Testing',
      desc: 'Objective single-leg hop for distance, triple hop, and Y-balance testing to calculate Limb Symmetry Index (LSI) before sports return.'
    }
  ];

  const treatmentTechniques = [
    {
      name: 'High-Velocity Eccentric Tendon Loading',
      detail: 'Stimulating collagen remodeling and tensile capacity in patellar, Achilles, and hamstring tendinopathies through controlled loading tempos.'
    },
    {
      name: 'Dynamic Kinesiology & Rigid Sports Taping',
      detail: 'Joint realignment, proprioceptive feedback, and patellar tendon unloading during functional training and practice sessions.'
    },
    {
      name: 'Certified Dry Needling for Sports Spasms',
      detail: 'Deactivating recalcitrant myofascial trigger points in tight quadriceps, calves, and gluteal complexes to restore full resting muscle length.'
    },
    {
      name: 'IASTM Myofascial Release',
      detail: 'Instrument-assisted tools to release restricted fascial planes around the IT band, plantar fascia, and thoracolumbar junction.'
    },
    {
      name: 'Plyometric & Deceleration Mechanics',
      detail: 'Training landing kinematics (knee-over-toes alignment, trunk flexion) to dissipate vertical ground reaction forces safely.'
    },
    {
      name: 'Objective Return-to-Sport Testing Protocol',
      detail: 'Multi-stage clearance testing ensuring >90% limb symmetry, psychological readiness, and agility confidence before competition clearance.'
    }
  ];

  const faqs = [
    {
      q: 'Can a partial ACL or meniscus tear heal without surgery?',
      a: 'Many grade 1 and grade 2 ligament sprains and degenerative or stable meniscus tears can be managed successfully with non-operative sports physiotherapy. Our rehabilitation focuses on dynamic muscular stabilization—strengthening the hamstrings, glutes, and quadriceps to function as active joint stabilizers. If gross mechanical instability persists, we coordinate with your orthopedic surgeon.'
    },
    {
      q: 'How soon after a sports injury should I see a physiotherapist?',
      a: 'Early assessment within 24 to 72 hours is strongly advised. While acute rest, ice, compression, and elevation (PEACE & LOVE protocol) control excessive swelling, early protected mobilization guided by a physiotherapist prevents arthrogenic muscle inhibition and joint stiffness.'
    },
    {
      q: 'What is the Return-to-Sport clearance criteria used by Dr. Pawan Gupta (PT)?',
      a: 'We do not clear athletes based on time elapsed alone. Clearance requires meeting strict objective criteria: full pain-free range of motion, at least 90% Limb Symmetry Index (LSI) on quad strength and hop tests, absence of knee effusion after agility drills, and psychological readiness.'
    },
    {
      q: 'Do you help marathon runners training for the Mumbai Marathon?',
      a: 'Yes. Every year we rehabilitate and prepare dozens of long-distance runners across Mumbai for half and full marathons. We analyze running cadence, footwear wear patterns, gluteus medius endurance, and treat runner’s knee, shin splints, and plantar fasciitis.'
    },
    {
      q: 'Are sports physiotherapy sessions available via home visits in Mumbai?',
      a: 'Yes. In the acute phase following an injury or surgery when weight-bearing is restricted, Dr. Pawan Gupta (PT) and our clinical team provide certified home visits with portable recovery modalities across South Mumbai, Western Suburbs, and Central Mumbai.'
    }
  ];

  const pageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://runtowinphysiotherapy.com/sports-physiotherapy#webpage",
        "name": "Sports Physiotherapy in Mumbai | Athletic Rehabilitation | Dr. Pawan Gupta (PT)",
        "url": "https://runtowinphysiotherapy.com/sports-physiotherapy",
        "description": "Evidence-based sports physiotherapy in Mumbai for ACL/PCL tears, meniscus injuries, runner's knee, and rotator cuff rehabilitation by Dr. Pawan Gupta (PT).",
        "isPartOf": {
          "@id": "https://runtowinphysiotherapy.com/#website"
        },
        "about": {
          "@id": "https://runtowinphysiotherapy.com/#clinic"
        }
      },
      {
        "@type": "MedicalTherapy",
        "@id": "https://runtowinphysiotherapy.com/sports-physiotherapy#service",
        "name": "Sports Physiotherapy Mumbai",
        "description": "Evidence-based sports physical therapy, ACL rehabilitation, and athletic return-to-play training in Mumbai led by Dr. Pawan Gupta (PT).",
        "relevantSpecialty": {
          "@type": "MedicalSpecialty",
          "name": "SportsMedicine"
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
            "name": "Sports Physiotherapy",
            "item": "https://runtowinphysiotherapy.com/sports-physiotherapy"
          }
        ]
      }
    ]
  };

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 antialiased selection:bg-blue-600 selection:text-white">
      <SeoMeta
        title="Sports Physiotherapy in Mumbai | Athletic Rehabilitation | Dr. Pawan Gupta (PT)"
        description="Evidence-based sports physiotherapy in Mumbai for ACL/PCL tears, meniscus injuries, runner's knee, and rotator cuff rehabilitation by Dr. Pawan Gupta (PT)."
        canonicalUrl="https://runtowinphysiotherapy.com/sports-physiotherapy"
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
              { label: 'Sports Physiotherapy', current: true }
            ]}
          />
        </div>
      </div>

      {/* Hero Header */}
      <header className="bg-gradient-to-b from-amber-50/70 via-white to-slate-50 py-12 md:py-16 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider">
                <Zap className="w-3.5 h-3.5 text-amber-600" />
                <span>Athletic Injury Rehabilitation & Performance</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-heading leading-tight">
                Sports Physiotherapy in Mumbai
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                Comprehensive athletic injury management, biomechanical gait analysis, and objective return-to-sport clearance. Led by <strong className="text-slate-900">Dr. Pawan Gupta (PT)</strong>, Master of Physiotherapy in Musculoskeletal & Sports Biomechanics.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => onOpenBooking('Sports Physiotherapy Consultation')}
                  className="px-6 py-3.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-sm flex items-center space-x-2 shadow-md transition"
                >
                  <Calendar className="w-4 h-4 text-blue-200" />
                  <span>Book Sports Rehab Assessment</span>
                </button>

                <a
                  href={`tel:${CLINIC_CONTACT.phone}`}
                  className="px-5 py-3.5 rounded-xl bg-white border border-slate-300 hover:border-slate-400 text-slate-800 font-bold text-sm flex items-center space-x-2 shadow-2xs transition"
                >
                  <Phone className="w-4 h-4 text-blue-600" />
                  <span>Call {CLINIC_CONTACT.phoneDisplay}</span>
                </a>

                <a
                  href={`https://wa.me/${CLINIC_CONTACT.whatsappNumber}?text=Hello%20Dr.%20Pawan%20Gupta,%20I%20would%20like%20to%20inquire%20about%20Sports%20Physiotherapy%20in%20Mumbai.`}
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
                  <Target className="w-4 h-4 text-amber-600" />
                  <span>Return-to-Play Hop & Strength Testing</span>
                </span>
                <span className="flex items-center space-x-1.5">
                  <Dumbbell className="w-4 h-4 text-blue-600" />
                  <span>Kinetic Chain Biomechanics</span>
                </span>
                <span className="flex items-center space-x-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Certified Sports Taping & Dry Needling</span>
                </span>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-slate-100 relative">
                <img
                  src={sportsImg}
                  alt="Sports physiotherapy rehabilitation for athletic knee and shoulder recovery by Dr. Pawan Gupta (PT) in Mumbai"
                  className="w-full h-72 sm:h-80 object-cover"
                  loading="eager"
                  width="500"
                  height="360"
                />
                <div className="p-4 bg-white border-t border-slate-200 text-xs text-slate-600 flex items-center justify-between">
                  <span className="font-semibold text-slate-900">Dr. Pawan Gupta (PT)</span>
                  <span className="text-amber-700 font-semibold">M.P.Th (Sports & Musculoskeletal)</span>
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
            <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">Athlete Profiles</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading mt-1">
              Who Sports Physiotherapy is For
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              Our sports physiotherapy protocols are customized across the competitive and recreational spectrum.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                title: 'Marathon & Distance Runners',
                desc: 'Athletes dealing with IT band syndrome, Achilles tendinopathy, shin splints, or runner’s knee requiring cadence and footstrike correction.'
              },
              {
                title: 'Cricketers & Overhead Athletes',
                desc: 'Bowlers and batsmen with rotator cuff impingement, SLAP tears, lower back stress reactions, or lateral epicondylitis.'
              },
              {
                title: 'Post-ACL / Meniscus Patients',
                desc: 'Individuals recovering from arthroscopic surgery needing structured phase-wise strength, proprioception, and hop test clearance.'
              },
              {
                title: 'Gym & Recreational Warriors',
                desc: 'CrossFit, football, and badminton enthusiasts with acute ankle sprains, hamstring pulls, or weightlifting shoulder pain.'
              }
            ].map((item, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <CheckCircle2 className="w-5 h-5 text-amber-600" />
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
            <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">Sports Conditions</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading mt-1">
              Common Sports Injuries Addressed
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              Targeted protocols to rebuild tensile tissue strength and eliminate biomechanical overload.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sportsConditions.map((c, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-3 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="text-base font-bold text-slate-900 font-heading">{c.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{c.desc}</p>
                </div>
                <button
                  onClick={() => onSelectCondition(c.conditionId)}
                  className="text-xs font-bold text-blue-700 hover:text-blue-800 flex items-center space-x-1 pt-2 border-t border-slate-100"
                >
                  <span>Explore Protocol Guide</span>
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
            <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">Clinical Rigor</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading mt-1">
              Our Sports Injury Assessment Process
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              We look beyond the site of pain to evaluate your total kinetic chain and athletic movement demands.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {assessmentSteps.map((s) => (
              <div key={s.step} className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 relative">
                <span className="text-xs font-extrabold text-amber-700 bg-amber-100 px-2.5 py-1 rounded-md inline-block">
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
            <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">Advanced Modalities</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading mt-1">
              Athletic Treatment & Loading Modalities
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              Hands-on manual techniques combined with high-performance strength and conditioning principles.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {treatmentTechniques.map((t, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-2">
                <h3 className="text-sm font-bold text-slate-900 flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-amber-600"></span>
                  <span>{t.name}</span>
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">{t.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rehabilitation & What Patients Can Expect */}
      <section className="py-14 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            
            <div className="space-y-4">
              <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 inline-block">
                Phased Progression
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
                Sports Rehabilitation Methodology
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Returning to competition requires systematic tissue reloading. We guide athletes across 4 objective rehabilitation phases:
              </p>

              <div className="space-y-3 pt-2">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <h4 className="text-xs font-bold text-amber-900 uppercase">Phase 1: Protection, Effusion Control & Joint Motion</h4>
                  <p className="text-xs text-slate-600">Eliminating joint swelling, protecting healing fibers, and restoring full active knee extension/shoulder flexion.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <h4 className="text-xs font-bold text-amber-900 uppercase">Phase 2: Hypertrophy & Neuromuscular Kinetic Control</h4>
                  <p className="text-xs text-slate-600">Overcoming arthrogenic muscle inhibition through closed-kinetic chain squats, deadlifts, and hip stabilization.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <h4 className="text-xs font-bold text-amber-900 uppercase">Phase 3: Plyometrics, Deceleration & Agility Drills</h4>
                  <p className="text-xs text-slate-600">Teaching shock absorption, cutting mechanics, reactive footwork, and energy dissipation on turf or court.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <h4 className="text-xs font-bold text-amber-900 uppercase">Phase 4: Return-to-Play Testing & Re-Injury Prevention</h4>
                  <p className="text-xs text-slate-600">Quantified hop symmetry testing, sport-specific simulation drills, and lifelong strength maintenance.</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <span className="text-xs font-bold text-blue-700 uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full border border-blue-100 inline-block">
                Athlete Experience
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
                What Athletes Can Expect
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                High-level physical rehabilitation tailored to your specific sport and performance goals:
              </p>

              <ul className="space-y-2.5 pt-2 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start space-x-2 bg-slate-50 p-3 rounded-xl border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Objective Data Metrics:</strong> We track joint angles, limb symmetry percentages, and load volumes rather than guessing.</span>
                </li>
                <li className="flex items-start space-x-2 bg-slate-50 p-3 rounded-xl border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Direct Consultant Supervision:</strong> Dr. Pawan Gupta (PT) personally monitors every loading progression and mechanics adjustment.</span>
                </li>
                <li className="flex items-start space-x-2 bg-slate-50 p-3 rounded-xl border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Sport-Specific Conditioning:</strong> Exercises replicate your game positions, running cadences, and swing mechanics.</span>
                </li>
                <li className="flex items-start space-x-2 bg-slate-50 p-3 rounded-xl border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Honest Timelines:</strong> No rushing back prematurely to risk secondary ligament re-ruptures.</span>
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
                <span>When to Schedule a Sports Assessment</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 font-heading">
                Key Indicators for Professional Evaluation
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-2 shrink-0"></span>
                  <span>Sensation of a "pop" or joint giving way during deceleration or pivot movement</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-2 shrink-0"></span>
                  <span>Rapid joint swelling occurring within 2 to 4 hours following sporting activity</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-2 shrink-0"></span>
                  <span>Inability to comfortably put weight on the leg or walk four steps immediately after injury</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-2 shrink-0"></span>
                  <span>Persistent tendon tightness in Achilles, knee, or elbow that worsens after workouts</span>
                </li>
              </ul>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-amber-300 shadow-2xs space-y-3">
              <div className="flex items-center space-x-2 text-red-700 font-bold text-xs uppercase tracking-wider">
                <AlertCircle className="w-4 h-4 text-red-600" />
                <span>Important Safety Warning: Medical Red Flags</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                If you observe any of the following signs after a traumatic sports injury, please proceed immediately to an emergency orthopedic casualty center for urgent medical screening:
              </p>
              <ul className="space-y-1.5 text-xs text-slate-800 font-medium">
                <li>• Visible bone deformity, open wound over joint, or suspected acute fracture</li>
                <li>• Loss of distal pulse, coldness, or pale discoloration in foot or hand</li>
                <li>• Total sensory numbness throughout the limb below the injury level</li>
                <li>• Severe acute locked knee that cannot be passively unlocked by a clinician</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-14 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">FAQ</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading mt-1">
              Frequently Asked Questions: Sports Physiotherapy
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqId === idx;
              return (
                <div key={idx} className="border border-slate-200 rounded-2xl overflow-hidden bg-slate-50 transition">
                  <button
                    onClick={() => setOpenFaqId(isOpen ? null : idx)}
                    className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 font-bold text-slate-900 text-sm hover:text-amber-800 transition"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${isOpen ? 'rotate-180 text-amber-600' : ''}`} />
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
              onClick={() => onNavigatePage('rehabilitation')}
              className="text-xs px-3.5 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-blue-300 text-slate-700 hover:text-blue-700 transition font-medium"
            >
              Post-Surgical Joint Rehabilitation
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
              Tendon Pain Management
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
      <section className="py-14 bg-gradient-to-tr from-slate-900 via-slate-800 to-blue-950 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider border border-amber-400/30">
            <span>Sports Specialist Consultation • Dr. Pawan Gupta (PT)</span>
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight font-heading">
            Rebuild Athletic Strength & Return to Sport With Confidence
          </h2>

          <p className="text-slate-300 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
            Appointments available at our Sewri outpatient clinic and via specialized home visits across Mumbai for acute post-injury care.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              onClick={() => onOpenBooking('Sports Physiotherapy Consultation')}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm flex items-center justify-center space-x-2 shadow-lg transition"
            >
              <Calendar className="w-4 h-4 text-blue-200" />
              <span>Book Sports Assessment</span>
            </button>

            <a
              href={`tel:${CLINIC_CONTACT.phone}`}
              className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-sm flex items-center justify-center space-x-2 transition"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>Call {CLINIC_CONTACT.phoneDisplay}</span>
            </a>

            <a
              href={`https://wa.me/${CLINIC_CONTACT.whatsappNumber}?text=Hello%20Dr.%20Pawan%20Gupta,%20I%20would%20like%20to%20inquire%20about%20Sports%20Physiotherapy.`}
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

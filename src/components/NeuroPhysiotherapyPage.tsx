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
  MapPin, 
  Home, 
  AlertCircle,
  Users,
  Compass
} from 'lucide-react';
import { CLINIC_CONTACT } from '../data/clinicData';
import { SeoMeta } from './SeoMeta';
import { Breadcrumbs } from './Breadcrumbs';

import neuroImg from '../assets/images/regenerated_image_1787088232497.webp';
import doctorPhoto from '../assets/images/regenerated_image_1787089379420.webp';

interface NeuroPhysiotherapyPageProps {
  onBackToHome: () => void;
  onNavigatePage: (page: string) => void;
  onSelectCondition: (conditionId: string) => void;
  onOpenBooking: (prefillService?: string, prefillArea?: string) => void;
  onOpenAiAssistant: (context?: string) => void;
}

export const NeuroPhysiotherapyPage: React.FC<NeuroPhysiotherapyPageProps> = ({
  onBackToHome,
  onNavigatePage,
  onSelectCondition,
  onOpenBooking,
  onOpenAiAssistant
}) => {
  const [openFaqId, setOpenFaqId] = useState<number | null>(0);

  const neuroConditions = [
    {
      title: 'Stroke (CVA) Hemiplegia Rehabilitation',
      desc: 'Promoting neuroplasticity, tone inhibition, trunk control, and upper-limb functional reach for ischemic or hemorrhagic stroke survivors.',
      conditionId: 'stroke-rehab'
    },
    {
      title: 'Parkinson’s Disease Mobility Care',
      desc: 'Counteracting cogwheel rigidity, resting tremors, bradykinesia, and freezing episodes with high-amplitude movement retraining and auditory cueing.',
      conditionId: 'parkinsons-rehab'
    },
    {
      title: 'Bell’s Palsy & Facial Nerve Palsy',
      desc: 'Re-educating facial asymmetry, eye closure, and oral competence through neuromuscular stimulation, trophic muscle tapping, and mirror biofeedback.',
      conditionId: 'stroke-rehab'
    },
    {
      title: 'Balance Impairments & Ataxia',
      desc: 'Cerebellar and sensory balance retraining using dynamic vestibular challenges, tandem walking, and sensory integration to prevent falls.',
      conditionId: 'balance-gait-rehab'
    },
    {
      title: 'Peripheral Neuropathy & Diabetic Foot Care',
      desc: 'Enhancing joint position proprioception, foot clearance, and sensory awareness to maintain safe independent ambulation.',
      conditionId: 'balance-gait-rehab'
    },
    {
      title: 'Spinal Cord Injury (Incomplete Paraplegia)',
      desc: 'Maximizing preserved motor units, wheelchair transfer independence, spasticity control, and standing frame protocols.',
      conditionId: 'stroke-rehab'
    }
  ];

  const assessmentSteps = [
    {
      step: '01',
      title: 'Muscle Tone & Spasticity Grading',
      desc: 'Modified Ashworth Scale (MAS) evaluation to determine hypertonicity, resistance to passive stretch, and clonus in flexor/extensor synergy patterns.'
    },
    {
      step: '02',
      title: 'Motor Control & Brunnstrom Staging',
      desc: 'Determining voluntary movement recovery stages (from flaccidity and synergistic mass movement to isolated joint control).'
    },
    {
      step: '03',
      title: 'Balance & Fall Risk Quantified Testing',
      desc: 'Validated Berg Balance Scale (BBS) and Timed Up and Go (TUG) testing to evaluate postural stability during standing and transfers.'
    },
    {
      step: '04',
      title: 'Functional Independence & Bed Mobility',
      desc: 'Evaluating rolling, bridging, supine-to-sit transitions, sitting balance, and transfer biomechanics with caregiver assistance levels.'
    }
  ];

  const treatmentTechniques = [
    {
      name: 'Bobath Concept (NDT Approach)',
      detail: 'Inhibiting abnormal reflex patterns, breaking down stereotyped spastic synergies, and facilitating normal automatic postural reactions.'
    },
    {
      name: 'Proprioceptive Neuromuscular Facilitation (PNF)',
      detail: 'Diagonal and spiral movement patterns using manual resistance and quick stretch to stimulate muscle recruitment and sensory feedback.'
    },
    {
      name: 'Task-Specific Motor Relearning',
      detail: 'Repetitive, goal-directed practice of real-world tasks (grasping cups, stepping over obstacles, sit-to-stand transitions).'
    },
    {
      name: 'Functional Electrical Stimulation (FES)',
      detail: 'Neuromuscular electrical stimulation applied to the common peroneal nerve to assist ankle dorsiflexion and manage foot drop during gait.'
    },
    {
      name: 'Dual-Task Cognitive Balance Training',
      detail: 'Challenging postural stability simultaneously with cognitive counting or verbal recall to build real-world walking resilience.'
    },
    {
      name: 'Caregiver Transfer & Ergonomic Training',
      detail: 'Equipping family members and attendants with biomechanically safe transfer techniques to prevent patient falls and caregiver spinal strain.'
    }
  ];

  const faqs = [
    {
      q: 'When should stroke rehabilitation physiotherapy begin?',
      a: 'Neurological rehabilitation should begin as early as medically safe—frequently within 48 to 72 hours following acute medical stabilization by the neurologist. Early mobilization stimulates neuroplastic cortical reorganization and prevents debilitating joint contractures, muscle atrophy, and bedsores.'
    },
    {
      q: 'Can stroke patients recover movement after 6 months or 1 year?',
      a: 'Yes. While the fastest neurological recovery typically occurs within the first 3 to 6 months, modern neuroscience confirms that neuroplasticity continues for years. With consistent task-oriented therapy and progressive neuromuscular challenge, patients can achieve meaningful functional gains in balance and transfers well beyond the first year.'
    },
    {
      q: 'Do you provide bedside home visit neuro physiotherapy in Mumbai?',
      a: 'Yes. Many neurological patients have mobility limitations that make traveling to an outpatient clinic exhausting and unsafe. Dr. Pawan Gupta (PT) and our specialized home care team provide comprehensive bedside neuro physiotherapy across South Mumbai, Central Mumbai, Western Suburbs, and Thane.'
    },
    {
      q: 'What is the role of physiotherapy in Parkinson’s Disease?',
      a: 'Physiotherapy in Parkinson’s does not reverse the underlying dopamine depletion, but it significantly preserves functional independence. We train high-amplitude movements, external auditory and visual rhythmic cues to overcome freezing of gait, and exercises to maintain spinal posture and balance.'
    },
    {
      q: 'How long does each neuro physiotherapy session last?',
      a: 'Neuro physiotherapy sessions are typically 45 to 60 minutes long. Neurological relearning requires mental and physical exertion, so sessions are structured with adequate rest intervals to prevent central neurological fatigue.'
    }
  ];

  const pageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://runtowinphysiotherapy.com/neuro-physiotherapy#webpage",
        "name": "Neuro Physiotherapy in Mumbai | Stroke & Neurological Care | Dr. Pawan Gupta (PT)",
        "url": "https://runtowinphysiotherapy.com/neuro-physiotherapy",
        "description": "Evidence-based neuro physiotherapy in Mumbai for stroke hemiplegia, Parkinson's disease, Bell's palsy, and balance disorders at our Sewri clinic and doorstep home visits.",
        "isPartOf": {
          "@id": "https://runtowinphysiotherapy.com/#website"
        },
        "about": {
          "@id": "https://runtowinphysiotherapy.com/#clinic"
        }
      },
      {
        "@type": "MedicalTherapy",
        "@id": "https://runtowinphysiotherapy.com/neuro-physiotherapy#service",
        "name": "Neuro Physiotherapy Mumbai",
        "description": "Evidence-based neuro physiotherapy for stroke recovery, hemiplegia, Parkinson's, and balance rehabilitation in Mumbai led by Dr. Pawan Gupta (PT).",
        "relevantSpecialty": {
          "@type": "MedicalSpecialty",
          "name": "Neurology"
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
            "name": "Neuro Physiotherapy",
            "item": "https://runtowinphysiotherapy.com/neuro-physiotherapy"
          }
        ]
      }
    ]
  };

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 antialiased selection:bg-blue-600 selection:text-white">
      <SeoMeta
        title="Neuro Physiotherapy in Mumbai | Stroke & Neurological Care | Dr. Pawan Gupta (PT)"
        description="Evidence-based neuro physiotherapy in Mumbai for stroke hemiplegia, Parkinson's disease, Bell's palsy, and balance disorders at our Sewri clinic and doorstep home visits."
        canonicalUrl="https://runtowinphysiotherapy.com/neuro-physiotherapy"
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
              { label: 'Neuro Physiotherapy', current: true }
            ]}
          />
        </div>
      </div>

      {/* Hero Header */}
      <header className="bg-gradient-to-b from-indigo-50/70 via-white to-slate-50 py-12 md:py-16 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-indigo-100 text-indigo-800 text-xs font-bold uppercase tracking-wider">
                <Activity className="w-3.5 h-3.5 text-indigo-600" />
                <span>Specialized Neuromuscular & Motor Recovery</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-heading leading-tight">
                Neuro Physiotherapy in Mumbai
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                Dedicated neurological rehabilitation utilizing neuroplasticity motor relearning, Bobath concepts, and gait re-education. Led by <strong className="text-slate-900">Dr. Pawan Gupta (PT)</strong>, helping patients regain movement, balance, and dignity.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => onOpenBooking('Neuro Physiotherapy Consultation')}
                  className="px-6 py-3.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-sm flex items-center space-x-2 shadow-md transition"
                >
                  <Calendar className="w-4 h-4 text-blue-200" />
                  <span>Book Neuro Assessment</span>
                </button>

                <a
                  href={`tel:${CLINIC_CONTACT.phone}`}
                  className="px-5 py-3.5 rounded-xl bg-white border border-slate-300 hover:border-slate-400 text-slate-800 font-bold text-sm flex items-center space-x-2 shadow-2xs transition"
                >
                  <Phone className="w-4 h-4 text-blue-600" />
                  <span>Call {CLINIC_CONTACT.phoneDisplay}</span>
                </a>

                <a
                  href={`https://wa.me/${CLINIC_CONTACT.whatsappNumber}?text=Hello%20Dr.%20Pawan%20Gupta,%20I%20would%20like%20to%20inquire%20about%20Neuro%20Physiotherapy%20in%20Mumbai.`}
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
                  <Home className="w-4 h-4 text-emerald-600" />
                  <span>Bedside Home Care Across Mumbai</span>
                </span>
                <span className="flex items-center space-x-1.5">
                  <Compass className="w-4 h-4 text-indigo-600" />
                  <span>Bobath & PNF Motor Relearning</span>
                </span>
                <span className="flex items-center space-x-1.5">
                  <Users className="w-4 h-4 text-blue-600" />
                  <span>Caregiver Safe Transfer Guidance</span>
                </span>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-slate-100 relative">
                <img
                  src={neuroImg}
                  alt="Neuro physiotherapy rehabilitation session for stroke hemiplegia and balance by Dr. Pawan Gupta (PT) in Mumbai"
                  className="w-full h-72 sm:h-80 object-cover"
                  loading="eager"
                  width="500"
                  height="360"
                />
                <div className="p-4 bg-white border-t border-slate-200 text-xs text-slate-600 flex items-center justify-between">
                  <span className="font-semibold text-slate-900">Dr. Pawan Gupta (PT)</span>
                  <span className="text-indigo-700 font-semibold">Senior Neuromuscular Rehabilitation Consultant</span>
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
            <span className="text-xs font-bold text-indigo-700 uppercase tracking-wider">Patient Profiles</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading mt-1">
              Who Neuro Physiotherapy is For
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              Neuro rehabilitation supports individuals affected by central and peripheral nervous system impairments.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                title: 'Stroke Survivors',
                desc: 'Patients post-ischemic or hemorrhagic stroke dealing with one-sided weakness, foot drop, or arm immobility.'
              },
              {
                title: 'Parkinson’s Disease Patients',
                desc: 'Individuals experiencing muscle stiffness, balance insecurity, gait shuffling, and frequent hesitation or freezing.'
              },
              {
                title: 'Facial Nerve Palsy Patients',
                desc: 'Individuals with sudden unilateral facial paralysis (Bell’s Palsy) seeking targeted muscle re-education.'
              },
              {
                title: 'Seniors with Gait Insecurity',
                desc: 'Elderly patients with fear of falling, unsteady walking, or sensory neuropathy requiring systematic balance training.'
              }
            ].map((item, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <CheckCircle2 className="w-5 h-5 text-indigo-600" />
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
            <span className="text-xs font-bold text-indigo-700 uppercase tracking-wider">Neurological Conditions</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading mt-1">
              Neurological Conditions Commonly Addressed
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              Structured protocols designed to modulate tone, restore postural symmetry, and stimulate functional pathways.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {neuroConditions.map((c, idx) => (
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
            <span className="text-xs font-bold text-indigo-700 uppercase tracking-wider">Clinical Measurement</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading mt-1">
              Our Neurological Assessment Process
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              Quantifying baseline neurological motor control, muscle tone, and fall risk using standardized clinical metrics.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {assessmentSteps.map((s) => (
              <div key={s.step} className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 relative">
                <span className="text-xs font-extrabold text-indigo-700 bg-indigo-100 px-2.5 py-1 rounded-md inline-block">
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
            <span className="text-xs font-bold text-indigo-700 uppercase tracking-wider">Neuroplastic Facilitation</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading mt-1">
              Evidence-Based Neuro Treatment Approaches
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              Facilitating voluntary motor control through evidence-based sensory-motor techniques and task-oriented repetition.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {treatmentTechniques.map((t, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-2">
                <h3 className="text-sm font-bold text-slate-900 flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-indigo-600"></span>
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
                Milestone Stages
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
                Step-by-Step Neuro Rehabilitation
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Neurological recovery is structured in functional stages to prevent secondary complications and build lasting independence:
              </p>

              <div className="space-y-3 pt-2">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <h4 className="text-xs font-bold text-indigo-900 uppercase">Stage 1: Positioning, Tone Modulation & Bed Mobility</h4>
                  <p className="text-xs text-slate-600">Preventing contractures, managing shoulder subluxation with proper slinging, and teaching rolling and bridging.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <h4 className="text-xs font-bold text-indigo-900 uppercase">Stage 2: Static & Dynamic Sitting Balance</h4>
                  <p className="text-xs text-slate-600">Core stability, trunk elongation on the hemiplegic side, and symmetrical sitting posture without falling.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <h4 className="text-xs font-bold text-indigo-900 uppercase">Stage 3: Sit-to-Stand & Weight-Bearing Tolerance</h4>
                  <p className="text-xs text-slate-600">Teaching symmetrical weight transfer through both lower limbs and controlled standing balance.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <h4 className="text-xs font-bold text-indigo-900 uppercase">Stage 4: Assisted & Independent Ambulation</h4>
                  <p className="text-xs text-slate-600">Gait pattern correction, foot clearance, assistive device prescription (walker/quadripod cane), and outdoor navigation.</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <span className="text-xs font-bold text-blue-700 uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full border border-blue-100 inline-block">
                Patient & Family Care
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
                What Patients & Families Can Expect
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Empathetic, unhurried care recognizing the emotional and physical reality of neurological illness:
              </p>

              <ul className="space-y-2.5 pt-2 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start space-x-2 bg-slate-50 p-3 rounded-xl border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Bedside Home Visits:</strong> Available across 35+ Mumbai suburbs so frail patients do not struggle with ambulance or taxi transport.</span>
                </li>
                <li className="flex items-start space-x-2 bg-slate-50 p-3 rounded-xl border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Comprehensive Family Training:</strong> We teach family members how to safely assist transfers from bed to chair.</span>
                </li>
                <li className="flex items-start space-x-2 bg-slate-50 p-3 rounded-xl border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Patience & Encouragement:</strong> We calibrate session pace to avoid cognitive or muscular exhaustion.</span>
                </li>
                <li className="flex items-start space-x-2 bg-slate-50 p-3 rounded-xl border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Honest Expectations:</strong> We celebrate every small motor win while communicating realistic functional goals.</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* When Assessment is Appropriate + Acute Emergency Warning */}
      <section className="py-12 bg-amber-50/50 border-b border-amber-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-amber-900 font-bold text-sm">
                <Clock className="w-4 h-4 text-amber-700" />
                <span>When to Schedule a Neuro Physiotherapy Assessment</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 font-heading">
                Indicators for Rehabilitation
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-2 shrink-0"></span>
                  <span>Following hospital discharge after medical stabilization of a stroke or neurosurgical procedure</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-2 shrink-0"></span>
                  <span>Noticeable increase in limb stiffness, curling fingers, or difficulty opening the hand</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-2 shrink-0"></span>
                  <span>Progressive difficulty standing from a low sofa or frequent loss of balance in the bathroom</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-2 shrink-0"></span>
                  <span>Recent diagnosis of Parkinson’s disease to establish early baseline mobility routines</span>
                </li>
              </ul>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-red-300 shadow-2xs space-y-3">
              <div className="flex items-center space-x-2 text-red-700 font-bold text-xs uppercase tracking-wider">
                <AlertCircle className="w-4 h-4 text-red-600" />
                <span>Critical Safety Warning: Acute Stroke Medical Emergency</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Physiotherapy is NOT emergency treatment. If someone experiences sudden onset of stroke symptoms, immediately call an emergency ambulance (Dial 108) to reach an acute stroke hospital:
              </p>
              <ul className="space-y-1.5 text-xs text-slate-800 font-medium">
                <li>• <strong>F – Face Drooping:</strong> One side of the face droops or is numb when smiling</li>
                <li>• <strong>A – Arm Weakness:</strong> One arm drifts downward when attempting to raise both arms</li>
                <li>• <strong>S – Speech Difficulty:</strong> Slurred speech, inability to repeat simple sentences</li>
                <li>• <strong>T – Time to Call Emergency:</strong> Immediate hospital arrival within the 4.5-hour thrombolysis window saves lives.</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-14 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold text-indigo-700 uppercase tracking-wider">FAQ</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading mt-1">
              Frequently Asked Questions: Neuro Physiotherapy
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqId === idx;
              return (
                <div key={idx} className="border border-slate-200 rounded-2xl overflow-hidden bg-slate-50 transition">
                  <button
                    onClick={() => setOpenFaqId(isOpen ? null : idx)}
                    className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 font-bold text-slate-900 text-sm hover:text-indigo-800 transition"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${isOpen ? 'rotate-180 text-indigo-600' : ''}`} />
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
              onClick={() => onNavigatePage('home-physiotherapy')}
              className="text-xs px-3.5 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-blue-300 text-slate-700 hover:text-blue-700 transition font-medium"
            >
              Home Visit Physiotherapy in Mumbai
            </button>
            <button
              onClick={() => onNavigatePage('rehabilitation')}
              className="text-xs px-3.5 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-blue-300 text-slate-700 hover:text-blue-700 transition font-medium"
            >
              Senior Citizen Mobility & Fall Prevention
            </button>
            <button
              onClick={() => onNavigatePage('orthopedic-physiotherapy')}
              className="text-xs px-3.5 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-blue-300 text-slate-700 hover:text-blue-700 transition font-medium"
            >
              Orthopedic Physiotherapy in Mumbai
            </button>
            <button
              onClick={() => onNavigatePage('services')}
              className="text-xs px-3.5 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-blue-300 text-slate-700 hover:text-blue-700 transition font-medium"
            >
              All Clinical Services & Tariffs
            </button>
            <button
              onClick={() => onNavigatePage('physiotherapy-mumbai')}
              className="text-xs px-3.5 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-blue-300 text-slate-700 hover:text-blue-700 transition font-medium"
            >
              Physiotherapy in Mumbai Overview
            </button>
          </div>
        </div>
      </section>

      {/* Booking CTA Banner */}
      <section className="py-14 bg-gradient-to-tr from-slate-900 via-slate-800 to-indigo-950 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-bold uppercase tracking-wider border border-indigo-400/30">
            <span>Specialized Neuro Rehabilitation • Dr. Pawan Gupta (PT)</span>
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight font-heading">
            Support Neurological Recovery & Regain Mobility
          </h2>

          <p className="text-slate-300 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
            Bedside home care is available across South Mumbai, Central Mumbai, Western Suburbs, and Thane, in addition to outpatient sessions at our Sewri clinic.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              onClick={() => onOpenBooking('Neuro Physiotherapy Consultation')}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm flex items-center justify-center space-x-2 shadow-lg transition"
            >
              <Calendar className="w-4 h-4 text-blue-200" />
              <span>Book Neuro Consultation</span>
            </button>

            <a
              href={`tel:${CLINIC_CONTACT.phone}`}
              className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-sm flex items-center justify-center space-x-2 transition"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>Call {CLINIC_CONTACT.phoneDisplay}</span>
            </a>

            <a
              href={`https://wa.me/${CLINIC_CONTACT.whatsappNumber}?text=Hello%20Dr.%20Pawan%20Gupta,%20I%20would%20like%20to%20inquire%20about%20Neuro%20Physiotherapy.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm flex items-center justify-center space-x-2 transition"
            >
              <MessageSquare className="w-4 h-4 text-emerald-200" />
              <span>WhatsApp Doctor</span>
            </a>
          </div>

          <div className="pt-4 border-t border-slate-700/60 text-xs text-slate-400 flex flex-wrap justify-center gap-4">
            <span>📍 Sewri Outpatient Clinic</span>
            <span>🏠 Certified Doorstep Visits Across 35+ Suburbs</span>
            <span>⏱ Flexible Home Timings: 7:00 AM – 8:30 PM</span>
          </div>
        </div>
      </section>

    </div>
  );
};

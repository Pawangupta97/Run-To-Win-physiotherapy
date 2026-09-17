import React, { useState } from 'react';
import { 
  ShieldAlert, 
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
  Sparkles,
  HeartPulse
} from 'lucide-react';
import { CLINIC_CONTACT } from '../data/clinicData';
import { SeoMeta } from './SeoMeta';
import { Breadcrumbs } from './Breadcrumbs';

import dryNeedlingImg from '../assets/images/regenerated_image_1787088240020.webp';
import doctorPhoto from '../assets/images/regenerated_image_1787089379420.webp';

interface PainManagementPageProps {
  onBackToHome: () => void;
  onNavigatePage: (page: string) => void;
  onSelectCondition: (conditionId: string) => void;
  onOpenBooking: (prefillService?: string, prefillArea?: string) => void;
  onOpenAiAssistant: (context?: string) => void;
}

export const PainManagementPage: React.FC<PainManagementPageProps> = ({
  onBackToHome,
  onNavigatePage,
  onSelectCondition,
  onOpenBooking,
  onOpenAiAssistant
}) => {
  const [openFaqId, setOpenFaqId] = useState<number | null>(0);

  const painConditions = [
    {
      title: 'Chronic Persistent Lower Back Pain',
      desc: 'Discomfort persisting beyond 3 months, often fueled by fear-avoidance, disc irritation, deep multifidus atrophy, and altered motor control.',
      conditionId: 'lower-back'
    },
    {
      title: 'Myofascial Pain Syndrome & Trigger Points',
      desc: 'Extremely painful taut bands in the trapezius, levator scapulae, and gluteal muscles treated with Certified Dry Needling (CDNP).',
      conditionId: 'cervical-neck'
    },
    {
      title: 'Cervicogenic & Tension Headaches',
      desc: 'Pain originating from suboccipital muscle spasms and upper cervical facet restrictions radiating into the forehead and temples.',
      conditionId: 'cervical-neck'
    },
    {
      title: 'Chronic Knee Osteoarthritis Aches',
      desc: 'Deep joint aching, stiffness after rest, and weather-sensitive joint soreness managed through unloading and gentle articular fluid circulation.',
      conditionId: 'knee'
    },
    {
      title: 'Piriformis Syndrome & Gluteal Sciatica',
      desc: 'Sciatic nerve compression beneath a hypertonic piriformis muscle resolved via deep manual release and neural sliding techniques.',
      conditionId: 'lower-back'
    },
    {
      title: 'Post-Surgical Persistent Discomfort',
      desc: 'Lingering postoperative stiffness or hypersensitivity following spine or joint procedures treated with graded desensitization.',
      conditionId: 'knee-replacement-rehab'
    }
  ];

  const assessmentSteps = [
    {
      step: '01',
      title: 'Pain Neurophysiology & Chronicity Screen',
      desc: 'Evaluating pain duration, 24-hour symptom cycle, sleep quality, psychological fear-avoidance, and analgesic medication history.'
    },
    {
      step: '02',
      title: 'Tissue Sensitivity & Palpation Mapping',
      desc: 'Systematically testing for localized trigger points, hyperalgesia, allodynia, and active fascial contractures across the kinetic chain.'
    },
    {
      step: '03',
      title: 'Segmental Joint Motion & Neural Tension',
      desc: 'Gentle passive assessment of intervertebral facet glide and peripheral nerve mechanosensitivity (e.g., Slump and Upper Limb Tension tests).'
    },
    {
      step: '04',
      title: 'Functional Load Baseline Identification',
      desc: 'Determining the exact physical load or duration of sitting, walking, or lifting that can be performed comfortably without triggering flares.'
    }
  ];

  const treatmentTechniques = [
    {
      name: 'Certified Dry Needling (CDNP)',
      detail: 'Precision insertion of sterile solid filaments into myofascial trigger points to elicit a local twitch response, breaking muscle spasm cycles.'
    },
    {
      name: 'Maitland & Mulligan Gentle Articular Glides',
      detail: 'Low-grade oscillatory mobilizations that stimulate mechanoreceptors, effectively gating nociceptive pain signals at the spinal cord level.'
    },
    {
      name: 'Digital Electrotherapy & Ultrasound',
      detail: 'Targeted TENS frequencies and therapeutic ultrasound to suppress localized inflammation, relax spasms, and enhance tissue perfusion.'
    },
    {
      name: 'Graded Motor Imagery & Pacing',
      detail: 'Retraining how the central nervous system processes movement, safely desensitizing hypersensitive neural pathways.'
    },
    {
      name: 'Myofascial Release & IASTM',
      detail: 'Decompressing tight muscular envelopes and restoring soft tissue shear across fascial planes.'
    },
    {
      name: 'Flare-Up Management Action Plan',
      detail: 'Equipping you with immediate self-treatment strategies, positions of relief, and heat/cold protocols to independently manage flare-ups.'
    }
  ];

  const faqs = [
    {
      q: 'How does physiotherapy manage chronic pain without painkillers?',
      a: 'Physiotherapy treats the root biomechanical and neurophysiological drivers of pain rather than simply masking symptoms. By releasing chronic myofascial trigger points with dry needling, restoring joint glide through mobilization, and retraining weak stabilizing muscles, we remove the mechanical stress that triggers continuous pain signals.'
    },
    {
      q: 'What is the difference between acute pain and chronic pain?',
      a: 'Acute pain is a normal physiological alarm that protects injured tissue during the first 6 to 12 weeks of healing. Chronic pain persists after typical tissue healing has concluded, often because the nervous system has become sensitized (central sensitization). Our chronic pain management retrains movement without triggering alarm responses.'
    },
    {
      q: 'Does Dry Needling hurt?',
      a: 'Most patients feel very little discomfort as the ultra-fine filament needle is inserted. When the needle contacts a trigger point, you may experience a brief "twitch response"—a momentary dull cramp or ache that resolves within seconds, followed by profound muscle relaxation and reduced pain.'
    },
    {
      q: 'Can chronic neck or back pain be permanently cured?',
      a: 'We avoid making 100% cure promises because musculoskeletal pain is influenced by ongoing daily activities, desk posture, and age-related tissue changes. However, evidence-based physical therapy reliably reduces pain intensity, restores functional capacity, and gives you the tools to keep symptoms under control.'
    },
    {
      q: 'Do you provide home visit pain management physiotherapy in Mumbai?',
      a: 'Yes. For patients experiencing severe pain episodes that prevent traveling, Dr. Pawan Gupta (PT) and our clinical team provide certified home visits with portable electrotherapy, dry needling, and gentle manual therapy across 35+ suburbs in Mumbai.'
    }
  ];

  const pageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://runtowinphysiotherapy.com/pain-management#webpage",
        "name": "Pain Management Physiotherapy in Mumbai | Dr. Pawan Gupta (PT)",
        "url": "https://runtowinphysiotherapy.com/pain-management",
        "description": "Evidence-based pain management physiotherapy in Mumbai for acute and chronic spine, joint, tendon, and neuropathic pain at Sewri clinic and home visits.",
        "isPartOf": {
          "@id": "https://runtowinphysiotherapy.com/#website"
        },
        "about": {
          "@id": "https://runtowinphysiotherapy.com/#clinic"
        }
      },
      {
        "@type": "MedicalTherapy",
        "@id": "https://runtowinphysiotherapy.com/pain-management#service",
        "name": "Pain Management Physiotherapy Mumbai",
        "description": "Non-pharmacological pain management, dry needling, and joint mobilization for chronic back, neck, and joint pain by Dr. Pawan Gupta (PT).",
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
            "name": "Pain Management",
            "item": "https://runtowinphysiotherapy.com/pain-management"
          }
        ]
      }
    ]
  };

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 antialiased selection:bg-blue-600 selection:text-white">
      <SeoMeta
        title="Pain Management Physiotherapy in Mumbai | Dr. Pawan Gupta (PT)"
        description="Evidence-based pain management physiotherapy in Mumbai for acute and chronic spine, joint, tendon, and neuropathic pain at Sewri clinic and home visits."
        canonicalUrl="https://runtowinphysiotherapy.com/pain-management"
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
              { label: 'Pain Management Physiotherapy', current: true }
            ]}
          />
        </div>
      </div>

      {/* Hero Header */}
      <header className="bg-gradient-to-b from-rose-50/70 via-white to-slate-50 py-12 md:py-16 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-rose-100 text-rose-800 text-xs font-bold uppercase tracking-wider">
                <HeartPulse className="w-3.5 h-3.5 text-rose-600" />
                <span>Non-Pharmacological Acute & Chronic Pain Relief</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-heading leading-tight">
                Pain Management Physiotherapy in Mumbai
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                Break the cycle of recurring spine, joint, and nerve pain without relying on constant painkillers. Led by <strong className="text-slate-900">Dr. Pawan Gupta (PT)</strong>, Certified Dry Needling Practitioner (CDNP) and Manual Therapy Specialist.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => onOpenBooking('Pain Management Consultation')}
                  className="px-6 py-3.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-sm flex items-center space-x-2 shadow-md transition"
                >
                  <Calendar className="w-4 h-4 text-blue-200" />
                  <span>Book Pain Assessment</span>
                </button>

                <a
                  href={`tel:${CLINIC_CONTACT.phone}`}
                  className="px-5 py-3.5 rounded-xl bg-white border border-slate-300 hover:border-slate-400 text-slate-800 font-bold text-sm flex items-center space-x-2 shadow-2xs transition"
                >
                  <Phone className="w-4 h-4 text-blue-600" />
                  <span>Call {CLINIC_CONTACT.phoneDisplay}</span>
                </a>

                <a
                  href={`https://wa.me/${CLINIC_CONTACT.whatsappNumber}?text=Hello%20Dr.%20Pawan%20Gupta,%20I%20would%20like%20to%20inquire%20about%20Pain%20Management%20Physiotherapy.`}
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
                  <Sparkles className="w-4 h-4 text-rose-600" />
                  <span>Certified Dry Needling (CDNP)</span>
                </span>
                <span className="flex items-center space-x-1.5">
                  <ShieldCheck className="w-4 h-4 text-blue-600" />
                  <span>Maitland / Mulligan Mobilizations</span>
                </span>
                <span className="flex items-center space-x-1.5">
                  <Home className="w-4 h-4 text-emerald-600" />
                  <span>Home Visits for Severe Pain Flares</span>
                </span>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-slate-100 relative">
                <img
                  src={dryNeedlingImg}
                  alt="Dry needling and myofascial pain management session by Dr. Pawan Gupta in Mumbai"
                  className="w-full h-72 sm:h-80 object-cover"
                  loading="eager"
                  width="500"
                  height="360"
                />
                <div className="p-4 bg-white border-t border-slate-200 text-xs text-slate-600 flex items-center justify-between">
                  <span className="font-semibold text-slate-900">Dr. Pawan Gupta (PT)</span>
                  <span className="text-rose-700 font-semibold">Certified Dry Needling Practitioner</span>
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
            <span className="text-xs font-bold text-rose-700 uppercase tracking-wider">Candidate Profile</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading mt-1">
              Who Pain Management Physiotherapy is For
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              For individuals trapped in pain cycles where rest, medications, or generic exercises have failed to produce lasting relief.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                title: 'Chronic Spine & Neck Sufferers',
                desc: 'Individuals experiencing persistent aching, stiffness, or episodic spasms that disrupt daily productivity.'
              },
              {
                title: 'Myofascial Trigger Point Patients',
                desc: 'Patients with deep, knotty muscle tenderness in shoulders, upper back, or glutes that radiates dull, aching pain.'
              },
              {
                title: 'Tension & Cervicogenic Headaches',
                desc: 'Those who wake up with neck tightness and frequent headaches behind the eyes or base of skull.'
              },
              {
                title: 'Osteoarthritis & Degenerative Pain',
                desc: 'Seniors or active adults dealing with chronic knee or hip joint aching that restricts daily walking capacity.'
              }
            ].map((item, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <CheckCircle2 className="w-5 h-5 text-rose-600" />
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
            <span className="text-xs font-bold text-rose-700 uppercase tracking-wider">Targeted Conditions</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading mt-1">
              Pain Conditions Commonly Addressed
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              Combining mechanical joint unloading with targeted neurological and myofascial desensitization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {painConditions.map((c, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-3 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="text-base font-bold text-slate-900 font-heading">{c.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{c.desc}</p>
                </div>
                <button
                  onClick={() => onSelectCondition(c.conditionId)}
                  className="text-xs font-bold text-blue-700 hover:text-blue-800 flex items-center space-x-1 pt-2 border-t border-slate-100"
                >
                  <span>Read Related Condition Guide</span>
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
            <span className="text-xs font-bold text-rose-700 uppercase tracking-wider">Objective Evaluation</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading mt-1">
              Our Pain Assessment Process
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              Differentiating between true structural tissue damage, mechanical overload, and nervous system sensitization.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {assessmentSteps.map((s) => (
              <div key={s.step} className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 relative">
                <span className="text-xs font-extrabold text-rose-700 bg-rose-100 px-2.5 py-1 rounded-md inline-block">
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
            <span className="text-xs font-bold text-rose-700 uppercase tracking-wider">Desensitization Modalities</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading mt-1">
              Multimodal Treatment Approaches
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              Targeted physical modalities to quiet irritated pain pathways and re-establish pain-free tissue tolerance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {treatmentTechniques.map((t, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-2">
                <h3 className="text-sm font-bold text-slate-900 flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-rose-600"></span>
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
                Long-Term Relief
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
                Phased Pain Rehabilitation Approach
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Restoring functional capacity through progressive, non-provocative loading:
              </p>

              <div className="space-y-3 pt-2">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <h4 className="text-xs font-bold text-rose-900 uppercase">Phase 1: Pain Modulation & Calming Acute Spasms</h4>
                  <p className="text-xs text-slate-600">Dry needling, gentle joint oscillation, and directional preference to bring pain below threshold.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <h4 className="text-xs font-bold text-rose-900 uppercase">Phase 2: Graded Movement & Fear-Avoidance Reduction</h4>
                  <p className="text-xs text-slate-600">Introducing gentle, non-threatening range of motion exercises to restore confidence in moving.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <h4 className="text-xs font-bold text-rose-900 uppercase">Phase 3: Deep Stabilizer Loading & Postural Endurance</h4>
                  <p className="text-xs text-slate-600">Strengthening core musculature, scapular retractors, and gluteal complexes to protect joints.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <h4 className="text-xs font-bold text-rose-900 uppercase">Phase 4: Self-Management & Flare-Up Prevention Plan</h4>
                  <p className="text-xs text-slate-600">A customized home toolkit so you can independently handle occasional minor stiffness.</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <span className="text-xs font-bold text-blue-700 uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full border border-blue-100 inline-block">
                What to Expect
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
                What Patients Can Expect
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Honest, evidence-guided care respecting your pain experience:
              </p>

              <ul className="space-y-2.5 pt-2 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start space-x-2 bg-slate-50 p-3 rounded-xl border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>No Over-Promising:</strong> We do not make false claims of "instant overnight cures"; we focus on measurable, sustainable progress.</span>
                </li>
                <li className="flex items-start space-x-2 bg-slate-50 p-3 rounded-xl border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Gentle, Calibrated Loading:</strong> Every movement is tested to avoid provoking rebound pain.</span>
                </li>
                <li className="flex items-start space-x-2 bg-slate-50 p-3 rounded-xl border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Active Independence:</strong> We do not keep you dependent on endless clinic visits; our goal is self-reliance.</span>
                </li>
                <li className="flex items-start space-x-2 bg-slate-50 p-3 rounded-xl border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Comprehensive Doctor Oversight:</strong> Direct evaluation and treatment by Dr. Pawan Gupta (PT).</span>
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
                <span>When Professional Assessment is Appropriate</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 font-heading">
                Signs You Should Schedule an Evaluation
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-2 shrink-0"></span>
                  <span>Pain that has persisted for over 6 weeks despite rest, massage, or medications</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-2 shrink-0"></span>
                  <span>Discomfort that frequently interrupts sleep or makes morning rising difficult</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-2 shrink-0"></span>
                  <span>Growing dependence on over-the-counter NSAIDs or painkiller gels</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-2 shrink-0"></span>
                  <span>Headaches that regularly accompany desk work, neck stiffness, or driving</span>
                </li>
              </ul>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-amber-300 shadow-2xs space-y-3">
              <div className="flex items-center space-x-2 text-red-700 font-bold text-xs uppercase tracking-wider">
                <AlertCircle className="w-4 h-4 text-red-600" />
                <span>Safety Red Flags Requiring Immediate Medical Attention</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                If your pain is accompanied by any of the following symptoms, physical therapy is not the primary intervention. Seek immediate medical emergency care:
              </p>
              <ul className="space-y-1.5 text-xs text-slate-800 font-medium">
                <li>• Constant, severe deep bone pain that does not change with position or rest</li>
                <li>• Unexplained significant weight loss (over 5 kg in 1 month) with nocturnal sweating</li>
                <li>• History of cancer with new progressive spinal pain</li>
                <li>• Sudden progressive loss of bladder/bowel control or leg paralysis</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-14 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold text-rose-700 uppercase tracking-wider">FAQ</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading mt-1">
              Frequently Asked Questions: Pain Management
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqId === idx;
              return (
                <div key={idx} className="border border-slate-200 rounded-2xl overflow-hidden bg-slate-50 transition">
                  <button
                    onClick={() => setOpenFaqId(isOpen ? null : idx)}
                    className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 font-bold text-slate-900 text-sm hover:text-rose-800 transition"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${isOpen ? 'rotate-180 text-rose-600' : ''}`} />
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
      <section className="py-14 bg-gradient-to-tr from-slate-900 via-slate-800 to-rose-950 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 text-xs font-bold uppercase tracking-wider border border-rose-400/30">
            <span>Specialized Pain Relief • Dr. Pawan Gupta (PT)</span>
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight font-heading">
            Break Free From Persistent Musculoskeletal Pain
          </h2>

          <p className="text-slate-300 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
            Personalized treatment at our Sewri outpatient clinic and certified doorstep visits across 35+ Mumbai localities.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              onClick={() => onOpenBooking('Pain Management Consultation')}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm flex items-center justify-center space-x-2 shadow-lg transition"
            >
              <Calendar className="w-4 h-4 text-blue-200" />
              <span>Book Pain Assessment</span>
            </button>

            <a
              href={`tel:${CLINIC_CONTACT.phone}`}
              className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-sm flex items-center justify-center space-x-2 transition"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>Call {CLINIC_CONTACT.phoneDisplay}</span>
            </a>

            <a
              href={`https://wa.me/${CLINIC_CONTACT.whatsappNumber}?text=Hello%20Dr.%20Pawan%20Gupta,%20I%20would%20like%20to%20inquire%20about%20Pain%20Management%20Physiotherapy.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm flex items-center justify-center space-x-2 transition"
            >
              <MessageSquare className="w-4 h-4 text-emerald-200" />
              <span>WhatsApp Doctor</span>
            </a>
          </div>

          <div className="pt-4 border-t border-slate-700/60 text-xs text-slate-400 flex flex-wrap justify-center gap-4">
            <span>📍 Sewri Outpatient Clinic, Mumbai</span>
            <span>🏠 Certified Doorstep Visits Across Mumbai</span>
            <span>⏱ Mon – Sat: 8:00 AM – 9:00 PM</span>
          </div>
        </div>
      </section>

    </div>
  );
};

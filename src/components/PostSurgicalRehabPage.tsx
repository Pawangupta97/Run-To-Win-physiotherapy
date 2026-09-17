import React, { useState } from 'react';
import { 
  HeartPulse, 
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
  FileCheck,
  Stethoscope
} from 'lucide-react';
import { CLINIC_CONTACT } from '../data/clinicData';
import { SeoMeta } from './SeoMeta';
import { Breadcrumbs } from './Breadcrumbs';

import postOpImg from '../assets/images/regenerated_image_1787088225175.webp';
import doctorPhoto from '../assets/images/regenerated_image_1787089379420.webp';

interface PostSurgicalRehabPageProps {
  onBackToHome: () => void;
  onNavigatePage: (page: string) => void;
  onSelectCondition: (conditionId: string) => void;
  onOpenBooking: (prefillService?: string, prefillArea?: string) => void;
  onOpenAiAssistant: (context?: string) => void;
}

export const PostSurgicalRehabPage: React.FC<PostSurgicalRehabPageProps> = ({
  onBackToHome,
  onNavigatePage,
  onSelectCondition,
  onOpenBooking,
  onOpenAiAssistant
}) => {
  const [openFaqId, setOpenFaqId] = useState<number | null>(0);

  const surgicalConditions = [
    {
      title: 'Total Knee Replacement (TKR / Bilateral TKR)',
      desc: 'Achieving full 0° terminal knee extension, safe 90°-110° flexion, reducing post-operative swelling, and progressing to independent stair climbing.',
      conditionId: 'knee-replacement-rehab'
    },
    {
      title: 'Total Hip Replacement (THR / Hemiarthroplasty)',
      desc: 'Adhering to posterior or anterior hip precautions, strengthening abductors, correcting Trendelenburg gait, and regaining pain-free walking.',
      conditionId: 'hip-replacement-rehab'
    },
    {
      title: 'ACL & Meniscal Arthroscopic Reconstruction',
      desc: 'Protecting graft integrity, overcoming arthrogenic quad inhibition, restoring symmetric hyperextension, and progressive neuromuscular loading.',
      conditionId: 'acl-rehab'
    },
    {
      title: 'Lumbar Spine Microdiscectomy & Fusion',
      desc: 'Core reactivation, log-rolling education, nerve root decompression glides, and progressive walking protocols following spinal surgery.',
      conditionId: 'lower-back'
    },
    {
      title: 'Rotator Cuff & Labral Shoulder Repairs',
      desc: 'Passive-to-active assisted range of motion progression, protecting tendon-to-bone anchor reattachment while preventing frozen shoulder.',
      conditionId: 'shoulder'
    },
    {
      title: 'Post-Fracture Open Reduction & Internal Fixation (ORIF)',
      desc: 'Joint remobilization and edema resolution following surgical plating or nailing of ankle, wrist, tibia, or femur fractures.',
      conditionId: 'orthopedic-injuries'
    }
  ];

  const assessmentSteps = [
    {
      step: '01',
      title: 'Surgical Protocol & Discharge Summary Review',
      desc: 'Careful review of the operative note, surgeon’s specific weight-bearing orders, ROM precautions, and post-op X-rays.'
    },
    {
      step: '02',
      title: 'Surgical Incision & Edema Inspection',
      desc: 'Monitoring suture or staple line healing, checking for localized heat or erythema, and measuring circumferential joint swelling.'
    },
    {
      step: '03',
      title: 'Joint Range of Motion Goniometry',
      desc: 'Precise baseline degree measurement of passive and active-assisted joint angles (e.g., knee extension/flexion or shoulder abduction).'
    },
    {
      step: '04',
      title: 'Bedside Functional Mobility & Gait Analysis',
      desc: 'Evaluating supine-to-sit transfers, standing stability, and walker/crutch walking mechanics to establish safe movement habits.'
    }
  ];

  const treatmentTechniques = [
    {
      name: 'Early Passive & Active-Assisted Range of Motion',
      detail: 'Gentle, surgeon-aligned joint movements to prevent intra-articular adhesion formation without placing stress on healing repairs.'
    },
    {
      name: 'Digital Electrotherapy & Cryotherapy',
      detail: 'Portable TENS and cold compression to control post-surgical wound edema and significantly reduce reliance on oral pain medications.'
    },
    {
      name: 'Patellar & Soft-Tissue Scar Mobilization',
      detail: 'Gentle superior/inferior patellar glides to restore joint arthrokinematics and prevent scar tethering around surgical incisions.'
    },
    {
      name: 'Neuromuscular Electrical Stimulation (NMES)',
      detail: 'Targeted quad muscle stimulation to overcome post-surgical arthrogenic muscle inhibition and restore terminal knee extension.'
    },
    {
      name: 'Progressive Gait & Stair Negotiation',
      detail: 'Systematic progression from two-wheeled walker to quad cane to unassisted ambulation, including safe stair ascent and descent.'
    },
    {
      name: 'Surgeon Protocol Alignment & Progress Reports',
      detail: 'Consistent clinical alignment with your operating orthopedic surgeon to ensure shared recovery benchmarks are achieved.'
    }
  ];

  const faqs = [
    {
      q: 'When should post-surgical physiotherapy begin after hospital discharge?',
      a: 'In most elective orthopedic surgeries (such as Total Knee Replacement or Total Hip Replacement), physiotherapy begins within 24 to 48 hours of returning home from the hospital. Early, gentle mobilization is critical to prevent deep vein thrombosis (DVT), reduce swelling, and regain joint extension before scar tissue sets in.'
    },
    {
      q: 'Do you offer doorstep home visit physiotherapy for post-surgery patients in Mumbai?',
      a: 'Yes. Most post-surgical patients cannot comfortably sit in Mumbai traffic or navigate building stairs immediately after discharge. Dr. Pawan Gupta (PT) and our specialized home care team provide bedside post-operative rehabilitation across 35+ localities in South Mumbai, Central Mumbai, Western Suburbs, and Thane.'
    },
    {
      q: 'Will post-surgical physiotherapy be extremely painful?',
      a: 'No. Effective post-operative physiotherapy is evidence-based and progressive, not aggressive. While mild discomfort is normal during early stretching and mobilization, we strictly avoid forced or traumatic stretching that could disrupt surgical repairs or trigger inflammatory setbacks.'
    },
    {
      q: 'How many weeks of rehabilitation are typically required after knee replacement?',
      a: 'A typical Total Knee Replacement protocol involves 4 to 6 weeks of dedicated home or clinic physiotherapy to achieve functional 0° extension and 110°+ flexion, followed by another 6 weeks of progressive home strength exercises for stair climbing and long-distance walking.'
    },
    {
      q: 'Can you coordinate directly with my operating orthopedic surgeon in Mumbai?',
      a: 'Yes. Dr. Pawan Gupta (PT) routinely coordinates with leading orthopedic and spine surgeons across Mumbai’s premier hospital networks (including Lilavati, Hinduja, Breach Candy, Kokilaben, KEM, and Fortis), adhering strictly to individual surgeon preferences and reporting joint angle milestones.'
    }
  ];

  const pageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://runtowinphysiotherapy.com/post-surgical-rehabilitation#webpage",
        "name": "Post-Surgical Rehabilitation in Mumbai | TKR, THR, Spine & ACL | Dr. Pawan Gupta (PT)",
        "url": "https://runtowinphysiotherapy.com/post-surgical-rehabilitation",
        "description": "Specialized post-surgical physiotherapy in Mumbai for total knee replacement, hip replacement, spine surgery, and ACL reconstruction at Sewri clinic and home visits.",
        "isPartOf": {
          "@id": "https://runtowinphysiotherapy.com/#website"
        },
        "about": {
          "@id": "https://runtowinphysiotherapy.com/#clinic"
        }
      },
      {
        "@type": "MedicalTherapy",
        "@id": "https://runtowinphysiotherapy.com/post-surgical-rehabilitation#service",
        "name": "Post-Surgical Rehabilitation Mumbai",
        "description": "Evidence-based post-operative physical therapy for knee replacement, hip replacement, ACL, and spine surgery in Mumbai by Dr. Pawan Gupta (PT).",
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
            "name": "Post-Surgical Rehabilitation",
            "item": "https://runtowinphysiotherapy.com/post-surgical-rehabilitation"
          }
        ]
      }
    ]
  };

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 antialiased selection:bg-blue-600 selection:text-white">
      <SeoMeta
        title="Post-Surgical Rehabilitation in Mumbai | TKR, THR, Spine & ACL | Dr. Pawan Gupta (PT)"
        description="Specialized post-surgical physiotherapy in Mumbai for total knee replacement, hip replacement, spine surgery, and ACL reconstruction at Sewri clinic and home visits."
        canonicalUrl="https://runtowinphysiotherapy.com/post-surgical-rehabilitation"
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
              { label: 'Post-Surgical Rehabilitation', current: true }
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
                <HeartPulse className="w-3.5 h-3.5 text-blue-600" />
                <span>Specialized Post-Operative Orthopedic Recovery</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-heading leading-tight">
                Post-Surgical Rehabilitation in Mumbai
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                Structured, surgeon-aligned physical therapy for Total Knee Replacement (TKR), Total Hip Replacement (THR), ACL reconstruction, and spine surgery. Led by <strong className="text-slate-900">Dr. Pawan Gupta (PT)</strong> with clinic and bedside home care across Mumbai.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => onOpenBooking('Post-Surgical Rehabilitation Consultation')}
                  className="px-6 py-3.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-sm flex items-center space-x-2 shadow-md transition"
                >
                  <Calendar className="w-4 h-4 text-blue-200" />
                  <span>Book Post-Surgical Rehab</span>
                </button>

                <a
                  href={`tel:${CLINIC_CONTACT.phone}`}
                  className="px-5 py-3.5 rounded-xl bg-white border border-slate-300 hover:border-slate-400 text-slate-800 font-bold text-sm flex items-center space-x-2 shadow-2xs transition"
                >
                  <Phone className="w-4 h-4 text-blue-600" />
                  <span>Call {CLINIC_CONTACT.phoneDisplay}</span>
                </a>

                <a
                  href={`https://wa.me/${CLINIC_CONTACT.whatsappNumber}?text=Hello%20Dr.%20Pawan%20Gupta,%20I%20would%20like%20to%20inquire%20about%20Post-Surgical%20Rehabilitation%20in%20Mumbai.`}
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
                  <span>Bedside Home Visits Across 35+ Suburbs</span>
                </span>
                <span className="flex items-center space-x-1.5">
                  <Stethoscope className="w-4 h-4 text-blue-600" />
                  <span>Coordinated with Leading Mumbai Surgeons</span>
                </span>
                <span className="flex items-center space-x-1.5">
                  <FileCheck className="w-4 h-4 text-emerald-600" />
                  <span>Objective Angle Goniometry Tracking</span>
                </span>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-slate-100 relative">
                <img
                  src={postOpImg}
                  alt="Post-surgical knee replacement rehabilitation session by Dr. Pawan Gupta in Mumbai"
                  className="w-full h-72 sm:h-80 object-cover"
                  loading="eager"
                  width="500"
                  height="360"
                />
                <div className="p-4 bg-white border-t border-slate-200 text-xs text-slate-600 flex items-center justify-between">
                  <span className="font-semibold text-slate-900">Dr. Pawan Gupta (PT)</span>
                  <span className="text-blue-700 font-semibold">Post-Surgical Joint Specialist</span>
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
            <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">Patient Candidate Profiles</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading mt-1">
              Who Post-Surgical Rehabilitation is For
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              Tailored specifically for patients transitioning home after major joint arthroplasty, spinal procedures, or sports ligament reconstructions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                title: 'Total Joint Replacement Patients',
                desc: 'Individuals post-TKR or post-THR needing swelling control, quadriceps activation, extension restoration, and safe walking.'
              },
              {
                title: 'Post-Spine Surgery Patients',
                desc: 'Patients recovering from microdiscectomy, laminectomy, or spinal fusion needing core reactivation without rotational stress.'
              },
              {
                title: 'Arthroscopic Ligament Repairs',
                desc: 'Athletes post-ACL reconstruction or meniscus repair progressing through strict phase-wise graft protection and strength rebuilding.'
              },
              {
                title: 'Post-Fracture Hardware Fixations',
                desc: 'Individuals recovering from plating/nailing of ankle, wrist, or hip fractures needing joint remobilization after cast removal.'
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
            <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">Surgical Procedures</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading mt-1">
              Surgical Procedures Commonly Addressed
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              Every surgical protocol is tailored to the specific graft type, prosthetic design, and operating surgeon’s guidelines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {surgicalConditions.map((c, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-3 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="text-base font-bold text-slate-900 font-heading">{c.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{c.desc}</p>
                </div>
                <button
                  onClick={() => onSelectCondition(c.conditionId)}
                  className="text-xs font-bold text-blue-700 hover:text-blue-800 flex items-center space-x-1 pt-2 border-t border-slate-100"
                >
                  <span>Read Detailed Rehabilitation Protocol</span>
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
            <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">Clinical Protocol</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading mt-1">
              Our Post-Surgical Assessment Process
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              Evaluating operative wound integrity, active/passive joint angles, and safe weight-bearing status.
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
            <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">Surgeon-Aligned Care</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading mt-1">
              Evidence-Based Post-Operative Modalities
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              Combining swelling control, gentle manual joint mobilization, and neuromuscular quad reactivation.
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
                4-Phase Pathway
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
                Structured Post-Operative Progression
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Guiding you step-by-step from early bedside mobility to unrestricted functional independence:
              </p>

              <div className="space-y-3 pt-2">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <h4 className="text-xs font-bold text-blue-900 uppercase">Phase 1: Protection & Early Bedside Mobilization (Weeks 1–2)</h4>
                  <p className="text-xs text-slate-600">Managing swelling, achieving terminal 0° extension in knee replacement, log-rolling education, and safe walker standing.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <h4 className="text-xs font-bold text-blue-900 uppercase">Phase 2: Active Range of Motion & Unassisted Transfers (Weeks 3–6)</h4>
                  <p className="text-xs text-slate-600">Reaching 90°–110° flexion, patellar mobilization, transitioning from walker to elbow crutches, and normal heel-strike gait.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <h4 className="text-xs font-bold text-blue-900 uppercase">Phase 3: Muscular Hypertrophy & Single-Stick Ambulation (Weeks 7–12)</h4>
                  <p className="text-xs text-slate-600">Closed-kinetic chain squats, step-ups, single-leg balance, and transitioning away from walking aids.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <h4 className="text-xs font-bold text-blue-900 uppercase">Phase 4: Functional Return & Stair Mastery (Month 3+)</h4>
                  <p className="text-xs text-slate-600">Reciprocal stair climbing (foot-over-foot), outdoor compound walking, and lifelong joint preservation routines.</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <span className="text-xs font-bold text-blue-700 uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full border border-blue-100 inline-block">
                Patient Commitments
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
                What Patients Can Expect
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Hospital-grade post-operative care conducted with patience and precision:
              </p>

              <ul className="space-y-2.5 pt-2 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start space-x-2 bg-slate-50 p-3 rounded-xl border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Bedside Home Care Across Mumbai:</strong> No stressful taxi commutes during the fragile first 4 to 6 weeks.</span>
                </li>
                <li className="flex items-start space-x-2 bg-slate-50 p-3 rounded-xl border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Objective Goniometer Tracking:</strong> Measured angle improvements logged at every session.</span>
                </li>
                <li className="flex items-start space-x-2 bg-slate-50 p-3 rounded-xl border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Surgeon Alignment:</strong> Complete adherence to your orthopedic surgeon’s protocol.</span>
                </li>
                <li className="flex items-start space-x-2 bg-slate-50 p-3 rounded-xl border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Gentle, Respectful Pacing:</strong> We do not cause excessive pain or force stiff joints traumatizing healing tissues.</span>
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
                <span>When to Begin Post-Surgical Physiotherapy</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 font-heading">
                Timeline for Scheduling
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-2 shrink-0"></span>
                  <span>Schedule your first home visit 24 to 48 hours after arriving home from the hospital</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-2 shrink-0"></span>
                  <span>If experiencing knee extension deficit (inability to straighten knee flat on the bed)</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-2 shrink-0"></span>
                  <span>When transitioning from hospital walker to cane or unassisted walking</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-2 shrink-0"></span>
                  <span>Pre-habilitation: 2 to 4 weeks prior to elective surgery to optimize baseline strength</span>
                </li>
              </ul>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-red-300 shadow-2xs space-y-3">
              <div className="flex items-center space-x-2 text-red-700 font-bold text-xs uppercase tracking-wider">
                <AlertCircle className="w-4 h-4 text-red-600" />
                <span>Urgent Post-Surgical Safety Red Flags</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                If you detect any of the following warning signs, do NOT perform physiotherapy. Contact your operating surgeon or emergency hospital casualty immediately:
              </p>
              <ul className="space-y-1.5 text-xs text-slate-800 font-medium">
                <li>• Sudden pain, tenderness, redness, or tense swelling in the calf or thigh (DVT suspicion)</li>
                <li>• Sudden unexplained shortness of breath, acute chest pain, or coughing blood (PE suspicion)</li>
                <li>• Redness spreading beyond surgical incision margins, wound opening, or foul yellowish discharge</li>
                <li>• High fever (exceeding 101°F / 38.3°C) accompanied by systemic chills or delirium</li>
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
              Frequently Asked Questions: Post-Surgical Rehabilitation
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
              onClick={() => onNavigatePage('home-physiotherapy')}
              className="text-xs px-3.5 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-blue-300 text-slate-700 hover:text-blue-700 transition font-medium"
            >
              Home Visit Physiotherapy in Mumbai
            </button>
            <button
              onClick={() => onNavigatePage('orthopedic-physiotherapy')}
              className="text-xs px-3.5 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-blue-300 text-slate-700 hover:text-blue-700 transition font-medium"
            >
              Orthopedic Physiotherapy in Mumbai
            </button>
            <button
              onClick={() => onNavigatePage('sports-physiotherapy')}
              className="text-xs px-3.5 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-blue-300 text-slate-700 hover:text-blue-700 transition font-medium"
            >
              Sports Injury Rehabilitation
            </button>
            <button
              onClick={() => onNavigatePage('pain-management')}
              className="text-xs px-3.5 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-blue-300 text-slate-700 hover:text-blue-700 transition font-medium"
            >
              Pain Management Physiotherapy
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
      <section className="py-14 bg-gradient-to-tr from-slate-900 via-slate-800 to-blue-950 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wider border border-blue-400/30">
            <span>Surgeon-Aligned Care • Dr. Pawan Gupta (PT)</span>
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight font-heading">
            Achieve Maximum Recovery Following Joint or Spine Surgery
          </h2>

          <p className="text-slate-300 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
            Convenient bedside home visits across Mumbai so you can recover safely without exhausting travel.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              onClick={() => onOpenBooking('Post-Surgical Rehabilitation Consultation')}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm flex items-center justify-center space-x-2 shadow-lg transition"
            >
              <Calendar className="w-4 h-4 text-blue-200" />
              <span>Book Post-Surgical Assessment</span>
            </button>

            <a
              href={`tel:${CLINIC_CONTACT.phone}`}
              className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-sm flex items-center justify-center space-x-2 transition"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>Call {CLINIC_CONTACT.phoneDisplay}</span>
            </a>

            <a
              href={`https://wa.me/${CLINIC_CONTACT.whatsappNumber}?text=Hello%20Dr.%20Pawan%20Gupta,%20I%20would%20like%20to%20inquire%20about%20Post-Surgical%20Rehabilitation.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm flex items-center justify-center space-x-2 transition"
            >
              <MessageSquare className="w-4 h-4 text-emerald-200" />
              <span>WhatsApp Doctor</span>
            </a>
          </div>

          <div className="pt-4 border-t border-slate-700/60 text-xs text-slate-400 flex flex-wrap justify-center gap-4">
            <span>🏠 Bedside Visits Across 35+ Mumbai Suburbs</span>
            <span>⏱ Flexible Timing: 7:00 AM – 8:30 PM Daily</span>
            <span>🏥 Direct Coordination with Operating Surgeons</span>
          </div>
        </div>
      </section>

    </div>
  );
};

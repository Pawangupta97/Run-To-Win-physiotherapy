import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Calendar, 
  Phone, 
  MessageSquare, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Activity, 
  Zap, 
  HeartPulse, 
  Home, 
  Brain, 
  ShieldAlert, 
  Star, 
  Clock, 
  MapPin, 
  Users, 
  Award, 
  ChevronRight, 
  ChevronDown, 
  HelpCircle, 
  Stethoscope, 
  BookOpen, 
  Check, 
  FileText, 
  Search,
  ExternalLink,
  Laptop
} from 'lucide-react';
import { motion } from 'motion/react';
import { SeoMeta } from './SeoMeta';
import { CLINIC_CONTACT, SERVICES, FAQS, RECOVERY_PHASES, BODY_REGIONS } from '../data/clinicData';
import { CONDITION_GUIDES } from '../data/conditionGuides';
import { CLINICAL_ARTICLES } from '../data/articlesData';
import { HOME_VISIT_LOCATIONS } from '../data/homeVisitLocations';

// Clinical Images
import heroImg from '../assets/images/regenerated_image_1787088212933.webp';
import doctorPhoto from '../assets/images/regenerated_image_1787089379420.webp';
import orthopedicImg from '../assets/images/regenerated_image_1787088217070.webp';
import sportsImg from '../assets/images/regenerated_image_1787088221289.webp';
import neuroImg from '../assets/images/regenerated_image_1787088232497.webp';
import homeVisitImg from '../assets/images/regenerated_image_1787088229284.webp';
import postOpImg from '../assets/images/regenerated_image_1787088225175.webp';

interface HomePageProps {
  onOpenBooking: (prefillService?: string, prefillArea?: string, prefillBodyPart?: string) => void;
  onOpenAiAssistant: (initialContext?: string) => void;
  onSelectCondition: (conditionId: string) => void;
  onSelectArticle: (articleId: string) => void;
  onSelectLocation: (locationId: string) => void;
  onNavigatePage: (page: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onOpenBooking,
  onOpenAiAssistant,
  onSelectCondition,
  onSelectArticle,
  onSelectLocation,
  onNavigatePage,
}) => {
  const [selectedBodyRegion, setSelectedBodyRegion] = useState<string>('lower-back');
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');

  // Find active body region details
  const activeRegion = BODY_REGIONS.find((r) => r.id === selectedBodyRegion) || BODY_REGIONS[2];

  // Quick symptoms trigger pills for the hero
  const heroConditions = [
    { label: 'Sciatica & Disc Bulge', id: 'lower-back' },
    { label: 'Frozen Shoulder', id: 'shoulder' },
    { label: 'Knee Osteoarthritis', id: 'knee' },
    { label: 'Cervical Spondylosis', id: 'cervical-neck' },
    { label: 'ACL Sports Rehab', id: 'knee' },
    { label: 'Stroke Home Care', id: 'mumbai-home-visits' },
  ];

  // Structured Schema for Homepage
  const homepageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://runtowinphysiotherapy.com/#webpage",
        "url": "https://runtowinphysiotherapy.com/",
        "name": "Physiotherapist in Mumbai | Physiotherapy Clinic & Home Care | Dr. Pawan Gupta (PT)",
        "description": "Evidence-based physiotherapy clinic in Sewri & doorstep home visits across Mumbai by Dr. Pawan Gupta (PT). Specialized in spine care, sports recovery, joint replacement, and neuro rehabilitation.",
        "isPartOf": {
          "@id": "https://runtowinphysiotherapy.com/#website"
        },
        "about": {
          "@id": "https://runtowinphysiotherapy.com/#clinic"
        },
        "inLanguage": "en-IN"
      },
      {
        "@type": "FAQPage",
        "@id": "https://runtowinphysiotherapy.com/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How do I book a consultation with Dr. Pawan Gupta (PT) in Mumbai?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You can book directly via our online booking portal on runtowinphysiotherapy.com, call our clinic desk at +91 98386 88745, or message us on WhatsApp. We provide in-clinic sessions at Sewri and doorstep home visits across Mumbai."
            }
          },
          {
            "@type": "Question",
            "name": "Which Mumbai areas do you cover for home physiotherapy?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We provide home physiotherapy across South Mumbai, Central Mumbai, Western Suburbs, and Thane, including Sewri, Dadar, Bandra, Santacruz, Juhu, Andheri, Worli, Lower Parel, and Powai."
            }
          },
          {
            "@type": "Question",
            "name": "Do I need a doctor's referral for physiotherapy in India?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No, a doctor's referral is not mandatory in India for a preliminary physiotherapy evaluation. However, if you have X-rays, MRI scans, or orthopedist notes, bringing them helps formulate your treatment plan."
            }
          },
          {
            "@type": "Question",
            "name": "Is physiotherapy covered under health insurance in India?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, many health insurance policies in India cover post-surgical or post-hospitalization physiotherapy under OPD or post-discharge benefits. We provide signed official receipts and treatment summaries for reimbursement claims."
            }
          },
          {
            "@type": "Question",
            "name": "What equipment is brought during home visit physiotherapy in Mumbai?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our visiting physiotherapist carries portable electrotherapy (TENS/IFT), therapeutic ultrasound, resistance bands, sterile dry needling supplies, and balance pads to deliver hospital-grade treatment at home."
            }
          }
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
          }
        ]
      }
    ]
  };

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 antialiased selection:bg-blue-600 selection:text-white">
      {/* 0. SEO Meta Tags & JSON-LD Structured Schema */}
      <SeoMeta
        title="Physiotherapist in Mumbai | Physiotherapy Clinic & Home Care | Dr. Pawan Gupta (PT)"
        description="Looking for an experienced physiotherapist in Mumbai? Run To Win Healthcare Services led by Dr. Pawan Gupta (PT) offers evidence-based orthopedic, sports, neuro physiotherapy, and doorstep home visits across Mumbai."
        canonicalUrl="https://runtowinphysiotherapy.com/"
        schema={homepageSchema}
      />

      {/* =========================================================================
          1. HERO SECTION (With High-Intent H1, Clinical Visual & Direct CTAs)
          ========================================================================= */}
      <header className="relative overflow-hidden bg-gradient-to-b from-blue-50/70 via-white to-slate-50 pt-8 pb-14 md:pt-14 md:pb-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Top Trust Badges */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 mb-6">
            <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
              <span>Run To Win Healthcare Services • Mumbai</span>
            </span>
            <a
              href={CLINIC_CONTACT.googleBusinessUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-700 text-xs font-semibold shadow-xs hover:border-amber-400 transition"
            >
              <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
              <span>4.9★ Google Rating (128+ Reviews)</span>
            </a>
            <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold">
              <Home className="w-3.5 h-3.5 text-emerald-600" />
              <span>Clinic in Sewri & Doorstep Mumbai Visits</span>
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 text-center lg:text-left space-y-6">
              
              {/* PRIMARY H1 */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15] font-heading">
                Physiotherapy & Rehabilitation in Mumbai by{' '}
                <span className="text-blue-700">Dr. Pawan Gupta (PT)</span>
              </h1>

              {/* Sub-headline establishing business purpose */}
              <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Evidence-based orthopedic, sports, neurological, and post-surgical recovery at our Sewri clinic and via dedicated home physiotherapy across Mumbai. We combine precise biomechanical diagnosis, hands-on manual therapy, and active rehabilitation to restore natural pain-free movement without surgery.
              </p>

              {/* Quick Symptom Trigger Pills */}
              <div className="pt-1">
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2.5">
                  Select your concern for targeted guidance:
                </p>
                <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                  {heroConditions.map((item) => (
                    <button
                      key={item.label}
                      onClick={() => {
                        if (item.id === 'mumbai-home-visits') {
                          onNavigatePage('home-visits');
                        } else {
                          setSelectedBodyRegion(item.id);
                          const el = document.getElementById('conditions-treated');
                          el?.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className="text-xs px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-blue-400 hover:bg-blue-50/70 text-slate-700 hover:text-blue-800 font-medium transition shadow-2xs flex items-center space-x-1.5"
                    >
                      <span>{item.label}</span>
                      <ArrowRight className="w-3 h-3 text-slate-400" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Conversion Buttons: Points 3, 4, 5 */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-2">
                
                {/* 3. PRIMARY BOOKING CTA */}
                <button
                  onClick={() => onOpenBooking()}
                  className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-sm sm:text-base flex items-center justify-center space-x-2 shadow-md hover:shadow-lg transition group"
                >
                  <Calendar className="w-4 h-4 text-blue-200 group-hover:scale-110 transition-transform" />
                  <span>Book Consultation</span>
                </button>

                {/* 4. PHONE CTA */}
                <a
                  href={`tel:${CLINIC_CONTACT.phone}`}
                  className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-white border border-slate-300 hover:border-slate-400 text-slate-800 font-bold text-sm sm:text-base flex items-center justify-center space-x-2 shadow-2xs transition"
                >
                  <Phone className="w-4 h-4 text-blue-600" />
                  <span>Call {CLINIC_CONTACT.phoneDisplay}</span>
                </a>

                {/* 5. WHATSAPP CTA */}
                <a
                  href={`https://wa.me/${CLINIC_CONTACT.whatsappNumber}?text=Hello%20Dr.%20Pawan%20Gupta,%20I%20would%20like%20to%20inquire%20about%20a%20physiotherapy%20consultation%20in%20Mumbai.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm sm:text-base flex items-center justify-center space-x-2 shadow-2xs transition"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-100" />
                  <span>WhatsApp Doctor</span>
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 border-t border-slate-200 text-xs text-slate-600 font-medium">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Non-Surgical First Approach</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Certified Dry Needling (CDNP)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>35+ Mumbai Suburbs Covered</span>
                </div>
              </div>

            </div>

            {/* Right Hero Clinical Card with Authentic Alt Text */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200 shadow-xl relative overflow-hidden">
                <div className="relative h-56 sm:h-64 rounded-2xl overflow-hidden bg-slate-100 mb-5 border border-slate-200">
                  <img
                    src={heroImg}
                    alt="Dr. Pawan Gupta (PT) conducting orthopedic physical therapy assessment and spinal mobilization at Run To Win Healthcare Services Mumbai"
                    className="w-full h-full object-cover"
                    loading="eager"
                    width="560"
                    height="320"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>
                  
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-slate-800 flex items-center space-x-1.5 shadow-xs border border-white/60">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span>Sewri Clinic & Doorstep Home Visits</span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <div className="flex items-center space-x-1.5">
                      <p className="text-base font-bold text-white font-heading">Dr. Pawan Gupta (PT)</p>
                      <ShieldCheck className="w-4 h-4 text-blue-400" />
                    </div>
                    <p className="text-xs text-slate-200 font-medium">B.P.Th, M.P.Th (MIAP) • Senior Consultant Physiotherapist</p>
                  </div>
                </div>

                {/* Quick Consultation Formats */}
                <div className="grid grid-cols-2 gap-3 mb-4 text-left">
                  <div className="p-3 rounded-xl bg-blue-50/70 border border-blue-100">
                    <p className="text-xs font-bold text-blue-900">In-Clinic Care</p>
                    <p className="text-[11px] text-blue-700 mt-0.5">Sewri, Mumbai 400015</p>
                  </div>
                  <div className="p-3 rounded-xl bg-emerald-50/70 border border-emerald-100">
                    <p className="text-xs font-bold text-emerald-900">Home Care Visits</p>
                    <p className="text-[11px] text-emerald-700 mt-0.5">7:00 AM – 8:30 PM Daily</p>
                  </div>
                </div>

                {/* Fast Action Desk Bar */}
                <div className="p-3 rounded-xl bg-slate-900 text-white flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider block">Direct Desk Contact</span>
                    <span className="text-xs text-slate-300">Call for immediate queries</span>
                  </div>
                  <a
                    href={`tel:${CLINIC_CONTACT.phone}`}
                    className="px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs flex items-center space-x-1 transition"
                  >
                    <Phone className="w-3 h-3" />
                    <span>Call Now</span>
                  </a>
                </div>

              </div>
            </div>

          </div>

        </div>
      </header>

      {/* =========================================================================
          2. STRONG VALUE PROPOSITION
          ========================================================================= */}
      <section className="py-14 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-heading">
              Evidence-Based Physiotherapy in Mumbai: Core Value Proposition
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600">
              Run To Win Healthcare Services focuses on root-cause biomechanics rather than temporary symptom suppression.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">8+ Years Clinical Experience</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Experienced musculoskeletal and sports specialist with thousands of documented clinical hours diagnosing spine, joint, and nerve conditions in Mumbai.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                <Activity className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Non-Surgical First Care</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Prioritizing conservative spinal decompression (McKenzie MDT), Maitland joint mobilizations, and core retraining to prevent premature surgeries.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Doctor-Led Sessions</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Every consultation, physical reassessment, and treatment modification is performed directly by Dr. Pawan Gupta (PT) without delegate hand-offs.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
                <Home className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Portable Clinical Setup</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Certified electrotherapy, ultrasound, dry needling, and resistance equipment brought directly to your residence across Mumbai suburbs.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          6. CORE PHYSIOTHERAPY SERVICES
          ========================================================================= */}
      <section id="services" className="py-16 md:py-20 bg-slate-50 border-b border-slate-200 scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold text-blue-700 uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full border border-blue-100 inline-block mb-2">
              Comprehensive Clinical Disciplines
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
              Core Physiotherapy Services at Run To Win Healthcare
            </h2>
            <p className="mt-2 text-base text-slate-600">
              Structured rehabilitation programs delivered at our Sewri physiotherapy clinic and across Mumbai through home visits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.slice(0, 6).map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-blue-300 transition shadow-2xs hover:shadow-md flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 font-bold uppercase tracking-wider text-[10px]">
                      {service.category.replace('_', ' ')}
                    </span>
                    <span className="text-slate-500 flex items-center space-x-1">
                      <Clock className="w-3 h-3 text-slate-400" />
                      <span>{service.duration}</span>
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 font-heading">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {service.shortDesc}
                  </p>

                  <div className="pt-2">
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">Commonly Treated:</p>
                    <div className="flex flex-wrap gap-1.5">
                      {service.idealFor.slice(0, 3).map((item, idx) => (
                        <span key={idx} className="text-[11px] px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-5 mt-4 border-t border-slate-100 flex items-center gap-2">
                  <button
                    onClick={() => onNavigatePage('services')}
                    className="flex-1 py-2 px-3 rounded-lg text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition text-center"
                  >
                    View Details
                  </button>
                  <button
                    onClick={() => onOpenBooking(service.title)}
                    className="py-2 px-4 rounded-lg text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 transition flex items-center space-x-1 shadow-2xs"
                  >
                    <span>Book</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button
              onClick={() => onNavigatePage('services')}
              className="inline-flex items-center space-x-2 text-sm font-bold text-blue-700 hover:text-blue-800 underline underline-offset-4"
            >
              <span>Explore all services, clinical modalities and treatment tariffs</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* =========================================================================
          7. ORTHOPEDIC PHYSIOTHERAPY (Dedicated Highlight)
          ========================================================================= */}
      <section id="orthopedic-physiotherapy" className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-100">
                <img
                  src={orthopedicImg}
                  alt="Orthopedic physiotherapy treatment in Mumbai for spinal disc decompression and knee arthritis by Dr. Pawan Gupta (PT)"
                  className="w-full h-72 sm:h-80 object-cover"
                  loading="lazy"
                  width="500"
                  height="350"
                />
              </div>
            </div>

            <div className="lg:col-span-7 order-1 lg:order-2 space-y-4">
              <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-800 text-xs font-bold uppercase tracking-wider">
                <Activity className="w-3.5 h-3.5 text-blue-600" />
                <span>Specialized Spine & Joint Care</span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-heading">
                Orthopedic Physiotherapy in Mumbai: Spine, Disc & Joint Pain Relief
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Chronic lower back pain, neck stiffness, slip disc, sciatica, and osteoarthritis are the leading causes of physical limitation among working professionals and seniors in Mumbai. Our orthopedic physiotherapy protocol combines McKenzie mechanical assessment, Maitland joint mobilizations, spinal traction, and deep transversus abdominis core activation to decompress discs and align irritated nerve roots.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                {[
                  'Lumbar disc bulge & sciatica nerve root release',
                  'Cervical spondylosis & tech-neck posture alignment',
                  'Knee osteoarthritis joint preservation therapy',
                  'Frozen shoulder (adhesive capsulitis) mobilization',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-2 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 pt-3">
                <button
                  onClick={() => onOpenBooking('Orthopedic & Spine Rehabilitation')}
                  className="px-5 py-2.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs sm:text-sm transition shadow-2xs"
                >
                  Book Orthopedic Consultation
                </button>
                <button
                  onClick={() => onSelectCondition('lower-back')}
                  className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs sm:text-sm transition"
                >
                  Read Spine & Disc Guide
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          8. SPORTS PHYSIOTHERAPY (Dedicated Highlight)
          ========================================================================= */}
      <section id="sports-physiotherapy" className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-800 text-xs font-bold uppercase tracking-wider">
                <Zap className="w-3.5 h-3.5 text-amber-600" />
                <span>Athletic Rehabilitation & Performance</span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-heading">
                Sports Physiotherapy in Mumbai: Injury Rehabilitation & Performance
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Whether you are a marathon runner training on Marine Drive, a cricketer in Oval Maidan, or an active gym-goer, sports injuries require structured, progressive reloading. Dr. Pawan Gupta (PT) delivers evidence-based sports physiotherapy incorporating video running gait analysis, single-leg hop symmetry testing, eccentric tendon loading, dynamic kinesiology taping, and plyometric conditioning.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                {[
                  'ACL, PCL & collateral ligament tear rehabilitation',
                  'Runner’s knee (patellofemoral) & IT band friction',
                  'Rotator cuff tendinitis & shoulder impingement',
                  'Tennis & golfer’s elbow eccentric tendon protocols',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-2 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 pt-3">
                <button
                  onClick={() => onOpenBooking('Sports Injury & Athletic Performance Rehab')}
                  className="px-5 py-2.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs sm:text-sm transition shadow-2xs"
                >
                  Schedule Sports Injury Assessment
                </button>
                <button
                  onClick={() => onSelectCondition('acl-rehab')}
                  className="px-5 py-2.5 rounded-xl bg-white border border-slate-200 hover:bg-slate-100 text-slate-800 font-semibold text-xs sm:text-sm transition"
                >
                  View ACL Protocol
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-100">
                <img
                  src={sportsImg}
                  alt="Sports injury physiotherapy and athletic kinetic rehabilitation in Mumbai by Dr. Pawan Gupta (PT)"
                  className="w-full h-72 sm:h-80 object-cover"
                  loading="lazy"
                  width="500"
                  height="350"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          9. NEURO PHYSIOTHERAPY (Dedicated Highlight)
          ========================================================================= */}
      <section id="neuro-physiotherapy" className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-100">
                <img
                  src={neuroImg}
                  alt="Neurological physiotherapy and stroke rehabilitation session in Mumbai by Dr. Pawan Gupta (PT)"
                  className="w-full h-72 sm:h-80 object-cover"
                  loading="lazy"
                  width="500"
                  height="350"
                />
              </div>
            </div>

            <div className="lg:col-span-7 order-1 lg:order-2 space-y-4">
              <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-purple-50 text-purple-800 text-xs font-bold uppercase tracking-wider">
                <Brain className="w-3.5 h-3.5 text-purple-600" />
                <span>Neuroplasticity & Mobility Restoration</span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-heading">
                Neuro Physiotherapy in Mumbai: Stroke & Mobility Rehabilitation
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Neurological recovery requires tapping into motor neuroplasticity through repetitive, structured task training. Dr. Pawan Gupta (PT) applies Bobath/NDT concepts, Proprioceptive Neuromuscular Facilitation (PNF), and dynamic balance training to help patients recover after stroke, manage Parkinson’s symptoms, or regain facial movement following Bell’s palsy.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                {[
                  'Ischemic & hemorrhagic stroke (hemiplegia) recovery',
                  'Parkinson’s disease gait rhythmicity & balance training',
                  'Bell’s palsy facial nerve stimulation & muscle retraining',
                  'Bedside transfer, standing balance & foot drop management',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-2 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 pt-3">
                <button
                  onClick={() => onOpenBooking('Neurological Rehabilitation & Stroke Recovery')}
                  className="px-5 py-2.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs sm:text-sm transition shadow-2xs"
                >
                  Book Neuro Rehabilitation
                </button>
                <button
                  onClick={() => onSelectCondition('stroke-rehab')}
                  className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs sm:text-sm transition"
                >
                  Explore Stroke Recovery Protocol
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          10. HOME PHYSIOTHERAPY (Dedicated Highlight)
          ========================================================================= */}
      <section id="home-physiotherapy" className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider">
                <Home className="w-3.5 h-3.5 text-emerald-600" />
                <span>Doorstep Healthcare Across Mumbai</span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-heading">
                Home Physiotherapy Across Mumbai: Doorstep Clinical Care
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Traveling across Mumbai traffic following joint replacement surgery, acute spinal episodes, or neurological illness can exacerbate pain and risk injury. Run To Win Healthcare brings hospital-grade physical therapy directly to your doorstep. Our visiting team arrives with portable electrotherapy units, therapeutic ultrasound, resistance bands, dry needling kits, and gait trainers.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                {[
                  'Available 7:00 AM – 8:30 PM daily across Mumbai',
                  'Post-op Total Knee (TKR) and Hip Replacement (THR) care',
                  'Bedridden senior citizen mobility & fall prevention',
                  'Severe sciatica patients unable to walk or commute',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-2 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Suburb Tags */}
              <div className="pt-2">
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Popular Service Locations:</p>
                <div className="flex flex-wrap gap-1.5">
                  {['Sewri', 'Dadar', 'Bandra', 'Santacruz', 'Juhu', 'Andheri', 'Worli', 'Lower Parel', 'South Mumbai', 'Powai', 'Thane'].map((suburb) => (
                    <button
                      key={suburb}
                      onClick={() => onNavigatePage('home-visits')}
                      className="text-xs px-2.5 py-1 rounded-md bg-white border border-slate-200 text-slate-700 hover:border-emerald-400 hover:text-emerald-700 transition"
                    >
                      {suburb}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-3 pt-3">
                <button
                  onClick={() => onOpenBooking('Home Visit Physiotherapy (Mumbai)')}
                  className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm transition shadow-2xs"
                >
                  Book Doorstep Home Visit
                </button>
                <button
                  onClick={() => onNavigatePage('home-visits')}
                  className="px-5 py-2.5 rounded-xl bg-white border border-slate-200 hover:bg-slate-100 text-slate-800 font-semibold text-xs sm:text-sm transition"
                >
                  View Mumbai Coverage Directory
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-100">
                <img
                  src={homeVisitImg}
                  alt="Doorstep home visit physiotherapy in Mumbai with portable electrotherapy and rehabilitation equipment by Dr. Pawan Gupta (PT)"
                  className="w-full h-72 sm:h-80 object-cover"
                  loading="lazy"
                  width="500"
                  height="350"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          11. COMMON CONDITIONS TREATED
          ========================================================================= */}
      <section id="conditions-treated" className="py-16 md:py-20 bg-white border-b border-slate-200 scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold text-blue-700 uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full border border-blue-100 inline-block mb-2">
              Clinical Conditions Treated
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
              Common Musculoskeletal & Neurological Conditions
            </h2>
            <p className="mt-2 text-base text-slate-600">
              Select an anatomical region to review detailed symptoms, conservative therapy protocols, and typical recovery timelines.
            </p>
          </div>

          {/* Body Region Selector Tabs */}
          <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 mb-8 gap-2 no-scrollbar">
            {BODY_REGIONS.map((region) => (
              <button
                key={region.id}
                onClick={() => setSelectedBodyRegion(region.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-150 border shrink-0 ${
                  selectedBodyRegion === region.id
                    ? 'bg-blue-700 text-white border-blue-700 shadow-xs'
                    : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border-slate-200'
                }`}
              >
                {region.shortLabel}
              </button>
            ))}
          </div>

          {/* Active Region Interactive Diagnostic Box */}
          <div className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-2xs mb-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              <div className="lg:col-span-4 space-y-4">
                <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">Region Focus</span>
                <h3 className="text-2xl font-bold text-slate-900 font-heading">
                  {activeRegion.name}
                </h3>
                <p className="text-xs text-slate-500 font-medium">
                  Typical Recovery Window: <span className="text-slate-800 font-bold">{activeRegion.expectedRecovery}</span>
                </p>
                <div className="p-4 rounded-xl bg-white border border-slate-200 text-xs text-slate-700 space-y-1.5">
                  <span className="font-bold text-slate-900 block">Recommended Modality:</span>
                  <p className="text-blue-700 font-semibold">{activeRegion.recommendedModality}</p>
                </div>
                <button
                  onClick={() => onOpenBooking(`Physiotherapy for ${activeRegion.name}`)}
                  className="w-full py-3 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs transition shadow-2xs"
                >
                  Book Assessment for {activeRegion.shortLabel}
                </button>
              </div>

              <div className="lg:col-span-4 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">Common Conditions:</h4>
                <ul className="space-y-2">
                  {activeRegion.commonConditions.map((cond, idx) => (
                    <li key={idx} className="flex items-start space-x-2 text-xs sm:text-sm text-slate-700 bg-white p-2.5 rounded-lg border border-slate-200/80">
                      <Stethoscope className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <span>{cond}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="lg:col-span-4 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">Clinical Physiotherapy Approach:</h4>
                <ul className="space-y-2">
                  {activeRegion.physioApproach.map((approach, idx) => (
                    <li key={idx} className="flex items-start space-x-2 text-xs sm:text-sm text-slate-700 bg-white p-2.5 rounded-lg border border-slate-200/80">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{approach}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>

          {/* Quick Condition Guide Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CONDITION_GUIDES.slice(0, 6).map((c) => (
              <div
                key={c.id}
                className="bg-slate-50 rounded-2xl p-5 border border-slate-200 hover:border-blue-300 transition flex flex-col justify-between"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[10px] font-bold text-blue-700 uppercase bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                      {c.category}
                    </span>
                    <span className="text-[11px] text-slate-500">{c.expectedRecovery}</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 font-heading">
                    {c.name}
                  </h3>
                  <p className="text-xs text-slate-600 line-clamp-2">
                    {c.quickSummary}
                  </p>
                </div>
                <button
                  onClick={() => onSelectCondition(c.id)}
                  className="mt-4 pt-3 border-t border-slate-200 text-xs font-bold text-blue-700 hover:text-blue-800 flex items-center justify-between"
                >
                  <span>Read Full Clinical Protocol</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button
              onClick={() => onNavigatePage('conditions')}
              className="inline-flex items-center space-x-2 text-sm font-bold text-blue-700 hover:text-blue-800 underline underline-offset-4"
            >
              <span>View all condition guides and clinical diagnosis pathways</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* =========================================================================
          12. REHABILITATION SERVICES (Dedicated Highlight)
          ========================================================================= */}
      <section id="rehabilitation-services" className="py-16 md:py-20 bg-slate-50 border-b border-slate-200 scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 inline-block mb-2">
              Structured Functional Recovery
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
              Post-Surgical & Specialized Rehabilitation Services
            </h2>
            <p className="mt-2 text-base text-slate-600">
              Protocol-driven recovery following Total Knee Replacement (TKR), Total Hip Replacement (THR), ACL reconstruction, spine surgeries, and senior fall prevention in Mumbai.
            </p>
          </div>

          {/* 4-Phase Recovery Progression Pathway */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {RECOVERY_PHASES.map((phase) => (
              <div
                key={phase.step}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-2xs space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">
                    Phase {phase.step}
                  </span>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                    {phase.timeline}
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900 font-heading">
                  {phase.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {phase.focus}
                </p>
                <div className="pt-2 border-t border-slate-100">
                  <span className="text-[11px] font-bold text-emerald-700 block">Target Milestone:</span>
                  <span className="text-xs text-slate-700">{phase.milestone}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Rehabilitation Specialization Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-2xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
                <HeartPulse className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Total Knee Replacement (TKR)</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Early CPM passive motion, quadriceps activation, extension lag elimination, and progressive gait training from walker to independent stairs.
              </p>
              <button
                onClick={() => onSelectCondition('knee-replacement-rehab')}
                className="text-xs font-bold text-blue-700 hover:text-blue-800 inline-flex items-center space-x-1 pt-1"
              >
                <span>View TKR Protocol</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-2xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Total Hip Replacement (THR)</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Precise hip precaution management, abductor strengthening, pelvic leveling, and Trendelenburg gait correction for durable joint longevity.
              </p>
              <button
                onClick={() => onSelectCondition('hip-replacement-rehab')}
                className="text-xs font-bold text-blue-700 hover:text-blue-800 inline-flex items-center space-x-1 pt-1"
              >
                <span>View THR Protocol</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-2xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Senior Balance & Fall Prevention</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Vestibular re-weighting, lower-limb stability, safe bathroom and bed transfer training, and gentle multi-joint mobilization for elderly citizens.
              </p>
              <button
                onClick={() => onSelectCondition('balance-gait-rehab')}
                className="text-xs font-bold text-blue-700 hover:text-blue-800 inline-flex items-center space-x-1 pt-1"
              >
                <span>View Balance Protocol</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

          <div className="text-center mt-8">
            <button
              onClick={() => onNavigatePage('rehabilitation')}
              className="inline-flex items-center space-x-2 text-sm font-bold text-blue-700 hover:text-blue-800 underline underline-offset-4"
            >
              <span>Explore complete rehabilitation pathways, surgeon protocols & phase guides</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* =========================================================================
          13. ABOUT DR. PAWAN GUPTA (PT)
          ========================================================================= */}
      <section id="about" className="py-16 md:py-20 bg-white border-b border-slate-200 scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-5">
              <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-lg bg-slate-900 relative">
                <img
                  src={doctorPhoto}
                  alt="Dr. Pawan Gupta (PT), Senior Consultant Physiotherapist and founder of Run To Win Healthcare Services Mumbai"
                  className="w-full h-80 sm:h-96 object-cover object-top"
                  loading="lazy"
                  width="450"
                  height="450"
                />
                <div className="p-5 bg-slate-900 text-white space-y-1">
                  <div className="flex items-center space-x-2">
                    <h3 className="text-lg font-bold text-white font-heading">Dr. Pawan Gupta (PT)</h3>
                    <ShieldCheck className="w-4 h-4 text-blue-400" />
                  </div>
                  <p className="text-xs text-slate-300">B.P.Th, M.P.Th (Musculoskeletal & Sports)</p>
                  <p className="text-[11px] text-blue-300">Certified Dry Needling Practitioner (CDNP) • Certified Manual Therapist (MIAP)</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-800 text-xs font-bold uppercase tracking-wider">
                <Stethoscope className="w-3.5 h-3.5 text-blue-600" />
                <span>Consultant Profile & Accreditations</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
                About Dr. Pawan Gupta (PT) – Senior Consultant Physiotherapist
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Dr. Pawan Gupta (PT) is a seasoned physiotherapist in Mumbai with over 8 years of dedicated clinical practice in orthopedic rehabilitation, spinal disorders, sports medicine, and neurological recovery. Holding a Bachelor’s and Master’s in Physiotherapy specializing in Musculoskeletal and Sports Biomechanics, Dr. Gupta has successfully treated over a thousand patients across Mumbai.
              </p>

              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Verified Clinical Credentials:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <p className="text-xs font-bold text-slate-900">B.P.Th & M.P.Th (Musculoskeletal)</p>
                    <p className="text-[11px] text-slate-600 mt-0.5">Specialized orthopedic, spine & sports mechanics</p>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <p className="text-xs font-bold text-slate-900">Certified Dry Needling Practitioner</p>
                    <p className="text-[11px] text-slate-600 mt-0.5">Targeted myofascial trigger point release</p>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <p className="text-xs font-bold text-slate-900">Certified Manual Therapist (MIAP)</p>
                    <p className="text-[11px] text-slate-600 mt-0.5">Maitland & Mulligan joint mobilization mastery</p>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <p className="text-xs font-bold text-slate-900">Kinesiology & IASTM Specialist</p>
                    <p className="text-[11px] text-slate-600 mt-0.5">Soft-tissue decompression & sports taping</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <button
                  onClick={() => onOpenBooking('Consultation with Dr. Pawan Gupta (PT)')}
                  className="px-6 py-3 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs sm:text-sm transition shadow-2xs"
                >
                  Book Appointment with Dr. Pawan Gupta
                </button>
                <button
                  onClick={() => onNavigatePage('dr-pawan-gupta')}
                  className="px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs sm:text-sm transition flex items-center space-x-1.5"
                >
                  <span>View Dr. Pawan Gupta Profile</span>
                  <ChevronRight className="w-4 h-4 text-slate-500" />
                </button>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          14. CLINICAL APPROACH
          ========================================================================= */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold text-blue-700 uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full border border-blue-100 inline-block mb-2">
              Scientific Methodology
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
              Our 5-Stage Clinical Approach to Lasting Recovery
            </h2>
            <p className="mt-2 text-base text-slate-600">
              We eliminate guesswork with a reproducible, objective diagnostic and treatment progression.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            
            <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
              <span className="text-xs font-extrabold text-blue-700 bg-blue-50 px-2 py-1 rounded">Stage 1</span>
              <h3 className="text-sm font-bold text-slate-900">Biomechanical Assessment</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Evaluating joint angles, muscle firing sequences, nerve tension, and postural asymmetries.
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
              <span className="text-xs font-extrabold text-blue-700 bg-blue-50 px-2 py-1 rounded">Stage 2</span>
              <h3 className="text-sm font-bold text-slate-900">Root-Cause Diagnosis</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Identifying why tissues are overloaded rather than simply treating where you feel pain.
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
              <span className="text-xs font-extrabold text-blue-700 bg-blue-50 px-2 py-1 rounded">Stage 3</span>
              <h3 className="text-sm font-bold text-slate-900">Hands-On Manual Care</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Joint mobilization, capsular stretching, and CDNP dry needling to reduce acute spasm and inflammation.
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
              <span className="text-xs font-extrabold text-blue-700 bg-blue-50 px-2 py-1 rounded">Stage 4</span>
              <h3 className="text-sm font-bold text-slate-900">Progressive Loading</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Strengthening deep core, stabilizing stabilizers, and rebuilding functional resistance capacity.
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
              <span className="text-xs font-extrabold text-blue-700 bg-blue-50 px-2 py-1 rounded">Stage 5</span>
              <h3 className="text-sm font-bold text-slate-900">Lifelong Prevention</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Customized workplace ergonomic setup, sleeping posture guidance, and 10-minute daily home routine.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          15. WHY PATIENTS CHOOSE THE CLINIC
          ========================================================================= */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
              Why Mumbai Patients Choose Run To Win Healthcare Services
            </h2>
            <p className="mt-2 text-base text-slate-600">
              Clear commitments backed by authentic clinical results and patient-first care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2.5">
              <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                ✓
              </div>
              <h3 className="text-base font-bold text-slate-900">Surgery Avoidance Focus</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We champion conservative orthopedic management. When spine surgery or knee replacement is genuinely indicated, we provide transparent guidance and pre-op conditioning.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2.5">
              <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
                ✓
              </div>
              <h3 className="text-base font-bold text-slate-900">Direct Doctor Attention</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                You will not be passed between multiple junior assistants. Dr. Pawan Gupta (PT) oversees, performs, and adapts your exercise loading every single visit.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2.5">
              <div className="w-8 h-8 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center font-bold">
                ✓
              </div>
              <h3 className="text-base font-bold text-slate-900">Transparent Timelines</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                No false promises or endless sessions. After your physical exam, we outline an honest recovery timeline with clear functional milestones.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          16. CLINIC / LOCATION INFORMATION & 17. TREATMENT OPTIONS
          ========================================================================= */}
      <section id="location-options" className="py-16 md:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold text-blue-700 uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full border border-blue-100 inline-block mb-2">
              Accessibility & Formats
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
              Clinic Location & Consultation Options in Mumbai
            </h2>
            <p className="mt-2 text-base text-slate-600">
              Choose the consultation format that best matches your physical mobility, schedule, and recovery requirements.
            </p>
          </div>

          {/* 17. Three Treatment Options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            
            <div className="bg-white rounded-2xl p-6 border-2 border-blue-600 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 rounded-full bg-blue-100 text-blue-800 font-bold text-xs uppercase">Option 1</span>
                <span className="text-xs font-semibold text-emerald-700">Central Hub</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-heading">In-Clinic Consultation</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Visit our fully equipped physiotherapy facility in Sewri, Mumbai. Access advanced electrotherapy, manual therapy couches, spinal decompression, and private treatment rooms.
              </p>
              <div className="text-xs text-slate-500 space-y-1">
                <p><strong>Address:</strong> Sewri, Mumbai 400015</p>
                <p><strong>Hours:</strong> Mon – Sat: 8:00 AM – 9:00 PM</p>
              </div>
              <button
                onClick={() => onOpenBooking('In-Clinic Consultation (Sewri)')}
                className="w-full py-2.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs transition shadow-2xs"
              >
                Book Clinic Appointment
              </button>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-2xs space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs uppercase">Option 2</span>
                <span className="text-xs font-semibold text-emerald-700">35+ Suburbs</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-heading">Doorstep Home Visits</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Eliminate Mumbai commute stress. Hospital-grade portable physiotherapy brought right to your bedside across South Mumbai, Central Mumbai, Western Suburbs, and Thane.
              </p>
              <div className="text-xs text-slate-500 space-y-1">
                <p><strong>Coverage:</strong> All major Mumbai residential hubs</p>
                <p><strong>Hours:</strong> 7:00 AM – 8:30 PM Daily</p>
              </div>
              <button
                onClick={() => onOpenBooking('Home Visit Physiotherapy (Mumbai)')}
                className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition shadow-2xs"
              >
                Book Home Visit Session
              </button>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-2xs space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 rounded-full bg-slate-100 text-slate-800 font-bold text-xs uppercase">Option 3</span>
                <span className="text-xs font-semibold text-blue-700">Remote & Travel</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-heading">Online Tele-Physio</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                High-definition 1-on-1 video postural screening, guided corrective exercise progression, and ergonomic consultation for remote or traveling corporate patients.
              </p>
              <div className="text-xs text-slate-500 space-y-1">
                <p><strong>Platform:</strong> Secure HD Video Consultation</p>
                <p><strong>Includes:</strong> Custom Video Routine & Follow-Up</p>
              </div>
              <button
                onClick={() => onOpenBooking('Online Tele-Physiotherapy Consultation')}
                className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition shadow-2xs"
              >
                Book Video Consultation
              </button>
            </div>

          </div>

          {/* 16. Clinic Detail Strip */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-2xs">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
              
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase">Clinic Headquarters</h4>
                  <p className="text-sm font-bold text-slate-900 mt-0.5">{CLINIC_CONTACT.address}</p>
                  <p className="text-xs text-slate-500">Central Mumbai • Near Eastern Freeway</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase">Clinic Hours</h4>
                  <p className="text-xs font-bold text-slate-900 mt-0.5">Mon – Sat: 8:00 AM – 9:00 PM</p>
                  <p className="text-xs text-slate-500">Sunday: 9:00 AM – 2:00 PM (Prior Appt)</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase">Direct Helpline</h4>
                  <p className="text-sm font-bold text-slate-900 mt-0.5">{CLINIC_CONTACT.phoneDisplay}</p>
                  <p className="text-xs text-slate-500">{CLINIC_CONTACT.email}</p>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <a
                  href={CLINIC_CONTACT.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs flex items-center justify-center space-x-1 transition text-center"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-blue-600" />
                  <span>Google Maps Directions</span>
                </a>
                <button
                  onClick={() => onNavigatePage('contact')}
                  className="px-4 py-2 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-800 font-bold text-xs flex items-center justify-center space-x-1 transition text-center"
                >
                  <span>View Transit & Landmark Guide</span>
                </button>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          18. PATIENT EDUCATION SECTION
          ========================================================================= */}
      <section id="patient-education" className="py-16 md:py-20 bg-white border-b border-slate-200 scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold text-blue-700 uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full border border-blue-100 inline-block mb-2">
              Clinical Knowledge & Guides
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
              Patient Education & Clinical Health Guides
            </h2>
            <p className="mt-2 text-base text-slate-600">
              Evidence-based rehabilitation insights written by Dr. Pawan Gupta (PT) to help Mumbai residents manage musculoskeletal conditions safely.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CLINICAL_ARTICLES.slice(0, 3).map((article) => (
              <article
                key={article.id}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-blue-300 transition flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="px-2.5 py-0.5 rounded bg-blue-100 text-blue-800 font-bold text-[10px] uppercase tracking-wider">
                      {article.category}
                    </span>
                    <span className="text-slate-500">{article.readTime}</span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 font-heading leading-snug">
                    {article.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {article.keyTakeaway}
                  </p>
                </div>

                <button
                  onClick={() => onSelectArticle(article.id)}
                  className="mt-5 pt-3 border-t border-slate-200 text-xs font-bold text-blue-700 hover:text-blue-800 flex items-center justify-between"
                >
                  <span>Read Clinical Guide</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </article>
            ))}
          </div>

          <div className="text-center mt-8">
            <button
              onClick={() => onNavigatePage('articles')}
              className="inline-flex items-center space-x-2 text-sm font-bold text-blue-700 hover:text-blue-800 underline underline-offset-4"
            >
              <span>Explore all articles and patient recovery guides</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* =========================================================================
          19. FREQUENTLY ASKED QUESTIONS
          ========================================================================= */}
      <section id="faq" className="py-16 md:py-20 bg-slate-50 border-b border-slate-200 scroll-mt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-blue-700 uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full border border-blue-100 inline-block mb-2">
              Clear Answers
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
              Frequently Asked Questions About Physiotherapy in Mumbai
            </h2>
            <p className="mt-2 text-base text-slate-600">
              Clear information regarding consultations, home visits, insurance coverage, and appointment scheduling.
            </p>
          </div>

          <div className="space-y-3.5">
            {FAQS.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-2xs transition"
                >
                  <button
                    onClick={() => setOpenFaqId(isOpen ? null : faq.id)}
                    className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 font-bold text-slate-900 text-sm sm:text-base hover:text-blue-700 transition"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-blue-600' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="text-center mt-8">
            <button
              onClick={() => onNavigatePage('faq')}
              className="inline-flex items-center space-x-2 text-sm font-bold text-blue-700 hover:text-blue-800 underline underline-offset-4"
            >
              <span>View full FAQ library including home visit equipment & insurance claim guides</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* =========================================================================
          20. CONTACT / FINAL BOOKING CTA
          ========================================================================= */}
      <section id="contact-booking" className="py-16 md:py-20 bg-gradient-to-tr from-slate-900 via-slate-800 to-blue-950 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          
          <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wider border border-blue-400/30">
            <span>Direct Scheduling with Dr. Pawan Gupta (PT)</span>
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-heading">
            Ready to Move Without Pain? Schedule Your Consultation Today
          </h2>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Whether you need non-surgical back pain decompression, sports injury rehabilitation, or doorstep home physiotherapy in Mumbai, we are here to support your recovery.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
            
            {/* Primary Booking Button */}
            <button
              onClick={() => onOpenBooking()}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm sm:text-base flex items-center justify-center space-x-2 shadow-lg transition"
            >
              <Calendar className="w-4 h-4 text-blue-200" />
              <span>Book Appointment Now</span>
            </button>

            {/* Direct Phone Call */}
            <a
              href={`tel:${CLINIC_CONTACT.phone}`}
              className="w-full sm:w-auto px-6 py-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-sm sm:text-base flex items-center justify-center space-x-2 transition"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>Call {CLINIC_CONTACT.phoneDisplay}</span>
            </a>

            {/* WhatsApp Doctor */}
            <a
              href={`https://wa.me/${CLINIC_CONTACT.whatsappNumber}?text=Hello%20Dr.%20Pawan%20Gupta,%20I%20would%20like%20to%20inquire%20about%20a%20physiotherapy%20consultation%20in%20Mumbai.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm sm:text-base flex items-center justify-center space-x-2 transition"
            >
              <MessageSquare className="w-4 h-4 text-emerald-200" />
              <span>WhatsApp Doctor</span>
            </a>

            {/* In-Clinic / Contact Page */}
            <button
              onClick={() => onNavigatePage('contact')}
              className="w-full sm:w-auto px-6 py-4 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-600 text-slate-200 font-bold text-sm sm:text-base flex items-center justify-center space-x-2 transition"
            >
              <MapPin className="w-4 h-4 text-blue-400" />
              <span>Sewri Clinic Directions</span>
            </button>

          </div>

          <div className="pt-6 border-t border-slate-700/60 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <span>📍 Sewri Clinic, Mumbai 400015</span>
            <span>⏱ Mon – Sat: 8:00 AM – 9:00 PM</span>
            <span>🏠 Home Visits 7:00 AM – 8:30 PM Daily</span>
            <span>📧 {CLINIC_CONTACT.email}</span>
          </div>

          <p className="text-[11px] text-slate-500 max-w-xl mx-auto pt-2">
            Notice: Physiotherapy is a non-emergency medical service. In case of acute cardiac symptoms, acute stroke onset, or major traumatic fractures, please proceed immediately to the nearest hospital casualty department.
          </p>

        </div>
      </section>

    </div>
  );
};

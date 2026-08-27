import React, { useEffect, useState } from 'react';
import { 
  HomeVisitLocation, 
  HOME_VISIT_LOCATIONS, 
  getLocationCanonicalUrl 
} from '../data/homeVisitLocations';
import { CLINIC_CONTACT } from '../data/clinicData';
import { SeoMeta } from './SeoMeta';
import { 
  MapPin, 
  Clock, 
  CheckCircle2, 
  Phone, 
  MessageSquare, 
  Calendar, 
  ArrowLeft, 
  ShieldCheck, 
  Sparkles, 
  Star, 
  Activity, 
  Home, 
  Brain, 
  Award, 
  ChevronRight, 
  Stethoscope, 
  Users, 
  BadgeCheck,
  ChevronDown,
  HelpCircle,
  Search,
  Check
} from 'lucide-react';

interface LocationPageProps {
  location: HomeVisitLocation;
  onBackToHome: () => void;
  onSelectLocation: (locationId: string) => void;
  onOpenBooking: (prefillService?: string, prefillArea?: string) => void;
  onOpenAiAssistant: (context?: string) => void;
}

export const LocationPage: React.FC<LocationPageProps> = ({
  location,
  onBackToHome,
  onSelectLocation,
  onOpenBooking,
  onOpenAiAssistant,
}) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location]);

  // Find related locations in the same category
  const siblingLocations = HOME_VISIT_LOCATIONS.filter(
    (l) => l.category === location.category && l.id !== location.id
  );

  const canonicalUrl = getLocationCanonicalUrl(location.id);

  // High-value Local SEO FAQs for this locality
  const localFaqs = [
    {
      q: `How do I book a certified physiotherapist near me in ${location.name}, Mumbai?`,
      a: `Booking a certified home visit physiotherapist in ${location.name} is simple: Click 'Book Slot' on this page, call ${CLINIC_CONTACT.phoneDisplay}, or send a WhatsApp message to ${CLINIC_CONTACT.phoneDisplay}. Dr. Pawan Gupta (PT) and his clinical team will confirm your address, medical condition, and preferred morning or evening timing for same-day or next-day home consultation.`
    },
    {
      q: `How quickly can Dr. Pawan Gupta visit my home in ${location.name}?`,
      a: `For residents across ${location.name} (including ${location.landmarkAreas.slice(0, 3).join(', ')}), the estimated dispatch and response time is ${location.responseTime}. Priority emergency home visits are available for acute slip disc spasms, sudden severe sciatic pain, and immediate post-surgical hospital discharges.`
    },
    {
      q: `What clinical conditions are treated at home in ${location.name}?`,
      a: `We provide specialized rehabilitation in ${location.name} for: 1) Post-Operative Knee & Hip Replacement (TKR/THR), 2) Stroke Hemiplegia & Neurological paralysis, 3) Lumbar Sciatica & Cervical Spondylosis, 4) Geriatric mobility & fall prevention, 5) Frozen Shoulder, and 6) Sports ligament tears & muscular strains.`
    },
    {
      q: `What medical equipment is brought to my residence in ${location.name}?`,
      a: `Dr. Pawan Gupta brings complete hospital-grade portable equipment directly to your home in ${location.name}, including portable TENS units, therapeutic ultrasound machines, muscle stimulators, resistance loop bands, balance wobble cushions, dry needling kits, and kinesiology tape. You do not need to buy any heavy equipment.`
    },
    {
      q: `Why choose a home visit physiotherapist near you instead of visiting a clinic in ${location.name}?`,
      a: `Visiting an outpatient clinic often requires enduring Mumbai traffic, climbing staircases, and sitting in crowded waiting rooms—which aggravates acute joint inflammation, nerve compression, and post-surgical incisions. In-home physiotherapy provides 100% focused 1-on-1 attention, ergonomic assessment of your actual bed/chairs, and safe transfer training in your real living environment.`
    }
  ];

  const localSearchKeywords = [
    `Physiotherapist near me in ${location.name}`,
    `Best physiotherapist in ${location.name} Mumbai`,
    `Home visit physiotherapy ${location.name}`,
    `Female / Male physio near me in ${location.name}`,
    `Knee replacement physiotherapy at home ${location.name}`,
    `Stroke neuro rehabilitation ${location.name}`,
    `Sciatica & slip disc specialist ${location.name}`,
    `Elderly physiotherapist home visit ${location.name}`,
    `Dry needling in ${location.name}`,
    `Dr Pawan Gupta physiotherapist ${location.name}`
  ];

  const locationSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["PhysiotherapyClinic", "MedicalBusiness", "LocalBusiness"],
        "@id": `${canonicalUrl}#physiotherapy-clinic`,
        "name": `Run To Win Physiotherapy - Best Physiotherapist in ${location.name}, Mumbai`,
        "alternateName": `Dr. Pawan Gupta (PT) - Physiotherapist Near Me in ${location.name}`,
        "url": canonicalUrl,
        "telephone": CLINIC_CONTACT.phone,
        "email": CLINIC_CONTACT.email,
        "priceRange": "₹₹",
        "currenciesAccepted": "INR",
        "paymentAccepted": "Cash, UPI, Google Pay, PhonePe, Net Banking",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": location.landmarkAreas.join(', '),
          "addressLocality": `${location.name}, Mumbai`,
          "addressRegion": "Maharashtra",
          "postalCode": "400001",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "19.0760",
          "longitude": "72.8777"
        },
        "areaServed": [
          {
            "@type": "AdministrativeArea",
            "name": location.name
          },
          ...location.landmarkAreas.map((landmark) => ({
            "@type": "Place",
            "name": landmark
          }))
        ],
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            "opens": "07:00",
            "closes": "21:00"
          }
        ],
        "medicalSpecialty": [
          "Physiotherapy",
          "Orthopedic",
          "Neurology",
          "SportsMedicine",
          "Geriatrics"
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": `Physiotherapy Treatments in ${location.name}`,
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": `Home Visit Physiotherapy in ${location.name}`,
                "description": `Doorstep physiotherapy by Dr. Pawan Gupta (PT) in ${location.name} for post-op, stroke, sciatica, and joint arthritis.`
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": `Post-Operative TKR & THR Home Rehab in ${location.name}`,
                "description": "Safe knee/hip replacement bedside mobilization, gait training, and muscle strengthening."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": `Stroke & Neuro Paralysis Physiotherapy in ${location.name}`,
                "description": "Neuroplasticity, PNF techniques, and balance exercises for stroke recovery at home."
              }
            }
          ]
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "184",
          "bestRating": "5",
          "worstRating": "1"
        },
        "founder": {
          "@type": "Physician",
          "name": "Dr. Pawan Gupta (PT)",
          "jobTitle": "Senior Consultant Physiotherapist (M.P.Th, MIAP)",
          "description": "Certified Orthopedic & Neuro Rehabilitation Specialist with 8+ years clinical experience in Mumbai."
        }
      },
      {
        "@type": "FAQPage",
        "@id": `${canonicalUrl}#faq`,
        "mainEntity": localFaqs.map((faq) => ({
          "@type": "Question",
          "name": faq.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.a
          }
        }))
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${canonicalUrl}#breadcrumb`,
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
            "name": "Mumbai Home Visits",
            "item": "https://runtowinphysiotherapy.com/#home-visits"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": `Physiotherapist Near Me in ${location.name}`,
            "item": canonicalUrl
          }
        ]
      }
    ]
  };

  const keyHomeTreatments = [
    {
      title: 'Post-Operative Recovery (TKR / THR / Spine)',
      desc: 'Bedside mobilization, gentle knee flexion/extension drills, scar tissue mobilization, and progressive walker-to-stick gait training at home.',
      icon: Activity,
    },
    {
      title: 'Stroke & Neurological Rehabilitation',
      desc: 'Neuroplasticity stimulation, PNF trunk balance, spasticity reduction, and safe transfer training for paralysis and stroke recovery.',
      icon: Brain,
    },
    {
      title: 'Severe Slip Disc & Sciatica Pain Relief',
      desc: 'McKenzie MDT extension protocol, lumbar nerve decompression, gentle core activation, and instant pain-relieving electrotherapy.',
      icon: Stethoscope,
    },
    {
      title: 'Elderly Mobility & Fall Prevention',
      desc: 'Balance retraining, joint lubrication, sit-to-stand drills, and customized home hazard safety assessments for senior citizens.',
      icon: Users,
    },
    {
      title: 'Frozen Shoulder & Neck Spondylosis',
      desc: 'Maitland grade III/IV joint mobilization, scapular stabilization, and targeted postural release right in your living room.',
      icon: Award,
    },
    {
      title: 'Advanced Modalities (Dry Needling & Cupping)',
      desc: 'Targeted myofascial trigger point release and portable ultrasound to alleviate stubborn muscle knots without hospital travel.',
      icon: Sparkles,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 animate-in fade-in duration-200">
      <SeoMeta
        title={`Physiotherapist Near Me in ${location.name}, Mumbai | Home Visit Physio - Dr. Pawan Gupta (PT)`}
        description={`Looking for the best physiotherapist near me in ${location.name}, Mumbai? Dr. Pawan Gupta (PT) provides doorstep home visit physiotherapy across ${location.landmarkAreas.slice(0, 3).join(', ')} & all ${location.name} societies. Fast ${location.responseTime} response for knee replacement, stroke rehab, sciatica & back pain. Book today!`}
        keywords={localSearchKeywords.join(', ')}
        canonicalUrl={canonicalUrl}
        geoPlacename={`${location.name}, Mumbai, Maharashtra, India`}
        schema={locationSchema}
      />
      
      {/* Top Breadcrumb & Quick Navigation Bar */}
      <div className="bg-slate-900 text-slate-300 text-xs py-3 px-4 border-b border-slate-800 sticky top-16 z-30 shadow-md">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          
          <div className="flex items-center space-x-2">
            <button
              onClick={onBackToHome}
              className="inline-flex items-center space-x-1 text-blue-400 hover:text-blue-300 font-semibold transition"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Home</span>
            </button>
            <span className="text-slate-600">/</span>
            <span className="text-slate-400">Mumbai Home Visits</span>
            <span className="text-slate-600">/</span>
            <span className="text-blue-400 font-medium">{location.category}</span>
            <span className="text-slate-600">/</span>
            <span className="text-white font-bold">{location.name}</span>
          </div>

          <div className="flex items-center space-x-3 text-[11px]">
            <span className="flex items-center text-emerald-400 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping mr-1.5 inline-block"></span>
              Home Visits Active in {location.name}
            </span>
            <button
              onClick={() => onOpenBooking('Home Visit Physiotherapy (Mumbai)', `${location.name} (${location.category})`)}
              className="bg-blue-600 hover:bg-blue-500 text-white px-3 py-1 rounded-full font-bold transition"
            >
              Book Slot
            </button>
          </div>

        </div>
      </div>

      {/* Hero Section for the specific locality with high-ranking SEO headings */}
      <section className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-blue-950 text-white pt-12 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background glow & subtle pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(59,130,246,0.25),rgba(255,255,255,0))]"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Col: Main Location Information */}
            <div className="lg:col-span-8 space-y-5 text-left">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-900/60 border border-blue-700/50 text-xs font-semibold text-blue-300">
                <MapPin className="w-3.5 h-3.5 text-blue-400" />
                <span>Physiotherapist Near Me • {location.name}, {location.category}, Mumbai</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-heading leading-tight">
                Physiotherapist Near Me in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-emerald-400">{location.name}, Mumbai</span>
              </h1>

              <p className="text-lg text-blue-100/90 font-medium">
                {location.heroTagline}
              </p>

              <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
                Looking for an experienced, certified physiotherapist near you in <strong className="text-white">{location.name}</strong>? Skip the painful commute through Mumbai traffic. <strong className="text-white">Dr. Pawan Gupta (PT)</strong> brings complete clinical rehabilitation equipment, portable electrotherapy modalities, and hospital-grade manual therapy directly to your home.
              </p>

              {/* Coverage Highlights in this locality */}
              <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 text-xs space-y-2">
                <div className="flex items-center space-x-2 text-slate-300 font-semibold">
                  <BadgeCheck className="w-4 h-4 text-emerald-400" />
                  <span>Key Societies, Enclaves & Pockets Covered in {location.name}:</span>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {location.landmarkAreas.map((area, idx) => (
                    <span 
                      key={idx}
                      className="px-2.5 py-1 rounded-lg bg-blue-950/70 border border-blue-800/40 text-blue-200 text-[11px]"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action CTA buttons */}
              <div className="flex flex-wrap gap-3 pt-2">
                <button
                  onClick={() => onOpenBooking('Home Visit Physiotherapy (Mumbai)', `${location.name} (${location.category})`)}
                  className="py-3.5 px-7 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-lg shadow-blue-600/30 transition flex items-center space-x-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Home Visit in {location.name}</span>
                </button>

                <a
                  href={`https://wa.me/${CLINIC_CONTACT.whatsappNumber}?text=Hello%20Dr.%20Pawan%20Gupta,%20I%20am%20looking%20for%20a%20physiotherapist%20near%20me%20in%20${encodeURIComponent(location.name)}%20Mumbai.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3.5 px-6 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg shadow-emerald-600/20 transition flex items-center space-x-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Doctor</span>
                </a>

                <a
                  href={`tel:${CLINIC_CONTACT.phone}`}
                  className="py-3.5 px-5 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-sm border border-slate-700 transition flex items-center space-x-2"
                >
                  <Phone className="w-4 h-4 text-blue-400" />
                  <span>Call {CLINIC_CONTACT.phoneDisplay}</span>
                </a>
              </div>

            </div>

            {/* Right Col: Quick Clinical Badge Card */}
            <div className="lg:col-span-4">
              <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl backdrop-blur-sm space-y-4 text-left">
                
                <div className="flex items-center space-x-3 pb-3 border-b border-slate-800">
                  <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center font-bold text-lg shadow-md shadow-blue-500/20">
                    <Home className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white font-heading">Doorstep Physio Specs</h3>
                    <p className="text-xs text-slate-400">{location.name} Area</p>
                  </div>
                </div>

                <div className="space-y-3 text-xs">
                  
                  <div className="flex items-start justify-between py-1.5 border-b border-slate-800/80">
                    <span className="text-slate-400 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-blue-400" />
                      <span>Avg. Dispatch Time:</span>
                    </span>
                    <span className="font-bold text-emerald-400">{location.responseTime}</span>
                  </div>

                  <div className="flex items-start justify-between py-1.5 border-b border-slate-800/80">
                    <span className="text-slate-400 flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-amber-400" />
                      <span>Consultant Doctor:</span>
                    </span>
                    <span className="font-bold text-white">Dr. Pawan Gupta (PT)</span>
                  </div>

                  <div className="flex items-start justify-between py-1.5 border-b border-slate-800/80">
                    <span className="text-slate-400 flex items-center gap-1.5">
                      <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                      <span>Doctor Credentials:</span>
                    </span>
                    <span className="font-bold text-white">M.P.Th, MIAP (8+ Yrs Exp)</span>
                  </div>

                  <div className="flex items-start justify-between py-1.5">
                    <span className="text-slate-400 flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Equipment Carried:</span>
                    </span>
                    <span className="font-bold text-slate-200">Electrotherapy & Re-hab Kit</span>
                  </div>

                </div>

                <div className="p-3 bg-blue-950/60 rounded-xl border border-blue-800/40 text-[11px] text-blue-200">
                  ⚡ <strong>Same-Day Priority Appointments:</strong> Ideal for post-op discharge, acute disc spasms, and bedridden patient rehabilitation in {location.name}.
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Localized SEO Search Index Cloud */}
      <section className="py-6 bg-slate-900 border-b border-slate-800 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center gap-2">
          <div className="flex items-center space-x-1.5 text-xs text-slate-400 font-semibold pr-2">
            <Search className="w-3.5 h-3.5 text-blue-400" />
            <span>Popular Local Searches in {location.name}:</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {localSearchKeywords.map((kw, i) => (
              <span 
                key={i}
                className="text-[11px] bg-slate-800 hover:bg-slate-700 text-slate-300 px-2.5 py-1 rounded-full border border-slate-700/60 transition cursor-default"
              >
                {kw}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose a Physiotherapist Near Me in [Location] Section */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-6 space-y-4 text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">
              Local Advantages in {location.name}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
              Why Search for a Doorstep Physiotherapist Near You in {location.name}?
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Navigating Mumbai traffic with severe back spasms, a fresh total knee replacement, or post-stroke mobility impairment can worsen pain and risk further injury. Having a senior physiotherapist visit your home in {location.name} ensures:
            </p>
            
            <div className="space-y-3 pt-2">
              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <div>
                  <strong className="text-slate-900 text-sm block">100% Dedicated 1-on-1 Personalized Care:</strong>
                  <span className="text-xs text-slate-600">No parallel patient rotations like crowded clinics. Complete 45–60 minutes solely dedicated to your recovery.</span>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <div>
                  <strong className="text-slate-900 text-sm block">Real-World Home Ergonomics Assessment:</strong>
                  <span className="text-xs text-slate-600">Dr. Pawan inspects your bed height, bathroom safety grab bars, chair angles, and walking paths right inside your flat.</span>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <div>
                  <strong className="text-slate-900 text-sm block">Caregiver & Family Training:</strong>
                  <span className="text-xs text-slate-600">We guide family members on safe lifting, bed-to-chair transfers, and daily home exercise repetitions.</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 bg-gradient-to-br from-blue-900 to-slate-900 text-white rounded-3xl p-7 shadow-xl border border-blue-800/40 text-left space-y-4">
            <h3 className="text-lg font-bold text-white font-heading flex items-center gap-2">
              <MapPin className="w-5 h-5 text-emerald-400" />
              <span>Full Locality Coverage in {location.name}</span>
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              {location.neighborhoodHighlights}
            </p>
            
            <div className="pt-2">
              <h4 className="text-xs font-semibold text-blue-200 uppercase tracking-wider mb-2">
                Frequently Visited Societies & Roads:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {location.landmarkAreas.map((landmark, idx) => (
                  <div key={idx} className="flex items-center space-x-2 bg-slate-800/70 p-2 rounded-xl border border-slate-700/60">
                    <span className="w-2 h-2 rounded-full bg-blue-400 shrink-0"></span>
                    <span className="text-slate-200 truncate">{landmark}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-xs text-slate-300">
              <span>Need consultation outside these pockets?</span>
              <button 
                onClick={() => onOpenBooking('Home Visit Physiotherapy (Mumbai)', location.name)}
                className="text-emerald-400 hover:text-emerald-300 font-bold underline"
              >
                Inquire Address
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* Conditions Treated & Home Modalities Grid */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">
            Clinical Scope in {location.name}
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
            Specialized Physiotherapy Treatments Delivered at Your Residence
          </h2>
          <p className="text-sm text-slate-600">
            Every home visit session is conducted directly with clinical-grade assessment protocols, evidence-based joint mobilization, and patient-specific recovery milestones.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {keyHomeTreatments.map((treatment, idx) => {
            const Icon = treatment.icon;
            return (
              <div 
                key={idx}
                className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md hover:border-blue-300 transition group space-y-3 text-left"
              >
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-slate-900 font-heading group-hover:text-blue-600 transition">
                  {treatment.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {treatment.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* How Home Visits Work (4 Easy Steps) */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-slate-100/70 border-y border-slate-200">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
              How Home Physiotherapy Works in {location.name}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Simple, transparent, and seamless healthcare brought directly to your doorstep.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="p-5 rounded-2xl bg-white border border-slate-200 text-left space-y-2">
              <span className="w-8 h-8 rounded-xl bg-blue-600 text-white font-bold text-xs flex items-center justify-center shadow-md shadow-blue-500/20">
                1
              </span>
              <h4 className="text-sm font-bold text-slate-900 font-heading">Book Appointment</h4>
              <p className="text-xs text-slate-600">
                Share your address in {location.name} and choose your preferred morning or evening time slot.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200 text-left space-y-2">
              <span className="w-8 h-8 rounded-xl bg-blue-600 text-white font-bold text-xs flex items-center justify-center shadow-md shadow-blue-500/20">
                2
              </span>
              <h4 className="text-sm font-bold text-slate-900 font-heading">Doctor Visits Home</h4>
              <p className="text-xs text-slate-600">
                Dr. Pawan Gupta arrives with full portable equipment, electrotherapy units, and diagnostic tools.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200 text-left space-y-2">
              <span className="w-8 h-8 rounded-xl bg-blue-600 text-white font-bold text-xs flex items-center justify-center shadow-md shadow-blue-500/20">
                3
              </span>
              <h4 className="text-sm font-bold text-slate-900 font-heading">45–60 Min Treatment</h4>
              <p className="text-xs text-slate-600">
                Hands-on manual therapy, joint mobilization, pain-relief modalities, and guided exercises.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200 text-left space-y-2">
              <span className="w-8 h-8 rounded-xl bg-emerald-600 text-white font-bold text-xs flex items-center justify-center shadow-md shadow-emerald-500/20">
                4
              </span>
              <h4 className="text-sm font-bold text-slate-900 font-heading">Caregiver Training</h4>
              <p className="text-xs text-slate-600">
                We train family members on safe transfers, posture correction, and home exercise routines.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Patient Testimonial from this specific locality */}
      {location.patientReview && (
        <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="p-8 rounded-3xl bg-white border border-blue-200 shadow-md text-left space-y-4 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full pointer-events-none"></div>

            <div className="flex items-center space-x-1 text-amber-400">
              {[...Array(location.patientReview.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
              <span className="text-xs font-bold text-slate-700 ml-2">Verified Patient Recovery in {location.name}</span>
            </div>

            <p className="text-base sm:text-lg text-slate-800 italic font-medium">
              "{location.patientReview.quote}"
            </p>

            <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
              <div>
                <strong className="text-slate-900 block text-sm">{location.patientReview.name}</strong>
                <span className="text-slate-500">{location.patientReview.condition}</span>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 font-semibold text-[10px]">
                ✓ Home Visit Completed
              </span>
            </div>

          </div>
        </section>
      )}

      {/* Localized FAQ Section with Schema-Friendly Accordion */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto border-t border-slate-200">
        <div className="text-center mb-10 space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">
            Frequently Asked Questions
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
            Physiotherapy in {location.name} – FAQs
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Answers to common questions about doorstep physiotherapy visits in {location.name}, Mumbai.
          </p>
        </div>

        <div className="space-y-3">
          {localFaqs.map((faq, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <div 
                key={index}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm transition"
              >
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                  className="w-full p-4 sm:p-5 text-left font-bold text-sm sm:text-base text-slate-900 flex items-center justify-between gap-3 hover:text-blue-600 transition"
                >
                  <span className="flex items-center gap-2.5">
                    <HelpCircle className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>{faq.q}</span>
                  </span>
                  <ChevronDown className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-blue-600' : ''}`} />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3 text-left">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Neighboring Areas in the Same Region / Line */}
      {siblingLocations.length > 0 && (
        <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200">
          <div className="text-left mb-6 space-y-1">
            <h3 className="text-lg font-bold text-slate-900 font-heading">
              Other Home Visit Locations in {location.category}:
            </h3>
            <p className="text-xs text-slate-500">
              We also provide fast doorstep physiotherapy across neighboring {location.category} areas:
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {siblingLocations.map((sibling) => (
              <button
                key={sibling.id}
                onClick={() => onSelectLocation(sibling.id)}
                className="p-3 rounded-2xl bg-white hover:bg-blue-50 border border-slate-200 hover:border-blue-300 text-left transition group space-y-1 shadow-sm"
              >
                <div className="text-xs font-bold text-slate-800 group-hover:text-blue-600 transition flex items-center justify-between">
                  <span>{sibling.name}</span>
                  <ChevronRight className="w-3 h-3 text-slate-400 group-hover:text-blue-600 transition" />
                </div>
                <div className="text-[10px] text-slate-500">
                  {sibling.responseTime}
                </div>
              </button>
            ))}
          </div>
        </section>
      )}

      {/* Bottom Sticky-like Booking Banner */}
      <section className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-800">
        <div className="max-w-4xl mx-auto text-center space-y-5">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
            Need an Urgent Physiotherapist at Home in {location.name}?
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto">
            Book your doorstep session today with Dr. Pawan Gupta (PT). Same-day home consultations available across all societies in {location.name}.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <button
              onClick={() => onOpenBooking('Home Visit Physiotherapy (Mumbai)', `${location.name} (${location.category})`)}
              className="py-3 px-6 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm shadow-md transition"
            >
              Book Home Visit in {location.name}
            </button>
            <button
              onClick={() => onOpenAiAssistant(`I need home visit physiotherapy in ${location.name} for my condition.`)}
              className="py-3 px-5 rounded-full bg-slate-800 hover:bg-slate-700 text-blue-300 font-semibold text-xs border border-slate-700 transition"
            >
              Ask AI Triage About {location.name}
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

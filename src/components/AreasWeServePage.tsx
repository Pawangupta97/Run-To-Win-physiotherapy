import React, { useState } from 'react';
import { 
  HOME_VISIT_LOCATIONS, 
  LOCATION_GROUPS, 
  HomeVisitLocation,
  getLocationPath
} from '../data/homeVisitLocations';
import { CLINIC_CONTACT } from '../data/clinicData';
import { 
  Home, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  CheckCircle2, 
  Calendar, 
  Phone, 
  Search, 
  ArrowRight, 
  ChevronRight,
  ChevronDown,
  Building,
  Navigation,
  MessageSquare,
  Sparkles,
  Zap,
  Activity,
  HeartPulse,
  Truck,
  Users,
  AlertCircle
} from 'lucide-react';
import { SeoMeta } from './SeoMeta';
import { Breadcrumbs } from './Breadcrumbs';

interface AreasWeServePageProps {
  onBackToHome: () => void;
  onSelectLocation: (locationId: string) => void;
  onOpenBooking: (prefillService?: string, prefillArea?: string) => void;
  onOpenAiAssistant: (context?: string) => void;
  onNavigatePage?: (page: string) => void;
}

export const AreasWeServePage: React.FC<AreasWeServePageProps> = ({
  onBackToHome,
  onSelectLocation,
  onOpenBooking,
  onOpenAiAssistant,
  onNavigatePage
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedZone, setSelectedZone] = useState('All');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const allZones = ['All', ...LOCATION_GROUPS.map(g => g.category)];

  const filteredLocations = HOME_VISIT_LOCATIONS.filter((loc) => {
    const matchesZone = selectedZone === 'All' || loc.category === selectedZone;

    const matchesSearch = 
      loc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      loc.heroTagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      loc.neighborhoodHighlights.toLowerCase().includes(searchQuery.toLowerCase()) ||
      loc.landmarkAreas.some(n => n.toLowerCase().includes(searchQuery.toLowerCase())) ||
      loc.popularConditions.some(c => c.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesZone && matchesSearch;
  });

  const localFaqs = [
    {
      q: 'Where is the main Run To Win Healthcare Services clinic located in Mumbai?',
      a: 'Our verified physical outpatient clinic is located in Sewri, Mumbai, Maharashtra 400015. It is easily accessible via the Harbour Railway line (Sewri Station), the Eastern Freeway, and central connecting roads from Dadar, Parel, Wadala, and Byculla.'
    },
    {
      q: 'How does doorstep home visit physiotherapy work across Mumbai suburbs?',
      a: 'For patients unable to travel to Sewri due to acute back spasms, post-surgical recovery (TKR/THR), stroke paralysis, or senior mobility challenges, Dr. Pawan Gupta (PT) and our certified clinical team travel directly to your residence. We bring hospital-grade portable equipment including TENS, ultrasound, resistance bands, balance equipment, and dry needling kits.'
    },
    {
      q: 'What are your home visit response times across different Mumbai regions?',
      a: 'Response times typically range from 15 to 25 minutes in South & Central Mumbai (Sewri, Parel, Dadar, Worli), 20 to 35 minutes in Western Suburbs (Bandra, Juhu, Andheri), and 35 to 45 minutes in North-Western and Eastern corridors. Same-day emergency appointments are prioritized for acute disc herniations and post-hospital discharges.'
    },
    {
      q: 'Are your home visit physiotherapists fully certified?',
      a: 'Yes. All clinical consultations and home sessions are conducted or directly supervised by Dr. Pawan Gupta (PT), B.P.Th, M.P.Th (Musculoskeletal & Sports), Certified Manual Therapist (MIAP), and Certified Dry Needling Practitioner with 8+ years of clinical hospital experience.'
    },
    {
      q: 'What should I have prepared at home before the physiotherapist arrives?',
      a: 'You only need a firm bed or couch, comfortable loose clothing, and any recent diagnostic reports (MRI scans, X-rays, orthopedic surgeon discharge summaries). Our team brings all therapeutic modalities, sanitization kits, and exercise gear.'
    }
  ];

  const areasSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://runtowinphysiotherapy.com/areas-we-serve#webpage",
        "name": "Areas We Serve in Mumbai | Clinic & Home Visit Physiotherapy - Run To Win",
        "url": "https://runtowinphysiotherapy.com/areas-we-serve",
        "description": "Explore the areas served by Run To Win Healthcare Services Mumbai. Outpatient clinic in Sewri & doorstep home physiotherapy across 35+ Mumbai localities.",
        "isPartOf": {
          "@id": "https://runtowinphysiotherapy.com/#website"
        },
        "about": {
          "@id": "https://runtowinphysiotherapy.com/#clinic"
        }
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
            "name": "Areas We Serve",
            "item": "https://runtowinphysiotherapy.com/areas-we-serve"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": localFaqs.map(f => ({
          "@type": "Question",
          "name": f.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": f.a
          }
        }))
      }
    ]
  };

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 antialiased selection:bg-blue-600 selection:text-white">
      <SeoMeta
        title="Areas We Serve in Mumbai | Clinic & Home Visit Physiotherapy - Run To Win"
        description="Explore the areas served by Run To Win Healthcare Services Mumbai. Outpatient clinic in Sewri & doorstep home physiotherapy across 35+ Mumbai localities."
        canonicalUrl="https://runtowinphysiotherapy.com/areas-we-serve"
        schema={areasSchema}
      />

      {/* Breadcrumbs */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <Breadcrumbs
            className="!py-0 !px-0 !bg-transparent !border-0 text-xs"
            onHomeClick={onBackToHome}
            items={[
              { label: 'Areas We Serve in Mumbai', current: true },
            ]}
          />
        </div>
      </div>

      {/* Hero Header */}
      <section className="bg-gradient-to-br from-blue-950 via-slate-900 to-blue-950 text-white py-14 sm:py-18 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-semibold uppercase tracking-wider">
                <MapPin className="w-4 h-4 text-emerald-400" />
                <span>Verified Service Network • Mumbai, Maharashtra</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-heading leading-tight">
                Areas We Serve in Mumbai
              </h1>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Run To Win Healthcare Services Mumbai operates our primary outpatient rehabilitation clinic in <strong className="text-white">Sewri (Central Mumbai)</strong> alongside dedicated, hospital-grade <strong className="text-white">doorstep home visits</strong> across 35+ verified residential suburbs.
              </p>

              {/* Service Distinction Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="bg-slate-800/90 p-4 rounded-xl border border-slate-700 space-y-1">
                  <div className="flex items-center space-x-2 text-blue-400 font-bold text-xs uppercase tracking-wider">
                    <Building className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>In-Clinic Facility</span>
                  </div>
                  <p className="text-xs text-slate-200">
                    <strong>Sewri Outpatient Clinic:</strong> Mon – Sat 8 AM – 9 PM, Sun 9 AM – 2 PM (Prior Appointment).
                  </p>
                </div>

                <div className="bg-slate-800/90 p-4 rounded-xl border border-slate-700 space-y-1">
                  <div className="flex items-center space-x-2 text-emerald-400 font-bold text-xs uppercase tracking-wider">
                    <Home className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Doorstep Home Visits</span>
                  </div>
                  <p className="text-xs text-slate-200">
                    <strong>35+ Mumbai Suburbs:</strong> Daily 7 AM – 8:30 PM with complete portable therapy equipment.
                  </p>
                </div>
              </div>

              {/* Search Bar */}
              <div className="bg-white/10 backdrop-blur-md p-2 rounded-2xl border border-white/20 flex items-center shadow-2xl">
                <Search className="w-5 h-5 text-blue-300 ml-3 shrink-0" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Find your Mumbai suburb (e.g., Bandra, Dadar, Juhu, Worli, Andheri, Powai)..."
                  className="w-full bg-transparent border-0 text-white placeholder-slate-400 text-sm px-4 py-2.5 focus:outline-none"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="text-xs text-slate-300 hover:text-white px-3 py-1 font-semibold"
                  >
                    Clear
                  </button>
                )}
              </div>
            </div>

            {/* Right Card: Quick Consultation Card */}
            <div className="lg:col-span-5">
              <div className="bg-slate-800/95 rounded-3xl p-6 sm:p-7 border border-slate-700 shadow-2xl space-y-4 text-xs sm:text-sm text-slate-300">
                <div className="flex items-center space-x-2 text-emerald-400 font-bold text-xs uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Clinical Director Care</span>
                </div>
                <h3 className="text-lg font-bold text-white font-heading">
                  Led by Dr. Pawan Gupta (PT)
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Senior Consultant Physiotherapist & Rehabilitation Specialist (B.P.Th, M.P.Th Musculoskeletal, MIAP). 8+ years clinical experience in orthopedic spine decompression, sports injury rehab, and post-surgical joint mobilization.
                </p>

                <div className="pt-2 border-t border-slate-700/80 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-400">Direct Desk:</span>
                    <a href={`tel:${CLINIC_CONTACT.phone}`} className="text-blue-400 font-bold hover:underline">
                      {CLINIC_CONTACT.phoneDisplay}
                    </a>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-400">WhatsApp:</span>
                    <a 
                      href={`https://wa.me/${CLINIC_CONTACT.whatsappNumber}?text=Hello%20Dr.%20Pawan%20Gupta,%20I%20want%20to%20check%20physiotherapy%20availability%20in%20my%20area.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-400 font-bold hover:underline"
                    >
                      Instant Inquiry
                    </a>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-400">Physical Clinic:</span>
                    <span className="text-slate-200">Sewri, Mumbai 400015</span>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-2">
                  <button
                    onClick={() => onOpenBooking('Consultation Request', 'General Mumbai')}
                    className="w-full py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs transition text-center"
                  >
                    Book Appointment
                  </button>
                  <a
                    href={`tel:${CLINIC_CONTACT.phone}`}
                    className="w-full py-2.5 px-4 rounded-xl bg-slate-700 hover:bg-slate-600 text-white font-bold text-xs transition text-center flex items-center justify-center space-x-1.5"
                  >
                    <Phone className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Call Clinic</span>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Verified Clinic Hub Section with Embedded Google Map */}
      <section className="py-14 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10 space-y-2">
            <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">Physical Outpatient Center</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
              Our Primary Clinic in Sewri, Mumbai
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Patients requiring advanced clinical evaluation, electrotherapy, spinal traction, and specialized manual therapy visit our verified outpatient clinic in Sewri.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Clinic Details Card */}
            <div className="lg:col-span-6 space-y-6">
              <div className="bg-slate-50 rounded-2xl p-6 sm:p-7 border border-slate-200 space-y-5">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                    <Building className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 font-heading">
                      Run To Win Healthcare Services Mumbai
                    </h3>
                    <p className="text-xs text-slate-500">Sewri Rehabilitation & Physical Therapy Center</p>
                  </div>
                </div>

                <div className="space-y-3 text-xs sm:text-sm text-slate-700 border-t border-slate-200 pt-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900">Verified Address:</strong>
                      <p className="text-slate-600">Sewri, Mumbai, Maharashtra 400015, India</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Clock className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900">Outpatient Clinic Hours:</strong>
                      <p className="text-slate-600">Monday – Saturday: 8:00 AM – 9:00 PM</p>
                      <p className="text-slate-600">Sunday: 9:00 AM – 2:00 PM (Emergency & Prior Appointments)</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Phone className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900">Telephone / WhatsApp:</strong>
                      <p>
                        <a href={`tel:${CLINIC_CONTACT.phone}`} className="text-blue-600 font-bold hover:underline">
                          {CLINIC_CONTACT.phoneDisplay}
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Navigation className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900">Transit & Accessibility:</strong>
                      <p className="text-slate-600">
                        Conveniently accessible via Sewri Railway Station (Harbour Line), the Eastern Freeway, and connecting arterial roads from Dadar, Lower Parel, Wadala, and Byculla.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 pt-2">
                  <button
                    onClick={() => onOpenBooking('In-Clinic Assessment at Sewri', 'Sewri Outpatient Clinic')}
                    className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-sm transition"
                  >
                    Book In-Clinic Slot
                  </button>
                  <a
                    href={CLINIC_CONTACT.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-xl bg-white border border-slate-300 hover:bg-slate-100 text-slate-700 font-bold text-xs flex items-center space-x-1.5 transition"
                  >
                    <Navigation className="w-3.5 h-3.5 text-blue-600" />
                    <span>Open in Google Maps</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Embedded Google Map (Sewri Clinic) */}
            <div className="lg:col-span-6">
              <div className="bg-slate-50 rounded-2xl p-2 border border-slate-200 overflow-hidden shadow-sm">
                <div className="px-4 py-3 bg-white rounded-t-xl border-b border-slate-200 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                    <span className="text-xs font-bold text-slate-800">Sewri Clinic Location (Mumbai 400015)</span>
                  </div>
                  <span className="text-[11px] text-slate-500 font-medium">Verified Facility</span>
                </div>
                <div className="w-full h-80 rounded-b-xl overflow-hidden relative">
                  <iframe
                    title="Run To Win Healthcare Services Mumbai - Sewri Clinic Map"
                    src="https://maps.google.com/maps?q=Sewri,+Mumbai,+Maharashtra+400015&t=&z=14&ie=UTF8&iwloc=&output=embed"
                    className="w-full h-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                <p className="text-[11px] text-slate-500 p-2 text-center">
                  📍 Verified Physical Location: Sewri, Mumbai, Maharashtra 400015. Doorstep services dispatched across Mumbai.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Doorstep Home Visit Coverage Directory */}
      <section className="py-14 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
            <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">Service-Area Coverage</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
              Mumbai Suburbs Covered for Home Physiotherapy
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Browse our genuine home visit service zones. Each locality is serviced with certified portable electrotherapy, ultrasound, and exercise therapy.
            </p>
          </div>

          {/* Region Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
            {allZones.map((zone) => (
              <button
                key={zone}
                onClick={() => setSelectedZone(zone)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                  selectedZone === zone
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-white hover:bg-slate-200 text-slate-700 border border-slate-200'
                }`}
              >
                {zone}
              </button>
            ))}
          </div>

          {/* Localities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredLocations.map((loc) => (
              <div
                key={loc.id}
                className="bg-white rounded-2xl p-5 border border-slate-200 hover:border-blue-300 hover:shadow-md transition flex flex-col justify-between space-y-4 group"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-md border border-blue-100">
                      {loc.category}
                    </span>
                    <span className="text-[11px] text-slate-500 flex items-center space-x-1">
                      <Clock className="w-3 h-3 text-slate-400" />
                      <span>{loc.responseTime}</span>
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-700 transition font-heading">
                    {loc.name}
                  </h3>

                  <p className="text-xs text-slate-600 line-clamp-2">
                    {loc.neighborhoodHighlights}
                  </p>

                  <div className="space-y-1 pt-1">
                    <div className="text-[11px] font-bold text-slate-700 uppercase tracking-wider">
                      Key Societies & Landmarks:
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {loc.landmarkAreas.slice(0, 4).map((landmark, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded"
                        >
                          {landmark}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                  <button
                    onClick={() => onSelectLocation(loc.id)}
                    className="text-xs font-bold text-blue-700 hover:text-blue-800 flex items-center space-x-1 transition"
                  >
                    <span>View Locality Protocol</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => onOpenBooking('Home Visit Physiotherapy (Mumbai)', `${loc.name} (${loc.category})`)}
                    className="text-xs px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold transition shadow-xs"
                  >
                    Book Home Visit
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredLocations.length === 0 && (
            <div className="bg-white rounded-2xl p-8 text-center max-w-md mx-auto border border-slate-200 space-y-3">
              <AlertCircle className="w-8 h-8 text-amber-500 mx-auto" />
              <h4 className="text-sm font-bold text-slate-900">No suburb found matching "{searchQuery}"</h4>
              <p className="text-xs text-slate-600">
                We service all major Mumbai residential areas. Contact our team directly to verify dispatch to your specific apartment.
              </p>
              <button
                onClick={() => setSearchQuery('')}
                className="text-xs font-bold text-blue-700 hover:underline"
              >
                Reset Search
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Equipment & Clinical Standards for Home Visits */}
      <section className="py-14 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8 space-y-2">
            <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">Hospital-Grade Standards</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
              What We Bring to Your Doorstep
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Patients do not need to buy expensive devices. Dr. Pawan Gupta and the team arrive with complete therapeutic gear.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center">
                <Zap className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-slate-900">Portable Electrotherapy</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                TENS, Interferential Therapy (IFT), and Muscle Stimulators for acute spasm relief and nerve activation.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center">
                <HeartPulse className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-slate-900">Therapeutic Ultrasound</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Deep tissue 1MHz & 3MHz ultrasound for joint capsule softening, ligament sprains, and tendon healing.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center">
                <Sparkles className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-slate-900">Dry Needling & Cupping</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Single-use sterile micro-filament needles and silicone myofascial cups to deactivate stubborn knots.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center">
                <Activity className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-slate-900">Rehabilitation Gear</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Graded resistance loops, wobble balance pads, goniometers, and kinesiology tape for functional loading.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Local FAQs */}
      <section className="py-14 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">Local FAQs</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
              Frequently Asked Questions: Mumbai Service Areas
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Clear information on our Sewri clinic, dispatch zones, and in-home consultation policies.
            </p>
          </div>

          <div className="space-y-3">
            {localFaqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div key={idx} className="border border-slate-200 rounded-2xl overflow-hidden bg-white transition shadow-2xs">
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 font-bold text-slate-900 text-sm hover:text-blue-700 transition"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${isOpen ? 'rotate-180 text-blue-600' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-4 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Internal Navigation Links for Contextual Local SEO */}
      <section className="py-10 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4 text-center">
            Key Mumbai Clinical Hubs & Service Information
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            <button
              onClick={() => onNavigatePage ? onNavigatePage('physiotherapy-mumbai') : onBackToHome()}
              className="text-xs px-3.5 py-1.5 rounded-lg bg-slate-50 border border-slate-200 hover:border-blue-300 text-slate-700 hover:text-blue-700 transition font-medium"
            >
              Main Mumbai Physiotherapy Hub
            </button>
            <button
              onClick={() => onNavigatePage ? onNavigatePage('orthopedic-physiotherapy') : onBackToHome()}
              className="text-xs px-3.5 py-1.5 rounded-lg bg-slate-50 border border-slate-200 hover:border-blue-300 text-slate-700 hover:text-blue-700 transition font-medium"
            >
              Orthopedic Physiotherapy Mumbai
            </button>
            <button
              onClick={() => onNavigatePage ? onNavigatePage('sports-physiotherapy') : onBackToHome()}
              className="text-xs px-3.5 py-1.5 rounded-lg bg-slate-50 border border-slate-200 hover:border-blue-300 text-slate-700 hover:text-blue-700 transition font-medium"
            >
              Sports Physiotherapy Mumbai
            </button>
            <button
              onClick={() => onNavigatePage ? onNavigatePage('neuro-physiotherapy') : onBackToHome()}
              className="text-xs px-3.5 py-1.5 rounded-lg bg-slate-50 border border-slate-200 hover:border-blue-300 text-slate-700 hover:text-blue-700 transition font-medium"
            >
              Neuro Physiotherapy Mumbai
            </button>
            <button
              onClick={() => onNavigatePage ? onNavigatePage('dr-pawan-gupta') : onBackToHome()}
              className="text-xs px-3.5 py-1.5 rounded-lg bg-blue-50 border border-blue-200 hover:border-blue-400 text-blue-800 font-bold transition flex items-center space-x-1"
            >
              <span>Dr. Pawan Gupta (PT) Profile</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => onNavigatePage ? onNavigatePage('contact') : onBackToHome()}
              className="text-xs px-3.5 py-1.5 rounded-lg bg-emerald-50 border border-emerald-200 hover:border-emerald-400 text-emerald-800 font-bold transition flex items-center space-x-1"
            >
              <span>Sewri Clinic Desk</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-12 bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h2 className="text-2xl sm:text-3xl font-extrabold font-heading">
            Need Physiotherapy in Your Mumbai Suburb?
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
            Schedule an in-clinic consultation at Sewri or arrange a certified doorstep home visit today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => onOpenBooking('Mumbai Physiotherapy Session', 'Areas We Serve')}
              className="w-full sm:w-auto px-7 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm transition shadow-md"
            >
              Book In-Clinic / Home Visit
            </button>
            <a
              href={`tel:${CLINIC_CONTACT.phone}`}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-bold text-sm transition flex items-center justify-center space-x-2"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>Call {CLINIC_CONTACT.phoneDisplay}</span>
            </a>
            <a
              href={`https://wa.me/${CLINIC_CONTACT.whatsappNumber}?text=Hello%20Dr.%20Pawan%20Gupta,%20I%20want%20to%20book%20a%20physiotherapy%20session%20in%20Mumbai.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition flex items-center justify-center space-x-2"
            >
              <MessageSquare className="w-4 h-4 text-white" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

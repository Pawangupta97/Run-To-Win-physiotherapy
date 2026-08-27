import React, { useState } from 'react';
import { 
  HOME_VISIT_LOCATIONS, 
  LOCATION_GROUPS, 
  HomeVisitLocation 
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
  Sparkles,
  Zap,
  Activity,
  HeartPulse,
  Truck,
  Users
} from 'lucide-react';
import { SeoMeta } from './SeoMeta';

interface HomeVisitsPageProps {
  onBackToHome: () => void;
  onSelectLocation: (locationId: string) => void;
  onOpenBooking: (prefillService?: string, prefillArea?: string) => void;
  onOpenAiAssistant: (context?: string) => void;
}

export const HomeVisitsPage: React.FC<HomeVisitsPageProps> = ({
  onBackToHome,
  onSelectLocation,
  onOpenBooking,
  onOpenAiAssistant,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedZone, setSelectedZone] = useState('All');

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

  return (
    <div className="bg-slate-50 min-h-screen">
      <SeoMeta
        title="Home Visit Physiotherapy Mumbai | Doorstep Physio Across 35+ Suburbs"
        description="Book certified doorstep home visit physiotherapy in Mumbai by Dr. Pawan Gupta (PT). Available 7 AM – 8:30 PM across South Mumbai, Western Suburbs, Central Mumbai & Thane."
        canonicalUrl="https://runtowinphysiotherapy.com/#home-visits"
      />

      {/* Breadcrumbs */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center text-xs text-slate-500">
          <button onClick={onBackToHome} className="hover:text-blue-600 font-medium">Home</button>
          <ChevronRight className="w-3.5 h-3.5 mx-2 text-slate-400" />
          <span className="text-slate-900 font-semibold">Mumbai Home Visit Physiotherapy Hub</span>
        </div>
      </div>

      {/* Hero Header */}
      <section className="bg-gradient-to-br from-blue-950 via-slate-900 to-blue-950 text-white py-16 md:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-semibold uppercase tracking-wider">
                <Home className="w-4 h-4 text-emerald-400" />
                <span>Doorstep Physiotherapy Across Mumbai & Thane</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight font-heading leading-tight">
                Home Visit Physiotherapy in Mumbai
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                Hospital-grade physical therapy brought directly to your living room. Led by <strong className="text-white">Dr. Pawan Gupta (PT)</strong> with portable electrotherapy units, ultrasound, resistance gear, and manual mobilization tables.
              </p>

              {/* Key Features Pill Strip */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700/70 text-xs text-slate-300 flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>7:00 AM – 8:30 PM Daily</span>
                </div>
                <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700/70 text-xs text-slate-300 flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>35+ Suburbs Covered</span>
                </div>
                <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700/70 text-xs text-slate-300 flex items-center space-x-2">
                  <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Certified MIAP Physio</span>
                </div>
              </div>

              {/* Search Bar */}
              <div className="bg-white/10 backdrop-blur-md p-2 rounded-2xl border border-white/20 flex items-center shadow-2xl">
                <Search className="w-5 h-5 text-blue-300 ml-3 shrink-0" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Find your Mumbai suburb (e.g., Bandra, Worli, Andheri, Powai, Thane)..."
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

            {/* Right Card */}
            <div className="lg:col-span-5">
              <div className="bg-slate-800/90 rounded-3xl p-6 sm:p-7 border border-slate-700 shadow-2xl space-y-4 text-xs sm:text-sm text-slate-300">
                <h3 className="text-lg font-bold text-white font-heading">
                  Why Families Choose Home Visits:
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong className="text-white">Zero Commute Distress:</strong> No traveling through Mumbai traffic with severe back spasms or post-surgical joints.</span>
                  </div>
                  <div className="flex items-start space-x-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong className="text-white">Post-TKR & THR Specialists:</strong> Safe step-by-step weight-bearing progression under close supervision.</span>
                  </div>
                  <div className="flex items-start space-x-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong className="text-white">Stroke & Neuro Rehabilitation:</strong> Functional transfer training in the patient's actual home environment.</span>
                  </div>
                  <div className="flex items-start space-x-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong className="text-white">Full Equipment Included:</strong> Portable TENS, ultrasound, dry needling, cupping, and resistance bands.</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-700 flex flex-col gap-2.5">
                  <button
                    onClick={() => onOpenBooking('Home Visit Physiotherapy (Mumbai)')}
                    className="w-full bg-blue-600 hover:bg-blue-500 text-white py-3 rounded-xl text-xs font-bold shadow-md transition text-center"
                  >
                    Request Home Visit Appointment
                  </button>
                  <a
                    href={`tel:${CLINIC_CONTACT.phone}`}
                    className="w-full bg-slate-700/80 hover:bg-slate-700 text-slate-200 py-2.5 rounded-xl text-xs font-semibold transition text-center flex items-center justify-center space-x-1.5"
                  >
                    <Phone className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Call Desk: {CLINIC_CONTACT.phoneDisplay}</span>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Suburbs Grid */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Zone Selector */}
          <div className="flex items-center space-x-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
            {allZones.map((zone) => (
              <button
                key={zone}
                onClick={() => setSelectedZone(zone)}
                className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                  selectedZone === zone
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-200'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {zone}
              </button>
            ))}
          </div>

          {/* Suburb Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredLocations.map((loc) => (
              <div
                key={loc.id}
                className="bg-white rounded-3xl p-6 border border-slate-200 hover:border-blue-300 transition-all shadow-sm hover:shadow-md flex flex-col justify-between group"
              >
                <div className="space-y-3.5">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 font-bold text-[11px] uppercase tracking-wider border border-emerald-100 flex items-center space-x-1">
                      <MapPin className="w-3 h-3" />
                      <span>{loc.category}</span>
                    </span>
                    <span className="text-[11px] font-semibold text-slate-400">
                      {loc.responseTime}
                    </span>
                  </div>

                  <h3 
                    onClick={() => onSelectLocation(loc.id)}
                    className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-blue-700 font-heading cursor-pointer transition"
                  >
                    {loc.name}
                  </h3>

                  <p className="text-xs text-slate-600 line-clamp-2">
                    {loc.neighborhoodHighlights}
                  </p>

                  <div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                      Key Areas Covered:
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {loc.landmarkAreas.slice(0, 4).map((neigh, nIdx) => (
                        <span
                          key={nIdx}
                          className="bg-slate-100 text-slate-600 px-2 py-0.5 rounded text-[11px]"
                        >
                          {neigh}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => onOpenBooking('Home Visit Physiotherapy (Mumbai)', loc.name)}
                    className="text-xs font-semibold text-slate-600 hover:text-blue-600 transition"
                  >
                    Book for {loc.name}
                  </button>

                  <button
                    onClick={() => onSelectLocation(loc.id)}
                    className="inline-flex items-center space-x-1 text-xs font-bold text-blue-600 group-hover:text-blue-700 transition"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Equipment Brought to Home Section */}
      <section className="py-14 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
              Complete Portable Clinical Kit Brought to Your Home
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              We do not compromise on modality standards. Every home session includes all required equipment for rapid recovery.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 text-center space-y-2">
              <Zap className="w-8 h-8 text-blue-600 mx-auto" />
              <h4 className="text-xs font-bold text-slate-900">Portable TENS & IFT</h4>
              <p className="text-[11px] text-slate-500">Advanced multi-wave electrotherapy for pain and spasm relief</p>
            </div>

            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 text-center space-y-2">
              <Activity className="w-8 h-8 text-emerald-600 mx-auto" />
              <h4 className="text-xs font-bold text-slate-900">Therapeutic Ultrasound</h4>
              <p className="text-[11px] text-slate-500">Deep tissue heating and micro-massage for tendon healing</p>
            </div>

            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 text-center space-y-2">
              <ShieldCheck className="w-8 h-8 text-purple-600 mx-auto" />
              <h4 className="text-xs font-bold text-slate-900">Dry Needles & Cups</h4>
              <p className="text-[11px] text-slate-500">Sterile single-use filament needles and silicone suction cups</p>
            </div>

            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 text-center space-y-2">
              <HeartPulse className="w-8 h-8 text-amber-600 mx-auto" />
              <h4 className="text-xs font-bold text-slate-900">Resistance & Balance Gear</h4>
              <p className="text-[11px] text-slate-500">Therabands, wobble balance discs, and weights</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

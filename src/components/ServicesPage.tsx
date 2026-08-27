import React, { useState } from 'react';
import { 
  SERVICES, 
  CLINIC_CONTACT 
} from '../data/clinicData';
import { 
  Activity, 
  Zap, 
  HeartPulse, 
  Brain, 
  Sparkles, 
  Clock, 
  ShieldCheck, 
  CheckCircle2, 
  Calendar, 
  ChevronRight, 
  ChevronDown, 
  Phone,
  Search,
  Filter,
  ArrowRight,
  Stethoscope,
  Info
} from 'lucide-react';
import { SeoMeta } from './SeoMeta';

interface ServicesPageProps {
  onBackToHome: () => void;
  onOpenBooking: (prefillService?: string, prefillArea?: string) => void;
  onOpenAiAssistant: (context?: string) => void;
  onNavigatePage: (page: string) => void;
  onSelectCondition?: (conditionId: string) => void;
}

const CATEGORIES = [
  { id: 'all', label: 'All Services' },
  { id: 'orthopedic', label: 'Spine & Orthopedic' },
  { id: 'sports', label: 'Sports Rehab' },
  { id: 'post_op', label: 'Post-Surgical' },
  { id: 'neuro', label: 'Neurology & Stroke' },
  { id: 'geriatric', label: 'Geriatric & Balance' },
  { id: 'advanced_modality', label: 'Dry Needling & Cupping' },
  { id: 'ergonomics', label: 'Corporate Ergonomics' },
];

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onBackToHome,
  onOpenBooking,
  onOpenAiAssistant,
  onNavigatePage,
  onSelectCondition,
}) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedServiceId, setExpandedServiceId] = useState<string | null>(null);

  const filteredServices = SERVICES.filter((service) => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = 
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.techniques.some(t => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
      service.idealFor.some(c => c.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-slate-50 min-h-screen">
      <SeoMeta
        title="Physiotherapy Services & Treatments Mumbai | Dr. Pawan Gupta (PT)"
        description="Explore evidence-based physiotherapy services in Mumbai by Dr. Pawan Gupta (PT). Spine rehab, sports injury recovery, post-TKR care, dry needling, and neuro rehabilitation."
        canonicalUrl="https://runtowinphysiotherapy.com/#services"
      />

      {/* Breadcrumbs */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center text-xs text-slate-500">
          <button onClick={onBackToHome} className="hover:text-blue-600 font-medium">Home</button>
          <ChevronRight className="w-3.5 h-3.5 mx-2 text-slate-400" />
          <span className="text-slate-900 font-semibold">Services & Clinical Care</span>
        </div>
      </div>

      {/* Header Banner */}
      <section className="bg-gradient-to-br from-blue-950 via-slate-900 to-blue-950 text-white py-16 md:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-4">
              <Stethoscope className="w-4 h-4 text-blue-400" />
              <span>Evidence-Based Treatment Modalities</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight font-heading leading-tight mb-4">
              Physiotherapy Services & Clinical Specializations
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8">
              Personalized one-on-one physical therapy protocols designed by <strong className="text-white">Dr. Pawan Gupta (PT)</strong>. Available at our Sewri Clinic and as doorstep home visits across 35+ Mumbai locations.
            </p>

            {/* Search & Filter Bar */}
            <div className="bg-white/10 backdrop-blur-md p-2 rounded-2xl border border-white/20 flex items-center shadow-2xl">
              <Search className="w-5 h-5 text-blue-300 ml-3 shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search treatments (e.g., Dry Needling, Sciatica, TKR, Frozen Shoulder)..."
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
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Category Filter Pills */}
          <div className="flex items-center space-x-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-200'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Service Cards Grid */}
          {filteredServices.length === 0 ? (
            <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 shadow-sm max-w-lg mx-auto">
              <Info className="w-10 h-10 text-slate-400 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-slate-800">No matching services found</h3>
              <p className="text-xs text-slate-500 mt-1 mb-6">
                Try searching for another condition or explore our condition guides.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchQuery('');
                }}
                className="bg-blue-600 text-white px-5 py-2.5 rounded-full text-xs font-bold"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredServices.map((service) => {
                const isExpanded = expandedServiceId === service.id;

                return (
                  <div
                    key={service.id}
                    className="bg-white rounded-3xl p-6 border border-slate-200 hover:border-blue-300 transition-all shadow-sm hover:shadow-md flex flex-col justify-between group"
                  >
                    <div className="space-y-4">
                      
                      {/* Top Badges */}
                      <div className="flex items-center justify-between">
                        <span className="px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 text-[11px] font-bold uppercase tracking-wider border border-blue-100">
                          {service.category.replace('_', ' ')}
                        </span>
                        {service.badge && (
                          <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-[11px] font-bold border border-emerald-100">
                            {service.badge}
                          </span>
                        )}
                      </div>

                      {/* Title & Duration */}
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-blue-700 font-heading transition">
                          {service.title}
                        </h3>
                        <div className="flex items-center space-x-1.5 text-xs text-slate-500 mt-1">
                          <Clock className="w-3.5 h-3.5 text-blue-600" />
                          <span>{service.duration}</span>
                        </div>
                      </div>

                      {/* Short Description */}
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {service.shortDesc}
                      </p>

                      {/* Expanded Full Info */}
                      {isExpanded && (
                        <div className="pt-3 space-y-3 border-t border-slate-100 text-xs animate-in fade-in duration-200">
                          <p className="text-slate-700 leading-relaxed font-medium">
                            {service.fullDesc}
                          </p>

                          <div>
                            <div className="font-bold text-slate-800 uppercase tracking-wider text-[10px] mb-1.5">
                              Key Clinical Benefits:
                            </div>
                            <div className="space-y-1">
                              {service.keyBenefits.map((b, i) => (
                                <div key={i} className="flex items-start space-x-1.5 text-slate-600">
                                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                                  <span>{b}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Techniques / Modalities Tags */}
                      <div>
                        <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                          Techniques & Tools Used:
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {service.techniques.map((tech, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-0.5 rounded-lg bg-slate-100 text-slate-700 text-[11px] font-medium border border-slate-200"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Ideal For Tags */}
                      <div>
                        <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                          Common Diagnoses:
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {service.idealFor.map((cond, idx) => (
                            <span
                              key={idx}
                              className="text-[11px] text-blue-700 bg-blue-50/80 px-2 py-0.5 rounded-md font-medium"
                            >
                              • {cond}
                            </span>
                          ))}
                        </div>
                      </div>

                    </div>

                    {/* Footer Actions */}
                    <div className="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between">
                      <button
                        onClick={() => setExpandedServiceId(isExpanded ? null : service.id)}
                        className="text-xs font-semibold text-slate-500 hover:text-blue-600 flex items-center space-x-1 transition"
                      >
                        <span>{isExpanded ? 'Less Info' : 'More Details'}</span>
                        <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                      </button>

                      <button
                        onClick={() => onOpenBooking(service.title)}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl text-xs font-bold shadow-sm transition flex items-center space-x-1.5"
                      >
                        <Calendar className="w-3.5 h-3.5" />
                        <span>Book Service</span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

        </div>
      </section>

      {/* In-Clinic vs Home Visit Comparison */}
      <section className="py-14 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
              Two Flexible Ways to Receive Treatment
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Receive high-standard physical therapy at our Sewri Clinic or in the comfort of your home across Mumbai.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* In-Clinic Card */}
            <div className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200 space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase">
                  In-Clinic Care
                </span>
                <span className="text-xs font-semibold text-slate-500">Sewri, Mumbai</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 font-heading">
                Sewri Physiotherapy Center
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Ideal for patients who are fully mobile and require comprehensive clinical equipment including motorized spinal traction units, resistance training machines, and multi-wave electrotherapy.
              </p>
              <ul className="space-y-2 text-xs text-slate-700 pt-2">
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Full access to rehabilitation gym & traction units</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Open Monday to Saturday: 8:00 AM – 9:00 PM</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Sunday emergency slots by appointment</span>
                </li>
              </ul>
              <div className="pt-4">
                <button
                  onClick={() => onOpenBooking('In-Clinic Consultation', 'Sewri Clinic')}
                  className="w-full bg-blue-600 text-white py-3 rounded-xl text-xs font-bold hover:bg-blue-700 transition"
                >
                  Book Sewri Clinic Appointment
                </button>
              </div>
            </div>

            {/* Home Visit Card */}
            <div className="bg-blue-900 text-white rounded-3xl p-6 sm:p-8 space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-blue-800 text-blue-200 text-xs font-bold uppercase">
                  Doorstep Home Care
                </span>
                <span className="text-xs font-semibold text-emerald-400">35+ Suburbs Covered</span>
              </div>
              <h3 className="text-xl font-bold text-white font-heading">
                Home Visit Physiotherapy
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Ideal for post-surgical joint replacement patients, stroke survivors, elderly individuals with mobility constraints, or busy corporate executives who prefer private home sessions.
              </p>
              <ul className="space-y-2 text-xs text-slate-200 pt-2">
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Portable TENS, ultrasound, resistance bands & dry needles brought to home</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Daily slots from 7:00 AM to 8:30 PM</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>South Mumbai, Western Suburbs, Central & Thane coverage</span>
                </li>
              </ul>
              <div className="pt-4">
                <button
                  onClick={() => onOpenBooking('Home Visit Physiotherapy (Mumbai)')}
                  className="w-full bg-white text-blue-900 py-3 rounded-xl text-xs font-bold hover:bg-blue-50 transition"
                >
                  Book Home Visit Session
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

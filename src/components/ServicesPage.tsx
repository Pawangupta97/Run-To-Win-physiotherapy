import React, { useState } from 'react';
import { 
  SERVICES, 
  CLINIC_CONTACT 
} from '../data/clinicData';
import { CONDITION_GUIDES, ConditionGuide } from '../data/conditionGuides';
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
  Info,
  AlertTriangle,
  FileText,
  UserCheck
} from 'lucide-react';
import { SeoMeta } from './SeoMeta';

interface ServicesPageProps {
  onBackToHome: () => void;
  onOpenBooking: (prefillService?: string, prefillArea?: string, prefillBodyPart?: string) => void;
  onOpenAiAssistant: (context?: string) => void;
  onNavigatePage: (page: string) => void;
  onSelectCondition?: (conditionId: string) => void;
}

const SERVICE_CATEGORIES = [
  { id: 'all', label: 'All Modalities' },
  { id: 'orthopedic', label: 'Spine & Orthopedic' },
  { id: 'sports', label: 'Sports Rehab' },
  { id: 'post_op', label: 'Post-Surgical' },
  { id: 'neuro', label: 'Neurology & Stroke' },
  { id: 'geriatric', label: 'Geriatric & Balance' },
  { id: 'advanced_modality', label: 'Dry Needling & Cupping' },
  { id: 'ergonomics', label: 'Corporate Ergonomics' },
];

const CONDITION_CATEGORIES = [
  'All Conditions',
  'Spine & Back',
  'Joints & Orthopedic',
  'Neurological',
  'Post-Surgical',
  'Posture & Ergonomics',
  'Sports Rehab',
];

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onBackToHome,
  onOpenBooking,
  onOpenAiAssistant,
  onNavigatePage,
  onSelectCondition,
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'services' | 'conditions'>('all');
  const [selectedServiceCat, setSelectedServiceCat] = useState('all');
  const [selectedConditionCat, setSelectedConditionCat] = useState('All Conditions');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedServiceId, setExpandedServiceId] = useState<string | null>(null);

  const filteredServices = SERVICES.filter((service) => {
    const matchesCategory = selectedServiceCat === 'all' || service.category === selectedServiceCat;
    const matchesSearch = 
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.techniques.some(t => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
      service.idealFor.some(c => c.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const filteredConditions = CONDITION_GUIDES.filter((cond) => {
    const matchesCategory = selectedConditionCat === 'All Conditions' || cond.category === selectedConditionCat;
    const matchesSearch = 
      cond.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cond.quickSummary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cond.symptoms.some(s => s.toLowerCase().includes(searchQuery.toLowerCase())) ||
      cond.physioTreatmentApproach.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-slate-50 min-h-screen">
      <SeoMeta
        title="Physiotherapy Services, Clinical Care & Conditions Treated Mumbai | Dr. Pawan Gupta (PT)"
        description="Explore comprehensive physiotherapy services, treatment modalities, and clinical condition recovery guides in Mumbai by Dr. Pawan Gupta (PT). Spine care, sports recovery, joint replacement, and home visits."
        canonicalUrl="https://runtowinphysiotherapy.com/#services"
      />

      {/* Breadcrumbs */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center text-xs text-slate-500">
          <button onClick={onBackToHome} className="hover:text-blue-600 font-medium">Home</button>
          <ChevronRight className="w-3.5 h-3.5 mx-2 text-slate-400" />
          <span className="text-slate-900 font-semibold">Services, Care & Conditions Treated</span>
        </div>
      </div>

      {/* Header Banner */}
      <section className="bg-gradient-to-br from-blue-950 via-slate-900 to-blue-950 text-white py-14 md:py-18 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-4">
              <Stethoscope className="w-4 h-4 text-blue-400" />
              <span>Evidence-Based Rehabilitation & Clinical Protocols</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight font-heading leading-tight mb-4">
              Physiotherapy Services & Conditions Treated
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-6">
              Complete clinical directory of specialized physical therapy modalities, diagnostic assessments, and non-surgical recovery pathways led by <strong className="text-white">Dr. Pawan Gupta (PT)</strong>. Available in-clinic at Sewri and doorstep across 35+ Mumbai locations.
            </p>

            {/* Unified Search Input */}
            <div className="bg-white/10 backdrop-blur-md p-2 rounded-2xl border border-white/20 flex items-center shadow-2xl">
              <Search className="w-5 h-5 text-blue-300 ml-3 shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search services or conditions (e.g., Sciatica, Dry Needling, Knee Replacement, Frozen Shoulder)..."
                className="w-full bg-transparent border-0 text-white placeholder-slate-400 text-xs sm:text-sm px-3 py-2.5 focus:outline-none"
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
      <section className="py-10 md:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Main Navigation Switcher Tabs */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-slate-200">
            <div className="flex items-center space-x-1.5 p-1.5 bg-slate-200/80 rounded-2xl">
              <button
                onClick={() => setActiveTab('all')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  activeTab === 'all'
                    ? 'bg-white text-blue-900 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                All Care & Conditions ({filteredServices.length + filteredConditions.length})
              </button>
              <button
                onClick={() => setActiveTab('services')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  activeTab === 'services'
                    ? 'bg-white text-blue-900 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Clinical Services ({filteredServices.length})
              </button>
              <button
                onClick={() => setActiveTab('conditions')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  activeTab === 'conditions'
                    ? 'bg-white text-blue-900 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Conditions Treated ({filteredConditions.length})
              </button>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => onOpenBooking()}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl text-xs font-bold transition shadow-sm flex items-center space-x-1.5"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book Consultation</span>
              </button>
              <button
                onClick={() => onOpenAiAssistant('I would like advice on which physiotherapy treatment is best for my condition.')}
                className="bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center space-x-1.5"
              >
                <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                <span>AI Physio Guide</span>
              </button>
            </div>
          </div>

          {/* SECTION 1: CLINICAL SERVICES & MODALITIES */}
          {(activeTab === 'all' || activeTab === 'services') && (
            <div className="mb-14">
              <div className="flex items-center justify-between mb-5">
                <div>
                  <div className="flex items-center space-x-2 text-blue-600 text-xs font-bold uppercase tracking-wider mb-1">
                    <Zap className="w-4 h-4" />
                    <span>Specialized Treatment Formats</span>
                  </div>
                  <h2 className="text-2xl font-extrabold text-slate-900 font-heading">
                    Clinical Services & Modalities
                  </h2>
                </div>
              </div>

              {/* Service Category Filters */}
              <div className="flex items-center space-x-2 overflow-x-auto pb-3 mb-6 no-scrollbar">
                {SERVICE_CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedServiceCat(cat.id)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                      selectedServiceCat === cat.id
                        ? 'bg-blue-600 text-white shadow-sm'
                        : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              {filteredServices.length === 0 ? (
                <div className="bg-white rounded-2xl p-8 text-center border border-slate-200 text-xs text-slate-500">
                  No matching clinical services for "{searchQuery}".
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredServices.map((service) => {
                    const isExpanded = expandedServiceId === service.id;

                    return (
                      <div
                        key={service.id}
                        className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                      >
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <span className="px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 font-bold text-[10px] uppercase tracking-wider border border-blue-100">
                              {service.category.toUpperCase().replace('_', ' ')}
                            </span>
                            <div className="flex items-center text-slate-400 text-xs font-medium space-x-1">
                              <Clock className="w-3.5 h-3.5 text-slate-400" />
                              <span>{service.duration}</span>
                            </div>
                          </div>

                          <div>
                            <h3 className="text-lg font-bold text-slate-900 font-heading">
                              {service.title}
                            </h3>
                            <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                              {service.shortDesc}
                            </p>
                          </div>

                          {/* Techniques Pill Tags */}
                          <div>
                            <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                              Clinical Techniques:
                            </div>
                            <div className="flex flex-wrap gap-1.5">
                              {service.techniques.map((tech, idx) => (
                                <span
                                  key={idx}
                                  className="bg-slate-100 text-slate-700 px-2 py-0.5 rounded text-[11px] font-medium"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Ideal For */}
                          <div>
                            <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                              Common Indications:
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

                          {isExpanded && (
                            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 text-xs text-slate-600 space-y-2 animate-in fade-in">
                              <p>
                                <strong>Assessment & Approach:</strong> Customized one-on-one session by Dr. Pawan Gupta (PT) including baseline range-of-motion testing, pain score tracking, and home exercise guidance.
                              </p>
                              <p>
                                <strong>Setting:</strong> Available at Sewri Center and as doorstep home visit across Mumbai.
                              </p>
                            </div>
                          )}
                        </div>

                        {/* Card Footer Actions */}
                        <div className="pt-4 mt-5 border-t border-slate-100 flex items-center justify-between">
                          <button
                            onClick={() => setExpandedServiceId(isExpanded ? null : service.id)}
                            className="text-xs font-semibold text-slate-500 hover:text-blue-600 flex items-center space-x-1 transition"
                          >
                            <span>{isExpanded ? 'Less Info' : 'Details'}</span>
                            <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                          </button>

                          <button
                            onClick={() => onOpenBooking(service.title)}
                            className="bg-blue-600 hover:bg-blue-700 text-white px-3.5 py-1.5 rounded-xl text-xs font-bold shadow-sm transition flex items-center space-x-1.5"
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
          )}

          {/* SECTION 2: CONDITIONS TREATED & CLINICAL RECOVERY PROTOCOLS */}
          {(activeTab === 'all' || activeTab === 'conditions') && (
            <div className="pt-6 border-t border-slate-200/80">
              <div className="flex items-center justify-between mb-5">
                <div>
                  <div className="flex items-center space-x-2 text-emerald-600 text-xs font-bold uppercase tracking-wider mb-1">
                    <Activity className="w-4 h-4" />
                    <span>Evidence-Based Rehabilitation Protocols</span>
                  </div>
                  <h2 className="text-2xl font-extrabold text-slate-900 font-heading">
                    Conditions Treated & Clinical Guides
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Diagnostic criteria, non-surgical treatment pathways, home exercise recommendations, and warning signs reviewed by Dr. Pawan Gupta (PT).
                  </p>
                </div>
              </div>

              {/* Condition Category Filter Pills */}
              <div className="flex items-center space-x-2 overflow-x-auto pb-3 mb-6 no-scrollbar">
                {CONDITION_CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedConditionCat(cat)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                      selectedConditionCat === cat
                        ? 'bg-emerald-600 text-white shadow-sm'
                        : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {filteredConditions.length === 0 ? (
                <div className="bg-white rounded-2xl p-8 text-center border border-slate-200 text-xs text-slate-500">
                  No matching clinical conditions found for "{searchQuery}".
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredConditions.map((condition) => (
                    <div
                      key={condition.id}
                      className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                    >
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 font-bold text-[10px] uppercase tracking-wider border border-emerald-100">
                            {condition.category}
                          </span>
                          <span className="text-[11px] font-semibold text-slate-400">
                            {condition.expectedRecovery}
                          </span>
                        </div>

                        <div>
                          <h3 className="text-lg font-bold text-slate-900 font-heading">
                            {condition.name}
                          </h3>
                          <p className="text-xs text-slate-600 mt-2 leading-relaxed line-clamp-2">
                            {condition.quickSummary}
                          </p>
                        </div>

                        {/* Symptoms Highlights */}
                        <div className="space-y-1.5">
                          <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                            Key Symptoms:
                          </div>
                          <div className="space-y-1">
                            {condition.symptoms.slice(0, 3).map((sym, sIdx) => (
                              <div key={sIdx} className="flex items-start space-x-1.5 text-xs text-slate-700">
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                                <span className="line-clamp-1">{sym}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Physical Therapy Approach */}
                        <div className="p-3 rounded-2xl bg-blue-50/60 border border-blue-100 text-xs">
                          <div className="font-bold text-blue-900 mb-1 flex items-center space-x-1">
                            <Stethoscope className="w-3.5 h-3.5 text-blue-600" />
                            <span>Physiotherapy Protocol</span>
                          </div>
                          <p className="text-slate-600 line-clamp-2">
                            {condition.physioTreatmentApproach.join(' • ')}
                          </p>
                        </div>

                        {/* Red Flag Warning */}
                        {condition.redFlags && condition.redFlags.length > 0 && (
                          <div className="p-2.5 rounded-xl bg-amber-50/70 border border-amber-200 text-[11px] text-amber-900 flex items-start space-x-1.5">
                            <AlertTriangle className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                            <span className="line-clamp-1"><strong>Red flag:</strong> {condition.redFlags[0]}</span>
                          </div>
                        )}
                      </div>

                      {/* Condition Card Actions */}
                      <div className="pt-4 mt-5 border-t border-slate-100 flex items-center justify-between gap-2">
                        {onSelectCondition ? (
                          <button
                            onClick={() => onSelectCondition(condition.id)}
                            className="text-xs font-bold text-blue-600 hover:text-blue-800 flex items-center space-x-1"
                          >
                            <span>Read Full Protocol</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        ) : (
                          <a
                            href={`#condition/${condition.slug || condition.id}`}
                            className="text-xs font-bold text-blue-600 hover:text-blue-800 flex items-center space-x-1"
                          >
                            <span>Read Full Protocol</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </a>
                        )}

                        <button
                          onClick={() => onOpenBooking(condition.name, undefined, condition.name)}
                          className="bg-emerald-600 hover:bg-emerald-700 text-white px-3.5 py-1.5 rounded-xl text-xs font-bold shadow-sm transition flex items-center space-x-1"
                        >
                          <Calendar className="w-3.5 h-3.5" />
                          <span>Get Treated</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
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

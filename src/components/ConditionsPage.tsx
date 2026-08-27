import React, { useState } from 'react';
import { CONDITION_GUIDES, ConditionGuide } from '../data/conditionGuides';
import { 
  Activity, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Search, 
  AlertTriangle, 
  ChevronRight, 
  Stethoscope, 
  Calendar,
  Sparkles,
  Info,
  Clock,
  HeartPulse
} from 'lucide-react';
import { SeoMeta } from './SeoMeta';

interface ConditionsPageProps {
  onBackToHome: () => void;
  onSelectCondition: (conditionId: string) => void;
  onOpenBooking: (prefillService?: string, prefillArea?: string, prefillBodyPart?: string) => void;
  onOpenAiAssistant: (context?: string) => void;
}

const CATEGORIES = [
  'All',
  'Spine & Back',
  'Neck & Cervical',
  'Joint & Lower Limb',
  'Upper Limb & Shoulder',
  'Neurology',
  'Postural & Ergonomics',
];

export const ConditionsPage: React.FC<ConditionsPageProps> = ({
  onBackToHome,
  onSelectCondition,
  onOpenBooking,
  onOpenAiAssistant,
}) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredConditions = CONDITION_GUIDES.filter((cond) => {
    const matchesCategory = selectedCategory === 'All' || cond.category === selectedCategory;
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
        title="Conditions Treated & Clinical Physio Protocols Mumbai | Dr. Pawan Gupta"
        description="Explore evidence-based physiotherapy guides for Lower Back Pain, Sciatica, Cervical Spondylosis, Knee Osteoarthritis, Frozen Shoulder, and Stroke Recovery in Mumbai."
        canonicalUrl="https://runtowinphysiotherapy.com/#conditions"
      />

      {/* Breadcrumbs */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center text-xs text-slate-500">
          <button onClick={onBackToHome} className="hover:text-blue-600 font-medium">Home</button>
          <ChevronRight className="w-3.5 h-3.5 mx-2 text-slate-400" />
          <span className="text-slate-900 font-semibold">Conditions Treated & Clinical Guides</span>
        </div>
      </div>

      {/* Hero Header */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white py-16 md:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-4">
              <Activity className="w-4 h-4 text-blue-400" />
              <span>Evidence-Based Rehabilitation Directory</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight font-heading leading-tight mb-4">
              Clinical Conditions Treated & Recovery Protocols
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8">
              Explore in-depth diagnostic criteria, non-surgical treatment pathways, home exercise recommendations, and warning signs reviewed by <strong className="text-white">Dr. Pawan Gupta (PT)</strong>.
            </p>

            {/* Search Input */}
            <div className="bg-white/10 backdrop-blur-md p-2 rounded-2xl border border-white/20 flex items-center shadow-2xl">
              <Search className="w-5 h-5 text-blue-300 ml-3 shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by condition or symptom (e.g., Sciatica, Slip Disc, Tingling, Frozen Shoulder)..."
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

      {/* Conditions Grid Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Category Filter Buttons */}
          <div className="flex items-center space-x-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-200'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Condition Cards */}
          {filteredConditions.length === 0 ? (
            <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 shadow-sm max-w-lg mx-auto">
              <Info className="w-10 h-10 text-slate-400 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-slate-800">No condition matches found</h3>
              <p className="text-xs text-slate-500 mt-1 mb-6">
                Try searching with broader terms or ask our AI triage assistant.
              </p>
              <div className="flex justify-center gap-3">
                <button
                  onClick={() => {
                    setSelectedCategory('All');
                    setSearchQuery('');
                  }}
                  className="bg-slate-100 text-slate-800 px-4 py-2 rounded-full text-xs font-bold"
                >
                  Clear Search
                </button>
                <button
                  onClick={() => onOpenAiAssistant()}
                  className="bg-blue-600 text-white px-4 py-2 rounded-full text-xs font-bold flex items-center space-x-1"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Ask AI Assistant</span>
                </button>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredConditions.map((condition) => (
                <div
                  key={condition.id}
                  className="bg-white rounded-3xl p-6 border border-slate-200 hover:border-blue-300 transition-all shadow-sm hover:shadow-md flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    
                    {/* Header Badges */}
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 font-bold text-[11px] uppercase tracking-wider border border-blue-100">
                        {condition.category}
                      </span>
                      <span className="text-emerald-700 font-semibold text-[11px] flex items-center space-x-1">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Evidence-Based</span>
                      </span>
                    </div>

                    {/* Condition Name & Summary */}
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-blue-700 font-heading leading-snug transition">
                        {condition.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-2 line-clamp-3">
                        {condition.quickSummary}
                      </p>
                    </div>

                    {/* Primary Symptoms */}
                    <div>
                      <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                        Common Symptoms:
                      </div>
                      <div className="space-y-1.5">
                        {condition.symptoms.slice(0, 3).map((sym, sIdx) => (
                          <div key={sIdx} className="flex items-start space-x-1.5 text-xs text-slate-700">
                            <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                            <span className="line-clamp-1">{sym}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Rehabilitation Highlights */}
                    <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-100 space-y-1.5 text-xs">
                      <div className="text-[10px] font-bold text-blue-900 uppercase tracking-wider flex items-center space-x-1">
                        <HeartPulse className="w-3.5 h-3.5 text-blue-600" />
                        <span>Physical Therapy Approach</span>
                      </div>
                      <p className="text-slate-600 line-clamp-2">
                        {condition.physioTreatmentApproach.join(' • ')}
                      </p>
                    </div>

                  </div>

                  {/* Card Actions */}
                  <div className="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between">
                    <button
                      onClick={() => onOpenBooking('In-Clinic Consultation', 'Sewri Clinic', condition.name)}
                      className="text-xs font-semibold text-slate-600 hover:text-blue-600 transition"
                    >
                      Book Assessment
                    </button>

                    <button
                      onClick={() => onSelectCondition(condition.id)}
                      className="inline-flex items-center space-x-1.5 text-xs font-bold text-blue-600 group-hover:text-blue-700 transition"
                    >
                      <span>Full Protocol Guide</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </section>

      {/* Red Flags / Clinical Disclaimer Banner */}
      <section className="py-12 bg-amber-50/70 border-t border-amber-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
          <div className="p-3 bg-amber-500 text-white rounded-2xl shrink-0">
            <AlertTriangle className="w-6 h-6" />
          </div>
          <div className="space-y-1 text-xs text-amber-900 flex-1">
            <h4 className="font-bold text-sm text-amber-950">When to Seek Immediate Emergency Medical Care (Red Flags)</h4>
            <p className="leading-relaxed">
              If your spine pain is accompanied by sudden loss of bowel or bladder control (Cauda Equina Syndrome), progressive weakness in foot drop, unremitting night pain with unexplained weight loss, or high fever, seek emergency medical evaluation immediately.
            </p>
          </div>
          <button
            onClick={() => onOpenAiAssistant('emergency check')}
            className="bg-amber-600 hover:bg-amber-700 text-white px-5 py-2.5 rounded-full text-xs font-bold shrink-0 transition"
          >
            Check Symptoms With AI
          </button>
        </div>
      </section>

    </div>
  );
};

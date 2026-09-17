import React, { useState } from 'react';
import { 
  REHABILITATION_AUTHORITY_GUIDES, 
  RehabilitationAuthorityGuide 
} from '../data/conditionGuides';
import { CLINIC_CONTACT } from '../data/clinicData';
import { 
  HeartPulse, 
  Activity, 
  Clock, 
  Calendar, 
  CheckCircle2, 
  ArrowRight, 
  Search, 
  ShieldCheck, 
  Stethoscope, 
  Sparkles, 
  ChevronRight, 
  Phone, 
  UserCheck, 
  AlertTriangle,
  Award,
  Layers,
  Brain,
  Dumbbell
} from 'lucide-react';
import { SeoMeta } from './SeoMeta';
import { Breadcrumbs } from './Breadcrumbs';

interface RehabilitationPageProps {
  onBackToHome: () => void;
  onSelectCondition: (conditionId: string) => void;
  onOpenBooking: (prefillService?: string, prefillArea?: string, prefillBodyPart?: string) => void;
  onOpenAiAssistant: (context?: string) => void;
  onNavigatePage: (page: string) => void;
}

export const RehabilitationPage: React.FC<RehabilitationPageProps> = ({
  onBackToHome,
  onSelectCondition,
  onOpenBooking,
  onOpenAiAssistant,
  onNavigatePage
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPillar, setSelectedPillar] = useState<'ALL' | 'NEURO' | 'SPORTS' | 'POST-SURGICAL'>('ALL');

  const filteredPrograms = REHABILITATION_AUTHORITY_GUIDES.filter((prog) => {
    const matchesPillar = selectedPillar === 'ALL' || prog.pillar === selectedPillar;

    const matchesSearch = 
      prog.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prog.quickSummary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prog.introduction.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prog.typicalComponents.some(c => c.title.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesPillar && matchesSearch;
  });

  const rehabilitationSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://runtowinphysiotherapy.com/rehabilitation#webpage",
        "name": "Physiotherapy Rehabilitation Authority Hub Mumbai - Run To Win Healthcare",
        "url": "https://runtowinphysiotherapy.com/rehabilitation",
        "description": "Evidence-based, criteria-driven rehabilitation authority programs across Neuro, Sports, and Post-Surgical recovery in Mumbai.",
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
            "name": "Rehabilitation Programs",
            "item": "https://runtowinphysiotherapy.com/rehabilitation"
          }
        ]
      }
    ]
  };

  return (
    <div className="bg-slate-50 min-h-screen text-slate-900 animate-in fade-in duration-200">
      <SeoMeta
        title="Rehabilitation Authority Hub in Mumbai | Neuro, Sports & Post-Surgical | Dr. Pawan Gupta"
        description="Evidence-based, criteria-driven rehabilitation authority programs across Neuro (Stroke, Parkinson's), Sports (ACL, RTS, Runner's Knee), and Post-Surgical (TKR, THR) in Mumbai."
        canonicalUrl="https://runtowinphysiotherapy.com/rehabilitation"
        schema={rehabilitationSchema}
      />

      {/* Top Breadcrumb Bar */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <Breadcrumbs
            className="!py-0 !px-0 !bg-transparent !border-0 text-xs"
            onHomeClick={onBackToHome}
            items={[
              { label: 'Rehabilitation Programs', current: true }
            ]}
          />
        </div>
      </div>

      {/* Hero Header */}
      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white py-16 md:py-20 relative overflow-hidden border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-4">
              <HeartPulse className="w-4 h-4 text-blue-400" />
              <span>Criteria-Based Clinical Recovery Authority</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-heading leading-tight mb-4">
              Rehabilitation Authority Programs in Mumbai
            </h1>
            
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8">
              Post-surgical joint longevity, neurological plasticity, and athletic return-to-sport require rigorous, criteria-driven clinical pathways. <strong className="text-white">Dr. Pawan Gupta (PT)</strong> delivers evidence-based recovery programs collaborating with leading orthopedic and neurological surgeons across Mumbai.
            </p>

            {/* Pillar Navigation Shortcuts */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
              <button
                onClick={() => setSelectedPillar('NEURO')}
                className={`p-4 rounded-2xl border text-left transition ${
                  selectedPillar === 'NEURO'
                    ? 'bg-purple-900/50 border-purple-400 text-white ring-2 ring-purple-400/40'
                    : 'bg-white/5 border-white/10 hover:bg-white/10 text-slate-300'
                }`}
              >
                <div className="flex items-center space-x-2 text-purple-300 text-xs font-bold uppercase tracking-wider mb-1">
                  <Brain className="w-4 h-4" />
                  <span>Neuro Authority (4)</span>
                </div>
                <div className="text-xs text-slate-300 font-medium line-clamp-1">
                  Stroke • Parkinson’s • Balance • Neuro Physio
                </div>
              </button>

              <button
                onClick={() => setSelectedPillar('SPORTS')}
                className={`p-4 rounded-2xl border text-left transition ${
                  selectedPillar === 'SPORTS'
                    ? 'bg-blue-900/50 border-blue-400 text-white ring-2 ring-blue-400/40'
                    : 'bg-white/5 border-white/10 hover:bg-white/10 text-slate-300'
                }`}
              >
                <div className="flex items-center space-x-2 text-blue-300 text-xs font-bold uppercase tracking-wider mb-1">
                  <Dumbbell className="w-4 h-4" />
                  <span>Sports Authority (5)</span>
                </div>
                <div className="text-xs text-slate-300 font-medium line-clamp-1">
                  ACL • Sports Injury • RTS • Runner’s Knee • Ankle
                </div>
              </button>

              <button
                onClick={() => setSelectedPillar('POST-SURGICAL')}
                className={`p-4 rounded-2xl border text-left transition ${
                  selectedPillar === 'POST-SURGICAL'
                    ? 'bg-emerald-900/50 border-emerald-400 text-white ring-2 ring-emerald-400/40'
                    : 'bg-white/5 border-white/10 hover:bg-white/10 text-slate-300'
                }`}
              >
                <div className="flex items-center space-x-2 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-1">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Post-Surgical (3)</span>
                </div>
                <div className="text-xs text-slate-300 font-medium line-clamp-1">
                  Post-Surgical • Knee Replacement • Hip Replacement
                </div>
              </button>
            </div>

            {/* Search Input */}
            <div className="bg-white/10 backdrop-blur-md p-2 rounded-2xl border border-white/20 flex items-center shadow-2xl">
              <Search className="w-5 h-5 text-blue-300 ml-3 shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search programs (e.g., Knee Replacement, ACL, Stroke, Parkinson's, Balance, Runner's Knee)..."
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

      {/* Main Grid Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Clinical Ethics Banner */}
          <div className="bg-amber-50 border border-amber-200 rounded-3xl p-6 mb-10 text-amber-950 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm">
            <div className="flex items-start space-x-3.5">
              <AlertTriangle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <div className="text-xs font-bold uppercase tracking-wider text-amber-900 font-heading">
                  Clinical Standards & Ethical Transparency
                </div>
                <p className="text-xs text-amber-900/90 leading-relaxed max-w-3xl">
                  Rehabilitation progression is strictly criteria-based and governed by tissue biology. We never promise arbitrary recovery timeframes, guarantee clinical outcomes, or invent surgical protocols. Every patient undergoes personalized assessment.
                </p>
              </div>
            </div>
            <div className="shrink-0 flex items-center space-x-2 text-xs font-bold text-amber-800 bg-white px-3.5 py-2 rounded-xl border border-amber-200">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Surgeon Protocol Aligned</span>
            </div>
          </div>
          
          {/* Pillar Filters */}
          <div className="flex items-center space-x-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
            {(
              [
                { key: 'ALL', label: 'All 12 Authority Portals' },
                { key: 'NEURO', label: 'Neuro Rehabilitation (4)' },
                { key: 'SPORTS', label: 'Sports Rehabilitation (5)' },
                { key: 'POST-SURGICAL', label: 'Post-Surgical Protocols (3)' }
              ] as const
            ).map((tab) => (
              <button
                key={tab.key}
                onClick={() => setSelectedPillar(tab.key)}
                className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                  selectedPillar === tab.key
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-200'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Programs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPrograms.map((prog) => {
              const badgeStyle =
                prog.pillar === 'NEURO'
                  ? 'bg-purple-50 text-purple-700 border-purple-200'
                  : prog.pillar === 'SPORTS'
                  ? 'bg-amber-50 text-amber-800 border-amber-200'
                  : 'bg-emerald-50 text-emerald-800 border-emerald-200';

              return (
                <div
                  key={prog.id}
                  className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${badgeStyle}`}>
                        {prog.pillar}
                      </span>
                      <span className="text-xs text-slate-500 flex items-center space-x-1">
                        <Activity className="w-3.5 h-3.5 text-blue-500" />
                        <span>Criteria-Based</span>
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 font-heading mb-2">
                      {prog.name}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 mb-4">
                      {prog.quickSummary}
                    </p>

                    <div className="space-y-2 mb-6 bg-slate-50 p-3.5 rounded-2xl border border-slate-100">
                      <div className="text-[11px] font-bold text-slate-900 uppercase tracking-wider flex items-center space-x-1.5">
                        <Layers className="w-3.5 h-3.5 text-blue-600" />
                        <span>Key Interventions:</span>
                      </div>
                      <ul className="space-y-1.5 text-xs text-slate-600">
                        {prog.typicalComponents.slice(0, 3).map((comp, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                            <span className="line-clamp-1">{comp.title}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                    <button
                      onClick={() => onSelectCondition(prog.id)}
                      className="inline-flex items-center text-xs font-bold text-blue-600 hover:text-blue-800 transition group"
                    >
                      <span>Read Clinical Protocol</span>
                      <ChevronRight className="w-3.5 h-3.5 ml-0.5 group-hover:translate-x-0.5 transition-transform" />
                    </button>

                    <button
                      onClick={() => onOpenBooking(prog.name, 'Sewri Clinic or Home Visit')}
                      className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs transition"
                    >
                      Book Rehab
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Doctor Collaboration Banner */}
          <div className="mt-14 p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center space-x-2 text-xs font-bold text-emerald-400 uppercase tracking-wider">
                <UserCheck className="w-4 h-4" />
                <span>Operating Surgeon Compliance</span>
              </div>
              <h3 className="text-xl font-bold font-heading">
                Undergoing Joint, Spine, or Sports Surgery in Mumbai?
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Dr. Pawan Gupta (PT) coordinates directly with your operating orthopedic surgeon to adhere strictly to operative notes, weight-bearing limitations, range-of-motion constraints, and tissue-healing checkpoints.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                onClick={() => onOpenBooking('Post-Surgical Rehabilitation Assessment', 'Sewri Clinic or Home Visit')}
                className="px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs transition"
              >
                Schedule Surgical Protocol Review
              </button>
              <button
                onClick={() => onOpenAiAssistant('What are the key rehabilitation phases after knee replacement surgery?')}
                className="px-4 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold text-xs transition flex items-center space-x-1.5"
              >
                <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                <span>Ask AI Guide</span>
              </button>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

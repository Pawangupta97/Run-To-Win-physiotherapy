import React, { useState } from 'react';
import { 
  CONTENT_CLUSTER_MAP, 
  TOPICAL_AUTHORITY_PILLARS, 
  AuthorityPillarId, 
  ClusterMapNode 
} from '../data/topicalAuthorityData';
import { 
  Network, 
  ArrowRight, 
  BookOpen, 
  Activity, 
  Stethoscope, 
  CalendarCheck, 
  ChevronRight, 
  ShieldCheck, 
  Sparkles, 
  Layers, 
  FileText, 
  HelpCircle,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';

interface ContentClusterMapViewProps {
  onSelectArticle: (articleId: string) => void;
  onSelectCondition?: (conditionId: string) => void;
  onNavigatePage?: (page: string) => void;
  onOpenBooking: (prefillService?: string, prefillArea?: string, prefillBodyPart?: string) => void;
}

export const ContentClusterMapView: React.FC<ContentClusterMapViewProps> = ({
  onSelectArticle,
  onSelectCondition,
  onNavigatePage,
  onOpenBooking,
}) => {
  const [selectedPillarId, setSelectedPillarId] = useState<AuthorityPillarId>('physiotherapy-mumbai');

  const currentCluster: ClusterMapNode = 
    CONTENT_CLUSTER_MAP.find((c) => c.pillarId === selectedPillarId) || CONTENT_CLUSTER_MAP[0];

  const handlePillarClick = (pillarId: AuthorityPillarId) => {
    setSelectedPillarId(pillarId);
  };

  const handleServiceClick = (routeKey: string) => {
    if (onNavigatePage) {
      onNavigatePage(routeKey);
    } else {
      window.location.hash = `#${routeKey}`;
    }
  };

  const handleRehabClick = (routeKey: string, url: string) => {
    if (onNavigatePage) {
      onNavigatePage(routeKey);
    } else {
      window.location.hash = url.startsWith('/') ? `#${url.slice(1)}` : url;
    }
  };

  const handleConditionClick = (conditionId: string) => {
    if (onSelectCondition) {
      onSelectCondition(conditionId);
    } else if (onNavigatePage) {
      onNavigatePage('conditions');
    } else {
      window.location.hash = `#condition/${conditionId}`;
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      
      {/* Cluster Map Explanatory Header */}
      <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-xl space-y-4 relative overflow-hidden">
        <div className="absolute -right-10 -bottom-10 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center space-x-2.5 text-xs font-bold text-blue-400 uppercase tracking-wider">
            <Network className="w-4 h-4" />
            <span>Topical Authority Architecture</span>
          </div>
          <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-300 text-xs font-semibold border border-blue-400/20 flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
            7 Core Clinical Pillars
          </span>
        </div>

        <h2 className="text-xl sm:text-3xl font-extrabold font-heading text-white tracking-tight">
          Evidence-Based Content Cluster Map
        </h2>

        <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-3xl">
          To provide medical reliability and prevent thin content, Run To Win Healthcare connects each clinical subject in a strict 5-stage hierarchy:
          <strong className="text-white"> Pillar Domain</strong> → 
          <strong className="text-blue-300"> Supporting Patient Education Guide</strong> → 
          <strong className="text-emerald-300"> Anatomical Condition Guide</strong> → 
          <strong className="text-amber-300"> Commercial Service Page</strong> → 
          <strong className="text-purple-300"> Phased Rehabilitation Protocol</strong>.
        </p>

        {/* 5-Node Visual Flow Diagram */}
        <div className="pt-2">
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 text-center text-xs font-semibold">
            <div className="bg-slate-800/80 p-3 rounded-2xl border border-slate-700/60">
              <span className="text-[10px] uppercase text-slate-400 block mb-0.5">Stage 1</span>
              <span className="text-white font-bold block">Pillar Domain</span>
              <span className="text-[10px] text-slate-400 font-normal">Core Authority</span>
            </div>
            <div className="bg-blue-950/60 p-3 rounded-2xl border border-blue-800/60">
              <span className="text-[10px] uppercase text-blue-400 block mb-0.5">Stage 2</span>
              <span className="text-blue-200 font-bold block">Supporting Article</span>
              <span className="text-[10px] text-blue-300 font-normal">Patient Education</span>
            </div>
            <div className="bg-emerald-950/60 p-3 rounded-2xl border border-emerald-800/60">
              <span className="text-[10px] uppercase text-emerald-400 block mb-0.5">Stage 3</span>
              <span className="text-emerald-200 font-bold block">Related Condition</span>
              <span className="text-[10px] text-emerald-300 font-normal">Diagnostic Pathology</span>
            </div>
            <div className="bg-amber-950/60 p-3 rounded-2xl border border-amber-800/60">
              <span className="text-[10px] uppercase text-amber-400 block mb-0.5">Stage 4</span>
              <span className="text-amber-200 font-bold block">Service Page</span>
              <span className="text-[10px] text-amber-300 font-normal">Doctor Consultation</span>
            </div>
            <div className="bg-purple-950/60 p-3 rounded-2xl border border-purple-800/60 col-span-2 sm:col-span-1">
              <span className="text-[10px] uppercase text-purple-400 block mb-0.5">Stage 5</span>
              <span className="text-purple-200 font-bold block">Rehab Protocol</span>
              <span className="text-[10px] text-purple-300 font-normal">Week-by-Week Goals</span>
            </div>
          </div>
        </div>
      </div>

      {/* Pillar Selector Tabs */}
      <div className="space-y-2">
        <label className="text-xs font-bold text-slate-600 uppercase tracking-wider block">
          Select Authority Pillar to Inspect Cluster:
        </label>
        <div className="flex flex-wrap gap-2">
          {TOPICAL_AUTHORITY_PILLARS.map((p) => {
            const isSelected = p.id === selectedPillarId;
            return (
              <button
                key={p.id}
                onClick={() => handlePillarClick(p.id)}
                className={`py-2 px-3.5 rounded-xl text-xs font-bold transition flex items-center space-x-1.5 min-h-[42px] ${
                  isSelected
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20 ring-2 ring-blue-500/20'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                <span>{p.name}</span>
                {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-white ml-1" />}
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Cluster Interactive Architecture Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-8">
        
        {/* Pillar Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
          <div>
            <div className="flex items-center space-x-2 text-xs font-bold text-blue-600 uppercase tracking-wider">
              <span>Authority Pillar #{TOPICAL_AUTHORITY_PILLARS.findIndex(p => p.id === selectedPillarId) + 1}</span>
            </div>
            <h3 className="text-2xl font-extrabold text-slate-900 font-heading mt-1">
              {currentCluster.pillarName}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
              {currentCluster.pillarDescription}
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => handleServiceClick(currentCluster.servicePage.routeKey)}
              className="py-2.5 px-4 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-700 font-bold text-xs border border-blue-200 transition flex items-center space-x-1.5"
            >
              <span>View Service Page</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => onOpenBooking('In-Clinic Consultation', 'Sewri Clinic', currentCluster.pillarName)}
              className="py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-sm transition"
            >
              Consult Doctor
            </button>
          </div>
        </div>

        {/* Interactive Cluster Nodes Pipeline */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
          
          {/* Node 1: Supporting Patient Education Article */}
          <div className="p-5 rounded-2xl bg-blue-50/70 border border-blue-200 flex flex-col justify-between space-y-4 hover:shadow-md transition">
            <div className="space-y-2">
              <div className="flex items-center justify-between text-[11px] font-bold text-blue-700 uppercase">
                <span className="flex items-center gap-1">
                  <BookOpen className="w-3.5 h-3.5 text-blue-600" />
                  Supporting Article
                </span>
                <span className="px-2 py-0.5 rounded bg-blue-200/60 text-blue-800 text-[10px]">
                  Informational
                </span>
              </div>
              <h4 className="text-sm font-bold text-slate-900 leading-snug">
                {currentCluster.supportingArticle.title}
              </h4>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                <strong>Role:</strong> {currentCluster.supportingArticle.roleInCluster}
              </p>
            </div>

            <button
              onClick={() => onSelectArticle(currentCluster.supportingArticle.id)}
              className="w-full py-2 px-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs transition flex items-center justify-center space-x-1.5 shadow-sm"
            >
              <span>Read Full Article</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Node 2: Related Anatomical Condition Guide */}
          <div className="p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200 flex flex-col justify-between space-y-4 hover:shadow-md transition">
            <div className="space-y-2">
              <div className="flex items-center justify-between text-[11px] font-bold text-emerald-800 uppercase">
                <span className="flex items-center gap-1">
                  <Stethoscope className="w-3.5 h-3.5 text-emerald-600" />
                  Related Condition
                </span>
                <span className="px-2 py-0.5 rounded bg-emerald-200/60 text-emerald-900 text-[10px]">
                  Diagnostic
                </span>
              </div>
              <h4 className="text-sm font-bold text-slate-900 leading-snug">
                {currentCluster.relatedCondition.name}
              </h4>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                {currentCluster.relatedCondition.pathologySummary}
              </p>
            </div>

            <button
              onClick={() => handleConditionClick(currentCluster.relatedCondition.id)}
              className="w-full py-2 px-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs transition flex items-center justify-center space-x-1.5 shadow-sm"
            >
              <span>View Condition Guide</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Node 3: Commercial Service Page */}
          <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200 flex flex-col justify-between space-y-4 hover:shadow-md transition">
            <div className="space-y-2">
              <div className="flex items-center justify-between text-[11px] font-bold text-amber-800 uppercase">
                <span className="flex items-center gap-1">
                  <CalendarCheck className="w-3.5 h-3.5 text-amber-600" />
                  Service Page
                </span>
                <span className="px-2 py-0.5 rounded bg-amber-200/60 text-amber-900 text-[10px]">
                  Transactional
                </span>
              </div>
              <h4 className="text-sm font-bold text-slate-900 leading-snug">
                {currentCluster.servicePage.title}
              </h4>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                <strong>Intent:</strong> {currentCluster.servicePage.commercialIntent}
              </p>
            </div>

            <button
              onClick={() => handleServiceClick(currentCluster.servicePage.routeKey)}
              className="w-full py-2 px-3 rounded-xl bg-amber-700 hover:bg-amber-800 text-white font-bold text-xs transition flex items-center justify-center space-x-1.5 shadow-sm"
            >
              <span>Explore Service Page</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Node 4: Phased Rehabilitation Page */}
          <div className="p-5 rounded-2xl bg-purple-50/70 border border-purple-200 flex flex-col justify-between space-y-4 hover:shadow-md transition">
            <div className="space-y-2">
              <div className="flex items-center justify-between text-[11px] font-bold text-purple-800 uppercase">
                <span className="flex items-center gap-1">
                  <Activity className="w-3.5 h-3.5 text-purple-600" />
                  Rehabilitation Page
                </span>
                <span className="px-2 py-0.5 rounded bg-purple-200/60 text-purple-900 text-[10px]">
                  Protocol
                </span>
              </div>
              <h4 className="text-sm font-bold text-slate-900 leading-snug">
                {currentCluster.rehabilitationPage.title}
              </h4>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                <strong>Milestones:</strong> {currentCluster.rehabilitationPage.protocolFocus}
              </p>
            </div>

            <button
              onClick={() => handleRehabClick(currentCluster.rehabilitationPage.routeKey, currentCluster.rehabilitationPage.url)}
              className="w-full py-2 px-3 rounded-xl bg-purple-700 hover:bg-purple-800 text-white font-bold text-xs transition flex items-center justify-center space-x-1.5 shadow-sm"
            >
              <span>View Protocol Timeline</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Anti-Cannibalization & Authority Architecture Notice */}
        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-1.5">
          <div className="flex items-center space-x-1.5 font-bold text-slate-900">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span>Topical Authority & Anti-Cannibalization Strategy:</span>
          </div>
          <p className="text-[11px] text-slate-600 leading-relaxed">
            {currentCluster.supportingArticle.antiCannibalizationStrategy}
          </p>
        </div>

      </div>

    </div>
  );
};

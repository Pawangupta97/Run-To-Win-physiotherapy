import React, { useState } from 'react';
import { CLINICAL_ARTICLES, ClinicalArticle } from '../data/articlesData';
import { 
  TOPICAL_AUTHORITY_PILLARS, 
  AuthorityPillarId 
} from '../data/topicalAuthorityData';
import { ContentClusterMapView } from './ContentClusterMapView';
import { 
  BookOpen, 
  Clock, 
  Calendar, 
  UserCheck, 
  ArrowRight, 
  Search, 
  ChevronRight, 
  Tag, 
  Sparkles,
  Info,
  CheckCircle2,
  ShieldCheck,
  Network,
  Layers,
  Activity,
  Stethoscope,
  CalendarCheck
} from 'lucide-react';
import { SeoMeta } from './SeoMeta';
import { Breadcrumbs } from './Breadcrumbs';

interface ArticlesPageProps {
  onBackToHome: () => void;
  onSelectArticle: (articleId: string) => void;
  onSelectCondition?: (conditionId: string) => void;
  onOpenBooking: (prefillService?: string, prefillArea?: string, prefillBodyPart?: string) => void;
  onNavigatePage?: (page: string) => void;
}

export const ArticlesPage: React.FC<ArticlesPageProps> = ({
  onBackToHome,
  onSelectArticle,
  onSelectCondition,
  onOpenBooking,
  onNavigatePage,
}) => {
  const [activeView, setActiveView] = useState<'articles' | 'cluster-map'>('articles');
  const [selectedPillar, setSelectedPillar] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredArticles = CLINICAL_ARTICLES.filter((article) => {
    const matchesPillar = selectedPillar === 'All' || article.pillarId === selectedPillar;
    const q = searchQuery.toLowerCase();
    const matchesSearch = 
      !q ||
      article.title.toLowerCase().includes(q) ||
      article.metaDescription.toLowerCase().includes(q) ||
      article.keyTakeaway.toLowerCase().includes(q) ||
      article.pillarName.toLowerCase().includes(q) ||
      article.category.toLowerCase().includes(q);
    return matchesPillar && matchesSearch;
  });

  const articlesSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "@id": "https://runtowinphysiotherapy.com/articles#webpage",
        "name": "Patient Education & Clinical Topical Authority Hub - Run To Win Healthcare",
        "url": "https://runtowinphysiotherapy.com/articles",
        "description": "Evidence-based patient education articles and topical authority clusters covering Orthopedic, Sports, Neuro, Home, Pain, and Post-Surgical Physiotherapy in Mumbai.",
        "author": {
          "@type": "Physician",
          "@id": "https://runtowinphysiotherapy.com/#dr-pawan-gupta",
          "name": "Dr. Pawan Gupta (PT)",
          "jobTitle": "Senior Consultant Musculoskeletal & Neuro Physiotherapist",
          "url": "https://runtowinphysiotherapy.com/dr-pawan-gupta/"
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
            "name": "Patient Education & Authority Hub",
            "item": "https://runtowinphysiotherapy.com/articles"
          }
        ]
      }
    ]
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      <SeoMeta
        title="Physiotherapy Patient Education & Clinical Authority Mumbai | Dr. Pawan Gupta (PT)"
        description="Comprehensive, evidence-based patient education articles across 7 clinical pillars: Orthopedic, Sports, Neuro, Home, Pain, and Post-Surgical Physiotherapy in Mumbai."
        canonicalUrl="https://runtowinphysiotherapy.com/articles"
        schema={articlesSchema}
      />

      {/* Breadcrumbs */}
      <Breadcrumbs
        onHomeClick={onBackToHome}
        items={[
          { label: 'Patient Education & Clinical Authority System', current: true },
        ]}
      />

      {/* Hero Banner */}
      <section className="bg-gradient-to-br from-blue-950 via-slate-900 to-blue-950 text-white py-14 md:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-semibold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-blue-400" />
              <span>Topical Authority & Evidence-Based Care</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-heading leading-tight">
              Patient Education & Clinical Authority System
            </h1>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
              Medically authored by <strong className="text-white">Dr. Pawan Gupta (PT)</strong> (B.P.Th, M.P.Th, MIAP). High-depth clinical guides structured across 7 foundational pillars with peer-reviewed medical citations, realistic recovery timelines, and zero automated filler.
            </p>

            {/* View Mode Switcher: Articles Grid vs Interactive Cluster Map */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={() => setActiveView('articles')}
                className={`py-2.5 px-5 rounded-2xl text-xs font-bold transition flex items-center space-x-2 ${
                  activeView === 'articles'
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25 ring-2 ring-white/20'
                    : 'bg-white/10 text-slate-200 hover:bg-white/20 border border-white/10'
                }`}
              >
                <BookOpen className="w-4 h-4" />
                <span>Browse Clinical Articles ({CLINICAL_ARTICLES.length})</span>
              </button>

              <button
                onClick={() => setActiveView('cluster-map')}
                className={`py-2.5 px-5 rounded-2xl text-xs font-bold transition flex items-center space-x-2 ${
                  activeView === 'cluster-map'
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25 ring-2 ring-white/20'
                    : 'bg-white/10 text-slate-200 hover:bg-white/20 border border-white/10'
                }`}
              >
                <Network className="w-4 h-4 text-blue-300" />
                <span>Interactive Content Cluster Map</span>
              </button>
            </div>
          </div>

          {/* Search Input (When viewing articles) */}
          {activeView === 'articles' && (
            <div className="max-w-2xl bg-white/10 backdrop-blur-md p-2 rounded-2xl border border-white/20 flex items-center shadow-xl">
              <Search className="w-5 h-5 text-blue-300 ml-3 shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search symptoms, conditions, or pillars (e.g., Cervical disc, Runner's knee, Sciatica, TKR)..."
                className="w-full bg-transparent border-0 text-white placeholder-slate-400 text-xs sm:text-sm px-4 py-2 focus:outline-none"
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
          )}

        </div>
      </section>

      {/* Main Content Area */}
      <main className="py-10 md:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* VIEW 1: INTERACTIVE CONTENT CLUSTER MAP */}
          {activeView === 'cluster-map' ? (
            <ContentClusterMapView
              onSelectArticle={onSelectArticle}
              onSelectCondition={onSelectCondition}
              onNavigatePage={onNavigatePage}
              onOpenBooking={onOpenBooking}
            />
          ) : (
            /* VIEW 2: CLINICAL ARTICLES GRID */
            <div className="space-y-8">
              
              {/* Authority Pillar Filter Chips */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs text-slate-500 font-semibold uppercase tracking-wider">
                  <span>Filter by Authority Pillar:</span>
                  <span>{filteredArticles.length} Article{filteredArticles.length !== 1 ? 's' : ''} Available</span>
                </div>

                <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
                  <button
                    onClick={() => setSelectedPillar('All')}
                    className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                      selectedPillar === 'All'
                        ? 'bg-blue-600 text-white shadow-sm'
                        : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                    }`}
                  >
                    All Pillars ({CLINICAL_ARTICLES.length})
                  </button>

                  {TOPICAL_AUTHORITY_PILLARS.map((pillar) => {
                    const count = CLINICAL_ARTICLES.filter((a) => a.pillarId === pillar.id).length;
                    const isSelected = selectedPillar === pillar.id;
                    return (
                      <button
                        key={pillar.id}
                        onClick={() => setSelectedPillar(pillar.id)}
                        className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center space-x-1.5 ${
                          isSelected
                            ? 'bg-blue-600 text-white shadow-sm'
                            : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                        }`}
                      >
                        <span>{pillar.name}</span>
                        <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${isSelected ? 'bg-blue-800 text-white' : 'bg-slate-100 text-slate-600'}`}>
                          {count}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Clinical Standard E-E-A-T Guarantee Card */}
              <div className="p-4 sm:p-5 rounded-2xl bg-blue-50/80 border border-blue-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-slate-700">
                <div className="flex items-start space-x-3">
                  <ShieldCheck className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div className="space-y-0.5">
                    <strong className="text-slate-900 block font-bold">
                      Clinical Authorship & Editorial Quality Standards:
                    </strong>
                    <p className="text-slate-600 leading-relaxed text-[11px] sm:text-xs">
                      All articles are written exclusively for patient education by Dr. Pawan Gupta (PT). Zero keyword stuffing, zero automated synthetic filler, real peer-reviewed clinical citations (Lancet, JOSPT, BJSM, Cochrane, WHO), and strict anti-cannibalization structure.
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setActiveView('cluster-map')}
                  className="px-3.5 py-2 rounded-xl bg-white hover:bg-blue-100 text-blue-700 font-bold border border-blue-200 transition shrink-0 self-start sm:self-auto flex items-center gap-1.5"
                >
                  <Network className="w-3.5 h-3.5 text-blue-600" />
                  <span>Inspect Cluster Architecture</span>
                </button>
              </div>

              {/* Articles Grid */}
              {filteredArticles.length === 0 ? (
                <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 shadow-sm max-w-lg mx-auto space-y-4">
                  <Info className="w-10 h-10 text-slate-400 mx-auto" />
                  <h3 className="text-lg font-bold text-slate-800">No matching clinical articles found</h3>
                  <p className="text-xs text-slate-500">
                    Try searching for different symptoms or reset your pillar filter.
                  </p>
                  <button
                    onClick={() => {
                      setSelectedPillar('All');
                      setSearchQuery('');
                    }}
                    className="bg-blue-600 text-white px-5 py-2.5 rounded-xl text-xs font-bold shadow-sm"
                  >
                    Reset All Filters
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                  {filteredArticles.map((article) => (
                    <article
                      key={article.id}
                      className="bg-white rounded-3xl border border-slate-200 hover:border-blue-300 transition-all shadow-sm hover:shadow-md overflow-hidden flex flex-col justify-between group"
                    >
                      <div className="p-6 sm:p-7 space-y-4">
                        
                        {/* Meta Bar */}
                        <div className="flex items-center justify-between text-xs text-slate-500">
                          <span className="px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 font-bold text-[10px] sm:text-[11px] uppercase tracking-wider border border-blue-100">
                            {article.pillarName}
                          </span>
                          <div className="flex items-center space-x-1 font-semibold text-slate-500 text-[11px]">
                            <Clock className="w-3.5 h-3.5 text-blue-600" />
                            <span>{article.readTime}</span>
                          </div>
                        </div>

                        {/* Title */}
                        <h3 
                          onClick={() => onSelectArticle(article.id)}
                          className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-blue-700 font-heading leading-snug cursor-pointer transition"
                        >
                          {article.title}
                        </h3>

                        {/* Meta Description */}
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                          {article.metaDescription}
                        </p>

                        {/* Key Clinical Takeaway Box */}
                        <div className="pt-2">
                          <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                            <Sparkles className="w-3 h-3 text-blue-600" />
                            <span>Key Clinical Takeaway:</span>
                          </div>
                          <div className="p-3 bg-blue-50/60 rounded-xl border border-blue-100 text-xs text-slate-700 line-clamp-3 leading-relaxed">
                            {article.keyTakeaway}
                          </div>
                        </div>

                        {/* Cluster Cross-Links */}
                        {article.clusterNavigation && (
                          <div className="pt-2 border-t border-slate-100 flex flex-wrap gap-1.5 text-[11px]">
                            <button
                              onClick={() => {
                                if (onSelectCondition) onSelectCondition(article.clusterNavigation.relatedConditionId);
                                else if (onNavigatePage) onNavigatePage('conditions');
                              }}
                              className="px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-800 hover:bg-emerald-100 border border-emerald-200 transition"
                            >
                              Condition: {article.clusterNavigation.relatedConditionLabel.split(' ')[0]}
                            </button>
                            <button
                              onClick={() => {
                                const route = article.clusterNavigation.servicePageUrl.replace('/', '');
                                if (onNavigatePage) onNavigatePage(route);
                              }}
                              className="px-2 py-0.5 rounded-md bg-amber-50 text-amber-800 hover:bg-amber-100 border border-amber-200 transition"
                            >
                              Service Page
                            </button>
                          </div>
                        )}

                      </div>

                      {/* Footer Bar */}
                      <div className="p-6 pt-0">
                        <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <div className="w-7 h-7 rounded-full bg-blue-100 text-blue-700 font-bold text-xs flex items-center justify-center">
                              PG
                            </div>
                            <span className="text-xs font-semibold text-slate-700">
                              {article.author}
                            </span>
                          </div>

                          <button
                            onClick={() => onSelectArticle(article.id)}
                            className="inline-flex items-center space-x-1 text-xs font-bold text-blue-600 group-hover:text-blue-700 transition"
                          >
                            <span>Read Full Guide</span>
                            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                          </button>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              )}

            </div>
          )}

        </div>
      </main>

      {/* Consultation Banner */}
      <section className="py-14 bg-gradient-to-r from-blue-900 via-slate-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h2 className="text-2xl sm:text-3xl font-extrabold font-heading">
            Need Expert Physical Therapy Assessment?
          </h2>
          <p className="text-xs sm:text-sm text-blue-100 max-w-xl mx-auto leading-relaxed">
            Schedule an in-clinic evaluation at our Sewri facility or book a doorstep home visit session across Mumbai with <strong className="text-white">Dr. Pawan Gupta (PT)</strong>.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-3">
            <button
              onClick={() => onOpenBooking('In-Clinic Consultation', 'Sewri Clinic')}
              className="bg-white text-blue-900 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold shadow-xl hover:bg-blue-50 transition"
            >
              Book In-Clinic Assessment
            </button>
            <button
              onClick={() => onOpenBooking('Home Visit Physiotherapy', 'South Mumbai')}
              className="bg-blue-600 text-white px-6 py-3 rounded-xl text-xs sm:text-sm font-bold shadow-xl hover:bg-blue-500 transition"
            >
              Book Home Visit Session
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

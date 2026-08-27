import React, { useState } from 'react';
import { CLINICAL_ARTICLES, ClinicalArticle } from '../data/articlesData';
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
  CheckCircle2
} from 'lucide-react';
import { SeoMeta } from './SeoMeta';

interface ArticlesPageProps {
  onBackToHome: () => void;
  onSelectArticle: (articleId: string) => void;
  onSelectCondition?: (conditionId: string) => void;
  onOpenBooking: (prefillService?: string, prefillArea?: string) => void;
}

const CATEGORIES = [
  'All',
  'Spine Care & Sciatica',
  'Post-Surgical Protocols',
  'Shoulder & Upper Limb',
  'Ergonomics & Posture',
  'Neurological Recovery',
];

export const ArticlesPage: React.FC<ArticlesPageProps> = ({
  onBackToHome,
  onSelectArticle,
  onSelectCondition,
  onOpenBooking,
}) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredArticles = CLINICAL_ARTICLES.filter((article) => {
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
    const matchesSearch = 
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.metaDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.keyTakeaway.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-slate-50 min-h-screen">
      <SeoMeta
        title="Physiotherapy Articles & Patient Education Mumbai | Dr. Pawan Gupta (PT)"
        description="Read clinical physiotherapy guides by Dr. Pawan Gupta (PT). Evidence-based recovery advice for back pain, TKR rehabilitation, frozen shoulder, and desk posture in Mumbai."
        canonicalUrl="https://runtowinphysiotherapy.com/#articles"
      />

      {/* Breadcrumbs */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center text-xs text-slate-500">
          <button onClick={onBackToHome} className="hover:text-blue-600 font-medium">Home</button>
          <ChevronRight className="w-3.5 h-3.5 mx-2 text-slate-400" />
          <span className="text-slate-900 font-semibold">Clinical Articles & Evidence-Based Insights</span>
        </div>
      </div>

      {/* Hero Banner */}
      <section className="bg-gradient-to-br from-blue-950 via-slate-900 to-blue-950 text-white py-16 md:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-4">
              <BookOpen className="w-4 h-4 text-blue-400" />
              <span>Evidence-Based Patient Education</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight font-heading leading-tight mb-4">
              Clinical Articles & Physical Therapy Guides
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8">
              Authored and medically reviewed by <strong className="text-white">Dr. Pawan Gupta (PT)</strong>. Practical clinical advice on when to seek therapy, post-op timelines, and posture correction.
            </p>

            {/* Search Input */}
            <div className="bg-white/10 backdrop-blur-md p-2 rounded-2xl border border-white/20 flex items-center shadow-2xl">
              <Search className="w-5 h-5 text-blue-300 ml-3 shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles (e.g., TKR recovery weeks, Sciatica exercises, Tech neck posture)..."
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

      {/* Articles Grid */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Category Tabs */}
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

          {/* Cards Grid */}
          {filteredArticles.length === 0 ? (
            <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 shadow-sm max-w-lg mx-auto">
              <Info className="w-10 h-10 text-slate-400 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-slate-800">No matching articles found</h3>
              <p className="text-xs text-slate-500 mt-1 mb-6">
                Try searching for different keywords or reset your category filters.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                }}
                className="bg-blue-600 text-white px-5 py-2.5 rounded-full text-xs font-bold"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article) => (
                <article
                  key={article.id}
                  className="bg-white rounded-3xl border border-slate-200 hover:border-blue-300 transition-all shadow-sm hover:shadow-md overflow-hidden flex flex-col justify-between group"
                >
                  <div className="p-6 sm:p-7 space-y-4">
                    
                    {/* Meta Bar */}
                    <div className="flex items-center justify-between text-xs text-slate-500">
                      <span className="px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 font-bold text-[11px] uppercase tracking-wider border border-blue-100">
                        {article.category}
                      </span>
                      <div className="flex items-center space-x-1 font-semibold text-slate-500">
                        <Clock className="w-3.5 h-3.5 text-blue-600" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 
                      onClick={() => onSelectArticle(article.id)}
                      className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-blue-700 font-heading leading-snug cursor-pointer transition"
                    >
                      {article.title}
                    </h3>

                    {/* Summary */}
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                      {article.metaDescription}
                    </p>

                    {/* Key Takeaway */}
                    <div className="pt-2">
                      <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                        Clinical Takeaway:
                      </div>
                      <div className="p-3 bg-blue-50/50 rounded-xl border border-blue-100 flex items-start space-x-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                        <span className="line-clamp-2">{article.keyTakeaway}</span>
                      </div>
                    </div>

                  </div>

                  {/* Footer Bar */}
                  <div className="p-6 pt-0">
                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-7 h-7 rounded-full bg-blue-100 text-blue-700 font-bold text-xs flex items-center justify-center">
                          PG
                        </div>
                        <span className="text-xs font-semibold text-slate-700">{article.author}</span>
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
      </section>

      {/* Consultation Banner */}
      <section className="py-14 bg-gradient-to-r from-blue-700 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h2 className="text-2xl sm:text-3xl font-extrabold font-heading">
            Need Personalized Physical Therapy Guidance?
          </h2>
          <p className="text-sm sm:text-base text-blue-100 max-w-xl mx-auto">
            Schedule an assessment with Dr. Pawan Gupta (PT) for hands-on evaluation and customized rehabilitation.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onOpenBooking()}
              className="bg-white text-blue-900 px-8 py-3.5 rounded-full text-sm font-bold shadow-xl hover:bg-blue-50 transition"
            >
              Book In-Clinic or Home Visit Assessment
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

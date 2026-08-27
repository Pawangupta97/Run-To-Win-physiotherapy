import React from 'react';
import { CLINICAL_ARTICLES, ClinicalArticle } from '../data/articlesData';
import { BookOpen, ArrowRight, ShieldCheck, Clock, Stethoscope, ChevronRight } from 'lucide-react';

interface ArticlesSectionProps {
  onSelectArticle: (articleId: string) => void;
  onOpenBooking: (prefillService?: string, prefillArea?: string) => void;
}

export const ArticlesSection: React.FC<ArticlesSectionProps> = ({
  onSelectArticle,
  onOpenBooking,
}) => {
  return (
    <section id="articles" className="py-16 md:py-24 bg-white relative scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Clinical Knowledge & Patient Guides</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
            Evidence-Based Rehabilitation Insights
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Medically authored guides by <strong className="text-slate-900">Dr. Pawan Gupta (PT)</strong> on spinal recovery, knee replacement timelines, posture biomechanics, and neurological rehabilitation.
          </p>
        </div>

        {/* Featured 3-Column Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CLINICAL_ARTICLES.map((article) => (
            <div
              key={article.id}
              className="bg-slate-50 hover:bg-white rounded-3xl p-6 border border-slate-200 hover:border-blue-300 transition shadow-sm hover:shadow-md flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="px-2.5 py-1 rounded-full bg-blue-100/70 text-blue-700 font-bold text-[11px] uppercase tracking-wider">
                    {article.category}
                  </span>
                  <span className="text-slate-400 font-medium flex items-center space-x-1">
                    <Clock className="w-3 h-3" />
                    <span>{article.readTime}</span>
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-blue-700 font-heading leading-snug transition">
                  {article.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                  {article.keyTakeaway}
                </p>
              </div>

              <div className="pt-5 mt-4 border-t border-slate-200/80 flex items-center justify-between">
                <div className="flex items-center space-x-2 text-xs text-slate-500">
                  <span className="font-semibold text-slate-700">{article.author}</span>
                </div>

                <button
                  onClick={() => onSelectArticle(article.id)}
                  className="inline-flex items-center space-x-1 text-xs font-bold text-blue-600 group-hover:text-blue-700 transition"
                >
                  <span>Read Guide</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Consultation Callout */}
        <div className="mt-12 p-6 rounded-3xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3 text-left">
            <div className="w-10 h-10 rounded-2xl bg-blue-600/30 text-blue-400 flex items-center justify-center shrink-0">
              <Stethoscope className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold font-heading">
                Have specific symptoms not covered here?
              </h4>
              <p className="text-xs text-slate-300">
                Book a 1-on-1 assessment with Dr. Pawan Gupta (PT) in Sewri or at your residence in Mumbai.
              </p>
            </div>
          </div>

          <button
            onClick={() => onOpenBooking('In-Clinic Consultation', 'Sewri Clinic')}
            className="w-full sm:w-auto py-2.5 px-5 rounded-xl font-bold text-xs bg-blue-600 hover:bg-blue-500 text-white transition shrink-0"
          >
            Schedule Assessment
          </button>
        </div>

      </div>
    </section>
  );
};

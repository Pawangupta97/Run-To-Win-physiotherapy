import React, { useEffect } from 'react';
import { ClinicalArticle, CLINICAL_ARTICLES } from '../data/articlesData';
import { CLINIC_CONTACT } from '../data/clinicData';
import { SeoMeta } from './SeoMeta';
import { 
  ShieldCheck, 
  Clock, 
  Calendar, 
  Phone, 
  MessageSquare, 
  ArrowLeft, 
  CheckCircle2, 
  BookOpen, 
  Sparkles, 
  Stethoscope, 
  ChevronRight, 
  HelpCircle,
  Share2
} from 'lucide-react';

interface ArticleDetailPageProps {
  article: ClinicalArticle;
  onBackToHome: () => void;
  onSelectArticle: (articleId: string) => void;
  onSelectCondition?: (conditionId: string) => void;
  onOpenBooking: (prefillService?: string, prefillArea?: string, prefillBodyPart?: string) => void;
}

export const ArticleDetailPage: React.FC<ArticleDetailPageProps> = ({
  article,
  onBackToHome,
  onSelectArticle,
  onSelectCondition,
  onOpenBooking,
}) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [article]);

  const relatedArticles = CLINICAL_ARTICLES.filter((a) => a.id !== article.id);

  const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `https://runtowinphysiotherapy.com/#article-${article.id}`,
        "headline": article.title,
        "description": article.metaDescription,
        "datePublished": "2026-08-01",
        "dateModified": "2026-08-27",
        "author": {
          "@type": "Physician",
          "name": article.author,
          "jobTitle": article.authorTitle,
          "honorificSuffix": article.authorCredentials,
          "worksFor": {
            "@type": "PhysiotherapyClinic",
            "name": "Run To Win Healthcare Services Mumbai"
          }
        },
        "publisher": {
          "@type": "Organization",
          "name": "Run To Win Healthcare Services Mumbai",
          "url": "https://runtowinphysiotherapy.com/"
        },
        "mainEntityOfPage": `https://runtowinphysiotherapy.com/#article/${article.id}`
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
            "name": "Clinical Insights & Patient Guides",
            "item": "https://runtowinphysiotherapy.com/#articles"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": article.title,
            "item": `https://runtowinphysiotherapy.com/#article/${article.id}`
          }
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 animate-in fade-in duration-200">
      <SeoMeta
        title={article.seoTitle}
        description={article.metaDescription}
        canonicalUrl={`https://runtowinphysiotherapy.com/#article/${article.id}`}
        ogType="article"
        schema={articleSchema}
      />

      {/* Top Breadcrumb Navigation */}
      <div className="bg-slate-900 text-slate-300 text-xs py-3 px-4 border-b border-slate-800 sticky top-16 z-30 shadow-md">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center space-x-2">
            <button
              onClick={onBackToHome}
              className="inline-flex items-center space-x-1 text-blue-400 hover:text-blue-300 font-semibold transition"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Home</span>
            </button>
            <span className="text-slate-600">/</span>
            <span className="text-slate-400">Clinical Guides</span>
            <span className="text-slate-600">/</span>
            <span className="text-white font-medium truncate max-w-[200px] sm:max-w-none">{article.title}</span>
          </div>

          <button
            onClick={() => onOpenBooking('In-Clinic Consultation', 'Sewri Clinic', article.category)}
            className="px-3 py-1 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs transition"
          >
            Consult Doctor
          </button>
        </div>
      </div>

      {/* Article Body Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-10">
        
        {/* Article Header Card */}
        <article className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-sm space-y-6">
          <div className="flex items-center space-x-2 text-xs font-bold text-blue-600 uppercase tracking-wider">
            <BookOpen className="w-4 h-4" />
            <span>{article.category} • {article.readTime}</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading leading-tight">
            {article.title}
          </h1>

          {/* Author Metadata */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-100 text-xs text-slate-600">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-sm shadow-sm">
                PG
              </div>
              <div>
                <div className="flex items-center space-x-1.5 font-bold text-slate-900">
                  <span>Written & Reviewed by {article.author}</span>
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                </div>
                <span className="text-slate-500 text-[11px]">{article.authorTitle} ({article.authorCredentials})</span>
              </div>
            </div>

            <div className="text-[11px] text-slate-500 flex items-center space-x-3">
              <span>Published: {article.publishedDate}</span>
              <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 font-semibold border border-emerald-200">
                Peer Reviewed
              </span>
            </div>
          </div>

          {/* Key Takeaway / Direct Answer Snippet for Google AI Overviews */}
          <div className="p-5 rounded-2xl bg-blue-50/80 border border-blue-200 text-slate-800 text-sm leading-relaxed">
            <strong className="text-blue-900 font-bold block mb-1 text-xs uppercase tracking-wider">
              Key Clinical Takeaway:
            </strong>
            <p className="text-slate-800">{article.keyTakeaway}</p>
          </div>

          {/* Content Sections */}
          <div className="space-y-8 pt-4">
            {article.contentSections.map((sec, idx) => (
              <div key={idx} className="space-y-3">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading">
                  {sec.heading}
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  {sec.body}
                </p>

                {sec.bulletPoints && (
                  <ul className="space-y-2 pt-1">
                    {sec.bulletPoints.map((bp, bIdx) => (
                      <li key={bIdx} className="flex items-start space-x-2.5 text-xs sm:text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{bp}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          {/* Article Specific FAQs if available */}
          {article.faqs && article.faqs.length > 0 && (
            <div className="pt-6 border-t border-slate-100 space-y-4">
              <div className="flex items-center space-x-2">
                <HelpCircle className="w-5 h-5 text-blue-600" />
                <h3 className="text-lg font-bold text-slate-900 font-heading">
                  Clinical Q&A
                </h3>
              </div>
              <div className="space-y-3">
                {article.faqs.map((faq, fIdx) => (
                  <div key={fIdx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                    <h4 className="text-sm font-bold text-slate-900">{faq.question}</h4>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Related Condition CTA Link */}
          {article.targetConditionId && onSelectCondition && (
            <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-500 font-medium">Related Clinical Topic:</span>
              <button
                onClick={() => onSelectCondition(article.targetConditionId!)}
                className="text-xs font-bold text-blue-600 hover:text-blue-700 inline-flex items-center space-x-1"
              >
                <span>View Full Condition & Protocol Guide</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </article>

        {/* Fast Doctor Booking CTA */}
        <div className="bg-slate-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-left">
            <h3 className="text-lg sm:text-xl font-bold font-heading">
              Need Personalized Physiotherapy Guidance?
            </h3>
            <p className="text-xs text-slate-300">
              Consult with <strong className="text-white">Dr. Pawan Gupta (PT)</strong> at our Sewri Clinic or schedule a Doorstep Home Visit across Mumbai.
            </p>
          </div>

          <div className="flex gap-3 w-full sm:w-auto shrink-0">
            <button
              onClick={() => onOpenBooking('In-Clinic Consultation', 'Sewri Clinic', article.category)}
              className="py-2.5 px-5 rounded-xl font-bold text-xs bg-blue-600 hover:bg-blue-500 text-white shadow-md transition"
            >
              Book Appointment
            </button>
            <a
              href={`https://wa.me/${CLINIC_CONTACT.whatsappNumber}?text=Hello%20Dr.%20Pawan%20Gupta,%20I%20read%20your%20article%20on%20${encodeURIComponent(article.title)}%20and%20need%20physiotherapy%20advice.`}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2.5 px-4 rounded-xl font-semibold text-xs bg-emerald-600 hover:bg-emerald-500 text-white transition flex items-center space-x-1"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Other Clinical Insights Hub */}
        <div className="space-y-4 pt-2">
          <h3 className="text-base font-bold text-slate-900 font-heading">
            More Clinical Insights & Rehabilitation Guides
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {relatedArticles.map((rel) => (
              <button
                key={rel.id}
                onClick={() => onSelectArticle(rel.id)}
                className="p-5 rounded-2xl bg-white hover:bg-blue-50/60 border border-slate-200 hover:border-blue-300 text-left transition space-y-2 group shadow-sm"
              >
                <div className="flex items-center justify-between text-[11px] text-blue-600 font-bold uppercase">
                  <span>{rel.category}</span>
                  <span className="text-slate-400 font-normal">{rel.readTime}</span>
                </div>
                <h4 className="text-sm font-bold text-slate-900 group-hover:text-blue-700 leading-snug">
                  {rel.title}
                </h4>
                <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                  {rel.keyTakeaway}
                </p>
              </button>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

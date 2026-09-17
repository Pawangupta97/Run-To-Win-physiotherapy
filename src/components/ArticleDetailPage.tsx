import React, { useEffect } from 'react';
import doctorPhoto from '../assets/images/dr_pawan_gupta.webp';
import { ClinicalArticle, CLINICAL_ARTICLES } from '../data/articlesData';
import { CLINIC_CONTACT } from '../data/clinicData';
import { SeoMeta } from './SeoMeta';
import { Breadcrumbs } from './Breadcrumbs';
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
  AlertTriangle,
  FileText,
  Activity,
  CalendarCheck,
  ExternalLink,
  Layers,
  Award,
  Check,
  Info
} from 'lucide-react';

interface ArticleDetailPageProps {
  article: ClinicalArticle;
  onBackToHome: () => void;
  onSelectArticle: (articleId: string) => void;
  onSelectCondition?: (conditionId: string) => void;
  onOpenBooking: (prefillService?: string, prefillArea?: string, prefillBodyPart?: string) => void;
  onNavigatePage?: (page: string) => void;
}

export const ArticleDetailPage: React.FC<ArticleDetailPageProps> = ({
  article,
  onBackToHome,
  onSelectArticle,
  onSelectCondition,
  onOpenBooking,
  onNavigatePage,
}) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [article]);

  const relatedArticles = CLINICAL_ARTICLES.filter((a) => a.id !== article.id);

  const handleDoctorProfileClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigatePage) {
      onNavigatePage('dr-pawan-gupta');
    } else {
      window.location.hash = '#dr-pawan-gupta';
    }
  };

  const handleServiceClick = (url: string) => {
    const route = url.replace('/', '').replace('#', '');
    if (onNavigatePage) {
      onNavigatePage(route);
    } else {
      window.location.hash = `#${route}`;
    }
  };

  const handleRehabClick = (url: string) => {
    if (onNavigatePage) {
      onNavigatePage('rehabilitation');
    } else {
      window.location.hash = url.startsWith('/') ? `#${url.slice(1)}` : url;
    }
  };

  const handleConditionClick = (condId: string) => {
    if (onSelectCondition) {
      onSelectCondition(condId);
    } else if (onNavigatePage) {
      onNavigatePage('conditions');
    } else {
      window.location.hash = `#condition/${condId}`;
    }
  };

  // Structured Schema for Medical Education Article
  const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["MedicalWebPage", "MedicalScholarlyArticle"],
        "@id": `https://runtowinphysiotherapy.com/articles/${article.id}#article`,
        "headline": article.title,
        "description": article.metaDescription,
        "datePublished": "2026-09-01",
        "dateModified": article.lastUpdatedDate ? "2026-09-17" : "2026-09-01",
        "medicalAudience": {
          "@type": "MedicalAudience",
          "audienceType": "Patient"
        },
        "aspect": ["diagnosis", "treatment", "overview", "symptoms", "prevention"],
        "author": {
          "@type": "Physician",
          "@id": "https://runtowinphysiotherapy.com/#dr-pawan-gupta",
          "name": "Dr. Pawan Gupta (PT)",
          "jobTitle": "Senior Consultant Musculoskeletal & Neuro Physiotherapist",
          "medicalSpecialty": "Physiotherapy",
          "url": "https://runtowinphysiotherapy.com/dr-pawan-gupta/"
        },
        "publisher": {
          "@type": "MedicalOrganization",
          "@id": "https://runtowinphysiotherapy.com/#clinic",
          "name": "Run To Win Physiotherapy & Rehabilitation Clinic",
          "url": "https://runtowinphysiotherapy.com/"
        },
        "citation": article.clinicalReferences?.map(r => `${r.citation} (${r.source}, ${r.year})`),
        "mainEntityOfPage": `https://runtowinphysiotherapy.com/articles/${article.id}`
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
            "name": "Patient Education",
            "item": "https://runtowinphysiotherapy.com/articles"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": article.pillarName,
            "item": `https://runtowinphysiotherapy.com${article.clusterNavigation?.pillarUrl || '/articles'}`
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": article.title,
            "item": `https://runtowinphysiotherapy.com/articles/${article.id}`
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
        canonicalUrl={`https://runtowinphysiotherapy.com/articles/${article.id}`}
        ogType="article"
        schema={articleSchema}
      />

      {/* Top Breadcrumb Navigation */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 border-b border-slate-800 sticky top-16 z-30 shadow-md">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <Breadcrumbs
            className="!py-0 !px-0 !bg-transparent !border-0 text-xs"
            onHomeClick={onBackToHome}
            items={[
              { label: 'Patient Education', href: '/#articles' },
              { label: article.pillarName, href: `/#${article.pillarId}` },
              { label: article.title, current: true },
            ]}
          />

          <button
            onClick={() => onOpenBooking('In-Clinic Consultation', 'Sewri Clinic', article.pillarName)}
            className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs transition flex items-center gap-1 shadow-sm"
          >
            <span>Consult Dr. Pawan</span>
          </button>
        </div>
      </div>

      {/* Article Body Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
        
        {/* Content Cluster Pipeline Banner (Anti-Cannibalization Hierarchy) */}
        {article.clusterNavigation && (
          <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm space-y-2.5">
            <div className="flex items-center justify-between text-xs font-bold text-slate-700 uppercase tracking-wider">
              <span className="flex items-center gap-1.5 text-blue-700">
                <Layers className="w-4 h-4 text-blue-600" />
                <span>Content Cluster Map:</span>
              </span>
              <span className="text-[10px] text-slate-500 font-normal">Topical Authority Flow</span>
            </div>

            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
              <span className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-800 border border-slate-200">
                {article.clusterNavigation.pillarLabel}
              </span>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <span className="px-2.5 py-1 rounded-lg bg-blue-100 text-blue-900 border border-blue-200">
                Patient Guide (This Article)
              </span>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <button
                onClick={() => handleConditionClick(article.clusterNavigation.relatedConditionId)}
                className="px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-800 hover:bg-emerald-100 border border-emerald-200 transition"
              >
                {article.clusterNavigation.relatedConditionLabel} →
              </button>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <button
                onClick={() => handleServiceClick(article.clusterNavigation.servicePageUrl)}
                className="px-2.5 py-1 rounded-lg bg-amber-50 text-amber-900 hover:bg-amber-100 border border-amber-200 transition"
              >
                {article.clusterNavigation.servicePageLabel} →
              </button>
            </div>
          </div>
        )}

        {/* Main Article Container */}
        <article className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-sm space-y-8">
          
          {/* Header Metadata */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-xs font-bold text-blue-600 uppercase tracking-wider">
              <BookOpen className="w-4 h-4" />
              <span>{article.pillarName} • {article.category} • {article.readTime}</span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading leading-tight">
              {article.title}
            </h1>

            {/* Author Attribution */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-100 text-xs text-slate-600">
              <div className="flex items-center space-x-3">
                <a
                  href="/dr-pawan-gupta/"
                  onClick={handleDoctorProfileClick}
                  className="w-12 h-12 rounded-full overflow-hidden border-2 border-blue-600 shadow-sm hover:ring-2 hover:ring-blue-400 transition shrink-0 bg-blue-50 flex items-center justify-center"
                  title="View Dr. Pawan Gupta (PT) profile"
                >
                  <img 
                    src={doctorPhoto} 
                    alt="Dr. Pawan Gupta (PT)" 
                    className="w-full h-full object-cover object-top"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.style.display = 'none';
                      if (target.parentElement) target.parentElement.textContent = 'PG';
                    }}
                  />
                </a>
                <div>
                  <div className="flex items-center space-x-1.5 font-bold text-slate-900">
                    <span>Clinically Authored by </span>
                    <a
                      href="/dr-pawan-gupta/"
                      onClick={handleDoctorProfileClick}
                      className="text-blue-600 hover:text-blue-700 hover:underline font-bold inline-flex items-center space-x-1"
                    >
                      <span>Dr. Pawan Gupta (PT)</span>
                      <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                    </a>
                  </div>
                  <span className="text-slate-500 text-[11px]">{article.authorTitle} ({article.authorCredentials})</span>
                </div>
              </div>

              <div className="text-[11px] text-slate-500 flex items-center space-x-3">
                <span>Published: {article.publishedDate}</span>
                {article.lastUpdatedDate && (
                  <span className="hidden sm:inline text-slate-400">• Updated: {article.lastUpdatedDate}</span>
                )}
                <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 font-semibold border border-emerald-200">
                  Peer-Reviewed Clinical Data
                </span>
              </div>
            </div>
          </div>

          {/* Key Clinical Takeaway (AI Overviews & Fast Patient Answers) */}
          <div className="p-5 rounded-2xl bg-blue-50/90 border border-blue-200 text-slate-800 text-sm leading-relaxed space-y-1.5 shadow-sm">
            <div className="flex items-center space-x-1.5 text-blue-900 font-bold text-xs uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span>Key Clinical Takeaway for Patients:</span>
            </div>
            <p className="text-slate-800 leading-relaxed font-medium">
              {article.keyTakeaway}
            </p>
          </div>

          {/* SECTION 1: Symptoms & Clinical Presentation */}
          {article.symptoms && (
            <section className="space-y-4 pt-2">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading flex items-center gap-2">
                <span>1. Symptoms & Clinical Presentation</span>
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                {article.symptoms.overview}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider text-blue-700">
                    Early Warning Signs:
                  </h3>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700">
                    {article.symptoms.earlySigns.map((sign, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                        <span>{sign}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200 space-y-2">
                  <h3 className="text-xs font-bold text-amber-900 uppercase tracking-wider">
                    Advanced Progression Signs:
                  </h3>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700">
                    {article.symptoms.advancedSigns.map((sign, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                        <span>{sign}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          )}

          {/* SECTION 2: Causes & Contributing Factors */}
          {article.causesAndFactors && (
            <section className="space-y-4 pt-4 border-t border-slate-100">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading">
                2. Causes & Biomechanical Contributing Factors
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                {article.causesAndFactors.overview}
              </p>

              <div className="space-y-2">
                <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                  Primary Biomechanical & Anatomical Causes:
                </h3>
                <ul className="space-y-2">
                  {article.causesAndFactors.primaryCauses.map((cause, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center text-[11px] font-bold shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span>{cause}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {article.causesAndFactors.contributingFactors && (
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                    Lifestyle & Environmental Contributing Triggers:
                  </h3>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-slate-600">
                    {article.causesAndFactors.contributingFactors.map((factor, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-blue-500 font-bold">•</span>
                        <span>{factor}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </section>
          )}

          {/* SECTION 3: Clinical Assessment */}
          {article.clinicalAssessment && (
            <section className="space-y-4 pt-4 border-t border-slate-100">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading flex items-center gap-2">
                <Stethoscope className="w-5 h-5 text-blue-600" />
                <span>3. Physical Assessment: What to Expect During Evaluation</span>
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                {article.clinicalAssessment.overview}
              </p>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                  Clinical Physical Tests Conducted by the Physiotherapist:
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                  {article.clinicalAssessment.clinicalTests.map((t, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-3.5 rounded-xl bg-blue-50/60 border border-blue-100 text-xs text-slate-700">
                <strong>Imaging Guidance (MRI / X-Ray):</strong> {article.clinicalAssessment.imagingGuidance}
              </div>
            </section>
          )}

          {/* SECTION 4: Treatment Options */}
          {article.treatmentOptions && (
            <section className="space-y-4 pt-4 border-t border-slate-100">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading">
                4. Treatment Pathways: Conservative Care vs Medical Options
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                {article.treatmentOptions.overview}
              </p>

              <div className="space-y-2">
                <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                  Conservative Interventions:
                </h3>
                <ul className="space-y-1.5">
                  {article.treatmentOptions.conservativeOptions.map((opt, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{opt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <strong className="text-slate-900 block mb-1">Medical & Surgical Context:</strong>
                {article.treatmentOptions.medicalOrSurgicalRole}
              </div>
            </section>
          )}

          {/* SECTION 5: The Role of Physiotherapy */}
          {article.physiotherapyRole && (
            <section className="space-y-4 pt-4 border-t border-slate-100">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading flex items-center gap-2">
                <Activity className="w-5 h-5 text-blue-600" />
                <span>5. The Role of Physiotherapy & Relief Mechanisms</span>
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                {article.physiotherapyRole.overview}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {article.physiotherapyRole.coreModalities.map((mod, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-blue-50/50 border border-blue-100 text-xs sm:text-sm text-slate-800 flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>{mod}</span>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-2xl bg-slate-900 text-white space-y-1.5">
                <span className="text-xs font-bold text-blue-400 uppercase tracking-wider block">
                  Biomechanical Mechanism of Recovery:
                </span>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {article.physiotherapyRole.biomechanicalMechanism}
                </p>
              </div>
            </section>
          )}

          {/* SECTION 6: Phased Rehabilitation */}
          {article.rehabilitation && (
            <section className="space-y-4 pt-4 border-t border-slate-100">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading">
                6. Phased Rehabilitation Milestones & Roadmap
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                {article.rehabilitation.overview}
              </p>

              <div className="space-y-4">
                {article.rehabilitation.stages.map((stage, sIdx) => (
                  <div key={sIdx} className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200/80 pb-2">
                      <h3 className="text-sm sm:text-base font-bold text-slate-900 font-heading">
                        {stage.phase}
                      </h3>
                      <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800">
                        {stage.timeframe}
                      </span>
                    </div>

                    <div className="text-xs sm:text-sm text-slate-700">
                      <strong>Clinical Goals:</strong> {stage.goals}
                    </div>

                    <div className="space-y-1">
                      <span className="text-[11px] font-bold text-slate-600 uppercase tracking-wider block">
                        Sample Therapeutic Exercises:
                      </span>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-700">
                        {stage.exercises.map((ex, eIdx) => (
                          <li key={eIdx} className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                            <span>{ex}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* SECTION 7: Prevention */}
          {article.prevention && (
            <section className="space-y-4 pt-4 border-t border-slate-100">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading">
                7. Prevention & Daily Ergonomic/Movement Habits
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                {article.prevention.overview}
              </p>

              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                {article.prevention.actionableHabits.map((habit, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{habit}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* SECTION 8: When Professional Evaluation is Appropriate */}
          {article.whenToSeekCare && (
            <section className="space-y-4 pt-4 border-t border-slate-100">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-amber-600" />
                <span>8. When to Seek Professional Physiotherapy vs Emergency Care</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Red flags */}
                <div className="p-4 rounded-2xl bg-red-50/70 border border-red-200 space-y-2">
                  <span className="text-xs font-bold text-red-900 uppercase tracking-wider block flex items-center gap-1.5">
                    <AlertTriangle className="w-4 h-4 text-red-600" />
                    Urgent Red Flags (Seek Immediate Medical Care):
                  </span>
                  <ul className="space-y-1.5 text-xs text-red-900/90 leading-relaxed">
                    {article.whenToSeekCare.urgentRedFlags.map((rf, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="text-red-600 font-bold">•</span>
                        <span>{rf}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Routine Indicators */}
                <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-200 space-y-2">
                  <span className="text-xs font-bold text-blue-900 uppercase tracking-wider block flex items-center gap-1.5">
                    <Stethoscope className="w-4 h-4 text-blue-600" />
                    Routine Clinical Indications for Physiotherapy:
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-700 leading-relaxed">
                    {article.whenToSeekCare.routineIndicators.map((ri, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="text-blue-600 font-bold">•</span>
                        <span>{ri}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          )}

          {/* SECTION 9: Questions Patients Ask (FAQs) */}
          {article.patientQuestions && article.patientQuestions.length > 0 && (
            <section className="space-y-4 pt-4 border-t border-slate-100">
              <div className="flex items-center space-x-2">
                <HelpCircle className="w-5 h-5 text-blue-600" />
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading">
                  9. Questions Patients Ask Dr. Pawan Gupta (PT)
                </h2>
              </div>

              <div className="space-y-3">
                {article.patientQuestions.map((q, qIdx) => (
                  <div key={qIdx} className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                    <h3 className="text-sm font-bold text-slate-900 flex items-start gap-2">
                      <span className="text-blue-600 font-extrabold">Q:</span>
                      <span>{q.question}</span>
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed pl-5">
                      {q.answer}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* SECTION 10: Credible Clinical References */}
          {article.clinicalReferences && article.clinicalReferences.length > 0 && (
            <section className="space-y-3 pt-4 border-t border-slate-100">
              <div className="flex items-center space-x-2">
                <FileText className="w-4 h-4 text-slate-500" />
                <h3 className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Clinical Evidence & Credible Peer-Reviewed References:
                </h3>
              </div>
              <ul className="space-y-2 text-xs text-slate-600">
                {article.clinicalReferences.map((ref, rIdx) => (
                  <li key={rIdx} className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="font-semibold text-slate-900">{ref.citation}</div>
                    <div className="text-[11px] text-slate-500 mt-0.5">
                      Journal / Source: <span className="font-medium text-slate-700">{ref.source}</span> ({ref.year})
                      {ref.urlOrIdentifier && <span> • Ref: {ref.urlOrIdentifier}</span>}
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          )}

        </article>

        {/* Next Steps & Connected Clinical Care (Cluster Linking) */}
        {article.clusterNavigation && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
            <h3 className="text-base sm:text-lg font-bold text-slate-900 font-heading">
              Connected Clinical Care & Resources
            </h3>
            <p className="text-xs text-slate-600">
              Explore the dedicated service page, condition anatomical guide, or phased rehabilitation protocol for {article.pillarName}:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <button
                onClick={() => handleConditionClick(article.clusterNavigation.relatedConditionId)}
                className="p-4 rounded-2xl bg-emerald-50/70 hover:bg-emerald-100 border border-emerald-200 text-left transition space-y-1 group"
              >
                <span className="text-[10px] font-bold text-emerald-800 uppercase block">Condition Guide</span>
                <span className="text-xs font-bold text-slate-900 group-hover:text-emerald-900 block">
                  {article.clusterNavigation.relatedConditionLabel}
                </span>
                <span className="text-[11px] text-emerald-700 font-medium inline-flex items-center gap-1">
                  View Anatomical Guide →
                </span>
              </button>

              <button
                onClick={() => handleServiceClick(article.clusterNavigation.servicePageUrl)}
                className="p-4 rounded-2xl bg-amber-50/70 hover:bg-amber-100 border border-amber-200 text-left transition space-y-1 group"
              >
                <span className="text-[10px] font-bold text-amber-900 uppercase block">Commercial Service</span>
                <span className="text-xs font-bold text-slate-900 group-hover:text-amber-950 block">
                  {article.clusterNavigation.servicePageLabel}
                </span>
                <span className="text-[11px] text-amber-800 font-medium inline-flex items-center gap-1">
                  View Clinic & Home Options →
                </span>
              </button>

              <button
                onClick={() => handleRehabClick(article.clusterNavigation.rehabPageUrl)}
                className="p-4 rounded-2xl bg-purple-50/70 hover:bg-purple-100 border border-purple-200 text-left transition space-y-1 group"
              >
                <span className="text-[10px] font-bold text-purple-900 uppercase block">Rehab Protocol</span>
                <span className="text-xs font-bold text-slate-900 group-hover:text-purple-950 block">
                  {article.clusterNavigation.rehabPageLabel}
                </span>
                <span className="text-[11px] text-purple-800 font-medium inline-flex items-center gap-1">
                  View Phased Timeline →
                </span>
              </button>
            </div>
          </div>
        )}

        {/* Dedicated Author Authority Box */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-blue-100 shadow-sm space-y-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
            <div className="flex items-center space-x-4">
              <a
                href="/dr-pawan-gupta/"
                onClick={handleDoctorProfileClick}
                className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-blue-600 shadow-md shrink-0 bg-blue-50 flex items-center justify-center hover:opacity-95 transition"
              >
                <img 
                  src={doctorPhoto} 
                  alt="Dr. Pawan Gupta (PT)" 
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = 'none';
                    if (target.parentElement) target.parentElement.textContent = 'PG';
                  }}
                />
              </a>
              <div>
                <div className="flex items-center space-x-2">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 font-heading">
                    About the Author: Dr. Pawan Gupta (PT)
                  </h3>
                  <ShieldCheck className="w-4 h-4 text-blue-600" />
                </div>
                <p className="text-xs text-blue-700 font-semibold mt-0.5">
                  Senior Consultant Musculoskeletal & Neurological Physiotherapist
                </p>
                <p className="text-[11px] text-slate-500 mt-0.5">
                  B.P.Th, M.P.Th • MIAP • Certified Manual Therapist & Dry Needling Practitioner
                </p>
              </div>
            </div>

            <a
              href="/dr-pawan-gupta/"
              onClick={handleDoctorProfileClick}
              className="px-4 py-2 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-700 font-bold text-xs border border-blue-200 transition flex items-center space-x-1.5 shrink-0"
            >
              <span>View Full Clinical Profile</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Dr. Pawan Gupta (PT) is the Clinical Director at Run To Win Healthcare in Sewri, Mumbai, with over 8 years of dedicated clinical experience restoring mobility for over 1,000 patients across orthopedic, sports, neurological, and post-surgical rehabilitation. His treatment methodology integrates meticulous clinical assessment, evidence-based manual joint mobilization, trigger point dry needling, and structured active exercise rehabilitation.
          </p>

          <div className="flex flex-wrap items-center gap-2 pt-1 text-[11px] text-slate-600">
            <span className="px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-200 font-medium">
              📍 Sewri Clinic & Mumbai Home Visits
            </span>
            <span className="px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-200 font-medium">
              ⭐ 4.9★ Patient Rated
            </span>
            <span className="px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-200 font-medium">
              🩺 1000+ Verified Patient Recoveries
            </span>
            <span className="px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-200 font-medium">
              🏆 Verified Member (IAP)
            </span>
          </div>
        </div>

        {/* Fast Doctor Booking CTA */}
        <div className="bg-slate-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-left">
            <h3 className="text-lg sm:text-xl font-bold font-heading">
              Need Personalized Clinical Guidance?
            </h3>
            <p className="text-xs text-slate-300">
              Consult with <strong className="text-white">Dr. Pawan Gupta (PT)</strong> at our Sewri Clinic or book a Doorstep Home Visit across Mumbai.
            </p>
          </div>

          <div className="flex gap-3 w-full sm:w-auto shrink-0">
            <button
              onClick={() => onOpenBooking('In-Clinic Consultation', 'Sewri Clinic', article.pillarName)}
              className="py-2.5 px-5 rounded-xl font-bold text-xs bg-blue-600 hover:bg-blue-500 text-white shadow-md transition"
            >
              Book Consultation
            </button>
            <a
              href={`https://wa.me/${CLINIC_CONTACT.whatsappNumber}?text=Hello%20Dr.%20Pawan%20Gupta,%20I%20read%20your%20clinical%20article%20on%20${encodeURIComponent(article.title)}%20and%20need%20physiotherapy%20advice.`}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2.5 px-4 rounded-xl font-semibold text-xs bg-emerald-600 hover:bg-emerald-500 text-white transition flex items-center space-x-1"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Other Clinical Guides Hub */}
        <div className="space-y-4 pt-2">
          <h3 className="text-base font-bold text-slate-900 font-heading">
            More Patient Education Guides Across Authority Pillars
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {relatedArticles.slice(0, 4).map((rel) => (
              <button
                key={rel.id}
                onClick={() => onSelectArticle(rel.id)}
                className="p-5 rounded-2xl bg-white hover:bg-blue-50/60 border border-slate-200 hover:border-blue-300 text-left transition space-y-2 group shadow-sm"
              >
                <div className="flex items-center justify-between text-[11px] text-blue-600 font-bold uppercase">
                  <span>{rel.pillarName}</span>
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

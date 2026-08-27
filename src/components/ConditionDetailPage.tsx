import React, { useEffect } from 'react';
import { ConditionGuide, CONDITION_GUIDES } from '../data/conditionGuides';
import { CLINIC_CONTACT } from '../data/clinicData';
import { SeoMeta } from './SeoMeta';
import { 
  ShieldCheck, 
  Clock, 
  Calendar, 
  Phone, 
  MessageSquare, 
  ArrowLeft, 
  AlertTriangle, 
  CheckCircle2, 
  HelpCircle, 
  Sparkles, 
  Stethoscope, 
  Activity, 
  Home, 
  ChevronRight, 
  BookOpen, 
  Award,
  ChevronDown
} from 'lucide-react';

interface ConditionDetailPageProps {
  condition: ConditionGuide;
  onBackToHome: () => void;
  onSelectCondition: (conditionId: string) => void;
  onOpenBooking: (prefillService?: string, prefillArea?: string, prefillBodyPart?: string) => void;
  onOpenAiAssistant: (context?: string) => void;
}

export const ConditionDetailPage: React.FC<ConditionDetailPageProps> = ({
  condition,
  onBackToHome,
  onSelectCondition,
  onOpenBooking,
  onOpenAiAssistant,
}) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [condition]);

  const siblingConditions = CONDITION_GUIDES.filter((c) => c.id !== condition.id);

  // Schema for MedicalCondition, MedicalTherapy, Breadcrumbs & FAQs
  const conditionSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalCondition",
        "@id": `https://runtowinphysiotherapy.com/#condition-${condition.id}`,
        "name": condition.name,
        "possibleTreatment": [
          {
            "@type": "MedicalTherapy",
            "name": "Targeted Musculoskeletal Physiotherapy",
            "description": condition.quickSummary,
          }
        ],
        "signOrSymptom": condition.symptoms.map(s => ({ "@type": "MedicalSignOrSymptom", "name": s })),
        "expectedPrognosis": condition.expectedRecovery
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
            "name": "Conditions & Rehabilitation Guides",
            "item": "https://runtowinphysiotherapy.com/#conditions"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": condition.name,
            "item": `https://runtowinphysiotherapy.com/#condition/${condition.id}`
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": condition.faqs.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      }
    ]
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 animate-in fade-in duration-200">
      <SeoMeta
        title={condition.seoTitle}
        description={condition.metaDescription}
        canonicalUrl={`https://runtowinphysiotherapy.com/#condition/${condition.id}`}
        schema={conditionSchema}
      />

      {/* Top Breadcrumb Header Bar */}
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
            <span className="text-slate-400">Conditions</span>
            <span className="text-slate-600">/</span>
            <span className="text-white font-medium truncate max-w-[200px] sm:max-w-none">{condition.name}</span>
          </div>

          <div className="flex items-center space-x-3">
            <a
              href={`tel:${CLINIC_CONTACT.phone}`}
              className="hidden sm:inline-flex items-center space-x-1 text-slate-300 hover:text-white font-semibold"
            >
              <Phone className="w-3.5 h-3.5 text-blue-400" />
              <span>{CLINIC_CONTACT.phoneDisplay}</span>
            </a>
            <button
              onClick={() => onOpenBooking('In-Clinic Consultation', 'Sewri Clinic', condition.name)}
              className="px-3 py-1 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs transition"
            >
              Book Assessment
            </button>
          </div>
        </div>
      </div>

      {/* Main Condition Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-12">
        
        {/* Hero & Clinical Review Header */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-sm space-y-6">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider">
            <Stethoscope className="w-3.5 h-3.5" />
            <span>{condition.category} Rehabilitation Guide</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading leading-tight">
            {condition.heroHeadline}
          </h1>

          {/* Quick Summary / Direct Answer for AI Overviews */}
          <div className="p-5 rounded-2xl bg-blue-50/70 border border-blue-200/80 text-slate-800 text-sm sm:text-base leading-relaxed">
            <strong className="text-blue-900 font-bold block mb-1">Clinical Overview:</strong>
            {condition.quickSummary}
          </div>

          {/* Clinical Author & E-E-A-T Review Metadata */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-100 text-xs text-slate-600">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-sm shadow-sm">
                PG
              </div>
              <div>
                <div className="flex items-center space-x-1.5 font-bold text-slate-900">
                  <span>Reviewed by {condition.reviewedBy}</span>
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                </div>
                <span className="text-slate-500 text-[11px]">{condition.reviewerCredentials}</span>
              </div>
            </div>

            <div className="flex items-center space-x-4 text-[11px]">
              <span className="flex items-center space-x-1 text-slate-500">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                <span>Last Updated: {condition.lastUpdated}</span>
              </span>
              <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 font-semibold border border-emerald-200">
                Evidence-Based Protocol
              </span>
            </div>
          </div>
        </div>

        {/* 2-Column Core Anatomy & Symptoms vs Causes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Left: What is it & Symptoms */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm space-y-6">
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-heading mb-2">
                What is {condition.name}?
              </h2>
              <p className="text-sm text-slate-700 leading-relaxed">
                {condition.whatIsIt}
              </p>
            </div>

            <div>
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">
                Common Symptoms
              </h3>
              <ul className="space-y-2.5">
                {condition.symptoms.map((symptom, idx) => (
                  <li key={idx} className="flex items-start space-x-2.5 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>{symptom}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: Causes & Diagnostic Clinical Tests */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm space-y-6">
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-heading mb-2">
                Common Causes & Risk Factors
              </h2>
              <ul className="space-y-2.5">
                {condition.commonCauses.map((cause, idx) => (
                  <li key={idx} className="flex items-start space-x-2.5 text-xs sm:text-sm text-slate-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 mt-2"></span>
                    <span>{cause}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-slate-100">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">
                How Physiotherapy Assessment Works
              </h3>
              <ul className="space-y-2.5">
                {condition.clinicalAssessment.map((test, idx) => (
                  <li key={idx} className="flex items-start space-x-2.5 text-xs sm:text-sm text-slate-700">
                    <Activity className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{test}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* Treatment Approach & Structured Phase-Wise Recovery */}
        <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 shadow-xl space-y-8">
          <div>
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Evidence-Based Rehabilitation</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white">
              How Physiotherapy Treats {condition.name}
            </h2>
            <p className="mt-2 text-sm text-slate-300">
              Our clinical protocol combines manual therapy, neural decompression, and active muscular retraining tailored to your recovery stage.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {condition.physioTreatmentApproach.map((approach, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-slate-800/90 border border-slate-700 text-xs sm:text-sm text-slate-200 flex items-start space-x-3">
                <span className="w-6 h-6 rounded-lg bg-blue-600/30 text-blue-400 font-bold flex items-center justify-center shrink-0 text-xs">
                  {idx + 1}
                </span>
                <span>{approach}</span>
              </div>
            ))}
          </div>

          {/* Phase progression cards */}
          <div className="pt-6 border-t border-slate-800">
            <h3 className="text-base font-bold text-white font-heading mb-4">
              Structured Recovery Progression Pathway
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {condition.rehabPhases.map((phase, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-blue-400 uppercase">{phase.duration}</span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-400">Step {idx + 1}</span>
                  </div>
                  <h4 className="text-sm font-bold text-white font-heading">{phase.phase}</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">{phase.focus}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Expected Recovery Box */}
          <div className="p-4 rounded-2xl bg-blue-950/60 border border-blue-800/80 text-xs sm:text-sm text-blue-200">
            <strong className="text-white font-bold block mb-1">Expected Recovery Timeline:</strong>
            {condition.expectedRecovery}
          </div>
        </div>

        {/* Red Flags Alert Box: When to seek immediate medical evaluation */}
        <div className="bg-amber-50 rounded-3xl p-6 sm:p-8 border border-amber-200 space-y-4">
          <div className="flex items-center space-x-2 text-amber-900 font-bold text-base font-heading">
            <AlertTriangle className="w-5 h-5 text-amber-600" />
            <span>When Immediate Medical Evaluation is Necessary (Red Flags)</span>
          </div>
          <p className="text-xs sm:text-sm text-amber-900 leading-relaxed">
            While most musculoskeletal conditions respond well to conservative physiotherapy, consult an orthopedic specialist or emergency physician immediately if you experience:
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
            {condition.redFlags.map((flag, idx) => (
              <li key={idx} className="flex items-start space-x-2 text-xs sm:text-sm text-amber-900 font-medium">
                <span className="text-amber-600 font-bold">•</span>
                <span>{flag}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Home Visit Suitability & Fast Booking CTA */}
        <div className="bg-gradient-to-r from-blue-900 to-indigo-950 rounded-3xl p-6 sm:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-3 max-w-2xl text-left">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider">
              <Home className="w-3.5 h-3.5" />
              <span>Doorstep Mumbai Home Visits Available</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-heading">
              Home Physiotherapy for {condition.name} in Mumbai
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {condition.homeVisitSuitability}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
            <button
              onClick={() => onOpenBooking('Home Visit Physiotherapy (Mumbai)', 'Mumbai Residence', condition.name)}
              className="py-3 px-6 rounded-xl font-bold text-xs bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/30 transition flex items-center justify-center space-x-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Home Visit</span>
            </button>
            <a
              href={`https://wa.me/${CLINIC_CONTACT.whatsappNumber}?text=Hello%20Dr.%20Pawan%20Gupta,%20I%20would%20like%20to%20consult%20for%20${encodeURIComponent(condition.name)}.`}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-5 rounded-xl font-semibold text-xs bg-emerald-600 hover:bg-emerald-500 text-white transition flex items-center justify-center space-x-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Doctor</span>
            </a>
          </div>
        </div>

        {/* Medically Reviewed FAQs */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm space-y-6">
          <div className="flex items-center space-x-2">
            <HelpCircle className="w-5 h-5 text-blue-600" />
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-heading">
              Frequently Asked Questions: {condition.name}
            </h2>
          </div>

          <div className="space-y-4">
            {condition.faqs.map((faq, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                <h3 className="text-sm sm:text-base font-bold text-slate-900">
                  {faq.question}
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Sibling Condition Guides Link Hub */}
        <div className="space-y-4 pt-4">
          <h3 className="text-base font-bold text-slate-900 font-heading">
            Explore Other Physiotherapy Conditions Treated in Mumbai
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {siblingConditions.map((sib) => (
              <button
                key={sib.id}
                onClick={() => onSelectCondition(sib.id)}
                className="p-4 rounded-2xl bg-white hover:bg-blue-50 border border-slate-200 hover:border-blue-300 text-left transition flex items-center justify-between group shadow-sm"
              >
                <div>
                  <span className="text-[10px] font-bold text-blue-600 uppercase tracking-wider block">{sib.category}</span>
                  <span className="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-blue-700">{sib.name}</span>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition" />
              </button>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

import React, { useState } from 'react';
import {
  HeartPulse,
  ShieldCheck,
  Calendar,
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  ArrowRight,
  AlertTriangle,
  CheckCircle2,
  ChevronRight,
  ChevronDown,
  Activity,
  Award,
  BookOpen,
  HelpCircle,
  Stethoscope,
  Target,
  Sparkles,
  Layers,
  ArrowLeft
} from 'lucide-react';
import { RehabilitationAuthorityGuide } from '../data/conditionTypes';
import { REHABILITATION_AUTHORITY_GUIDES } from '../data/rehabilitationAuthorityData';
import { CLINIC_CONTACT } from '../data/clinicData';
import { SeoMeta } from './SeoMeta';
import { Breadcrumbs } from './Breadcrumbs';

interface RehabilitationDetailPageProps {
  guide: RehabilitationAuthorityGuide;
  onBackToHub: () => void;
  onSelectRehabGuide: (id: string) => void;
  onSelectService: (serviceKey: string) => void;
  onSelectCondition: (conditionId: string) => void;
  onOpenBooking: (serviceName?: string, areaName?: string) => void;
  onOpenAiAssistant: (initialQuery?: string) => void;
  onNavigatePage?: (page: string) => void;
}

export const RehabilitationDetailPage: React.FC<RehabilitationDetailPageProps> = ({
  guide,
  onBackToHub,
  onSelectRehabGuide,
  onSelectService,
  onSelectCondition,
  onOpenBooking,
  onOpenAiAssistant,
  onNavigatePage
}) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Find other programs in the same pillar
  const siblingPrograms = REHABILITATION_AUTHORITY_GUIDES.filter(
    (g) => g.pillar === guide.pillar && g.id !== guide.id
  );

  // SEO Schema Generation (MedicalTherapy + FAQPage + BreadcrumbList)
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "@id": `https://runtowinphysiotherapy.com/rehabilitation/${guide.id}#webpage`,
        "url": `https://runtowinphysiotherapy.com/rehabilitation/${guide.id}`,
        "name": guide.h1,
        "description": guide.metaDescription,
        "isPartOf": {
          "@id": "https://runtowinphysiotherapy.com/#website"
        },
        "about": {
          "@type": "MedicalTherapy",
          "name": guide.name,
          "description": guide.quickSummary,
          "provider": {
            "@id": "https://runtowinphysiotherapy.com/#clinic"
          }
        },
        "author": {
          "@type": "Physician",
          "@id": "https://runtowinphysiotherapy.com/#dr-pawan-gupta",
          "name": guide.doctorClinicalInfo.name,
          "url": "https://runtowinphysiotherapy.com/dr-pawan-gupta/",
          "medicalSpecialty": "Physiotherapy"
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
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": guide.name,
            "item": `https://runtowinphysiotherapy.com/rehabilitation/${guide.id}`
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": guide.questionsPatientsAsk.map((faq) => ({
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

  const pillarBadgeColor =
    guide.pillar === 'NEURO'
      ? 'bg-purple-100 text-purple-800 border-purple-200'
      : guide.pillar === 'SPORTS'
      ? 'bg-amber-100 text-amber-900 border-amber-200'
      : 'bg-emerald-100 text-emerald-900 border-emerald-200';

  const pillarHeroGradient =
    guide.pillar === 'NEURO'
      ? 'from-slate-950 via-purple-950/80 to-slate-900'
      : guide.pillar === 'SPORTS'
      ? 'from-slate-950 via-blue-950/80 to-slate-900'
      : 'from-slate-950 via-teal-950/80 to-slate-900';

  return (
    <article className="bg-slate-50 min-h-screen text-slate-900 animate-in fade-in duration-200">
      <SeoMeta
        title={guide.seoTitle}
        description={guide.metaDescription}
        canonicalUrl={`https://runtowinphysiotherapy.com/rehabilitation/${guide.id}`}
        schema={schema}
      />

      {/* Top Breadcrumb Navigation */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <Breadcrumbs
            className="!py-0 !px-0 !bg-transparent !border-0 text-xs"
            onHomeClick={onBackToHub}
            items={[
              { label: 'Rehabilitation Hub', onClick: onBackToHub },
              { label: `${guide.pillar} Rehabilitation` },
              { label: guide.name, current: true }
            ]}
          />
        </div>
      </div>

      {/* Hero Header */}
      <header className={`bg-gradient-to-br ${pillarHeroGradient} text-white py-14 sm:py-18 relative overflow-hidden border-b border-slate-800`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            
            <div className="flex flex-wrap items-center gap-2.5 mb-4">
              <span className={`inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${pillarBadgeColor}`}>
                <HeartPulse className="w-3.5 h-3.5" />
                <span>{guide.pillar} Rehabilitation Authority</span>
              </span>
              <span className="text-xs text-slate-300 flex items-center space-x-1 bg-white/10 px-3 py-1 rounded-full border border-white/15">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Evidence-Based Clinical Protocol</span>
              </span>
            </div>

            {/* H1 Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-heading leading-tight mb-4">
              {guide.h1}
            </h1>

            {/* Quick Answer Summary */}
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed mb-6 font-normal">
              {guide.quickSummary}
            </p>

            {/* Clinical Review Bar */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300 py-3 border-y border-white/15 mb-8">
              <div className="flex items-center space-x-2">
                <Stethoscope className="w-4 h-4 text-blue-400" />
                <span>
                  Clinical Lead: <strong className="text-white">{guide.doctorClinicalInfo.name}</strong>
                </span>
              </div>
              <span className="hidden sm:inline text-slate-500">•</span>
              <div className="flex items-center space-x-1.5">
                <Award className="w-4 h-4 text-emerald-400" />
                <span>{guide.doctorClinicalInfo.credentials}</span>
              </div>
              <span className="hidden sm:inline text-slate-500">•</span>
              <div className="flex items-center space-x-1.5 text-slate-300">
                <Clock className="w-3.5 h-3.5 text-blue-300" />
                <span>{guide.doctorClinicalInfo.reviewedDate}</span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => onOpenBooking(guide.name, 'Sewri Clinic Consultation')}
                className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-lg shadow-blue-900/40 transition flex items-center space-x-2"
              >
                <Calendar className="w-4 h-4" />
                <span>{guide.bookingCta.clinicLabel}</span>
              </button>

              <button
                onClick={() => onOpenBooking(guide.name, 'Home Visit across Mumbai')}
                className="px-5 py-3.5 rounded-xl bg-white/15 hover:bg-white/25 text-white font-bold text-sm border border-white/20 transition flex items-center space-x-2"
              >
                <MapPin className="w-4 h-4 text-emerald-400" />
                <span>{guide.bookingCta.homeVisitLabel}</span>
              </button>

              <a
                href={`https://wa.me/${CLINIC_CONTACT.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(guide.bookingCta.whatsappText)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition flex items-center space-x-2 shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Consult</span>
              </a>
            </div>

          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

          {/* Left / Main Column */}
          <div className="lg:col-span-8 space-y-12">

            {/* Mandatory Clinical & Ethical Notice Banner */}
            <section className="bg-amber-50/90 border border-amber-200 rounded-3xl p-6 sm:p-7 text-amber-950 shadow-sm">
              <div className="flex items-start space-x-3.5">
                <AlertTriangle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                <div className="space-y-2">
                  <h2 className="text-sm font-bold uppercase tracking-wider text-amber-900 font-heading">
                    Clinical Governance & Ethical Rehabilitation Notice
                  </h2>
                  <p className="text-xs sm:text-sm text-amber-900/90 leading-relaxed">
                    {guide.safetyConsiderations.ethicalNotice}
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-amber-800 pt-2 border-t border-amber-200/60">
                    <li className="flex items-center space-x-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
                      <span>Recovery is criteria-based, not calendar-driven</span>
                    </li>
                    <li className="flex items-center space-x-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
                      <span>Individual outcomes vary; no guarantees made</span>
                    </li>
                    <li className="flex items-center space-x-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
                      <span>Surgeon operative protocols strictly adhered to</span>
                    </li>
                    <li className="flex items-center space-x-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
                      <span>Personal clinical examination required</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 1: Introduction */}
            <section className="bg-white rounded-3xl p-7 sm:p-9 border border-slate-200/90 shadow-sm">
              <div className="flex items-center space-x-2 text-xs font-bold text-blue-600 uppercase tracking-wider mb-3">
                <BookOpen className="w-4 h-4" />
                <span>Clinical Overview</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-slate-900 mb-4">
                Understanding {guide.name}
              </h2>
              <div className="prose prose-slate max-w-none text-slate-700 text-sm sm:text-base leading-relaxed space-y-4">
                <p>{guide.introduction}</p>
              </div>
            </section>

            {/* Section 2: Who May Benefit */}
            <section className="bg-white rounded-3xl p-7 sm:p-9 border border-slate-200/90 shadow-sm">
              <div className="flex items-center space-x-2 text-xs font-bold text-emerald-600 uppercase tracking-wider mb-3">
                <Target className="w-4 h-4" />
                <span>Clinical Candidacy</span>
              </div>
              <h2 className="text-2xl font-bold font-heading text-slate-900 mb-4">
                Who May Benefit from this Rehabilitation Program
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                This structured clinical pathway is tailored for individuals presenting with the following indications:
              </p>
              <ul className="space-y-3">
                {guide.whoMayBenefit.map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-3 bg-slate-50 p-3.5 rounded-2xl border border-slate-100">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Section 3: Assessment */}
            <section className="bg-white rounded-3xl p-7 sm:p-9 border border-slate-200/90 shadow-sm">
              <div className="flex items-center space-x-2 text-xs font-bold text-blue-600 uppercase tracking-wider mb-3">
                <Stethoscope className="w-4 h-4" />
                <span>Comprehensive Clinical Assessment</span>
              </div>
              <h2 className="text-2xl font-bold font-heading text-slate-900 mb-3">
                Pre-Rehabilitation Evaluation Process
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                {guide.assessment.overview}
              </p>

              <div className="space-y-6">
                {/* Clinical Exam */}
                <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3 flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-blue-600" />
                    <span>Clinical Examination & Subjective History</span>
                  </h3>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                    {guide.assessment.clinicalExamination.map((test, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <span className="text-blue-500 font-bold">•</span>
                        <span>{test}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Specialized Tests */}
                <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3 flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-indigo-600" />
                    <span>Specialized Physical & Orthopedic Tests</span>
                  </h3>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                    {guide.assessment.specializedTests.map((test, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <span className="text-indigo-500 font-bold">•</span>
                        <span>{test}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Functional Baselines */}
                <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3 flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-600" />
                    <span>Functional Baselines & Movement Screening</span>
                  </h3>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                    {guide.assessment.functionalBaselines.map((test, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <span className="text-emerald-500 font-bold">•</span>
                        <span>{test}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 4: Rehabilitation Goals */}
            <section className="bg-white rounded-3xl p-7 sm:p-9 border border-slate-200/90 shadow-sm">
              <div className="flex items-center space-x-2 text-xs font-bold text-blue-600 uppercase tracking-wider mb-3">
                <Target className="w-4 h-4" />
                <span>Phased Milestones</span>
              </div>
              <h2 className="text-2xl font-bold font-heading text-slate-900 mb-6">
                Structured Rehabilitation Goals
              </h2>

              <div className="space-y-6">
                {guide.rehabilitationGoals.map((group, idx) => (
                  <div key={idx} className="border border-slate-200 rounded-2xl p-5 relative overflow-hidden bg-white">
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-xs font-extrabold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                        {group.timeframe}
                      </span>
                      <span className="text-[11px] font-semibold text-slate-400">
                        Phase {idx + 1}
                      </span>
                    </div>

                    <ul className="space-y-2 mt-3 text-xs sm:text-sm text-slate-700">
                      {group.goals.map((goal, gIdx) => (
                        <li key={gIdx} className="flex items-start space-x-2.5">
                          <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                          <span>{goal}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 5: Typical Rehabilitation Components */}
            <section className="bg-white rounded-3xl p-7 sm:p-9 border border-slate-200/90 shadow-sm">
              <div className="flex items-center space-x-2 text-xs font-bold text-blue-600 uppercase tracking-wider mb-3">
                <Layers className="w-4 h-4" />
                <span>Treatment Modalities & Interventions</span>
              </div>
              <h2 className="text-2xl font-bold font-heading text-slate-900 mb-6">
                Typical Rehabilitation Components
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {guide.typicalComponents.map((comp, idx) => (
                  <div key={idx} className="bg-slate-50 rounded-2xl p-5 border border-slate-200/80 flex flex-col justify-between">
                    <div>
                      <h3 className="text-base font-bold text-slate-900 font-heading mb-2">
                        {comp.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                        {comp.description}
                      </p>
                    </div>
                    <div className="pt-3 border-t border-slate-200/60 text-[11px] text-blue-700 font-semibold flex items-center space-x-1.5">
                      <Activity className="w-3.5 h-3.5 shrink-0" />
                      <span>Purpose: {comp.clinicalPurpose}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 6: Progress Monitoring */}
            <section className="bg-white rounded-3xl p-7 sm:p-9 border border-slate-200/90 shadow-sm">
              <div className="flex items-center space-x-2 text-xs font-bold text-blue-600 uppercase tracking-wider mb-3">
                <Activity className="w-4 h-4" />
                <span>Criteria-Based Milestone Tracking</span>
              </div>
              <h2 className="text-2xl font-bold font-heading text-slate-900 mb-3">
                Progress Monitoring & Criteria for Advancement
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                {guide.progressMonitoring.overview}
              </p>

              <div className="space-y-4 mb-6">
                {guide.progressMonitoring.milestones.map((ms, idx) => (
                  <div key={idx} className="bg-slate-50 rounded-2xl p-4.5 border border-slate-200/90">
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-900">
                        {ms.metric}
                      </span>
                      <span className="text-[11px] font-medium text-slate-500 bg-white px-2.5 py-0.5 rounded-full border border-slate-200">
                        Method: {ms.testingMethod}
                      </span>
                    </div>
                    <div className="text-xs sm:text-sm text-slate-700 mt-2 flex items-start space-x-2">
                      <span className="font-semibold text-emerald-600 text-xs shrink-0 mt-0.5">Clearance:</span>
                      <span>{ms.advancementCriteria}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-100 text-xs text-blue-900 font-medium">
                <strong>Progression Rule:</strong> {guide.progressMonitoring.criteriaRule}
              </div>
            </section>

            {/* Section 7: Safety Considerations */}
            <section className="bg-white rounded-3xl p-7 sm:p-9 border border-red-100 shadow-sm">
              <div className="flex items-center space-x-2 text-xs font-bold text-red-600 uppercase tracking-wider mb-3">
                <AlertTriangle className="w-4 h-4" />
                <span>Patient Safety & Red Flags</span>
              </div>
              <h2 className="text-2xl font-bold font-heading text-slate-900 mb-6">
                Safety Considerations & Red Flags
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Precautions */}
                <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3 flex items-center space-x-1.5">
                    <ShieldCheck className="w-4 h-4 text-blue-600" />
                    <span>Clinical Precautions</span>
                  </h3>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                    {guide.safetyConsiderations.precautions.map((prec, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <span className="text-blue-500 font-bold">•</span>
                        <span>{prec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Red Flags */}
                <div className="bg-red-50/60 p-5 rounded-2xl border border-red-200/80">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-red-900 mb-3 flex items-center space-x-1.5">
                    <AlertTriangle className="w-4 h-4 text-red-600" />
                    <span>Immediate Medical Red Flags</span>
                  </h3>
                  <ul className="space-y-2 text-xs sm:text-sm text-red-900">
                    {guide.safetyConsiderations.redFlags.map((rf, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <span className="text-red-500 font-bold">•</span>
                        <span>{rf}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-100 text-slate-600 text-xs leading-relaxed">
                If you experience any red flag symptoms, contact emergency medical services or your physician immediately. Physical therapy is ceased until medical evaluation is completed.
              </div>
            </section>

            {/* Section 8: Questions Patients Commonly Ask (FAQs) */}
            <section className="bg-white rounded-3xl p-7 sm:p-9 border border-slate-200/90 shadow-sm">
              <div className="flex items-center space-x-2 text-xs font-bold text-blue-600 uppercase tracking-wider mb-3">
                <HelpCircle className="w-4 h-4" />
                <span>Frequently Asked Questions</span>
              </div>
              <h2 className="text-2xl font-bold font-heading text-slate-900 mb-6">
                Questions Patients Commonly Ask
              </h2>

              <div className="space-y-3">
                {guide.questionsPatientsAsk.map((faq, idx) => {
                  const isOpen = openFaqIndex === idx;
                  return (
                    <div
                      key={idx}
                      className="border border-slate-200 rounded-2xl overflow-hidden transition-all bg-white"
                    >
                      <button
                        onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                        className="w-full text-left p-5 font-bold text-sm sm:text-base text-slate-900 flex items-center justify-between gap-4 hover:bg-slate-50 transition"
                      >
                        <span>{faq.question}</span>
                        <ChevronDown
                          className={`w-4 h-4 text-slate-400 transition-transform ${
                            isOpen ? 'rotate-180 text-blue-600' : ''
                          }`}
                        />
                      </button>
                      {isOpen && (
                        <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Section 9: Internal Linking & Care Pathways */}
            <section className="bg-white rounded-3xl p-7 sm:p-9 border border-slate-200/90 shadow-sm">
              <div className="flex items-center space-x-2 text-xs font-bold text-blue-600 uppercase tracking-wider mb-3">
                <ArrowRight className="w-4 h-4" />
                <span>Internal Care Pathways</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 mb-6">
                Related Services & Conditions
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Related Conditions */}
                <div className="space-y-3">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Related Clinical Conditions
                  </h3>
                  <div className="space-y-2">
                    {guide.relatedConditions.map((cond, idx) => (
                      <button
                        key={idx}
                        onClick={() => onSelectCondition(cond.conditionId)}
                        className="w-full text-left p-3.5 rounded-2xl bg-slate-50 hover:bg-blue-50 border border-slate-200/80 transition flex items-center justify-between group"
                      >
                        <div>
                          <div className="text-xs font-bold text-slate-900 group-hover:text-blue-700">
                            {cond.name}
                          </div>
                          <div className="text-[11px] text-slate-500 line-clamp-1">
                            {cond.reason}
                          </div>
                        </div>
                        <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 shrink-0 ml-2" />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Related Services */}
                <div className="space-y-3">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Related Physiotherapy Services
                  </h3>
                  <div className="space-y-2">
                    {guide.relatedServices.map((svc, idx) => (
                      <button
                        key={idx}
                        onClick={() => onSelectService(svc.pageKey)}
                        className="w-full text-left p-3.5 rounded-2xl bg-slate-50 hover:bg-blue-50 border border-slate-200/80 transition flex items-center justify-between group"
                      >
                        <div>
                          <div className="text-xs font-bold text-slate-900 group-hover:text-blue-700">
                            {svc.name}
                          </div>
                          <div className="text-[11px] text-slate-500 line-clamp-1">
                            {svc.reason}
                          </div>
                        </div>
                        <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 shrink-0 ml-2" />
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sibling Programs in Pillar */}
              {siblingPrograms.length > 0 && (
                <div className="mt-8 pt-6 border-t border-slate-100">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                    Other {guide.pillar} Rehabilitation Programs
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                    {siblingPrograms.map((sib) => (
                      <button
                        key={sib.id}
                        onClick={() => onSelectRehabGuide(sib.id)}
                        className="text-left p-3 rounded-xl bg-slate-50 hover:bg-blue-50 border border-slate-200 transition group"
                      >
                        <div className="text-xs font-bold text-slate-900 group-hover:text-blue-700 line-clamp-1">
                          {sib.name}
                        </div>
                        <div className="text-[10px] text-slate-500 flex items-center space-x-1 mt-1">
                          <span>View Protocol</span>
                          <ChevronRight className="w-3 h-3 text-slate-400 group-hover:text-blue-600" />
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </section>

          </div>

          {/* Right Column: Sticky Sidebar & Doctor Bio */}
          <div className="lg:col-span-4 space-y-6">

            {/* Doctor / Clinical Information Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm sticky top-6">
              <div className="flex items-center space-x-3 mb-4">
                <a
                  href="/dr-pawan-gupta/"
                  onClick={(e) => {
                    e.preventDefault();
                    if (onNavigatePage) onNavigatePage('dr-pawan-gupta');
                    else window.location.hash = '#dr-pawan-gupta';
                  }}
                  className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center font-bold text-lg shadow-md shadow-blue-200 shrink-0 hover:bg-blue-700 transition"
                  title="View Dr. Pawan Gupta (PT) profile"
                >
                  PG
                </a>
                <div>
                  <h3 className="text-base font-bold text-slate-900 font-heading">
                    <a
                      href="/dr-pawan-gupta/"
                      onClick={(e) => {
                        e.preventDefault();
                        if (onNavigatePage) onNavigatePage('dr-pawan-gupta');
                        else window.location.hash = '#dr-pawan-gupta';
                      }}
                      className="hover:text-blue-700 transition"
                    >
                      {guide.doctorClinicalInfo.name}
                    </a>
                  </h3>
                  <p className="text-xs text-blue-700 font-semibold">
                    {guide.doctorClinicalInfo.credentials}
                  </p>
                </div>
              </div>

              <div className="space-y-3 text-xs text-slate-600 pb-5 border-b border-slate-100">
                <p className="leading-relaxed">
                  {guide.doctorClinicalInfo.experienceSummary}
                </p>
                <div className="flex items-start space-x-2 text-[11px] text-slate-500">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Registration: {guide.doctorClinicalInfo.registration}</span>
                </div>
                <div className="flex items-start space-x-2 text-[11px] text-slate-500">
                  <MapPin className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                  <span>Clinic: {guide.doctorClinicalInfo.clinicLocation}</span>
                </div>
                <div className="flex items-start space-x-2 text-[11px] text-slate-500">
                  <HeartPulse className="w-3.5 h-3.5 text-purple-600 shrink-0 mt-0.5" />
                  <span>Home Visits: {guide.doctorClinicalInfo.homeVisitsCoverage}</span>
                </div>

                <a
                  href="/dr-pawan-gupta/"
                  onClick={(e) => {
                    e.preventDefault();
                    if (onNavigatePage) onNavigatePage('dr-pawan-gupta');
                    else window.location.hash = '#dr-pawan-gupta';
                  }}
                  className="inline-flex items-center space-x-1.5 text-xs text-blue-700 hover:text-blue-800 font-bold pt-1"
                >
                  <span>View Full Clinical Credentials & Background</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Booking CTA Section */}
              <div className="pt-5 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                  Book Clinical Evaluation
                </h4>
                <p className="text-xs text-slate-500">
                  {guide.bookingCta.description}
                </p>

                <button
                  onClick={() => onOpenBooking(guide.name, 'Sewri Clinic Consultation')}
                  className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md transition flex items-center justify-center space-x-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>{guide.bookingCta.clinicLabel}</span>
                </button>

                <button
                  onClick={() => onOpenBooking(guide.name, 'Home Visit across Mumbai')}
                  className="w-full py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition flex items-center justify-center space-x-2"
                >
                  <MapPin className="w-4 h-4 text-emerald-400" />
                  <span>{guide.bookingCta.homeVisitLabel}</span>
                </button>

                <a
                  href={`tel:${CLINIC_CONTACT.phone}`}
                  className="w-full py-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 font-bold text-xs transition flex items-center justify-center space-x-2"
                >
                  <Phone className="w-3.5 h-3.5 text-blue-600" />
                  <span>Call {CLINIC_CONTACT.phone}</span>
                </a>

                {/* AI Assistant Hook */}
                <button
                  onClick={() => onOpenAiAssistant(`I have a question regarding ${guide.name} rehabilitation.`)}
                  className="w-full py-2.5 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-800 border border-blue-200 font-semibold text-xs transition flex items-center justify-center space-x-1.5"
                >
                  <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                  <span>Ask AI Assistant About This Program</span>
                </button>
              </div>

              {/* Return to Hub */}
              <div className="mt-6 pt-4 border-t border-slate-100 text-center">
                <button
                  onClick={onBackToHub}
                  className="text-xs font-semibold text-slate-500 hover:text-slate-800 inline-flex items-center space-x-1 transition"
                >
                  <ArrowLeft className="w-3.5 h-3.5 mr-1" />
                  <span>Return to Rehabilitation Hub</span>
                </button>
              </div>

            </div>

          </div>

        </div>
      </div>
    </article>
  );
};

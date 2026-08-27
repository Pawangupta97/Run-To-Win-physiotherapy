import React, { useState } from 'react';
import { 
  Activity, 
  Sparkles, 
  Calendar, 
  Clock, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Zap,
  Info
} from 'lucide-react';
import { BODY_REGIONS } from '../data/clinicData';
import { BodyRegion } from '../types';

interface InteractiveBodyMapProps {
  selectedRegionId: string;
  onSelectRegion: (id: string) => void;
  onOpenBooking: (prefillService?: string, prefillArea?: string, prefillBodyPart?: string) => void;
  onOpenAiAssistantWithContext: (context: string) => void;
  onSelectConditionGuide?: (conditionId: string) => void;
}

export const InteractiveBodyMap: React.FC<InteractiveBodyMapProps> = ({
  selectedRegionId,
  onSelectRegion,
  onOpenBooking,
  onOpenAiAssistantWithContext,
  onSelectConditionGuide,
}) => {
  const currentRegion = BODY_REGIONS.find((r) => r.id === selectedRegionId) || BODY_REGIONS[2]; // Lower back default

  // Map body region id to condition guide id
  const regionToConditionId: Record<string, string> = {
    'cervical-neck': 'cervical-neck',
    'shoulder-arm': 'shoulder',
    'lumbar-spine': 'lower-back',
    'knee-joint': 'knee',
    'posture-ergonomics': 'posture-ergonomics',
    'neurological': 'neuro-stroke',
  };

  const targetConditionGuide = regionToConditionId[currentRegion.id];

  return (
    <section id="body-map" className="py-16 md:py-24 bg-white border-b border-slate-200 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3 border border-blue-200">
            <Activity className="w-3.5 h-3.5" />
            <span>Interactive Assessment</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
            Where is Your Pain Located?
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Select an anatomical region to explore common musculoskeletal conditions, evidence-based physiotherapy protocols by <strong className="text-slate-800">Dr Pawan Gupta (PT)</strong>, and expected recovery milestones.
          </p>
        </div>

        {/* Interactive Layout: Anatomical Selector on Left, Detailed Clinical Insights on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Body Map Navigation Buttons & Diagram */}
          <div className="lg:col-span-5 bg-slate-50/70 rounded-3xl border border-slate-200 p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-200">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Select Anatomical Region ({BODY_REGIONS.length} Areas)
              </span>
              <span className="text-xs text-blue-700 font-semibold flex items-center space-x-1">
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-ping inline-block"></span>
                <span>Click to Inspect</span>
              </span>
            </div>

            {/* Quick Grid of Body Region Buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-2.5 mb-6">
              {BODY_REGIONS.map((region) => {
                const isActive = region.id === currentRegion.id;
                return (
                  <button
                    key={region.id}
                    onClick={() => onSelectRegion(region.id)}
                    className={`text-left p-3 rounded-xl text-xs font-semibold transition-all duration-200 flex items-center justify-between border ${
                      isActive
                        ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-500/20 translate-x-1'
                        : 'bg-white text-slate-700 hover:bg-blue-50 hover:text-blue-800 border-slate-200'
                    }`}
                  >
                    <span>{region.shortLabel}</span>
                    <span
                      className={`w-2 h-2 rounded-full ${
                        isActive ? 'bg-white' : 'bg-slate-300'
                      }`}
                    ></span>
                  </button>
                );
              })}
            </div>

            {/* Visual Anatomical Diagram Card with Hotspots */}
            <div className="relative bg-slate-900 rounded-2xl p-6 text-center text-white overflow-hidden border border-slate-800">
              <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px] opacity-15"></div>
              
              <div className="relative z-10 space-y-3">
                <div className="w-12 h-12 mx-auto rounded-full bg-blue-500/20 border border-blue-500/40 flex items-center justify-center text-blue-400">
                  <Activity className="w-6 h-6 animate-pulse" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white font-heading">
                    Active Focus: {currentRegion.name}
                  </h4>
                  <p className="text-xs text-slate-300 mt-1">
                    Specialized physiotherapy protocol designed by Dr Pawan Gupta (PT).
                  </p>
                </div>
                <div className="pt-2">
                  <button
                    onClick={() => onOpenAiAssistantWithContext(currentRegion.name)}
                    className="w-full py-2.5 px-4 rounded-xl bg-slate-800 border border-blue-500/40 hover:bg-slate-700 text-blue-300 text-xs font-semibold transition flex items-center justify-center space-x-1.5"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                    <span>Ask AI Assistant About {currentRegion.shortLabel}</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-4 p-3.5 bg-amber-50 rounded-2xl border border-amber-200 text-amber-900 text-xs flex items-start space-x-2">
              <Info className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <span>
                <strong>Red Flag Notice:</strong> Severe sudden numbness, loss of motor control, or unbearable acute pain requires immediate emergency evaluation.
              </span>
            </div>

          </div>

          {/* Right Column: Detailed Clinical Evaluation & Recovery Roadmap for Selected Region */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
            
            {/* Header of Selected Region */}
            <div className="border-b border-slate-100 pb-5">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-100">
                  Clinical Protocol
                </span>
                <span className="text-xs font-semibold text-slate-500 flex items-center space-x-1">
                  <Clock className="w-3.5 h-3.5 text-blue-600" />
                  <span>Timeline: {currentRegion.expectedRecovery}</span>
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
                {currentRegion.name}
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Targeted evaluation & non-surgical rehabilitation by Dr Pawan Gupta (PT), Mumbai
              </p>
            </div>

            {/* Common Conditions Treated */}
            <div>
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2.5 flex items-center space-x-1.5">
                <Activity className="w-4 h-4 text-blue-600" />
                <span>Frequently Treated Pathologies:</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {currentRegion.commonConditions.map((condition) => (
                  <span
                    key={condition}
                    className="px-3 py-1.5 rounded-xl bg-slate-100 text-slate-800 text-xs font-medium border border-slate-200"
                  >
                    {condition}
                  </span>
                ))}
              </div>
            </div>

            {/* Clinical Symptoms */}
            <div>
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2.5">
                Typical Symptoms & Patient Complaints:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {currentRegion.symptoms.map((symptom, idx) => (
                  <div key={idx} className="flex items-start space-x-2 text-xs text-slate-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5 shrink-0"></span>
                    <span>{symptom}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Dr Pawan's Physiotherapy Approach */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center space-x-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Dr Pawan Gupta's Multi-Modal Treatment Plan:</span>
              </h4>
              <div className="space-y-2">
                {currentRegion.physioApproach.map((step, idx) => (
                  <div key={idx} className="flex items-start space-x-2.5 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Recommended Advanced Modalities */}
            <div className="p-4 rounded-2xl bg-emerald-50/80 border border-emerald-200 flex items-center space-x-3">
              <div className="p-2 rounded-xl bg-emerald-600 text-white shrink-0">
                <Zap className="w-4 h-4" />
              </div>
              <div className="text-xs">
                <span className="font-bold text-emerald-950 block">Recommended Modality Mix:</span>
                <span className="text-emerald-800 font-medium">{currentRegion.recommendedModality}</span>
              </div>
            </div>

            {/* Action CTAs */}
            <div className="space-y-2.5 pt-2">
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => onOpenBooking(undefined, undefined, currentRegion.name)}
                  className="flex-1 py-3.5 px-6 rounded-xl font-bold text-sm bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-100 transition active:scale-98 flex items-center justify-center space-x-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Consultation for {currentRegion.shortLabel}</span>
                </button>

                <button
                  onClick={() => onOpenAiAssistantWithContext(currentRegion.name)}
                  className="py-3.5 px-5 rounded-xl font-semibold text-sm bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-300 transition flex items-center justify-center space-x-2"
                >
                  <Sparkles className="w-4 h-4 text-blue-600" />
                  <span>AI Guidance</span>
                </button>
              </div>

              {targetConditionGuide && onSelectConditionGuide && (
                <button
                  onClick={() => onSelectConditionGuide(targetConditionGuide)}
                  className="w-full py-2.5 px-4 rounded-xl font-bold text-xs bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200 transition flex items-center justify-center space-x-1.5"
                >
                  <span>Read Full Evidence-Based Medical Guide for {currentRegion.shortLabel}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

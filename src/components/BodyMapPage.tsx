import React, { useState } from 'react';
import { BODY_REGIONS } from '../data/clinicData';
import { 
  Activity, 
  Sparkles, 
  Calendar, 
  ArrowRight, 
  ChevronRight, 
  CheckCircle2, 
  AlertCircle, 
  HeartHandshake, 
  Stethoscope,
  Info
} from 'lucide-react';
import { SeoMeta } from './SeoMeta';

interface BodyMapPageProps {
  onBackToHome: () => void;
  onOpenBooking: (prefillService?: string, prefillArea?: string, prefillBodyPart?: string) => void;
  onOpenAiAssistant: (context?: string) => void;
  onSelectConditionGuide?: (conditionId: string) => void;
}

export const BodyMapPage: React.FC<BodyMapPageProps> = ({
  onBackToHome,
  onOpenBooking,
  onOpenAiAssistant,
  onSelectConditionGuide,
}) => {
  const [selectedRegionId, setSelectedRegionId] = useState<string>('lower-back');

  const selectedRegion = BODY_REGIONS.find((r) => r.id === selectedRegionId) || BODY_REGIONS[0];

  return (
    <div className="bg-slate-50 min-h-screen">
      <SeoMeta
        title="Interactive Body Symptom Map & Pain Triage Mumbai | Dr. Pawan Gupta (PT)"
        description="Select where it hurts on our interactive anatomical body map. Instant evidence-based physiotherapy guidance for neck, back, knee, shoulder, and sciatic nerve pain."
        canonicalUrl="https://runtowinphysiotherapy.com/#body-map"
      />

      {/* Breadcrumbs */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center text-xs text-slate-500">
          <button onClick={onBackToHome} className="hover:text-blue-600 font-medium">Home</button>
          <ChevronRight className="w-3.5 h-3.5 mx-2 text-slate-400" />
          <span className="text-slate-900 font-semibold">Interactive Anatomical Body Symptom Map</span>
        </div>
      </div>

      {/* Hero Header */}
      <section className="bg-gradient-to-br from-blue-950 via-slate-900 to-blue-950 text-white py-14 md:py-18 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-semibold uppercase tracking-wider">
            <Activity className="w-4 h-4 text-blue-400" />
            <span>Self-Assessment & Diagnostic Guidance</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight font-heading leading-tight">
            Where Does It Hurt?
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Click on any anatomical zone below to view common conditions, evidence-based physiotherapy protocols, and non-surgical recovery timelines by <strong className="text-white">Dr. Pawan Gupta (PT)</strong>.
          </p>
        </div>
      </section>

      {/* Interactive Body Map Grid Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Col: Region Selector Buttons */}
            <div className="lg:col-span-4 space-y-3">
              <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm mb-2">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                  Select Anatomical Area:
                </div>
                <div className="space-y-1.5">
                  {BODY_REGIONS.map((region) => {
                    const isSelected = region.id === selectedRegionId;
                    return (
                      <button
                        key={region.id}
                        onClick={() => setSelectedRegionId(region.id)}
                        className={`w-full text-left px-4 py-3 rounded-xl text-xs sm:text-sm font-bold transition flex items-center justify-between ${
                          isSelected
                            ? 'bg-blue-600 text-white shadow-md shadow-blue-200'
                            : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-100'
                        }`}
                      >
                        <div className="flex items-center space-x-2.5">
                          <span className={`w-2.5 h-2.5 rounded-full ${isSelected ? 'bg-white animate-pulse' : 'bg-blue-600'}`} />
                          <span>{region.name}</span>
                        </div>
                        <ChevronRight className={`w-4 h-4 transition ${isSelected ? 'text-white' : 'text-slate-400'}`} />
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* AI Triage Banner */}
              <div className="bg-gradient-to-br from-blue-900 to-indigo-950 text-white p-6 rounded-3xl border border-blue-800 space-y-3 shadow-md">
                <div className="flex items-center space-x-2 text-xs font-bold text-blue-300">
                  <Sparkles className="w-4 h-4 text-blue-400" />
                  <span>Unsure About Your Symptoms?</span>
                </div>
                <h4 className="text-base font-bold font-heading">
                  AI Physiotherapy Assistant
                </h4>
                <p className="text-xs text-blue-200 leading-relaxed">
                  Chat with our interactive clinical triage tool to narrow down potential causes before your appointment.
                </p>
                <button
                  onClick={() => onOpenAiAssistant(`I am experiencing discomfort in my ${selectedRegion.name}.`)}
                  className="w-full bg-blue-500 hover:bg-blue-400 text-white py-2.5 rounded-xl text-xs font-bold transition shadow-sm"
                >
                  Start AI Symptom Check →
                </button>
              </div>
            </div>

            {/* Right Col: Deep Clinical Details for Selected Region */}
            <div className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
              
              {/* Region Title Bar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-100 gap-3">
                <div>
                  <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-2">
                    <Stethoscope className="w-3.5 h-3.5" />
                    <span>Clinical Profile</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
                    {selectedRegion.name}
                  </h2>
                </div>

                <button
                  onClick={() => onOpenBooking('In-Clinic Consultation', 'Sewri Clinic', selectedRegion.name)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-full text-xs font-bold shadow-md shadow-blue-100 flex items-center space-x-2 self-start sm:self-center"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book For {selectedRegion.shortLabel}</span>
                </button>
              </div>

              {/* Conditions & Symptoms 2-Col Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Common Diagnoses */}
                <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 space-y-3">
                  <h3 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider flex items-center space-x-1.5">
                    <AlertCircle className="w-4 h-4 text-blue-600" />
                    <span>Common Conditions</span>
                  </h3>
                  <ul className="space-y-2 text-xs text-slate-700">
                    {selectedRegion.commonConditions.map((cond, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                        <span className="font-semibold">{cond}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Primary Symptoms */}
                <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 space-y-3">
                  <h3 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider flex items-center space-x-1.5">
                    <Activity className="w-4 h-4 text-emerald-600" />
                    <span>Primary Symptoms Reported</span>
                  </h3>
                  <ul className="space-y-2 text-xs text-slate-700">
                    {selectedRegion.symptoms.map((sym, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 mt-1.5" />
                        <span>{sym}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Treatment Protocols */}
              <div className="space-y-3 pt-2">
                <h3 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider flex items-center space-x-1.5">
                  <HeartHandshake className="w-4 h-4 text-purple-600" />
                  <span>Dr. Pawan Gupta's Physical Therapy Protocol</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedRegion.physioApproach.map((approach, idx) => (
                    <div key={idx} className="bg-blue-50/60 p-3.5 rounded-xl border border-blue-100 text-xs text-slate-800 font-medium">
                      • {approach}
                    </div>
                  ))}
                </div>
              </div>

              {/* Recovery & Modalities Strip */}
              <div className="bg-slate-900 text-slate-200 p-6 rounded-2xl space-y-3 text-xs">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
                  <div>
                    <span className="text-slate-400 font-bold uppercase text-[10px]">Expected Recovery Timeline:</span>
                    <p className="text-white font-semibold text-sm mt-0.5">{selectedRegion.expectedRecovery}</p>
                  </div>
                  <div>
                    <span className="text-slate-400 font-bold uppercase text-[10px]">Recommended Modalities:</span>
                    <p className="text-blue-400 font-semibold mt-0.5">{selectedRegion.recommendedModality}</p>
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
                  <span className="text-slate-400 text-xs">Need an in-person physical assessment?</span>
                  <button
                    onClick={() => onOpenBooking('In-Clinic Consultation', 'Sewri Clinic', selectedRegion.name)}
                    className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-xl text-xs font-bold transition"
                  >
                    Schedule Assessment →
                  </button>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
};

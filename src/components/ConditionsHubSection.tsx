import React from 'react';
import { CONDITION_GUIDES, ConditionGuide } from '../data/conditionGuides';
import { Stethoscope, ArrowRight, ShieldCheck, CheckCircle2, ChevronRight, Activity } from 'lucide-react';

interface ConditionsHubSectionProps {
  onSelectCondition: (conditionId: string) => void;
  onOpenBooking: (prefillService?: string, prefillArea?: string, prefillBodyPart?: string) => void;
}

export const ConditionsHubSection: React.FC<ConditionsHubSectionProps> = ({
  onSelectCondition,
  onOpenBooking,
}) => {
  return (
    <section id="conditions" className="py-16 md:py-24 bg-slate-50 relative scroll-mt-16 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Activity className="w-3.5 h-3.5" />
            <span>Clinical Conditions & Treatment Protocols</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
            Evidence-Based Physiotherapy for Common Conditions
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Comprehensive clinical protocols designed by <strong className="text-slate-900">Dr. Pawan Gupta (PT)</strong> for spine pathology, post-surgical recovery, sports rehabilitation, and neurological conditions in Mumbai.
          </p>
        </div>

        {/* Condition Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CONDITION_GUIDES.map((condition) => (
            <div
              key={condition.id}
              className="bg-white rounded-3xl p-6 border border-slate-200 hover:border-blue-300 transition shadow-sm hover:shadow-md flex flex-col justify-between group"
            >
              <div className="space-y-3.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 font-bold text-[11px] uppercase tracking-wider border border-blue-100">
                    {condition.category}
                  </span>
                  <span className="text-emerald-700 font-semibold text-[11px] flex items-center space-x-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Evidence-Based</span>
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-blue-700 font-heading leading-snug transition">
                  {condition.name}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                  {condition.quickSummary}
                </p>

                {/* Key Symptoms Snippet */}
                <div className="pt-2">
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                    Primary Symptoms Managed:
                  </div>
                  <div className="space-y-1">
                    {condition.symptoms.slice(0, 2).map((sym, sIdx) => (
                      <div key={sIdx} className="flex items-start space-x-1.5 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{sym}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => onOpenBooking('In-Clinic Consultation', 'Sewri Clinic', condition.name)}
                  className="text-xs font-semibold text-slate-600 hover:text-blue-600 transition"
                >
                  Book Assessment
                </button>

                <button
                  onClick={() => onSelectCondition(condition.id)}
                  className="inline-flex items-center space-x-1 text-xs font-bold text-blue-600 group-hover:text-blue-700 transition"
                >
                  <span>Protocol Details</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

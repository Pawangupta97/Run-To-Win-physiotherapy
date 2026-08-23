import React, { useState } from 'react';
import { 
  ShieldAlert, 
  RefreshCw, 
  Dumbbell, 
  Award, 
  CheckCircle2, 
  Calendar, 
  Clock, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { RECOVERY_PHASES } from '../data/clinicData';

interface RecoveryPhasesProps {
  onOpenBooking: () => void;
}

export const RecoveryPhases: React.FC<RecoveryPhasesProps> = ({ onOpenBooking }) => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const currentPhase = RECOVERY_PHASES[activeStepIndex];

  const renderIcon = (name: string) => {
    switch (name) {
      case 'ShieldAlert': return <ShieldAlert className="w-6 h-6" />;
      case 'RefreshCw': return <RefreshCw className="w-6 h-6" />;
      case 'Dumbbell': return <Dumbbell className="w-6 h-6" />;
      case 'Award': return <Award className="w-6 h-6" />;
      default: return <ShieldAlert className="w-6 h-6" />;
    }
  };

  return (
    <section id="recovery-phases" className="py-16 md:py-24 bg-white border-b border-slate-200 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3 border border-blue-100">
            <RefreshCw className="w-3.5 h-3.5 text-blue-600" />
            <span>Structured Rehabilitation Pathway</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
            Our 4-Phase Roadmap to Full Recovery
          </h2>
          <p className="mt-3 text-base text-slate-600">
            We don't guess your progress. Dr Pawan Gupta (PT) guides every patient through an objective, milestone-driven rehabilitation trajectory.
          </p>
        </div>

        {/* Phase Step Navigation Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {RECOVERY_PHASES.map((phase, idx) => {
            const isActive = activeStepIndex === idx;
            return (
              <button
                key={phase.step}
                onClick={() => setActiveStepIndex(idx)}
                className={`p-5 rounded-2xl text-left transition-all duration-200 border relative ${
                  isActive
                    ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-100'
                    : 'bg-slate-50 hover:bg-slate-100 text-slate-800 border-slate-200'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs font-extrabold px-2 py-0.5 rounded ${
                    isActive ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-700'
                  }`}>
                    Phase {phase.step}
                  </span>
                  <span className={`text-[11px] font-semibold ${
                    isActive ? 'text-blue-100' : 'text-blue-700'
                  }`}>
                    {phase.timeline}
                  </span>
                </div>
                <h4 className="text-sm font-bold truncate">
                  {phase.title}
                </h4>
              </button>
            );
          })}
        </div>

        {/* Active Phase Deep Dive Card */}
        <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-800 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-2xl bg-blue-500 text-white flex items-center justify-center font-bold shadow-md shadow-blue-500/25">
                  {renderIcon(currentPhase.iconName)}
                </div>
                <div>
                  <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">
                    Phase {currentPhase.step} • {currentPhase.timeline}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                    {currentPhase.title}
                  </h3>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {currentPhase.focus}
              </p>

              {/* Objective Milestone Requirement */}
              <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700 flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-bold text-blue-300 uppercase tracking-wider block">
                    Clinical Milestone to Advance:
                  </span>
                  <span className="text-sm text-white font-medium">
                    {currentPhase.milestone}
                  </span>
                </div>
              </div>

              {/* Action */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={onOpenBooking}
                  className="py-3 px-6 rounded-full font-bold text-sm bg-blue-600 hover:bg-blue-500 text-white shadow-md shadow-blue-500/25 transition flex items-center justify-center space-x-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Start Your Phase 1 Assessment</span>
                </button>
              </div>
            </div>

            {/* Right Summary Callout */}
            <div className="lg:col-span-4 bg-slate-800/60 rounded-3xl border border-slate-700 p-6 space-y-4 text-xs">
              <h4 className="font-bold text-blue-400 uppercase tracking-wider">
                Why Phased Rehab Works:
              </h4>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-start space-x-2">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>Prevents premature loading and re-aggravation</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>Restores muscle tissue biomechanics progressively</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>Builds lasting structural resilience against relapses</span>
                </li>
              </ul>
              <div className="pt-2 border-t border-slate-700 text-[11px] text-slate-400">
                Supervised directly by Dr Pawan Gupta (PT), Bandra & Mumbai Home Care.
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

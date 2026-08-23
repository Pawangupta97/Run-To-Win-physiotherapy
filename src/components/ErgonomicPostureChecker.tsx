import React, { useState } from 'react';
import { 
  Monitor, 
  CheckCircle2, 
  AlertTriangle, 
  Sparkles, 
  Calendar, 
  Clock, 
  Activity, 
  RefreshCw,
  Zap
} from 'lucide-react';

interface ErgonomicPostureCheckerProps {
  onOpenBooking: (prefillService?: string) => void;
}

export const ErgonomicPostureChecker: React.FC<ErgonomicPostureCheckerProps> = ({ onOpenBooking }) => {
  const [sittingHours, setSittingHours] = useState<number>(8);
  const [screenSetup, setScreenSetup] = useState<string>('laptop');
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>(['neck_stiffness']);
  const [breakFrequency, setBreakFrequency] = useState<string>('rare');
  const [showResult, setShowResult] = useState<boolean>(false);

  const symptomOptions = [
    { id: 'neck_stiffness', label: 'Tech Neck / Stiff Neck' },
    { id: 'scapular_pain', label: 'Upper Back & Shoulder Blade Burning' },
    { id: 'lower_back', label: 'Lower Back Dull Ache when Sitting' },
    { id: 'wrist_strain', label: 'Wrist Pain / Mouse Fatigue (RSI)' },
    { id: 'tension_headache', label: 'End-of-Day Tension Headaches' },
  ];

  const toggleSymptom = (id: string) => {
    if (selectedSymptoms.includes(id)) {
      setSelectedSymptoms(selectedSymptoms.filter((s) => s !== id));
    } else {
      setSelectedSymptoms([...selectedSymptoms, id]);
    }
  };

  // Calculate Risk
  const calculateRisk = () => {
    let score = 0;
    if (sittingHours >= 8) score += 3;
    else if (sittingHours >= 6) score += 2;
    else score += 1;

    if (screenSetup === 'laptop') score += 2;
    if (breakFrequency === 'rare') score += 2;
    score += selectedSymptoms.length;

    if (score >= 7) return { level: 'High Spinal Strain Risk', color: 'text-rose-600', bg: 'bg-rose-50 border-rose-200' };
    if (score >= 4) return { level: 'Moderate Postural Fatigue', color: 'text-amber-600', bg: 'bg-amber-50 border-amber-200' };
    return { level: 'Mild Ergonomic Strain', color: 'text-emerald-600', bg: 'bg-emerald-50 border-emerald-200' };
  };

  const risk = calculateRisk();

  return (
    <section className="py-16 md:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3 border border-blue-100">
            <Monitor className="w-3.5 h-3.5 text-blue-600" />
            <span>Interactive Self-Assessment</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
            Corporate & Desk Posture Strain Checker
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Sitting in Mumbai traffic and working long screen hours in BKC or remote setups? Calculate your postural risk score and get immediate corrective guidance.
          </p>
        </div>

        {/* Assessment Box */}
        <div className="bg-slate-50/70 rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm max-w-4xl mx-auto">
          
          <div className="space-y-8">
            
            {/* Question 1: Daily Sitting Hours */}
            <div>
              <label className="text-xs font-bold text-slate-800 uppercase tracking-wider block mb-2">
                1. How many hours do you spend sitting daily? ({sittingHours} Hours)
              </label>
              <input
                type="range"
                min="2"
                max="14"
                value={sittingHours}
                onChange={(e) => setSittingHours(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
              <div className="flex justify-between text-[11px] text-slate-500 mt-1">
                <span>2 Hours (Active)</span>
                <span>8 Hours (Average Desk)</span>
                <span>14 Hours (Extreme)</span>
              </div>
            </div>

            {/* Question 2: Primary Screen Setup */}
            <div>
              <label className="text-xs font-bold text-slate-800 uppercase tracking-wider block mb-2">
                2. Your Primary Daily Screen Setup:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {[
                  { id: 'laptop', label: 'Laptop on Table (Looking Down)' },
                  { id: 'monitor_stand', label: 'External Monitor at Eye Level' },
                  { id: 'multiple', label: 'Dual Monitors / Phone Heavy' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setScreenSetup(item.id)}
                    className={`p-3.5 rounded-2xl text-xs font-semibold text-left border transition ${
                      screenSetup === item.id
                        ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-100'
                        : 'bg-white text-slate-700 hover:bg-slate-100 border-slate-200'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Question 3: Current Symptoms */}
            <div>
              <label className="text-xs font-bold text-slate-800 uppercase tracking-wider block mb-2">
                3. Symptoms You Regularly Feel (Select all that apply):
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {symptomOptions.map((symptom) => {
                  const isChecked = selectedSymptoms.includes(symptom.id);
                  return (
                    <button
                      key={symptom.id}
                      type="button"
                      onClick={() => toggleSymptom(symptom.id)}
                      className={`p-3.5 rounded-2xl text-xs font-medium text-left border transition flex items-center justify-between ${
                        isChecked
                          ? 'bg-blue-50 text-blue-900 border-blue-200 font-semibold shadow-sm'
                          : 'bg-white text-slate-700 hover:bg-slate-100 border-slate-200'
                      }`}
                    >
                      <span>{symptom.label}</span>
                      <CheckCircle2
                        className={`w-4 h-4 ${isChecked ? 'text-blue-600' : 'text-slate-300'}`}
                      />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Calculate Button */}
            <div className="pt-2">
              <button
                type="button"
                onClick={() => setShowResult(true)}
                className="w-full py-4 px-6 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md shadow-blue-100 transition flex items-center justify-center space-x-2"
              >
                <Activity className="w-4 h-4 text-white" />
                <span>Calculate My Postural Strain Analysis</span>
              </button>
            </div>

            {/* Result Box */}
            {showResult && (
              <div className={`p-6 sm:p-7 rounded-3xl border ${risk.bg} space-y-4 animate-in fade-in duration-200`}>
                <div className="flex flex-wrap items-center justify-between gap-2 border-b pb-3 border-slate-200/60">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                      Assessment Result:
                    </span>
                    <h4 className={`text-xl font-extrabold font-heading ${risk.color}`}>
                      {risk.level}
                    </h4>
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-700">
                    {selectedSymptoms.length} Symptoms Reported
                  </span>
                </div>

                <div className="space-y-2 text-xs text-slate-700">
                  <h5 className="font-bold text-slate-900">Dr Pawan Gupta's Desk Recommendations:</h5>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
                    <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-sm">
                      <strong className="block text-blue-700 font-bold mb-0.5">1. Monitor Eye-Level</strong>
                      <span>Raise laptop so the top third of screen is at eye level.</span>
                    </div>
                    <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-sm">
                      <strong className="block text-blue-700 font-bold mb-0.5">2. 45-Min Microbreak</strong>
                      <span>Perform chin tucks and doorway chest stretches every 45 mins.</span>
                    </div>
                    <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-sm">
                      <strong className="block text-blue-700 font-bold mb-0.5">3. Clinical Correction</strong>
                      <span>Schedule a postural spinal alignment session in Bandra or at home.</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-2">
                  <button
                    onClick={() => onOpenBooking('Corporate Ergonomics & Postural Correction')}
                    className="flex-1 py-3 px-5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md shadow-blue-100 transition flex items-center justify-center space-x-1.5"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Book Posture & Spine Alignment Consultation</span>
                  </button>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};

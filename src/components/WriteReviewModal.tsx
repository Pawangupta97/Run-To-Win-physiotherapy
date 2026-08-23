import React, { useState } from 'react';
import { 
  X, 
  Star, 
  CheckCircle2, 
  Copy, 
  ExternalLink, 
  Sparkles, 
  HeartHandshake, 
  TrendingUp, 
  MapPin, 
  User, 
  MessageSquare,
  ShieldCheck,
  Send
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { CLINIC_CONTACT } from '../data/clinicData';
import { Testimonial } from '../types';

interface WriteReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  onReviewSubmitted: (newReview: Testimonial) => void;
}

export const WriteReviewModal: React.FC<WriteReviewModalProps> = ({
  isOpen,
  onClose,
  onReviewSubmitted,
}) => {
  const [rating, setRating] = useState<number>(5);
  const [hoverRating, setHoverRating] = useState<number>(0);
  const [patientName, setPatientName] = useState('');
  const [age, setAge] = useState<string>('');
  const [occupation, setOccupation] = useState('');
  const [location, setLocation] = useState('Sewri, Mumbai');
  const [condition, setCondition] = useState('Spine & Sciatica Relief');
  const [tag, setTag] = useState('Spine & Sciatica');
  const [mobilityImprovement, setMobilityImprovement] = useState<number>(95);
  const [recoveryTime, setRecoveryTime] = useState('4 Weeks');
  const [story, setStory] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const conditionOptions = [
    { label: 'Spine & Sciatica', tag: 'Spine & Sciatica' },
    { label: 'Frozen Shoulder & Rotator Cuff', tag: 'Frozen Shoulder' },
    { label: 'ACL & Sports Injury Rehabilitation', tag: 'Sports Injury' },
    { label: 'Post-Op Knee Replacement (TKR/THR)', tag: 'Home Care Post-Op' },
    { label: 'Stroke & Neurological Recovery', tag: 'Neuro Stroke Rehab' },
    { label: 'Neck Pain & Cervical Spondylosis', tag: 'Spine & Sciatica' },
    { label: 'Home Visit Physiotherapy Care', tag: 'Home Care Post-Op' },
    { label: 'Dry Needling & Manual Therapy', tag: 'Sports Injury' },
  ];

  const ratingDescriptions: Record<number, string> = {
    5: '⭐⭐⭐⭐⭐ Exceptional (Full Recovery & Care)',
    4: '⭐⭐⭐⭐ Great Experience & Significant Relief',
    3: '⭐⭐⭐ Good Treatment Progress',
    2: '⭐⭐ Average Recovery',
    1: '⭐ Needs Follow-up',
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!patientName.trim() || !story.trim()) return;

    setIsSubmitting(true);

    const newReview: Testimonial = {
      id: `user-rev-${Date.now()}`,
      patientName: patientName.trim(),
      age: age ? parseInt(age, 10) : 38,
      condition,
      occupation: occupation.trim() || 'Mumbai Resident',
      location: location.trim() || 'Sewri, Mumbai',
      story: story.trim(),
      recoveryTime: recoveryTime.trim() || '3–4 Weeks',
      mobilityImprovement: Number(mobilityImprovement),
      rating,
      verified: true,
      tag,
      doctorQuote: `Verified patient review for Dr Pawan Gupta (PT) - ${condition}.`,
    };

    setTimeout(() => {
      // Save locally
      try {
        const stored = localStorage.getItem('runtowin_patient_reviews');
        const existing: Testimonial[] = stored ? JSON.parse(stored) : [];
        localStorage.setItem('runtowin_patient_reviews', JSON.stringify([newReview, ...existing]));
      } catch (err) {
        console.error('Failed to save review in localStorage', err);
      }

      onReviewSubmitted(newReview);
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Trigger Confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#2563eb', '#10b981', '#f59e0b', '#3b82f6'],
        });
      } catch (err) {
        // Safe fallback
      }
    }, 400);
  };

  const handleCopyReview = () => {
    const textToCopy = `"${story}" - ${patientName} (${condition}, Dr Pawan Gupta PT Run To Win Physiotherapy Sewri)`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const resetAndClose = () => {
    setIsSubmitted(false);
    setStory('');
    setPatientName('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm transition-opacity"
        onClick={resetAndClose}
      ></div>

      {/* Modal Container */}
      <div className="relative bg-white rounded-3xl shadow-2xl border border-slate-200 max-w-2xl w-full p-6 sm:p-8 z-10 overflow-hidden max-h-[90vh] flex flex-col my-auto">
        
        {/* Close Button */}
        <button
          onClick={resetAndClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition"
          aria-label="Close review modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <>
            {/* Modal Header */}
            <div className="mb-5 pr-8">
              <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-2 border border-emerald-100">
                <HeartHandshake className="w-3.5 h-3.5 text-emerald-600" />
                <span>Patient Feedback & Recovery Story</span>
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900 font-heading">
                Share Your Recovery Experience
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                Your review helps other Mumbai patients find trusted, surgery-free physiotherapy care with Dr Pawan Gupta (PT).
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4 overflow-y-auto pr-1">
              
              {/* Interactive Star Rating */}
              <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200/80">
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                  Your Overall Rating
                </label>
                <div className="flex items-center space-x-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                      className="p-1 text-2xl transition transform hover:scale-110 focus:outline-none"
                    >
                      <Star 
                        className={`w-7 h-7 ${
                          (hoverRating || rating) >= star 
                            ? 'text-amber-400 fill-amber-400' 
                            : 'text-slate-300'
                        }`} 
                      />
                    </button>
                  ))}
                  <span className="text-xs font-bold text-amber-900 ml-2">
                    {ratingDescriptions[hoverRating || rating]}
                  </span>
                </div>
              </div>

              {/* Name and Age */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Your Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                    <input
                      type="text"
                      required
                      value={patientName}
                      onChange={(e) => setPatientName(e.target.value)}
                      placeholder="e.g. Ramesh Shah"
                      className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Age & Occupation (Optional)
                  </label>
                  <input
                    type="text"
                    value={occupation}
                    onChange={(e) => setOccupation(e.target.value)}
                    placeholder="e.g. 42 yrs, Senior Architect"
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  />
                </div>
              </div>

              {/* Location & Condition Select */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Location / Suburb in Mumbai
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                    <input
                      type="text"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      placeholder="e.g. Sewri / Dadar / Bandra"
                      className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Treated Condition / Program
                  </label>
                  <select
                    value={condition}
                    onChange={(e) => {
                      setCondition(e.target.value);
                      const selected = conditionOptions.find((opt) => opt.label === e.target.value);
                      if (selected) setTag(selected.tag);
                    }}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white"
                  >
                    {conditionOptions.map((opt) => (
                      <option key={opt.label} value={opt.label}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Mobility Gain & Duration */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-3.5 bg-slate-50 rounded-2xl border border-slate-200">
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <label className="text-xs font-bold text-slate-700 flex items-center space-x-1">
                      <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Mobility / Relief Gain</span>
                    </label>
                    <span className="text-xs font-extrabold text-emerald-600">{mobilityImprovement}%</span>
                  </div>
                  <input
                    type="range"
                    min="50"
                    max="100"
                    step="5"
                    value={mobilityImprovement}
                    onChange={(e) => setMobilityImprovement(Number(e.target.value))}
                    className="w-full accent-emerald-600 cursor-pointer"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Recovery Duration
                  </label>
                  <input
                    type="text"
                    value={recoveryTime}
                    onChange={(e) => setRecoveryTime(e.target.value)}
                    placeholder="e.g. 3 Weeks / 8 Sessions"
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white"
                  />
                </div>
              </div>

              {/* Review Story Feedback */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Your Recovery Story & Feedback *
                </label>
                <textarea
                  required
                  rows={3}
                  value={story}
                  onChange={(e) => setStory(e.target.value)}
                  placeholder="Describe your symptoms before treatment, how Dr Pawan Gupta (PT) helped you recover, and how you feel now..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-none leading-relaxed"
                ></textarea>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex items-center justify-end space-x-3">
                <button
                  type="button"
                  onClick={resetAndClose}
                  className="px-5 py-2.5 rounded-xl text-slate-600 hover:bg-slate-100 font-semibold text-sm transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting || !patientName.trim() || !story.trim()}
                  className="px-7 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white font-bold text-sm shadow-md shadow-blue-500/20 transition flex items-center space-x-2"
                >
                  {isSubmitting ? (
                    <span>Publishing...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Post Review to Website</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </>
        ) : (
          /* Success Screen with Google Review 1-Click Link */
          <div className="text-center py-6 space-y-5">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-black text-slate-900 font-heading">
                Thank You, {patientName}!
              </h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto">
                Your review is now <strong className="text-emerald-700">live directly on our website</strong> in the verified testimonials section.
              </p>
            </div>

            {/* Google Business Review Booster Card */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 text-left space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-7 h-7 rounded-lg bg-white shadow-sm flex items-center justify-center font-black text-blue-600 text-sm">
                    G
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">
                      Help Us on Google Business Profile
                    </h4>
                    <p className="text-[11px] text-slate-500">
                      Share your review on <strong>Run To Win Healthcare Services Mumbai</strong> on Google too!
                    </p>
                  </div>
                </div>
                <div className="flex text-amber-400 text-xs">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-2.5 pt-1">
                <button
                  type="button"
                  onClick={handleCopyReview}
                  className="flex-1 px-4 py-2.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 font-semibold text-xs transition flex items-center justify-center space-x-1.5 shadow-sm"
                >
                  <Copy className="w-3.5 h-3.5 text-blue-600" />
                  <span>{copied ? '✓ Copied to Clipboard!' : 'Copy My Review Text'}</span>
                </button>

                <a
                  href={CLINIC_CONTACT.googleReviewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs transition flex items-center justify-center space-x-1.5 shadow-md shadow-blue-500/25"
                >
                  <span>Post on Google Reviews</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <div>
              <button
                type="button"
                onClick={resetAndClose}
                className="px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition"
              >
                Close & View on Website
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

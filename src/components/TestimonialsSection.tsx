import React, { useState, useEffect } from 'react';
import { 
  Star, 
  CheckCircle2, 
  Quote, 
  MapPin, 
  TrendingUp, 
  ShieldCheck, 
  UserCheck,
  Calendar,
  PenLine,
  ExternalLink,
  HeartHandshake,
  Sparkles,
  Award
} from 'lucide-react';
import { TESTIMONIALS, CLINIC_CONTACT } from '../data/clinicData';
import { Testimonial } from '../types';
import { WriteReviewModal } from './WriteReviewModal';

interface TestimonialsSectionProps {
  onOpenBooking: () => void;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ onOpenBooking }) => {
  const [selectedTag, setSelectedTag] = useState<string>('All');
  const [isWriteReviewOpen, setIsWriteReviewOpen] = useState<boolean>(false);
  const [allTestimonials, setAllTestimonials] = useState<Testimonial[]>(TESTIMONIALS);

  // Load any user-submitted reviews from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem('runtowin_patient_reviews');
      if (stored) {
        const userReviews: Testimonial[] = JSON.parse(stored);
        if (Array.isArray(userReviews) && userReviews.length > 0) {
          // Merge user reviews at the beginning, avoiding duplicates
          const userIds = new Set(userReviews.map((r) => r.id));
          const baseFiltered = TESTIMONIALS.filter((t) => !userIds.has(t.id));
          setAllTestimonials([...userReviews, ...baseFiltered]);
        }
      }
    } catch (err) {
      console.error('Error loading patient reviews', err);
    }
  }, []);

  const handleReviewSubmitted = (newReview: Testimonial) => {
    setAllTestimonials((prev) => [newReview, ...prev]);
  };

  const tags = ['All', 'Spine & Sciatica', 'Home Care Post-Op', 'Sports Injury', 'Frozen Shoulder', 'Neuro Stroke Rehab'];

  const filteredTestimonials = selectedTag === 'All'
    ? allTestimonials
    : allTestimonials.filter((t) => t.tag === selectedTag);

  return (
    <>
      <section id="testimonials" className="py-16 md:py-24 bg-slate-50/70 border-b border-slate-200 scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3 border border-blue-100">
              <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
              <span>Verified Patient Outcomes</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
              Stories of Recovery & Restored Mobility
            </h2>
            <p className="mt-3 text-base text-slate-600">
              Real experiences from patients across Mumbai who avoided surgery, regained sports performance, and returned to pain-free living with Dr Pawan Gupta (PT).
            </p>
          </div>

          {/* Google Business Manager & Direct Review Hub Card */}
          <div className="mb-10 p-5 sm:p-6 rounded-3xl bg-white border border-slate-200/90 shadow-lg shadow-blue-500/5 flex flex-col md:flex-row items-center justify-between gap-6">
            
            {/* Left: Google Rating Badge & Summary */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-emerald-500 p-0.5 shadow-md flex items-center justify-center shrink-0">
                <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center">
                  {/* Google 'G' Icon styling */}
                  <span className="text-2xl font-black bg-gradient-to-r from-blue-600 via-amber-500 to-emerald-600 bg-clip-text text-transparent">
                    G
                  </span>
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex items-center justify-center sm:justify-start space-x-2">
                  <span className="text-xl font-black text-slate-900 font-heading">
                    {CLINIC_CONTACT.googleRating || '4.9'}
                  </span>
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs font-bold text-slate-700 bg-slate-100 px-2 py-0.5 rounded-md">
                    Google Verified
                  </span>
                </div>
                <p className="text-xs text-slate-600 font-medium">
                  Based on <strong>{CLINIC_CONTACT.googleReviewsCount || '128+'} patient reviews</strong> on Google Business Profile (Sewri & Mumbai Clinic)
                </p>
              </div>
            </div>

            {/* Right: Review Actions Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-2.5 w-full md:w-auto">
              {/* Direct Review on Website Button */}
              <button
                onClick={() => setIsWriteReviewOpen(true)}
                className="px-4 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-all shadow-md shadow-blue-500/20 flex items-center space-x-1.5 hover:scale-105"
              >
                <PenLine className="w-3.5 h-3.5" />
                <span>Write Review on Website</span>
              </button>

              {/* Single Official Google Business Manager Review & Profile Link */}
              <a
                href={CLINIC_CONTACT.googleBusinessUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-full bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 text-xs font-bold transition flex items-center space-x-1.5 shadow-sm hover:border-blue-300"
                title="View & Review Run To Win Healthcare Services Mumbai on Google"
              >
                <span className="font-extrabold text-blue-600 text-xs">G</span>
                <span>Review on Google Business</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>
            </div>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-3 mb-8 gap-2 no-scrollbar">
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-150 border ${
                  selectedTag === tag
                    ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-100'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border-slate-200'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTestimonials.map((item) => (
              <div
                key={item.id}
                className={`bg-white rounded-3xl border ${
                  item.id.startsWith('user-rev-') 
                    ? 'border-emerald-300 shadow-md ring-2 ring-emerald-400/20' 
                    : 'border-slate-200'
                } p-6 sm:p-7 shadow-sm flex flex-col justify-between hover:shadow-xl hover:border-blue-200 transition-all space-y-4 relative`}
              >
                {item.id.startsWith('user-rev-') && (
                  <div className="absolute -top-2.5 right-6 px-2.5 py-0.5 rounded-full bg-emerald-600 text-white text-[10px] font-bold flex items-center space-x-1 shadow-sm">
                    <Sparkles className="w-3 h-3" />
                    <span>Live Website Review</span>
                  </div>
                )}

                <div className="space-y-4">
                  {/* Header: Rating and Tag */}
                  <div className="flex items-center justify-between">
                    <div className="flex text-amber-400">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                    <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-100">
                      {item.tag}
                    </span>
                  </div>

                  {/* Patient Condition */}
                  <div className="border-b border-slate-100 pb-2">
                    <h4 className="text-sm font-bold text-slate-900 font-heading">
                      {item.condition}
                    </h4>
                    <p className="text-[11px] text-slate-500 flex items-center space-x-1 mt-0.5">
                      <MapPin className="w-3 h-3 text-blue-600" />
                      <span>{item.location}</span>
                    </p>
                  </div>

                  {/* Story */}
                  <p className="text-xs text-slate-600 leading-relaxed italic">
                    "{item.story}"
                  </p>

                  {/* Mobility Restored Meter */}
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold text-slate-700 flex items-center space-x-1">
                        <TrendingUp className="w-3.5 h-3.5 text-blue-600" />
                        <span>Mobility Gain</span>
                      </span>
                      <span className="font-bold text-emerald-600">{item.mobilityImprovement}% Restored</span>
                    </div>
                    <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-emerald-500 rounded-full"
                        style={{ width: `${item.mobilityImprovement}%` }}
                      ></div>
                    </div>
                    <div className="text-[10px] text-slate-500 flex justify-between">
                      <span>Recovery Duration:</span>
                      <span className="font-bold text-slate-700">{item.recoveryTime}</span>
                    </div>
                  </div>

                  {/* Doctor's Observation */}
                  {item.doctorQuote && (
                    <div className="p-3 rounded-xl bg-blue-50/70 border border-blue-100 text-[11px] text-slate-800">
                      <span className="font-bold text-blue-700 block mb-0.5">Dr. Pawan's Note:</span>
                      <span>{item.doctorQuote}</span>
                    </div>
                  )}
                </div>

                {/* Patient Footer */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <h5 className="text-xs font-bold text-slate-900">
                      {item.patientName}, {item.age} yrs
                    </h5>
                    <span className="text-[10px] text-slate-500">{item.occupation}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-emerald-600 text-xs font-semibold">
                    <UserCheck className="w-4 h-4" />
                    <span className="text-[10px]">Verified</span>
                  </div>
                </div>

              </div>
            ))}
          </div>

          {/* CTA Card */}
          <div className="mt-12 p-8 sm:p-10 rounded-3xl bg-gradient-to-tr from-slate-900 via-slate-800 to-blue-950 text-white text-center space-y-4 shadow-2xl border border-slate-800 relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-60 h-60 bg-blue-500/15 rounded-full blur-3xl pointer-events-none"></div>
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
                Ready to Begin Your Recovery Story?
              </h3>
              <p className="text-sm text-slate-300 max-w-xl mx-auto mt-2">
                Schedule an in-depth clinical evaluation with Dr Pawan Gupta (PT) at our Sewri clinic or in your Mumbai home.
              </p>
              <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
                <button
                  onClick={onOpenBooking}
                  className="px-8 py-3.5 rounded-full font-bold text-sm bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/25 transition inline-flex items-center space-x-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Priority Assessment</span>
                </button>
                <button
                  onClick={() => setIsWriteReviewOpen(true)}
                  className="px-6 py-3.5 rounded-full font-bold text-sm bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition inline-flex items-center space-x-2"
                >
                  <PenLine className="w-4 h-4 text-emerald-400" />
                  <span>Write Patient Review</span>
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Interactive Write Review Modal */}
      <WriteReviewModal
        isOpen={isWriteReviewOpen}
        onClose={() => setIsWriteReviewOpen(false)}
        onReviewSubmitted={handleReviewSubmitted}
      />
    </>
  );
};


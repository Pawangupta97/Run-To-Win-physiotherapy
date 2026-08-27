import React, { useState } from 'react';
import { TESTIMONIALS, CLINIC_CONTACT } from '../data/clinicData';
import { 
  Star, 
  Quote, 
  MapPin, 
  CheckCircle2, 
  Calendar, 
  ChevronRight, 
  Search, 
  Filter, 
  MessageSquare, 
  TrendingUp,
  Activity,
  HeartHandshake
} from 'lucide-react';
import { WriteReviewModal } from './WriteReviewModal';
import { SeoMeta } from './SeoMeta';

interface TestimonialsPageProps {
  onBackToHome: () => void;
  onOpenBooking: (prefillService?: string, prefillArea?: string) => void;
}

const CATEGORIES = [
  'All',
  'Spine & Sciatica',
  'Total Knee Replacement',
  'Sports Injury',
  'Frozen Shoulder',
  'Home Visit Care',
];

export const TestimonialsPage: React.FC<TestimonialsPageProps> = ({
  onBackToHome,
  onOpenBooking,
}) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);

  const filteredReviews = TESTIMONIALS.filter((review) => {
    const isHome = review.tag.toLowerCase().includes('home') || review.location.toLowerCase().includes('home');
    const matchesCategory = 
      selectedCategory === 'All' ||
      (selectedCategory === 'Spine & Sciatica' && (review.condition.toLowerCase().includes('disc') || review.condition.toLowerCase().includes('sciatica') || review.condition.toLowerCase().includes('back') || review.condition.toLowerCase().includes('spine'))) ||
      (selectedCategory === 'Total Knee Replacement' && (review.condition.toLowerCase().includes('tkr') || review.condition.toLowerCase().includes('knee') || review.condition.toLowerCase().includes('replacement'))) ||
      (selectedCategory === 'Sports Injury' && (review.condition.toLowerCase().includes('acl') || review.condition.toLowerCase().includes('meniscus') || review.condition.toLowerCase().includes('sports') || review.condition.toLowerCase().includes('runner'))) ||
      (selectedCategory === 'Frozen Shoulder' && (review.condition.toLowerCase().includes('shoulder') || review.condition.toLowerCase().includes('rotator'))) ||
      (selectedCategory === 'Home Visit Care' && isHome);

    const matchesSearch = 
      review.patientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      review.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      review.condition.toLowerCase().includes(searchQuery.toLowerCase()) ||
      review.story.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-slate-50 min-h-screen">
      <SeoMeta
        title="Patient Reviews & Recovery Stories Mumbai | Dr. Pawan Gupta (PT)"
        description="Read 100+ verified patient reviews and before/after recovery metrics for Dr. Pawan Gupta (PT). Spine care, Knee replacement rehab, and Home visits in Mumbai."
        canonicalUrl="https://runtowinphysiotherapy.com/#testimonials"
      />

      {/* Breadcrumbs */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center text-xs text-slate-500">
          <button onClick={onBackToHome} className="hover:text-blue-600 font-medium">Home</button>
          <ChevronRight className="w-3.5 h-3.5 mx-2 text-slate-400" />
          <span className="text-slate-900 font-semibold">Patient Reviews & Case Studies</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white py-16 md:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl mx-auto space-y-5">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-semibold uppercase tracking-wider">
            <HeartHandshake className="w-4 h-4 text-blue-400" />
            <span>Verified Patient Outcomes</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight font-heading leading-tight">
            Real Patient Recovery Stories
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            See how Mumbaikars overcame severe spine pain, knee stiffness, and athletic injuries under the clinical guidance of <strong className="text-white">Dr. Pawan Gupta (PT)</strong>.
          </p>

          {/* Rating Badge */}
          <div className="inline-flex items-center space-x-4 bg-white/10 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/20">
            <div className="flex items-center space-x-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
            </div>
            <div className="text-xs sm:text-sm font-semibold text-slate-200">
              <strong className="text-white text-base">4.9 / 5.0</strong> on Google Reviews ({CLINIC_CONTACT.googleReviewsCount} Reviews)
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Main Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* Controls Bar: Search + Category Pills + Write Review Button */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            
            {/* Category Pills */}
            <div className="flex items-center space-x-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                    selectedCategory === cat
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-200'
                      : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Write Review Modal Trigger */}
            <button
              onClick={() => setIsReviewModalOpen(true)}
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-full text-xs font-bold shadow-md shadow-emerald-100 flex items-center space-x-2 shrink-0 self-start md:self-auto"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Share Your Recovery Story</span>
            </button>

          </div>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredReviews.map((review) => (
              <div
                key={review.id}
                className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  
                  {/* Rating Stars & Badge */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1 text-amber-400">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                      ))}
                    </div>
                    {review.tag.toLowerCase().includes('home') ? (
                      <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-bold border border-emerald-100">
                        Home Visit Patient
                      </span>
                    ) : (
                      <span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 text-[10px] font-bold border border-blue-100">
                        {review.tag || 'In-Clinic Patient'}
                      </span>
                    )}
                  </div>

                  {/* Comment */}
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                    "{review.story}"
                  </p>

                  {/* Mobility Improvement Meter */}
                  {review.mobilityImprovement && (
                    <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100 space-y-1.5">
                      <div className="flex items-center justify-between text-[11px] font-bold">
                        <span className="text-slate-500">Mobility Recovery:</span>
                        <span className="text-blue-600 font-extrabold flex items-center space-x-1">
                          <TrendingUp className="w-3.5 h-3.5" />
                          <span>{review.mobilityImprovement}% Functional Gain</span>
                        </span>
                      </div>
                      <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                        <div 
                          className="bg-gradient-to-r from-blue-500 to-emerald-500 h-full rounded-full transition-all duration-1000"
                          style={{ width: `${review.mobilityImprovement}%` }}
                        />
                      </div>
                      <div className="text-[10px] text-slate-400 text-right">
                        Verified Outcome in {review.recoveryTime}
                      </div>
                    </div>
                  )}

                </div>

                {/* Patient Profile Footer */}
                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">{review.patientName}</h4>
                    <p className="text-[11px] text-blue-600 font-medium">{review.condition}</p>
                    <div className="flex items-center space-x-1 text-[10px] text-slate-400 mt-0.5">
                      <MapPin className="w-3 h-3 text-slate-400" />
                      <span>{review.location}</span>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="text-[10px] text-slate-400 block">{review.occupation}</span>
                    <span className="text-[10px] text-emerald-600 font-bold flex items-center space-x-0.5 justify-end">
                      <CheckCircle2 className="w-3 h-3" />
                      <span>{review.verified ? 'Verified Case' : 'Patient Story'}</span>
                    </span>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-14 bg-gradient-to-r from-blue-700 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h2 className="text-2xl sm:text-3xl font-extrabold font-heading">
            Start Your Own Recovery Journey Today
          </h2>
          <p className="text-sm sm:text-base text-blue-100 max-w-xl mx-auto">
            Book an assessment with Dr. Pawan Gupta (PT) and experience personalized one-on-one physiotherapy care.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onOpenBooking()}
              className="bg-white text-blue-900 px-8 py-3.5 rounded-full text-sm font-bold shadow-xl hover:bg-blue-50 transition"
            >
              Book Your Assessment
            </button>
          </div>
        </div>
      </section>

      {/* Write Review Modal */}
      <WriteReviewModal
        isOpen={isReviewModalOpen}
        onClose={() => setIsReviewModalOpen(false)}
      />

    </div>
  );
};

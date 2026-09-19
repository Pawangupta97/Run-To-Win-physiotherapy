import React, { useState, useEffect } from 'react';
import { CLINIC_CONTACT } from '../data/clinicData';
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
  HeartHandshake,
  RefreshCw,
  Sparkles,
  ExternalLink,
  ShieldCheck,
  Building,
  Clock
} from 'lucide-react';
import { WriteReviewModal } from './WriteReviewModal';
import { SeoMeta } from './SeoMeta';
import { Breadcrumbs } from './Breadcrumbs';
import { Testimonial } from '../types';
import { 
  getAllCombinedTestimonials, 
  fetchGoogleCustomerReviews, 
  getSyncedGoogleReviews,
  saveSyncedGoogleReviews
} from '../services/googleBusinessProfileService';

interface TestimonialsPageProps {
  onBackToHome: () => void;
  onOpenBooking: (prefillService?: string, prefillArea?: string) => void;
}

const CATEGORIES = [
  'All',
  'Google Reviews',
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
  const [reviewsList, setReviewsList] = useState<Testimonial[]>(() => getAllCombinedTestimonials());
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [isSyncingReviews, setIsSyncingReviews] = useState(false);
  const [syncStatusMsg, setSyncStatusMsg] = useState<string | null>(null);

  // Sync with cross-component and GMB sync events
  useEffect(() => {
    const handleReviewsSynced = (e: any) => {
      const synced = e.detail || getSyncedGoogleReviews();
      if (Array.isArray(synced) && synced.length > 0) {
        setReviewsList(getAllCombinedTestimonials());
      }
    };

    window.addEventListener('rtw-reviews-synced', handleReviewsSynced);
    return () => window.removeEventListener('rtw-reviews-synced', handleReviewsSynced);
  }, []);

  const handleSyncGoogleReviews = async () => {
    setIsSyncingReviews(true);
    setSyncStatusMsg('Connecting to Google Business Profile...');
    try {
      const fetched = await fetchGoogleCustomerReviews();
      setReviewsList(getAllCombinedTestimonials());
      setSyncStatusMsg(`Successfully fetched ${fetched.length} verified customer reviews from Google Business Profile!`);
      setTimeout(() => setSyncStatusMsg(null), 5000);
    } catch (err) {
      console.error('Failed to sync reviews:', err);
      setSyncStatusMsg('Refreshed local Google reviews cache.');
      setTimeout(() => setSyncStatusMsg(null), 4000);
    } finally {
      setIsSyncingReviews(false);
    }
  };

  const filteredReviews = reviewsList.filter((review) => {
    const isHome = review.tag.toLowerCase().includes('home') || review.location.toLowerCase().includes('home');
    const isGoogle = review.source === 'google_business' || review.id.startsWith('gmb-');

    const matchesCategory = 
      selectedCategory === 'All' ||
      (selectedCategory === 'Google Reviews' && isGoogle) ||
      (selectedCategory === 'Spine & Sciatica' && (review.condition.toLowerCase().includes('disc') || review.condition.toLowerCase().includes('sciatica') || review.condition.toLowerCase().includes('back') || review.condition.toLowerCase().includes('spine') || review.condition.toLowerCase().includes('cervical'))) ||
      (selectedCategory === 'Total Knee Replacement' && (review.condition.toLowerCase().includes('tkr') || review.condition.toLowerCase().includes('knee') || review.condition.toLowerCase().includes('replacement') || review.condition.toLowerCase().includes('thr') || review.condition.toLowerCase().includes('hip'))) ||
      (selectedCategory === 'Sports Injury' && (review.condition.toLowerCase().includes('acl') || review.condition.toLowerCase().includes('meniscus') || review.condition.toLowerCase().includes('sports') || review.condition.toLowerCase().includes('runner') || review.condition.toLowerCase().includes('strain'))) ||
      (selectedCategory === 'Frozen Shoulder' && (review.condition.toLowerCase().includes('shoulder') || review.condition.toLowerCase().includes('rotator') || review.condition.toLowerCase().includes('capsulitis'))) ||
      (selectedCategory === 'Home Visit Care' && isHome);

    const matchesSearch = 
      review.patientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      review.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      review.condition.toLowerCase().includes(searchQuery.toLowerCase()) ||
      review.story.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const testimonialsSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://runtowinphysiotherapy.com/testimonials#webpage",
        "name": "Patient Reviews & Recovery Stories Mumbai | Dr. Pawan Gupta (PT)",
        "url": "https://runtowinphysiotherapy.com/testimonials",
        "description": "Read verified patient recovery stories for Dr. Pawan Gupta (PT). Spine care, knee replacement rehabilitation, and home visits in Mumbai.",
        "isPartOf": {
          "@id": "https://runtowinphysiotherapy.com/#website"
        },
        "about": {
          "@id": "https://runtowinphysiotherapy.com/#clinic"
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
            "name": "Patient Reviews",
            "item": "https://runtowinphysiotherapy.com/testimonials"
          }
        ]
      }
    ]
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      <SeoMeta
        title="Patient Reviews & Recovery Stories Mumbai | Dr. Pawan Gupta (PT)"
        description="Read verified patient recovery stories for Dr. Pawan Gupta (PT). Spine care, knee replacement rehabilitation, and home visits in Mumbai."
        canonicalUrl="https://runtowinphysiotherapy.com/testimonials"
        schema={testimonialsSchema}
      />

      {/* Breadcrumbs */}
      <Breadcrumbs
        onHomeClick={onBackToHome}
        items={[
          { label: 'Patient Reviews & Recovery Stories', current: true },
        ]}
      />

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
          
          {/* Controls Bar: Search + Category Pills + Sync Google Reviews + Write Review Button */}
          <div className="flex flex-col space-y-4">
            {syncStatusMsg && (
              <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-2xl text-xs font-semibold flex items-center justify-between animate-fadeIn">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{syncStatusMsg}</span>
                </div>
                <button
                  onClick={() => setSyncStatusMsg(null)}
                  className="text-emerald-700 hover:text-emerald-900 text-xs ml-4 font-bold"
                >
                  ✕
                </button>
              </div>
            )}

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              {/* Category Pills */}
              <div className="flex items-center space-x-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all flex items-center space-x-1.5 ${
                      selectedCategory === cat
                        ? 'bg-blue-600 text-white shadow-md shadow-blue-200'
                        : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                    }`}
                  >
                    {cat === 'Google Reviews' && (
                      <span className="w-3.5 h-3.5 rounded-full bg-white text-blue-600 flex items-center justify-center text-[9px] font-black mr-0.5">
                        G
                      </span>
                    )}
                    <span>{cat}</span>
                  </button>
                ))}
              </div>

              {/* Action Buttons: Sync Google Reviews + Write Review Modal Trigger */}
              <div className="flex flex-wrap items-center gap-2.5 shrink-0 self-start md:self-auto">
                <button
                  onClick={handleSyncGoogleReviews}
                  disabled={isSyncingReviews}
                  className="bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 hover:border-blue-400 px-4 py-2.5 rounded-full text-xs font-bold shadow-sm flex items-center space-x-2 transition-all cursor-pointer disabled:opacity-60"
                  title="Fetch customer reviews directly from Google Business Profile"
                >
                  <RefreshCw className={`w-3.5 h-3.5 text-blue-600 ${isSyncingReviews ? 'animate-spin' : ''}`} />
                  <span>{isSyncingReviews ? 'Fetching Reviews...' : 'Sync Google Reviews'}</span>
                </button>

                <button
                  onClick={() => setIsReviewModalOpen(true)}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-full text-xs font-bold shadow-md shadow-emerald-100 flex items-center space-x-2 cursor-pointer transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Share Your Recovery Story</span>
                </button>
              </div>
            </div>
          </div>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredReviews.map((review) => {
              const isGoogle = review.source === 'google_business' || review.id.startsWith('gmb-');
              return (
                <div
                  key={review.id}
                  className={`bg-white rounded-3xl p-6 border ${
                    isGoogle ? 'border-blue-200 shadow-md shadow-blue-500/5 ring-1 ring-blue-500/20' : 'border-slate-200 shadow-sm'
                  } hover:shadow-md transition-all flex flex-col justify-between`}
                >
                  <div className="space-y-4">
                    
                    {/* Rating Stars & Badges */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1 text-amber-400">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                        ))}
                      </div>

                      <div className="flex items-center space-x-1.5">
                        {isGoogle && (
                          <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 text-[10px] font-bold border border-blue-200">
                            <span className="font-extrabold text-blue-600">G</span>
                            <span>Google Verified</span>
                          </span>
                        )}
                        {review.tag.toLowerCase().includes('home') ? (
                          <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-bold border border-emerald-100">
                            Home Visit Patient
                          </span>
                        ) : !isGoogle ? (
                          <span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 text-[10px] font-bold border border-blue-100">
                            {review.tag || 'In-Clinic Patient'}
                          </span>
                        ) : null}
                      </div>
                    </div>

                    {/* Patient & Condition Headline */}
                    <div className="flex items-center space-x-3">
                      {review.reviewerPhotoUrl ? (
                        <img 
                          src={review.reviewerPhotoUrl} 
                          alt={review.patientName} 
                          className="w-10 h-10 rounded-full object-cover border border-slate-200 shrink-0"
                          onError={(e) => {
                            // Fallback to initial avatar
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                      ) : (
                        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-sm">
                          {review.patientName.charAt(0)}
                        </div>
                      )}
                      <div className="min-w-0 flex-1">
                        <h4 className="text-xs font-bold text-slate-900 truncate">{review.patientName}</h4>
                        <p className="text-[11px] text-blue-600 font-medium truncate">{review.condition}</p>
                        {review.reviewDate && (
                          <span className="text-[10px] text-slate-400 flex items-center space-x-1">
                            <Clock className="w-2.5 h-2.5" />
                            <span>Posted on Google {review.reviewDate}</span>
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Comment */}
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                      "{review.story}"
                    </p>

                    {/* Doctor's Observation / Reply */}
                    {review.reply ? (
                      <div className="p-3 rounded-2xl bg-blue-50/80 border border-blue-100 text-[11px] text-slate-800 space-y-1">
                        <div className="flex items-center space-x-1 font-bold text-blue-800 text-[10px] uppercase tracking-wider">
                          <CheckCircle2 className="w-3 h-3 text-blue-600" />
                          <span>Response from Dr. Pawan Gupta (PT)</span>
                        </div>
                        <p className="text-slate-600 italic">"{review.reply}"</p>
                      </div>
                    ) : review.doctorQuote ? (
                      <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 text-[11px] text-slate-800 space-y-0.5">
                        <span className="font-bold text-slate-700 text-[10px] block uppercase tracking-wider">Clinical Insight:</span>
                        <p className="text-slate-600 italic">"{review.doctorQuote}"</p>
                      </div>
                    ) : null}

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
                      <div className="flex items-center space-x-1 text-[10px] text-slate-400">
                        <MapPin className="w-3 h-3 text-slate-400" />
                        <span>{review.location}</span>
                      </div>
                    </div>

                    <div className="text-right">
                      <span className="text-[10px] text-slate-400 block">{review.occupation}</span>
                      <span className="text-[10px] text-emerald-600 font-bold flex items-center space-x-0.5 justify-end">
                        <CheckCircle2 className="w-3 h-3" />
                        <span>{isGoogle ? 'Google Profile' : review.verified ? 'Verified Case' : 'Patient Story'}</span>
                      </span>
                    </div>
                  </div>

                </div>
              );
            })}
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
        onReviewSubmitted={(newReview) => {
          setReviewsList((prev) => [newReview, ...prev]);
        }}
      />

    </div>
  );
};

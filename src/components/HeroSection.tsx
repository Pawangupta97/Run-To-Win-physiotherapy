import React from 'react';
import { 
  ShieldCheck, 
  Calendar, 
  MessageSquare, 
  Phone, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Activity, 
  Home, 
  Award, 
  Star, 
  Clock, 
  MapPin, 
  Users,
  TrendingUp,
  HeartHandshake,
  Video
} from 'lucide-react';
import { motion } from 'motion/react';
import { CLINIC_CONTACT } from '../data/clinicData';
import heroClinicalImg from '../assets/images/regenerated_image_1787088212933.webp';

interface HeroSectionProps {
  onOpenBooking: (prefillService?: string, prefillArea?: string) => void;
  onOpenAiAssistant: () => void;
  onSelectBodyRegion: (regionId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenBooking,
  onOpenAiAssistant,
  onSelectBodyRegion,
}) => {
  const quickConditions = [
    { label: 'Severe Sciatica & Back Pain', regionId: 'lower-back' },
    { label: 'Frozen Shoulder Recovery', regionId: 'shoulder' },
    { label: 'Knee Osteoarthritis / TKR', regionId: 'knee' },
    { label: 'ACL & Sports Injury', regionId: 'knee' },
    { label: 'Neck Pain & Spondylosis', regionId: 'cervical-neck' },
    { label: 'Stroke & Neuro Home Rehab', regionId: 'mumbai-home-visits' },
  ];

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50/70 via-white to-emerald-50/40 text-slate-900 pt-8 pb-14 lg:pt-14 lg:pb-20 border-b border-slate-100">
        {/* Background Subtle Grid & Light Glow Effects */}
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(#94a3b8_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Top Tagline Pills with Motion Animation */}
          <motion.div 
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 mb-5"
          >
            <div className="inline-flex items-center gap-2 bg-blue-900 text-white px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span>Evidence-Based Physiotherapy</span>
            </div>
            <a
              href={CLINIC_CONTACT.googleBusinessUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full bg-white border border-slate-300 text-slate-800 text-xs font-semibold shadow-sm hover:border-amber-500 transition min-h-[36px]"
              aria-label="Google reviews for Run To Win Healthcare: 4.9 stars out of 128 plus reviews"
            >
              <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
              <span>4.9★ Google Business (128+ Reviews)</span>
            </a>
            <div className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full bg-emerald-100/80 border border-emerald-300 text-emerald-900 text-xs font-bold min-h-[36px]">
              <Home className="w-4 h-4 text-emerald-700" />
              <span>Doorstep Home Care Across Mumbai</span>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Main Hero Copy & Action Buttons */}
            <motion.div 
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="lg:col-span-7 text-center lg:text-left space-y-5"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-950 tracking-tight leading-[1.14] font-heading">
                Move Better.<br />
                <span className="text-blue-700">Recover Stronger.</span><br />
                Live Pain-Free.
              </h1>

              <p className="text-slate-700 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
                Personalized physiotherapy and clinical rehabilitation by <span className="font-bold text-slate-950 underline decoration-blue-500 decoration-2">Dr Pawan Gupta (PT)</span>. Serving patients at our Sewri clinic and via prompt bedside home visits across Mumbai for spine, joint replacement, sports injuries, and neuro recovery.
              </p>

              {/* Elderly & Family Arranging Care Notice */}
              <div className="bg-amber-50/90 border border-amber-200/90 rounded-2xl p-3.5 sm:p-4 text-left shadow-xs flex items-start gap-3">
                <HeartHandshake className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-slate-800 leading-snug">
                  <span className="font-bold text-amber-950 block sm:inline">Arranging care for an elderly parent or family member? </span>
                  <span>We specialize in gentle, supportive home visits with portable therapy equipment. No clinic travel required.</span>
                </div>
              </div>

              {/* PRIMARY PATIENT ACTIONS */}
              <div className="pt-2 space-y-3">
                {/* Top Primary Actions: Book Assessment + Call + WhatsApp */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-2.5">
                  <button
                    onClick={() => onOpenBooking('In-Clinic Consultation')}
                    className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-4 rounded-xl font-extrabold text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-md hover:shadow-lg transition-all min-h-[52px] active:scale-[0.99] border border-blue-600"
                    id="hero-book-assessment-btn"
                  >
                    <Calendar className="w-5 h-5 text-white" />
                    <span>BOOK PHYSIOTHERAPY ASSESSMENT</span>
                  </button>

                  <a
                    href={`tel:${CLINIC_CONTACT.phone}`}
                    className="flex items-center justify-center gap-2 px-5 py-4 rounded-xl font-bold text-sm sm:text-base bg-slate-900 hover:bg-slate-800 text-white transition shadow-sm min-h-[52px]"
                    aria-label={`Call Dr. Pawan Gupta clinic at ${CLINIC_CONTACT.phoneDisplay}`}
                  >
                    <Phone className="w-4 h-4 text-emerald-400" />
                    <span>CALL: {CLINIC_CONTACT.phoneDisplay}</span>
                  </a>

                  <a
                    href={`https://wa.me/${CLINIC_CONTACT.whatsappNumber}?text=Hello%20Dr.%20Pawan%20Gupta,%20I%20would%20like%20to%20book%20a%20physiotherapy%20assessment.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-5 py-4 rounded-xl font-bold text-sm sm:text-base text-emerald-950 bg-emerald-400 hover:bg-emerald-300 transition shadow-sm min-h-[52px]"
                    aria-label="Chat directly with Dr. Pawan Gupta on WhatsApp"
                  >
                    <MessageSquare className="w-4 h-4 text-emerald-950 fill-emerald-950" />
                    <span>WHATSAPP</span>
                  </a>
                </div>

                {/* Secondary Fast Action Buttons: Home Visit & Online Consultation */}
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1">
                  <button
                    onClick={() => onOpenBooking('Home Visit Physiotherapy (Mumbai)')}
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-bold bg-white text-slate-800 border-2 border-emerald-600 hover:bg-emerald-50 transition min-h-[44px]"
                  >
                    <Home className="w-4 h-4 text-emerald-700" />
                    <span>HOME VISIT (MUMBAI)</span>
                  </button>

                  <button
                    onClick={() => onOpenBooking('Online Video Physiotherapy')}
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-bold bg-white text-slate-800 border border-slate-300 hover:bg-slate-50 transition min-h-[44px]"
                  >
                    <Video className="w-4 h-4 text-blue-700" />
                    <span>ONLINE CONSULTATION</span>
                  </button>

                  <button
                    onClick={onOpenAiAssistant}
                    className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-lg text-xs font-bold bg-blue-50 text-blue-800 border border-blue-200 hover:bg-blue-100 transition min-h-[44px]"
                    title="Interactive symptom triage assistant"
                  >
                    <Sparkles className="w-4 h-4 text-blue-700" />
                    <span>AI Symptom Triage</span>
                  </button>
                </div>
              </div>

              {/* Quick Symptom Trigger Pills */}
              <div className="pt-2">
                <p className="text-xs uppercase tracking-wider text-slate-500 font-bold mb-2">
                  What condition can we help you with?
                </p>
                <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                  {quickConditions.map((item) => (
                    <button
                      key={item.label}
                      onClick={() => {
                        if (item.regionId === 'mumbai-home-visits') {
                          onOpenBooking('Home Visit Physiotherapy (Mumbai)');
                        } else {
                          onSelectBodyRegion(item.regionId);
                          const element = document.getElementById('body-map');
                          element?.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className="text-xs px-3 py-2 rounded-lg bg-white hover:bg-blue-50 border border-slate-200 hover:border-blue-300 text-slate-800 transition shadow-xs flex items-center space-x-1.5 font-semibold min-h-[40px]"
                    >
                      <span>{item.label}</span>
                      <ArrowRight className="w-3 h-3 text-slate-400" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Trust & Clinical Safety Points (No false medical promises) */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-3 border-t border-slate-200 text-xs text-slate-700 font-semibold">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>Evidence-Based Protocols</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-700 shrink-0" />
                  <span>Certified Manual Therapy</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>Prompt Home Visit Scheduling</span>
                </div>
              </div>
            </motion.div>

            {/* Right Hero Feature Visual Card with Image & Overlays */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="lg:col-span-5"
            >
              <div className="bg-white rounded-3xl shadow-xl p-5 sm:p-6 border border-slate-200/80 space-y-4 relative overflow-hidden">
                
                {/* Hero Clinical Photo Visual with Explicit Dimensions & LCP Priority */}
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 shadow-inner">
                  <img 
                    src={heroClinicalImg} 
                    alt="Dr. Pawan Gupta (PT) conducting orthopedic physical therapy assessment and manual treatment in Mumbai" 
                    loading="eager"
                    fetchPriority="high"
                    decoding="async"
                    width="600"
                    height="450"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/25 to-transparent"></div>

                  {/* Floating Live Badge */}
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-bold text-slate-900 flex items-center space-x-2 shadow-md border border-white/60">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-pulse"></span>
                    <span>Sewri Clinic & Home Visits Active</span>
                  </div>

                  {/* Doctor Info on Image */}
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <div className="flex items-center space-x-1.5">
                      <h3 className="text-base font-bold font-heading text-white">Dr Pawan Gupta (PT)</h3>
                      <ShieldCheck className="w-4 h-4 text-blue-400" />
                    </div>
                    <p className="text-[11px] text-blue-200 font-medium">B.P.Th, M.P.Th • Consultant Physiotherapist</p>
                  </div>
                </div>

                {/* Clinical Excellence Highlight */}
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                      <Activity className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">
                        Evidence-Based Recovery
                      </h4>
                      <p className="text-[10px] text-slate-500">
                        Targeted manual therapy, dry needling & kinetic rehab
                      </p>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-1 bg-emerald-100 text-emerald-700 rounded-md">
                    Non-Invasive
                  </span>
                </div>

                {/* Stats Badges Grid with Animated Progress */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-emerald-50 p-3.5 rounded-2xl border border-emerald-100 text-left">
                    <div className="text-emerald-700 font-extrabold text-xl font-heading">1,000+</div>
                    <div className="text-[10px] text-emerald-600 font-bold uppercase tracking-wider mt-0.5">
                      Patients Healed
                    </div>
                  </div>
                  <div className="bg-blue-50 p-3.5 rounded-2xl border border-blue-100 text-left">
                    <div className="text-blue-700 font-extrabold text-xl font-heading">4.9 ★</div>
                    <div className="text-[10px] text-blue-600 font-bold uppercase tracking-wider mt-0.5">
                      Google Rating
                    </div>
                  </div>
                </div>

                {/* Direct Urgent Pain Call Box */}
                <div className="p-3 rounded-2xl bg-slate-900 text-white flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider block">
                      Urgent Acute Pain?
                    </span>
                    <span className="text-xs text-slate-300 font-medium">Direct Desk Line</span>
                  </div>
                  <a
                    href={`tel:${CLINIC_CONTACT.phone}`}
                    className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs flex items-center space-x-1.5 transition shadow-sm"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call Now</span>
                  </a>
                </div>

              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* 4-Column Stats & Info Strip */}
      <div className="bg-slate-100 border-b border-slate-200 grid grid-cols-2 lg:grid-cols-4 gap-px">
        <div className="bg-white flex items-center gap-3.5 px-6 py-5">
          <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
            <MapPin className="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-tight leading-none mb-1">
              Location
            </p>
            <p className="text-xs sm:text-sm font-bold text-slate-800">
              Sewri, Mumbai
            </p>
          </div>
        </div>

        <div className="bg-white flex items-center gap-3.5 px-6 py-5">
          <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center shrink-0">
            <Phone className="w-5 h-5 text-emerald-600" />
          </div>
          <div>
            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-tight leading-none mb-1">
              Call Support
            </p>
            <p className="text-xs sm:text-sm font-bold text-slate-800">
              {CLINIC_CONTACT.phoneDisplay}
            </p>
          </div>
        </div>

        <div className="bg-white flex items-center gap-3.5 px-6 py-5">
          <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center shrink-0">
            <Clock className="w-5 h-5 text-amber-600" />
          </div>
          <div>
            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-tight leading-none mb-1">
              Availability
            </p>
            <p className="text-xs sm:text-sm font-bold text-slate-800">
              Mon – Sat, 8AM – 9PM
            </p>
          </div>
        </div>

        <div className="bg-white flex items-center gap-3.5 px-6 py-5">
          <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 font-bold text-sm shrink-0">
            ★
          </div>
          <div>
            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-tight leading-none mb-1">
              Patient Reviews
            </p>
            <p className="text-xs sm:text-sm font-bold text-slate-800">
              4.9★ Rated on Google
            </p>
          </div>
        </div>
      </div>
    </>
  );
};


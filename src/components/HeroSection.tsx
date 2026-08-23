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
  HeartHandshake
} from 'lucide-react';
import { motion } from 'motion/react';
import { CLINIC_CONTACT } from '../data/clinicData';
import heroClinicalImg from '../assets/images/regenerated_image_1787088212933.png';

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
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50/60 via-white to-emerald-50/40 text-slate-900 pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-slate-100">
        {/* Background Subtle Grid & Light Glow Effects */}
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Top Tagline Pills with Motion Animation */}
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 mb-6"
          >
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-ping"></span>
              <span>Mumbai's Premium Physiotherapy</span>
            </div>
            <a
              href={CLINIC_CONTACT.googleBusinessUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-slate-700 text-xs font-semibold shadow-sm hover:border-amber-400 transition"
            >
              <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
              <span>4.9★ Google Business (128+ Reviews)</span>
            </a>
            <div className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold">
              <Home className="w-3.5 h-3.5 text-emerald-600" />
              <span>Doorstep Home Care in Sewri & Mumbai</span>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Main Hero Copy & Action Buttons */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-7 text-center lg:text-left space-y-6"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12] font-heading">
                Move Better.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Recover Stronger.</span><br />
                Live Without Limits.
              </h1>

              <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
                Expert rehabilitation and personalized recovery solutions with <span className="font-semibold text-slate-800 underline decoration-emerald-400 decoration-2">Dr Pawan Gupta (PT)</span>. We bring elite clinical orthopedic, sports injury, spine, and neuro care to our Sewri clinic or right to your home doorstep across Mumbai.
              </p>

              {/* Quick Interactive Symptom Trigger Pills */}
              <div className="pt-1">
                <p className="text-xs uppercase tracking-wider text-slate-400 font-bold mb-2">
                  What are you struggling with today?
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
                      className="text-xs px-3 py-1.5 rounded-xl bg-white hover:bg-blue-50 border border-slate-200 hover:border-blue-300 text-slate-700 hover:text-blue-700 transition shadow-sm flex items-center space-x-1.5 font-medium hover:scale-105"
                    >
                      <span>{item.label}</span>
                      <ArrowRight className="w-3 h-3 text-slate-400" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Primary Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-2">
                <button
                  onClick={() => onOpenBooking()}
                  className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transition-all duration-150 group hover:scale-[1.02]"
                >
                  <span>Start Your Recovery</span>
                  <ArrowRight className="w-4 h-4 text-emerald-400 group-hover:translate-x-1 transition-transform" />
                </button>

                <a
                  href={`https://wa.me/${CLINIC_CONTACT.whatsappNumber}?text=Hello%20Dr.%20Pawan%20Gupta,%20I%20need%20physiotherapy%20consultation.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl font-bold text-emerald-600 border border-emerald-200 bg-emerald-50/80 hover:bg-emerald-100 transition shadow-sm hover:scale-[1.02]"
                >
                  <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse"></div>
                  <span>WhatsApp Us</span>
                </a>

                <button
                  onClick={onOpenAiAssistant}
                  className="w-full sm:w-auto px-5 py-4 rounded-xl text-sm font-semibold bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-100 transition flex items-center justify-center space-x-2 hover:scale-[1.02]"
                >
                  <Sparkles className="w-4 h-4 text-blue-600 animate-pulse" />
                  <span>AI Triage</span>
                </button>
              </div>

              {/* Trust Points */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 border-t border-slate-200 text-xs text-slate-600 font-medium">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>No Surgery First Protocol</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Certified Dry Needling</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Same-Day Mumbai Visits</span>
                </div>
              </div>
            </motion.div>

            {/* Right Hero Feature Visual Card with Image & Animated Overlays */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-5"
            >
              <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-7 border border-slate-100 space-y-5 relative overflow-hidden group">
                
                {/* Hero Clinical Photo Visual */}
                <div className="relative h-52 sm:h-60 rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 shadow-inner">
                  <img 
                    src={heroClinicalImg} 
                    alt="Dr Pawan Gupta Physiotherapy Clinic Session" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/30 to-transparent"></div>

                  {/* Floating Live Badge */}
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-slate-800 flex items-center space-x-1.5 shadow-md border border-white/50">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
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


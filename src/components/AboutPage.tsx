import React from 'react';
import { 
  Award, 
  CheckCircle2, 
  Calendar, 
  Phone, 
  MapPin, 
  ShieldCheck, 
  GraduationCap, 
  HeartHandshake, 
  Clock, 
  Sparkles, 
  Activity, 
  Zap, 
  Users, 
  MessageSquare,
  ArrowRight,
  ChevronRight,
  Stethoscope,
  Building,
  Star
} from 'lucide-react';
import { CLINIC_CONTACT } from '../data/clinicData';
import { SeoMeta } from './SeoMeta';

interface AboutPageProps {
  onBackToHome: () => void;
  onOpenBooking: (prefillService?: string, prefillArea?: string) => void;
  onOpenAiAssistant: () => void;
  onNavigatePage: (page: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onBackToHome,
  onOpenBooking,
  onOpenAiAssistant,
  onNavigatePage,
}) => {
  return (
    <div className="bg-slate-50 min-h-screen">
      <SeoMeta
        title="About Dr. Pawan Gupta (PT) | Senior Consultant Physiotherapist Mumbai"
        description="Learn about Dr. Pawan Gupta (PT), B.P.Th, M.P.Th (MIAP), Senior Consultant Physiotherapist in Mumbai. 8+ years experience in spine care, sports rehab, and post-op recovery."
        canonicalUrl="https://runtowinphysiotherapy.com/#about"
      />

      {/* Breadcrumbs */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center text-xs text-slate-500">
          <button onClick={onBackToHome} className="hover:text-blue-600 font-medium">Home</button>
          <ChevronRight className="w-3.5 h-3.5 mx-2 text-slate-400" />
          <span className="text-slate-900 font-semibold">About Dr. Pawan Gupta (PT)</span>
        </div>
      </div>

      {/* Hero / Header Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Col: Credentials & Introduction */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-semibold uppercase tracking-wider">
                <GraduationCap className="w-4 h-4 text-blue-400" />
                <span>Clinical Director & Lead Physical Therapist</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight font-heading leading-tight">
                Dr. Pawan Gupta <span className="text-blue-400">(PT)</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 font-medium leading-relaxed">
                B.P.Th, M.P.Th (Musculoskeletal & Sports Specialist), MIAP<br />
                <span className="text-blue-300">Certified Dry Needling Practitioner & Manual Therapist</span>
              </p>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
                Dedicated to helping Mumbaikars overcome debilitating spine pain, joint arthritis, post-surgical stiffness, and sports injuries without reliance on perpetual painkillers or unnecessary surgeries. Practicing at Sewri Clinic and providing doorstep home care across 35+ Mumbai suburbs.
              </p>

              {/* Stats Strip */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-slate-800">
                {CLINIC_CONTACT.stats.map((stat, idx) => (
                  <div key={idx} className="bg-slate-800/60 backdrop-blur rounded-2xl p-4 border border-slate-700/60">
                    <div className="text-2xl sm:text-3xl font-extrabold text-blue-400 font-heading">
                      {stat.value}
                    </div>
                    <div className="text-xs text-slate-300 mt-1 font-medium leading-tight">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 pt-2">
                <button
                  onClick={() => onOpenBooking('In-Clinic Consultation', 'Sewri Clinic')}
                  className="bg-blue-600 text-white px-6 py-3 rounded-full text-sm font-bold shadow-lg shadow-blue-600/30 hover:bg-blue-500 active:scale-98 transition-all flex items-center space-x-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Consultation With Dr. Pawan</span>
                </button>

                <a
                  href={`tel:${CLINIC_CONTACT.phone}`}
                  className="bg-slate-800 text-slate-100 hover:bg-slate-700 px-6 py-3 rounded-full text-sm font-semibold border border-slate-700 transition flex items-center space-x-2"
                >
                  <Phone className="w-4 h-4 text-emerald-400" />
                  <span>Call {CLINIC_CONTACT.phoneDisplay}</span>
                </a>
              </div>
            </div>

            {/* Right Col: Doctor Feature Card */}
            <div className="lg:col-span-5">
              <div className="bg-gradient-to-b from-slate-800/90 to-slate-900/90 rounded-3xl p-6 sm:p-8 border border-slate-700 shadow-2xl backdrop-blur">
                <div className="flex items-center space-x-4 pb-6 border-b border-slate-700/80">
                  <div className="w-16 h-16 rounded-2xl bg-blue-600 flex items-center justify-center text-white font-black text-2xl shadow-md">
                    PG
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white font-heading">Dr. Pawan Gupta (PT)</h3>
                    <p className="text-xs text-blue-400 font-medium">Founder, Run To Win Healthcare</p>
                    <div className="flex items-center space-x-1 mt-1 text-amber-400 text-xs font-semibold">
                      <Star className="w-3.5 h-3.5 fill-amber-400" />
                      <span>4.9 / 5.0 Google Rating (128+ Reviews)</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 pt-6 text-xs sm:text-sm text-slate-300">
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white">Life Member of IAP:</strong> Member of Indian Association of Physiotherapists (MIAP).
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white">Orthopedic & Sports Specialization:</strong> Master of Physiotherapy (M.P.Th) with biomechanical focus.
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white">Advanced Manual Certifications:</strong> Certified in Maitland, Mulligan joint mobilization, Trigger Point Dry Needling & Myofascial Cupping.
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white">Surgeon Protocol Collaborative:</strong> Works with orthopedic surgeons across Mumbai for post-TKR, THR, and spine surgery rehab.
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-slate-700/80 bg-slate-900/50 -mx-6 -mb-6 p-6 rounded-b-3xl text-xs flex items-center justify-between">
                  <span className="text-slate-400">Sewri Clinic & Home Visits</span>
                  <span className="text-emerald-400 font-bold">Accepting New Patients</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Clinical Philosophy & Approach */}
      <section className="py-16 md:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
              <HeartHandshake className="w-3.5 h-3.5" />
              <span>Core Clinical Philosophy</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
              "Care To Cure" — Evidence Over Temporary Relief
            </h2>
            <p className="mt-3 text-base text-slate-600">
              Unlike generic massage or passive heat packs, our treatment methodology is rooted in clinical biomechanics, active functional retraining, and root-cause resolution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 hover:border-blue-300 transition shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-md">
                <Stethoscope className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 font-heading">
                1. Accurate Biomechanical Assessment
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Every recovery begins with a 45-minute comprehensive physical examination: assessing joint range of motion, muscle length-tension imbalances, neural tension tests (SLR, Slump), and movement kinematics.
              </p>
            </div>

            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 hover:border-blue-300 transition shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shadow-md">
                <Activity className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 font-heading">
                2. Hands-On Manual Therapy & Modalities
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Targeted joint mobilizations (Maitland/Mulligan), trigger point dry needling, myofascial decompression cupping, and electrotherapy modalities are applied to break pain-spasm cycles and restore mobility immediately.
              </p>
            </div>

            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 hover:border-blue-300 transition shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-600 text-white flex items-center justify-center shadow-md">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 font-heading">
                3. Progressive Exercise & Relapse Prevention
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Patients are progressed through isometric, concentric, and high-load eccentric stability drills. We provide tailored home exercise videos and desk ergonomic plans so the pain never returns.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Qualifications & Accreditations */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 text-blue-700 text-xs font-bold uppercase tracking-wider">
                <Award className="w-4 h-4" />
                <span>Degrees & Certified Competencies</span>
              </div>
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight font-heading">
                Medical Qualifications & Specialized Certifications
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Dr. Pawan Gupta (PT) continuously updates clinical protocols with international rehabilitation guidelines to ensure patients receive the highest standard of physical therapy care.
              </p>

              <div className="space-y-3">
                <div className="bg-white p-4 rounded-2xl border border-slate-200 flex items-start space-x-3">
                  <GraduationCap className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Bachelor of Physiotherapy (B.P.Th)</h4>
                    <p className="text-xs text-slate-500">Comprehensive 4.5-year clinical foundation in anatomy, biomechanics, neurology, and musculoskeletal pathology.</p>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-slate-200 flex items-start space-x-3">
                  <GraduationCap className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Master of Physiotherapy (M.P.Th)</h4>
                    <p className="text-xs text-slate-500">Postgraduate specialization in Musculoskeletal Disorders and Sports Rehabilitation.</p>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-slate-200 flex items-start space-x-3">
                  <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Certified Dry Needling Practitioner (CDNP)</h4>
                    <p className="text-xs text-slate-500">Advanced intramuscular trigger point deactivation for myofascial pain syndrome and chronic spasm.</p>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-slate-200 flex items-start space-x-3">
                  <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Certified Manual Therapist (Maitland / Mulligan Concepts)</h4>
                    <p className="text-xs text-slate-500">Specialized joint mobilization and manipulation techniques for spinal and peripheral joints.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Clinic Facility & Doorstep Care */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <Building className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 font-heading">
                Sewri Clinic & Doorstep Care Across Mumbai
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Whether visiting our modern physiotherapy clinic in Sewri or booking a home visit session in South Mumbai, Western Suburbs, or Central Mumbai, you receive the same dedicated equipment and 1-on-1 personalized attention.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-semibold text-slate-700 pt-2">
                <div className="flex items-center space-x-2 bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <Clock className="w-4 h-4 text-blue-600" />
                  <span>Mon–Sat: 8 AM – 9 PM</span>
                </div>
                <div className="flex items-center space-x-2 bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <MapPin className="w-4 h-4 text-emerald-600" />
                  <span>Sewri, Mumbai 400015</span>
                </div>
                <div className="flex items-center space-x-2 bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <Users className="w-4 h-4 text-purple-600" />
                  <span>1,000+ Recovered Patients</span>
                </div>
                <div className="flex items-center space-x-2 bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <Phone className="w-4 h-4 text-amber-600" />
                  <span>98386 88745</span>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => onOpenBooking('In-Clinic Consultation', 'Sewri Clinic')}
                  className="flex-1 bg-blue-600 text-white py-3 rounded-xl text-xs font-bold hover:bg-blue-700 transition"
                >
                  Book Clinic Appointment
                </button>
                <button
                  onClick={() => onNavigatePage('home-visits')}
                  className="flex-1 bg-slate-100 text-slate-800 py-3 rounded-xl text-xs font-bold hover:bg-slate-200 transition"
                >
                  Explore Home Visit Areas →
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-14 bg-gradient-to-r from-blue-700 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold font-heading">
            Ready To Start Your Recovery With Dr. Pawan Gupta (PT)?
          </h2>
          <p className="text-sm sm:text-base text-blue-100 max-w-2xl mx-auto">
            Book a clinical consultation at Sewri Clinic or request a home visit across Mumbai.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => onOpenBooking()}
              className="bg-white text-blue-900 px-8 py-3.5 rounded-full text-sm font-bold shadow-xl hover:bg-blue-50 active:scale-98 transition"
            >
              Book In-Person Assessment
            </button>
            <button
              onClick={onOpenAiAssistant}
              className="bg-blue-800/80 text-white px-6 py-3.5 rounded-full text-sm font-semibold border border-blue-400/40 hover:bg-blue-800 transition flex items-center space-x-2"
            >
              <Sparkles className="w-4 h-4 text-blue-300" />
              <span>Ask AI Triage Assistant</span>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

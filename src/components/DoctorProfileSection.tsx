import React from 'react';
import doctorPhoto from '../assets/images/regenerated_image_1787089379420.jpg';
import { 
  ShieldCheck, 
  Award, 
  BookOpen, 
  CheckCircle2, 
  Calendar, 
  MessageSquare, 
  Phone, 
  HeartHandshake, 
  Star, 
  Activity, 
  FileText 
} from 'lucide-react';
import { motion } from 'motion/react';
import { CLINIC_CONTACT } from '../data/clinicData';

interface DoctorProfileSectionProps {
  onOpenBooking: () => void;
}

export const DoctorProfileSection: React.FC<DoctorProfileSectionProps> = ({ onOpenBooking }) => {
  const credentials = [
    {
      title: 'B.P.Th & M.P.Th (Musculoskeletal & Sports)',
      desc: 'Master of Physiotherapy specializing in Orthopedic, Spine & Athletic Performance Biomechanics.',
    },
    {
      title: 'Certified Dry Needling Practitioner (CDNP)',
      desc: 'Advanced trigger point dry needling for deep myofascial release and chronic neuromuscular pain.',
    },
    {
      title: 'Certified Manual Therapist (MIAP)',
      desc: 'Mastery in Maitland & Mulligan joint mobilization, spinal decompression, and capsular stretching.',
    },
    {
      title: 'Certified Kinesiology Taping & IASTM Specialist',
      desc: 'Biomechanical dynamic taping and instrument-assisted fascial release for accelerated soft-tissue healing.',
    },
  ];

  const pillars = [
    {
      title: 'Root-Cause Diagnosis',
      desc: 'We assess kinetic chain alignment and muscle imbalances before treating.',
    },
    {
      title: 'Surgery-Free Protocol',
      desc: 'Over 90% of spine disc bulges and knee arthritis recover non-surgically with us.',
    },
    {
      title: 'Personalized Supervision',
      desc: 'Hands-on manual therapy and targeted progressive exercise loading every visit.',
    },
  ];

  return (
    <section id="doctor" className="py-16 md:py-24 bg-white border-b border-slate-200 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Doctor Profile Visual & Credentials Card */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5"
          >
            <div className="relative">
              
              {/* Doctor Aesthetic Visual Badge Card */}
              <div className="bg-gradient-to-tr from-slate-900 via-slate-800 to-blue-950 rounded-3xl p-7 text-white shadow-2xl relative overflow-hidden border border-slate-800 space-y-5">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/15 rounded-full blur-3xl pointer-events-none"></div>
                
                {/* Doctor Visual & Header Info */}
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border-2 border-blue-400/50 shadow-lg shadow-blue-500/25 shrink-0 bg-slate-800">
                    <img 
                      src={doctorPhoto} 
                      alt="Dr Pawan Gupta (PT)" 
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div>
                    <div className="flex items-center space-x-1.5">
                      <h3 className="text-xl sm:text-2xl font-extrabold text-white font-heading">
                        Dr Pawan Gupta
                      </h3>
                      <span className="text-emerald-400 font-bold">(PT)</span>
                    </div>
                    <p className="text-xs text-blue-300 font-semibold tracking-wide">
                      Consultant Physiotherapist & Rehab Specialist
                    </p>
                    <p className="text-xs text-slate-300 mt-1">
                      8+ Years Clinical Excellence in Mumbai
                    </p>
                  </div>
                </div>

                {/* Doctor Accreditations & Experience Stats */}
                <div className="grid grid-cols-2 gap-3 pt-1">
                  <div className="p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700">
                    <span className="text-2xl font-black text-blue-400 font-heading block">8+</span>
                    <span className="text-xs text-slate-300">Years Experience</span>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700">
                    <span className="text-2xl font-black text-emerald-400 font-heading block">1,000+</span>
                    <span className="text-xs text-slate-300">Treated Patients</span>
                  </div>
                </div>

                {/* Verified Rating */}
                <div className="p-3 rounded-2xl bg-slate-800/60 border border-slate-700 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                    <span className="text-xs font-bold text-white">4.9 / 5.0</span>
                  </div>
                  <a 
                    href={CLINIC_CONTACT.googleBusinessUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] text-emerald-400 hover:text-emerald-300 font-semibold underline"
                  >
                    Google Verified
                  </a>
                </div>

                {/* Clinical Philosophy Quote */}
                <blockquote className="text-xs italic text-slate-300 border-l-2 border-blue-500 pl-3 leading-relaxed">
                  "My mission is simple: eliminate root pain causes through science-driven manual techniques, restoring every patient's freedom to run, work, and live without limits."
                </blockquote>

                {/* Direct Contact Buttons */}
                <div className="pt-1 flex flex-col sm:flex-row gap-2">
                  <button
                    onClick={onOpenBooking}
                    className="flex-1 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-md shadow-blue-500/25 transition flex items-center justify-center space-x-1.5"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Book with Dr Pawan</span>
                  </button>
                  <a
                    href={`https://wa.me/${CLINIC_CONTACT.whatsappNumber}?text=Hello%20Dr.%20Pawan%20Gupta,%20I%20would%20like%20to%20consult%20you.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-emerald-300 text-xs font-semibold border border-slate-700 transition flex items-center justify-center space-x-1.5"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                    <span>WhatsApp</span>
                  </a>
                </div>

              </div>

            </div>
          </motion.div>

          {/* Right Column: Qualifications, Clinical Pillars & Specializations */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-8"
          >
            <div>
              <div className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3 border border-blue-100 shadow-sm">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                <span>Meet Your Physiotherapist</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading">
                Dr Pawan Gupta (PT)
              </h2>
              <p className="text-sm font-semibold text-blue-600 mt-1">
                Founder & Clinical Director — RUN TO WIN HEALTHCARE SERVICES MUMBAI
              </p>
              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                With over a decade of hands-on clinical mastery in Mumbai, <strong className="text-slate-800">Dr Pawan Gupta (PT)</strong> is renowned for handling complex musculoskeletal disorders, severe spine pathologies, high-performance athletic rehabilitation, and intensive home-visit stroke and post-joint replacement care.
              </p>
            </div>

            {/* Core Clinical Pillars */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Clinical Philosophy & Standards of Care
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {pillars.map((p, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
                    <h4 className="text-xs font-bold text-slate-900 font-heading">
                      {p.title}
                    </h4>
                    <p className="text-[11px] text-slate-600 leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Qualifications & Certifications */}
            <div>
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                Key Qualifications & Certifications
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {credentials.map((c, idx) => (
                  <div key={idx} className="flex items-start space-x-3 p-3.5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-blue-200 transition">
                    <div className="p-2 rounded-xl bg-blue-50 text-blue-600 shrink-0">
                      <Award className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">
                        {c.title}
                      </h4>
                      <p className="text-[11px] text-slate-600 mt-0.5 leading-relaxed">
                        {c.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

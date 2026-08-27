import React from 'react';
import clinicLogo from '../assets/images/regenerated_image_1787083514422.jpg';
import { 
  Activity, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageSquare, 
  ShieldCheck, 
  ArrowUp,
  Heart,
  Star,
  ExternalLink
} from 'lucide-react';
import { CLINIC_CONTACT } from '../data/clinicData';
import { HOME_VISIT_LOCATIONS } from '../data/homeVisitLocations';

interface FooterProps {
  onOpenBooking: () => void;
  onOpenAiAssistant: () => void;
  onSelectLocation?: (locationId: string) => void;
  onSelectCondition?: (conditionId: string) => void;
  onSelectArticle?: (articleId: string) => void;
  onNavigatePage?: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ 
  onOpenBooking, 
  onOpenAiAssistant, 
  onSelectLocation,
  onSelectCondition,
  onSelectArticle,
  onNavigatePage
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800">
      
      {/* Top Banner Contact Strip */}
      <div className="border-b border-slate-800 py-8 bg-slate-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-3 text-left">
            <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shrink-0 shadow-lg shadow-blue-500/20 overflow-hidden p-1 border border-slate-700">
              <img 
                src={clinicLogo} 
                alt="RUN TO WIN PHYSIOTHERAPY Logo" 
                className="w-full h-full object-contain"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (!target.dataset.tried) {
                    target.dataset.tried = 'true';
                    target.src = '/logo-%20run%20to%20win.png';
                  }
                }}
              />
            </div>
            <div>
              <h3 className="text-white font-extrabold text-lg font-heading">
                RUN TO WIN PHYSIOTHERAPY
              </h3>
              <p className="text-blue-400 font-medium text-xs">
                Dr Pawan Gupta (PT) • Care To Cure • Sewri & Mumbai Home Care
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`tel:${CLINIC_CONTACT.phone}`}
              className="px-4 py-2.5 rounded-full bg-slate-800 hover:bg-slate-700 text-white font-semibold flex items-center space-x-1.5 transition border border-slate-700"
            >
              <Phone className="w-3.5 h-3.5 text-blue-400" />
              <span>Call: {CLINIC_CONTACT.phoneDisplay}</span>
            </a>
            <a
              href={`https://wa.me/${CLINIC_CONTACT.whatsappNumber}?text=Hello%20Dr%20Pawan%20Gupta,%20I%20would%20like%20to%20book%20a%20physiotherapy%20consultation.`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold flex items-center space-x-1.5 transition shadow-sm"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Direct</span>
            </a>
            <button
              onClick={onOpenBooking}
              className="px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold transition shadow-md shadow-blue-500/20"
            >
              Book Consultation
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Col 1: Clinic Overview & Hours */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-heading">
              Clinic & Location
            </h4>
            <p className="text-slate-400 leading-relaxed">
              Premier non-surgical orthopedic, spine decompression, sports injury rehabilitation, and dedicated home care physiotherapy across Mumbai.
            </p>
            <div className="space-y-2 text-slate-300">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>{CLINIC_CONTACT.address}</span>
              </div>
              <div className="flex items-start space-x-2">
                <Clock className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>{CLINIC_CONTACT.clinicHours.weekdays}</span>
              </div>
              <div className="flex items-start space-x-2">
                <Phone className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>{CLINIC_CONTACT.phoneDisplay}</span>
              </div>
            </div>
          </div>

          {/* Col 2: Clinical Specializations & Conditions */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-heading">
              Evidence-Based Guides
            </h4>
            <ul className="space-y-1.5 text-slate-400">
              <li>
                <button
                  type="button"
                  onClick={() => onSelectCondition && onSelectCondition('lower-back')}
                  className="hover:text-blue-400 transition text-left"
                >
                  • Lower Back Pain & Sciatica
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onSelectCondition && onSelectCondition('cervical-neck')}
                  className="hover:text-blue-400 transition text-left"
                >
                  • Cervical Spondylosis & Tech Neck
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onSelectCondition && onSelectCondition('knee')}
                  className="hover:text-blue-400 transition text-left"
                >
                  • Knee Osteoarthritis & TKR
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onSelectCondition && onSelectCondition('shoulder')}
                  className="hover:text-blue-400 transition text-left"
                >
                  • Frozen Shoulder & Rotator Cuff
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onSelectCondition && onSelectCondition('neuro-stroke')}
                  className="hover:text-blue-400 transition text-left"
                >
                  • Stroke & Neuro Rehabilitation
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onSelectCondition && onSelectCondition('posture-ergonomics')}
                  className="hover:text-blue-400 transition text-left"
                >
                  • Posture & Desk Ergonomics
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Mumbai Home Visit Localities */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-heading">
              Mumbai Home Care Suburbs
            </h4>
            <p className="text-[11px] text-slate-400">
              35+ Doorstep Physiotherapy Locations (Click for details):
            </p>
            <div className="flex flex-wrap gap-1.5 max-h-56 overflow-y-auto pr-1">
              {HOME_VISIT_LOCATIONS.map((loc) => (
                <button
                  key={loc.id}
                  type="button"
                  onClick={() => {
                    if (onSelectLocation) {
                      onSelectLocation(loc.id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                  }}
                  className="px-2 py-0.5 rounded-md bg-slate-900 hover:bg-blue-900 hover:text-white text-slate-300 text-[10px] border border-slate-800 transition"
                >
                  {loc.name}
                </button>
              ))}
            </div>
          </div>

          {/* Col 4: Quick Navigation & Emergency Note */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-heading">
              Quick Actions
            </h4>
            <div className="space-y-2">
              <button
                onClick={onOpenAiAssistant}
                className="w-full py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-blue-400 font-semibold text-left transition flex items-center justify-between"
              >
                <span>AI Symptom Triage</span>
                <span className="text-[10px] bg-blue-950/80 border border-blue-800/50 px-2 py-0.5 rounded text-blue-300">Gemini</span>
              </button>
              <a
                href={CLINIC_CONTACT.googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-amber-400 font-semibold text-left transition flex items-center justify-between"
              >
                <span className="flex items-center space-x-1.5">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span className="text-slate-200">Google Business Reviews</span>
                </span>
                <span className="text-[10px] bg-amber-950/80 border border-amber-800/50 px-2 py-0.5 rounded text-amber-300">4.9 ★</span>
              </a>
            </div>

            <div className="p-3.5 bg-slate-900 rounded-2xl border border-slate-800 text-[11px] text-slate-400">
              <strong className="text-slate-300 block mb-1">Emergency Disclaimer:</strong>
              Physiotherapy is not a substitute for emergency medicine. If you experience severe chest pain, sudden paralysis, or traumatic injury, please visit the nearest hospital casualty immediately.
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} RUN TO WIN HEALTHCARE MUMBAI • Dr Pawan Gupta (PT). All rights reserved.
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-1 hover:text-white transition"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>

    </footer>
  );
};

import React from 'react';
import { Home, Phone, ArrowLeft, Search, Calendar, MapPin, Activity, HelpCircle } from 'lucide-react';
import { SeoMeta } from './SeoMeta';
import { CLINIC_CONTACT } from '../data/clinicData';

interface NotFoundPageProps {
  onGoHome: () => void;
  onOpenBooking: () => void;
  onNavigatePage: (page: string) => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({
  onGoHome,
  onOpenBooking,
  onNavigatePage,
}) => {
  return (
    <div className="min-h-[75vh] flex items-center justify-center bg-slate-50 py-16 px-4 sm:px-6 lg:px-8">
      <SeoMeta
        title="404 - Page Not Found | Run To Win Physiotherapy Mumbai"
        description="The requested page could not be found. Explore physiotherapy treatments, Mumbai home visit coverage, or book an appointment with Dr. Pawan Gupta (PT)."
        canonicalUrl="https://runtowinphysiotherapy.com/404"
        robots="noindex, follow"
      />

      <div className="max-w-2xl w-full text-center space-y-8 bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-xl">
        <div className="w-20 h-20 mx-auto rounded-3xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600">
          <HelpCircle className="w-10 h-10" />
        </div>

        <div className="space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
            Error 404
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 font-heading">
            Page Not Found
          </h1>
          <p className="text-base text-slate-600 max-w-md mx-auto">
            The page or resource you requested does not exist or has been moved. Explore our core physiotherapy services, conditions, or book a consultation below.
          </p>
        </div>

        {/* Quick Nav Options */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
          <button
            onClick={() => onNavigatePage('services')}
            className="p-3.5 rounded-2xl border border-slate-200 hover:border-blue-400 hover:bg-blue-50/50 transition flex items-center space-x-3 text-left"
          >
            <div className="w-8 h-8 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
              <Activity className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900">Services</div>
              <div className="text-[11px] text-slate-500">Orthopedic & Sports</div>
            </div>
          </button>

          <button
            onClick={() => onNavigatePage('home-visits')}
            className="p-3.5 rounded-2xl border border-slate-200 hover:border-blue-400 hover:bg-blue-50/50 transition flex items-center space-x-3 text-left"
          >
            <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900">Home Visits</div>
              <div className="text-[11px] text-slate-500">35+ Mumbai Suburbs</div>
            </div>
          </button>

          <button
            onClick={() => onNavigatePage('contact')}
            className="p-3.5 rounded-2xl border border-slate-200 hover:border-blue-400 hover:bg-blue-50/50 transition flex items-center space-x-3 text-left"
          >
            <div className="w-8 h-8 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center shrink-0">
              <Phone className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900">Contact</div>
              <div className="text-[11px] text-slate-500">Sewri & Helpline</div>
            </div>
          </button>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4 border-t border-slate-100">
          <button
            onClick={onGoHome}
            className="w-full sm:w-auto px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md transition flex items-center justify-center space-x-2"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </button>

          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-6 py-3 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm shadow-md transition flex items-center justify-center space-x-2"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Consultation</span>
          </button>

          <a
            href={`tel:${CLINIC_CONTACT.phone}`}
            className="w-full sm:w-auto px-6 py-3 rounded-full border border-slate-300 text-slate-700 hover:bg-slate-100 font-semibold text-sm transition flex items-center justify-center space-x-2"
          >
            <Phone className="w-4 h-4 text-emerald-600" />
            <span>Call Clinic</span>
          </a>
        </div>
      </div>
    </div>
  );
};

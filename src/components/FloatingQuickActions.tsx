import React from 'react';
import { 
  Phone, 
  MessageSquare, 
  Calendar, 
  Sparkles,
  MapPin
} from 'lucide-react';
import { CLINIC_CONTACT } from '../data/clinicData';

interface FloatingQuickActionsProps {
  onOpenBooking: () => void;
  onOpenAiAssistant: () => void;
}

export const FloatingQuickActions: React.FC<FloatingQuickActionsProps> = ({
  onOpenBooking,
  onOpenAiAssistant,
}) => {
  return (
    <aside aria-label="Quick contact actions" className="fixed bottom-4 right-4 z-40 flex flex-col items-end space-y-2.5">
      
      {/* AI Assistant Floating Button */}
      <button
        onClick={onOpenAiAssistant}
        className="px-3.5 py-2 rounded-full bg-slate-900/90 text-blue-400 hover:bg-slate-900 border border-blue-500/40 text-xs font-bold shadow-xl backdrop-blur-md transition-all duration-200 flex items-center space-x-1.5 hover:scale-105"
        title="Open AI Physiotherapy Assistant"
      >
        <Sparkles className="w-4 h-4 animate-pulse text-blue-400" />
        <span className="hidden sm:inline">AI Physio Triage</span>
      </button>

      {/* Floating Action Bar Pill */}
      <div className="flex items-center space-x-2 bg-slate-950/90 border border-slate-800 p-1.5 rounded-full shadow-2xl backdrop-blur-md">
        
        {/* Call Button */}
        <a
          href={`tel:${CLINIC_CONTACT.phone}`}
          className="p-3 rounded-full bg-slate-800 hover:bg-slate-700 text-white transition hover:scale-105"
          title="Call Dr Pawan Gupta Clinic"
        >
          <Phone className="w-4 h-4 text-blue-400" />
        </a>

        {/* WhatsApp Button with Ping */}
        <a
          href={`https://wa.me/${CLINIC_CONTACT.whatsappNumber}?text=Hello%20Dr%20Pawan%20Gupta,%20I%20would%20like%20to%20book%20a%20physiotherapy%20consultation.`}
          target="_blank"
          rel="noopener noreferrer"
          className="relative p-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white transition hover:scale-105 shadow-md shadow-emerald-600/30"
          title="WhatsApp Dr Pawan Gupta"
        >
          <MessageSquare className="w-4 h-4" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping"></span>
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-slate-950"></span>
        </a>

        {/* Book Appointment CTA Pill */}
        <button
          onClick={onOpenBooking}
          className="px-4 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs shadow-lg shadow-blue-500/25 transition-all duration-200 flex items-center space-x-1.5 hover:scale-102 active:scale-98"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Book Now</span>
        </button>

      </div>
    </aside>
  );
};

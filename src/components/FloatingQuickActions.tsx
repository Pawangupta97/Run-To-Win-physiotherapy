import React from 'react';
import { 
  Phone, 
  MessageSquare, 
  Calendar, 
  Sparkles,
  Home,
  Video
} from 'lucide-react';
import { CLINIC_CONTACT } from '../data/clinicData';

interface FloatingQuickActionsProps {
  onOpenBooking: (prefillService?: string) => void;
  onOpenAiAssistant: () => void;
}

export const FloatingQuickActions: React.FC<FloatingQuickActionsProps> = ({
  onOpenBooking,
  onOpenAiAssistant,
}) => {
  return (
    <>
      {/* MOBILE STICKY BOTTOM ACTION BAR (< md screens) */}
      <aside 
        aria-label="Mobile quick patient actions" 
        className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-white/98 backdrop-blur-lg border-t border-slate-200/90 shadow-[0_-8px_24px_rgba(0,0,0,0.12)] px-3 py-2 pb-[max(0.5rem,env(safe-area-inset-bottom))]"
      >
        {/* Top Mini-Quick Toggles: Home Visit, Online Physio, AI Triage */}
        <div className="flex items-center justify-between gap-1.5 pb-1.5 mb-1.5 border-b border-slate-100 text-[11px] font-bold">
          <button
            onClick={() => onOpenBooking('Home Visit Physiotherapy (Mumbai)')}
            className="flex-1 py-1 px-1.5 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200 flex items-center justify-center gap-1 active:bg-emerald-100"
          >
            <Home className="w-3 h-3 text-emerald-600 shrink-0" />
            <span className="truncate">Home Visit</span>
          </button>
          <button
            onClick={() => onOpenBooking('Online Video Physiotherapy')}
            className="flex-1 py-1 px-1.5 rounded-md bg-blue-50 text-blue-800 border border-blue-200 flex items-center justify-center gap-1 active:bg-blue-100"
          >
            <Video className="w-3 h-3 text-blue-600 shrink-0" />
            <span className="truncate">Online Video</span>
          </button>
          <button
            onClick={onOpenAiAssistant}
            className="py-1 px-2 rounded-md bg-slate-100 text-slate-700 border border-slate-200 flex items-center justify-center gap-1 active:bg-slate-200"
            title="Open AI Symptom Assistant"
          >
            <Sparkles className="w-3 h-3 text-blue-600 shrink-0" />
            <span>AI Triage</span>
          </button>
        </div>

        {/* Primary 3 Action Buttons: Call, WhatsApp, Book Assessment */}
        <div className="grid grid-cols-12 gap-2 items-center">
          {/* Direct Tap to Call */}
          <a
            href={`tel:${CLINIC_CONTACT.phone}`}
            className="col-span-3 flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-slate-900 text-white font-bold text-[11px] active:bg-slate-800 min-h-[46px]"
            aria-label={`Call Dr. Pawan Gupta clinic at ${CLINIC_CONTACT.phoneDisplay}`}
          >
            <Phone className="w-4 h-4 text-emerald-400 mb-0.5" />
            <span className="leading-none">Call</span>
          </a>

          {/* WhatsApp Direct Chat */}
          <a
            href={`https://wa.me/${CLINIC_CONTACT.whatsappNumber}?text=Hello%20Dr%20Pawan%20Gupta,%20I%20would%20like%20to%20book%20a%20physiotherapy%20consultation.`}
            target="_blank"
            rel="noopener noreferrer"
            className="col-span-3 flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-emerald-600 text-white font-bold text-[11px] active:bg-emerald-700 min-h-[46px] shadow-sm"
            aria-label="Chat with Dr. Pawan Gupta on WhatsApp"
          >
            <MessageSquare className="w-4 h-4 text-white fill-white mb-0.5" />
            <span className="leading-none">WhatsApp</span>
          </a>

          {/* Book Physiotherapy Assessment CTA */}
          <button
            onClick={() => onOpenBooking()}
            className="col-span-6 flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-blue-700 active:bg-blue-800 text-white font-extrabold text-xs shadow-md shadow-blue-500/20 min-h-[46px]"
            aria-label="Book Physiotherapy Assessment"
          >
            <Calendar className="w-4 h-4 text-blue-200 shrink-0" />
            <span className="truncate">BOOK ASSESSMENT</span>
          </button>
        </div>
      </aside>

      {/* DESKTOP FLOATING ACTION DOCK (>= md screens) */}
      <aside 
        aria-label="Desktop quick contact actions" 
        className="hidden md:flex fixed bottom-6 right-6 z-40 flex-col items-end space-y-2.5"
      >
        {/* AI Assistant Floating Button */}
        <button
          onClick={onOpenAiAssistant}
          className="px-4 py-2 rounded-full bg-white text-blue-700 hover:bg-blue-50 border border-blue-200 text-xs font-bold shadow-lg transition-all duration-150 flex items-center space-x-1.5 hover:scale-105 min-h-[40px]"
          title="Open AI Physiotherapy Assistant"
          aria-label="Open AI Physiotherapy Symptom Triage"
        >
          <Sparkles className="w-4 h-4 text-blue-600 animate-pulse" />
          <span>AI Symptom Triage</span>
        </button>

        {/* Floating Action Bar Pill */}
        <div className="flex items-center space-x-2 bg-slate-950/95 border border-slate-800 p-2 rounded-full shadow-2xl backdrop-blur-md">
          {/* Call Button */}
          <a
            href={`tel:${CLINIC_CONTACT.phone}`}
            className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold transition hover:scale-102 min-h-[44px]"
            title={`Call clinic at ${CLINIC_CONTACT.phoneDisplay}`}
            aria-label={`Call Dr. Pawan Gupta clinic at ${CLINIC_CONTACT.phoneDisplay}`}
          >
            <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>{CLINIC_CONTACT.phoneDisplay}</span>
          </a>

          {/* WhatsApp Button with Ping */}
          <a
            href={`https://wa.me/${CLINIC_CONTACT.whatsappNumber}?text=Hello%20Dr%20Pawan%20Gupta,%20I%20would%20like%20to%20book%20a%20physiotherapy%20consultation.`}
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition hover:scale-102 shadow-md shadow-emerald-600/30 min-h-[44px]"
            title="Chat with Dr Pawan Gupta on WhatsApp"
            aria-label="Chat with Dr. Pawan Gupta on WhatsApp"
          >
            <MessageSquare className="w-4 h-4 fill-white shrink-0" />
            <span>WhatsApp</span>
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping"></span>
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-slate-950"></span>
          </a>

          {/* Book Assessment CTA Pill */}
          <button
            onClick={() => onOpenBooking()}
            className="px-4 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs shadow-lg shadow-blue-500/25 transition-all duration-150 flex items-center space-x-2 hover:scale-102 active:scale-98 min-h-[44px]"
            aria-label="Book Physiotherapy Assessment"
          >
            <Calendar className="w-4 h-4 text-blue-200 shrink-0" />
            <span>Book Assessment</span>
          </button>
        </div>
      </aside>
    </>
  );
};

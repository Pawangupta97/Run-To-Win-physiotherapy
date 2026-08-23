import React, { useState, useRef, useEffect } from 'react';
import { 
  Sparkles, 
  Send, 
  Bot, 
  User, 
  X, 
  Calendar, 
  Phone, 
  ShieldAlert, 
  ArrowRight,
  RefreshCw,
  MessageSquare
} from 'lucide-react';
import { ChatMessage } from '../types';
import { CLINIC_CONTACT } from '../data/clinicData';

interface AiPhysioAssistantProps {
  isOpen: boolean;
  onClose: () => void;
  initialContext?: string;
  onOpenBooking: (prefillService?: string, prefillArea?: string, prefillBodyPart?: string) => void;
}

export const AiPhysioAssistant: React.FC<AiPhysioAssistantProps> = ({
  isOpen,
  onClose,
  initialContext,
  onOpenBooking,
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome-1',
      role: 'assistant',
      content: `Hello! I am the **Run To Win AI Physiotherapy Assistant** for **Dr Pawan Gupta (PT)** in Mumbai.\n\nHow can I help you understand your symptoms, physiotherapy treatments, or home visit care today?`,
      timestamp: 'Just now',
      suggestedPills: [
        'Acute Lower Back & Sciatica Relief',
        'Frozen Shoulder Recovery Stages',
        'Post Knee Replacement (TKR) Milestones',
        'Dry Needling vs Cupping Therapy',
        'Home Visits in Mumbai Suburbs',
      ],
    },
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (initialContext && isOpen) {
      setInputText(`I would like guidance and physiotherapy recommendations for ${initialContext}.`);
    }
  }, [initialContext, isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  if (!isOpen) return null;

  const handleSendMessage = async (customText?: string) => {
    const textToSend = customText || inputText;
    if (!textToSend.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: 'msg-' + Date.now(),
      role: 'user',
      content: textToSend.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/gemini/assist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: textToSend,
          context: initialContext || 'Physiotherapy inquiry',
          history: messages.slice(-5).map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      const data = await response.json();
      
      const assistantMsg: ChatMessage = {
        id: 'msg-reply-' + Date.now(),
        role: 'assistant',
        content: data.reply || 'Thank you. Please connect directly with Dr Pawan Gupta (PT) for a clinical evaluation.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        suggestedPills: [
          'Book Dr. Pawan Consultation',
          'Ask about Mumbai Home Visits',
          'Desk Posture Tips',
        ],
      };

      setMessages((prev) => [...prev, assistantMsg]);
    } catch (error) {
      console.error('Error in AI Assistant:', error);
      const fallbackMsg: ChatMessage = {
        id: 'msg-err-' + Date.now(),
        role: 'assistant',
        content: `I recommend scheduling a clinical assessment directly with **Dr Pawan Gupta (PT)** at RUN TO WIN HEALTHCARE MUMBAI. You can call **${CLINIC_CONTACT.phone}** or WhatsApp us for priority booking.`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, fallbackMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="bg-white rounded-3xl max-w-2xl w-full h-[85vh] max-h-[700px] shadow-2xl border border-slate-200 flex flex-col overflow-hidden relative">
        
        {/* Modal Header */}
        <div className="p-4 sm:p-5 bg-gradient-to-r from-slate-950 via-slate-900 to-blue-950 text-white flex items-center justify-between border-b border-slate-800 shrink-0">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold shadow-md shadow-blue-500/20">
              <Sparkles className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h3 className="font-bold text-sm sm:text-base font-heading">
                  Run To Win AI Assistant
                </h3>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 font-semibold border border-blue-500/30">
                  Gemini 3.7
                </span>
              </div>
              <p className="text-[11px] text-slate-400">
                Dr Pawan Gupta (PT) Clinical Guidance • Mumbai
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Medical Disclaimer Banner */}
        <div className="bg-amber-50 px-4 py-2 border-b border-amber-200 text-amber-900 text-[11px] flex items-center space-x-2 shrink-0">
          <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0" />
          <span>
            <strong>Medical Notice:</strong> AI responses provide educational insights only. Never substitute this for in-person medical diagnosis by Dr Pawan Gupta (PT).
          </span>
        </div>

        {/* Chat Messages Container */}
        <div className="flex-1 p-4 sm:p-5 overflow-y-auto space-y-4 bg-slate-50/60">
          {messages.map((msg) => {
            const isUser = msg.role === 'user';
            return (
              <div
                key={msg.id}
                className={`flex items-start gap-2.5 ${isUser ? 'flex-row-reverse' : 'flex-row'}`}
              >
                <div
                  className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs shrink-0 ${
                    isUser ? 'bg-slate-800 text-white' : 'bg-blue-600 text-white'
                  }`}
                >
                  {isUser ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                </div>

                <div className={`max-w-[85%] space-y-2`}>
                  <div
                    className={`p-3.5 rounded-2xl text-xs sm:text-sm leading-relaxed shadow-sm ${
                      isUser
                        ? 'bg-blue-600 text-white rounded-tr-none'
                        : 'bg-white text-slate-800 border border-slate-200 rounded-tl-none'
                    }`}
                  >
                    <div className="whitespace-pre-line space-y-1">
                      {msg.content}
                    </div>
                    <div
                      className={`text-[10px] mt-2 text-right ${
                        isUser ? 'text-blue-200' : 'text-slate-400'
                      }`}
                    >
                      {msg.timestamp}
                    </div>
                  </div>

                  {/* Suggested Question Pills */}
                  {msg.suggestedPills && msg.suggestedPills.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {msg.suggestedPills.map((pill, idx) => (
                        <button
                          key={idx}
                          onClick={() => {
                            if (pill === 'Book Dr. Pawan Consultation') {
                              onClose();
                              onOpenBooking();
                            } else {
                              handleSendMessage(pill);
                            }
                          }}
                          className="text-[11px] px-3 py-1 rounded-full bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200 font-medium transition shadow-xs"
                        >
                          {pill}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}

          {isLoading && (
            <div className="flex items-start gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-blue-600 text-white flex items-center justify-center text-xs">
                <Bot className="w-4 h-4" />
              </div>
              <div className="p-3.5 rounded-2xl bg-white border border-slate-200 rounded-tl-none shadow-sm flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-bounce"></span>
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-bounce [animation-delay:0.2s]"></span>
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-bounce [animation-delay:0.4s]"></span>
                <span className="text-xs text-slate-500 font-medium pl-1">Dr Pawan's AI assistant is reviewing...</span>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Action Fast Footer */}
        <div className="p-3 bg-white border-t border-slate-200 space-y-2 shrink-0">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              placeholder="Ask about back pain, knee exercises, home visits..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              disabled={isLoading}
              className="flex-1 px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-full text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-blue-600 transition"
            />
            <button
              type="submit"
              disabled={isLoading || !inputText.trim()}
              className="p-2.5 rounded-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white shadow-md shadow-blue-500/20 transition"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

          <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1">
            <button
              onClick={() => {
                onClose();
                onOpenBooking();
              }}
              className="text-blue-700 hover:text-blue-800 font-bold flex items-center space-x-1"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Priority Consultation with Dr Pawan</span>
            </button>
            <a
              href={`https://wa.me/${CLINIC_CONTACT.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-emerald-700 flex items-center space-x-1"
            >
              <MessageSquare className="w-3 h-3 text-emerald-600" />
              <span>WhatsApp Direct</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

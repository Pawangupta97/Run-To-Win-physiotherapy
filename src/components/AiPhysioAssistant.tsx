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
  MessageSquare,
  Mic,
  MicOff,
  Volume2,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { ChatMessage } from '../types';
import { CLINIC_CONTACT, MUMBAI_AREAS } from '../data/clinicData';

interface AiPhysioAssistantProps {
  isOpen: boolean;
  onClose: () => void;
  initialContext?: string;
  onOpenBooking: (prefillService?: string, prefillArea?: string, prefillBodyPart?: string) => void;
}

// Browser SpeechRecognition interface
interface IWindow extends Window {
  webkitSpeechRecognition?: any;
  SpeechRecognition?: any;
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
      content: `Hello! I am the **Run To Win AI Physiotherapy Assistant** for **Dr Pawan Gupta (PT)** in Mumbai.\n\nYou can ask about symptoms, treatments, Mumbai home visits, or use **Voice Commands** (e.g., *"Book home visit in Bandra"* or *"Schedule knee consultation"*).`,
      timestamp: 'Just now',
      suggestedPills: [
        'Acute Lower Back & Sciatica Relief',
        'Frozen Shoulder Recovery Stages',
        'Post Knee Replacement (TKR) Milestones',
        'Book Dr. Pawan Consultation',
        'Ask about Mumbai Home Visits',
      ],
    },
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [speechError, setSpeechError] = useState<string | null>(null);
  const [liveTranscript, setLiveTranscript] = useState('');
  const [voiceBookingAlert, setVoiceBookingAlert] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<any>(null);

  useEffect(() => {
    if (initialContext && isOpen) {
      setInputText(`I would like guidance and physiotherapy recommendations for ${initialContext}.`);
    }
  }, [initialContext, isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading, isListening, liveTranscript]);

  // Clean up SpeechRecognition on unmount or close
  useEffect(() => {
    return () => {
      if (recognitionRef.current) {
        try {
          recognitionRef.current.stop();
        } catch {
          // Ignore
        }
      }
    };
  }, []);

  if (!isOpen) return null;

  // Process potential voice commands for booking initiation
  const processVoiceCommand = (transcript: string) => {
    const lower = transcript.toLowerCase();
    
    // Check if user is asking to book an appointment
    const isBookingIntent = 
      lower.includes('book') || 
      lower.includes('appointment') || 
      lower.includes('schedule') || 
      lower.includes('consultation') ||
      lower.includes('reserve') ||
      lower.includes('home visit') ||
      lower.includes('session');

    if (isBookingIntent) {
      // Analyze location in Mumbai
      let matchedArea = '';
      for (const area of MUMBAI_AREAS) {
        if (lower.includes(area.name.toLowerCase())) {
          matchedArea = area.name;
          break;
        }
      }

      // Analyze service type
      let matchedService = '';
      if (lower.includes('home visit') || lower.includes('home care') || lower.includes('doorstep')) {
        matchedService = 'Home Visit Physiotherapy (Mumbai)';
      } else if (lower.includes('sports') || lower.includes('runner') || lower.includes('athlete')) {
        matchedService = 'Sports Injury & Athletic Performance';
      } else if (lower.includes('dry needling') || lower.includes('needling')) {
        matchedService = 'Dry Needling & Myofascial Trigger Point Release';
      } else if (lower.includes('cupping')) {
        matchedService = 'Cupping Therapy & Tissue Decompression';
      } else if (lower.includes('stroke') || lower.includes('neuro') || lower.includes('paralysis')) {
        matchedService = 'Neurological & Stroke Rehabilitation';
      } else if (lower.includes('replacement') || lower.includes('tkr') || lower.includes('thr') || lower.includes('post op') || lower.includes('surgery')) {
        matchedService = 'Post-Operative Orthopedic Rehabilitation';
      } else if (lower.includes('spine') || lower.includes('back') || lower.includes('sciatica') || lower.includes('disc')) {
        matchedService = 'Spine & Postural Correction (Back & Neck)';
      } else {
        matchedService = 'Comprehensive Physiotherapy Evaluation';
      }

      // Analyze body part
      let matchedBodyPart = '';
      if (lower.includes('knee')) matchedBodyPart = 'Knee Joint';
      else if (lower.includes('back') || lower.includes('lumbar') || lower.includes('sciatica')) matchedBodyPart = 'Lower Back & Spine';
      else if (lower.includes('neck') || lower.includes('cervical')) matchedBodyPart = 'Neck & Cervical Spine';
      else if (lower.includes('shoulder') || lower.includes('frozen')) matchedBodyPart = 'Shoulder & Rotator Cuff';
      else if (lower.includes('ankle') || lower.includes('foot') || lower.includes('heel')) matchedBodyPart = 'Ankle & Foot';
      else if (lower.includes('hip')) matchedBodyPart = 'Hip Joint';
      else if (lower.includes('elbow') || lower.includes('tennis elbow')) matchedBodyPart = 'Elbow & Forearm';

      const feedback = `Voice Command Recognized: "${transcript}"\nLaunching booking modal for ${matchedService}${matchedArea ? ` in ${matchedArea}` : ''}...`;
      setVoiceBookingAlert(feedback);

      // Add as conversation messages for context
      const userMsg: ChatMessage = {
        id: 'voice-user-' + Date.now(),
        role: 'user',
        content: `🎙️ Voice Command: "${transcript}"`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      const assistMsg: ChatMessage = {
        id: 'voice-reply-' + Date.now(),
        role: 'assistant',
        content: `I have recognized your request to book an appointment with **Dr Pawan Gupta (PT)**.\n\nOpening the booking form now with your preferences: **${matchedService}** ${matchedArea ? `(${matchedArea})` : ''}.`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, userMsg, assistMsg]);

      // Trigger booking modal shortly with slight delay for user reassurance
      setTimeout(() => {
        onClose();
        onOpenBooking(matchedService, matchedArea, matchedBodyPart);
      }, 1200);

      return true;
    }

    return false;
  };

  const toggleSpeechRecognition = () => {
    setSpeechError(null);
    setVoiceBookingAlert(null);

    const win = window as unknown as IWindow;
    const SpeechRecognitionClass = win.SpeechRecognition || win.webkitSpeechRecognition;

    if (!SpeechRecognitionClass) {
      setSpeechError('Speech Recognition is not supported by your current browser. Please type your query or use Google Chrome/Safari/Edge.');
      return;
    }

    if (isListening) {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
      setIsListening(false);
      return;
    }

    try {
      const recognition = new SpeechRecognitionClass();
      recognition.lang = 'en-IN'; // Indian English / standard English
      recognition.continuous = false;
      recognition.interimResults = true;
      recognition.maxAlternatives = 1;

      recognition.onstart = () => {
        setIsListening(true);
        setLiveTranscript('Listening... Speak now (e.g., "Book home visit in Bandra")');
      };

      recognition.onresult = (event: any) => {
        let interim = '';
        let final = '';

        for (let i = event.resultIndex; i < event.results.length; ++i) {
          if (event.results[i].isFinal) {
            final += event.results[i][0].transcript;
          } else {
            interim += event.results[i][0].transcript;
          }
        }

        const currentText = final || interim;
        setLiveTranscript(currentText);

        if (final) {
          const wasBookingCommand = processVoiceCommand(final);
          if (!wasBookingCommand) {
            // General query - send to assistant
            setInputText(final);
            handleSendMessage(final);
          }
          setIsListening(false);
        }
      };

      recognition.onerror = (event: any) => {
        console.warn('Speech recognition error:', event.error);
        if (event.error === 'not-allowed') {
          setSpeechError('Microphone permission was denied. Please allow microphone access in your browser settings.');
        } else if (event.error === 'no-speech') {
          setSpeechError('No speech was detected. Please try tapping the microphone again.');
        } else {
          setSpeechError(`Voice error: ${event.error || 'Unable to capture audio'}`);
        }
        setIsListening(false);
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognitionRef.current = recognition;
      recognition.start();
    } catch (err: any) {
      console.error('Error starting speech recognition:', err);
      setSpeechError('Could not start microphone. Please check permissions.');
      setIsListening(false);
    }
  };

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
    setLiveTranscript('');
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
      <div className="bg-white rounded-3xl max-w-2xl w-full h-[88vh] max-h-[720px] shadow-2xl border border-slate-200 flex flex-col overflow-hidden relative">
        
        {/* Modal Header */}
        <div className="p-4 sm:p-5 bg-gradient-to-r from-slate-950 via-slate-900 to-blue-950 text-white flex items-center justify-between border-b border-slate-800 shrink-0">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold shadow-md shadow-blue-500/20">
              <Sparkles className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h3 className="font-bold text-sm sm:text-base font-heading">
                  Run To Win AI Voice & Clinical Assistant
                </h3>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 font-semibold border border-blue-500/30">
                  Gemini 3.7 + Voice
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

        {/* Voice Booking Notification Banner if triggered */}
        {voiceBookingAlert && (
          <div className="bg-emerald-50 px-4 py-2.5 border-b border-emerald-200 text-emerald-900 text-xs font-semibold flex items-center space-x-2 animate-in slide-in-from-top duration-200">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>{voiceBookingAlert}</span>
          </div>
        )}

        {/* Speech Error Banner if any */}
        {speechError && (
          <div className="bg-rose-50 px-4 py-2 border-b border-rose-200 text-rose-900 text-xs flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
              <span>{speechError}</span>
            </div>
            <button
              onClick={() => setSpeechError(null)}
              className="text-rose-600 hover:text-rose-800 font-bold text-xs"
            >
              ✕
            </button>
          </div>
        )}

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

          {/* Active Listening Wave Animation */}
          {isListening && (
            <div className="p-4 bg-gradient-to-r from-red-50 to-blue-50 border border-red-200 rounded-2xl animate-pulse space-y-2">
              <div className="flex items-center justify-between text-xs font-bold text-red-700">
                <div className="flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-ping" />
                  <span>Listening to Voice Command...</span>
                </div>
                <button
                  type="button"
                  onClick={toggleSpeechRecognition}
                  className="text-xs text-red-600 hover:text-red-800 font-semibold underline"
                >
                  Stop Recording
                </button>
              </div>
              <p className="text-xs text-slate-700 italic bg-white/80 p-2.5 rounded-xl border border-red-100">
                {liveTranscript || 'Speak your request (e.g. "Book knee physiotherapy in Dadar")...'}
              </p>
              <div className="text-[10px] text-slate-500">
                💡 <strong>Voice Commands supported:</strong> "Book home visit in [Area]", "Schedule consultation for [Knee/Back/Shoulder]", or any physiotherapy question.
              </div>
            </div>
          )}

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

        {/* Action Fast Footer with Speech Recognition Microphone */}
        <div className="p-3 bg-white border-t border-slate-200 space-y-2 shrink-0">
          
          {/* Quick Voice Prompt Shortcuts */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-[11px] no-scrollbar">
            <span className="text-slate-400 font-medium whitespace-nowrap flex items-center gap-1">
              <Mic className="w-3 h-3 text-blue-600" />
              <span>Voice commands:</span>
            </span>
            <button
              onClick={() => processVoiceCommand('Book home visit in Bandra')}
              className="px-2.5 py-0.5 rounded-full bg-slate-100 hover:bg-blue-50 hover:text-blue-700 text-slate-600 whitespace-nowrap transition border border-slate-200"
            >
              "Book home visit in Bandra"
            </button>
            <button
              onClick={() => processVoiceCommand('Book appointment for severe knee pain')}
              className="px-2.5 py-0.5 rounded-full bg-slate-100 hover:bg-blue-50 hover:text-blue-700 text-slate-600 whitespace-nowrap transition border border-slate-200"
            >
              "Book for knee pain"
            </button>
            <button
              onClick={() => processVoiceCommand('Schedule dry needling session in Sewri')}
              className="px-2.5 py-0.5 rounded-full bg-slate-100 hover:bg-blue-50 hover:text-blue-700 text-slate-600 whitespace-nowrap transition border border-slate-200"
            >
              "Schedule dry needling"
            </button>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="flex items-center gap-2"
          >
            {/* Speech Recognition Voice Button */}
            <button
              type="button"
              onClick={toggleSpeechRecognition}
              title={isListening ? 'Stop listening' : 'Start voice command booking / question'}
              className={`p-2.5 rounded-full transition flex items-center justify-center shrink-0 ${
                isListening
                  ? 'bg-red-600 hover:bg-red-700 text-white ring-4 ring-red-200 animate-pulse'
                  : 'bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200 shadow-xs'
              }`}
            >
              {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
            </button>

            <input
              type="text"
              placeholder={isListening ? "Listening to your voice..." : "Ask symptom question or type 'Book appointment'..."}
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              disabled={isLoading || isListening}
              className="flex-1 px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-full text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-blue-600 transition"
            />

            <button
              type="submit"
              disabled={isLoading || !inputText.trim() || isListening}
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

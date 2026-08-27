import React, { useState } from 'react';
import { FAQS, CLINIC_CONTACT } from '../data/clinicData';
import { 
  HelpCircle, 
  ChevronDown, 
  ChevronRight, 
  Search, 
  Phone, 
  MessageSquare, 
  Calendar, 
  Sparkles,
  Info,
  CheckCircle2
} from 'lucide-react';
import { SeoMeta } from './SeoMeta';

interface FaqPageProps {
  onBackToHome: () => void;
  onOpenBooking: (prefillService?: string, prefillArea?: string) => void;
  onOpenAiAssistant: (context?: string) => void;
}

const CATEGORIES = [
  { id: 'all', label: 'All Questions' },
  { id: 'general', label: 'General & Appointments' },
  { id: 'home_visit', label: 'Home Visit Logistics' },
  { id: 'treatments', label: 'Treatments & Modalities' },
  { id: 'insurance', label: 'Insurance & Payment' },
  { id: 'recovery', label: 'Recovery Timelines' },
];

export const FaqPage: React.FC<FaqPageProps> = ({
  onBackToHome,
  onOpenBooking,
  onOpenAiAssistant,
}) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [openFaqIndices, setOpenFaqIndices] = useState<number[]>([0, 1]);

  const toggleFaq = (index: number) => {
    if (openFaqIndices.includes(index)) {
      setOpenFaqIndices(openFaqIndices.filter((i) => i !== index));
    } else {
      setOpenFaqIndices([...openFaqIndices, index]);
    }
  };

  const filteredFaqs = FAQS.filter((faq) => {
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    const matchesSearch = 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-slate-50 min-h-screen">
      <SeoMeta
        title="Frequently Asked Questions (FAQ) | Physiotherapy Clinic Mumbai"
        description="Get clear answers on physiotherapy costs, home visit coverage, insurance reimbursement, dry needling safety, and doctor qualifications at Run To Win Mumbai."
        canonicalUrl="https://runtowinphysiotherapy.com/#faq"
      />

      {/* Breadcrumbs */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center text-xs text-slate-500">
          <button onClick={onBackToHome} className="hover:text-blue-600 font-medium">Home</button>
          <ChevronRight className="w-3.5 h-3.5 mx-2 text-slate-400" />
          <span className="text-slate-900 font-semibold">Frequently Asked Questions</span>
        </div>
      </div>

      {/* Hero Header */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white py-16 md:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-semibold uppercase tracking-wider">
            <HelpCircle className="w-4 h-4 text-blue-400" />
            <span>Patient Knowledge Base</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight font-heading leading-tight">
            Frequently Asked Questions
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Everything you need to know about our Sewri clinic, Mumbai doorstep home visits, treatment techniques, and recovery expectations.
          </p>

          {/* Search Bar */}
          <div className="bg-white/10 backdrop-blur-md p-2 rounded-2xl border border-white/20 flex items-center shadow-2xl max-w-2xl mx-auto mt-6">
            <Search className="w-5 h-5 text-blue-300 ml-3 shrink-0" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions (e.g., home visit fees, doctor prescription, insurance, dry needling)..."
              className="w-full bg-transparent border-0 text-white placeholder-slate-400 text-sm px-4 py-2 focus:outline-none"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="text-xs text-slate-300 hover:text-white px-3 py-1 font-semibold"
              >
                Clear
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Main FAQ List Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* Category Filter Pills */}
          <div className="flex items-center space-x-2 overflow-x-auto pb-2 no-scrollbar justify-start md:justify-center">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-200'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* FAQ Accordion Items */}
          {filteredFaqs.length === 0 ? (
            <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 shadow-sm max-w-lg mx-auto">
              <Info className="w-10 h-10 text-slate-400 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-slate-800">No matching questions found</h3>
              <p className="text-xs text-slate-500 mt-1 mb-6">
                Have a specific question not covered here? Ask our AI assistant or call our clinic directly.
              </p>
              <div className="flex justify-center gap-3">
                <button
                  onClick={() => onOpenAiAssistant()}
                  className="bg-blue-600 text-white px-4 py-2 rounded-full text-xs font-bold flex items-center space-x-1"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Ask AI Assistant</span>
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredFaqs.map((faq, index) => {
                const isOpen = openFaqIndices.includes(index);

                return (
                  <div
                    key={faq.id || index}
                    className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm transition"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full text-left p-5 sm:p-6 flex items-start justify-between space-x-4 hover:bg-slate-50 transition"
                    >
                      <span className="text-sm sm:text-base font-bold text-slate-900 font-heading leading-snug">
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-blue-600 shrink-0 transition-transform duration-200 mt-0.5 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-6 sm:px-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4 bg-slate-50/50 animate-in fade-in duration-150">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}

          {/* Still Have Questions Box */}
          <div className="bg-gradient-to-r from-blue-900 to-indigo-950 text-white p-8 rounded-3xl border border-blue-800 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="space-y-2 text-center sm:text-left">
              <h3 className="text-xl font-bold font-heading">Still have questions?</h3>
              <p className="text-xs text-blue-200">
                Our clinic team is available to help clarify your treatment plan, home visit schedule, or billing questions.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 shrink-0">
              <a
                href={`tel:${CLINIC_CONTACT.phone}`}
                className="bg-white text-blue-900 hover:bg-blue-50 px-5 py-2.5 rounded-full text-xs font-bold transition flex items-center space-x-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-blue-600" />
                <span>Call {CLINIC_CONTACT.phoneDisplay}</span>
              </a>
              <button
                onClick={() => onOpenBooking()}
                className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded-full text-xs font-bold transition flex items-center space-x-1.5"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book Appointment</span>
              </button>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

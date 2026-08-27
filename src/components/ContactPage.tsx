import React, { useState } from 'react';
import { CLINIC_CONTACT } from '../data/clinicData';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Calendar, 
  MessageSquare, 
  ExternalLink, 
  CheckCircle2, 
  ShieldCheck, 
  ChevronRight,
  Send,
  Building,
  Navigation
} from 'lucide-react';
import { SeoMeta } from './SeoMeta';

interface ContactPageProps {
  onBackToHome: () => void;
  onOpenBooking: (prefillService?: string, prefillArea?: string) => void;
  onOpenAiAssistant: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  onBackToHome,
  onOpenBooking,
  onOpenAiAssistant,
}) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'In-Clinic Consultation (Sewri)',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    // Trigger WhatsApp redirection with prefilled details
    const text = encodeURIComponent(
      `Hi Dr. Pawan Gupta (PT), I would like to book a physiotherapy session.\n\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Service:* ${formData.service}\n*Details:* ${formData.message || 'Standard assessment'}`
    );
    window.open(`https://wa.me/${CLINIC_CONTACT.whatsappNumber}?text=${text}`, '_blank');
    setFormSubmitted(true);
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      <SeoMeta
        title="Contact Sewri Clinic & Book Appointment Mumbai | Dr. Pawan Gupta (PT)"
        description="Contact Run To Win Healthcare Services in Sewri, Mumbai. Call +91 98386 88745 or WhatsApp for in-clinic physiotherapy and doorstep home visits across Mumbai."
        canonicalUrl="https://runtowinphysiotherapy.com/#contact"
      />

      {/* Breadcrumbs */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center text-xs text-slate-500">
          <button onClick={onBackToHome} className="hover:text-blue-600 font-medium">Home</button>
          <ChevronRight className="w-3.5 h-3.5 mx-2 text-slate-400" />
          <span className="text-slate-900 font-semibold">Contact & Clinic Location</span>
        </div>
      </div>

      {/* Hero Header */}
      <section className="bg-gradient-to-br from-blue-950 via-slate-900 to-blue-950 text-white py-16 md:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-semibold uppercase tracking-wider">
            <Building className="w-4 h-4 text-blue-400" />
            <span>Sewri Clinic & Doorstep Service</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight font-heading leading-tight">
            Contact & Appointments
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Schedule your appointment with <strong className="text-white">Dr. Pawan Gupta (PT)</strong> at our Sewri Clinic or request a doorstep home visit anywhere in Mumbai.
          </p>
        </div>
      </section>

      {/* Main Grid: Contact Cards & Quick Inquiry Form */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Col: Contact Information Cards */}
            <div className="lg:col-span-6 space-y-6">
              
              {/* Sewri Clinic Card */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-heading">
                      Sewri Clinic Location
                    </h3>
                    <p className="text-xs text-slate-500">Run To Win Healthcare Services</p>
                  </div>
                </div>

                <div className="space-y-3 text-xs sm:text-sm text-slate-700">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-4 h-4 text-blue-600 shrink-0 mt-1" />
                    <div>
                      <strong className="text-slate-900">Address:</strong><br />
                      Sewri, Mumbai, Maharashtra 400015, India
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Clock className="w-4 h-4 text-blue-600 shrink-0 mt-1" />
                    <div>
                      <strong className="text-slate-900">Clinic Hours:</strong><br />
                      Monday – Saturday: 8:00 AM – 9:00 PM<br />
                      Sunday: 9:00 AM – 2:00 PM (Prior Appointment)
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Phone className="w-4 h-4 text-blue-600 shrink-0 mt-1" />
                    <div>
                      <strong className="text-slate-900">Direct Telephone:</strong><br />
                      <a href={`tel:${CLINIC_CONTACT.phone}`} className="text-blue-600 font-bold hover:underline">
                        {CLINIC_CONTACT.phoneDisplay}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Mail className="w-4 h-4 text-blue-600 shrink-0 mt-1" />
                    <div>
                      <strong className="text-slate-900">Email:</strong><br />
                      <a href={`mailto:${CLINIC_CONTACT.email}`} className="text-blue-600 hover:underline">
                        {CLINIC_CONTACT.email}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-3">
                  <a
                    href={CLINIC_CONTACT.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-50 text-blue-700 hover:bg-blue-100 px-5 py-2.5 rounded-full text-xs font-bold transition flex items-center space-x-1.5 border border-blue-200"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Get Google Map Directions</span>
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </a>

                  <a
                    href={`https://wa.me/${CLINIC_CONTACT.whatsappNumber}?text=Hi%20Dr.%20Pawan%20Gupta,%20I%20would%20like%20to%20inquire%20about%20a%20physiotherapy%20appointment.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-full text-xs font-bold transition flex items-center space-x-1.5 shadow-sm"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Chat on WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Home Visit Coverage Box */}
              <div className="bg-gradient-to-br from-slate-900 to-blue-950 text-white rounded-3xl p-6 sm:p-8 space-y-4 shadow-md">
                <div className="flex items-center space-x-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                  <Clock className="w-4 h-4" />
                  <span>Home Visit Coverage Times</span>
                </div>
                <h3 className="text-xl font-bold font-heading">
                  Doorstep Sessions: 7:00 AM – 8:30 PM
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Home visit slots are scheduled daily across South Mumbai, Central Mumbai, Western Suburbs, Eastern Suburbs, Harbour Line & Thane.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => onOpenBooking('Home Visit Physiotherapy (Mumbai)')}
                    className="bg-emerald-500 hover:bg-emerald-400 text-slate-900 px-6 py-2.5 rounded-full text-xs font-bold transition"
                  >
                    Book Home Visit Session
                  </button>
                </div>
              </div>

            </div>

            {/* Right Col: Interactive Appointment Inquiry Form */}
            <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading">
                  Quick Appointment Request
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Fill in your contact details below to directly connect with our clinical team.
                </p>
              </div>

              {formSubmitted ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                  <h4 className="text-base font-bold text-emerald-950 font-heading">Inquiry Sent via WhatsApp!</h4>
                  <p className="text-xs text-emerald-800 leading-relaxed">
                    Thank you! Dr. Pawan Gupta (PT) and our reception desk have received your details and will confirm your preferred time slot promptly.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="text-xs font-bold text-emerald-700 hover:underline pt-2"
                  >
                    Submit another request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Enter your name"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-blue-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Mobile Number / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g., 98386 88745"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-blue-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Service Type *
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-blue-500 focus:outline-none bg-white"
                    >
                      <option value="In-Clinic Consultation (Sewri)">In-Clinic Consultation (Sewri)</option>
                      <option value="Home Visit Physiotherapy (Mumbai)">Home Visit Physiotherapy (Mumbai)</option>
                      <option value="Spine & Sciatica Rehabilitation">Spine & Sciatica Rehabilitation</option>
                      <option value="Total Knee Replacement (TKR) Care">Total Knee Replacement (TKR) Care</option>
                      <option value="Sports Injury Rehab">Sports Injury Rehab</option>
                      <option value="Dry Needling & Cupping Session">Dry Needling & Cupping Session</option>
                      <option value="Stroke & Neuro Physiotherapy">Stroke & Neuro Physiotherapy</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Describe Your Symptoms / Preferred Timing
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="e.g., Lower back pain radiating down leg for 2 weeks. Prefer evening slot."
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-blue-500 focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl text-sm font-bold shadow-md shadow-blue-200 transition flex items-center justify-center space-x-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Request to Dr. Pawan</span>
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};

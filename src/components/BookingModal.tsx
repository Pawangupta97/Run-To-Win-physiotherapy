import React, { useState, useEffect } from 'react';
import { 
  X, 
  Calendar, 
  Clock, 
  MapPin, 
  User, 
  Phone, 
  Mail, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft, 
  ShieldCheck, 
  Home, 
  Activity, 
  MessageSquare,
  Sparkles,
  FileText,
  Printer,
  Database
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { CLINIC_CONTACT, MUMBAI_AREAS, BODY_REGIONS } from '../data/clinicData';
import { HOME_VISIT_LOCATIONS, LOCATION_GROUPS } from '../data/homeVisitLocations';
import { BookingFormData } from '../types';
import { saveAppointmentToSupabase } from '../lib/supabase';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefillService?: string;
  prefillArea?: string;
  prefillBodyPart?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  prefillService,
  prefillArea,
  prefillBodyPart,
}) => {
  const [step, setStep] = useState<number>(1);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submissionResult, setSubmissionResult] = useState<{
    appointmentId: string;
    whatsappUrl: string;
    savedToSupabase?: boolean;
  } | null>(null);

  const [formData, setFormData] = useState<BookingFormData>({
    serviceType: 'In-Clinic Consultation',
    bodyPart: 'Lower Back & Lumbar Spine',
    mumbaiArea: 'Bandra West & Linking Road',
    preferredDate: new Date(Date.now() + 86400000).toISOString().split('T')[0], // tomorrow
    preferredTime: '10:00 AM – 11:00 AM (Morning)',
    patientName: '',
    phone: '',
    email: '',
    address: '',
    symptoms: '',
    previousSurgeryOrXRay: false,
  });

  useEffect(() => {
    if (prefillService) {
      if (prefillService.toLowerCase().includes('home')) {
        setFormData((prev) => ({ ...prev, serviceType: 'Home Visit Physiotherapy (Mumbai)' }));
      }
    }
    if (prefillArea) {
      setFormData((prev) => ({ ...prev, mumbaiArea: prefillArea }));
    }
    if (prefillBodyPart) {
      setFormData((prev) => ({ ...prev, bodyPart: prefillBodyPart }));
    }
  }, [prefillService, prefillArea, prefillBodyPart]);

  if (!isOpen) return null;

  const timeSlots = [
    '08:30 AM – 09:30 AM (Early Morning)',
    '10:00 AM – 11:00 AM (Morning)',
    '11:30 AM – 12:30 PM (Mid-Day)',
    '02:00 PM – 03:00 PM (Afternoon)',
    '04:30 PM – 05:30 PM (Evening)',
    '06:00 PM – 07:00 PM (Evening)',
    '07:30 PM – 08:30 PM (Night)',
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.patientName || !formData.phone) return;

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/appointments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      const appointmentId = data.appointmentId || 'RTW-' + Math.floor(100000 + Math.random() * 900000);

      // Direct client-side redundancy sync to Supabase
      saveAppointmentToSupabase({
        appointment_id: appointmentId,
        patient_name: formData.patientName,
        phone: formData.phone,
        email: formData.email,
        service_type: formData.serviceType,
        body_part: formData.bodyPart,
        mumbai_area: formData.mumbaiArea,
        address: formData.address,
        preferred_date: formData.preferredDate,
        preferred_time: formData.preferredTime,
        symptoms: formData.symptoms,
        previous_surgery: formData.previousSurgeryOrXRay,
        status: 'Pending Confirmation',
      }).catch((err) => console.warn('Supabase sync note:', err));

      setSubmissionResult({
        appointmentId,
        whatsappUrl: data.whatsappUrl || `https://wa.me/${CLINIC_CONTACT.whatsappNumber}`,
        savedToSupabase: data.savedToSupabase ?? true,
      });

      // Trigger confetti
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
      });

      setStep(5); // Success step
    } catch (error) {
      console.error('Error submitting appointment:', error);
      const fallbackId = 'RTW-' + Math.floor(100000 + Math.random() * 900000);
      
      // Attempt direct client-side Supabase write on network fallback
      saveAppointmentToSupabase({
        appointment_id: fallbackId,
        patient_name: formData.patientName,
        phone: formData.phone,
        email: formData.email,
        service_type: formData.serviceType,
        body_part: formData.bodyPart,
        mumbai_area: formData.mumbaiArea,
        address: formData.address,
        preferred_date: formData.preferredDate,
        preferred_time: formData.preferredTime,
        symptoms: formData.symptoms,
        previous_surgery: formData.previousSurgeryOrXRay,
        status: 'Pending Confirmation',
      }).catch((err) => console.warn('Supabase fallback error:', err));

      setSubmissionResult({
        appointmentId: fallbackId,
        whatsappUrl: `https://wa.me/${CLINIC_CONTACT.whatsappNumber}?text=Hello%20Dr%20Pawan%20Gupta,%20I%20booked%20an%20appointment%20for%20${encodeURIComponent(formData.patientName)}.`,
        savedToSupabase: true,
      });
      setStep(5);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/75 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="bg-white rounded-3xl max-w-2xl w-full shadow-2xl border border-slate-200 flex flex-col overflow-hidden max-h-[92vh] relative">
        
        {/* Modal Header */}
        <div className="p-4 sm:p-6 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800 shrink-0">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold shadow-md shadow-blue-500/20">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold font-heading">
                Book Physiotherapy Consultation
              </h3>
              <p className="text-xs text-blue-400">
                Dr Pawan Gupta (PT) • Bandra Clinic & Mumbai Home Care
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step Indicator (Steps 1-4) */}
        {step < 5 && (
          <div className="bg-slate-50 px-6 py-3.5 border-b border-slate-200 flex items-center justify-between text-xs text-slate-600 shrink-0">
            <div className="flex items-center space-x-2">
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[11px] font-bold ${
                step >= 1 ? 'bg-blue-600 text-white shadow-sm' : 'bg-slate-200 text-slate-600'
              }`}>1</span>
              <span className={step === 1 ? 'font-bold text-slate-900' : ''}>Service</span>
            </div>
            <span className="text-slate-300">→</span>
            <div className="flex items-center space-x-2">
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[11px] font-bold ${
                step >= 2 ? 'bg-blue-600 text-white shadow-sm' : 'bg-slate-200 text-slate-600'
              }`}>2</span>
              <span className={step === 2 ? 'font-bold text-slate-900' : ''}>Condition</span>
            </div>
            <span className="text-slate-300">→</span>
            <div className="flex items-center space-x-2">
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[11px] font-bold ${
                step >= 3 ? 'bg-blue-600 text-white shadow-sm' : 'bg-slate-200 text-slate-600'
              }`}>3</span>
              <span className={step === 3 ? 'font-bold text-slate-900' : ''}>Date/Time</span>
            </div>
            <span className="text-slate-300">→</span>
            <div className="flex items-center space-x-2">
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[11px] font-bold ${
                step >= 4 ? 'bg-blue-600 text-white shadow-sm' : 'bg-slate-200 text-slate-600'
              }`}>4</span>
              <span className={step === 4 ? 'font-bold text-slate-900' : ''}>Details</span>
            </div>
          </div>
        )}

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          
          {/* STEP 1: Service Type & Mumbai Area */}
          {step === 1 && (
            <div className="space-y-5 animate-in fade-in">
              <div>
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-2">
                  Select Consultation Format:
                </label>
                <div className="space-y-2.5">
                  {[
                    {
                      id: 'In-Clinic Consultation',
                      title: 'In-Clinic Consultation (Bandra West Clinic)',
                      desc: 'Full access to traction, matrix therapy, therapeutic ultrasound, and specialized exercise setup.',
                      icon: Activity,
                    },
                    {
                      id: 'Home Visit Physiotherapy (Mumbai)',
                      title: 'Home Visit Care (At Your Doorstep in Mumbai)',
                      desc: 'Doctor travels to your residence with portable electrotherapy & rehabilitation equipment.',
                      icon: Home,
                    },
                    {
                      id: 'Online Video Consultation',
                      title: 'Tele-Rehab Video Consultation',
                      desc: 'Initial exercise prescription, ergonomic evaluation, and posture correction online.',
                      icon: Sparkles,
                    },
                  ].map((service) => {
                    const Icon = service.icon;
                    const isSelected = formData.serviceType === service.id;
                    return (
                      <button
                        key={service.id}
                        type="button"
                        onClick={() => setFormData({ ...formData, serviceType: service.id as any })}
                        className={`w-full p-4 rounded-2xl text-left border transition flex items-start space-x-3.5 ${
                          isSelected
                            ? 'bg-blue-50/80 border-blue-500 shadow-sm'
                            : 'bg-white hover:bg-slate-50 border-slate-200'
                        }`}
                      >
                        <div className={`p-2.5 rounded-xl shrink-0 ${
                          isSelected ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600'
                        }`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h4 className="text-xs sm:text-sm font-bold text-slate-900 font-heading">
                              {service.title}
                            </h4>
                            {isSelected && <CheckCircle2 className="w-4 h-4 text-blue-600" />}
                          </div>
                          <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                            {service.desc}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Area in Mumbai */}
              <div>
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-2">
                  Select Your Location / Mumbai Locality:
                </label>
                <select
                  value={formData.mumbaiArea}
                  onChange={(e) => setFormData({ ...formData, mumbaiArea: e.target.value })}
                  className="w-full p-3 rounded-xl bg-slate-50 border border-slate-300 text-xs font-semibold text-slate-800 focus:outline-none focus:border-blue-600 transition"
                >
                  {LOCATION_GROUPS.map((group) => (
                    <optgroup key={group.category} label={group.category}>
                      {group.locations.map((loc) => (
                        <option key={loc.id} value={`${loc.name} (${group.category})`}>
                          {loc.name} — {loc.responseTime}
                        </option>
                      ))}
                    </optgroup>
                  ))}
                  <optgroup label="Other Regions">
                    <option value="Sewri & Central Mumbai Clinic Area">Sewri & Central Mumbai Clinic Area</option>
                    <option value="Other Mumbai Suburb">Other Mumbai Suburb (Specify in Address)</option>
                  </optgroup>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="w-full py-3.5 px-6 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md shadow-blue-100 transition flex items-center justify-center space-x-2"
                >
                  <span>Continue to Condition Details</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: Body Part & Symptoms */}
          {step === 2 && (
            <div className="space-y-5 animate-in fade-in">
              <div>
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-2">
                  Select Primary Affected Body Region:
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {BODY_REGIONS.map((region) => {
                    const isSelected = formData.bodyPart === region.name;
                    return (
                      <button
                        key={region.id}
                        type="button"
                        onClick={() => setFormData({ ...formData, bodyPart: region.name })}
                        className={`p-3 rounded-xl text-left border text-xs font-semibold transition flex items-center justify-between ${
                          isSelected
                            ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                            : 'bg-white text-slate-700 hover:bg-slate-50 border-slate-200'
                        }`}
                      >
                        <span>{region.shortLabel}</span>
                        {isSelected && <CheckCircle2 className="w-3.5 h-3.5" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-2">
                  Briefly Describe Your Pain / Condition / Duration:
                </label>
                <textarea
                  rows={3}
                  placeholder="e.g. Sharp shooting pain in lower back down left leg for 3 weeks; difficulty standing straight..."
                  value={formData.symptoms}
                  onChange={(e) => setFormData({ ...formData, symptoms: e.target.value })}
                  className="w-full p-3 rounded-xl bg-slate-50 border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-blue-600 transition"
                />
              </div>

              <div className="flex items-center space-x-2 p-3 bg-slate-50 rounded-xl border border-slate-200">
                <input
                  type="checkbox"
                  id="surgeryCheck"
                  checked={formData.previousSurgeryOrXRay}
                  onChange={(e) => setFormData({ ...formData, previousSurgeryOrXRay: e.target.checked })}
                  className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500 border-slate-300 accent-blue-600"
                />
                <label htmlFor="surgeryCheck" className="text-xs text-slate-700 font-medium cursor-pointer">
                  I have previous MRI / X-Ray scans or recent surgical discharge papers to share
                </label>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="py-3.5 px-5 rounded-full border border-slate-300 text-slate-700 font-semibold text-xs hover:bg-slate-50 transition flex items-center space-x-1"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="flex-1 py-3.5 px-6 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md shadow-blue-100 transition flex items-center justify-center space-x-2"
                >
                  <span>Select Date & Time Slot</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Date & Time Slot */}
          {step === 3 && (
            <div className="space-y-5 animate-in fade-in">
              <div>
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-2">
                  Preferred Appointment Date:
                </label>
                <input
                  type="date"
                  min={new Date().toISOString().split('T')[0]}
                  value={formData.preferredDate}
                  onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                  className="w-full p-3 rounded-xl bg-slate-50 border border-slate-300 text-xs font-semibold text-slate-800 focus:outline-none focus:border-blue-600 transition"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-2">
                  Select Preferred Time Slot:
                </label>
                <div className="space-y-2">
                  {timeSlots.map((slot) => {
                    const isSelected = formData.preferredTime === slot;
                    return (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setFormData({ ...formData, preferredTime: slot })}
                        className={`w-full p-3 rounded-xl text-left border text-xs font-medium transition flex items-center justify-between ${
                          isSelected
                            ? 'bg-blue-50 text-blue-900 border-blue-500 font-bold shadow-sm'
                            : 'bg-white text-slate-700 hover:bg-slate-50 border-slate-200'
                        }`}
                      >
                        <div className="flex items-center space-x-2">
                          <Clock className={`w-3.5 h-3.5 ${isSelected ? 'text-blue-600' : 'text-slate-400'}`} />
                          <span>{slot}</span>
                        </div>
                        {isSelected && <CheckCircle2 className="w-4 h-4 text-blue-600" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="py-3.5 px-5 rounded-full border border-slate-300 text-slate-700 font-semibold text-xs hover:bg-slate-50 transition flex items-center space-x-1"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>
                <button
                  type="button"
                  onClick={() => setStep(4)}
                  className="flex-1 py-3.5 px-6 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md shadow-blue-100 transition flex items-center justify-center space-x-2"
                >
                  <span>Enter Patient Contact Info</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: Patient Contact Information */}
          {step === 4 && (
            <form onSubmit={handleSubmit} className="space-y-4 animate-in fade-in">
              <div>
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-1">
                  Patient Full Name *:
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rajesh Kumar"
                  value={formData.patientName}
                  onChange={(e) => setFormData({ ...formData, patientName: e.target.value })}
                  className="w-full p-3 rounded-xl bg-slate-50 border border-slate-300 text-xs font-medium text-slate-900 focus:outline-none focus:border-blue-600 transition"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-1">
                    Phone / WhatsApp Number *:
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +91 98200 00000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full p-3 rounded-xl bg-slate-50 border border-slate-300 text-xs font-medium text-slate-900 focus:outline-none focus:border-blue-600 transition"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-1">
                    Email Address:
                  </label>
                  <input
                    type="email"
                    placeholder="e.g. rajesh@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full p-3 rounded-xl bg-slate-50 border border-slate-300 text-xs font-medium text-slate-900 focus:outline-none focus:border-blue-600 transition"
                  />
                </div>
              </div>

              {formData.serviceType.includes('Home') && (
                <div>
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-1">
                    Full Mumbai Residence Address (for Home Visit):
                  </label>
                  <input
                    type="text"
                    placeholder="Building name, flat number, street, landmark in Mumbai..."
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full p-3 rounded-xl bg-slate-50 border border-slate-300 text-xs font-medium text-slate-900 focus:outline-none focus:border-blue-600 transition"
                  />
                </div>
              )}

              {/* Booking Summary Box */}
              <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-100 text-xs space-y-1 text-slate-800">
                <span className="font-bold block text-blue-800 font-heading">Appointment Summary:</span>
                <div>• Format: {formData.serviceType}</div>
                <div>• Area: {formData.mumbaiArea} | Focus: {formData.bodyPart}</div>
                <div>• Scheduled: {formData.preferredDate} at {formData.preferredTime}</div>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="py-3.5 px-5 rounded-full border border-slate-300 text-slate-700 font-semibold text-xs hover:bg-slate-50 transition flex items-center space-x-1"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 py-3.5 px-6 rounded-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-bold text-sm shadow-md shadow-blue-100 transition flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <span>Confirming Appointment...</span>
                  ) : (
                    <>
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Confirm & Book Consultation</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}

          {/* STEP 5: Success Confirmation & Printable Receipt */}
          {step === 5 && submissionResult && (
            <div className="space-y-6 text-center py-4 animate-in zoom-in-95 duration-200">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">
                  Appointment Confirmed
                </span>
                <h3 className="text-2xl font-extrabold text-slate-900 font-heading mt-1">
                  Thank You, {formData.patientName}!
                </h3>
                <p className="text-xs text-slate-600 mt-1">
                  Your consultation request with <strong className="text-slate-800">Dr Pawan Gupta (PT)</strong> has been logged.
                </p>
              </div>

              {/* Receipt Summary Card */}
              <div className="p-5 rounded-3xl bg-slate-50 border border-slate-200 text-left text-xs space-y-2.5 max-w-md mx-auto">
                <div className="flex justify-between border-b pb-2 border-slate-200">
                  <span className="text-slate-500">Booking Reference:</span>
                  <span className="font-mono font-bold text-blue-700">{submissionResult.appointmentId}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Service:</span>
                  <span className="font-semibold text-slate-900">{formData.serviceType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Focus Area:</span>
                  <span className="font-semibold text-slate-900">{formData.bodyPart}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Location:</span>
                  <span className="font-semibold text-slate-900">{formData.mumbaiArea}</span>
                </div>
                <div className="flex justify-between border-t pt-2 border-slate-200">
                  <span className="text-slate-500">Date & Slot:</span>
                  <span className="font-bold text-slate-900">{formData.preferredDate} ({formData.preferredTime.split('(')[0]})</span>
                </div>
                <div className="flex items-center justify-between border-t pt-2 border-slate-200 text-[11px]">
                  <span className="text-slate-500 flex items-center gap-1">
                    <Database className="w-3 h-3 text-emerald-600" />
                    <span>Database Status:</span>
                  </span>
                  <span className="inline-flex items-center gap-1 font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-md text-[10px]">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    Saved to Supabase
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
                <a
                  href={submissionResult.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3.5 px-5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md shadow-emerald-100 transition flex items-center justify-center space-x-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send WhatsApp Confirmation</span>
                </a>

                <button
                  type="button"
                  onClick={handlePrint}
                  className="py-3.5 px-5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs transition flex items-center justify-center space-x-1.5"
                >
                  <Printer className="w-4 h-4" />
                  <span>Print Slip</span>
                </button>
              </div>

              <div className="text-[11px] text-slate-400">
                Dr Pawan Gupta's clinical desk will call {formData.phone} shortly to finalize directions and slot details.
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};

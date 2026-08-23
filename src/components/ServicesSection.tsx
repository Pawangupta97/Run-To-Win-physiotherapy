import React, { useState } from 'react';
import { 
  Activity, 
  Zap, 
  HeartPulse, 
  Home, 
  Brain, 
  ShieldAlert, 
  Monitor, 
  Users, 
  Clock, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles,
  Calendar,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { SERVICES } from '../data/clinicData';
import { ServiceItem, ServiceCategory } from '../types';

import orthopedicImg from '../assets/images/regenerated_image_1787088217070.png';
import sportsImg from '../assets/images/regenerated_image_1787088221289.png';
import postOpImg from '../assets/images/regenerated_image_1787088225175.png';
import homeVisitImg from '../assets/images/regenerated_image_1787088229284.png';
import neuroImg from '../assets/images/regenerated_image_1787088232497.png';
import modalitiesImg from '../assets/images/regenerated_image_1787088240020.png';
import ergonomicsImg from '../assets/images/regenerated_image_1787088933047.png';
import geriatricImg from '../assets/images/regenerated_image_1787088243680.png';

interface ServicesSectionProps {
  onOpenBooking: (prefillService?: string) => void;
}

const SERVICE_IMAGES: Record<string, string> = {
  'orthopedic-spine': orthopedicImg,
  'sports-injury': sportsImg,
  'post-operative-care': postOpImg,
  'mumbai-home-visits': homeVisitImg,
  'neuro-rehab': neuroImg,
  'dry-needling-cupping': modalitiesImg,
  'ergonomics-posture': ergonomicsImg,
  'geriatric-care': geriatricImg,
  orthopedic: orthopedicImg,
  sports: sportsImg,
  post_op: postOpImg,
  home_visit: homeVisitImg,
  neuro: neuroImg,
  modalities: modalitiesImg,
  ergonomics: ergonomicsImg,
  geriatric: geriatricImg,
};

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenBooking }) => {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>('all');
  const [selectedServiceModal, setSelectedServiceModal] = useState<ServiceItem | null>(null);

  const categories: { id: ServiceCategory; label: string; icon: any }[] = [
    { id: 'all', label: 'All Services', icon: Activity },
    { id: 'orthopedic', label: 'Orthopedic & Spine', icon: Activity },
    { id: 'sports', label: 'Sports & Athletics', icon: Zap },
    { id: 'post_op', label: 'Post-Surgical TKR/THR', icon: HeartPulse },
    { id: 'home_visit', label: 'Mumbai Home Visits', icon: Home },
    { id: 'neuro', label: 'Neuro & Stroke', icon: Brain },
    { id: 'modalities', label: 'Dry Needling & Cupping', icon: ShieldAlert },
    { id: 'ergonomics', label: 'Ergonomics & Posture', icon: Monitor },
    { id: 'geriatric', label: 'Geriatric & Senior Care', icon: Users },
  ];

  const filteredServices = activeCategory === 'all'
    ? SERVICES
    : SERVICES.filter((s) => s.category === activeCategory);

  const renderIcon = (name: string) => {
    switch (name) {
      case 'Activity': return <Activity className="w-5 h-5" />;
      case 'Zap': return <Zap className="w-5 h-5" />;
      case 'HeartPulse': return <HeartPulse className="w-5 h-5" />;
      case 'Home': return <Home className="w-5 h-5" />;
      case 'Brain': return <Brain className="w-5 h-5" />;
      case 'ShieldAlert': return <ShieldAlert className="w-5 h-5" />;
      case 'Monitor': return <Monitor className="w-5 h-5" />;
      case 'Users': return <Users className="w-5 h-5" />;
      default: return <Activity className="w-5 h-5" />;
    }
  };

  return (
    <section id="services" className="py-16 md:py-24 bg-slate-50/70 border-b border-slate-200 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3 border border-blue-100 shadow-sm">
            <Activity className="w-3.5 h-3.5 text-blue-600" />
            <span>Comprehensive Clinical Care</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
            Specialized Physiotherapy & Rehabilitation
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Scientifically backed treatments delivered by Dr Pawan Gupta (PT) in our Sewri clinic and through specialized home visits across Mumbai.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-start lg:justify-center overflow-x-auto pb-4 mb-8 gap-2 no-scrollbar">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 flex items-center space-x-1.5 shrink-0 border ${
                  isActive
                    ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-500/20 scale-105'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border-slate-200'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-slate-500'}`} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Services Grid with Motion Stagger */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredServices.map((service) => {
              const serviceImg = SERVICE_IMAGES[service.id] || SERVICE_IMAGES[service.category] || orthopedicImg;
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.25 }}
                  key={service.id}
                  className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-200 flex flex-col justify-between group"
                >
                  {/* Service Image Card Banner */}
                  <div className="relative h-40 overflow-hidden bg-slate-100">
                    <img 
                      src={serviceImg} 
                      alt={service.title} 
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/20 to-transparent"></div>

                    <div className="absolute top-3 left-3 w-10 h-10 rounded-xl bg-white/90 backdrop-blur-md text-blue-600 flex items-center justify-center shadow-md">
                      {renderIcon(service.iconName)}
                    </div>

                    {service.badge && (
                      <span className="absolute top-3 right-3 text-[10px] font-bold px-2.5 py-1 rounded-full bg-blue-600 text-white shadow-sm">
                        {service.badge}
                      </span>
                    )}

                    <div className="absolute bottom-2.5 left-3 right-3 text-white">
                      <span className="text-[10px] font-bold text-blue-300 uppercase tracking-wider block">
                        {service.category.replace('_', ' ')}
                      </span>
                      <h3 className="text-base font-bold text-white font-heading truncate">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  <div className="p-5 sm:p-6 space-y-4 flex-1 flex flex-col justify-between">
                    <div>
                      <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                        {service.shortDesc}
                      </p>

                      {/* Session Duration & Techniques */}
                      <div className="pt-3 mt-3 border-t border-slate-100 space-y-2">
                        <div className="flex items-center justify-between text-xs text-slate-500">
                          <span className="flex items-center space-x-1">
                            <Clock className="w-3.5 h-3.5 text-blue-600" />
                            <span>{service.duration}</span>
                          </span>
                          <span className="font-semibold text-emerald-700">Dr Pawan Gupta (PT)</span>
                        </div>

                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {service.techniques.slice(0, 3).map((tech, idx) => (
                            <span
                              key={idx}
                              className="text-[11px] px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-4 border-t border-slate-100 flex items-center gap-2">
                      <button
                        onClick={() => setSelectedServiceModal(service)}
                        className="flex-1 py-2 px-3 rounded-xl text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition text-center"
                      >
                        View Details
                      </button>
                      <button
                        onClick={() => onOpenBooking(service.title)}
                        className="py-2 px-4 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-100 transition flex items-center space-x-1"
                      >
                        <span>Book</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>

                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Service Detailed Modal */}
      {selectedServiceModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 max-h-[90vh] overflow-y-auto relative">
            <button
              onClick={() => setSelectedServiceModal(null)}
              className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-5">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center">
                  {renderIcon(selectedServiceModal.iconName)}
                </div>
                <div>
                  <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">
                    {selectedServiceModal.category.replace('_', ' ')}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading">
                    {selectedServiceModal.title}
                  </h3>
                </div>
              </div>

              <p className="text-sm text-slate-700 leading-relaxed">
                {selectedServiceModal.fullDesc}
              </p>

              {/* Ideal For */}
              <div>
                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                  Conditions & Ideal Candidates:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedServiceModal.idealFor.map((item, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 text-xs font-medium border border-slate-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Clinical Benefits */}
              <div>
                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                  Key Rehabilitation Benefits:
                </h4>
                <div className="space-y-2">
                  {selectedServiceModal.keyBenefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start space-x-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Modalities Used */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <h4 className="text-xs font-bold text-slate-700 mb-1">
                  Evidence-Based Modalities & Techniques:
                </h4>
                <p className="text-xs text-slate-600">
                  {selectedServiceModal.techniques.join(' • ')}
                </p>
              </div>

              {/* Action */}
              <div className="pt-3 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => {
                    const title = selectedServiceModal.title;
                    setSelectedServiceModal(null);
                    onOpenBooking(title);
                  }}
                  className="flex-1 py-3 px-5 rounded-full font-bold text-sm bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-100 transition flex items-center justify-center space-x-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Consultation for this Treatment</span>
                </button>
                <button
                  onClick={() => setSelectedServiceModal(null)}
                  className="py-3 px-5 rounded-full text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition"
                >
                  Close
                </button>
              </div>

            </div>
          </div>
        </div>
      )}

    </section>
  );
};

import React, { useState, useEffect, useRef } from 'react';
import clinicLogo from '../assets/images/regenerated_image_1787083514422.jpg';
import { 
  Phone, 
  Calendar, 
  MapPin, 
  Menu, 
  X, 
  Activity, 
  Sparkles, 
  Clock, 
  MessageSquare, 
  ShieldCheck, 
  ChevronRight,
  ChevronDown
} from 'lucide-react';
import { CLINIC_CONTACT } from '../data/clinicData';
import { LOCATION_GROUPS, HomeVisitLocation } from '../data/homeVisitLocations';

interface NavbarProps {
  onOpenBooking: (prefillService?: string, prefillArea?: string) => void;
  onOpenAiAssistant: () => void;
  onSelectLocation?: (locationId: string) => void;
  onNavigatePage?: (page: string) => void;
  currentPage?: string;
  onGoHome?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  onOpenBooking, 
  onOpenAiAssistant,
  onSelectLocation,
  onNavigatePage,
  currentPage = 'home',
  onGoHome
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLocationsOpen, setIsLocationsOpen] = useState(false);
  const [mobileLocationsOpen, setMobileLocationsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsLocationsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsLocationsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsLocationsOpen(false);
    }, 200);
  };

  const handleLocationClick = (loc: HomeVisitLocation) => {
    setIsLocationsOpen(false);
    setMobileMenuOpen(false);
    if (onSelectLocation) {
      onSelectLocation(loc.id);
    }
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    if (onGoHome) {
      e.preventDefault();
      onGoHome();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Banner Bar */}
      <div className="bg-slate-900 text-slate-200 text-xs py-2 px-4 border-b border-slate-800 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block"></span>
              <span className="font-semibold tracking-wide">Dr Pawan Gupta (PT) — Mumbai Clinic & Doorstep Home Care</span>
            </div>
            <div className="flex items-center space-x-1 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-blue-400" />
              <span>Sewri Clinic & Home Visits Across Mumbai</span>
            </div>
            <div className="flex items-center space-x-1 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-blue-400" />
              <span>Mon – Sat: 8 AM – 9 PM | Sun: By Appt</span>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <a 
              href={`https://wa.me/${CLINIC_CONTACT.whatsappNumber}?text=Hello%20Dr.%20Pawan%20Gupta,%20I%20would%20like%20to%20inquire%20about%20physiotherapy%20consultation.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1.5 text-emerald-400 hover:text-emerald-300 font-medium transition"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Direct</span>
            </a>
            <span className="text-slate-700">|</span>
            <a 
              href={`tel:${CLINIC_CONTACT.phone}`}
              className="flex items-center space-x-1 text-white hover:text-blue-300 font-semibold transition"
            >
              <Phone className="w-3.5 h-3.5 text-blue-400" />
              <span>{CLINIC_CONTACT.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header 
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-sm py-3 border-b border-slate-100' 
            : 'bg-white py-4 border-b border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo & Brand Identity */}
          <a 
            href="#" 
            onClick={handleLogoClick}
            className="flex items-center space-x-3 group cursor-pointer"
          >
            <div className="w-12 h-12 rounded-xl overflow-hidden bg-white flex items-center justify-center shadow-md shadow-blue-500/10 border border-slate-200 shrink-0 group-hover:border-blue-300 transition-all p-0.5">
              <span className="w-full h-full flex items-center justify-center transition-transform duration-300 ease-out group-hover:scale-105">
                <img 
                  src={clinicLogo} 
                  alt="RUN TO WIN PHYSIOTHERAPY Logo" 
                  className="w-full h-full object-contain transition-transform duration-300 ease-out group-hover:scale-105"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (!target.dataset.tried) {
                      target.dataset.tried = 'true';
                      target.src = '/logo-%20run%20to%20win.png';
                    }
                  }}
                />
              </span>
            </div>
            <div>
              <h1 className="text-base sm:text-lg font-bold tracking-tight text-blue-950 uppercase leading-none font-heading flex items-center gap-1.5">
                <span className="transition-transform duration-300 ease-out group-hover:scale-[1.02] inline-block origin-left">RUN TO WIN PHYSIOTHERAPY</span>
              </h1>
              <p className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider mt-1">
                <span>Care To Cure</span>
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-5 text-sm font-medium text-slate-600">
            <button
              onClick={() => onNavigatePage ? onNavigatePage('home') : onGoHome && onGoHome()}
              className={`hover:text-blue-600 transition-colors py-1 relative group font-semibold ${
                currentPage === 'home' ? 'text-blue-600 border-b-2 border-blue-600 pb-0.5' : 'text-slate-700'
              }`}
            >
              Home
            </button>
            
            <button
              onClick={() => onNavigatePage ? onNavigatePage('about') : onGoHome && onGoHome()}
              className={`hover:text-blue-600 transition-colors py-1 relative group ${
                currentPage === 'about' ? 'text-blue-600 font-bold border-b-2 border-blue-600 pb-0.5' : 'text-slate-700'
              }`}
            >
              About Dr. Pawan
            </button>

            <button
              onClick={() => onNavigatePage ? onNavigatePage('services') : onGoHome && onGoHome()}
              className={`hover:text-blue-600 transition-colors py-1 relative group ${
                currentPage === 'services' ? 'text-blue-600 font-bold border-b-2 border-blue-600 pb-0.5' : 'text-slate-700'
              }`}
            >
              Services & Care
            </button>

            <button
              onClick={() => onNavigatePage ? onNavigatePage('conditions') : onGoHome && onGoHome()}
              className={`hover:text-blue-600 transition-colors py-1 relative group ${
                currentPage === 'conditions' ? 'text-blue-600 font-bold border-b-2 border-blue-600 pb-0.5' : 'text-slate-700'
              }`}
            >
              Conditions
            </button>

            <button
              onClick={() => onNavigatePage ? onNavigatePage('articles') : onGoHome && onGoHome()}
              className={`hover:text-blue-600 transition-colors py-1 relative group ${
                currentPage === 'articles' ? 'text-blue-600 font-bold border-b-2 border-blue-600 pb-0.5' : 'text-slate-700'
              }`}
            >
              Articles
            </button>

            {/* Mumbai Home Visit Dropdown Link with Mega Menu */}
            <div 
              ref={dropdownRef}
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                onClick={() => onNavigatePage ? onNavigatePage('home-visits') : setIsLocationsOpen(!isLocationsOpen)}
                className={`flex items-center space-x-1 py-1 transition-colors font-semibold ${
                  currentPage === 'home-visits' || isLocationsOpen ? 'text-blue-600' : 'text-blue-900 hover:text-blue-600'
                }`}
              >
                <span>Mumbai Home Visit</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isLocationsOpen ? 'rotate-180 text-blue-600' : 'text-slate-400'}`} />
              </button>

              {/* Mega-Menu Dropdown Panel (Styled identically to user image reference) */}
              {isLocationsOpen && (
                <div 
                  className="absolute -left-64 sm:-left-48 lg:-left-32 top-full mt-2 w-[920px] max-w-[95vw] bg-white rounded-2xl shadow-2xl border border-slate-200/90 p-6 z-50 animate-in fade-in zoom-in-98 duration-150"
                  style={{ transform: 'translateX(0)' }}
                >
                  <div className="grid grid-cols-6 gap-5 text-left divide-x divide-slate-100">
                    {LOCATION_GROUPS.map((group, groupIdx) => (
                      <div 
                        key={group.category} 
                        className={`space-y-3 ${groupIdx > 0 ? 'pl-4' : ''}`}
                      >
                        <div className="pb-1.5 border-b-2 border-slate-900">
                          <h4 className="text-xs font-extrabold text-slate-900 font-heading uppercase tracking-wider whitespace-nowrap">
                            {group.category}
                          </h4>
                        </div>
                        <ul className="space-y-1.5 text-xs">
                          {group.locations.map((loc) => (
                            <li key={loc.id}>
                              <button
                                type="button"
                                onClick={() => handleLocationClick(loc)}
                                className="text-slate-600 hover:text-blue-600 hover:translate-x-0.5 transition-all text-left block w-full py-0.5 font-medium hover:font-semibold"
                              >
                                {loc.name}
                              </button>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  {/* Mega Menu Footer Callout */}
                  <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between bg-slate-50 -mx-6 -mb-6 px-6 py-3 rounded-b-2xl text-xs">
                    <div className="flex items-center space-x-2 text-slate-600">
                      <MapPin className="w-3.5 h-3.5 text-blue-600" />
                      <span><strong>35+ Suburbs Covered:</strong> 7:00 AM – 8:30 PM Doorstep Sessions Across Mumbai & Thane</span>
                    </div>
                    <button
                      onClick={() => {
                        setIsLocationsOpen(false);
                        if (onNavigatePage) onNavigatePage('home-visits');
                      }}
                      className="text-blue-600 hover:text-blue-700 font-bold hover:underline"
                    >
                      View All 35+ Suburbs Hub →
                    </button>
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={() => onNavigatePage ? onNavigatePage('body-map') : onGoHome && onGoHome()}
              className={`hover:text-blue-600 transition-colors py-1 relative group ${
                currentPage === 'body-map' ? 'text-blue-600 font-bold border-b-2 border-blue-600 pb-0.5' : 'text-slate-700'
              }`}
            >
              Body Map
            </button>

            <button
              onClick={() => onNavigatePage ? onNavigatePage('testimonials') : onGoHome && onGoHome()}
              className={`hover:text-blue-600 transition-colors py-1 relative group ${
                currentPage === 'testimonials' ? 'text-blue-600 font-bold border-b-2 border-blue-600 pb-0.5' : 'text-slate-700'
              }`}
            >
              Testimonials
            </button>

            <button
              onClick={() => onNavigatePage ? onNavigatePage('faq') : onGoHome && onGoHome()}
              className={`hover:text-blue-600 transition-colors py-1 relative group ${
                currentPage === 'faq' ? 'text-blue-600 font-bold border-b-2 border-blue-600 pb-0.5' : 'text-slate-700'
              }`}
            >
              FAQ
            </button>

            <button
              onClick={() => onNavigatePage ? onNavigatePage('contact') : onGoHome && onGoHome()}
              className={`hover:text-blue-600 transition-colors py-1 relative group ${
                currentPage === 'contact' ? 'text-blue-600 font-bold border-b-2 border-blue-600 pb-0.5' : 'text-slate-700'
              }`}
            >
              Contact
            </button>
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center space-x-3">
            {/* AI Assistant Button */}
            <button
              onClick={onOpenAiAssistant}
              className="px-3.5 py-2 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-100 hover:bg-blue-100 transition flex items-center space-x-1.5 shadow-sm"
              title="Interactive Physiotherapy Triage"
            >
              <Sparkles className="w-3.5 h-3.5 text-blue-600 animate-pulse" />
              <span>AI Triage</span>
            </button>

            {/* Quick Call */}
            <a
              href={`tel:${CLINIC_CONTACT.phone}`}
              className="p-2.5 rounded-full text-slate-700 bg-slate-100 hover:bg-slate-200 transition hidden md:flex items-center justify-center"
              title="Call Clinic Desk"
            >
              <Phone className="w-4 h-4 text-blue-600" />
            </a>

            {/* Book Appointment CTA */}
            <button
              onClick={() => onOpenBooking()}
              className="bg-blue-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-md shadow-blue-100 hover:bg-blue-700 active:scale-98 transition-all flex items-center space-x-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-2 lg:hidden">
            <button
              onClick={() => onOpenBooking()}
              className="px-3 py-1.5 rounded-full text-xs font-semibold bg-blue-600 text-white shadow-sm"
            >
              Book Now
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-4 shadow-xl animate-in slide-in-from-top duration-200 max-h-[85vh] overflow-y-auto">
            <div className="grid grid-cols-2 gap-2 pt-1 pb-2 border-b border-slate-100">
              <a
                href={`tel:${CLINIC_CONTACT.phone}`}
                className="flex items-center justify-center space-x-2 py-2.5 px-3 rounded-xl bg-slate-100 text-slate-800 text-xs font-semibold"
              >
                <Phone className="w-4 h-4 text-blue-600" />
                <span>Call Clinic</span>
              </a>
              <a
                href={`https://wa.me/${CLINIC_CONTACT.whatsappNumber}?text=Hello%20Dr.%20Pawan%20Gupta,%20I%20would%20like%20to%20inquire%20about%20physiotherapy.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 py-2.5 px-3 rounded-xl bg-emerald-50 text-emerald-700 text-xs font-semibold border border-emerald-200"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp</span>
              </a>
            </div>

            <div className="space-y-1">
              <a
                href="#"
                onClick={(e) => {
                  handleLogoClick(e);
                  setMobileMenuOpen(false);
                }}
                className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition"
              >
                <span>Home</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </a>

              {/* Mobile Dropdown for Mumbai Home Visit Localities */}
              <div className="border rounded-xl border-slate-200 overflow-hidden">
                <button
                  type="button"
                  onClick={() => setMobileLocationsOpen(!mobileLocationsOpen)}
                  className="w-full flex items-center justify-between px-3 py-3 text-sm font-bold text-blue-900 bg-blue-50/50 hover:bg-blue-50 transition"
                >
                  <span className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-blue-600" />
                    <span>Mumbai Home Visits (35+ Localities)</span>
                  </span>
                  <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform ${mobileLocationsOpen ? 'rotate-180' : ''}`} />
                </button>

                {mobileLocationsOpen && (
                  <div className="p-3 bg-white space-y-4 text-left border-t border-slate-100">
                    {LOCATION_GROUPS.map((group) => (
                      <div key={group.category} className="space-y-2">
                        <div className="text-[11px] font-extrabold uppercase text-slate-900 tracking-wider pb-1 border-b border-slate-100">
                          {group.category}
                        </div>
                        <div className="grid grid-cols-2 gap-1.5 text-xs">
                          {group.locations.map((loc) => (
                            <button
                              key={loc.id}
                              type="button"
                              onClick={() => handleLocationClick(loc)}
                              className="text-left py-1 px-2 rounded-lg bg-slate-50 hover:bg-blue-50 hover:text-blue-700 text-slate-700 font-medium transition text-[11px]"
                            >
                              • {loc.name}
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onNavigatePage) onNavigatePage('about');
                  else if (onGoHome) onGoHome();
                }}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition ${
                  currentPage === 'about' ? 'bg-blue-50 text-blue-600 font-bold' : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <span>About Dr. Pawan Gupta</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onNavigatePage) onNavigatePage('services');
                  else if (onGoHome) onGoHome();
                }}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition ${
                  currentPage === 'services' ? 'bg-blue-50 text-blue-600 font-bold' : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <span>Services & Care</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onNavigatePage) onNavigatePage('conditions');
                  else if (onGoHome) onGoHome();
                }}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition ${
                  currentPage === 'conditions' ? 'bg-blue-50 text-blue-600 font-bold' : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <span>Conditions Treated</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onNavigatePage) onNavigatePage('articles');
                  else if (onGoHome) onGoHome();
                }}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition ${
                  currentPage === 'articles' ? 'bg-blue-50 text-blue-600 font-bold' : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <span>Clinical Articles</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onNavigatePage) onNavigatePage('body-map');
                  else if (onGoHome) onGoHome();
                }}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition ${
                  currentPage === 'body-map' ? 'bg-blue-50 text-blue-600 font-bold' : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <span>Body Symptom Map</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onNavigatePage) onNavigatePage('testimonials');
                  else if (onGoHome) onGoHome();
                }}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition ${
                  currentPage === 'testimonials' ? 'bg-blue-50 text-blue-600 font-bold' : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <span>Testimonials</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onNavigatePage) onNavigatePage('faq');
                  else if (onGoHome) onGoHome();
                }}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition ${
                  currentPage === 'faq' ? 'bg-blue-50 text-blue-600 font-bold' : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <span>FAQ</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onNavigatePage) onNavigatePage('contact');
                  else if (onGoHome) onGoHome();
                }}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition ${
                  currentPage === 'contact' ? 'bg-blue-50 text-blue-600 font-bold' : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <span>Contact & Clinic</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>
            </div>

            <div className="pt-2 space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAiAssistant();
                }}
                className="w-full py-2.5 px-4 rounded-xl text-sm font-semibold bg-blue-50 text-blue-800 border border-blue-200 flex items-center justify-center space-x-2"
              >
                <Sparkles className="w-4 h-4 text-blue-600" />
                <span>Ask Run To Win AI Assistant</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 px-4 rounded-full text-sm font-bold bg-blue-600 text-white shadow-md shadow-blue-100 flex items-center justify-center space-x-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Book In-Clinic or Home Visit</span>
              </button>
            </div>

            <div className="pt-2 text-center text-xs text-slate-500 flex items-center justify-center space-x-1">
              <ShieldCheck className="w-4 h-4 text-blue-600" />
              <span>Certified Physiotherapy Practice in Mumbai</span>
            </div>
          </div>
        )}
      </header>
    </>
  );
};


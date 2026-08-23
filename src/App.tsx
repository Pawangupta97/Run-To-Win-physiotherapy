import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { InteractiveBodyMap } from './components/InteractiveBodyMap';
import { ServicesSection } from './components/ServicesSection';
import { DoctorProfileSection } from './components/DoctorProfileSection';
import { HomeVisitCoverage } from './components/HomeVisitCoverage';
import { RecoveryPhases } from './components/RecoveryPhases';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ErgonomicPostureChecker } from './components/ErgonomicPostureChecker';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { FloatingQuickActions } from './components/FloatingQuickActions';
import { BookingModal } from './components/BookingModal';
import { AiPhysioAssistant } from './components/AiPhysioAssistant';
import { LocationPage } from './components/LocationPage';
import { HOME_VISIT_LOCATIONS, HomeVisitLocation } from './data/homeVisitLocations';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isAiOpen, setIsAiOpen] = useState(false);
  const [selectedRegionId, setSelectedRegionId] = useState('lower-back');
  const [selectedLocationId, setSelectedLocationId] = useState<string | null>(null);

  const [bookingPrefill, setBookingPrefill] = useState<{
    service?: string;
    area?: string;
    bodyPart?: string;
  }>({});

  const [aiContext, setAiContext] = useState<string | undefined>(undefined);

  // Sync with URL hash for location pages (#location/andheri or #andheri)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#location/')) {
        const locId = hash.replace('#location/', '').toLowerCase();
        const found = HOME_VISIT_LOCATIONS.find((l) => l.id === locId);
        if (found) {
          setSelectedLocationId(found.id);
          return;
        }
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleSelectLocation = (locationId: string) => {
    setSelectedLocationId(locationId);
    window.location.hash = `#location/${locationId}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGoHome = () => {
    setSelectedLocationId(null);
    if (window.location.hash.startsWith('#location/')) {
      history.pushState('', document.title, window.location.pathname + window.location.search);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenBooking = (service?: string, area?: string, bodyPart?: string) => {
    setBookingPrefill({
      service,
      area,
      bodyPart,
    });
    setIsBookingOpen(true);
  };

  const handleOpenAiAssistant = (context?: string) => {
    setAiContext(context);
    setIsAiOpen(true);
  };

  const currentLocation = selectedLocationId 
    ? HOME_VISIT_LOCATIONS.find((l) => l.id === selectedLocationId)
    : null;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col">
      {/* Navigation Header */}
      <Navbar
        onOpenBooking={() => handleOpenBooking()}
        onOpenAiAssistant={() => handleOpenAiAssistant()}
        onSelectLocation={handleSelectLocation}
        onGoHome={handleGoHome}
      />

      {/* Main Content: Render dedicated Location Page OR standard Homepage */}
      <main className="flex-1">
        {currentLocation ? (
          <LocationPage
            location={currentLocation}
            onBackToHome={handleGoHome}
            onSelectLocation={handleSelectLocation}
            onOpenBooking={handleOpenBooking}
            onOpenAiAssistant={handleOpenAiAssistant}
          />
        ) : (
          <>
            {/* Hero Section */}
            <HeroSection
              onOpenBooking={handleOpenBooking}
              onOpenAiAssistant={() => handleOpenAiAssistant()}
              onSelectBodyRegion={(id) => setSelectedRegionId(id)}
            />

            {/* Interactive Anatomical Body Map & Condition Explorer */}
            <InteractiveBodyMap
              selectedRegionId={selectedRegionId}
              onSelectRegion={(id) => setSelectedRegionId(id)}
              onOpenBooking={handleOpenBooking}
              onOpenAiAssistantWithContext={(ctx) => handleOpenAiAssistant(ctx)}
            />

            {/* Clinical Services & Modalities Grid */}
            <ServicesSection
              onOpenBooking={handleOpenBooking}
            />

            {/* Doctor Profile & Accreditations (Dr Pawan Gupta PT) */}
            <DoctorProfileSection
              onOpenBooking={() => handleOpenBooking()}
            />

            {/* Dedicated Mumbai Doorstep Home Care Coverage (35+ Suburbs) */}
            <HomeVisitCoverage
              onOpenBooking={handleOpenBooking}
              onSelectLocation={handleSelectLocation}
            />

            {/* 4-Phase Recovery Progression Pathway */}
            <RecoveryPhases
              onOpenBooking={() => handleOpenBooking()}
            />

            {/* Verified Patient Stories & Mobility Improvement Meters */}
            <TestimonialsSection
              onOpenBooking={() => handleOpenBooking()}
            />

            {/* Interactive Corporate Posture & Ergonomics Strain Checker */}
            <ErgonomicPostureChecker
              onOpenBooking={handleOpenBooking}
            />

            {/* Categorized FAQs */}
            <FaqSection
              onOpenBooking={() => handleOpenBooking()}
            />
          </>
        )}
      </main>

      {/* Comprehensive Medical Footer */}
      <Footer
        onOpenBooking={() => handleOpenBooking()}
        onOpenAiAssistant={() => handleOpenAiAssistant()}
        onSelectLocation={handleSelectLocation}
      />

      {/* Floating Conversion Actions */}
      <FloatingQuickActions
        onOpenBooking={() => handleOpenBooking()}
        onOpenAiAssistant={() => handleOpenAiAssistant()}
      />

      {/* Interactive Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        prefillService={bookingPrefill.service}
        prefillArea={bookingPrefill.area}
        prefillBodyPart={bookingPrefill.bodyPart}
      />

      {/* Run To Win AI Physiotherapy Assistant Modal */}
      <AiPhysioAssistant
        isOpen={isAiOpen}
        onClose={() => setIsAiOpen(false)}
        initialContext={aiContext}
        onOpenBooking={handleOpenBooking}
      />
    </div>
  );
}

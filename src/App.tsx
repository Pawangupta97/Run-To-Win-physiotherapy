import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { InteractiveBodyMap } from './components/InteractiveBodyMap';
import { ServicesSection } from './components/ServicesSection';
import { ConditionsHubSection } from './components/ConditionsHubSection';
import { ArticlesSection } from './components/ArticlesSection';
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
import { ConditionDetailPage } from './components/ConditionDetailPage';
import { ArticleDetailPage } from './components/ArticleDetailPage';
import { AboutPage } from './components/AboutPage';
import { ServicesPage } from './components/ServicesPage';
import { ConditionsPage } from './components/ConditionsPage';
import { ArticlesPage } from './components/ArticlesPage';
import { HomeVisitsPage } from './components/HomeVisitsPage';
import { BodyMapPage } from './components/BodyMapPage';
import { TestimonialsPage } from './components/TestimonialsPage';
import { FaqPage } from './components/FaqPage';
import { ContactPage } from './components/ContactPage';
import { HOME_VISIT_LOCATIONS, parseLocationFromUrl, getLocationPath, getLocationHash } from './data/homeVisitLocations';
import { CONDITION_GUIDES } from './data/conditionGuides';
import { CLINICAL_ARTICLES } from './data/articlesData';

type PageType = 
  | 'home' 
  | 'about' 
  | 'services' 
  | 'conditions' 
  | 'articles' 
  | 'home-visits' 
  | 'body-map' 
  | 'testimonials' 
  | 'faq' 
  | 'contact';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isAiOpen, setIsAiOpen] = useState(false);
  const [selectedRegionId, setSelectedRegionId] = useState('lower-back');
  const [selectedLocationId, setSelectedLocationId] = useState<string | null>(null);
  const [selectedConditionId, setSelectedConditionId] = useState<string | null>(null);
  const [selectedArticleId, setSelectedArticleId] = useState<string | null>(null);

  const [bookingPrefill, setBookingPrefill] = useState<{
    service?: string;
    area?: string;
    bodyPart?: string;
  }>({});

  const [aiContext, setAiContext] = useState<string | undefined>(undefined);

  // Sync with URL pathname and hash for all pages and detail routes
  useEffect(() => {
    const handleUrlRouting = () => {
      const pathname = window.location.pathname;
      const hash = window.location.hash.toLowerCase();

      // 1. Check for location routing (/physiotherapist-near-me-[loc] or #physiotherapist-near-me-[loc] or #location/[loc])
      const locId = parseLocationFromUrl(pathname, hash);
      if (locId) {
        setSelectedLocationId(locId);
        setSelectedConditionId(null);
        setSelectedArticleId(null);
        return;
      }

      // 2. Check for condition routes (#condition/...)
      if (hash.startsWith('#condition/')) {
        const condId = hash.replace('#condition/', '').toLowerCase();
        const found = CONDITION_GUIDES.find((c) => c.id === condId || c.slug === condId);
        if (found) {
          setSelectedConditionId(found.id);
          setSelectedLocationId(null);
          setSelectedArticleId(null);
          return;
        }
      } else if (hash.startsWith('#article/')) {
        const artId = hash.replace('#article/', '').toLowerCase();
        const found = CLINICAL_ARTICLES.find((a) => a.id === artId || a.slug === artId);
        if (found) {
          setSelectedArticleId(found.id);
          setSelectedLocationId(null);
          setSelectedConditionId(null);
          return;
        }
      } else if (hash === '#about' || hash === '#doctor') {
        setCurrentPage('about');
        setSelectedLocationId(null);
        setSelectedConditionId(null);
        setSelectedArticleId(null);
      } else if (hash === '#services') {
        setCurrentPage('services');
        setSelectedLocationId(null);
        setSelectedConditionId(null);
        setSelectedArticleId(null);
      } else if (hash === '#conditions') {
        setCurrentPage('conditions');
        setSelectedLocationId(null);
        setSelectedConditionId(null);
        setSelectedArticleId(null);
      } else if (hash === '#articles') {
        setCurrentPage('articles');
        setSelectedLocationId(null);
        setSelectedConditionId(null);
        setSelectedArticleId(null);
      } else if (hash === '#home-visits' || hash === '#home-visit') {
        setCurrentPage('home-visits');
        setSelectedLocationId(null);
        setSelectedConditionId(null);
        setSelectedArticleId(null);
      } else if (hash === '#body-map' || hash === '#symptoms') {
        setCurrentPage('body-map');
        setSelectedLocationId(null);
        setSelectedConditionId(null);
        setSelectedArticleId(null);
      } else if (hash === '#testimonials' || hash === '#reviews') {
        setCurrentPage('testimonials');
        setSelectedLocationId(null);
        setSelectedConditionId(null);
        setSelectedArticleId(null);
      } else if (hash === '#faq') {
        setCurrentPage('faq');
        setSelectedLocationId(null);
        setSelectedConditionId(null);
        setSelectedArticleId(null);
      } else if (hash === '#contact') {
        setCurrentPage('contact');
        setSelectedLocationId(null);
        setSelectedConditionId(null);
        setSelectedArticleId(null);
      } else if (hash === '' || hash === '#' || hash === '#home') {
        // If pathname is root or unrecognized, return to home
        if (!locId) {
          setCurrentPage('home');
          setSelectedLocationId(null);
          setSelectedConditionId(null);
          setSelectedArticleId(null);
        }
      }
    };

    handleUrlRouting();
    window.addEventListener('hashchange', handleUrlRouting);
    window.addEventListener('popstate', handleUrlRouting);
    return () => {
      window.removeEventListener('hashchange', handleUrlRouting);
      window.removeEventListener('popstate', handleUrlRouting);
    };
  }, []);

  const handleNavigatePage = (page: string) => {
    setSelectedLocationId(null);
    setSelectedConditionId(null);
    setSelectedArticleId(null);
    setCurrentPage(page as PageType);
    try {
      window.history.pushState(null, '', '/');
    } catch {}
    window.location.hash = page === 'home' ? '' : `#${page}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectLocation = (locationId: string) => {
    setSelectedLocationId(locationId);
    setSelectedConditionId(null);
    setSelectedArticleId(null);
    const newPath = getLocationPath(locationId);
    const newHash = getLocationHash(locationId);

    // Update browser URL seamlessly for direct links and local SEO bookmarks
    try {
      window.history.pushState({ locationId }, '', newPath);
    } catch {
      window.location.hash = newHash;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectCondition = (conditionId: string) => {
    setSelectedConditionId(conditionId);
    setSelectedLocationId(null);
    setSelectedArticleId(null);
    window.location.hash = `#condition/${conditionId}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectArticle = (articleId: string) => {
    setSelectedArticleId(articleId);
    setSelectedLocationId(null);
    setSelectedConditionId(null);
    window.location.hash = `#article/${articleId}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGoHome = () => {
    setSelectedLocationId(null);
    setSelectedConditionId(null);
    setSelectedArticleId(null);
    setCurrentPage('home');
    try {
      window.history.pushState(null, '', '/');
    } catch {}
    window.location.hash = '';
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

  const currentCondition = selectedConditionId
    ? CONDITION_GUIDES.find((c) => c.id === selectedConditionId)
    : null;

  const currentArticle = selectedArticleId
    ? CLINICAL_ARTICLES.find((a) => a.id === selectedArticleId)
    : null;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col">
      {/* Navigation Header */}
      <Navbar
        onOpenBooking={() => handleOpenBooking()}
        onOpenAiAssistant={() => handleOpenAiAssistant()}
        onSelectLocation={handleSelectLocation}
        onNavigatePage={handleNavigatePage}
        currentPage={currentPage}
        onGoHome={handleGoHome}
      />

      {/* Main Content: Render dedicated Pages OR Suburb/Condition/Article Detail Pages */}
      <main className="flex-1">
        {currentLocation ? (
          <LocationPage
            location={currentLocation}
            onBackToHome={handleGoHome}
            onSelectLocation={handleSelectLocation}
            onOpenBooking={handleOpenBooking}
            onOpenAiAssistant={handleOpenAiAssistant}
          />
        ) : currentCondition ? (
          <ConditionDetailPage
            condition={currentCondition}
            onBackToHome={handleGoHome}
            onSelectCondition={handleSelectCondition}
            onOpenBooking={handleOpenBooking}
            onOpenAiAssistant={handleOpenAiAssistant}
          />
        ) : currentArticle ? (
          <ArticleDetailPage
            article={currentArticle}
            onBackToHome={handleGoHome}
            onSelectArticle={handleSelectArticle}
            onSelectCondition={handleSelectCondition}
            onOpenBooking={handleOpenBooking}
          />
        ) : currentPage === 'about' ? (
          <AboutPage
            onBackToHome={handleGoHome}
            onOpenBooking={handleOpenBooking}
            onOpenAiAssistant={handleOpenAiAssistant}
          />
        ) : currentPage === 'services' || currentPage === 'conditions' ? (
          <ServicesPage
            onBackToHome={handleGoHome}
            onOpenBooking={handleOpenBooking}
            onOpenAiAssistant={handleOpenAiAssistant}
            onNavigatePage={handleNavigatePage}
            onSelectCondition={handleSelectCondition}
          />
        ) : currentPage === 'articles' ? (
          <ArticlesPage
            onBackToHome={handleGoHome}
            onSelectArticle={handleSelectArticle}
            onSelectCondition={handleSelectCondition}
            onOpenBooking={handleOpenBooking}
          />
        ) : currentPage === 'home-visits' ? (
          <HomeVisitsPage
            onBackToHome={handleGoHome}
            onSelectLocation={handleSelectLocation}
            onOpenBooking={handleOpenBooking}
            onOpenAiAssistant={handleOpenAiAssistant}
          />
        ) : currentPage === 'body-map' ? (
          <BodyMapPage
            onBackToHome={handleGoHome}
            onOpenBooking={handleOpenBooking}
            onOpenAiAssistant={handleOpenAiAssistant}
            onSelectConditionGuide={handleSelectCondition}
          />
        ) : currentPage === 'testimonials' ? (
          <TestimonialsPage
            onBackToHome={handleGoHome}
            onOpenBooking={handleOpenBooking}
          />
        ) : currentPage === 'faq' ? (
          <FaqPage
            onBackToHome={handleGoHome}
            onOpenBooking={handleOpenBooking}
            onOpenAiAssistant={handleOpenAiAssistant}
          />
        ) : currentPage === 'contact' ? (
          <ContactPage
            onBackToHome={handleGoHome}
            onOpenBooking={handleOpenBooking}
            onOpenAiAssistant={() => handleOpenAiAssistant()}
          />
        ) : (
          <>
            {/* Full High-Conversion Homepage */}
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
              onSelectConditionGuide={handleSelectCondition}
            />

            {/* Clinical Services & Modalities Grid */}
            <ServicesSection
              onOpenBooking={handleOpenBooking}
            />

            {/* Evidence-Based Condition Protocols Hub */}
            <ConditionsHubSection
              onSelectCondition={handleSelectCondition}
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

            {/* Clinical Knowledge & Patient Guides Hub */}
            <ArticlesSection
              onSelectArticle={handleSelectArticle}
              onOpenBooking={handleOpenBooking}
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
              onOpenBooking={handleOpenBooking}
            />
          </>
        )}
      </main>

      {/* Comprehensive Medical Footer */}
      <Footer
        onOpenBooking={() => handleOpenBooking()}
        onOpenAiAssistant={() => handleOpenAiAssistant()}
        onSelectLocation={handleSelectLocation}
        onSelectCondition={handleSelectCondition}
        onSelectArticle={handleSelectArticle}
        onNavigatePage={handleNavigatePage}
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


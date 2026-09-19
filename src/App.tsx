import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HomePage } from './components/HomePage';
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
import { RehabilitationPage } from './components/RehabilitationPage';
import { RehabilitationDetailPage } from './components/RehabilitationDetailPage';
import { PhysiotherapyMumbaiPage } from './components/PhysiotherapyMumbaiPage';
import { OrthopedicPhysiotherapyPage } from './components/OrthopedicPhysiotherapyPage';
import { SportsPhysiotherapyPage } from './components/SportsPhysiotherapyPage';
import { NeuroPhysiotherapyPage } from './components/NeuroPhysiotherapyPage';
import { HomePhysiotherapyPage } from './components/HomePhysiotherapyPage';
import { OnlinePhysiotherapyPage } from './components/OnlinePhysiotherapyPage';
import { PainManagementPage } from './components/PainManagementPage';
import { PostSurgicalRehabPage } from './components/PostSurgicalRehabPage';
import { ArticlesPage } from './components/ArticlesPage';
import { HomeVisitsPage } from './components/HomeVisitsPage';
import { BodyMapPage } from './components/BodyMapPage';
import { TestimonialsPage } from './components/TestimonialsPage';
import { FaqPage } from './components/FaqPage';
import { ContactPage } from './components/ContactPage';
import { DoctorProfilePage } from './components/DoctorProfilePage';
import { AreasWeServePage } from './components/AreasWeServePage';
import { NotFoundPage } from './components/NotFoundPage';
import { GoogleBusinessSyncModal } from './components/GoogleBusinessSyncModal';
import { HOME_VISIT_LOCATIONS, parseLocationFromUrl, getLocationPath, getLocationHash } from './data/homeVisitLocations';
import { CONDITION_GUIDES, getRehabGuideById } from './data/conditionGuides';
import { CLINICAL_ARTICLES } from './data/articlesData';

type PageType = 
  | 'home' 
  | 'dr-pawan-gupta'
  | 'about' 
  | 'services' 
  | 'conditions' 
  | 'rehabilitation'
  | 'physiotherapy-mumbai'
  | 'orthopedic-physiotherapy'
  | 'sports-physiotherapy'
  | 'neuro-physiotherapy'
  | 'home-physiotherapy'
  | 'online-physiotherapy'
  | 'pain-management'
  | 'post-surgical-rehab'
  | 'articles' 
  | 'home-visits' 
  | 'areas-we-serve'
  | 'body-map' 
  | 'testimonials' 
  | 'faq' 
  | 'contact'
  | '404';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isAiOpen, setIsAiOpen] = useState(false);
  const [isGmbSyncOpen, setIsGmbSyncOpen] = useState(false);
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

  useEffect(() => {
    const handleOpenSync = () => setIsGmbSyncOpen(true);
    window.addEventListener('open-gmb-sync', handleOpenSync);
    return () => window.removeEventListener('open-gmb-sync', handleOpenSync);
  }, []);

  // Sync with URL pathname and hash for all pages and detail routes
  useEffect(() => {
    const handleUrlRouting = () => {
      const pathname = window.location.pathname.replace(/\/$/, '') || '/';
      const hash = window.location.hash.toLowerCase();

      // 1. Check for location routing (/physiotherapist-near-me-[loc] or #physiotherapist-near-me-[loc] or #location/[loc])
      const locId = parseLocationFromUrl(pathname, hash);
      if (locId) {
        setSelectedLocationId(locId);
        setSelectedConditionId(null);
        setSelectedArticleId(null);
        return;
      }

      // 2. Check for condition and rehabilitation detail routes
      const condPath = pathname.startsWith('/conditions/') 
        ? pathname.replace('/conditions/', '').toLowerCase() 
        : pathname.startsWith('/condition/') 
        ? pathname.replace('/condition/', '').toLowerCase() 
        : null;

      const rehabPath = pathname.startsWith('/rehabilitation/') 
        ? pathname.replace('/rehabilitation/', '').toLowerCase() 
        : hash.startsWith('#rehabilitation/') 
        ? hash.replace('#rehabilitation/', '').toLowerCase() 
        : null;

      const condHash = hash.startsWith('#conditions/') 
        ? hash.replace('#conditions/', '').toLowerCase() 
        : hash.startsWith('#condition/') 
        ? hash.replace('#condition/', '').toLowerCase() 
        : null;

      const rawCondTarget = condHash || condPath || rehabPath;

      if (rawCondTarget) {
        // Support common aliases
        let condId = rawCondTarget;
        if (condId === 'knee') condId = 'knee-pain';
        else if (condId === 'sports-injury' || condId === 'sports-injuries') condId = 'sports-injury-rehab';
        else if (condId === 'acl' || condId === 'acl-rehab') condId = 'acl-rehab';
        else if (condId === 'knee-replacement' || condId === 'tkr') condId = 'knee-replacement-rehab';
        else if (condId === 'hip-replacement' || condId === 'thr') condId = 'hip-replacement-rehab';
        else if (condId === 'stroke' || condId === 'neuro-stroke') condId = 'stroke-rehab';
        else if (condId === 'parkinsons') condId = 'parkinsons-rehab';
        else if (condId === 'balance' || condId === 'gait' || condId === 'balance-gait') condId = 'balance-gait-rehab';
        else if (condId === 'neuro-physio' || condId === 'neuro-physiotherapy' || condId === 'neurological-physiotherapy') condId = 'neuro-physiotherapy-rehab';
        else if (condId === 'runners-knee' || condId === 'runner-knee' || condId === 'patellofemoral') condId = 'runners-knee-rehab';
        else if (condId === 'ankle-sprain' || condId === 'ankle') condId = 'ankle-sprain-rehab';
        else if (condId === 'return-to-sport' || condId === 'rts') condId = 'return-to-sport-rehab';
        else if (condId === 'post-surgical' || condId === 'post-op' || condId === 'post-surgical-rehabilitation') condId = 'post-surgical-rehab';
        else if (condId === 'senior' || condId === 'geriatric') condId = 'senior-rehab';
        else if (condId === 'posture' || condId === 'ergonomics') condId = 'posture-ergonomics';

        const foundRehab = getRehabGuideById(condId) || getRehabGuideById(rawCondTarget);
        if (foundRehab) {
          setSelectedConditionId(foundRehab.id);
          setSelectedLocationId(null);
          setSelectedArticleId(null);
          return;
        }

        const found = CONDITION_GUIDES.find(
          (c) => c.id.toLowerCase() === condId || c.slug.toLowerCase() === condId || c.id.toLowerCase() === rawCondTarget
        );
        if (found) {
          setSelectedConditionId(found.id);
          setSelectedLocationId(null);
          setSelectedArticleId(null);
          return;
        }
      }

      // 3. Check for article detail routes
      const artPath = pathname.startsWith('/articles/') 
        ? pathname.replace('/articles/', '').toLowerCase() 
        : pathname.startsWith('/article/') 
        ? pathname.replace('/article/', '').toLowerCase() 
        : null;

      const artHash = hash.startsWith('#articles/') 
        ? hash.replace('#articles/', '').toLowerCase() 
        : hash.startsWith('#article/') 
        ? hash.replace('#article/', '').toLowerCase() 
        : null;

      const rawArtTarget = artHash || artPath;
      if (rawArtTarget) {
        const found = CLINICAL_ARTICLES.find(
          (a) => a.id.toLowerCase() === rawArtTarget || a.slug.toLowerCase() === rawArtTarget
        );
        if (found) {
          setSelectedArticleId(found.id);
          setSelectedLocationId(null);
          setSelectedConditionId(null);
          return;
        }
      }

      // 4. Check for topical pillar pages & standalone routes
      if (hash === '#physiotherapy-mumbai' || hash === '#mumbai' || pathname === '/physiotherapy-mumbai') {
        setCurrentPage('physiotherapy-mumbai');
        setSelectedLocationId(null);
        setSelectedConditionId(null);
        setSelectedArticleId(null);
      } else if (hash === '#orthopedic-physiotherapy' || hash === '#orthopedic' || pathname === '/orthopedic-physiotherapy') {
        setCurrentPage('orthopedic-physiotherapy');
        setSelectedLocationId(null);
        setSelectedConditionId(null);
        setSelectedArticleId(null);
      } else if (hash === '#sports-physiotherapy' || hash === '#sports' || pathname === '/sports-physiotherapy') {
        setCurrentPage('sports-physiotherapy');
        setSelectedLocationId(null);
        setSelectedConditionId(null);
        setSelectedArticleId(null);
      } else if (hash === '#neuro-physiotherapy' || hash === '#neuro' || pathname === '/neuro-physiotherapy') {
        setCurrentPage('neuro-physiotherapy');
        setSelectedLocationId(null);
        setSelectedConditionId(null);
        setSelectedArticleId(null);
      } else if (hash === '#home-physiotherapy' || pathname === '/home-physiotherapy') {
        setCurrentPage('home-physiotherapy');
        setSelectedLocationId(null);
        setSelectedConditionId(null);
        setSelectedArticleId(null);
      } else if (hash === '#online-physiotherapy' || hash === '#tele-physio' || pathname === '/online-physiotherapy') {
        setCurrentPage('online-physiotherapy');
        setSelectedLocationId(null);
        setSelectedConditionId(null);
        setSelectedArticleId(null);
      } else if (hash === '#pain-management' || pathname === '/pain-management') {
        setCurrentPage('pain-management');
        setSelectedLocationId(null);
        setSelectedConditionId(null);
        setSelectedArticleId(null);
      } else if (hash === '#post-surgical-rehab' || hash === '#post-surgical-rehabilitation' || hash === '#post-op' || pathname === '/post-surgical-rehab' || pathname === '/post-surgical-rehabilitation') {
        setCurrentPage('post-surgical-rehab');
        setSelectedLocationId(null);
        setSelectedConditionId(null);
        setSelectedArticleId(null);
      } else if (hash === '#rehabilitation' || pathname === '/rehabilitation') {
        setCurrentPage('rehabilitation');
        setSelectedLocationId(null);
        setSelectedConditionId(null);
        setSelectedArticleId(null);
      } else if (
        hash === '#dr-pawan-gupta' ||
        hash === '#dr-pawan' ||
        hash === '#doctor' ||
        pathname === '/dr-pawan-gupta'
      ) {
        setCurrentPage('dr-pawan-gupta');
        setSelectedLocationId(null);
        setSelectedConditionId(null);
        setSelectedArticleId(null);
      } else if (hash === '#about' || pathname === '/about') {
        setCurrentPage('about');
        setSelectedLocationId(null);
        setSelectedConditionId(null);
        setSelectedArticleId(null);
      } else if (hash === '#services' || pathname === '/services') {
        setCurrentPage('services');
        setSelectedLocationId(null);
        setSelectedConditionId(null);
        setSelectedArticleId(null);
      } else if (hash === '#conditions' || pathname === '/conditions') {
        setCurrentPage('conditions');
        setSelectedLocationId(null);
        setSelectedConditionId(null);
        setSelectedArticleId(null);
      } else if (hash === '#articles' || hash === '#patient-education' || pathname === '/articles' || pathname === '/patient-education') {
        setCurrentPage('articles');
        setSelectedLocationId(null);
        setSelectedConditionId(null);
        setSelectedArticleId(null);
      } else if (hash === '#home-visits' || hash === '#home-visit' || pathname === '/home-visits') {
        setCurrentPage('home-visits');
        setSelectedLocationId(null);
        setSelectedConditionId(null);
        setSelectedArticleId(null);
      } else if (hash === '#areas-we-serve' || hash === '#locations' || pathname === '/areas-we-serve' || pathname === '/locations') {
        setCurrentPage('areas-we-serve');
        setSelectedLocationId(null);
        setSelectedConditionId(null);
        setSelectedArticleId(null);
      } else if (hash === '#body-map' || hash === '#symptoms' || pathname === '/body-map') {
        setCurrentPage('body-map');
        setSelectedLocationId(null);
        setSelectedConditionId(null);
        setSelectedArticleId(null);
      } else if (hash === '#testimonials' || hash === '#reviews' || pathname === '/testimonials') {
        setCurrentPage('testimonials');
        setSelectedLocationId(null);
        setSelectedConditionId(null);
        setSelectedArticleId(null);
      } else if (hash === '#faq' || pathname === '/faq') {
        setCurrentPage('faq');
        setSelectedLocationId(null);
        setSelectedConditionId(null);
        setSelectedArticleId(null);
      } else if (hash === '#contact' || pathname === '/contact') {
        setCurrentPage('contact');
        setSelectedLocationId(null);
        setSelectedConditionId(null);
        setSelectedArticleId(null);
      } else if (pathname === '/' && (hash === '' || hash === '#' || hash === '#home')) {
        setCurrentPage('home');
        setSelectedLocationId(null);
        setSelectedConditionId(null);
        setSelectedArticleId(null);
      } else {
        // Unknown URL -> 404
        setCurrentPage('404');
        setSelectedLocationId(null);
        setSelectedConditionId(null);
        setSelectedArticleId(null);
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
      const cleanPath = page === 'home' ? '/' : `/${page}`;
      window.history.pushState(null, '', cleanPath);
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
    try {
      window.history.pushState(null, '', `/conditions/${conditionId}`);
    } catch {}
    window.location.hash = `#condition/${conditionId}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectArticle = (articleId: string) => {
    setSelectedArticleId(articleId);
    setSelectedLocationId(null);
    setSelectedConditionId(null);
    try {
      window.history.pushState(null, '', `/articles/${articleId}`);
    } catch {}
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

  const currentRehabGuide = selectedConditionId
    ? getRehabGuideById(selectedConditionId)
    : null;

  const currentCondition = selectedConditionId && !currentRehabGuide
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
        onOpenGmbSync={() => setIsGmbSyncOpen(true)}
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
        ) : currentRehabGuide ? (
          <RehabilitationDetailPage
            guide={currentRehabGuide}
            onBackToHub={() => {
              setSelectedConditionId(null);
              setCurrentPage('rehabilitation');
              window.location.hash = '#rehabilitation';
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onSelectRehabGuide={(id) => handleSelectCondition(id)}
            onSelectService={(serviceKey) => handleNavigatePage(serviceKey as any)}
            onSelectCondition={(conditionId) => handleSelectCondition(conditionId)}
            onOpenBooking={handleOpenBooking}
            onOpenAiAssistant={handleOpenAiAssistant}
            onNavigatePage={handleNavigatePage}
          />
        ) : currentCondition ? (
          <ConditionDetailPage
            condition={currentCondition}
            onBackToHome={handleGoHome}
            onSelectCondition={handleSelectCondition}
            onOpenBooking={handleOpenBooking}
            onOpenAiAssistant={handleOpenAiAssistant}
            onNavigatePage={handleNavigatePage}
          />
        ) : currentArticle ? (
          <ArticleDetailPage
            article={currentArticle}
            onBackToHome={handleGoHome}
            onSelectArticle={handleSelectArticle}
            onSelectCondition={handleSelectCondition}
            onOpenBooking={handleOpenBooking}
            onNavigatePage={handleNavigatePage}
          />
        ) : currentPage === 'dr-pawan-gupta' ? (
          <DoctorProfilePage
            onBackToHome={handleGoHome}
            onOpenBooking={handleOpenBooking}
            onOpenAiAssistant={handleOpenAiAssistant}
            onNavigatePage={handleNavigatePage}
            onSelectArticle={handleSelectArticle}
          />
        ) : currentPage === 'about' ? (
          <AboutPage
            onBackToHome={handleGoHome}
            onOpenBooking={handleOpenBooking}
            onOpenAiAssistant={handleOpenAiAssistant}
            onNavigatePage={handleNavigatePage}
          />
        ) : currentPage === 'physiotherapy-mumbai' ? (
          <PhysiotherapyMumbaiPage
            onBackToHome={handleGoHome}
            onNavigatePage={handleNavigatePage}
            onSelectLocation={handleSelectLocation}
            onSelectCondition={handleSelectCondition}
            onOpenBooking={handleOpenBooking}
            onOpenAiAssistant={handleOpenAiAssistant}
          />
        ) : currentPage === 'orthopedic-physiotherapy' ? (
          <OrthopedicPhysiotherapyPage
            onBackToHome={handleGoHome}
            onNavigatePage={handleNavigatePage}
            onSelectCondition={handleSelectCondition}
            onOpenBooking={handleOpenBooking}
            onOpenAiAssistant={handleOpenAiAssistant}
          />
        ) : currentPage === 'sports-physiotherapy' ? (
          <SportsPhysiotherapyPage
            onBackToHome={handleGoHome}
            onNavigatePage={handleNavigatePage}
            onSelectCondition={handleSelectCondition}
            onOpenBooking={handleOpenBooking}
            onOpenAiAssistant={handleOpenAiAssistant}
          />
        ) : currentPage === 'neuro-physiotherapy' ? (
          <NeuroPhysiotherapyPage
            onBackToHome={handleGoHome}
            onNavigatePage={handleNavigatePage}
            onSelectCondition={handleSelectCondition}
            onOpenBooking={handleOpenBooking}
            onOpenAiAssistant={handleOpenAiAssistant}
          />
        ) : currentPage === 'home-physiotherapy' ? (
          <HomePhysiotherapyPage
            onBackToHome={handleGoHome}
            onNavigatePage={handleNavigatePage}
            onSelectLocation={handleSelectLocation}
            onSelectCondition={handleSelectCondition}
            onOpenBooking={handleOpenBooking}
            onOpenAiAssistant={handleOpenAiAssistant}
          />
        ) : currentPage === 'online-physiotherapy' ? (
          <OnlinePhysiotherapyPage
            onBackToHome={handleGoHome}
            onNavigatePage={handleNavigatePage}
            onSelectCondition={handleSelectCondition}
            onOpenBooking={handleOpenBooking}
            onOpenAiAssistant={handleOpenAiAssistant}
          />
        ) : currentPage === 'pain-management' ? (
          <PainManagementPage
            onBackToHome={handleGoHome}
            onNavigatePage={handleNavigatePage}
            onSelectCondition={handleSelectCondition}
            onOpenBooking={handleOpenBooking}
            onOpenAiAssistant={handleOpenAiAssistant}
          />
        ) : currentPage === 'post-surgical-rehab' ? (
          <PostSurgicalRehabPage
            onBackToHome={handleGoHome}
            onNavigatePage={handleNavigatePage}
            onSelectCondition={handleSelectCondition}
            onOpenBooking={handleOpenBooking}
            onOpenAiAssistant={handleOpenAiAssistant}
          />
        ) : currentPage === 'services' ? (
          <ServicesPage
            onBackToHome={handleGoHome}
            onOpenBooking={handleOpenBooking}
            onOpenAiAssistant={handleOpenAiAssistant}
            onNavigatePage={handleNavigatePage}
            onSelectCondition={handleSelectCondition}
          />
        ) : currentPage === 'conditions' ? (
          <ConditionsPage
            onBackToHome={handleGoHome}
            onSelectCondition={handleSelectCondition}
            onOpenBooking={handleOpenBooking}
            onOpenAiAssistant={handleOpenAiAssistant}
          />
        ) : currentPage === 'rehabilitation' ? (
          <RehabilitationPage
            onBackToHome={handleGoHome}
            onSelectCondition={handleSelectCondition}
            onOpenBooking={handleOpenBooking}
            onOpenAiAssistant={handleOpenAiAssistant}
            onNavigatePage={handleNavigatePage}
          />
        ) : currentPage === 'articles' ? (
          <ArticlesPage
            onBackToHome={handleGoHome}
            onSelectArticle={handleSelectArticle}
            onSelectCondition={handleSelectCondition}
            onOpenBooking={handleOpenBooking}
            onNavigatePage={handleNavigatePage}
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
            onNavigatePage={handleNavigatePage}
            onSelectCondition={handleSelectCondition}
            onOpenGmbSync={() => setIsGmbSyncOpen(true)}
          />
        ) : currentPage === 'areas-we-serve' ? (
          <AreasWeServePage
            onBackToHome={handleGoHome}
            onSelectLocation={handleSelectLocation}
            onOpenBooking={handleOpenBooking}
            onOpenAiAssistant={handleOpenAiAssistant}
            onNavigatePage={handleNavigatePage}
          />
        ) : currentPage === '404' ? (
          <NotFoundPage
            onGoHome={handleGoHome}
            onOpenBooking={() => handleOpenBooking()}
            onNavigatePage={handleNavigatePage}
          />
        ) : (
          <HomePage
            onOpenBooking={handleOpenBooking}
            onOpenAiAssistant={handleOpenAiAssistant}
            onSelectCondition={handleSelectCondition}
            onSelectArticle={handleSelectArticle}
            onSelectLocation={handleSelectLocation}
            onNavigatePage={handleNavigatePage}
          />
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

      {/* Google Business Profile & Map Sync Modal */}
      <GoogleBusinessSyncModal
        isOpen={isGmbSyncOpen}
        onClose={() => setIsGmbSyncOpen(false)}
      />
    </div>
  );
}


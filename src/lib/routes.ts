/**
 * Centralized Routing and Canonical URL Configuration
 * Domain: https://runtowinphysiotherapy.com
 * Ensures 100% clean, clickable, SEO-crawlable URLs with zero hash (#) fragments.
 */

export const SITE_ORIGIN = 'https://runtowinphysiotherapy.com';

export type PageRouteKey =
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
  | 'contact';

/**
 * Returns the clean pathname for a top-level page (e.g. '/services', '/dr-pawan-gupta')
 */
export const getPagePath = (pageKey: string): string => {
  const normalized = (pageKey || '').trim().toLowerCase().replace(/^#+/, '').replace(/^\/+/, '');
  if (!normalized || normalized === 'home') return '/';
  if (normalized === 'about' || normalized === 'dr-pawan' || normalized === 'doctor') return '/dr-pawan-gupta';
  if (normalized === 'mumbai') return '/physiotherapy-mumbai';
  if (normalized === 'locations' || normalized === 'home-visit') return '/home-visits';
  if (normalized === 'reviews') return '/testimonials';
  if (normalized === 'symptoms') return '/body-map';
  if (normalized === 'patient-education') return '/articles';
  if (normalized === 'post-surgical-rehabilitation' || normalized === 'post-op') return '/post-surgical-rehab';
  return `/${normalized}`;
};

/**
 * Returns the clean absolute canonical URL for a top-level page
 */
export const getPageCanonicalUrl = (pageKey: string): string => {
  const path = getPagePath(pageKey);
  return `${SITE_ORIGIN}${path === '/' ? '/' : path}`;
};

/**
 * Returns the clean pathname for a location/suburb page
 * e.g. '/physiotherapist-near-me-andheri'
 */
export const getLocationPath = (locationId: string): string => {
  const cleanId = (locationId || '').trim().toLowerCase().replace(/^#+/, '').replace(/^physiotherapist-near-me-/, '');
  return `/physiotherapist-near-me-${cleanId}`;
};

/**
 * Returns the clean absolute canonical URL for a location page
 */
export const getLocationCanonicalUrl = (locationId: string): string => {
  return `${SITE_ORIGIN}${getLocationPath(locationId)}`;
};

/**
 * Returns the clean pathname for a condition guide
 * e.g. '/conditions/lower-back'
 */
export const getConditionPath = (conditionId: string): string => {
  const cleanId = (conditionId || '').trim().toLowerCase().replace(/^#+/, '').replace(/^conditions?\//, '');
  return `/conditions/${cleanId}`;
};

/**
 * Returns the clean absolute canonical URL for a condition page
 */
export const getConditionCanonicalUrl = (conditionId: string): string => {
  return `${SITE_ORIGIN}${getConditionPath(conditionId)}`;
};

/**
 * Returns the clean pathname for a rehabilitation protocol
 * e.g. '/rehabilitation/knee-replacement-rehab'
 */
export const getRehabPath = (rehabId: string): string => {
  const cleanId = (rehabId || '').trim().toLowerCase().replace(/^#+/, '').replace(/^rehabilitation\//, '');
  return `/rehabilitation/${cleanId}`;
};

/**
 * Returns the clean absolute canonical URL for a rehabilitation page
 */
export const getRehabCanonicalUrl = (rehabId: string): string => {
  return `${SITE_ORIGIN}${getRehabPath(rehabId)}`;
};

/**
 * Returns the clean pathname for an educational article
 * e.g. '/articles/sciatica-relief-exercises-mumbai'
 */
export const getArticlePath = (articleId: string): string => {
  const cleanId = (articleId || '').trim().toLowerCase().replace(/^#+/, '').replace(/^articles?\//, '');
  return `/articles/${cleanId}`;
};

/**
 * Returns the clean absolute canonical URL for an article page
 */
export const getArticleCanonicalUrl = (articleId: string): string => {
  return `${SITE_ORIGIN}${getArticlePath(articleId)}`;
};

/**
 * Normalizes any URL string, ensuring zero hash fragments and returning clean path
 */
export const normalizeToCleanPath = (inputUrlOrPath: string): string => {
  if (!inputUrlOrPath) return '/';
  let path = inputUrlOrPath.trim();
  // Strip origin if present
  if (path.startsWith(SITE_ORIGIN)) {
    path = path.replace(SITE_ORIGIN, '');
  }
  // Strip hash prefix
  path = path.replace(/^#+/, '');
  // Strip /# prefix
  path = path.replace(/^\/#+/, '/');
  // Strip trailing hash fragments like /path#fragment -> /path
  if (path.includes('#')) {
    path = path.split('#')[0];
  }
  if (!path || path === '') return '/';
  if (!path.startsWith('/')) path = `/${path}`;
  // Remove trailing slash unless root
  if (path.length > 1 && path.endsWith('/')) {
    path = path.slice(0, -1);
  }
  return path;
};

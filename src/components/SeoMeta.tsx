import React, { useEffect } from 'react';

interface SeoMetaProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogType?: string;
  ogImage?: string;
  ogImageAlt?: string;
  twitterCard?: 'summary' | 'summary_large_image';
  robots?: string;
  geoPlacename?: string;
  schema?: object | object[];
}

export const SeoMeta: React.FC<SeoMetaProps> = ({
  title,
  description,
  keywords,
  canonicalUrl = 'https://runtowinphysiotherapy.com/',
  ogType = 'website',
  ogImage = 'https://runtowinphysiotherapy.com/og-image.jpg',
  ogImageAlt,
  twitterCard = 'summary_large_image',
  robots = 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  geoPlacename = 'Mumbai, Maharashtra, India',
  schema,
}) => {
  // Normalize canonical URL to remove hash fragment if accidentally provided
  const normalizedCanonical = canonicalUrl.replace(
    'https://runtowinphysiotherapy.com/#',
    'https://runtowinphysiotherapy.com/'
  );

  useEffect(() => {
    // 1. Update Document Title
    document.title = title;

    // Helper to safely set or create meta tag by attribute name
    const setMetaTag = (attrName: 'name' | 'property', attrVal: string, content: string) => {
      let element = document.querySelector(`meta[${attrName}="${attrVal}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attrName, attrVal);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 2. Meta Description & Robots
    setMetaTag('name', 'description', description);
    setMetaTag('name', 'robots', robots);

    // 3. Meta Keywords (optional)
    if (keywords) {
      setMetaTag('name', 'keywords', keywords);
    }

    // 4. Geo Meta Tags for Mumbai Local SEO
    setMetaTag('name', 'geo.region', 'IN-MH');
    setMetaTag('name', 'geo.placename', geoPlacename);
    setMetaTag('name', 'geo.position', '19.0016;72.8550');
    setMetaTag('name', 'ICBM', '19.0016, 72.8550');

    // 5. Canonical Link Tag
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', normalizedCanonical);

    // 6. OpenGraph Social Sharing Tags
    setMetaTag('property', 'og:title', title);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:url', normalizedCanonical);
    setMetaTag('property', 'og:type', ogType);
    setMetaTag('property', 'og:site_name', 'Run To Win Healthcare Services Mumbai');
    setMetaTag('property', 'og:locale', 'en_IN');
    setMetaTag('property', 'og:image', ogImage);
    setMetaTag('property', 'og:image:alt', ogImageAlt || title);
    setMetaTag('property', 'og:image:width', '1200');
    setMetaTag('property', 'og:image:height', '630');

    // 7. Twitter / X Cards
    setMetaTag('name', 'twitter:card', twitterCard);
    setMetaTag('name', 'twitter:title', title);
    setMetaTag('name', 'twitter:description', description);
    setMetaTag('name', 'twitter:image', ogImage);
    setMetaTag('name', 'twitter:image:alt', ogImageAlt || title);

    // 8. Inject Dynamic Page-Specific JSON-LD Schema
    // Remove existing dynamic script tags to prevent duplicate schema accumulation
    const existingDynamicScripts = document.querySelectorAll('script[data-dynamic-seo="true"]');
    existingDynamicScripts.forEach((script) => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    });

    let dynamicScript: HTMLScriptElement | null = null;
    if (schema) {
      dynamicScript = document.createElement('script');
      dynamicScript.setAttribute('type', 'application/ld+json');
      dynamicScript.setAttribute('data-dynamic-seo', 'true');
      dynamicScript.textContent = JSON.stringify(schema, null, 2);
      document.head.appendChild(dynamicScript);
    }

    return () => {
      // Cleanup dynamically injected schema on unmount/page switch
      if (dynamicScript && dynamicScript.parentNode) {
        dynamicScript.parentNode.removeChild(dynamicScript);
      }
    };
  }, [
    title,
    description,
    keywords,
    normalizedCanonical,
    ogType,
    ogImage,
    ogImageAlt,
    twitterCard,
    robots,
    geoPlacename,
    schema,
  ]);

  return null;
};

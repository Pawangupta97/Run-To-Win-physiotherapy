import React, { useEffect } from 'react';

interface SeoMetaProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogType?: string;
  geoPlacename?: string;
  schema?: object | object[];
}

export const SeoMeta: React.FC<SeoMetaProps> = ({
  title,
  description,
  keywords,
  canonicalUrl = 'https://runtowinphysiotherapy.com/',
  ogType = 'website',
  geoPlacename = 'Mumbai, Maharashtra, India',
  schema,
}) => {
  useEffect(() => {
    // 1. Update Title
    document.title = title;

    // 2. Update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    // 3. Update Meta Keywords
    if (keywords) {
      let metaKw = document.querySelector('meta[name="keywords"]');
      if (!metaKw) {
        metaKw = document.createElement('meta');
        metaKw.setAttribute('name', 'keywords');
        document.head.appendChild(metaKw);
      }
      metaKw.setAttribute('content', keywords);
    }

    // 4. Update Geo Meta Tags for Local SEO
    let geoRegionTag = document.querySelector('meta[name="geo.region"]');
    if (!geoRegionTag) {
      geoRegionTag = document.createElement('meta');
      geoRegionTag.setAttribute('name', 'geo.region');
      document.head.appendChild(geoRegionTag);
    }
    geoRegionTag.setAttribute('content', 'IN-MH');

    let geoPlaceTag = document.querySelector('meta[name="geo.placename"]');
    if (!geoPlaceTag) {
      geoPlaceTag = document.createElement('meta');
      geoPlaceTag.setAttribute('name', 'geo.placename');
      document.head.appendChild(geoPlaceTag);
    }
    geoPlaceTag.setAttribute('content', geoPlacename);

    // 5. Update Canonical Tag
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);

    // 6. Update OpenGraph Tags
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute('content', title);

    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (!ogDesc) {
      ogDesc = document.createElement('meta');
      ogDesc.setAttribute('property', 'og:description');
      document.head.appendChild(ogDesc);
    }
    ogDesc.setAttribute('content', description);

    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (!ogUrl) {
      ogUrl = document.createElement('meta');
      ogUrl.setAttribute('property', 'og:url');
      document.head.appendChild(ogUrl);
    }
    ogUrl.setAttribute('content', canonicalUrl);

    let ogTypeTag = document.querySelector('meta[property="og:type"]');
    if (!ogTypeTag) {
      ogTypeTag = document.createElement('meta');
      ogTypeTag.setAttribute('property', 'og:type');
      document.head.appendChild(ogTypeTag);
    }
    ogTypeTag.setAttribute('content', ogType);

    // 7. Update Twitter Tags
    let twCard = document.querySelector('meta[name="twitter:card"]');
    if (!twCard) {
      twCard = document.createElement('meta');
      twCard.setAttribute('name', 'twitter:card');
      document.head.appendChild(twCard);
    }
    twCard.setAttribute('content', 'summary_large_image');

    let twTitle = document.querySelector('meta[name="twitter:title"]');
    if (!twTitle) {
      twTitle = document.createElement('meta');
      twTitle.setAttribute('name', 'twitter:title');
      document.head.appendChild(twTitle);
    }
    twTitle.setAttribute('content', title);

    let twDesc = document.querySelector('meta[name="twitter:description"]');
    if (!twDesc) {
      twDesc = document.createElement('meta');
      twDesc.setAttribute('name', 'twitter:description');
      document.head.appendChild(twDesc);
    }
    twDesc.setAttribute('content', description);

    // 8. Inject Dynamic Page-Specific JSON-LD Schema
    let dynamicScript: HTMLScriptElement | null = null;
    if (schema) {
      dynamicScript = document.createElement('script');
      dynamicScript.setAttribute('type', 'application/ld+json');
      dynamicScript.setAttribute('data-dynamic-seo', 'true');
      dynamicScript.textContent = JSON.stringify(schema);
      document.head.appendChild(dynamicScript);
    }

    return () => {
      // Cleanup dynamically injected schema on unmount/page switch
      if (dynamicScript && dynamicScript.parentNode) {
        dynamicScript.parentNode.removeChild(dynamicScript);
      }
    };
  }, [title, description, keywords, canonicalUrl, ogType, geoPlacename, schema]);

  return null;
};

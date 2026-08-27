import React, { useEffect } from 'react';

interface SeoMetaProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  ogType?: string;
  schema?: object | object[];
}

export const SeoMeta: React.FC<SeoMetaProps> = ({
  title,
  description,
  canonicalUrl = 'https://runtowinphysiotherapy.com/',
  ogType = 'website',
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

    // 3. Update Canonical Tag
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);

    // 4. Update OpenGraph Tags
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', title);

    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', description);

    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', canonicalUrl);

    let ogTypeTag = document.querySelector('meta[property="og:type"]');
    if (ogTypeTag) ogTypeTag.setAttribute('content', ogType);

    // 5. Inject Dynamic Page-Specific JSON-LD Schema
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
  }, [title, description, canonicalUrl, ogType, schema]);

  return null;
};

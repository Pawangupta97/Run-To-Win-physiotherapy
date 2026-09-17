export type AuthorityPillarId = 
  | 'physiotherapy-mumbai'
  | 'orthopedic-physiotherapy'
  | 'sports-physiotherapy'
  | 'neuro-physiotherapy'
  | 'home-physiotherapy'
  | 'pain-management'
  | 'post-surgical-rehab';

export interface AuthorityPillar {
  id: AuthorityPillarId;
  name: string;
  tagline: string;
  description: string;
  iconName: string;
  clinicalObjective: string;
  targetAudience: string;
  commercialServicePage: {
    title: string;
    url: string;
    routeKey: string;
  };
  rehabilitationPage: {
    title: string;
    url: string;
    routeKey: string;
  };
  primaryCondition: {
    id: string;
    name: string;
    category: string;
  };
  supportingArticleId: string;
}

export interface ClusterMapNode {
  pillarId: AuthorityPillarId;
  pillarName: string;
  pillarDescription: string;
  supportingArticle: {
    id: string;
    title: string;
    slug: string;
    roleInCluster: string;
    searchIntent: string;
    antiCannibalizationStrategy: string;
  };
  relatedCondition: {
    id: string;
    name: string;
    pathologySummary: string;
  };
  servicePage: {
    title: string;
    url: string;
    routeKey: string;
    commercialIntent: string;
  };
  rehabilitationPage: {
    title: string;
    url: string;
    routeKey: string;
    protocolFocus: string;
  };
}

export const TOPICAL_AUTHORITY_PILLARS: AuthorityPillar[] = [
  {
    id: 'physiotherapy-mumbai',
    name: 'Physiotherapy Mumbai',
    tagline: 'Evidence-Based Urban Physiotherapy Standards & Care Delivery',
    description: 'The foundational pillar establishing clinical standards, clinic vs doorstep home visit triage, and personalized physical rehabilitation across Mumbai.',
    iconName: 'MapPin',
    clinicalObjective: 'Educate urban patients on evidence-based assessment, qualification standards of physiotherapists (IAP membership, M.P.Th), and choosing the correct care delivery format.',
    targetAudience: 'Mumbai residents, working professionals, families evaluating clinic visit vs home care.',
    commercialServicePage: {
      title: 'Physiotherapy in Mumbai (Sewri Clinic & Home Visits)',
      url: '/physiotherapy-mumbai',
      routeKey: 'physiotherapy-mumbai',
    },
    rehabilitationPage: {
      title: 'Postural & Functional Rehabilitation Protocol',
      url: '/rehabilitation#posture-ergonomics',
      routeKey: 'rehabilitation',
    },
    primaryCondition: {
      id: 'back-pain',
      name: 'Lower Back Pain & Lumbar Strain',
      category: 'Spine & Back',
    },
    supportingArticleId: 'how-to-choose-in-clinic-vs-home-physiotherapy-mumbai',
  },
  {
    id: 'orthopedic-physiotherapy',
    name: 'Orthopedic Physiotherapy',
    tagline: 'Musculoskeletal Biomechanics, Spine & Joint Mobilization',
    description: 'Comprehensive physical rehabilitation for bone, joint, ligament, and spinal disc disorders, restoring pain-free movement without premature surgery.',
    iconName: 'Activity',
    clinicalObjective: 'Provide deep clarity on spinal radiculopathy, disc bulges, joint degenerations, and how manual therapy plus targeted motor control replaces long-term medication.',
    targetAudience: 'Individuals suffering from chronic neck/back pain, sciatica, osteoarthritis, or shoulder impingement.',
    commercialServicePage: {
      title: 'Orthopedic Physiotherapy Services',
      url: '/orthopedic-physiotherapy',
      routeKey: 'orthopedic-physiotherapy',
    },
    rehabilitationPage: {
      title: 'Spinal Decompression & Core Stabilization Protocol',
      url: '/rehabilitation#spine',
      routeKey: 'rehabilitation',
    },
    primaryCondition: {
      id: 'cervical-spondylosis',
      name: 'Cervical Spondylosis & Radiating Arm Pain',
      category: 'Spine & Neck',
    },
    supportingArticleId: 'cervical-spondylosis-disc-bulge-radiating-arm-pain-physiotherapy',
  },
  {
    id: 'sports-physiotherapy',
    name: 'Sports Physiotherapy',
    tagline: 'Athletic Injury Triage, Load Management & Return-to-Play',
    description: 'High-performance sports medicine, biomechanical movement analysis, and structured return-to-sport protocols for runners, cricketers, and recreational athletes.',
    iconName: 'Zap',
    clinicalObjective: 'Educate athletes on acute injury management, tissue capacity vs training load, kinetic chain deficits, and milestone-based clearance for safe return to competition.',
    targetAudience: 'Marathoners, gym enthusiasts, badminton/football players, and active individuals.',
    commercialServicePage: {
      title: 'Sports Physiotherapy & Athletic Rehab',
      url: '/sports-physiotherapy',
      routeKey: 'sports-physiotherapy',
    },
    rehabilitationPage: {
      title: 'Runner’s Knee & Lower Limb Kinetic Chain Protocol',
      url: '/rehabilitation#runners-knee',
      routeKey: 'rehabilitation',
    },
    primaryCondition: {
      id: 'runners-knee-rehab',
      name: 'Patellofemoral Pain Syndrome (Runner’s Knee)',
      category: 'Sports Rehabilitation',
    },
    supportingArticleId: 'runners-knee-patellofemoral-pain-biomechanics-rehabilitation',
  },
  {
    id: 'neuro-physiotherapy',
    name: 'Neuro Physiotherapy',
    tagline: 'Neuroplasticity, Hemiplegia & Neurological Motor Recovery',
    description: 'Specialized neuro-rehabilitation activating neuroplastic recovery for stroke, hemiplegia, Parkinson’s disease, and balance-gait disorders.',
    iconName: 'Brain',
    clinicalObjective: 'Demonstrate how repetitive, task-oriented physical training stimulates dormant cortical pathways to regain balance, transfers, and safe unassisted walking.',
    targetAudience: 'Stroke survivors, neurological patients, and families seeking home neuro-rehab.',
    commercialServicePage: {
      title: 'Neuro Physiotherapy & Stroke Rehabilitation',
      url: '/neuro-physiotherapy',
      routeKey: 'neuro-physiotherapy',
    },
    rehabilitationPage: {
      title: 'Post-Stroke Functional Walking & Transfer Protocol',
      url: '/rehabilitation#stroke',
      routeKey: 'rehabilitation',
    },
    primaryCondition: {
      id: 'stroke-rehab',
      name: 'Post-Stroke Hemiplegia & Motor Deficits',
      category: 'Neurological Rehabilitation',
    },
    supportingArticleId: 'stroke-hemiplegia-neuroplasticity-home-physiotherapy-guide',
  },
  {
    id: 'home-physiotherapy',
    name: 'Home Physiotherapy',
    tagline: 'Doorstep Clinical Care, Bedside Mobility & Senior Independence',
    description: 'Full-service doorstep physiotherapy bringing clinical electrotherapy, manual therapy, and gait training to bedridden, senior, and post-surgical patients across Mumbai.',
    iconName: 'Home',
    clinicalObjective: 'Provide actionable fall prevention frameworks, home environmental risk audits, and clinical protocols for vulnerable patients unable to commute.',
    targetAudience: 'Elderly citizens, caregivers, family members arranging care for aging parents.',
    commercialServicePage: {
      title: 'Home Physiotherapy Visits (Mumbai & Suburbs)',
      url: '/home-physiotherapy',
      routeKey: 'home-physiotherapy',
    },
    rehabilitationPage: {
      title: 'Geriatric Fall Prevention & Balance Protocol',
      url: '/rehabilitation#senior-citizen',
      routeKey: 'rehabilitation',
    },
    primaryCondition: {
      id: 'senior-rehab',
      name: 'Senior Mobility Decline & Fall Risk',
      category: 'Geriatric Rehabilitation',
    },
    supportingArticleId: 'elderly-fall-prevention-home-physiotherapy-caregiver-guide',
  },
  {
    id: 'pain-management',
    name: 'Pain Management',
    tagline: 'Evidence-Based Pain Science, Dry Needling & Neural Desensitization',
    description: 'Non-pharmacological pain science integrating trigger point dry needling, nerve flossing, matrix therapy, and movement desensitization for persistent musculoskeletal pain.',
    iconName: 'HeartPulse',
    clinicalObjective: 'Shift patient understanding from passive pain masking with painkillers to active central nervous system desensitization and neuromuscular re-education.',
    targetAudience: 'Patients suffering from chronic sciatica, myofascial trigger points, fibromyalgic tightness, or recurring spinal spasm.',
    commercialServicePage: {
      title: 'Pain Management & Dry Needling Therapy',
      url: '/pain-management',
      routeKey: 'pain-management',
    },
    rehabilitationPage: {
      title: 'Neural Mobilization & Sciatic Decompression Protocol',
      url: '/rehabilitation#sciatica',
      routeKey: 'rehabilitation',
    },
    primaryCondition: {
      id: 'sciatica',
      name: 'Sciatica & Piriformis Myofascial Pain',
      category: 'Spine & Nerve',
    },
    supportingArticleId: 'chronic-sciatica-myofascial-pain-dry-needling-neural-mobilization',
  },
  {
    id: 'post-surgical-rehab',
    name: 'Post-Surgical Rehabilitation',
    tagline: 'Phased Protocols from Hospital Discharge to Peak Recovery',
    description: 'Structured, surgeon-aligned physical therapy guiding tissue remodeling after total knee replacement (TKR), total hip replacement (THR), and spinal surgery.',
    iconName: 'ShieldCheck',
    clinicalObjective: 'Set clear week-by-week range of motion, swelling control, and weight-bearing criteria to prevent arthrofibrosis, limp gait, and chronic post-surgical stiffness.',
    targetAudience: 'Patients scheduled for or recovering from joint replacement, ligament repair, or spine decompression.',
    commercialServicePage: {
      title: 'Post-Surgical Rehabilitation Services',
      url: '/post-surgical-rehab',
      routeKey: 'post-surgical-rehab',
    },
    rehabilitationPage: {
      title: 'Total Knee Replacement (TKR) Week 1 to 12 Protocol',
      url: '/rehabilitation#knee-replacement',
      routeKey: 'rehabilitation',
    },
    primaryCondition: {
      id: 'knee-replacement-rehab',
      name: 'Total Knee Arthroplasty (TKR) Recovery',
      category: 'Post-Surgical Protocols',
    },
    supportingArticleId: 'total-knee-replacement-rehabilitation-timeline-mumbai',
  },
];

/**
 * Content Cluster Map defining the explicit architectural path:
 * Pillar → Supporting Article → Related Condition → Service Page → Rehabilitation Page
 */
export const CONTENT_CLUSTER_MAP: ClusterMapNode[] = TOPICAL_AUTHORITY_PILLARS.map((pillar) => ({
  pillarId: pillar.id,
  pillarName: pillar.name,
  pillarDescription: pillar.description,
  supportingArticle: {
    id: pillar.supportingArticleId,
    title: 
      pillar.id === 'physiotherapy-mumbai'
        ? 'How to Choose Between In-Clinic vs Home Visit Physiotherapy in Mumbai: A Clinical Triage Guide'
        : pillar.id === 'orthopedic-physiotherapy'
        ? 'Cervical Spondylosis and Disc Bulges: Why Pain Radiates to the Arm & Physical Therapy Pathways'
        : pillar.id === 'sports-physiotherapy'
        ? 'Patellofemoral Pain Syndrome (Runner’s Knee): Biomechanical Causes & Return-to-Running Protocol'
        : pillar.id === 'neuro-physiotherapy'
        ? 'Stroke & Hemiplegia: Harnessing Neuroplasticity Through Task-Specific Home Physiotherapy'
        : pillar.id === 'home-physiotherapy'
        ? 'Fall Risk Assessment and Bedside Mobility for Elderly Patients at Home: Caregiver Guide'
        : pillar.id === 'pain-management'
        ? 'Chronic Sciatica & Myofascial Pain: Trigger Point Dry Needling & Neural Mobilization'
        : 'Rehabilitation Protocol After Total Knee Replacement (TKR): Weeks 1 to 12 Milestones',
    slug: pillar.supportingArticleId,
    roleInCluster: 
      pillar.id === 'physiotherapy-mumbai'
        ? 'Patient Triage & Care Delivery Decision Guide'
        : pillar.id === 'orthopedic-physiotherapy'
        ? 'Spinal Biomechanics & Radiculopathy Deep-Dive'
        : pillar.id === 'sports-physiotherapy'
        ? 'Kinetic Chain & Load Management Clinical Guide'
        : pillar.id === 'neuro-physiotherapy'
        ? 'Neuroplastic Motor Re-Education Guide'
        : pillar.id === 'home-physiotherapy'
        ? 'Geriatric Home Safety & Mobility Guide'
        : pillar.id === 'pain-management'
        ? 'Non-Pharmacological Pain Science & Needling Guide'
        : 'Post-Arthroplasty Phase-by-Phase Roadmap',
    searchIntent: 'Informational & Educational (Answers diagnostic, anatomical, and self-care questions)',
    antiCannibalizationStrategy: 'Focuses strictly on clinical education, symptom explanation, and red-flag screening. Funnels patients seeking professional treatment directly to the commercial Service Page and Rehabilitation Protocol.',
  },
  relatedCondition: {
    id: pillar.primaryCondition.id,
    name: pillar.primaryCondition.name,
    pathologySummary: `In-depth anatomical pathology, clinical diagnostic criteria, and self-assessment for ${pillar.primaryCondition.name}.`,
  },
  servicePage: {
    title: pillar.commercialServicePage.title,
    url: pillar.commercialServicePage.url,
    routeKey: pillar.commercialServicePage.routeKey,
    commercialIntent: 'Transactional & Booking (Consultation booking, doctor credentials, clinic facility details, fee structure, and direct WhatsApp contact)',
  },
  rehabilitationPage: {
    title: pillar.rehabilitationPage.title,
    url: pillar.rehabilitationPage.url,
    routeKey: pillar.rehabilitationPage.routeKey,
    protocolFocus: 'Phased recovery milestones, progressive therapeutic exercises, and objective functional graduation criteria.',
  },
}));

export const getClusterByPillarId = (pillarId: AuthorityPillarId): ClusterMapNode | undefined => {
  return CONTENT_CLUSTER_MAP.find((node) => node.pillarId === pillarId);
};

export const getPillarById = (pillarId: AuthorityPillarId): AuthorityPillar | undefined => {
  return TOPICAL_AUTHORITY_PILLARS.find((p) => p.id === pillarId);
};

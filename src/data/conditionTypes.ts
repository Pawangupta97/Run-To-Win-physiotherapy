export interface InternalLinkItem {
  label: string;
  target: string; // e.g. 'pain-management' | 'home-physiotherapy' | 'physiotherapy-mumbai' | 'condition/back-pain'
  type: 'service' | 'condition' | 'rehabilitation';
  contextDescription: string;
}

export interface SafeExerciseItem {
  name: string;
  instruction: string;
  frequency: string;
  purpose: string;
}

export interface DosAndDontItem {
  do: string;
  dont: string;
}

export interface ExerciseSelfManagement {
  overview: string;
  safeExercises: SafeExerciseItem[];
  dosAndDonts: DosAndDontItem[];
  ergonomicTips: string[];
}

export interface RelatedServiceItem {
  name: string;
  pageKey: string;
  reason: string;
}

export interface RelatedConditionItem {
  name: string;
  conditionId: string;
  reason: string;
}

export interface WhenToSeekAssessment {
  clinicalIndicators: string[];
  redFlags: string[];
}

export interface ConditionGuide {
  id: string;
  slug: string;
  name: string;
  category: 'Spine & Back' | 'Joints & Orthopedic' | 'Neurological' | 'Post-Surgical' | 'Posture & Ergonomics' | 'Sports Rehab';
  heroHeadline: string;
  seoTitle: string;
  metaDescription: string;
  quickSummary: string; // concise answer for AI Overviews / quick answer box
  primarySearchIntent: string; // single clear search intent
  reviewedBy: string;
  reviewerCredentials: string;
  lastUpdated: string;
  
  whatIsIt: string;
  symptoms: string[];
  commonCauses: string[]; // Common Contributing Factors
  
  whenToSeekAssessment: WhenToSeekAssessment;
  redFlags: string[]; // Backward compatibility with existing components
  
  howPhysiotherapyHelps: string[];
  clinicalAssessment: string[];
  physioTreatmentApproach: string[];
  rehabPhases: { phase: string; focus: string; duration: string }[];
  
  selfManagement: ExerciseSelfManagement;
  recoveryFactors: string[];
  expectedRecovery: string;
  homeVisitSuitability: string;
  faqs: { question: string; answer: string }[];
  
  // Specific contextual internal linking chain
  internalLinkChain: InternalLinkItem[];
  relatedServices: RelatedServiceItem[];
  relatedConditions: RelatedConditionItem[];
  
  relatedArticles?: string[];
  relatedLocations?: string[];
}

export interface RehabilitationComponent {
  title: string;
  description: string;
  clinicalPurpose: string;
}

export interface RehabilitationGoalGroup {
  timeframe: string;
  goals: string[];
}

export interface ProgressMonitoringItem {
  metric: string;
  testingMethod: string;
  advancementCriteria: string;
}

export interface RehabilitationAuthorityGuide {
  id: string;
  slug: string;
  name: string;
  pillar: 'NEURO' | 'SPORTS' | 'POST-SURGICAL';
  category: 'Neurological' | 'Sports Rehab' | 'Post-Surgical';
  h1: string;
  seoTitle: string;
  metaDescription: string;
  
  introduction: string;
  whoMayBenefit: string[];
  assessment: {
    overview: string;
    clinicalExamination: string[];
    specializedTests: string[];
    functionalBaselines: string[];
  };
  rehabilitationGoals: RehabilitationGoalGroup[];
  typicalComponents: RehabilitationComponent[];
  progressMonitoring: {
    overview: string;
    milestones: ProgressMonitoringItem[];
    criteriaRule: string;
  };
  safetyConsiderations: {
    precautions: string[];
    redFlags: string[];
    tissueHealingConstraints?: string[];
    ethicalNotice: string;
  };
  questionsPatientsAsk: { question: string; answer: string }[];
  relatedConditions: RelatedConditionItem[];
  relatedServices: RelatedServiceItem[];
  doctorClinicalInfo: {
    name: string;
    credentials: string;
    registration: string;
    experienceSummary: string;
    clinicLocation: string;
    homeVisitsCoverage: string;
    reviewedDate: string;
  };
  bookingCta: {
    title: string;
    description: string;
    clinicLabel: string;
    homeVisitLabel: string;
    whatsappText: string;
  };
  
  quickSummary: string;
}


export type ServiceCategory = 
  | 'all'
  | 'orthopedic'
  | 'sports'
  | 'neuro'
  | 'post_op'
  | 'home_visit'
  | 'modalities'
  | 'ergonomics'
  | 'geriatric';

export interface ServiceItem {
  id: string;
  title: string;
  category: ServiceCategory;
  shortDesc: string;
  fullDesc: string;
  duration: string;
  idealFor: string[];
  keyBenefits: string[];
  techniques: string[];
  iconName: string;
  badge?: string;
}

export interface BodyRegion {
  id: string;
  name: string;
  shortLabel: string;
  coordinates: { x: number; y: number }; // percentage on anatomical map
  commonConditions: string[];
  symptoms: string[];
  physioApproach: string[];
  expectedRecovery: string;
  recommendedModality: string;
}

export interface Testimonial {
  id: string;
  patientName: string;
  age: number;
  condition: string;
  occupation: string;
  location: string;
  story: string;
  recoveryTime: string;
  mobilityImprovement: number; // e.g. 95%
  rating: number;
  verified: boolean;
  tag: string;
  doctorQuote?: string;
}

export interface MumbaiArea {
  id: string;
  name: string;
  region: 'Western Suburbs' | 'South Mumbai' | 'Central Mumbai' | 'Harbour / East';
  homeVisitAvailable: boolean;
  responseTime: string;
  popularConditions: string[];
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Home Visits' | 'Treatments' | 'Booking & Insurance';
}

export interface BookingFormData {
  serviceType: 'In-Clinic Consultation' | 'Home Visit Physiotherapy (Mumbai)' | 'Online Video Consultation';
  bodyPart: string;
  mumbaiArea: string;
  preferredDate: string;
  preferredTime: string;
  patientName: string;
  phone: string;
  email: string;
  address?: string;
  symptoms: string;
  previousSurgeryOrXRay: boolean;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
  suggestedPills?: string[];
}

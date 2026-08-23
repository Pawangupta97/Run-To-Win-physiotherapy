export interface HomeVisitLocation {
  id: string;
  name: string;
  category: 'Western Line' | 'Central Line' | 'South Mumbai' | 'Thane' | 'Harbour Line' | 'Powai';
  pincodes?: string[];
  responseTime: string;
  landmarkAreas: string[];
  popularConditions: string[];
  heroTagline: string;
  neighborhoodHighlights: string;
  patientReview?: {
    name: string;
    condition: string;
    quote: string;
    rating: number;
  };
}

export interface LocationCategoryGroup {
  category: 'Western Line' | 'Central Line' | 'South Mumbai' | 'Thane' | 'Harbour Line' | 'Powai';
  locations: HomeVisitLocation[];
}

export const HOME_VISIT_LOCATIONS: HomeVisitLocation[] = [
  // --- WESTERN LINE ---
  {
    id: 'andheri',
    name: 'Andheri',
    category: 'Western Line',
    responseTime: '25 – 35 mins',
    landmarkAreas: ['Andheri West', 'Andheri East', 'Chakala', 'JB Nagar', 'Four Bungalows', 'Seven Bungalows', 'DN Nagar', 'Versova Link'],
    popularConditions: ['Sciatica & Disc Bulge', 'Post-Op Knee Replacement', 'Stroke Neuro Rehab', 'Tech Neck & Shoulder Pain'],
    heroTagline: 'Comprehensive Doorstep Physiotherapy Across Andheri West & East',
    neighborhoodHighlights: 'Fast home visit service across Lokhandwala, DN Nagar, Chakala, and Marol with portable modalities and neuro-rehabilitation equipment.',
    patientReview: {
      name: 'Ramesh K. (Andheri West)',
      condition: 'Post-Operative TKR Rehab',
      quote: 'Dr Pawan visited my home right from Day 3 after my knee replacement. His patient approach helped me walk stairs in 3 weeks without pain.',
      rating: 5
    }
  },
  {
    id: 'juhu',
    name: 'Juhu',
    category: 'Western Line',
    responseTime: '20 – 30 mins',
    landmarkAreas: ['JVPD Scheme', 'Juhu Tara Road', 'Gulmohar Road', 'Near ISKCON', 'Juhu Beach Enclave'],
    popularConditions: ['Sports Injury Rehab', 'Frozen Shoulder', 'Geriatric Balance & Fall Prevention', 'Dry Needling'],
    heroTagline: 'Premium At-Home Physiotherapy in Juhu & JVPD Scheme',
    neighborhoodHighlights: 'Dedicated home care for senior citizens, high-performance athletes, and post-surgical patients in Juhu residential societies.',
    patientReview: {
      name: 'Pooja M. (JVPD Scheme)',
      condition: 'Frozen Shoulder & Neck Spasm',
      quote: 'The manual mobilization and dry needling at home completely restored my arm mobility. Highly recommended in Juhu!',
      rating: 5
    }
  },
  {
    id: 'borivali',
    name: 'Borivali',
    category: 'Western Line',
    responseTime: '35 – 45 mins',
    landmarkAreas: ['Borivali West', 'Borivali East', 'IC Colony', 'Shimpoli', 'Eksar Road', 'Gorai', 'Vazira Naka'],
    popularConditions: ['Knee Osteoarthritis', 'Stroke Rehabilitation', 'Lumbar Spondylosis', 'Paralysis Mobility'],
    heroTagline: 'Reliable Home Physiotherapy in Borivali West & East',
    neighborhoodHighlights: 'Specialized geriatric care, neurological recovery, and post-fracture mobility training delivered to your doorstep in Borivali.',
    patientReview: {
      name: 'Ashok S. (IC Colony, Borivali)',
      condition: 'Stroke Hemiplegia Rehab',
      quote: 'Dr Pawan Gupta brought balance pads, electrical stimulators, and gait training to our house. My father is now walking independently.',
      rating: 5
    }
  },
  {
    id: 'malad',
    name: 'Malad',
    category: 'Western Line',
    responseTime: '30 – 40 mins',
    landmarkAreas: ['Malad West', 'Malad East', 'Mindspace', 'Link Road', 'Evershine Nagar', 'Chincholi Bunder', 'Marve Road'],
    popularConditions: ['Slip Disc & Sciatica', 'Corporate Ergonomic Strain', 'ACL Rehabilitation', 'Post-Op Care'],
    heroTagline: 'Doorstep Physiotherapy in Malad West & East',
    neighborhoodHighlights: 'Serving residents in Mindspace, Link Road high-rises, and Malad East with targeted manual therapy and electrotherapy.',
    patientReview: {
      name: 'Sneha P. (Mindspace Malad)',
      condition: 'Severe Sciatica Pain',
      quote: 'I could not sit due to severe L5-S1 nerve pain. Dr Pawan came to my flat and provided instant relief through McKenzie extensions and manual therapy.',
      rating: 5
    }
  },
  {
    id: 'goregaon',
    name: 'Goregaon',
    category: 'Western Line',
    responseTime: '25 – 35 mins',
    landmarkAreas: ['Goregaon West', 'Goregaon East', 'Aarey Colony', 'Oberoi Garden City', 'Bangur Nagar', 'Shastri Nagar'],
    popularConditions: ['Spine Rehabilitation', 'Knee Joint Pain', 'Bell\'s Palsy', 'Rotator Cuff Injury'],
    heroTagline: 'Expert Home Visit Physiotherapist in Goregaon',
    neighborhoodHighlights: 'Fast response to Oberoi Woods, Oberoi Garden City, Bangur Nagar, and surrounding Goregaon residential complexes.',
    patientReview: {
      name: 'Vikram D. (Oberoi Garden City)',
      condition: 'Rotator Cuff Tendinitis',
      quote: 'Super convenient home sessions with portable ultrasound and customized exercises. Relieved my shoulder pain completely.',
      rating: 5
    }
  },
  {
    id: 'marol',
    name: 'Marol',
    category: 'Western Line',
    responseTime: '20 – 30 mins',
    landmarkAreas: ['Marol Naka', 'Military Road', 'Marol Village', 'Seven Hills Hospital Area', 'Bhavani Nagar'],
    popularConditions: ['Post-Operative Recovery', 'Neck Spondylosis', 'Geriatric Care', 'Sports Sprains'],
    heroTagline: 'Clinical Home Care Physiotherapy in Marol, Andheri East',
    neighborhoodHighlights: 'Quick doorstep visits near Seven Hills, Marol Metro, and Military Road residential towers.',
    patientReview: {
      name: 'Deepak N. (Military Road, Marol)',
      condition: 'Cervical Spondylosis',
      quote: 'Professional, punctual, and highly skilled physiotherapist. Saved me hours of travel in Mumbai traffic.',
      rating: 5
    }
  },
  {
    id: 'lokhandwala',
    name: 'Lokhandwala',
    category: 'Western Line',
    responseTime: '25 – 35 mins',
    landmarkAreas: ['Lokhandwala Complex', 'Back Road', 'Oshiwara Link Road', 'Green Acres', 'Samarth Nagar'],
    popularConditions: ['Sports Conditioning', 'Spine Realignment', 'Frozen Shoulder', 'Post-Op Knee Rehab'],
    heroTagline: 'Private In-Home Physiotherapy in Lokhandwala Complex',
    neighborhoodHighlights: 'Tailored 1-on-1 private home sessions for celebrities, corporate leaders, and seniors in Lokhandwala Complex.',
    patientReview: {
      name: 'Anita B. (Lokhandwala Complex)',
      condition: 'Knee Osteoarthritis & Post-Op TKR',
      quote: 'Dr Pawan Gupta has deep clinical expertise. His home visits made my recovery from knee surgery smooth and painless.',
      rating: 5
    }
  },
  {
    id: 'vile-parle',
    name: 'Vile Parle',
    category: 'Western Line',
    responseTime: '20 – 30 mins',
    landmarkAreas: ['Vile Parle East', 'Vile Parle West', 'Subhash Road', 'Nehru Road', 'Irla', 'Hanuman Road'],
    popularConditions: ['Elderly Fall Prevention', 'Sciatica', 'Cervical Disc Pain', 'Post-Fracture Stiffness'],
    heroTagline: 'Experienced Doorstep Physiotherapist in Vile Parle',
    neighborhoodHighlights: 'Comprehensive geriatric physiotherapy, home safety checks, and orthopedic manual therapy across Vile Parle East & West.',
    patientReview: {
      name: 'Hasmukh S. (Vile Parle East)',
      condition: 'Lumbar Spondylolisthesis',
      quote: 'Very patient with senior citizens. Helped my mother regain her walking confidence at home.',
      rating: 5
    }
  },
  {
    id: 'santacruz',
    name: 'Santacruz',
    category: 'Western Line',
    responseTime: '20 – 30 mins',
    landmarkAreas: ['Santacruz West', 'Santacruz East', 'Tagore Park', 'Prabhat Colony', 'Vakola', 'Kalina'],
    popularConditions: ['Post-Op Orthopedic Care', 'Neuro Rehabilitation', 'Desk Neck Strain', 'Tennis Elbow'],
    heroTagline: 'Home Visit Physiotherapy in Santacruz (West & East)',
    neighborhoodHighlights: 'Rapid coverage across Tagore Park, Prabhat Colony, Kalina, and Vakola for all acute and chronic pain conditions.',
    patientReview: {
      name: 'Sunita G. (Tagore Road, Santacruz)',
      condition: 'Frozen Shoulder Grade III',
      quote: 'Mobilization techniques and cupping at home did wonders for my chronic shoulder pain. 5 stars!',
      rating: 5
    }
  },
  {
    id: 'bandra',
    name: 'Bandra',
    category: 'Western Line',
    responseTime: '20 – 30 mins',
    landmarkAreas: ['Bandra West', 'Bandra East', 'Pali Hill', 'Carter Road', 'Bandstand', 'Turner Road', 'Hill Road', 'BKC Connector'],
    popularConditions: ['Sports Injury Rehab', 'ACL Pre & Post-Op', 'Spine & Sciatica', 'VIP & Executive Wellness'],
    heroTagline: 'Premier Doorstep Physiotherapy in Bandra West & East',
    neighborhoodHighlights: 'High-end home physiotherapy on Pali Hill, Carter Road, Bandstand, and BKC connector with advanced mobilization and dry needling.',
    patientReview: {
      name: 'Rohan M. (Pali Hill, Bandra)',
      condition: 'ACL Reconstruction Protocol',
      quote: 'Dr Pawan handled my complete return-to-sport protocol right in my building gym and apartment. Remarkable progress in 8 weeks.',
      rating: 5
    }
  },
  {
    id: 'kandivali-east',
    name: 'Kandivali East',
    category: 'Western Line',
    responseTime: '35 – 45 mins',
    landmarkAreas: ['Lokhandwala Township', 'Thakur Village', 'Thakur Complex', 'Akurli Road', 'Samata Nagar'],
    popularConditions: ['Knee Pain', 'Stroke Care', 'Post-Surgery Rehab', 'Back Pain'],
    heroTagline: 'Specialized Home Care Physiotherapy in Kandivali East',
    neighborhoodHighlights: 'Covering Thakur Village, Thakur Complex, and Lokhandwala Township Kandivali with certified rehabilitation equipment.',
    patientReview: {
      name: 'Manoj T. (Thakur Village, Kandivali)',
      condition: 'Chronic Low Back Pain',
      quote: 'Very knowledgeable doctor who gave me real exercises that stopped my recurring back spasms.',
      rating: 5
    }
  },

  // --- CENTRAL LINE ---
  {
    id: 'dadar',
    name: 'Dadar',
    category: 'Central Line',
    responseTime: '15 – 25 mins',
    landmarkAreas: ['Dadar West', 'Dadar East', 'Shivaji Park', 'Hindu Colony', 'Portuguese Church', 'Dadar TT'],
    popularConditions: ['Senior Mobility & Joint Care', 'Sciatica', 'Post-Op Hip/Knee', 'Stroke Paralysis'],
    heroTagline: 'Trusted Home Physiotherapy in Dadar (Shivaji Park & Hindu Colony)',
    neighborhoodHighlights: 'Immediate response across Shivaji Park, Hindu Colony, and Portuguese Church area with complete home clinic setup.',
    patientReview: {
      name: 'Meena P. (Shivaji Park, Dadar)',
      condition: 'Post Total Hip Replacement',
      quote: 'Dr Pawan visited my 78-year-old father daily after his hip replacement. He walked with a stick in just 10 days.',
      rating: 5
    }
  },
  {
    id: 'parel',
    name: 'Parel',
    category: 'Central Line',
    responseTime: '10 – 20 mins',
    landmarkAreas: ['ITC Grand Central Area', 'KEM & Tata Hospital Zone', 'Lalbaug', 'Ashok Towers', 'Crescent Bay', 'Dr Ambedkar Road'],
    popularConditions: ['Post-Op Knee/Hip', 'Stroke Recovery', 'Cancer Rehab', 'Spine Herniation'],
    heroTagline: 'Fast Home Visit Physiotherapy in Parel & Lalbaug',
    neighborhoodHighlights: 'Located right next to our primary clinic, offering 15-minute emergency doorstep visits to Crescent Bay, Ashok Towers, and Parel towers.',
    patientReview: {
      name: 'Nitin J. (Crescent Bay, Parel)',
      condition: 'Acute L4-L5 Disc Herniation',
      quote: 'I could not get out of bed. Dr Pawan arrived within 20 minutes with traction and manual therapy. Lifesaver!',
      rating: 5
    }
  },
  {
    id: 'byculla',
    name: 'Byculla',
    category: 'Central Line',
    responseTime: '15 – 25 mins',
    landmarkAreas: ['Byculla East', 'Byculla West', 'Mazgaon', 'Agripada', 'Clare Road', 'Victoria Gardens'],
    popularConditions: ['Geriatric Physiotherapy', 'Stroke Rehabilitation', 'Knee Osteoarthritis', 'Post-Op Care'],
    heroTagline: 'Dedicated Doorstep Physiotherapy Care in Byculla & Mazgaon',
    neighborhoodHighlights: 'Providing compassionate home care for seniors, neuro-recovery, and orthopedic recovery across Byculla.',
    patientReview: {
      name: 'Farhan S. (Mazgaon, Byculla)',
      condition: 'Bell\'s Palsy & Facial Rehab',
      quote: 'The facial stimulation and massage techniques restored my facial symmetry in 4 weeks. Excellent doctor.',
      rating: 5
    }
  },
  {
    id: 'mumbra',
    name: 'Mumbra',
    category: 'Central Line',
    responseTime: '40 – 50 mins',
    landmarkAreas: ['Kausa', 'Old Mumbra', 'Shilphata Road', 'Tanwar Nagar', 'MM Valley'],
    popularConditions: ['Paralysis & Neuro Rehab', 'Post-Fracture Rehab', 'Spine Pain', 'Knee Pain'],
    heroTagline: 'Certified Home Visit Physiotherapy in Mumbra & Kausa',
    neighborhoodHighlights: 'In-home neuro-rehabilitation, stroke management, and orthopedic recovery visits scheduled across Mumbra and Shilphata.',
    patientReview: {
      name: 'Imran K. (Kausa, Mumbra)',
      condition: 'Post Fracture Ankle Rehab',
      quote: 'Punctual home visits and very dedicated treatment. Helped me regain full ankle movement.',
      rating: 5
    }
  },
  {
    id: 'dombivli',
    name: 'Dombivli',
    category: 'Central Line',
    responseTime: '45 – 55 mins',
    landmarkAreas: ['Dombivli East', 'Dombivli West', 'Palava City', 'Manpada Road', 'Ghararda Circle', 'Tilak Nagar'],
    popularConditions: ['Knee Replacement Rehab', 'Stroke Paralysis Care', 'Sciatica', 'Cervical Pain'],
    heroTagline: 'Professional Home Physiotherapist in Dombivli & Palava City',
    neighborhoodHighlights: 'Scheduled doorstep consultations and long-term recovery programs for residential societies in Dombivli and Palava.',
    patientReview: {
      name: 'Suresh V. (Palava City, Dombivli)',
      condition: 'Bilateral Knee Osteoarthritis',
      quote: 'Great convenience for my elderly mother in Palava. Systematic exercise progression.',
      rating: 5
    }
  },
  {
    id: 'mulund',
    name: 'Mulund',
    category: 'Central Line',
    responseTime: '30 – 40 mins',
    landmarkAreas: ['Mulund West', 'Mulund East', 'LBS Marg', 'Devidayal Road', 'Kalidas Complex Area', 'Bhakti Park'],
    popularConditions: ['Post-Op Knee & Hip Care', 'Sciatica Relief', 'Parkinson\'s Mobility', 'Sports Rehab'],
    heroTagline: 'Expert Home Physiotherapy in Mulund West & East',
    neighborhoodHighlights: 'Comprehensive rehabilitation for residents along LBS Marg, Devidayal Road, and Mulund East towers.',
    patientReview: {
      name: 'Kavita D. (LBS Marg, Mulund)',
      condition: 'Parkinson\'s Gait Training',
      quote: 'Dr Pawan works with so much patience on balance and rhythm. My uncle has improved tremendously.',
      rating: 5
    }
  },
  {
    id: 'bhandup',
    name: 'Bhandup',
    category: 'Central Line',
    responseTime: '30 – 40 mins',
    landmarkAreas: ['Bhandup West', 'Bhandup East', 'LBS Road', 'Jangid Complex', 'Subhash Nagar'],
    popularConditions: ['Spine Rehab', 'Frozen Shoulder', 'Knee Pain', 'Stroke Care'],
    heroTagline: 'Doorstep Physiotherapy Services in Bhandup',
    neighborhoodHighlights: 'Fast travel along LBS Road to deliver electrotherapy, dry needling, and mobilization to your home.',
    patientReview: {
      name: 'Rajesh P. (Bhandup West)',
      condition: 'Frozen Shoulder Relief',
      quote: 'No travel hassle. Professional treatment in the comfort of my home.',
      rating: 5
    }
  },
  {
    id: 'vikhroli',
    name: 'Vikhroli',
    category: 'Central Line',
    responseTime: '25 – 35 mins',
    landmarkAreas: ['Vikhroli East', 'Vikhroli West', 'Godrej The Trees', 'Godrej Platinum', 'Kannamwar Nagar', 'Tagore Nagar'],
    popularConditions: ['Corporate Spine Strain', 'Post-Op Knee Rehab', 'Sports Injury', 'Sciatica'],
    heroTagline: 'Premier Home Visit Physiotherapy in Vikhroli & Godrej Trees',
    neighborhoodHighlights: 'Specialized home physiotherapy for Godrej The Trees, Godrej Platinum, and Tagore Nagar residents.',
    patientReview: {
      name: 'Aditya S. (Godrej The Trees, Vikhroli)',
      condition: 'Desk Neck & Upper Back Spasm',
      quote: 'Dr Pawan came directly to my apartment. The combination of dry needling and ergonomic setup advice fixed my posture.',
      rating: 5
    }
  },
  {
    id: 'ghatkopar-east',
    name: 'Ghatkopar East',
    category: 'Central Line',
    responseTime: '20 – 30 mins',
    landmarkAreas: ['Ghatkopar East', 'Pant Nagar', 'Garodia Nagar', 'Vallabh Baug Lane', 'R-City Area', 'Eastern Express Highway'],
    popularConditions: ['Elderly Knee Care', 'Post-Surgery Mobility', 'Slip Disc', 'Neuro Rehab'],
    heroTagline: 'Home Physiotherapy Care in Ghatkopar East & Garodia Nagar',
    neighborhoodHighlights: 'Dedicated home visits across Garodia Nagar, Pant Nagar, and Vallabh Baug Lane for seniors and post-op patients.',
    patientReview: {
      name: 'Dharmesh S. (Garodia Nagar, Ghatkopar)',
      condition: 'Post TKR Surgery Rehab',
      quote: 'Dr Pawan helped me achieve 120-degree knee bend right at home in 4 weeks. Highly skilled!',
      rating: 5
    }
  },
  {
    id: 'kurla-east',
    name: 'Kurla East',
    category: 'Central Line',
    responseTime: '20 – 30 mins',
    landmarkAreas: ['Kurla East', 'Nehru Nagar', 'Kamgar Nagar', 'SCLR Connector', 'Near BKC East'],
    popularConditions: ['Spine & Disc Pain', 'Post-Op Rehab', 'Stroke Paralysis', 'Sports Recovery'],
    heroTagline: 'Trusted Doorstep Physiotherapy in Kurla East & Nehru Nagar',
    neighborhoodHighlights: 'Swift access via SCLR and Eastern Express Highway to deliver manual therapy and pain relief at home.',
    patientReview: {
      name: 'Mohd. Tariq (Nehru Nagar, Kurla)',
      condition: 'Sciatica Nerve Pain',
      quote: 'Quick response and very effective pain relief techniques right at home.',
      rating: 5
    }
  },
  {
    id: 'sion',
    name: 'Sion',
    category: 'Central Line',
    responseTime: '15 – 25 mins',
    landmarkAreas: ['Sion West', 'Sion East', 'Sion Circle', 'Sion Fort Area', 'GTB Nagar', 'Pratiksha Nagar'],
    popularConditions: ['Orthopedic Joint Pain', 'Stroke Care', 'Slip Disc', 'Sports Injuries'],
    heroTagline: 'Fast Home Visit Physiotherapist in Sion & Sion Circle',
    neighborhoodHighlights: 'Direct 15-minute home visits around Sion Circle, GTB Nagar, and Pratiksha Nagar.',
    patientReview: {
      name: 'Jayesh M. (Sion Circle)',
      condition: 'Acute Neck & Shoulder Pain',
      quote: 'Excellent clinical judgment and prompt home visit. My pain was reduced by 80% in 2 sessions.',
      rating: 5
    }
  },
  {
    id: 'sion-koliwada',
    name: 'Sion Koliwada',
    category: 'Central Line',
    responseTime: '15 – 25 mins',
    landmarkAreas: ['Sion Koliwada', 'Guru Tegh Bahadur Nagar', 'Antop Hill Sector', 'CGS Colony'],
    popularConditions: ['Geriatric Balance', 'Post-Fracture Mobility', 'Sciatica', 'Knee Osteoarthritis'],
    heroTagline: 'Dedicated Doorstep Physiotherapy in Sion Koliwada & GTB Nagar',
    neighborhoodHighlights: 'Comprehensive home physiotherapy for senior citizens and recovering patients in Sion Koliwada and CGS Colony.',
    patientReview: {
      name: 'Harpreet S. (GTB Nagar, Sion Koliwada)',
      condition: 'Knee Osteoarthritis Grade 3',
      quote: 'Dr Pawan showed my grandmother simple, effective exercises that stopped her joint creaking and pain.',
      rating: 5
    }
  },

  // --- SOUTH MUMBAI ---
  {
    id: 'lower-parel',
    name: 'Lower Parel',
    category: 'South Mumbai',
    responseTime: '15 – 25 mins',
    landmarkAreas: ['High Street Phoenix Area', 'One Avighna Park', 'World Towers', 'Marathon Futurex Zone', 'Senapati Bapat Marg', 'Currey Road'],
    popularConditions: ['Executive Ergonomic Strain', 'Sciatica & Disc Bulge', 'Post-Surgical TKR/THR', 'Sports Rehabilitation'],
    heroTagline: 'Luxury In-Home Physiotherapy in Lower Parel & World Towers',
    neighborhoodHighlights: 'Serving residents in World Towers, Lodha Park, One Avighna Park, and Senapati Bapat Marg with complete private setups.',
    patientReview: {
      name: 'Karan A. (World Towers, Lower Parel)',
      condition: 'L5-S1 Disc Herniation & Sciatica',
      quote: 'The level of professionalism, clean equipment, and deep diagnostic skill is unmatched. Relieved my sciatica at home.',
      rating: 5
    }
  },
  {
    id: 'mumbai-central',
    name: 'Mumbai Central',
    category: 'South Mumbai',
    responseTime: '20 – 30 mins',
    landmarkAreas: ['Mumbai Central Station Area', 'Nair Hospital Zone', 'Tardeo', 'Bellasis Road', 'Maratha Mandir Area', 'Wockhardt Area'],
    popularConditions: ['Post-Op Joint Replacement', 'Neuro Rehabilitation', 'Spine Care', 'Elderly Mobility'],
    heroTagline: 'Expert Doorstep Physiotherapy in Mumbai Central & Tardeo',
    neighborhoodHighlights: 'Fast clinical dispatch for orthopedic recovery, stroke care, and post-surgery rehabilitation in Mumbai Central & Tardeo.',
    patientReview: {
      name: 'Zahra F. (Tardeo, Mumbai Central)',
      condition: 'Post-Op Knee Arthroscopy',
      quote: 'Very punctual and brought all resistance bands and electrotherapy right to my living room. Excellent results.',
      rating: 5
    }
  },
  {
    id: 'colaba',
    name: 'Colaba',
    category: 'South Mumbai',
    responseTime: '25 – 35 mins',
    landmarkAreas: ['Colaba Causeway', 'Cuffe Parade', 'Gateway of India Zone', 'Navy Nagar', 'Wodehouse Road', 'Maker Chambers'],
    popularConditions: ['Geriatric Fall Prevention', 'Frozen Shoulder', 'Chronic Low Back Pain', 'VIP Home Wellness'],
    heroTagline: 'Exclusive Home Care Physiotherapy in Colaba & Cuffe Parade',
    neighborhoodHighlights: 'Dedicated doorstep physiotherapy for residential societies in Cuffe Parade, Colaba Causeway, and South Mumbai enclaves.',
    patientReview: {
      name: 'Cyrus M. (Cuffe Parade, Colaba)',
      condition: 'Chronic Low Back Pain & Sciatica',
      quote: 'Dr Pawan Gupta has been a blessing. He solved my 5-year chronic back stiffness in the comfort of my Cuffe Parade home.',
      rating: 5
    }
  },

  // --- THANE ---
  {
    id: 'thane-east',
    name: 'Thane East',
    category: 'Thane',
    responseTime: '35 – 45 mins',
    landmarkAreas: ['Thane East Station Area', 'Kopri', 'Bara Bungalow', 'Mithbunder Road', 'Chendani Koliwada'],
    popularConditions: ['Joint Pain', 'Post-Op Care', 'Sciatica', 'Stroke Rehab'],
    heroTagline: 'Reliable Home Physiotherapy in Thane East & Kopri',
    neighborhoodHighlights: 'Serving Thane East and Kopri residents with certified manual therapy and electrotherapy equipment at home.',
    patientReview: {
      name: 'Shrikant N. (Kopri, Thane East)',
      condition: 'Frozen Shoulder',
      quote: 'Very knowledgeable physiotherapist. Helped me regain full range of motion without surgery.',
      rating: 5
    }
  },
  {
    id: 'panchpakhadi',
    name: 'Panchpakhadi',
    category: 'Thane',
    responseTime: '35 – 45 mins',
    landmarkAreas: ['Panchpakhadi', 'TMC Head Office Area', 'Service Road', 'Alok Heights Zone', 'Near Nitin Company'],
    popularConditions: ['Spine Rehab', 'Knee Osteoarthritis', 'Shoulder Impingement', 'Elderly Care'],
    heroTagline: 'Doorstep Physiotherapist in Panchpakhadi, Thane West',
    neighborhoodHighlights: 'Fast response around Panchpakhadi, Nitin Company junction, and central Thane residential areas.',
    patientReview: {
      name: 'Vaishali K. (Panchpakhadi, Thane)',
      condition: 'Knee Osteoarthritis Grade 2',
      quote: 'The strengthening drills and taping gave immediate relief to my knee pain. Truly great service at home.',
      rating: 5
    }
  },
  {
    id: 'ghodbunder',
    name: 'Ghodbunder',
    category: 'Thane',
    responseTime: '40 – 50 mins',
    landmarkAreas: ['Ghodbunder Road', 'Hiranandani Estate', 'Rosa Bella', 'Owale', 'Waghbil', 'Kasarvadavali'],
    popularConditions: ['Post-Op Knee Replacement', 'Stroke Neuro Rehab', 'Slip Disc', 'Corporate Neck Pain'],
    heroTagline: 'Specialized Home Care Physiotherapy on Ghodbunder Road',
    neighborhoodHighlights: 'Scheduled visits for major townships along Ghodbunder Road including Hiranandani Estate, Rosa Bella, and Owale.',
    patientReview: {
      name: 'Prashant B. (Hiranandani Estate, Ghodbunder)',
      condition: 'Severe Slip Disc L4-L5',
      quote: 'Avoided daily travel to Mumbai. Dr Pawan treated me right at my flat in Hiranandani Estate with fantastic results.',
      rating: 5
    }
  },
  {
    id: 'kolshet',
    name: 'Kolshet',
    category: 'Thane',
    responseTime: '40 – 50 mins',
    landmarkAreas: ['Kolshet Road', 'Lodha Amara', 'Kalpataru Immensa', 'Dosti West County', 'Grand Central Park Zone'],
    popularConditions: ['Sports Injury', 'Post-Surgical Care', 'Ergonomic Pain', 'Stroke Care'],
    heroTagline: 'Doorstep Physiotherapy in Kolshet Road & Lodha Amara',
    neighborhoodHighlights: 'Active doorstep service for Lodha Amara, Kalpataru Immensa, and Dosti West County residential complexes.',
    patientReview: {
      name: 'Anjali R. (Lodha Amara, Kolshet)',
      condition: 'Post Arthroscopic Knee Surgery',
      quote: 'Having the physiotherapist come to Lodha Amara with ultrasound and exercise gear made my rehab completely stress-free.',
      rating: 5
    }
  },
  {
    id: 'majiwada',
    name: 'Majiwada',
    category: 'Thane',
    responseTime: '35 – 45 mins',
    landmarkAreas: ['Majiwada Junction', 'Rustomjee Urbania', 'Lodha Crown', 'Viviana Mall Area', 'Eastern Express Highway'],
    popularConditions: ['Spine Pain', 'Knee Joint Rehab', 'Geriatric Balance', 'Sports Rehab'],
    heroTagline: 'Expert Home Visit Physiotherapy in Majiwada & Urbania',
    neighborhoodHighlights: 'Fast connectivity to Rustomjee Urbania, Lodha Crown, and Majiwada junction for comprehensive home care.',
    patientReview: {
      name: 'Siddharth M. (Rustomjee Urbania, Majiwada)',
      condition: 'Acute Back Muscle Spasm',
      quote: 'Relieved my severe back spasm with manual joint mobilization and dry needling in 2 sessions.',
      rating: 5
    }
  },
  {
    id: 'patlipada',
    name: 'Patlipada',
    category: 'Thane',
    responseTime: '40 – 50 mins',
    landmarkAreas: ['Patlipada Junction', 'Hiranandani Meadows', 'Glendale Academy Zone', 'Ruturaj Complex'],
    popularConditions: ['Post-Op Orthopedic Care', 'Neuro Rehabilitation', 'Frozen Shoulder', 'Sciatica'],
    heroTagline: 'Home Physiotherapy Services in Patlipada & Hiranandani Meadows',
    neighborhoodHighlights: 'Dedicated home visits across Patlipada, Hiranandani Meadows, and surrounding high-rise societies.',
    patientReview: {
      name: 'Nalini V. (Hiranandani Meadows, Patlipada)',
      condition: 'Frozen Shoulder Grade 2',
      quote: 'Dr Pawan is extremely polite and competent. His home sessions cured my shoulder immobility.',
      rating: 5
    }
  },

  // --- HARBOUR LINE ---
  {
    id: 'chembur',
    name: 'Chembur',
    category: 'Harbour Line',
    responseTime: '20 – 30 mins',
    landmarkAreas: ['Chembur East', 'Chembur West', 'Diamond Garden', 'Pestom Sagar', 'Sindhi Society', 'Golf Club Area', 'Postal Colony'],
    popularConditions: ['Post-Op Knee/Hip Replacement', 'Stroke & Hemiplegia Recovery', 'Sciatica', 'Cervical Spondylosis'],
    heroTagline: 'Trusted Home Physiotherapy in Chembur (Diamond Garden & Sindhi Society)',
    neighborhoodHighlights: 'Rapid 20-minute dispatch across Diamond Garden, Pestom Sagar, Sindhi Society, and Eastern Freeway connectivity.',
    patientReview: {
      name: 'Suresh L. (Diamond Garden, Chembur)',
      condition: 'Post Knee Replacement (TKR)',
      quote: 'Dr Pawan Gupta helped me walk without walker in just 14 days right at my Chembur residence. Outstanding physiotherapist.',
      rating: 5
    }
  },
  {
    id: 'tilak-nagar-chembur',
    name: 'Tilak Nagar Chembur',
    category: 'Harbour Line',
    responseTime: '20 – 30 mins',
    landmarkAreas: ['Tilak Nagar Station Area', 'Sahakar Nagar', 'Shell Colony', 'Lokmanya Tilak Terminus Zone', 'Building 1-100 Clusters'],
    popularConditions: ['Geriatric Fall Prevention', 'Spine Rehabilitation', 'Knee Osteoarthritis', 'Post-Fracture Care'],
    heroTagline: 'Doorstep Physiotherapy in Tilak Nagar & Sahakar Nagar, Chembur',
    neighborhoodHighlights: 'Personalized home care for seniors and recovering patients throughout Tilak Nagar and Sahakar Nagar societies.',
    patientReview: {
      name: 'Geeta R. (Tilak Nagar, Chembur)',
      condition: 'Sciatica & Lumbar Disc Pain',
      quote: 'Saved me from unbearable travel pain. Dr Pawan treated me at home with genuine care and skill.',
      rating: 5
    }
  },

  // --- POWAI ---
  {
    id: 'powai',
    name: 'Powai',
    category: 'Powai',
    responseTime: '25 – 35 mins',
    landmarkAreas: ['Powai Lake Zone', 'Chandivali', 'Raheja Vihar', 'Saki Vihar Road', 'IIT Bombay Area', 'Nahur Link'],
    popularConditions: ['Tech Neck & Spine Strain', 'ACL Sports Rehabilitation', 'Post-Op Knee/Hip', 'Sciatica & Disc Bulge'],
    heroTagline: 'Premier Doorstep Physiotherapy in Powai & Chandivali',
    neighborhoodHighlights: 'Serving corporate executives, families, and seniors in Powai Lake towers, Raheja Vihar, and Chandivali complexes.',
    patientReview: {
      name: 'Abhishek G. (Raheja Vihar, Powai)',
      condition: 'Desk Neck & Trapezius Spasm',
      quote: 'The dry needling session at home was like magic for my chronic 10-hour coding neck stiffness. Super recommended in Powai!',
      rating: 5
    }
  },
  {
    id: 'hiranandani',
    name: 'Hiranandani',
    category: 'Powai',
    responseTime: '25 – 35 mins',
    landmarkAreas: ['Hiranandani Gardens', 'Heritage Buildings', 'Castle Rock', 'Adani Western Heights Zone', 'Rodas Enclave', 'Cliff Tower Area'],
    popularConditions: ['Executive Postural Correction', 'Sports Rehab & Return-to-Play', 'VIP Elderly Mobility', 'Post-Surgical Care'],
    heroTagline: 'Exclusive In-Home Physiotherapy in Hiranandani Gardens, Powai',
    neighborhoodHighlights: 'Tailored private home consultations for residents across Hiranandani Gardens with portable electrotherapy, mobilization, and taping.',
    patientReview: {
      name: 'Madhavi S. (Hiranandani Gardens, Powai)',
      condition: 'Rotator Cuff & Frozen Shoulder',
      quote: 'Dr Pawan provides top-tier international standard physiotherapy right inside your home. My shoulder pain is 100% gone.',
      rating: 5
    }
  }
];

// Helper grouped structure for the Mega Menu
export const LOCATION_GROUPS: LocationCategoryGroup[] = [
  {
    category: 'Western Line',
    locations: HOME_VISIT_LOCATIONS.filter((l) => l.category === 'Western Line'),
  },
  {
    category: 'Central Line',
    locations: HOME_VISIT_LOCATIONS.filter((l) => l.category === 'Central Line'),
  },
  {
    category: 'South Mumbai',
    locations: HOME_VISIT_LOCATIONS.filter((l) => l.category === 'South Mumbai'),
  },
  {
    category: 'Thane',
    locations: HOME_VISIT_LOCATIONS.filter((l) => l.category === 'Thane'),
  },
  {
    category: 'Harbour Line',
    locations: HOME_VISIT_LOCATIONS.filter((l) => l.category === 'Harbour Line'),
  },
  {
    category: 'Powai',
    locations: HOME_VISIT_LOCATIONS.filter((l) => l.category === 'Powai'),
  },
];

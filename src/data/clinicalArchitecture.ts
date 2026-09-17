/**
 * Core Information Architecture & Clinical Service Taxonomy
 * Run To Win Healthcare Services Mumbai - Dr. Pawan Gupta (PT)
 * Domain: https://runtowinphysiotherapy.com/
 */

export interface ArchitectureNode {
  id: string;
  name: string;
  url: string;
  path: string;
  purpose: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  searchIntent: 'Commercial Investigation' | 'Informational' | 'Transactional' | 'Local Commercial';
  parentPage: string;
  childPages?: string[];
  relatedPages: string[];
  category: 'core' | 'service' | 'condition' | 'rehabilitation' | 'location' | 'trust' | 'conversion';
  breadcrumbs: { label: string; href: string }[];
}

export const ARCHITECTURE_MAP: Record<string, ArchitectureNode> = {
  // 1. Home
  'home': {
    id: 'home',
    name: 'Home',
    url: 'https://runtowinphysiotherapy.com/',
    path: '/',
    purpose: 'Core clinical brand homepage, value proposition, doctor credentials, and triage entry point for patients across Mumbai.',
    primaryKeyword: 'Physiotherapist in Mumbai',
    secondaryKeywords: ['Physiotherapy clinic Mumbai', 'Best physiotherapist near me Mumbai', 'Run To Win Healthcare Services'],
    searchIntent: 'Local Commercial',
    parentPage: 'None (Root)',
    childPages: ['physiotherapy-mumbai', 'services', 'conditions', 'rehabilitation', 'about', 'areas-we-serve', 'articles', 'contact'],
    relatedPages: ['physiotherapy-mumbai', 'services', 'contact'],
    category: 'core',
    breadcrumbs: [{ label: 'Home', href: '/' }]
  },

  // 2. Hub: Physiotherapy in Mumbai
  'physiotherapy-mumbai': {
    id: 'physiotherapy-mumbai',
    name: 'Physiotherapy in Mumbai',
    url: 'https://runtowinphysiotherapy.com/#physiotherapy-mumbai',
    path: '/#physiotherapy-mumbai',
    purpose: 'Comprehensive regional landing page highlighting clinic-based and doorstep physiotherapy capabilities across all Mumbai zones.',
    primaryKeyword: 'Physiotherapy treatment in Mumbai',
    secondaryKeywords: ['Physiotherapy center Mumbai', 'Leading physiotherapy clinic Mumbai', 'Dr Pawan Gupta PT Mumbai'],
    searchIntent: 'Commercial Investigation',
    parentPage: 'Home',
    childPages: ['services', 'areas-we-serve'],
    relatedPages: ['services', 'about', 'contact', 'home-physiotherapy'],
    category: 'core',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Physiotherapy in Mumbai', href: '/#physiotherapy-mumbai' }
    ]
  },

  // 3. Services Hub
  'services': {
    id: 'services',
    name: 'Physiotherapy Services',
    url: 'https://runtowinphysiotherapy.com/#services',
    path: '/#services',
    purpose: 'Clinical treatment modalities and specialized physiotherapy branches directory.',
    primaryKeyword: 'Physiotherapy services Mumbai',
    secondaryKeywords: ['Physiotherapy treatments Mumbai', 'Specialized physiotherapy modalities', 'Physical therapy clinic Mumbai'],
    searchIntent: 'Commercial Investigation',
    parentPage: 'Home',
    childPages: [
      'orthopedic-physiotherapy',
      'sports-physiotherapy',
      'neuro-physiotherapy',
      'home-physiotherapy',
      'online-physiotherapy',
      'pain-management',
      'post-surgical-rehab'
    ],
    relatedPages: ['conditions', 'rehabilitation', 'contact'],
    category: 'service',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Services', href: '/#services' }
    ]
  },

  // Services Sub-pages
  'orthopedic-physiotherapy': {
    id: 'orthopedic-physiotherapy',
    name: 'Orthopedic Physiotherapy',
    url: 'https://runtowinphysiotherapy.com/#service/orthopedic-physiotherapy',
    path: '/#service/orthopedic-physiotherapy',
    purpose: 'Specialized diagnosis and rehabilitation for spine, joint, bone, and tendon disorders.',
    primaryKeyword: 'Orthopedic physiotherapy Mumbai',
    secondaryKeywords: ['Musculoskeletal physiotherapist Mumbai', 'Spine and joint physiotherapy', 'Bone and joint rehabilitation'],
    searchIntent: 'Commercial Investigation',
    parentPage: 'Services',
    relatedPages: ['back-pain', 'neck-pain', 'knee-pain', 'arthritis', 'pain-management'],
    category: 'service',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Services', href: '/#services' },
      { label: 'Orthopedic Physiotherapy', href: '/#service/orthopedic-physiotherapy' }
    ]
  },

  'sports-physiotherapy': {
    id: 'sports-physiotherapy',
    name: 'Sports Physiotherapy',
    url: 'https://runtowinphysiotherapy.com/#service/sports-physiotherapy',
    path: '/#service/sports-physiotherapy',
    purpose: 'Performance optimization, acute athletic injury triage, biomechanical video gait analysis, and return-to-play clearance.',
    primaryKeyword: 'Sports physiotherapist in Mumbai',
    secondaryKeywords: ['Sports injury clinic Mumbai', 'Athletic rehabilitation Mumbai', 'Running injury physiotherapy'],
    searchIntent: 'Commercial Investigation',
    parentPage: 'Services',
    relatedPages: ['sports-injuries', 'acl-rehab', 'tennis-elbow', 'plantar-fasciitis'],
    category: 'service',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Services', href: '/#services' },
      { label: 'Sports Physiotherapy', href: '/#service/sports-physiotherapy' }
    ]
  },

  'neuro-physiotherapy': {
    id: 'neuro-physiotherapy',
    name: 'Neurological Physiotherapy',
    url: 'https://runtowinphysiotherapy.com/#service/neuro-physiotherapy',
    path: '/#service/neuro-physiotherapy',
    purpose: 'Neuroplasticity motor retraining for stroke, Parkinson’s, Bell’s Palsy, neuropathy, and spinal cord conditions.',
    primaryKeyword: 'Neuro physiotherapy in Mumbai',
    secondaryKeywords: ['Neurological physical therapy Mumbai', 'Paralysis rehabilitation Mumbai', 'Neuro physiotherapist near me'],
    searchIntent: 'Commercial Investigation',
    parentPage: 'Services',
    relatedPages: ['stroke-rehab', 'parkinsons-rehab', 'balance-gait-rehab', 'home-physiotherapy'],
    category: 'service',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Services', href: '/#services' },
      { label: 'Neuro Physiotherapy', href: '/#service/neuro-physiotherapy' }
    ]
  },

  'home-physiotherapy': {
    id: 'home-physiotherapy',
    name: 'Home Physiotherapy',
    url: 'https://runtowinphysiotherapy.com/#home-visits',
    path: '/#home-visits',
    purpose: 'Doorstep home visit physiotherapy across South, Central, Western, Eastern Mumbai, and Thane for bedridden, post-op, or elderly patients.',
    primaryKeyword: 'Home visit physiotherapy in Mumbai',
    secondaryKeywords: ['Physiotherapist home visit near me', 'Physiotherapy at home Mumbai', 'Doorstep physical therapy Mumbai'],
    searchIntent: 'Local Commercial',
    parentPage: 'Services',
    childPages: ['areas-we-serve'],
    relatedPages: ['senior-rehab', 'stroke-rehab', 'knee-replacement-rehab', 'areas-we-serve'],
    category: 'service',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Services', href: '/#services' },
      { label: 'Home Physiotherapy', href: '/#home-visits' }
    ]
  },

  'online-physiotherapy': {
    id: 'online-physiotherapy',
    name: 'Online Physiotherapy Consultation',
    url: 'https://runtowinphysiotherapy.com/#service/online-physiotherapy',
    path: '/#service/online-physiotherapy',
    purpose: 'Virtual video ergonomic assessments, post-discharge review, and guided home exercise prescription.',
    primaryKeyword: 'Online physiotherapy consultation India',
    secondaryKeywords: ['Tele-physiotherapy consultation', 'Virtual physical therapy Mumbai', 'Ergonomic online consult'],
    searchIntent: 'Transactional',
    parentPage: 'Services',
    relatedPages: ['contact', 'about', 'services'],
    category: 'service',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Services', href: '/#services' },
      { label: 'Online Physiotherapy', href: '/#service/online-physiotherapy' }
    ]
  },

  'pain-management': {
    id: 'pain-management',
    name: 'Pain Management & Modalities',
    url: 'https://runtowinphysiotherapy.com/#service/pain-management',
    path: '/#service/pain-management',
    purpose: 'Non-pharmacological pain relief utilizing Dry Needling, Myofascial Cupping, IASTM, and Electrotherapy.',
    primaryKeyword: 'Physiotherapy pain management Mumbai',
    secondaryKeywords: ['Dry needling clinic Mumbai', 'Myofascial cupping therapy Mumbai', 'Non-surgical pain relief'],
    searchIntent: 'Commercial Investigation',
    parentPage: 'Services',
    relatedPages: ['back-pain', 'neck-pain', 'sciatica', 'frozen-shoulder'],
    category: 'service',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Services', href: '/#services' },
      { label: 'Pain Management', href: '/#service/pain-management' }
    ]
  },

  'post-surgical-rehab': {
    id: 'post-surgical-rehab',
    name: 'Post-Surgical Rehabilitation',
    url: 'https://runtowinphysiotherapy.com/#service/post-surgical-rehab',
    path: '/#service/post-surgical-rehab',
    purpose: 'Protocol-driven phased recovery following orthopedic surgery in coordination with Mumbai surgeons.',
    primaryKeyword: 'Post-surgical physiotherapy Mumbai',
    secondaryKeywords: ['Post-operative rehabilitation Mumbai', 'Surgery recovery physiotherapy', 'Orthopedic surgeon rehab protocols'],
    searchIntent: 'Commercial Investigation',
    parentPage: 'Services',
    relatedPages: ['knee-replacement-rehab', 'hip-replacement-rehab', 'acl-rehab', 'home-physiotherapy'],
    category: 'service',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Services', href: '/#services' },
      { label: 'Post-Surgical Rehabilitation', href: '/#service/post-surgical-rehab' }
    ]
  },

  // 4. Conditions Hub
  'conditions': {
    id: 'conditions',
    name: 'Conditions Treated',
    url: 'https://runtowinphysiotherapy.com/#conditions',
    path: '/#conditions',
    purpose: 'Directory of musculoskeletal, neurological, and sports conditions treated at Run To Win.',
    primaryKeyword: 'Conditions treated by physiotherapist',
    secondaryKeywords: ['Physiotherapy for pain Mumbai', 'Musculoskeletal disorders list', 'Common physical therapy conditions'],
    searchIntent: 'Informational',
    parentPage: 'Home',
    childPages: [
      'back-pain', 'neck-pain', 'sciatica', 'knee-pain', 'arthritis',
      'frozen-shoulder', 'shoulder-pain', 'tennis-elbow', 'plantar-fasciitis', 'sports-injuries'
    ],
    relatedPages: ['services', 'rehabilitation', 'body-map'],
    category: 'condition',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Conditions', href: '/#conditions' }
    ]
  },

  // 10 Requested Conditions
  'back-pain': {
    id: 'back-pain',
    name: 'Lower Back Pain',
    url: 'https://runtowinphysiotherapy.com/#condition/lower-back',
    path: '/#condition/lower-back',
    purpose: 'Patient guide on lumbar disc herniation, facet arthropathy, core muscle reconditioning, and spinal decompression.',
    primaryKeyword: 'Back pain physiotherapy Mumbai',
    secondaryKeywords: ['Lower back pain specialist Mumbai', 'Slip disc physiotherapy Mumbai', 'Lumbar spondylosis rehab'],
    searchIntent: 'Commercial Investigation',
    parentPage: 'Conditions',
    relatedPages: ['sciatica', 'orthopedic-physiotherapy', 'pain-management'],
    category: 'condition',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Conditions', href: '/#conditions' },
      { label: 'Lower Back Pain', href: '/#condition/lower-back' }
    ]
  },

  'neck-pain': {
    id: 'neck-pain',
    name: 'Neck Pain & Cervical Spondylosis',
    url: 'https://runtowinphysiotherapy.com/#condition/cervical-neck',
    path: '/#condition/cervical-neck',
    purpose: 'Evidence-based recovery for tech neck, cervical spondylosis, nerve pinching, and desk posture strain.',
    primaryKeyword: 'Neck pain physiotherapy Mumbai',
    secondaryKeywords: ['Cervical spondylosis physiotherapy Mumbai', 'Tech neck treatment Mumbai', 'Cervical radiculopathy rehab'],
    searchIntent: 'Commercial Investigation',
    parentPage: 'Conditions',
    relatedPages: ['shoulder-pain', 'orthopedic-physiotherapy', 'pain-management'],
    category: 'condition',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Conditions', href: '/#conditions' },
      { label: 'Neck Pain', href: '/#condition/cervical-neck' }
    ]
  },

  'sciatica': {
    id: 'sciatica',
    name: 'Sciatica & Nerve Compression',
    url: 'https://runtowinphysiotherapy.com/#condition/sciatica',
    path: '/#condition/sciatica',
    purpose: 'Specific guide for shooting leg pain, piriformis syndrome, and L4-S1 nerve root irritation.',
    primaryKeyword: 'Sciatica physiotherapy Mumbai',
    secondaryKeywords: ['Sciatic nerve pain treatment Mumbai', 'Piriformis syndrome rehab', 'Pinched nerve leg pain physiotherapy'],
    searchIntent: 'Commercial Investigation',
    parentPage: 'Conditions',
    relatedPages: ['back-pain', 'orthopedic-physiotherapy', 'pain-management'],
    category: 'condition',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Conditions', href: '/#conditions' },
      { label: 'Sciatica', href: '/#condition/sciatica' }
    ]
  },

  'knee-pain': {
    id: 'knee-pain',
    name: 'Knee Pain & Meniscus Disorders',
    url: 'https://runtowinphysiotherapy.com/#condition/knee',
    path: '/#condition/knee',
    purpose: 'Clinical protocols for patellofemoral tracking, runner’s knee, meniscus strains, and stair pain.',
    primaryKeyword: 'Knee pain physiotherapy Mumbai',
    secondaryKeywords: ['Knee joint treatment Mumbai', 'Patellofemoral pain rehab', 'Meniscus tear physical therapy'],
    searchIntent: 'Commercial Investigation',
    parentPage: 'Conditions',
    relatedPages: ['arthritis', 'knee-replacement-rehab', 'sports-injuries'],
    category: 'condition',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Conditions', href: '/#conditions' },
      { label: 'Knee Pain', href: '/#condition/knee' }
    ]
  },

  'arthritis': {
    id: 'arthritis',
    name: 'Arthritis & Joint Degeneration',
    url: 'https://runtowinphysiotherapy.com/#condition/arthritis',
    path: '/#condition/arthritis',
    purpose: 'Non-surgical joint preservation, cartilage offloading exercises, and synovial lubrication therapy.',
    primaryKeyword: 'Arthritis physiotherapy Mumbai',
    secondaryKeywords: ['Knee osteoarthritis physiotherapy Mumbai', 'Joint stiffness physical therapy', 'Degenerative joint disease rehab'],
    searchIntent: 'Commercial Investigation',
    parentPage: 'Conditions',
    relatedPages: ['knee-pain', 'hip-replacement-rehab', 'knee-replacement-rehab', 'senior-rehab'],
    category: 'condition',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Conditions', href: '/#conditions' },
      { label: 'Arthritis', href: '/#condition/arthritis' }
    ]
  },

  'frozen-shoulder': {
    id: 'frozen-shoulder',
    name: 'Frozen Shoulder (Adhesive Capsulitis)',
    url: 'https://runtowinphysiotherapy.com/#condition/shoulder',
    path: '/#condition/shoulder',
    purpose: 'Capsular mobilization (Maitland), night pain management, and stage-wise recovery protocols.',
    primaryKeyword: 'Frozen shoulder physiotherapy Mumbai',
    secondaryKeywords: ['Adhesive capsulitis treatment Mumbai', 'Shoulder stiffness physical therapy', 'Frozen shoulder doctor Mumbai'],
    searchIntent: 'Commercial Investigation',
    parentPage: 'Conditions',
    relatedPages: ['shoulder-pain', 'pain-management', 'orthopedic-physiotherapy'],
    category: 'condition',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Conditions', href: '/#conditions' },
      { label: 'Frozen Shoulder', href: '/#condition/shoulder' }
    ]
  },

  'shoulder-pain': {
    id: 'shoulder-pain',
    name: 'Shoulder Pain & Rotator Cuff Impingement',
    url: 'https://runtowinphysiotherapy.com/#condition/shoulder-pain',
    path: '/#condition/shoulder-pain',
    purpose: 'Supraspinatus tendinitis, subacromial bursitis, and scapular dyskinesis rehabilitation.',
    primaryKeyword: 'Shoulder pain physiotherapy Mumbai',
    secondaryKeywords: ['Rotator cuff tendinitis treatment Mumbai', 'Shoulder impingement rehab', 'Shoulder specialist physiotherapy'],
    searchIntent: 'Commercial Investigation',
    parentPage: 'Conditions',
    relatedPages: ['frozen-shoulder', 'sports-injuries', 'orthopedic-physiotherapy'],
    category: 'condition',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Conditions', href: '/#conditions' },
      { label: 'Shoulder Pain', href: '/#condition/shoulder-pain' }
    ]
  },

  'tennis-elbow': {
    id: 'tennis-elbow',
    name: 'Tennis Elbow (Lateral Epicondylalgia)',
    url: 'https://runtowinphysiotherapy.com/#condition/tennis-elbow',
    path: '/#condition/tennis-elbow',
    purpose: 'Extensor tendon loading, Tyler twist eccentric exercises, dry needling, and grip ergonomic modifications.',
    primaryKeyword: 'Tennis elbow physiotherapy Mumbai',
    secondaryKeywords: ['Lateral epicondylitis treatment Mumbai', 'Elbow tendon pain physiotherapy', 'Repetitive strain elbow therapy'],
    searchIntent: 'Commercial Investigation',
    parentPage: 'Conditions',
    relatedPages: ['sports-injuries', 'pain-management', 'sports-physiotherapy'],
    category: 'condition',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Conditions', href: '/#conditions' },
      { label: 'Tennis Elbow', href: '/#condition/tennis-elbow' }
    ]
  },

  'plantar-fasciitis': {
    id: 'plantar-fasciitis',
    name: 'Plantar Fasciitis & Heel Pain',
    url: 'https://runtowinphysiotherapy.com/#condition/plantar-fasciitis',
    path: '/#condition/plantar-fasciitis',
    purpose: 'First-step morning heel pain protocols, calf-fascia stretching, arch biomechanics, and shock absorption.',
    primaryKeyword: 'Plantar fasciitis physiotherapy Mumbai',
    secondaryKeywords: ['Heel pain treatment Mumbai', 'Calcaneal spur physiotherapy', 'Foot arch pain physical therapy'],
    searchIntent: 'Commercial Investigation',
    parentPage: 'Conditions',
    relatedPages: ['sports-injuries', 'sports-physiotherapy', 'pain-management'],
    category: 'condition',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Conditions', href: '/#conditions' },
      { label: 'Plantar Fasciitis', href: '/#condition/plantar-fasciitis' }
    ]
  },

  'sports-injuries': {
    id: 'sports-injuries',
    name: 'Sports Injuries & Athletic Overuse',
    url: 'https://runtowinphysiotherapy.com/#condition/sports-injuries',
    path: '/#condition/sports-injuries',
    purpose: 'Acute sprains, hamstring strains, shin splints, and biomechanical return-to-sport testing.',
    primaryKeyword: 'Sports injury treatment Mumbai',
    secondaryKeywords: ['Athletic injury physiotherapy Mumbai', 'Hamstring strain recovery', 'Ankle sprain physical therapy'],
    searchIntent: 'Commercial Investigation',
    parentPage: 'Conditions',
    relatedPages: ['sports-physiotherapy', 'acl-rehab', 'tennis-elbow', 'knee-pain'],
    category: 'condition',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Conditions', href: '/#conditions' },
      { label: 'Sports Injuries', href: '/#condition/sports-injuries' }
    ]
  },

  // 5. Rehabilitation Hub
  'rehabilitation': {
    id: 'rehabilitation',
    name: 'Rehabilitation Programs',
    url: 'https://runtowinphysiotherapy.com/#rehabilitation',
    path: '/#rehabilitation',
    purpose: 'Structured, multi-week recovery frameworks for major orthopedic surgeries, neurological events, and seniors.',
    primaryKeyword: 'Rehabilitation programs Mumbai',
    secondaryKeywords: ['Physical therapy rehabilitation Mumbai', 'Rehabilitation center Mumbai', 'Surgeon approved rehab programs'],
    searchIntent: 'Commercial Investigation',
    parentPage: 'Home',
    childPages: [
      'acl-rehab', 'stroke-rehab', 'parkinsons-rehab',
      'knee-replacement-rehab', 'hip-replacement-rehab',
      'balance-gait-rehab', 'senior-rehab'
    ],
    relatedPages: ['services', 'conditions', 'contact'],
    category: 'rehabilitation',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Rehabilitation', href: '/#rehabilitation' }
    ]
  },

  // 7 Requested Rehabilitation Programs
  'acl-rehab': {
    id: 'acl-rehab',
    name: 'ACL Rehabilitation',
    url: 'https://runtowinphysiotherapy.com/#rehabilitation/acl',
    path: '/#rehabilitation/acl',
    purpose: 'Phase-wise post-ACL reconstruction graft protection, neuromuscular re-education, and return-to-sport testing.',
    primaryKeyword: 'ACL reconstruction physiotherapy Mumbai',
    secondaryKeywords: ['ACL rehab protocol Mumbai', 'Post-surgery ACL physical therapy', 'ACL tear return to sports test'],
    searchIntent: 'Commercial Investigation',
    parentPage: 'Rehabilitation',
    relatedPages: ['sports-physiotherapy', 'knee-pain', 'sports-injuries'],
    category: 'rehabilitation',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Rehabilitation', href: '/#rehabilitation' },
      { label: 'ACL Rehabilitation', href: '/#rehabilitation/acl' }
    ]
  },

  'stroke-rehab': {
    id: 'stroke-rehab',
    name: 'Stroke Rehabilitation',
    url: 'https://runtowinphysiotherapy.com/#condition/neuro-stroke',
    path: '/#condition/neuro-stroke',
    purpose: 'Intensive neuroplastic recovery, bedside mobilization, anti-spasticity positioning, and gait re-education.',
    primaryKeyword: 'Stroke rehabilitation in Mumbai',
    secondaryKeywords: ['Stroke paralysis physiotherapy Mumbai', 'Hemiplegia physical therapy', 'Post-stroke recovery at home'],
    searchIntent: 'Commercial Investigation',
    parentPage: 'Rehabilitation',
    relatedPages: ['neuro-physiotherapy', 'balance-gait-rehab', 'home-physiotherapy'],
    category: 'rehabilitation',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Rehabilitation', href: '/#rehabilitation' },
      { label: 'Stroke Rehabilitation', href: '/#condition/neuro-stroke' }
    ]
  },

  'parkinsons-rehab': {
    id: 'parkinsons-rehab',
    name: 'Parkinson\'s Disease Rehabilitation',
    url: 'https://runtowinphysiotherapy.com/#rehabilitation/parkinsons',
    path: '/#rehabilitation/parkinsons',
    purpose: 'Amplitude-based movement retraining (LSVT BIG concepts), rigidity management, and freeze-of-gait cues.',
    primaryKeyword: 'Parkinsons physiotherapy in Mumbai',
    secondaryKeywords: ['Parkinsons disease exercise therapy Mumbai', 'Movement disorder physical therapy', 'Parkinsons home physiotherapy'],
    searchIntent: 'Commercial Investigation',
    parentPage: 'Rehabilitation',
    relatedPages: ['neuro-physiotherapy', 'balance-gait-rehab', 'senior-rehab'],
    category: 'rehabilitation',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Rehabilitation', href: '/#rehabilitation' },
      { label: 'Parkinson\'s Rehabilitation', href: '/#rehabilitation/parkinsons' }
    ]
  },

  'knee-replacement-rehab': {
    id: 'knee-replacement-rehab',
    name: 'Total Knee Replacement (TKR) Rehabilitation',
    url: 'https://runtowinphysiotherapy.com/#rehabilitation/knee-replacement',
    path: '/#rehabilitation/knee-replacement',
    purpose: 'Immediate post-discharge protocol: preventing flexion contracture, achieving 0-120° ROM, and independent stair climbing.',
    primaryKeyword: 'Total knee replacement physiotherapy Mumbai',
    secondaryKeywords: ['TKR rehabilitation Mumbai', 'Post knee surgery physiotherapy at home', 'Knee replacement exercises protocol'],
    searchIntent: 'Commercial Investigation',
    parentPage: 'Rehabilitation',
    relatedPages: ['post-surgical-rehab', 'knee-pain', 'home-physiotherapy'],
    category: 'rehabilitation',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Rehabilitation', href: '/#rehabilitation' },
      { label: 'Knee Replacement Rehabilitation', href: '/#rehabilitation/knee-replacement' }
    ]
  },

  'hip-replacement-rehab': {
    id: 'hip-replacement-rehab',
    name: 'Total Hip Replacement (THR) Rehabilitation',
    url: 'https://runtowinphysiotherapy.com/#rehabilitation/hip-replacement',
    path: '/#rehabilitation/hip-replacement',
    purpose: 'Hip dislocation precautions, gluteal activation, weight-bearing gait symmetry, and independent sit-to-stand recovery.',
    primaryKeyword: 'Total hip replacement physiotherapy Mumbai',
    secondaryKeywords: ['THR rehabilitation Mumbai', 'Post hip surgery physical therapy', 'Hip arthroplasty rehab protocol'],
    searchIntent: 'Commercial Investigation',
    parentPage: 'Rehabilitation',
    relatedPages: ['post-surgical-rehab', 'arthritis', 'home-physiotherapy'],
    category: 'rehabilitation',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Rehabilitation', href: '/#rehabilitation' },
      { label: 'Hip Replacement Rehabilitation', href: '/#rehabilitation/hip-replacement' }
    ]
  },

  'balance-gait-rehab': {
    id: 'balance-gait-rehab',
    name: 'Balance & Gait Rehabilitation',
    url: 'https://runtowinphysiotherapy.com/#rehabilitation/balance-gait',
    path: '/#rehabilitation/balance-gait',
    purpose: 'Fall risk reduction, vestibular proprioception retraining, and assistive device progression (walker to cane to unassisted).',
    primaryKeyword: 'Balance and gait training physiotherapy Mumbai',
    secondaryKeywords: ['Fall prevention physiotherapy Mumbai', 'Gait re-education therapy', 'Vestibular balance rehab'],
    searchIntent: 'Commercial Investigation',
    parentPage: 'Rehabilitation',
    relatedPages: ['senior-rehab', 'neuro-physiotherapy', 'parkinsons-rehab'],
    category: 'rehabilitation',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Rehabilitation', href: '/#rehabilitation' },
      { label: 'Balance & Gait Rehabilitation', href: '/#rehabilitation/balance-gait' }
    ]
  },

  'senior-rehab': {
    id: 'senior-rehab',
    name: 'Senior Citizen & Geriatric Rehabilitation',
    url: 'https://runtowinphysiotherapy.com/#rehabilitation/senior-citizen',
    path: '/#rehabilitation/senior-citizen',
    purpose: 'Safe in-home physical therapy designed specifically for elderly adults to maintain mobility, relieve arthritis, and prevent falls.',
    primaryKeyword: 'Geriatric physiotherapy in Mumbai',
    secondaryKeywords: ['Elderly physical therapy Mumbai', 'Senior citizen home physiotherapy Mumbai', 'Old age mobility therapy'],
    searchIntent: 'Local Commercial',
    parentPage: 'Rehabilitation',
    relatedPages: ['home-physiotherapy', 'balance-gait-rehab', 'arthritis'],
    category: 'rehabilitation',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Rehabilitation', href: '/#rehabilitation' },
      { label: 'Senior Citizen Rehabilitation', href: '/#rehabilitation/senior-citizen' }
    ]
  },

  // 6. Doctor / About Page
  'about': {
    id: 'about',
    name: 'Dr. Pawan Gupta (PT)',
    url: 'https://runtowinphysiotherapy.com/#about',
    path: '/#about',
    purpose: 'Doctor credentials, clinical qualifications (B.P.Th, M.P.Th, MIAP), 8+ years experience, and hospital background.',
    primaryKeyword: 'Dr Pawan Gupta PT Mumbai',
    secondaryKeywords: ['Best physiotherapist Mumbai', 'Senior consultant physiotherapist Sewri', 'Musculoskeletal specialist Dr Pawan Gupta'],
    searchIntent: 'Commercial Investigation',
    parentPage: 'Home',
    relatedPages: ['services', 'rehabilitation', 'contact'],
    category: 'trust',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Dr. Pawan Gupta (PT)', href: '/#about' }
    ]
  },

  // 7. Areas We Serve (Mumbai Locations Hub)
  'areas-we-serve': {
    id: 'areas-we-serve',
    name: 'Areas We Serve in Mumbai',
    url: 'https://runtowinphysiotherapy.com/#home-visits',
    path: '/#home-visits',
    purpose: 'Complete coverage map and directory of 35+ Mumbai localities for clinic and home visit physiotherapy.',
    primaryKeyword: 'Physiotherapist near me Mumbai',
    secondaryKeywords: ['Home visit physiotherapy Mumbai locations', 'Physiotherapy clinic Sewri South Mumbai', 'Doorstep physiotherapy Mumbai suburbs'],
    searchIntent: 'Local Commercial',
    parentPage: 'Home',
    childPages: [
      'physiotherapist-near-me-sewri',
      'physiotherapist-near-me-dadar',
      'physiotherapist-near-me-bandra',
      'physiotherapist-near-me-andheri'
    ],
    relatedPages: ['home-physiotherapy', 'services', 'contact'],
    category: 'location',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Areas We Serve', href: '/#home-visits' }
    ]
  },

  // 8. Patient Education / Blog
  'articles': {
    id: 'articles',
    name: 'Patient Education & Clinical Articles',
    url: 'https://runtowinphysiotherapy.com/#articles',
    path: '/#articles',
    purpose: 'Evidence-based articles answering patient questions, post-operative protocols, and preventative spine/joint health.',
    primaryKeyword: 'Physiotherapy articles and guides Mumbai',
    secondaryKeywords: ['Physical therapy advice Dr Pawan Gupta', 'Spine and knee exercises guide', 'Patient education physiotherapy'],
    searchIntent: 'Informational',
    parentPage: 'Home',
    relatedPages: ['conditions', 'rehabilitation', 'services'],
    category: 'core',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Patient Education', href: '/#articles' }
    ]
  },

  // 9. Contact / Book Assessment
  'contact': {
    id: 'contact',
    name: 'Contact & Book Assessment',
    url: 'https://runtowinphysiotherapy.com/#contact',
    path: '/#contact',
    purpose: 'Direct booking conversion page with clinic phone, WhatsApp direct channel, Sewri clinic address, hours, and interactive triage.',
    primaryKeyword: 'Book physiotherapy appointment Mumbai',
    secondaryKeywords: ['Contact Dr Pawan Gupta PT', 'Physiotherapy appointment Sewri', 'Book home visit physiotherapist Mumbai'],
    searchIntent: 'Transactional',
    parentPage: 'Home',
    relatedPages: ['home-physiotherapy', 'services', 'about'],
    category: 'conversion',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Contact & Book Assessment', href: '/#contact' }
    ]
  }
};

import { ConditionGuide } from './conditionTypes';

export const REHAB_CONDITIONS: ConditionGuide[] = [
  {
    id: 'posture-ergonomics',
    slug: 'posture-ergonomics-desk-strain-physiotherapy-mumbai',
    name: 'Posture & Ergonomics (Desk Worker Care)',
    category: 'Posture & Ergonomics',
    heroHeadline: 'Evidence-Based Desk Posture & Workstation Ergonomics Care in Mumbai',
    seoTitle: 'Desk Posture & Ergonomics Physiotherapy Mumbai | Dr. Pawan Gupta (PT)',
    metaDescription: 'Specialized physical therapy for desk workers, hunchback posture, and tech-neck in Mumbai. In-person and virtual ergonomic assessments by Dr. Pawan Gupta (PT).',
    quickSummary: 'Prolonged sitting in corporate hubs across Mumbai (BKC, Lower Parel, Nariman Point, Andheri) places continuous stress on the posterior spinal chain, leading to forward head posture, rounded shoulders, upper crossed syndrome, and chronic tension headaches. Structured ergonomic physiotherapy combines myofascial release, deep stabilizer activation, and workstation setup.',
    primarySearchIntent: 'Correction of forward-head posture, rounded shoulders, and desk-related back/neck strain through physiotherapy in Mumbai.',
    reviewedBy: 'Dr. Pawan Gupta (PT)',
    reviewerCredentials: 'B.P.Th, M.P.Th, Certified Workstation Ergonomist (MIAP)',
    lastUpdated: 'August 2026',
    whatIsIt: 'Postural syndrome results from prolonged static loading of postural muscles in non-neutral alignments, leading to ischemic pain, muscle imbalances (tight chest/hamstrings and weak deep neck flexors/rhomboids), and spinal disc fatigue.',
    symptoms: [
      'Constant burning ache between the shoulder blades at the end of the workday',
      'Forward projection of the chin with visible hunching of the upper back (kyphosis)',
      'Frequent tension headaches originating from the suboccipital neck region',
      'Lower back stiffness when standing up after prolonged desk sessions',
      'Tight, shortened chest and hip flexor muscles with weak glutes'
    ],
    commonCauses: [
      'Prolonged sitting with unergonomic laptop, monitor, or chair heights',
      'Slouching on sofas or working from bed without lumbar support',
      'Muscle imbalances: tight Pectorals/Upper Trapezius and weak Rhomboids/Deep Neck Flexors',
      'Lack of micro-breaks and sedentary daily routines',
      'Carrying heavy asymmetric laptop bags or backpacks on one shoulder'
    ],
    whenToSeekAssessment: {
      clinicalIndicators: [
        'Postural aching that persists after work hours and prevents restorative sleep',
        'Visible forward head tilt or rounded shoulders that feel rigid to self-correct',
        'Tension headaches occurring more than twice a week after screen work'
      ],
      redFlags: [
        'Sudden weakness or loss of grip strength in the hands',
        'Numbness or pins-and-needles radiating into fingers',
        'Severe constant nighttime spine pain'
      ]
    },
    redFlags: [
      'Sudden hand weakness or drop attacks',
      'Numbness spreading into both arms',
      'Severe constant nighttime pain'
    ],
    howPhysiotherapyHelps: [
      'Releases tight anterior chest and neck structures using manual therapy and dry needling',
      'Activates inhibited middle/lower trapezius and deep cervical flexors',
      'Provides actionable workstation adjustments tailored to your specific Mumbai office or home desk',
      'Prevents structural spinal degenerative disc disease and chronic headaches'
    ],
    clinicalAssessment: [
      'Plumb line postural photography analysis from sagittal and coronal views',
      'Craniovertebral angle (CVA) measurement for forward head severity',
      'Pectoralis minor flexibility test and thoracic spine extension mobility',
      'Thomas test for hip flexor tightness and pelvic tilt evaluation',
      'Workstation ergonomic photo and video screening'
    ],
    physioTreatmentApproach: [
      'Myofascial trigger point release for tight pectorals and suboccipitals',
      'Thoracic extension mobilizations using foam rollers and mobility blocks',
      'Scapular retractor (rhomboid / middle trapezius) resistance training',
      'Chin tucks and deep cervical flexor endurance conditioning',
      'Custom ergonomic setup guidance: screen height, lumbar roll placement'
    ],
    rehabPhases: [
      { phase: 'Phase 1: Fascial Release & Postural Awareness', focus: 'Chest stretching, foam rolling, dynamic thoracic openers, hourly movement habit building.', duration: 'Weeks 1 – 2' },
      { phase: 'Phase 2: Scapular & Core Muscular Retraining', focus: 'Face pulls, band pull-aparts, prone Y-T-W drills, bird-dogs for lumbar-pelvic control.', duration: 'Weeks 3 – 5' },
      { phase: 'Phase 3: Sustained Ergonomic Endurance', focus: 'Postural endurance against fatigue, standing desk transitions, active workstation maintenance.', duration: 'Weeks 6 – 8' }
    ],
    selfManagement: {
      overview: 'Micro-breaks every 30 minutes and maintaining an eye-level screen height counteract forward-head slouching.',
      safeExercises: [
        { name: 'Doorway Chest Stretch', instruction: 'Place forearms on door frame at 90 degrees and gently step forward until stretch is felt across chest.', frequency: '3 sets of 20 seconds daily', purpose: 'Lengthens tight pectoralis minor.' },
        { name: 'Prone Y-T-W Shoulder Blade Pinches', instruction: 'Lie face down. Lift arms into Y, T, and W positions pinching shoulder blades together.', frequency: '10 repetitions each, twice daily', purpose: 'Strengthens middle and lower trapezius.' }
      ],
      dosAndDonts: [
        { do: 'Take a 30-second standing break every 30 minutes', dont: 'Sit slumped on a sofa working from a laptop on your lap' }
      ],
      ergonomicTips: ['Raise laptop screen to eye level using a stand and separate external keyboard.']
    },
    recoveryFactors: ['Adherence to daily movement breaks', 'Ergonomic workstation adjustments'],
    expectedRecovery: 'Most postural fatigue symptoms improve significantly within 2 to 3 weeks of targeted exercise and ergonomic adjustments.',
    homeVisitSuitability: 'Available across Mumbai; excellent for in-home workstation ergonomic assessments.',
    faqs: [
      { question: 'Do posture braces work?', answer: 'Braces provide brief sensory reminders but weaken your natural postural muscles over time. Active muscle strengthening is the only permanent solution.' }
    ],
    internalLinkChain: [
      { label: 'Posture & Ergonomics', target: 'condition/posture-ergonomics', type: 'condition', contextDescription: 'Desk strain and postural re-alignment.' },
      { label: 'Neck Pain', target: 'condition/neck-pain', type: 'condition', contextDescription: 'Relieving cervical strain caused by tech-neck.' },
      { label: 'Back Pain', target: 'condition/back-pain', type: 'condition', contextDescription: 'Lumbar spine decompression and posture correction.' },
      { label: 'Online Physiotherapy', target: 'online-physiotherapy', type: 'service', contextDescription: 'Virtual ergonomic desk assessment.' }
    ],
    relatedServices: [
      { name: 'Online Physiotherapy', pageKey: 'online-physiotherapy', reason: 'Remote ergonomic workstation evaluation.' },
      { name: 'Pain Management', pageKey: 'pain-management', reason: 'Relieving chronic upper back muscle knots.' }
    ],
    relatedConditions: [
      { name: 'Neck Pain & Cervical Spondylosis', conditionId: 'neck-pain', reason: 'Cervical extension strain directly relates to forward head posture.' },
      { name: 'Back Pain', conditionId: 'back-pain', reason: 'Slumped sitting strains lumbar intervertebral discs.' }
    ]
  },

  {
    id: 'stroke-rehab',
    slug: 'stroke-neuro-rehabilitation-physiotherapy-mumbai',
    name: 'Neuro Physiotherapy & Stroke Rehabilitation',
    category: 'Neurological',
    heroHeadline: 'Evidence-Based Stroke Recovery & Neuro-Physiotherapy in Mumbai',
    seoTitle: 'Stroke Rehabilitation Physiotherapy in Mumbai | Dr. Pawan Gupta (PT)',
    metaDescription: 'Specialized neuro-physiotherapy for post-stroke hemiplegia and paralysis in Mumbai by Dr. Pawan Gupta (PT). Neuroplasticity, Bobath approach, and independent walking.',
    quickSummary: 'Following a stroke (ischemic or hemorrhagic), prompt and intensive neuro-physiotherapy is crucial to harness brain neuroplasticity. Dr. Pawan Gupta (PT) provides home-based and clinic neuro-rehabilitation utilizing Bobath concepts, task-oriented gait re-education, neuromuscular electrical stimulation (NMES), and spasticity management across Mumbai.',
    primarySearchIntent: 'Neuro-physiotherapy for stroke recovery, paralysis rehabilitation, and hemiplegia walking training in Mumbai.',
    reviewedBy: 'Dr. Pawan Gupta (PT)',
    reviewerCredentials: 'B.P.Th, M.P.Th, Certified Neuro-Developmental Therapist (MIAP)',
    lastUpdated: 'August 2026',
    whatIsIt: 'Stroke causes focal neurological injury to brain regions governing motor control and sensation. Neuro-rehabilitation stimulates synaptogenesis and motor pathway reorganization through repetitive, goal-directed functional training.',
    symptoms: [
      'Unilateral weakness or paralysis of the face, arm, and leg (hemiplegia/hemiparesis)',
      'Muscle stiffness and spasticity in the affected upper and lower limbs',
      'Difficulty maintaining standing balance and fear of falling toward the weak side',
      'Circumducting or hitching gait pattern when walking',
      'Impaired hand function, coordination, and grip release'
    ],
    commonCauses: [
      'Ischemic cerebral infarction or intracerebral hemorrhage',
      'Post-neurosurgical rehabilitation for aneurysm or tumor resection'
    ],
    whenToSeekAssessment: {
      clinicalIndicators: [
        'Immediately upon medical stabilization post-stroke hospital discharge',
        'Difficulty rolling in bed, sitting upright, or standing independently'
      ],
      redFlags: [
        'Sudden recurrence of facial droop, slurred speech, or acute confusion (Urgent Stroke Recurrence Emergency)',
        'Calf tenderness, swelling, or redness (Deep Vein Thrombosis DVT Emergency)'
      ]
    },
    redFlags: [
      'Sudden new facial droop, slurred speech, or confusion (NEW STROKE EMERGENCY - DIAL 112)',
      'Calf pain, swelling, and redness (DVT)'
    ],
    howPhysiotherapyHelps: [
      'Stimulates brain neuroplasticity through thousands of repetitions of meaningful movement',
      'Prevents joint contractures and manages limb spasticity through prolonged positional stretching',
      'Restores independent sit-to-stand and safe household walking',
      'Empowers family members and caregivers with safe transfer techniques'
    ],
    clinicalAssessment: [
      'Fugl-Meyer Assessment (FMA) of motor recovery',
      'Modified Ashworth Scale (MAS) for spasticity quantification',
      'Berg Balance Scale for dynamic standing balance and fall risk',
      'Gait kinematics and sensory dermatome evaluation'
    ],
    physioTreatmentApproach: [
      'Bobath / Neuro-Developmental Treatment (NDT) facilitating normal movement patterns',
      'Task-oriented circuit training and constraint-induced movement therapy principles',
      'Functional Electrical Stimulation (FES) to treat foot drop and assist ankle dorsiflexion',
      'Trunk control and core balance training on Swiss balls'
    ],
    rehabPhases: [
      { phase: 'Phase 1: Bedside Mobility & Trunk Control', focus: 'Bed rolling, bridging, sitting balance, preventing shoulder subluxation, transfer training.', duration: 'Weeks 1 – 4' },
      { phase: 'Phase 2: Standing Balance & Early Stepping', focus: 'Weight-bearing on paretic leg, parallel bar walking, spasticity management, ankle-foot orthosis fitting.', duration: 'Weeks 4 – 12' },
      { phase: 'Phase 3: Community Walking & Arm Function', focus: 'Uneven terrain navigation, stair climbing, fine motor hand retraining, dual-task walking.', duration: 'Months 3 – 12+' }
    ],
    selfManagement: {
      overview: 'Continuous daily movement and proper limb positioning prevent shoulder subluxation and contractures.',
      safeExercises: [
        { name: 'Assisted Hand Clasp & Overhead Reach', instruction: 'Clasp fingers together with affected thumb on top; gently raise arms overhead while lying on back.', frequency: '10 repetitions, 3 times daily', purpose: 'Maintains shoulder range of motion and prevents subluxation.' }
      ],
      dosAndDonts: [
        { do: 'Support the affected arm on an armrest or pillow to protect the shoulder joint', dont: 'Pull forcefully on the weak arm when assisting the patient to stand' }
      ],
      ergonomicTips: ['Ensure bedroom pathways are wide, well-lit, and clear of loose rugs.']
    },
    recoveryFactors: ['Early initiation of rehabilitation within the first 3 months', 'High daily repetition of task-oriented practice'],
    expectedRecovery: 'The fastest recovery occurs during the first 3 to 6 months, though neuroplastic gains continue for years with persistent rehabilitation.',
    homeVisitSuitability: 'Highest priority. Dr. Pawan Gupta provides dedicated in-home neuro-physiotherapy across Mumbai directly at patient residences.',
    faqs: [
      { question: 'Is recovery possible months or years after a stroke?', answer: 'Yes! While early therapy is most rapid, neuroplasticity is a lifelong capacity. Structured task training can unlock new functional gains even years after stroke.' }
    ],
    internalLinkChain: [
      { label: 'Stroke Rehabilitation', target: 'condition/stroke-rehab', type: 'condition', contextDescription: 'Neuroplasticity and post-stroke recovery.' },
      { label: 'Neuro Physiotherapy', target: 'neuro-physiotherapy', type: 'service', contextDescription: 'Specialized neurological motor control therapy.' },
      { label: 'Home Physiotherapy', target: 'home-physiotherapy', type: 'service', contextDescription: 'Bedside therapy across Mumbai residences.' }
    ],
    relatedServices: [
      { name: 'Neuro Physiotherapy Mumbai', pageKey: 'neuro-physiotherapy', reason: 'Comprehensive neuro-rehabilitation services.' },
      { name: 'Home Physiotherapy', pageKey: 'home-physiotherapy', reason: 'Critical for patients with limited post-stroke mobility.' }
    ],
    relatedConditions: [
      { name: 'Parkinson\'s Disease Rehabilitation', conditionId: 'parkinsons-rehab', reason: 'Shared neurological movement and balance re-education.' },
      { name: 'Balance & Gait Rehabilitation', conditionId: 'balance-gait-rehab', reason: 'Fall prevention and stepping confidence.' }
    ]
  },

  {
    id: 'acl-rehab',
    slug: 'acl-reconstruction-rehabilitation-physiotherapy-mumbai',
    name: 'ACL Reconstruction & Ligament Rehabilitation',
    category: 'Post-Surgical',
    heroHeadline: 'Protocol-Driven ACL Reconstruction Recovery & Return-to-Sport in Mumbai',
    seoTitle: 'ACL Rehabilitation Physiotherapy in Mumbai | Dr. Pawan Gupta (PT)',
    metaDescription: 'Specialized ACL tear and post-reconstruction physiotherapy in Mumbai. Graft protection, quad hypertrophy, single-leg stability, and RTS hop testing.',
    quickSummary: 'Anterior Cruciate Ligament (ACL) reconstruction requires strict phase-wise rehabilitation to protect the biological healing graft while restoring full knee extension, rebuilding quadriceps strength, and re-training neuromuscular knee stability. Dr. Pawan Gupta (PT) guides patients from day-1 post-op through return-to-sport testing.',
    primarySearchIntent: 'Post-operative ACL reconstruction rehabilitation, terminal extension, and return-to-sport clearance in Mumbai.',
    reviewedBy: 'Dr. Pawan Gupta (PT)',
    reviewerCredentials: 'B.P.Th, M.P.Th (Musculoskeletal & Sports Specialist), Certified Orthopedic Rehab Specialist',
    lastUpdated: 'August 2026',
    whatIsIt: 'The ACL is the primary stabilizer preventing anterior translation of the tibia on the femur. When reconstructed using a graft, structured rehabilitation ensures graft incorporation and prevents re-injury.',
    symptoms: [
      'Post-surgical knee swelling, stiffness, and quadriceps muscle inhibition',
      'Hesitation or fear of loading the operated knee',
      'Difficulty achieving full 0° knee straightening',
      'Limping gait with bent knee walking pattern'
    ],
    commonCauses: [
      'Post-operative status following arthroscopic ACL reconstruction surgery',
      'Non-contact pivoting injuries in football, cricket, basketball, or kabaddi'
    ],
    whenToSeekAssessment: {
      clinicalIndicators: [
        'Immediately within days 1-3 following discharge from hospital',
        'Inability to fully straighten the operated knee to 0 degrees'
      ],
      redFlags: [
        'Calf swelling, redness, and deep calf tenderness (Deep Vein Thrombosis DVT Emergency)',
        'Persistent high fever and oozing from arthroscopy portals (Infection Emergency)'
      ]
    },
    redFlags: [
      'Calf swelling and deep pain (DVT screening)',
      'High fever or surgical wound oozing'
    ],
    howPhysiotherapyHelps: [
      'Achieves full 0° extension in weeks 1-2 to prevent permanent knee flexion contracture',
      'Eliminates quadriceps shut-down (arthrogenic muscle inhibition) using NMES',
      'Guides criteria-based return-to-sport progression rather than relying on arbitrary calendar time'
    ],
    clinicalAssessment: [
      'Goniometric measurement of knee hyperextension/extension and flexion',
      'Patellar mobility and surgical portal scar tissue inspection',
      'Limb Symmetry Index (LSI) hop test series'
    ],
    physioTreatmentApproach: [
      'Neuromuscular electrical stimulation (NMES) for immediate VMO quad activation',
      'Early restoration of full passive knee extension',
      'Closed-kinetic-chain progressive loading (leg press, wall squats)'
    ],
    rehabPhases: [
      { phase: 'Phase 1: Graft Protection & Terminal Extension', focus: 'Immediate 0° extension, patellar glides, quad sets with NMES, crutch weaning by week 3.', duration: 'Weeks 1 – 4' },
      { phase: 'Phase 2: Hypertrophy & Neuromuscular Control', focus: 'Full flexion recovery, bilateral to single-leg squats, stationary bike, balance pads.', duration: 'Weeks 5 – 12' },
      { phase: 'Phase 3: Straight-Line Running & Strength Equality', focus: 'Treadmill jogging progression, double-to-single leg landing mechanics, isolated quad work.', duration: 'Months 3 – 6' },
      { phase: 'Phase 4: Agility, Plyometrics & Return to Play', focus: 'Cutting drills, reactive deceleration, Limb Symmetry Index >90%, psychological readiness.', duration: 'Months 6 – 9+' }
    ],
    selfManagement: {
      overview: 'Prioritize full passive knee straightening and regular icing to control swelling during early weeks.',
      safeExercises: [
        { name: 'Prone Hangs for Extension', instruction: 'Lie on stomach with legs hanging off bed edge just above knees, allowing gravity to gently straighten the joint.', frequency: '5 minutes, 3 times daily', purpose: 'Restores full 0° terminal knee extension.' }
      ],
      dosAndDonts: [
        { do: 'Wear knee brace locked in extension as instructed by your surgeon', dont: 'Place a pillow underneath your knee while sleeping (causes permanent flexion contracture)' }
      ],
      ergonomicTips: ['Elevate entire leg with heel supported and knee unsupported when resting.']
    },
    recoveryFactors: ['Restoration of 0° extension in first 2 weeks', 'Achieving >90% limb strength symmetry'],
    expectedRecovery: 'Full functional daily activities in 3 to 4 months; return to high-level cutting sports in 9 to 12 months.',
    homeVisitSuitability: 'Critical for weeks 1 to 3 post-discharge when navigating stairs or taxis across Mumbai is difficult.',
    faqs: [
      { question: 'Why is 0° knee extension so critical after ACL surgery?', answer: 'A lack of full straight extension permanently disrupts walking gait, overloads the patellofemoral joint, and causes chronic anterior knee pain.' }
    ],
    internalLinkChain: [
      { label: 'ACL Rehabilitation', target: 'condition/acl-rehab', type: 'condition', contextDescription: 'Post-surgical ligament graft recovery.' },
      { label: 'Sports Physiotherapy', target: 'sports-physiotherapy', type: 'service', contextDescription: 'Return-to-sport testing and functional clearance.' },
      { label: 'Post-Surgical Rehabilitation', target: 'post-surgical-rehab', type: 'service', contextDescription: 'Comprehensive surgical protocol execution.' }
    ],
    relatedServices: [
      { name: 'Sports Physiotherapy Mumbai', pageKey: 'sports-physiotherapy', reason: 'High-level athletic testing and clearance.' },
      { name: 'Post-Surgical Rehabilitation', pageKey: 'post-surgical-rehab', reason: 'Structured orthopedic protocol rehabilitation.' }
    ],
    relatedConditions: [
      { name: 'Sports Injuries & Sprains', conditionId: 'sports-injuries', reason: 'Primary athletic injury mechanism.' },
      { name: 'Knee Pain & Meniscus Tears', conditionId: 'knee-pain', reason: 'Knee joint mechanics and cartilage preservation.' }
    ]
  },

  {
    id: 'parkinsons-rehab',
    slug: 'parkinsons-disease-rehabilitation-physiotherapy-mumbai',
    name: 'Parkinson\'s Disease Rehabilitation',
    category: 'Neurological',
    heroHeadline: 'Specialized Parkinson\'s Movement & Fall Prevention Therapy in Mumbai',
    seoTitle: 'Parkinson\'s Physiotherapy in Mumbai | Dr. Pawan Gupta (PT)',
    metaDescription: 'Evidence-based physiotherapy for Parkinson’s disease in Mumbai. Large amplitude movement training (LSVT principles), freezing-of-gait cues, and fall prevention.',
    quickSummary: 'Parkinson’s disease is a neurodegenerative condition causing tremors, rigidity, bradykinesia (slowness of movement), and postural instability. Dedicated neuro-physiotherapy uses high-amplitude movement training, sensory cueing, and dual-task training to overcome movement freezing and maintain active mobility.',
    primarySearchIntent: 'Physiotherapy for Parkinson\'s disease, freezing of gait, and fall prevention in Mumbai.',
    reviewedBy: 'Dr. Pawan Gupta (PT)',
    reviewerCredentials: 'B.P.Th, M.P.Th, Certified Neuro-Rehabilitation Practitioner',
    lastUpdated: 'August 2026',
    whatIsIt: 'Dopamine depletion in the basal ganglia alters automatic motor programs, causing small shuffling steps, difficulty initiating movement, and postural instability.',
    symptoms: [
      'Shuffling gait with reduced arm swing and forward stooped posture',
      'Freezing of gait (feeling like feet are glued to the floor, especially at doorways)',
      'Muscle stiffness (cogwheel rigidity) in arms, legs, and trunk',
      'Difficulty rising from a chair or rolling over in bed at night',
      'Tremors in hands or jaw at rest'
    ],
    commonCauses: ['Idiopathic Parkinson’s disease and related parkinsonian movement syndromes'],
    whenToSeekAssessment: {
      clinicalIndicators: ['Noticeable shortening of walking stride or history of near-falls', 'Difficulty standing from chairs independently'],
      redFlags: ['Sudden rapid deterioration over days (rule out infection)', 'Frequent unexplained backward falls']
    },
    redFlags: ['Sudden acute decline in mobility', 'Frequent backward falls'],
    howPhysiotherapyHelps: [
      'Uses high-amplitude movement training (LSVT BIG concepts) to recalibrate movement scale',
      'Teaches auditory and visual cueing to bypass impaired basal ganglia pathways',
      'Improves dynamic balance and cuts fall risk by up to 50%'
    ],
    clinicalAssessment: [
      'Timed Up and Go (TUG) cognitive and motor dual-task testing',
      'Berg Balance Scale for fall probability estimation',
      'Analysis of stepping cadence, stride length, and freezing episodes'
    ],
    physioTreatmentApproach: [
      'Large amplitude movements to recalibrate movement scale',
      'Visual (floor tape/laser) and auditory (metronome) rhythmic cueing',
      'Trunk rotational exercises and thoracic extension stretching',
      'Caregiver training for safe assisted standing and home fall hazard removal'
    ],
    rehabPhases: [
      { phase: 'Phase 1: Mobility & Amplitude Reset', focus: 'Big exaggerated stepping, wide arm swings, daily trunk rotations, home safety audit.', duration: 'Weeks 1 – 4' },
      { phase: 'Phase 2: Dynamic Balance & Freezing Strategies', focus: 'Auditory cue training, obstacle navigation, dual-task stepping, chair transfer drills.', duration: 'Weeks 4 – 12' },
      { phase: 'Phase 3: Long-Term Functional Maintenance', focus: 'Ongoing home exercise routine, group mobility classes, caregiver reinforcement.', duration: 'Continuous' }
    ],
    selfManagement: {
      overview: 'Think BIG movements. Focus on exaggerated arm swings and high knee lifting while walking.',
      safeExercises: [
        { name: 'Seated Big Trunk Rotations', instruction: 'Sit tall, reach both arms wide to the right turning head and torso, hold 5 seconds, repeat to left.', frequency: '10 repetitions each side, twice daily', purpose: 'Counteracts spinal rigidity.' }
      ],
      dosAndDonts: [
        { do: 'Use rhythmic counting (1-2-1-2) or musical beat to unfreeze steps', dont: 'Look down at your feet while walking; keep eyes level' }
      ],
      ergonomicTips: ['Remove loose rugs and door saddles that trigger freezing episodes.']
    },
    recoveryFactors: ['Regularity of high-amplitude movement practice', 'Timely medication timing synchronization with therapy'],
    expectedRecovery: 'Noticeable reduction in freezing episodes and increased stride confidence within 3 to 4 weeks of cueing therapy.',
    homeVisitSuitability: 'Extremely well-suited for home visits across Mumbai, allowing real-world training in patient living rooms and hallways.',
    faqs: [
      { question: 'Can physiotherapy reverse Parkinson\'s disease?', answer: 'While it cannot alter the dopamine deficit, intensive therapy trains alternative brain circuits, maintains muscle strength, and prevents debilitating falls.' }
    ],
    internalLinkChain: [
      { label: 'Parkinson\'s Rehabilitation', target: 'condition/parkinsons-rehab', type: 'condition', contextDescription: 'Movement disorder and freezing therapy.' },
      { label: 'Neuro Physiotherapy', target: 'neuro-physiotherapy', type: 'service', contextDescription: 'Neurological mobility retraining.' },
      { label: 'Home Physiotherapy', target: 'home-physiotherapy', type: 'service', contextDescription: 'In-home fall prevention across Mumbai.' }
    ],
    relatedServices: [
      { name: 'Neuro Physiotherapy Mumbai', pageKey: 'neuro-physiotherapy', reason: 'Comprehensive movement disorder care.' },
      { name: 'Home Physiotherapy', pageKey: 'home-physiotherapy', reason: 'Safe in-home therapy for seniors.' }
    ],
    relatedConditions: [
      { name: 'Balance & Gait Rehabilitation', conditionId: 'balance-gait-rehab', reason: 'Dynamic balance training.' },
      { name: 'Senior Citizen Rehabilitation', conditionId: 'senior-rehab', reason: 'Preserving everyday functional independence.' }
    ]
  },

  {
    id: 'knee-replacement-rehab',
    slug: 'knee-replacement-rehabilitation-tkr-physiotherapy-mumbai',
    name: 'Total Knee Replacement (TKR) Rehabilitation',
    category: 'Post-Surgical',
    heroHeadline: 'Surgeon-Approved Post-Total Knee Replacement Care at Home & Clinic in Mumbai',
    seoTitle: 'Knee Replacement Physiotherapy in Mumbai | Dr. Pawan Gupta (PT)',
    metaDescription: 'Surgeon-recommended Total Knee Replacement (TKR) physiotherapy in Mumbai. Zero degree extension protocols, swelling control, and safe stair climbing.',
    quickSummary: 'Following Total Knee Replacement (TKR) surgery, timely physiotherapy is the cornerstone of a successful outcome. Dr. Pawan Gupta (PT) delivers structured home-based and clinic rehabilitation to control surgical edema, prevent scar adhesions, restore 0° extension and 120° flexion, and guide safe walking without walking frames.',
    primarySearchIntent: 'Post-operative Total Knee Replacement (TKR) rehabilitation, flexion restoration, and home recovery in Mumbai.',
    reviewedBy: 'Dr. Pawan Gupta (PT)',
    reviewerCredentials: 'B.P.Th, M.P.Th (Musculoskeletal Specialist), MIAP',
    lastUpdated: 'August 2026',
    whatIsIt: 'Total Knee Arthroplasty replaces worn arthritic bone ends with metal and polyethylene implants. Immediate post-operative therapy prevents joint stiffness, restores quadriceps firing, and re-educates natural walking.',
    symptoms: [
      'Severe tightness and post-surgical swelling around the knee and calf',
      'Difficulty bearing full body weight through the operated leg',
      'Lag in actively lifting the leg straight off the bed (extensor lag)',
      'Stiffness when trying to bend past 90 degrees'
    ],
    commonCauses: ['Post-operative status following unilateral or bilateral Total Knee Replacement (TKR)'],
    whenToSeekAssessment: {
      clinicalIndicators: ['Within 24 to 48 hours of discharge from hospital', 'Difficulty achieving 90° knee bend by day 10'],
      redFlags: ['Warm red painful swelling in calf accompanied by shortness of breath (Deep Vein Thrombosis Emergency)', 'Wound oozing or persistent fever']
    },
    redFlags: ['Calf pain, swelling, and redness (DVT)', 'Fever or surgical wound discharge'],
    howPhysiotherapyHelps: [
      'Restores full 0° knee extension and >115° functional flexion',
      'Eliminates walker dependence, progressing safely to stick and unassisted walking',
      'Controls surgical swelling and manages incision scar tissue mobility'
    ],
    clinicalAssessment: [
      'Goniometric active and passive knee extension and flexion degrees',
      'Inspection of surgical incision healing and calf swelling girth',
      'Straight leg raise without knee lag evaluation'
    ],
    physioTreatmentApproach: [
      'Cryotherapy and elevation for surgical swelling reduction',
      'Patellar mobilizations to maintain free gliding of the kneecap',
      'Active-assisted heel slides and seated knee flexion progressions',
      'Step-up and step-down training for independent home stair climbing'
    ],
    rehabPhases: [
      { phase: 'Phase 1: In-Home Acute Recovery (Days 1–14)', focus: 'Achieving 0° extension, 90° flexion, swelling control, transitioning from walker to walking stick.', duration: 'Weeks 1 – 2' },
      { phase: 'Phase 2: Range Expansion & Independent Walking (Weeks 3–6)', focus: 'Reaching 110°-120° flexion, quad and glute strengthening, unassisted indoor walking.', duration: 'Weeks 3 – 6' },
      { phase: 'Phase 3: Community Mobility & Stairs (Weeks 7–12)', focus: 'Outdoor walking, reciprocal stair climbing (one foot per step), stationary cycling.', duration: 'Weeks 7 – 12' }
    ],
    selfManagement: {
      overview: 'Perform gentle ankle pumps and quad sets frequently throughout the day to prevent blood clots and muscle atrophy.',
      safeExercises: [
        { name: 'Ankle Pumps', instruction: 'Point toes down then pull toes up toward shins rhythmically.', frequency: '20 repetitions every waking hour', purpose: 'Circulates lower limb venous blood.' }
      ],
      dosAndDonts: [
        { do: 'Keep operated leg elevated with knee straight when resting', dont: 'Place a pillow underneath the knee' }
      ],
      ergonomicTips: ['Use a firm, high-seat chair with sturdy armrests.']
    },
    recoveryFactors: ['Consistent daily home stretching compliance', 'Swelling control in first 3 weeks'],
    expectedRecovery: 'Indoor walking with stick by week 3; full unassisted walking and stair climbing by week 6-8.',
    homeVisitSuitability: 'Essential for the first 2 to 4 weeks post-discharge across Mumbai to avoid painful vehicle transfers and stairs.',
    faqs: [
      { question: 'How painful is physiotherapy after knee replacement?', answer: 'Gentle stretching causes temporary mild tightness, but aggressive forced bending is avoided. Dr. Pawan Gupta uses calibrated manual mobilizations for comfort.' }
    ],
    internalLinkChain: [
      { label: 'Knee Replacement Rehabilitation', target: 'condition/knee-replacement-rehab', type: 'condition', contextDescription: 'Post-TKR surgical protocol recovery.' },
      { label: 'Post-Surgical Rehabilitation', target: 'post-surgical-rehab', type: 'service', contextDescription: 'Comprehensive surgical protocol execution.' },
      { label: 'Home Physiotherapy', target: 'home-physiotherapy', type: 'service', contextDescription: 'Doorstep post-op care across Mumbai.' }
    ],
    relatedServices: [
      { name: 'Post-Surgical Rehabilitation', pageKey: 'post-surgical-rehab', reason: 'Structured joint replacement recovery.' },
      { name: 'Home Physiotherapy Mumbai', pageKey: 'home-physiotherapy', reason: 'Doorstep therapy for post-discharge patients.' }
    ],
    relatedConditions: [
      { name: 'Knee Pain & Osteoarthritis', conditionId: 'knee-pain', reason: 'The pre-surgical condition leading to knee replacement.' },
      { name: 'Hip Replacement Rehabilitation', conditionId: 'hip-replacement-rehab', reason: 'Shared post-arthroplasty mobility principles.' }
    ]
  },

  {
    id: 'hip-replacement-rehab',
    slug: 'hip-replacement-rehabilitation-thr-physiotherapy-mumbai',
    name: 'Total Hip Replacement (THR) Rehabilitation',
    category: 'Post-Surgical',
    heroHeadline: 'Surgeon-Coordinated Total Hip Replacement (THR) Physical Therapy in Mumbai',
    seoTitle: 'Hip Replacement Physiotherapy in Mumbai | Dr. Pawan Gupta (PT)',
    metaDescription: 'Specialized Total Hip Replacement (THR) physiotherapy in Mumbai by Dr. Pawan Gupta (PT). Dislocation precaution education, abductor strengthening, and smooth gait.',
    quickSummary: 'Total Hip Replacement (THR) relieves agonizing hip osteoarthritis pain. Structured rehabilitation ensures patients adhere to essential dislocation precautions, reactivate weakened gluteal abductor muscles, eliminate limping (Trendelenburg gait), and regain independence in daily activities.',
    primarySearchIntent: 'Post-operative Total Hip Replacement (THR) recovery, precautions, and walking therapy in Mumbai.',
    reviewedBy: 'Dr. Pawan Gupta (PT)',
    reviewerCredentials: 'B.P.Th, M.P.Th (Musculoskeletal Specialist), MIAP',
    lastUpdated: 'August 2026',
    whatIsIt: 'In a hip replacement, the damaged femoral head and acetabulum are replaced with prosthetic components. Post-op therapy strengthens the gluteus medius/maximus muscles and restores symmetrical pelvic kinematics.',
    symptoms: [
      'Soreness and bruising around the hip and buttock region',
      'Limping or dropping of the opposite hip during walking (Trendelenburg sign)',
      'Difficulty standing from low chairs or getting in and out of cars'
    ],
    commonCauses: ['Post-operative status following Total Hip Replacement (THR) or hip hemiarthroplasty'],
    whenToSeekAssessment: {
      clinicalIndicators: ['Within 48 hours of hospital discharge', 'Persistent limping when walking with cane'],
      redFlags: ['Sudden shortening or outward rotation of the leg with severe groin pain (Suspected Hip Dislocation Emergency)', 'Calf pain, swelling, or redness (DVT Emergency)']
    },
    redFlags: ['Sudden leg shortening or extreme rotation (Hip Dislocation)', 'Calf pain and swelling (DVT)'],
    howPhysiotherapyHelps: [
      'Educates patients on critical dislocation precautions (posterior vs anterior approaches)',
      'Eliminates Trendelenburg limping by strengthening gluteus medius abductors',
      'Restores safe transfers for chairs, beds, and vehicles in Mumbai'
    ],
    clinicalAssessment: [
      'Hip flexion, abduction, and extension range of motion',
      'Gluteus medius strength and pelvic levelness during single-leg stance',
      'Adherence check for surgical hip precautions'
    ],
    physioTreatmentApproach: [
      'Education on hip precautions (avoiding flexion >90°, crossing legs, extreme internal rotation)',
      'Isometric and active-assisted gluteal and quadriceps sets',
      'Standing hip abduction drills to eradicate limping'
    ],
    rehabPhases: [
      { phase: 'Phase 1: Safe Mobility & Bed Transfers', focus: 'Hip precautions education, isometric glute sets, safe walker walking, ankle pumps.', duration: 'Weeks 1 – 2' },
      { phase: 'Phase 2: Gluteal Activation & Limp Elimination', focus: 'Standing hip abductions, bridging, weight-shifting drills, cane progression.', duration: 'Weeks 3 – 6' },
      { phase: 'Phase 3: Functional Independence & Balance', focus: 'Independent unassisted walking, step climbing, low-impact exercise resumption.', duration: 'Weeks 7 – 12' }
    ],
    selfManagement: {
      overview: 'Strictly observe hip precautions for the first 6-12 weeks: do not bend hip past 90 degrees or cross legs.',
      safeExercises: [
        { name: 'Isometric Gluteal Squeezes', instruction: 'Squeeze buttock muscles firmly together for 5 seconds while lying in bed.', frequency: '10 repetitions, 3 times daily', purpose: 'Reactivates gluteal muscles safely.' }
      ],
      dosAndDonts: [
        { do: 'Sit on elevated, firm chairs with hips positioned higher than knees', dont: 'Bend forward past 90° to tie shoelaces or pick up items from the floor' }
      ],
      ergonomicTips: ['Use a long-handled reacher and shoehorn to avoid deep hip flexion.']
    },
    recoveryFactors: ['Strict adherence to hip precautions', 'Gluteus medius strengthening'],
    expectedRecovery: 'Walking with cane by 3 to 4 weeks; full unassisted walking by 8 to 12 weeks.',
    homeVisitSuitability: 'Highly recommended for the initial 2 to 4 weeks across Mumbai residences.',
    faqs: [
      { question: 'What are the main precautions after a posterior hip replacement?', answer: 'Do not bend the operated hip past 90 degrees, do not cross your legs, and do not twist your foot inward when sitting or sleeping for the first 6 to 12 weeks.' }
    ],
    internalLinkChain: [
      { label: 'Hip Replacement Rehabilitation', target: 'condition/hip-replacement-rehab', type: 'condition', contextDescription: 'Post-THR surgical protocol recovery.' },
      { label: 'Post-Surgical Rehabilitation', target: 'post-surgical-rehab', type: 'service', contextDescription: 'Orthopedic surgical rehabilitation.' },
      { label: 'Home Physiotherapy', target: 'home-physiotherapy', type: 'service', contextDescription: 'Doorstep post-discharge care across Mumbai.' }
    ],
    relatedServices: [
      { name: 'Post-Surgical Rehabilitation', pageKey: 'post-surgical-rehab', reason: 'Specialized joint arthroplasty protocols.' },
      { name: 'Home Physiotherapy Mumbai', pageKey: 'home-physiotherapy', reason: 'Safe in-home recovery after surgery.' }
    ],
    relatedConditions: [
      { name: 'Knee Replacement Rehabilitation', conditionId: 'knee-replacement-rehab', reason: 'Lower limb joint arthroplasty recovery.' },
      { name: 'Arthritis & Joint Care', conditionId: 'arthritis', reason: 'Underlying hip degenerative disease.' }
    ]
  },

  {
    id: 'balance-gait-rehab',
    slug: 'balance-gait-rehabilitation-physiotherapy-mumbai',
    name: 'Balance & Gait Rehabilitation',
    category: 'Neurological',
    heroHeadline: 'Evidence-Based Balance Training & Gait Re-Education in Mumbai',
    seoTitle: 'Balance & Gait Training Physiotherapy in Mumbai | Dr. Pawan Gupta (PT)',
    metaDescription: 'Specialized balance and gait physiotherapy in Mumbai by Dr. Pawan Gupta (PT). Reduce fall risk, retrain walking confidence, and eliminate assistive device reliance.',
    quickSummary: 'Balance and gait impairments stem from vestibular disorders, peripheral neuropathy, stroke, or age-related muscle weakness. Specialized physiotherapy uses sensory re-weighting, proprioceptive foam exercises, and biomechanical gait retraining to restore stable, confident walking.',
    primarySearchIntent: 'Balance retraining, fall prevention, and gait correction physiotherapy in Mumbai.',
    reviewedBy: 'Dr. Pawan Gupta (PT)',
    reviewerCredentials: 'B.P.Th, M.P.Th, Certified Balance & Fall Prevention Specialist',
    lastUpdated: 'August 2026',
    whatIsIt: 'Maintaining balance requires integration of visual, vestibular, and somatosensory inputs. Deficits in any system increase body sway and create unsteady, hesitant walking.',
    symptoms: [
      'Feeling unsteady or lightheaded when turning quickly or walking in low light',
      'History of near-misses, stumbling, or falls in the past 12 months',
      'Need to hold onto furniture or walls while moving through the house',
      'Shuffling gait with uneven stride lengths and wide base of support'
    ],
    commonCauses: [
      'Peripheral neuropathy (frequent in diabetic patients) reducing foot sensory feedback',
      'Vestibular hypofunction or benign paroxysmal positional vertigo (BPPV)',
      'Post-stroke hemiparetic gait or Parkinsonian movement patterns',
      'Age-related lower extremity muscle atrophy and joint stiffness'
    ],
    whenToSeekAssessment: {
      clinicalIndicators: ['Any fall or near-fall episode in the past 6 months', 'Hesitation when stepping onto uneven pavements or curbs'],
      redFlags: ['Sudden onset severe vertigo with double vision or slurred speech (Brainstem Stroke Emergency)', 'Unexplained sudden drop attacks without warning']
    },
    redFlags: ['Sudden vertigo with visual disturbances', 'Drop attacks with loss of balance'],
    howPhysiotherapyHelps: [
      'Sharpens sensory integration and ankle proprioception on high-density foam',
      'Reduces fall incidence by over 50% in community-dwelling older adults',
      'Optimizes proper measurement and use of assistive canes and walkers'
    ],
    clinicalAssessment: [
      'Berg Balance Scale (BBS) and Dynamic Gait Index (DGI)',
      'Romberg and Sharpened Romberg tests with eyes open and closed',
      'Timed Up and Go (TUG) fall risk test'
    ],
    physioTreatmentApproach: [
      'Proprioceptive retraining on high-density foam pads and wobble boards',
      'Vestibular ocular reflex (VOR) gaze stabilization exercises',
      'Tandem stance, single-leg balancing, and backward walking drills'
    ],
    rehabPhases: [
      { phase: 'Phase 1: Static Balance & Fall Hazard Elimination', focus: 'Feet-together stance, eye-closed challenges, home clutter removal, grab rail advice.', duration: 'Weeks 1 – 3' },
      { phase: 'Phase 2: Dynamic Balance & Step Perturbations', focus: 'Tandem walking, stepping over obstacles, head turns while walking, weight shifts.', duration: 'Weeks 4 – 8' },
      { phase: 'Phase 3: Community Terrain Navigation', focus: 'Uneven pavement walking, curb negotiation, confidence building for Mumbai outdoors.', duration: 'Weeks 8 – 12' }
    ],
    selfManagement: {
      overview: 'Daily standing balance practice near a sturdy counter or wall trains ankle stabilizing reflexes safely.',
      safeExercises: [
        { name: 'Tandem Stance (Heel-to-Toe)', instruction: 'Stand with one foot directly in front of the other touching heel to toe, holding onto a counter for safety. Hold for 20 seconds.', frequency: '3 sets per side daily', purpose: 'Narrows base of support to sharpen dynamic balance.' }
      ],
      dosAndDonts: [
        { do: 'Ensure home hallways and bathrooms have nightlights', dont: 'Walk in dark rooms or rush to answer phone calls without turning on lights' }
      ],
      ergonomicTips: ['Install sturdy grab rails in bathrooms near the toilet and shower.']
    },
    recoveryFactors: ['Consistent daily balance practice', 'Proper corrective eyewear and footwear'],
    expectedRecovery: 'Measurable reductions in fall risk and significant increases in walking speed within 4 to 6 weeks.',
    homeVisitSuitability: 'Ideal for Mumbai senior citizens and frail patients who cannot navigate busy outdoor streets safely.',
    faqs: [
      { question: 'How can balance exercises prevent falls in seniors?', answer: 'Balance exercises strengthen ankle stabilizing muscles and sharpen neural reflexes, allowing the body to react swiftly and catch itself if a stumble occurs.' }
    ],
    internalLinkChain: [
      { label: 'Balance & Gait Rehabilitation', target: 'condition/balance-gait-rehab', type: 'condition', contextDescription: 'Fall prevention and dynamic stepping stability.' },
      { label: 'Neuro Physiotherapy', target: 'neuro-physiotherapy', type: 'service', contextDescription: 'Neuromuscular gait retraining.' },
      { label: 'Home Physiotherapy', target: 'home-physiotherapy', type: 'service', contextDescription: 'Safe in-home balance coaching across Mumbai.' }
    ],
    relatedServices: [
      { name: 'Neuro Physiotherapy Mumbai', pageKey: 'neuro-physiotherapy', reason: 'Neuromuscular balance retraining.' },
      { name: 'Home Physiotherapy', pageKey: 'home-physiotherapy', reason: 'In-home fall risk elimination.' }
    ],
    relatedConditions: [
      { name: 'Senior Citizen Rehabilitation', conditionId: 'senior-rehab', reason: 'Geriatric independence and strength.' },
      { name: 'Parkinson\'s Disease Rehabilitation', conditionId: 'parkinsons-rehab', reason: 'Gait freezing and posture control.' }
    ]
  },

  {
    id: 'senior-rehab',
    slug: 'senior-citizen-geriatric-rehabilitation-mumbai',
    name: 'Senior Citizen & Geriatric Rehabilitation',
    category: 'Post-Surgical',
    heroHeadline: 'Compassionate In-Home Senior Citizen Physiotherapy Across Mumbai',
    seoTitle: 'Senior Citizen Physiotherapy in Mumbai | Dr. Pawan Gupta (PT)',
    metaDescription: 'Dedicated geriatric physiotherapy for elderly citizens in Mumbai. Gentle arthritis relief, fall prevention, bedside mobility, and dignified independence at home.',
    quickSummary: 'Aging brings natural reductions in muscle mass (sarcopenia), bone density (osteoporosis), and joint flexibility. Dr. Pawan Gupta (PT) provides gentle, encouraging, and empowering geriatric physiotherapy in the comfort of patients’ Mumbai homes, helping senior citizens remain safe, mobile, and independent.',
    primarySearchIntent: 'In-home geriatric physiotherapy for senior citizens, fall prevention, and mobility in Mumbai.',
    reviewedBy: 'Dr. Pawan Gupta (PT)',
    reviewerCredentials: 'B.P.Th, M.P.Th, Senior Care & Geriatric Rehabilitation Specialist',
    lastUpdated: 'August 2026',
    whatIsIt: 'Geriatric rehabilitation is a specialized field of physical therapy tailored to the unique physiological, medical, and emotional needs of older adults, focusing on pain relief, functional independence, and safety.',
    symptoms: [
      'Difficulty standing up from a low chair, bed, or sofa without assistance',
      'Severe morning stiffness and joint pain from multiple-joint osteoarthritis',
      'Generalized weakness, loss of stamina, and shortness of breath with mild walking',
      'Fear of falling that causes seniors to avoid walking and become bedridden'
    ],
    commonCauses: [
      'Age-related sarcopenia and sedentary deconditioning',
      'Osteoarthritis of knees, hips, and spine',
      'Post-prolonged hospitalization or bedrest recovery',
      'Osteoporosis and compression fracture management'
    ],
    whenToSeekAssessment: {
      clinicalIndicators: ['Hesitation or unsteadiness when walking independently', 'Difficulty with basic chair and toilet transfers'],
      redFlags: ['Sudden confusion or inability to bear weight (Urgent Physician Evaluation)', 'Severe bone pain following a minor slip (Fragility Fracture)']
    },
    redFlags: ['Sudden confusion or inability to bear weight', 'Acute bone pain after minor bump'],
    howPhysiotherapyHelps: [
      'Maintains sit-to-stand and bathroom independence without burdening family caregivers',
      'Relieves chronic arthritic joint aches through gentle active-assisted motion and heat',
      'Boosts walking stamina and restores self-confidence'
    ],
    clinicalAssessment: [
      '30-Second Chair Stand test for lower limb functional strength',
      'Timed Up and Go test for fall risk evaluation',
      'Range of motion, joint contracture, and skin integrity examination',
      'Comprehensive home safety and hazard assessment'
    ],
    physioTreatmentApproach: [
      'Gentle passive and active-assisted range-of-motion to lubricate arthritic joints',
      'Sit-to-stand repetition training to preserve bathroom independence',
      'Safe transfer training for caregivers (bed to wheelchair to toilet)',
      'Light resistance band and bodyweight strength maintenance'
    ],
    rehabPhases: [
      { phase: 'Phase 1: Gentle Mobilization & Pain Comfort', focus: 'Bedside mobility, joint lubrication, soothing heat therapy, breathing exercises.', duration: 'Weeks 1 – 2' },
      { phase: 'Phase 2: Transfer Independence & Strength', focus: 'Sit-to-stand mastery, standing balance with support, walking endurance in hallway.', duration: 'Weeks 3 – 6' },
      { phase: 'Phase 3: Safe Everyday Independence', focus: 'Caregiver guided daily home routine, confidence building, preventing fall risks.', duration: 'Continuous' }
    ],
    selfManagement: {
      overview: 'Gentle, regular movement preserves joint mobility and prevents muscle wasting in older age.',
      safeExercises: [
        { name: 'Supported Sit-to-Stands', instruction: 'From a firm chair with armrests, lean slightly forward, push through feet and arms to stand tall, then sit back down slowly.', frequency: '8 to 10 repetitions, twice daily', purpose: 'Builds functional thigh and gluteal strength.' }
      ],
      dosAndDonts: [
        { do: 'Wear non-slip supportive slippers inside the house', dont: 'Walk in loose socks on smooth marble or tile floors' }
      ],
      ergonomicTips: ['Elevate low seating using firm cushions so knees are level with or slightly below hips.']
    },
    recoveryFactors: ['Daily adherence to gentle exercise', 'Family and caregiver encouragement'],
    expectedRecovery: 'Measurable improvements in standing strength, pain relief, and renewed walking confidence within 3 to 4 weeks.',
    homeVisitSuitability: 'Highest priority. Available across South Mumbai, Central Mumbai, Western Suburbs, Eastern Suburbs, and Thane directly at patient residences.',
    faqs: [
      { question: 'Why is home visit physiotherapy better for senior citizens in Mumbai?', answer: 'Home therapy eliminates the trauma of stairs, rickshaw vibrations, and traffic. Dr. Pawan Gupta trains seniors directly in their own living space with their own chairs and beds.' }
    ],
    internalLinkChain: [
      { label: 'Senior Citizen Rehabilitation', target: 'condition/senior-rehab', type: 'condition', contextDescription: 'Geriatric strength and dignity at home.' },
      { label: 'Home Physiotherapy', target: 'home-physiotherapy', type: 'service', contextDescription: 'Dedicated doorstep care across Mumbai residences.' },
      { label: 'Balance & Gait Rehabilitation', target: 'condition/balance-gait-rehab', type: 'condition', contextDescription: 'Fall prevention and stepping stability.' }
    ],
    relatedServices: [
      { name: 'Home Physiotherapy Mumbai', pageKey: 'home-physiotherapy', reason: 'Doorstep care specifically designed for elderly patients.' },
      { name: 'Pain Management Physiotherapy', pageKey: 'pain-management', reason: 'Gentle soothing pain relief for chronic arthritis.' }
    ],
    relatedConditions: [
      { name: 'Arthritis & Joint Degeneration', conditionId: 'arthritis', reason: 'Joint preservation for senior citizens.' },
      { name: 'Balance & Gait Rehabilitation', conditionId: 'balance-gait-rehab', reason: 'Fall prevention and dynamic stepping.' }
    ]
  }
];

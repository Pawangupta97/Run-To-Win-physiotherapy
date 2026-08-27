export interface ClinicalArticle {
  id: string;
  slug: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  category: 'Spine Care' | 'Joint Health' | 'Post-Surgical' | 'Ergonomics' | 'Neurology' | 'Sports Rehab';
  readTime: string;
  publishedDate: string;
  author: string;
  authorTitle: string;
  authorCredentials: string;
  keyTakeaway: string; // concise answer for AI Overview / featured snippet
  contentSections: {
    heading: string;
    body: string;
    bulletPoints?: string[];
  }[];
  clinicalReferences?: string[];
  targetConditionId?: string;
  faqs?: { question: string; answer: string }[];
}

export const CLINICAL_ARTICLES: ClinicalArticle[] = [
  {
    id: 'when-to-see-physiotherapist-for-back-pain',
    slug: 'when-to-see-physiotherapist-for-back-pain',
    title: 'When Should You See a Physiotherapist for Lower Back Pain vs Waiting?',
    seoTitle: 'When to See a Physiotherapist for Back Pain | Dr. Pawan Gupta (PT)',
    metaDescription: 'Learn when to consult a physiotherapist for lower back pain, warning red flags, and how early physical therapy prevents chronic disc degeneration in Mumbai.',
    category: 'Spine Care',
    readTime: '5 min read',
    publishedDate: 'August 2026',
    author: 'Dr. Pawan Gupta (PT)',
    authorTitle: 'Consultant Musculoskeletal Physiotherapist',
    authorCredentials: 'B.P.Th, M.P.Th, MIAP',
    keyTakeaway: 'You should see a physiotherapist for back pain if your symptoms persist past 3–5 days, radiate down into your glutes or legs (sciatica), wake you from sleep, or cause morning stiffness lasting over 30 minutes. Early physical therapy within the first 14 days reduces the risk of chronic disability by over 50% compared to passive bed rest.',
    contentSections: [
      {
        heading: 'Acute vs Chronic Back Pain: The 3-5 Day Rule',
        body: 'Mild muscular strains after unusual physical activity often settle with gentle walking and active rest within 48 to 72 hours. However, if pain remains constant, worsens with sitting, or limits your ability to bend and walk, mechanical spinal derangement (such as a disc protrusion) is likely present and requires professional assessment.',
        bulletPoints: [
          'Pain lasting more than 3-5 days without spontaneous improvement',
          'Sharp shooting or tingling sensations traveling down either leg (sciatica)',
          'Pain provoked by coughing, sneezing, or sitting in office chairs',
          'Recurrent episodes of back tightness occurring every few months',
        ],
      },
      {
        heading: 'Red Flag Symptoms Requiring Immediate Medical Attention',
        body: 'Certain spinal symptoms indicate severe neurological compression or underlying systemic conditions requiring emergency medical review before standard physical therapy:',
        bulletPoints: [
          'Sudden changes in bowel or bladder control (incontinence or retention)',
          'Numbness in the saddle area (inner thighs and groin)',
          'Progressive loss of muscular strength in the legs (e.g. foot drop)',
          'Back pain accompanied by unexplained fever, chills, or rapid weight loss',
        ],
      },
      {
        heading: 'How Early Physiotherapy Prevents Long-Term Disc Breakdown',
        body: 'Prolonged bed rest allows spinal stabilizing muscles (multifidus and transversus abdominis) to rapidly atrophy. Structured physical therapy evaluates your specific directional preference (McKenzie MDT framework) to centralize disc material, offload inflamed nerve roots, and restore segmental spinal strength.',
      },
    ],
    targetConditionId: 'lower-back',
    faqs: [
      {
        question: 'Do I need an MRI scan before seeing a physiotherapist for back pain?',
        answer: 'Not always. An experienced physiotherapist can perform comprehensive orthopedic and neurological testing to assess nerve irritation and disc mechanics. If red flags or severe neurological deficits are found, an MRI referral will be advised.',
      },
    ],
  },
  {
    id: 'total-knee-replacement-rehabilitation-timeline',
    slug: 'total-knee-replacement-rehabilitation-timeline-mumbai',
    title: 'Rehabilitation Protocol After Total Knee Replacement (TKR): Weeks 1 to 12',
    seoTitle: 'Total Knee Replacement Rehab Timeline (Weeks 1-12) | Dr. Pawan Gupta (PT)',
    metaDescription: 'A clinical week-by-week guide to recovery after Total Knee Replacement surgery in Mumbai. Range of motion targets, swelling management & home exercises.',
    category: 'Post-Surgical',
    readTime: '6 min read',
    publishedDate: 'August 2026',
    author: 'Dr. Pawan Gupta (PT)',
    authorTitle: 'Senior Post-Operative Rehabilitation Specialist',
    authorCredentials: 'B.P.Th, M.P.Th, MIAP',
    keyTakeaway: 'Successful recovery after Total Knee Replacement depends on immediate post-operative physical therapy. Primary milestones include achieving full 0° knee extension and 90° flexion by Week 2, walking with a single stick by Week 4, and reaching 110°–120° flexion with independent stair climbing by Weeks 6 to 12.',
    contentSections: [
      {
        heading: 'Weeks 1 to 2: The Critical Window for Extension and Swelling Control',
        body: 'The first two weeks focus on pain management, edema control, and preventing flexion contractures. The primary goal is achieving complete 0-degree straight leg extension and at least 80 to 90 degrees of flexion.',
        bulletPoints: [
          'Continuous Passive Motion (CPM) or active-assisted heel slides',
          'Isometric quadriceps contractions and ankle pumps for DVT prevention',
          'Walker-assisted gait training with correct heel-to-toe mechanics',
          'Cryotherapy and elevation protocols for post-surgical swelling',
        ],
      },
      {
        heading: 'Weeks 3 to 6: Transitioning from Walker to Cane and Building Quadriceps Power',
        body: 'During this stage, surgical wound healing is complete. Focus shifts toward strengthening the Vastus Medialis Oblique (VMO), hip abductors, and progressing from a walker to a single elbow crutch or walking stick.',
        bulletPoints: [
          'Stationary upright cycling with zero resistance to facilitate joint lubrication',
          'Straight leg raises with progressive ankle weights (0.5 kg to 1.5 kg)',
          'Mini-squats against a wall and seated knee extensions',
          'Step-up and step-down practice under physiotherapist supervision',
        ],
      },
      {
        heading: 'Weeks 7 to 12: Independent Walking, Balance, and Stair Mastery',
        body: 'Patients transition to independent walking without mobility aids, practicing reciprocal stair climbing (one foot per step) and outdoor terrain walking across Mumbai neighborhoods.',
      },
    ],
    targetConditionId: 'knee',
    faqs: [
      {
        question: 'Why is achieving 0-degree knee extension so important after TKR?',
        answer: 'If the knee cannot fully straighten to 0 degrees, the quadriceps muscle must work twice as hard during standing, causing rapid muscle fatigue, a persistent limp, and excess strain on the hip and lower back.',
      },
    ],
  },
  {
    id: 'frozen-shoulder-stages-and-physiotherapy',
    slug: 'frozen-shoulder-stages-treatment-physiotherapy-mumbai',
    title: 'Frozen Shoulder (Adhesive Capsulitis): The 3 Clinical Stages & Physical Therapy Care',
    seoTitle: 'Frozen Shoulder Stages & Physiotherapy Treatment | Dr. Pawan Gupta (PT)',
    metaDescription: 'Understand the 3 stages of frozen shoulder (freezing, frozen, thawing) and how manual joint mobilization and stretching restore complete shoulder mobility.',
    category: 'Joint Health',
    readTime: '5 min read',
    publishedDate: 'August 2026',
    author: 'Dr. Pawan Gupta (PT)',
    authorTitle: 'Consultant Musculoskeletal Physiotherapist',
    authorCredentials: 'B.P.Th, M.P.Th, Certified Manual Therapist',
    keyTakeaway: 'Frozen shoulder (adhesive capsulitis) progresses through three distinct phases: Freezing (painful inflammation), Frozen (peak stiffness with reduced pain), and Thawing (gradual mobility recovery). Physical therapy tailored to each stage prevents permanent capsular contractures and significantly shortens overall recovery time.',
    contentSections: [
      {
        heading: 'Stage 1: Freezing (Painful Phase) — 6 to 9 Weeks',
        body: 'During the freezing stage, the glenohumeral joint capsule becomes acutely inflamed. Pain is intense, especially at night when lying on the affected side. Treatment must be gentle and avoid aggressive forcing of end-range movement.',
        bulletPoints: [
          'Gentle pendulum (Codman) oscillations to maintain joint fluid exchange',
          'Painless active-assisted movements using a wand or pulley within comfortable range',
          'Matrix electrotherapy and thermal packs for nocturnal pain relief',
          'Sleeping posture optimization with pillows supporting the elbow and wrist',
        ],
      },
      {
        heading: 'Stage 2: Frozen (Stiffening Phase) — 4 to 9 Months',
        body: 'Pain gradually subsides into a dull ache, but joint stiffness peaks. External rotation, abduction, and internal rotation become markedly restricted, making reaching for a wallet or styling hair difficult.',
        bulletPoints: [
          'Maitland Grade III/IV joint mobilizations to stretch the fibrotic inferior capsule',
          'Sleeper stretch and posterior capsule stretching routines',
          'Scapular stabilization exercises to prevent compensatory shoulder hiking',
        ],
      },
      {
        heading: 'Stage 3: Thawing (Recovery Phase) — 5 to 12 Months',
        body: 'Capsular compliance returns. Therapy intensifies with progressive resistance band exercises, overhead reaching drills, and functional strength conditioning for full daily tasks.',
      },
    ],
    targetConditionId: 'shoulder',
  },
  {
    id: 'desk-ergonomics-preventing-tech-neck',
    slug: 'desk-ergonomics-preventing-tech-neck-mumbai-professionals',
    title: 'Desk Ergonomics & Cervical Posture: Preventing Tech Neck for Corporate Professionals',
    seoTitle: 'Desk Ergonomics & Tech Neck Prevention in Mumbai | Dr. Pawan Gupta (PT)',
    metaDescription: 'Practical office and WFH ergonomic guidelines by Dr. Pawan Gupta (PT) to eliminate neck stiffness, rounded shoulders, and mid-back fatigue for Mumbai professionals.',
    category: 'Ergonomics',
    readTime: '4 min read',
    publishedDate: 'August 2026',
    author: 'Dr. Pawan Gupta (PT)',
    authorTitle: 'Corporate Ergonomics & Postural Specialist',
    authorCredentials: 'B.P.Th, M.P.Th, MIAP',
    keyTakeaway: 'For every 1 inch your head tilts forward, the effective weight on your cervical spine increases by roughly 4.5 kg (10 lbs). Setting your monitor at eye level, supporting your lumbar spine, and performing 30-second hourly micro-stretches deactivates trapezius spasm and prevents chronic cervical spondylosis.',
    contentSections: [
      {
        heading: 'The Biomechanics of Forward Head Posture ("Tech Neck")',
        body: 'An adult human head weighs approximately 4.5 to 5.5 kg in neutral posture. When angled forward at 45 to 60 degrees to look down at a laptop or smartphone, gravitational torque creates up to 27 kg of shear force on the cervical vertebrae and upper trapezius muscles.',
      },
      {
        heading: 'The 90-90-90 Ergonomic Workstation Checklist',
        body: 'Ensure your work desk meets these biomechanical standards:',
        bulletPoints: [
          'Monitor Height: Top 1/3 of the monitor screen aligned with natural horizontal eye gaze',
          'Elbow Angle: 90° to 100° with forearms supported parallel to the floor on armrests',
          'Hip and Knee Angle: 90° with feet resting flat on the floor or on an ergonomic footrest',
          'Lumbar Support: A small lumbar cushion maintaining natural inward lumbar lordosis',
        ],
      },
      {
        heading: '3 Critical Exercises You Can Do at Your Desk',
        body: 'Perform these three exercises twice daily during your workday:',
        bulletPoints: [
          'Chin Tucks: Retract chin straight back like making a double chin, hold 5 seconds (10 repetitions)',
          'Doorway Pectoral Stretch: Open tight chest muscles by resting forearms on door frame and stepping forward (hold 20 seconds)',
          'Scapular Squeezes: Pinch shoulder blades down and back together without shrugging shoulders (15 repetitions)',
        ],
      },
    ],
    targetConditionId: 'posture-ergonomics',
  },
  {
    id: 'stroke-home-physiotherapy-principles',
    slug: 'stroke-home-physiotherapy-neuroplasticity-mumbai',
    title: 'Stroke & Paralysis Home Physiotherapy: Neuroplasticity & Gait Recovery Principles',
    seoTitle: 'Stroke Home Physiotherapy & Neuroplasticity | Dr. Pawan Gupta (PT)',
    metaDescription: 'How bedside home physiotherapy drives neuroplasticity, balance, and walking recovery for stroke and hemiplegia patients across Mumbai.',
    category: 'Neurology',
    readTime: '6 min read',
    publishedDate: 'August 2026',
    author: 'Dr. Pawan Gupta (PT)',
    authorTitle: 'Neurological & Post-Stroke Rehabilitation Specialist',
    authorCredentials: 'B.P.Th, M.P.Th, MIAP',
    keyTakeaway: 'The brain retains remarkable neuroplastic capacity following a stroke. High-repetition, goal-directed physical therapy conducted in the patient\'s home fosters rapid recovery of sitting balance, sit-to-stand transitions, and safe ambulation while minimizing caregiver strain.',
    contentSections: [
      {
        heading: 'Understanding Neuroplasticity in Stroke Recovery',
        body: 'Neuroplasticity refers to the central nervous system\'s ability to reorganize structure and function in response to motor learning and repetition. When motor neurons are damaged during a stroke, surrounding healthy neurons can assume control of lost motor functions when stimulated with structured therapy.',
      },
      {
        heading: 'Why Home-Based Neuro-Rehabilitation is Ideal for Stroke Patients',
        body: 'Practicing transfers in a clinical gym is helpful, but mastering transfers in the patient\'s actual bedroom, dining chair, and bathroom provides direct, functional real-world independence.',
        bulletPoints: [
          'Practice getting in and out of the patient\'s specific bed and bathroom safely',
          'Eliminates stressful and tiring transport across Mumbai traffic for paralyzed patients',
          'Hands-on caregiver training on correct lifting and transfer mechanics to avoid back injury',
          'Daily consistency without missed appointments due to travel barriers',
        ],
      },
    ],
    targetConditionId: 'neuro-stroke',
  },
];

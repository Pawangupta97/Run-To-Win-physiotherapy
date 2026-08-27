export interface ConditionGuide {
  id: string;
  slug: string;
  name: string;
  category: 'Spine & Back' | 'Joints & Orthopedic' | 'Neurological' | 'Post-Surgical' | 'Posture & Ergonomics' | 'Sports Rehab';
  heroHeadline: string;
  seoTitle: string;
  metaDescription: string;
  quickSummary: string; // concise answer for AI Overviews / quick answer box
  reviewedBy: string;
  reviewerCredentials: string;
  lastUpdated: string;
  
  whatIsIt: string;
  symptoms: string[];
  commonCauses: string[];
  clinicalAssessment: string[];
  physioTreatmentApproach: string[];
  rehabPhases: { phase: string; focus: string; duration: string }[];
  expectedRecovery: string;
  redFlags: string[]; // When to see a doctor immediately
  homeVisitSuitability: string;
  faqs: { question: string; answer: string }[];
  relatedArticles?: string[];
  relatedLocations?: string[];
}

export const CONDITION_GUIDES: ConditionGuide[] = [
  {
    id: 'lower-back',
    slug: 'lower-back-pain-sciatica-physiotherapy-mumbai',
    name: 'Lower Back Pain & Sciatica',
    category: 'Spine & Back',
    heroHeadline: 'Evidence-Based Lower Back Pain & Sciatica Rehabilitation in Mumbai',
    seoTitle: 'Back Pain & Sciatica Physiotherapy in Mumbai | Dr. Pawan Gupta (PT)',
    metaDescription: 'Specialized physiotherapy for lower back pain, lumbar disc herniation, and sciatica in Mumbai by Dr. Pawan Gupta (PT). Decompression, McKenzie therapy & core rehab.',
    quickSummary: 'Lower back pain and sciatica involve mechanical disc irritation, nerve root compression (L4-S1), or facet joint overload. Evidence-based physiotherapy combines McKenzie spinal directional preference, gentle lumbar decompression, neural mobilization, and deep core (transversus abdominis) retraining to alleviate nerve pain and restore functional mobility without relying indefinitely on painkillers.',
    reviewedBy: 'Dr. Pawan Gupta (PT)',
    reviewerCredentials: 'B.P.Th, M.P.Th (Musculoskeletal Specialist), Certified Manual Therapist (MIAP)',
    lastUpdated: 'August 2026',
    whatIsIt: 'Lower back pain affects the lumbar spine, discs, ligaments, and stabilizing muscles. When an intervertebral disc bulges or herniates, it can press on the nearby sciatic nerve root, producing shooting pain, tingling, or numbness that travels down the gluteal region into the leg and foot (sciatica).',
    symptoms: [
      'Sharp, dull, or burning pain in the lower lumbar spine',
      'Radiating electric-shock or shooting sensation down the buttock, thigh, or calf (sciatica)',
      'Morning lumbar stiffness making it painful to stand upright',
      'Pain worsening with prolonged sitting, forward bending, or coughing',
      'Weakness in the foot or difficulty with heel-to-toe walking',
    ],
    commonCauses: [
      'Lumbar disc bulge or herniation (commonly at L4-L5 and L5-S1 levels)',
      'Prolonged seated desk posture and sedentary spinal compression',
      'Improper heavy lifting mechanics causing acute annular tear or muscle strain',
      'Lumbar canal stenosis or degenerative facet joint arthropathy in older adults',
      'Weak core stabilizers (transversus abdominis and multifidus) failing to support lumbar segments',
    ],
    clinicalAssessment: [
      'Detailed mechanical history and pain directional preference evaluation (McKenzie MDT framework)',
      'Straight Leg Raise (SLR) test and Slump test for neural tension and sciatic nerve root irritability',
      'Myotomal strength, dermatomal sensory sensation, and deep tendon reflex testing (L4, L5, S1)',
      'Palpation of lumbar facet joints, sacroiliac joints, and piriformis myofascial trigger points',
      'Review of existing lumbar MRI / X-ray imaging in clinical context',
    ],
    physioTreatmentApproach: [
      'McKenzie Mechanical Diagnosis & Therapy (MDT) extension and centralization protocols',
      'Gentle mechanical or manual spinal decompression to offload compressed nerve roots',
      'Neurodynamic sciatic nerve gliding and sliding to restore normal neural mobility',
      'Ultrasonic & TENS/IFT electrotherapy for acute muscle spasm deactivation',
      'Dry needling for deep piriformis and quadratus lumborum trigger points',
      'Progressive motor control training: activating Transversus Abdominis, Multifidus, and Gluteals',
    ],
    rehabPhases: [
      {
        phase: 'Phase 1: Pain Alleviation & Nerve Centralization',
        focus: 'Offloading irritated nerve root, directional preference posture, reducing muscle spasm, gentle walking.',
        duration: 'Weeks 1 – 2',
      },
      {
        phase: 'Phase 2: Segmental Stability & Neural Gliding',
        focus: 'Core activation (bird-dog, pelvic tilts), sciatic nerve sliders, restoring pain-free lumbar flexion/extension.',
        duration: 'Weeks 3 – 5',
      },
      {
        phase: 'Phase 3: Functional Strength & Spine Resilience',
        focus: 'Hip hinge mechanics, deadlift/squat movement re-education, lumbar endurance, return to active lifestyle.',
        duration: 'Weeks 6 – 8',
      },
    ],
    expectedRecovery: 'Most acute lumbar disc bulges and sciatica episodes show significant pain relief within 3 to 6 weeks of structured physiotherapy. Chronic back pain benefits from ongoing postural and core maintenance.',
    redFlags: [
      'Sudden loss of bowel or bladder control (emergency Cauda Equina syndrome)',
      'Numbness in the groin or saddle area (perineum)',
      'Rapidly progressive leg weakness (e.g. inability to lift foot - foot drop)',
      'Back pain accompanied by unexplained fever or sudden significant weight loss',
    ],
    homeVisitSuitability: 'Highly recommended for acute disc herniations or intense sciatic spasms where traveling or sitting in Mumbai traffic exacerbates nerve compression. Portable electrotherapy, traction, and bedside exercises are delivered directly to your home.',
    faqs: [
      {
        question: 'Can physiotherapy heal a slip disc without surgery?',
        answer: 'Yes. Clinical studies show over 90% of lumbar disc herniations can be managed successfully with conservative physiotherapy. Treatment focuses on centralizing the disc material, reducing local inflammation, and building muscular support around the spine.',
      },
      {
        question: 'Should I take complete bed rest for acute back pain?',
        answer: 'Prolonged bed rest (more than 24-48 hours) is generally not recommended. Gentle, guided movement and walking within a pain-free threshold promote blood flow, disc nutrition, and faster recovery compared to static rest.',
      },
      {
        question: 'How many physiotherapy sessions will I need for sciatica?',
        answer: 'Most patients notice meaningful pain reduction within 4 to 6 sessions. A full course typically spans 8 to 12 sessions alongside a structured home exercise program.',
      },
    ],
  },
  {
    id: 'cervical-neck',
    slug: 'neck-pain-cervical-spondylosis-physiotherapy-mumbai',
    name: 'Neck Pain & Cervical Spondylosis',
    category: 'Spine & Back',
    heroHeadline: 'Specialized Cervical Spine & Neck Pain Rehabilitation in Mumbai',
    seoTitle: 'Neck Pain & Cervical Spondylosis Physiotherapy in Mumbai | Dr. Pawan Gupta (PT)',
    metaDescription: 'Evidence-based physical therapy for cervical spondylosis, tech neck, and pinched nerve pain in Mumbai. Gentle joint mobilization, dry needling & posture correction.',
    quickSummary: 'Neck pain and cervical spondylosis arise from degenerative disc changes, poor forward-head screen ergonomics, or cervical nerve root compression (radiculopathy). Targeted physiotherapy uses Maitland joint mobilization, deep neck flexor retraining, scapular stabilizer strengthening, and ergonomic modifications to relieve neck tension and eliminate radiating arm tingling.',
    reviewedBy: 'Dr. Pawan Gupta (PT)',
    reviewerCredentials: 'B.P.Th, M.P.Th (Musculoskeletal Specialist), Certified Dry Needling Practitioner',
    lastUpdated: 'August 2026',
    whatIsIt: 'Cervical spondylosis is age-related wear and tear of the cervical spine discs and facet joints. In younger working professionals, prolonged forward-head postures ("tech neck") create excessive muscular strain on the trapezius and levator scapulae, frequently causing cervicogenic headaches and shoulder blade pain.',
    symptoms: [
      'Stiffness and restriction when rotating or tilting the neck',
      'Dull ache or burning between the shoulder blades and upper back',
      'Tingling, numbness, or weakness radiating into the shoulder, arm, or hand',
      'Tension headaches starting at the base of the skull and wrapping around the temples',
      'Muscle knots and tenderness in the upper trapezius and levator scapulae',
    ],
    commonCauses: [
      'Prolonged laptop, phone, and dual-monitor use with forward head posture',
      'Age-related cervical disc dehydration and osteophyte (bone spur) formation',
      'Sleeping with poorly supported pillows causing cervical strain',
      'Whiplash injuries or sudden cervical strain from vehicular accidents',
      'Weakness of deep neck flexors (Longus Colli/Capitis) and lower trapezius',
    ],
    clinicalAssessment: [
      'Cervical active and passive range of motion with goniometric measurement',
      'Spurling test and Upper Limb Tension Test (ULTT) for cervical nerve root irritation',
      'Deep neck flexor endurance test (craniocervical flexion test)',
      'Scapular dyskinesis screening and thoracic spine mobility assessment',
      'Postural screen examining ear-to-shoulder vertical alignment',
    ],
    physioTreatmentApproach: [
      'Maitland and Mulligan cervical joint mobilizations for restoring pain-free rotation',
      'Deep Neck Flexor (DNF) activation and chin-tuck motor control retraining',
      'Trigger point dry needling for upper trapezius, splenius capitis, and levator scapulae',
      'Thoracic spine extension and rotational mobilizations to offload the neck',
      'Ergonomic desk setup evaluation (monitor eye-level height, chair lumbar support, armrest alignment)',
    ],
    rehabPhases: [
      {
        phase: 'Phase 1: Symptom Relief & Muscle Deactivation',
        focus: 'Dry needling, gentle traction, pain-free range of motion, hot/cold therapy, sleep posture guidance.',
        duration: 'Weeks 1 – 2',
      },
      {
        phase: 'Phase 2: Postural Retraining & Deep Stabilizers',
        focus: 'Chin tucks, scapular retractions, thoracic foam rolling, neurodynamic nerve glides.',
        duration: 'Weeks 2 – 4',
      },
      {
        phase: 'Phase 3: Ergonomic Conditioning & Resistance',
        focus: 'Band resisted neck stabilizers, overhead shoulder stability, sustained posture resilience.',
        duration: 'Weeks 4 – 6',
      },
    ],
    expectedRecovery: 'Acute postural neck strains usually resolve within 2 to 3 weeks. Chronic cervical spondylosis and radiculopathy typically achieve substantial relief within 4 to 6 weeks of consistent physical therapy.',
    redFlags: [
      'Difficulty with balance, walking coordination, or clumsy hands (signs of Cervical Myelopathy)',
      'Numbness spreading to both hands or legs simultaneously',
      'Dizziness, visual disturbances, or fainting on neck turning (vertebrobasilar insufficiency screening required)',
      'Neck pain accompanied by unexplained high fever and severe neck rigidity',
    ],
    homeVisitSuitability: 'Available across all Mumbai suburbs. Ideal for patients experiencing acute cervical muscle spasms or radiating arm pain who find driving or commuting stressful.',
    faqs: [
      {
        question: 'Can physical therapy cure cervical spondylosis?',
        answer: 'While degenerative disc changes cannot be reversed, physical therapy effectively relieves symptoms, restores joint mobility, relieves pressure on nerves, and prevents future flare-ups.',
      },
      {
        question: 'What pillow is best for cervical neck pain?',
        answer: 'A contoured cervical orthopedic memory foam or medium-firm pillow that supports the natural curve of the neck without propping the head too high or allowing it to sag is optimal.',
      },
      {
        question: 'Does dry needling help neck stiffness?',
        answer: 'Yes. Dry needling releases hyperirritable myofascial trigger points in the trapezius and levator scapulae muscles, providing rapid relief from acute neck tightness.',
      },
    ],
  },
  {
    id: 'knee',
    slug: 'knee-pain-osteoarthritis-acl-physiotherapy-mumbai',
    name: 'Knee Pain & Osteoarthritis Rehabilitation',
    category: 'Joints & Orthopedic',
    heroHeadline: 'Evidence-Based Knee Pain & Post-Surgical Rehabilitation in Mumbai',
    seoTitle: 'Knee Pain & Osteoarthritis Physiotherapy in Mumbai | Dr. Pawan Gupta (PT)',
    metaDescription: 'Expert knee physiotherapy in Mumbai for knee osteoarthritis, ACL tear rehab, and post-total knee replacement (TKR). Regain pain-free walking & stair climbing.',
    quickSummary: 'Knee pain commonly stems from osteoarthritis (cartilage thinning), ligament injuries (ACL/PCL), meniscus tears, or patellofemoral tracking dysfunction. Structured physiotherapy strengthens the quadriceps (VMO), hamstrings, and hip abductors (gluteus medius) to offload joint pressure, improve joint lubrication, and restore smooth, pain-free mobility.',
    reviewedBy: 'Dr. Pawan Gupta (PT)',
    reviewerCredentials: 'B.P.Th, M.P.Th (Musculoskeletal Specialist), MIAP',
    lastUpdated: 'August 2026',
    whatIsIt: 'The knee is a major weight-bearing joint subjected to several times body weight during stair climbing and walking. Osteoarthritis involves gradual wear of the articular cartilage, leading to bone spurs, joint space narrowing, and chronic stiffness. Sports injuries often involve ligament sprains or meniscus tears from twisting forces.',
    symptoms: [
      'Ache or sharp pain when descending or climbing stairs',
      'Morning joint stiffness lasting 15 to 30 minutes',
      'Audible clicking, crepitus, or grinding sensation during knee bends',
      'Joint swelling, warmth, or feeling of stiffness after sitting for long periods',
      'Instability or sensation of the knee "giving way" while walking or turning',
    ],
    commonCauses: [
      'Age-related knee osteoarthritis (Grade 1 through Grade 4)',
      'Weakness in the quadriceps (especially Vastus Medialis Oblique) and gluteal muscles',
      'Previous sports injuries (ACL tear, meniscus tear, patellar subluxation)',
      'Excess body weight placing increased compressive load on tibiofemoral joints',
      'Flat feet or poor ankle biomechanics causing excessive knee valgus strain',
    ],
    clinicalAssessment: [
      'Knee flexion and extension range of motion measurement with goniometer',
      'Ligament stability tests (Lachman, Anterior Drawer, McMurray test for meniscus)',
      'Patellar tracking and grind test (Clarke\'s sign)',
      'Hip abductor strength assessment (Trendelenburg test) and single-leg squat alignment',
      'Gait analysis examining stride length, cadence, and weight-bearing symmetry',
    ],
    physioTreatmentApproach: [
      'Progressive closed-kinetic-chain strengthening: mini-squats, step-ups, and leg press variations',
      'Vastus Medialis Oblique (VMO) targeted neuromuscular stimulation and strengthening',
      'Gluteus Medius strengthening to prevent knee valgus (inward collapse) during gait',
      'Patellar joint mobilization and soft tissue release for tight IT band and retinaculum',
      'Balance and proprioception training on foam pads and balance boards to prevent falls',
      'Post-Total Knee Replacement (TKR) protocol: CPM guidance, knee extension restoration, and stair training',
    ],
    rehabPhases: [
      {
        phase: 'Phase 1: Swelling Reduction & Joint Mobility',
        focus: 'Isometric quad sets, heel slides, patellar glides, restoring full 0° knee extension.',
        duration: 'Weeks 1 – 3',
      },
      {
        phase: 'Phase 2: Strength & Single-Leg Stability',
        focus: 'Bridging, straight leg raises with ankle weights, wall sits, stationary cycling, balance training.',
        duration: 'Weeks 3 – 6',
      },
      {
        phase: 'Phase 3: Functional Capacity & Stair Mastery',
        focus: 'Step-downs, resistance band squats, perturbation training, outdoor walking conditioning.',
        duration: 'Weeks 6 – 12',
      },
    ],
    expectedRecovery: 'Mild to moderate osteoarthritis typically sees substantial functional gains within 4 to 8 weeks of targeted exercise. Post-operative knee replacement rehab spans 8 to 12 weeks for full functional independence.',
    redFlags: [
      'Sudden inability to bear any weight on the leg after acute trauma',
      'Significant hot, red swelling with fever (possible septic arthritis requiring emergency care)',
      'Knee locked rigidly in a bent position unable to straighten (displaced bucket-handle meniscus tear)',
      'Calf swelling, redness, and tenderness after surgery (suspected deep vein thrombosis - DVT)',
    ],
    homeVisitSuitability: 'Crucial for post-operative Total Knee Replacement (TKR) patients in Mumbai who cannot navigate stairs or vehicle travel during the initial 2 to 4 weeks post-discharge.',
    faqs: [
      {
        question: 'Can exercises help severe knee osteoarthritis without surgery?',
        answer: 'Targeted strengthening of the quadriceps and hip muscles absorbs shock that would otherwise pass through the knee joint. Many patients experience dramatic pain reduction and delay or avoid joint replacement surgery through consistent physical therapy.',
      },
      {
        question: 'How soon after knee replacement should physiotherapy begin?',
        answer: 'Physiotherapy typically begins within 24 hours of surgery in the hospital and continues at home immediately upon discharge to prevent joint stiffness and achieve full extension.',
      },
      {
        question: 'Is walking good for arthritic knee pain?',
        answer: 'Yes, moderate walking on flat surfaces in supportive footwear stimulates synovial fluid production, which nourishes cartilage. It should be balanced with non-impact strengthening exercises.',
      },
    ],
  },
  {
    id: 'shoulder',
    slug: 'frozen-shoulder-rotator-cuff-physiotherapy-mumbai',
    name: 'Frozen Shoulder & Rotator Cuff Injuries',
    category: 'Joints & Orthopedic',
    heroHeadline: 'Comprehensive Shoulder Mobility & Rotator Cuff Rehabilitation in Mumbai',
    seoTitle: 'Frozen Shoulder & Rotator Cuff Physiotherapy in Mumbai | Dr. Pawan Gupta (PT)',
    metaDescription: 'Specialized physical therapy for frozen shoulder (adhesive capsulitis) and rotator cuff tears in Mumbai. Restore overhead reach and eliminate night pain.',
    quickSummary: 'Shoulder conditions like adhesive capsulitis (frozen shoulder), rotator cuff tendinopathy, and subacromial impingement cause severe pain and progressive loss of reach. Evidence-based physiotherapy utilizes Maitland capsular mobilizations, gentle stretching, eccentric rotator cuff strengthening, and scapulothoracic rhythm retraining to restore full overhead range of motion.',
    reviewedBy: 'Dr. Pawan Gupta (PT)',
    reviewerCredentials: 'B.P.Th, M.P.Th (Musculoskeletal Specialist), Certified Manual Therapist',
    lastUpdated: 'August 2026',
    whatIsIt: 'The shoulder is the most mobile joint in the human body, relying on the four rotator cuff muscles (Supraspinatus, Infraspinatus, Teres Minor, Subscapularis) and the joint capsule for stability. Frozen shoulder involves progressive inflammatory fibrosis of the joint capsule, leading to severe stiffness and pain.',
    symptoms: [
      'Severe pain when reaching overhead, behind the back, or putting on a shirt/coat',
      'Inability to sleep on the affected shoulder due to throbbing night pain',
      'Progressive reduction in active and passive shoulder external rotation and abduction',
      'Painful catch or pinch sensation when raising the arm sideways',
      'Ache radiating down the deltoid muscle to the mid-arm',
    ],
    commonCauses: [
      'Adhesive capsulitis (frequently associated with diabetes or post-immobilization)',
      'Rotator cuff tendinitis or partial tear from repetitive overhead activities',
      'Subacromial bone spur causing impingement of the supraspinatus tendon',
      'Poor scapular kinematics and rounded shoulder posture narrowing subacromial space',
      'Sudden jerking injury or fall onto an outstretched hand',
    ],
    clinicalAssessment: [
      'Active and passive range of motion comparison with uninvolved side',
      'Specific rotator cuff tests: Empty Can test, Neer test, Hawkins-Kennedy impingement test',
      'Subscapularis Lift-Off test and Infraspinatus resisted external rotation strength',
      'Scapular rhythm and winging evaluation during arm elevation',
      'Capsular end-feel assessment for glenohumeral joint restriction',
    ],
    physioTreatmentApproach: [
      'Maitland Grade III and IV glenohumeral joint mobilizations (inferior and posterior glides)',
      'Pulleys, wand exercises, and sleeper stretches for capsular elongation',
      'Rotator cuff isometric and eccentric resistance training with resistance bands',
      'Serratus anterior and lower trapezius strengthening for scapular upward rotation',
      'Therapeutic ultrasound and matrix electrotherapy for periarticular inflammation',
    ],
    rehabPhases: [
      {
        phase: 'Phase 1: Pain Control & Gentle Mobility',
        focus: 'Pendulum Codman exercises, passive wand stretching, sleeping position modifications, thermal therapy.',
        duration: 'Weeks 1 – 3',
      },
      {
        phase: 'Phase 2: Joint Mobilization & Active-Assisted Range',
        focus: 'End-range capsular stretches, isometric cuff loading, scapular wall slides.',
        duration: 'Weeks 4 – 8',
      },
      {
        phase: 'Phase 3: Rotator Cuff Strengthening & Functional Reach',
        focus: 'Resistance band external/internal rotation, overhead stability, plyometric return-to-activity drills.',
        duration: 'Weeks 8 – 16',
      },
    ],
    expectedRecovery: 'Rotator cuff tendinitis often improves within 4 to 6 weeks. Frozen shoulder follows three clinical stages (Freezing, Frozen, Thawing) and full recovery typically takes 3 to 9 months with consistent physical therapy.',
    redFlags: [
      'Complete inability to actively lift arm sideways after a fall (suspected full-thickness rotator cuff tear requiring orthopedic imaging)',
      'Shoulder deformity or visible dislocation following traumatic impact',
      'Shoulder pain radiating down left arm accompanied by chest tightness or shortness of breath (rule out cardiac emergency)',
      'Unexplained joint swelling with skin redness and high fever',
    ],
    homeVisitSuitability: 'Available across Mumbai for patients struggling with severe night pain or acute post-operative shoulder arthroscopy recovery.',
    faqs: [
      {
        question: 'What are the three stages of frozen shoulder?',
        answer: 'Stage 1 (Freezing): Severe pain with gradual loss of movement (6-9 weeks). Stage 2 (Frozen): Pain stabilizes but stiffness peaks (4-9 months). Stage 3 (Thawing): Gradual return of mobility with active therapy (5-12 months).',
      },
      {
        question: 'Is it safe to push through pain during shoulder exercises?',
        answer: 'Gentle stretching discomfort is acceptable, but sharp, pinching pain indicates impingement and should be avoided. Your physiotherapist will calibrate exercises to your tolerance level.',
      },
      {
        question: 'How do diabetic patients handle frozen shoulder?',
        answer: 'Individuals with diabetes have a higher incidence and slower natural resolution of frozen shoulder. Consistent, gentle manual therapy combined with optimal glycemic control yields the best outcomes.',
      },
    ],
  },
  {
    id: 'neuro-stroke',
    slug: 'stroke-neuro-rehabilitation-physiotherapy-mumbai',
    name: 'Stroke & Neurological Rehabilitation',
    category: 'Neurological',
    heroHeadline: 'Specialized Stroke & Neurological Rehabilitation at Home & Clinic in Mumbai',
    seoTitle: 'Stroke & Neuro Physiotherapy in Mumbai | Dr. Pawan Gupta (PT)',
    metaDescription: 'Specialized neurological physiotherapy in Mumbai for stroke recovery, paralysis, Bell\'s palsy, and balance disorders. Dedicated home visit rehabilitation.',
    quickSummary: 'Neurological conditions like stroke (hemiplegia/hemiparesis), Parkinson\'s disease, and Bell\'s palsy impair motor pathways between the brain and body. Neuro-physiotherapy leverages neuroplasticity—the brain\'s ability to reorganize and form new neural connections—through task-oriented motor retraining, Bobath/PNF principles, gait re-education, and balance training.',
    reviewedBy: 'Dr. Pawan Gupta (PT)',
    reviewerCredentials: 'B.P.Th, M.P.Th (Musculoskeletal Specialist), Certified Neuro-Rehab Practitioner',
    lastUpdated: 'August 2026',
    whatIsIt: 'A stroke (ischemic or hemorrhagic) interrupts blood flow to brain regions responsible for motor control, speech, or sensation. This results in weakness or paralysis on one side of the body (hemiparesis), muscle spasticity, and impaired balance. Structured, repetitive neuro-physiotherapy is the primary clinical driver of functional recovery.',
    symptoms: [
      'Weakness or complete paralysis of the arm, hand, or leg on one side',
      'Muscle stiffness, tightness, or involuntary spasms (spasticity)',
      'Difficulty standing, transferring from bed to chair, or walking independently',
      'Impaired balance, ataxia, and increased risk of falls',
      'Facial asymmetry, difficulty closing an eye, or smile drooping in Bell\'s palsy',
    ],
    commonCauses: [
      'Ischemic or hemorrhagic stroke affecting cerebral hemispheres or brainstem',
      'Bell\'s palsy (facial nerve inflammation)',
      'Parkinson\'s disease and movement disorders',
      'Traumatic brain injury or spinal cord trauma',
      'Peripheral neuropathy and balance impairment in senior citizens',
    ],
    clinicalAssessment: [
      'Berg Balance Scale (BBS) and Timed Up and Go (TUG) fall risk assessment',
      'Modified Ashworth Scale (MAS) for measuring limb muscle spasticity',
      'Functional Ambulation Category (FAC) for walking independence',
      'Brunnstrom stages of motor recovery evaluation',
      'Sensory, proprioceptive, and cranial nerve examination',
    ],
    physioTreatmentApproach: [
      'Proprioceptive Neuromuscular Facilitation (PNF) and Bobath neurodevelopmental techniques',
      'Task-specific repetitive motor training (reaching, grasping, sit-to-stand)',
      'Constraint-Induced Movement Therapy (CIMT) principles for upper limb activation',
      'Electrical muscle stimulation for paretic muscles (dorsiflexors to correct foot drop)',
      'Gait retraining using parallel bars, walkers, and stepping progression',
      'Caregiver training for safe patient transfers, positioning, and bed-mobility techniques',
    ],
    rehabPhases: [
      {
        phase: 'Phase 1: Bedside Mobilization & Positioning',
        focus: 'Preventing shoulder subluxation, anti-spasticity positioning, passive range of motion, rolling.',
        duration: 'Weeks 1 – 4',
      },
      {
        phase: 'Phase 2: Trunk Control & Sit-to-Stand Mastery',
        focus: 'Pelvic bridging, seated balance drills, weight shifts, standing balance with support.',
        duration: 'Weeks 4 – 12',
      },
      {
        phase: 'Phase 3: Gait Training & Community Mobility',
        focus: 'Assisted to independent walking, obstacle navigation, stair ascent/descent, fine motor hand rehab.',
        duration: 'Months 3 – 12',
      },
    ],
    expectedRecovery: 'The most rapid neurological recovery occurs within the first 3 to 6 months post-stroke, but neuroplastic progress continues for years with consistent, focused therapy.',
    redFlags: [
      'Sudden new onset facial droop, arm weakness, or slurred speech (CALL EMERGENCY AMBULANCE FOR ACUTE STROKE - FAST)',
      'Sudden loss of consciousness or severe explosive headache',
      'Rapidly escalating fever or respiratory distress',
      'Severe pain in paretic shoulder indicating joint subluxation requiring immediate support',
    ],
    homeVisitSuitability: 'Extremely high demand across Mumbai. Bedside home physiotherapy allows stroke survivors to practice real-life transfers (bed, sofa, bathroom) in their familiar home environment.',
    faqs: [
      {
        question: 'Can an older stroke patient regain walking ability?',
        answer: 'Yes. With consistent task-oriented gait training and muscle activation, many stroke patients regain functional walking ability, transitioning from a wheelchair or walker to a walking cane or independent gait.',
      },
      {
        question: 'What is the role of neuroplasticity in stroke recovery?',
        answer: 'Neuroplasticity is the brain\'s capacity to create new pathways around damaged areas. High-repetition, purposeful movements during physical therapy stimulate the brain to re-learn motor tasks.',
      },
      {
        question: 'How does physiotherapy help Bell\'s palsy?',
        answer: 'Gentle facial muscle re-education, neuromuscular stimulation, facial massage, and mirror biofeedback help retrain the facial nerve and prevent aberrant nerve regeneration (synkinesis).',
      },
    ],
  },
  {
    id: 'posture-ergonomics',
    slug: 'posture-correction-desk-ergonomics-physiotherapy-mumbai',
    name: 'Posture Correction & Desk Ergonomics',
    category: 'Posture & Ergonomics',
    heroHeadline: 'Corporate Posture Correction & Office Ergonomics in Mumbai',
    seoTitle: 'Posture Correction & Ergonomics Physiotherapy in Mumbai | Dr. Pawan Gupta (PT)',
    metaDescription: 'Evidence-based posture correction & desk ergonomics assessment in Mumbai by Dr. Pawan Gupta (PT). Fix rounded shoulders, forward head posture & WFH strain.',
    quickSummary: 'Sedentary work, prolonged laptop use, and slouching lead to Upper Crossed Syndrome (forward head posture and rounded shoulders) and Lower Crossed Syndrome (anterior pelvic tilt and tight hip flexors). Structured postural physiotherapy combines targeted myofascial release of tight anterior muscles, strengthening of postural stabilizers, and workstation ergonomic optimization.',
    reviewedBy: 'Dr. Pawan Gupta (PT)',
    reviewerCredentials: 'B.P.Th, M.P.Th (Musculoskeletal Specialist), Ergonomics Consultant',
    lastUpdated: 'August 2026',
    whatIsIt: 'Posture is the dynamic alignment of the musculoskeletal system against gravity. Faulty postures place uneven compressive stress on the intervertebral discs and fatigue stabilizing muscle groups, resulting in chronic neck, mid-back, and lower back fatigue commonly experienced by corporate and tech workers in Mumbai.',
    symptoms: [
      'Constant burning ache between the shoulder blades at the end of the workday',
      'Forward projection of the chin with visible hunching of the upper back (kyphosis)',
      'Frequent tension headaches originating from the suboccipital neck region',
      'Lower back stiffness when standing up after prolonged desk sessions',
      'Tight, shortened chest and hip flexor muscles with weak glutes',
    ],
    commonCauses: [
      'Prolonged sitting with unergonomic laptop, monitor, or chair heights',
      'Slouching on sofas or working from bed without lumbar support',
      'Muscle imbalances: tight Pectorals/Upper Trapezius and weak Rhomboids/Deep Neck Flexors',
      'Lack of micro-breaks and sedentary daily routines',
      'Carrying heavy asymmetric laptop bags or backpacks on one shoulder',
    ],
    clinicalAssessment: [
      'Plumb line postural photography analysis from sagittal and coronal views',
      'Craniovertebral angle (CVA) measurement for forward head severity',
      'Pectoralis minor flexibility test and thoracic spine extension mobility',
      'Thomas test for hip flexor tightness and pelvic tilt evaluation',
      'Workstation ergonomic photo and video screening',
    ],
    physioTreatmentApproach: [
      'Myofascial trigger point release and cupping for tight pectorals and suboccipitals',
      'Thoracic extension mobilizations using foam rollers and mobility blocks',
      'Scapular retractor (rhomboid / middle trapezius) and lower trapezius resistance training',
      'Chin tucks and deep cervical flexor endurance conditioning',
      'Custom ergonomic setup guidance: screen height, lumbar roll placement, 90-90-90 seated posture',
    ],
    rehabPhases: [
      {
        phase: 'Phase 1: Fascial Release & Postural Awareness',
        focus: 'Chest stretching, foam rolling, dynamic thoracic openers, hourly movement habit building.',
        duration: 'Weeks 1 – 2',
      },
      {
        phase: 'Phase 2: Scapular & Core Muscular Retraining',
        focus: 'Face pulls, band pull-aparts, prone Y-T-W drills, bird-dogs for lumbar-pelvic control.',
        duration: 'Weeks 3 – 5',
      },
      {
        phase: 'Phase 3: Sustained Ergonomic Endurance',
        focus: 'Postural endurance against fatigue, standing desk transitions, active workstation maintenance.',
        duration: 'Weeks 6 – 8',
      },
    ],
    expectedRecovery: 'Most postural fatigue symptoms show noticeable improvement within 2 to 3 weeks of combining targeted stretching with ergonomic workstation adjustments.',
    redFlags: [
      'Sudden weakness or loss of grip strength in the hands',
      'Severe constant nighttime pain not relieved by changing positions',
      'Numbness spreading to multiple limbs',
    ],
    homeVisitSuitability: 'Ideal for home workstation assessments where Dr. Pawan Gupta (PT) directly inspects and aligns your actual desk, chair, and monitor setup across Mumbai residences.',
    faqs: [
      {
        question: 'Do posture correction braces really work?',
        answer: 'Braces can provide temporary sensory awareness, but relying on them weakens your natural postural muscles. Active strengthening of your own back and neck muscles is the only proven permanent solution.',
      },
      {
        question: 'How should my computer monitor be positioned?',
        answer: 'The top third of your screen should sit directly at eye level, roughly an arm\'s length away, ensuring your neck remains in a neutral, relaxed position without tilting forward or down.',
      },
      {
        question: 'How often should I take breaks from sitting?',
        answer: 'Follow the 30-30 rule: Every 30 minutes, stand up or change posture for at least 30 seconds to re-oxygenate muscles and offload spinal discs.',
      },
    ],
  },
];

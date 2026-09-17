import { ConditionGuide } from './conditionTypes';

export const SPINE_CONDITIONS: ConditionGuide[] = [
  {
    id: 'back-pain',
    slug: 'back-pain-physiotherapy-mumbai',
    name: 'Back Pain',
    category: 'Spine & Back',
    heroHeadline: 'Evidence-Based Back Pain Assessment & Non-Surgical Rehabilitation in Mumbai',
    seoTitle: 'Back Pain Physiotherapy in Mumbai | Dr. Pawan Gupta (PT)',
    metaDescription: 'Specialized physical therapy for acute and chronic back pain in Mumbai by Dr. Pawan Gupta (PT). Spinal decompression, McKenzie therapy, and deep core stability.',
    quickSummary: 'Back pain is one of the most widespread musculoskeletal conditions in Mumbai, typically stemming from mechanical disc overload, facet joint irritation, postural strain from prolonged desk work, or deep spinal stabilizer weakness. Evidence-based physiotherapy combines McKenzie directional preference, manual spinal mobilization, targeted lumbar decompression, and progressive motor control training (Transversus Abdominis and Multifidus) to achieve lasting relief without chronic reliance on NSAIDs or invasive surgery.',
    primarySearchIntent: 'Relief from acute and chronic lower back pain through non-surgical physiotherapy, posture correction, and spinal stabilization in Mumbai.',
    reviewedBy: 'Dr. Pawan Gupta (PT)',
    reviewerCredentials: 'B.P.Th, M.P.Th (Musculoskeletal Specialist), Certified Manual Therapist (MIAP)',
    lastUpdated: 'August 2026',
    
    whatIsIt: 'Back pain refers to discomfort, tension, or stiffness located between the lower rib margins and the buttock creases. It encompasses mechanical back strains, lumbar disc derangements (bulges or annular tears), facet joint arthropathy, and postural ligamentous fatigue. The lumbar spine supports substantial upper-body weight, making it particularly vulnerable to cumulative mechanical strain and sedentary compression.',
    
    symptoms: [
      'Aching, dull, or sharp pain localized in the lower lumbar spine or sacral region',
      'Morning stiffness making it uncomfortable or difficult to stand up straight upon waking',
      'Pain aggravated by prolonged sitting, forward bending, driving in Mumbai traffic, or heavy lifting',
      'Spasm or tightness in the paraspinal, quadratus lumborum, and gluteal musculature',
      'Discomfort when transitioning from sitting to standing or vice versa',
      'Reduced spinal mobility and hesitation during everyday bending and reaching'
    ],
    
    commonCauses: [
      'Prolonged static sitting in poorly ergonomic office chairs in corporate hubs like BKC and Lower Parel',
      'Long daily commutes with vehicular vibrations and poor lumbar cushioning across Mumbai roads',
      'Lumbar disc bulging or annular micro-tears resulting from repeated forward flexion with twisting',
      'Weakness and delayed recruitment of deep core stabilizers (transversus abdominis and lumbar multifidus)',
      'Tightness in hip flexors (psoas) and hamstrings altering pelvic tilt and lumbar lordosis',
      'Sudden unconditioned physical loading (e.g., gym deadlifts with rounding spine or lifting heavy luggage)'
    ],
    
    whenToSeekAssessment: {
      clinicalIndicators: [
        'Back pain persisting beyond 5 to 7 days despite basic rest and activity modification',
        'Recurrent flare-ups that increasingly restrict work, driving, or recreational activities',
        'Pain that radiates into the buttock or upper thigh',
        'Dependence on daily painkillers or anti-inflammatory medications to get through the workday',
        'Noticeable postural shift or trunk listing to one side when standing'
      ],
      redFlags: [
        'Sudden loss of bowel or bladder control, or difficulty passing urine (Cauda Equina Emergency)',
        'Numbness or loss of sensation in the saddle area (inner thighs, perineum, buttocks)',
        'Progressive neurological weakness in the legs (such as foot drop or knee buckling)',
        'Severe unremitting night pain that prevents sleep and does not change with position',
        'Back pain accompanied by unexplained fever, chills, or sudden significant weight loss',
        'History of trauma or fall in individuals with known osteoporosis'
      ]
    },
    redFlags: [
      'Sudden loss of bowel or bladder control (Cauda Equina syndrome)',
      'Numbness in the saddle area (groin, perineum, buttocks)',
      'Rapidly progressive leg weakness or foot drop',
      'Back pain accompanied by unexplained high fever or significant weight loss'
    ],
    
    howPhysiotherapyHelps: [
      'Accurately classifies mechanical directional preference to centralize disc irritation and unload sensitized spinal tissues',
      'Restores physiological facet joint gliding through gentle Maitland and Mulligan manual mobilization',
      'Deactivates painful protective muscle guarding using clinical dry needling and soft tissue release',
      'Re-educates feed-forward deep core contraction to support the lumbar spine during movement',
      'Equips patients with active self-management strategies and ergonomic solutions to prevent recurrence'
    ],
    
    clinicalAssessment: [
      'Comprehensive mechanical subjective interview detailing 24-hour pain behavior, aggravating postures, and easing positions',
      'McKenzie repeated movement testing (flexion/extension in standing and lying) to identify directional preference and centralization',
      'Neurological screening including lower extremity dermatomes (L1-S1), myotomes (hip flexors to ankle), and deep tendon reflexes',
      'Palpation of lumbar spinous processes, facet joints, sacroiliac alignment, and myofascial trigger points',
      'Biomechanical screen evaluating hip hinge mechanics, pelvic tilt control, and thoracic spine mobility'
    ],
    
    physioTreatmentApproach: [
      'McKenzie Mechanical Diagnosis & Therapy (MDT) protocols tailored to mechanical subtype',
      'Maitland passive lumbar oscillatory mobilizations to alleviate joint stiffness and modulate pain gates',
      'Myofascial release and dry needling for hypertonic quadratus lumborum, piriformis, and erector spinae',
      'Progressive motor control training: isolated transversus abdominis activation progressing to bird-dog and dead-bug drills',
      'Gentle mechanical or manual lumbar traction to reduce disc compressive stress during acute episodes'
    ],
    
    rehabPhases: [
      {
        phase: 'Phase 1: Acute De-sensitization & Centralization',
        focus: 'Directional preference postures, offloading sensitized structures, pain gate modulation, gentle short walks.',
        duration: 'Weeks 1 – 2'
      },
      {
        phase: 'Phase 2: Segmental Stabilization & Mobility',
        focus: 'Activating deep abdominal wall, pelvic dissociation, hip mobility drills, neural mobilization.',
        duration: 'Weeks 2 – 4'
      },
      {
        phase: 'Phase 3: Functional Loading & Spine Resilience',
        focus: 'Hip hinge mastery, loaded carrying drills, rotational core strength, return to full work and exercise.',
        duration: 'Weeks 4 – 8'
      }
    ],
    
    selfManagement: {
      overview: 'Active recovery outperforms prolonged bed rest. Maintaining gentle walking and avoiding sustained slumped postures are the cornerstones of early back pain self-care.',
      safeExercises: [
        {
          name: 'Prone Lying / Prone on Elbows (McKenzie Extension)',
          instruction: 'Lie flat on your stomach for 2-3 minutes. If pain-free, prop up on forearms keeping lower back and hips relaxed.',
          frequency: '3 to 4 times daily for 2 minutes',
          purpose: 'Reduces posterior lumbar disc pressure and promotes centralization of mechanical pain.'
        },
        {
          name: 'Pelvic Tilts in Supine',
          instruction: 'Lie on your back with knees bent. Gently flatten your lower back against the mattress by contracting your lower abdominals.',
          frequency: '2 sets of 10 repetitions twice daily',
          purpose: 'Activates deep stabilizing muscles and eases lumbar facet joint compression.'
        },
        {
          name: 'Knee-to-Chest Stretch',
          instruction: 'Gently draw one knee toward your chest with your hands, holding a mild stretch in the lower back for 20 seconds.',
          frequency: '3 repetitions per side, 2 times daily',
          purpose: 'Relieves paraspinal muscular spasm and gently mobilizes the lumbosacral junction.'
        }
      ],
      dosAndDonts: [
        { do: 'Take frequent 2-minute walking micro-breaks every 45 minutes of desk work', dont: 'Sit continuously for hours in a soft sunken sofa or slumped office chair' },
        { do: 'Bend from the hips and knees while keeping items close to your body when lifting', dont: 'Bend forward at the waist with straight legs and rounded spine to pick up objects' },
        { do: 'Maintain short, comfortable daily walks on level ground to nourish spinal discs', dont: 'Remain in bed for more than 24 hours during an acute back pain flare-up' }
      ],
      ergonomicTips: [
        'Place a small lumbar roll or rolled towel at the curve of your lower back while sitting at your desk or driving',
        'Adjust your monitor height so the top third of the screen is at natural eye level, preventing forward leaning',
        'Support your feet flat on the floor or on a footrest with hips slightly higher than knees'
      ]
    },
    
    recoveryFactors: [
      'Duration of symptoms before starting physiotherapy (acute onset responds significantly faster than chronic multi-year pain)',
      'Consistent adherence to prescribed directional exercises and posture modifications',
      'Daily walking volume and reduction of uninterrupted static sitting',
      'Quality of restorative sleep and effective stress management (stress heightens central pain sensitivity)',
      'Gradual re-introduction of physical activities rather than boom-and-bust cycles'
    ],
    expectedRecovery: 'Acute mechanical back strains typically show marked relief within 2 to 3 weeks. Discogenic episodes and chronic back pain achieve substantial functional recovery within 4 to 8 weeks with disciplined core retraining.',
    homeVisitSuitability: 'Highly recommended for acute severe back spasms or disc episodes where traveling in Mumbai traffic or taking stairs is excruciating. Dr. Pawan Gupta provides portable electrotherapy, traction, and bedside stabilization at your residence.',
    
    faqs: [
      {
        question: 'Can back pain be resolved without spinal surgery or injections?',
        answer: 'Yes. More than 90% of mechanical back pain and lumbar disc herniations resolve successfully with non-surgical conservative physiotherapy. Structured spinal offloading, McKenzie exercises, and progressive core stabilization address the underlying mechanical cause rather than merely masking symptoms.'
      },
      {
        question: 'Should I get an MRI done before visiting a physiotherapist?',
        answer: 'In the vast majority of cases, an immediate MRI is not required unless red flag symptoms (such as progressive leg weakness, numbness in the saddle area, or bowel/bladder issues) are present. Clinical physical examination accurately identifies the mechanical dysfunction.'
      },
      {
        question: 'Why does my back hurt more in the morning when I wake up?',
        answer: 'During the night, intervertebral discs naturally imbibe fluid and swell slightly (osmotic rehydration). Upon rising, this increased intradiscal pressure combined with overnight muscle immobility causes heightened morning stiffness, which eases after 15-20 minutes of gentle movement.'
      },
      {
        question: 'How does physiotherapy differ from a simple massage for back pain?',
        answer: 'While a massage offers short-term superficial muscle relaxation, clinical physiotherapy diagnoses the underlying mechanical deficit, mobilizes restricted spinal segments, decompresses nerves, and strengthens stabilizing muscles to prevent pain from returning.'
      }
    ],
    
    // Required internal linking chain: Back Pain → Pain Management → Home Physiotherapy → Physiotherapy Mumbai
    internalLinkChain: [
      {
        label: 'Back Pain',
        target: 'condition/back-pain',
        type: 'condition',
        contextDescription: 'Current Condition: Clinical diagnosis and mechanical stabilization for lumbar spine disorders.'
      },
      {
        label: 'Pain Management',
        target: 'pain-management',
        type: 'service',
        contextDescription: 'Step 1: Multimodal pain desensitization, electrotherapy, and non-pharmacological comfort.'
      },
      {
        label: 'Home Physiotherapy',
        target: 'home-physiotherapy',
        type: 'service',
        contextDescription: 'Step 2: Bedside mobilization and acute spasm care across Mumbai homes without travel strain.'
      },
      {
        label: 'Physiotherapy Mumbai',
        target: 'physiotherapy-mumbai',
        type: 'service',
        contextDescription: 'Step 3: Comprehensive center-based rehabilitation and long-term functional recovery.'
      }
    ],
    
    relatedServices: [
      { name: 'Pain Management Physiotherapy', pageKey: 'pain-management', reason: 'Targeted desensitization for acute lumbar spasms and persistent myofascial trigger points.' },
      { name: 'Home Visit Physiotherapy', pageKey: 'home-physiotherapy', reason: 'Doorstep clinical care across Mumbai for severe back episodes where traveling is painful.' },
      { name: 'Orthopedic Physiotherapy', pageKey: 'orthopedic-physiotherapy', reason: 'In-depth joint mobilization for facet arthropathy and degenerative disc changes.' },
      { name: 'Online Physiotherapy', pageKey: 'online-physiotherapy', reason: 'Ergonomic workspace assessment and guided home exercise progression via secure video.' }
    ],
    
    relatedConditions: [
      { name: 'Sciatica & Nerve Root Compression', conditionId: 'sciatica', reason: 'Radiating nerve symptoms originating from lumbar disc herniation pressing on the sciatic nerve.' },
      { name: 'Neck Pain & Cervical Spondylosis', conditionId: 'neck-pain', reason: 'Cervical spine counterpart sharing postural strain and desk ergonomics factors.' },
      { name: 'Knee Pain & Osteoarthritis', conditionId: 'knee-pain', reason: 'Kinetic chain compensation where altered gait from back pain overloads knee joints.' }
    ]
  },

  {
    id: 'neck-pain',
    slug: 'neck-pain-cervical-spondylosis-physiotherapy-mumbai',
    name: 'Neck Pain',
    category: 'Spine & Back',
    heroHeadline: 'Specialized Neck Pain & Cervical Spine Rehabilitation in Mumbai',
    seoTitle: 'Neck Pain & Cervical Spondylosis Physiotherapy in Mumbai | Dr. Pawan Gupta (PT)',
    metaDescription: 'Targeted physical therapy for neck pain, tech neck, and cervical spondylosis in Mumbai. Joint mobilization, deep neck flexor retraining, and ergonomic desk correction.',
    quickSummary: 'Neck pain commonly develops from prolonged forward-head device posture ("tech neck"), age-related cervical spondylosis, or cervical nerve root irritation. Specialized physiotherapy utilizes Maitland joint mobilizations, deep neck flexor activation (Longus Colli), thoracic spine extension drills, and individualized workstation ergonomics to eliminate neck stiffness, trapezius knots, and cervicogenic tension headaches.',
    primarySearchIntent: 'Relief from acute and chronic neck stiffness, cervical spondylosis, and postural neck pain through manual physiotherapy in Mumbai.',
    reviewedBy: 'Dr. Pawan Gupta (PT)',
    reviewerCredentials: 'B.P.Th, M.P.Th (Musculoskeletal Specialist), Certified Dry Needling Practitioner',
    lastUpdated: 'August 2026',
    
    whatIsIt: 'Neck pain involves discomfort, spasm, or limited mobility in the cervical spine (C1-C7 vertebrae), facet joints, intervertebral discs, and supporting musculature (upper trapezius, levator scapulae, and suboccipital muscles). Holding the head forward adds significant lever-arm mechanical weight, multiplying the load on cervical vertebrae from 5 kg in neutral posture to over 20 kg at a 45-degree forward tilt.',
    
    symptoms: [
      'Stiffness and reduced range of motion when turning the head or looking over the shoulder',
      'Persistent dull ache or burning tension in the upper trapezius and between the shoulder blades',
      'Tension headaches originating at the base of the skull and radiating over the crown or temples',
      'Palpable, sensitive muscle knots (trigger points) in the neck and upper shoulder girdle',
      'Clicking, popping, or grating sensations (crepitus) on cervical rotation',
      'Intermittent tingling or dull ache extending into the shoulder or upper arm'
    ],
    
    commonCauses: [
      'Forward-head posture during prolonged laptop, desktop, and smartphone use across Mumbai offices',
      'Age-related cervical spondylosis, disc space narrowing, and facet osteophyte formation',
      'Sleeping on poorly contoured, excessively high, or unsupportive pillows',
      'Weakness of deep stabilizing neck flexors (Longus Colli and Longus Capitis)',
      'Stiff thoracic spine forcing excessive compensatory movement at the mid-cervical levels (C5-C6)',
      'Sudden deceleration whiplash injuries from motor vehicle accidents or sudden jolts'
    ],
    
    whenToSeekAssessment: {
      clinicalIndicators: [
        'Neck stiffness that restricts safe driving or shoulder checks',
        'Tension headaches recurring multiple times weekly linked to screen time',
        'Pain that radiates into the shoulder blade, shoulder, or arm',
        'Neck symptoms persisting for more than 10 to 14 days without spontaneous improvement',
        'Frequent need to take muscle relaxants or pain medications to work comfortably'
      ],
      redFlags: [
        'Difficulty with balance, uncoordinated walking, or clumsiness when buttoning shirts (Cervical Myelopathy)',
        'Bilateral hand numbness, pins-and-needles, or electrical sensations down the spine on neck bending (Lhermitte sign)',
        'Sudden onset severe dizziness, double vision, slurred speech, or fainting during neck rotation',
        'High fever, severe neck rigidity (inability to touch chin to chest), and light sensitivity',
        'Progressive loss of arm or hand grip strength'
      ]
    },
    redFlags: [
      'Difficulty with balance, walking coordination, or clumsy hands (Cervical Myelopathy signs)',
      'Numbness spreading to both hands or legs simultaneously',
      'Dizziness, visual disturbances, or fainting on neck turning',
      'Neck pain with unexplained high fever and severe neck rigidity'
    ],
    
    howPhysiotherapyHelps: [
      'Restores pain-free cervical rotation and side-flexion through gentle Maitland and Mulligan mobilizations',
      'Strengthens the deep cervical flexor muscle sleeve that naturally supports head posture',
      'Deactivates painful hypertonic trigger points in the trapezius and levator scapulae via dry needling',
      'Mobilizes the thoracic spine and ribs to take mechanical overload off the cervical vertebrae',
      'Provides tailored workstation modifications to prevent recurrent tech-neck strain'
    ],
    
    clinicalAssessment: [
      'Goniometric measurement of active cervical flexion, extension, lateral flexion, and rotation',
      'Spurling test and Upper Limb Neurodynamic Testing (ULNT) to screen for cervical radiculopathy',
      'Craniocervical flexion test evaluating endurance of deep neck flexor muscles using pressure biofeedback',
      'Scapular posture, thoracic kyphosis, and ribcage mobility assessment',
      'Palpation of suboccipital, upper trapezius, and levator scapulae myofascial trigger points'
    ],
    
    physioTreatmentApproach: [
      'Maitland cervical and cervicothoracic junction passive joint mobilizations',
      'Deep Neck Flexor (DNF) activation with chin tucks and progressive holding protocols',
      'Dry needling and manual trigger point release for upper trapezius and suboccipitals',
      'Thoracic spine extension foam rolling and rotational mobilization drills',
      'Ergonomic workstation restructuring (display height, seat support, phone habits)'
    ],
    
    rehabPhases: [
      {
        phase: 'Phase 1: Pain Alleviation & Muscle Deactivation',
        focus: 'Dry needling, gentle joint glides, heat/cryotherapy, chin tuck motor control, sleep posture.',
        duration: 'Weeks 1 – 2'
      },
      {
        phase: 'Phase 2: Postural Retraining & Deep Stabilizer Strength',
        focus: 'Deep neck flexor endurance, scapular retractions, thoracic spine opening, nerve flossing.',
        duration: 'Weeks 2 – 4'
      },
      {
        phase: 'Phase 3: Ergonomic Conditioning & Resistance',
        focus: 'Band-resisted cervical stabilizers, overhead posture endurance, long-term habit consolidation.',
        duration: 'Weeks 4 – 6'
      }
    ],
    
    selfManagement: {
      overview: 'Consistent postural awareness and daily gentle cervical mobility counteract the compressive strain of modern computer work.',
      safeExercises: [
        {
          name: 'Gentle Chin Tucks (Cervical Retraction)',
          instruction: 'Sit tall. Looking straight ahead, glide your head backward as if making a subtle double chin without tilting your head down.',
          frequency: '10 repetitions every 2-3 hours during work',
          purpose: 'Activates deep neck flexors and decompresses the suboccipital junction.'
        },
        {
          name: 'Upper Trapezius Stretch',
          instruction: 'Sit on one hand. Gently tilt your opposite ear toward your shoulder until a comfortable stretch is felt along the side of the neck.',
          frequency: 'Hold for 20 seconds, repeat 3 times per side',
          purpose: 'Relieves chronic muscle shortening and reduces tension headache triggers.'
        },
        {
          name: 'Scapular Squeeze (Shoulder Blade Retraction)',
          instruction: 'Draw your shoulder blades backward and gently downward toward your spine. Hold for 5 seconds and release smoothly.',
          frequency: '12 repetitions, 3 times daily',
          purpose: 'Strengthens middle and lower trapezius to prevent rounded shoulder posture.'
        }
      ],
      dosAndDonts: [
        { do: 'Position your laptop or monitor so the top edge is at eye level using a stand or riser', dont: 'Look downward continuously at a phone or laptop placed flat on your lap' },
        { do: 'Use a contoured cervical pillow that keeps your neck in neutral alignment with your spine', dont: 'Stack multiple high, stiff pillows that force your neck into excessive forward bend' },
        { do: 'Take a 60-second micro-break to move your neck and shrug shoulders every 30 minutes', dont: 'Work through hours of sharp neck pinching without changing position' }
      ],
      ergonomicTips: [
        'Use an external keyboard and mouse when working on a laptop so the screen can be raised to eye level',
        'Avoid cradling your phone between your ear and shoulder; always use a headset or hands-free device',
        'Ensure your office chair armrests support your elbows at 90 degrees without shrugging your shoulders'
      ]
    },
    
    recoveryFactors: [
      'Prompt correction of daily workstation ergonomics (monitor height, chair support)',
      'Consistency with daily chin tucks and deep neck flexor endurance exercises',
      'Proper pillow support preventing nighttime cervical spine hyperextension or flexion',
      'Management of occupational stress, which directly manifests as trapezius muscle tension',
      'Overall physical activity and regular cardiovascular exercise to promote blood flow'
    ],
    expectedRecovery: 'Acute postural neck strains resolve within 2 to 3 weeks with physiotherapy. Chronic cervical spondylosis and cervicogenic headaches achieve substantial symptomatic relief within 4 to 6 weeks.',
    homeVisitSuitability: 'Available across all Mumbai suburbs. Ideal for patients suffering from acute torticollis (wry neck) or severe cervical muscle spasms where driving or commuting is painful.',
    
    faqs: [
      {
        question: 'Can physiotherapy permanently reverse cervical spondylosis?',
        answer: 'While age-related wear of discs and bones cannot be anatomically reversed, physiotherapy effectively restores pain-free joint mobility, relieves pressure on cervical nerve roots, and halts symptom progression, enabling a completely normal, active lifestyle.'
      },
      {
        question: 'How do I know if my headache is coming from my neck?',
        answer: 'Cervicogenic headaches typically start at the back of the neck or base of the skull, radiate forward over one side of the head, and are aggravated by sustained neck postures or neck movement. Physiotherapy treats the underlying cervical joint and muscle dysfunction.'
      },
      {
        question: 'Is neck cracking or popping safe?',
        answer: 'Habitual self-cracking creates hypermobility at already loose cervical segments without resolving the stiff ones above or below. Professional physiotherapy applies gentle, targeted joint mobilization specifically to hypomobile segments safely.'
      }
    ],
    
    // Required internal linking: Neck Pain → Orthopedic Physiotherapy → Pain Management → Home Physiotherapy
    internalLinkChain: [
      {
        label: 'Neck Pain',
        target: 'condition/neck-pain',
        type: 'condition',
        contextDescription: 'Current Condition: Cervical spine alignment, joint mobility, and postural muscle re-education.'
      },
      {
        label: 'Orthopedic Physiotherapy',
        target: 'orthopedic-physiotherapy',
        type: 'service',
        contextDescription: 'Step 1: Specialized joint mobilizations and cervical facet arthropathy care.'
      },
      {
        label: 'Pain Management',
        target: 'pain-management',
        type: 'service',
        contextDescription: 'Step 2: Dry needling and multimodal relief for chronic trapezius spasms.'
      },
      {
        label: 'Home Physiotherapy',
        target: 'home-physiotherapy',
        type: 'service',
        contextDescription: 'Step 3: Doorstep therapy for acute torticollis and severe cervical stiffness.'
      }
    ],
    
    relatedServices: [
      { name: 'Orthopedic Physiotherapy', pageKey: 'orthopedic-physiotherapy', reason: 'Evidence-based joint mobilization for cervical facet dysfunction and disc arthropathy.' },
      { name: 'Pain Management Physiotherapy', pageKey: 'pain-management', reason: 'Dry needling and electrotherapy for chronic myofascial trigger points in the trapezius.' },
      { name: 'Online Physiotherapy', pageKey: 'online-physiotherapy', reason: 'Live ergonomic assessment of home/office workspace and posture coaching.' },
      { name: 'Home Physiotherapy', pageKey: 'home-physiotherapy', reason: 'Doorstep care in Mumbai for acute neck lock or radiating arm discomfort.' }
    ],
    
    relatedConditions: [
      { name: 'Shoulder Pain & Rotator Cuff Impingement', conditionId: 'shoulder-pain', reason: 'Neck and shoulder kinetic chain interactions often share scapular dyskinesis.' },
      { name: 'Back Pain', conditionId: 'back-pain', reason: 'Total spinal column ergonomics and core postural control interconnect neck and back health.' },
      { name: 'Tennis Elbow', conditionId: 'tennis-elbow', reason: 'Cervical radiculopathy (C6-C7) can mimic or aggravate chronic lateral elbow pain.' }
    ]
  },

  {
    id: 'sciatica',
    slug: 'sciatica-nerve-compression-physiotherapy-mumbai',
    name: 'Sciatica',
    category: 'Spine & Back',
    heroHeadline: 'Targeted Sciatica Nerve Decompression & Evidence-Based Physical Therapy in Mumbai',
    seoTitle: 'Sciatica Pain Physiotherapy in Mumbai | Dr. Pawan Gupta (PT)',
    metaDescription: 'Specialized physical therapy for sciatica and pinched nerve pain in Mumbai. Gentle spinal decompression, McKenzie nerve glides, and piriformis release.',
    quickSummary: 'Sciatica is characterized by sharp, radiating nerve pain, numbness, or tingling that travels along the sciatic nerve pathway—from the lower lumbar spine through the buttock, hamstring, calf, and into the foot. Evidence-based physiotherapy combines McKenzie spinal directional preference, gentle decompression, neurodynamic nerve sliding techniques, and deep piriformis release to alleviate nerve irritation and restore pain-free walking without relying on spinal surgery.',
    primarySearchIntent: 'Relief from radiating sciatic leg pain, tingling, and lumbar disc nerve root compression through physiotherapy in Mumbai.',
    reviewedBy: 'Dr. Pawan Gupta (PT)',
    reviewerCredentials: 'B.P.Th, M.P.Th (Musculoskeletal Specialist), Certified Manual Therapist (MIAP)',
    lastUpdated: 'August 2026',
    
    whatIsIt: 'Sciatica is a clinical symptom complex rather than a standalone disease. It occurs when the roots of the sciatic nerve (the longest and thickest nerve in the human body, arising from spinal segments L4, L5, S1, S2, S3) are compressed, inflamed, or mechanically irritated. Common culprits include a herniated or bulging lumbar intervertebral disc, lateral recess stenosis, or compression beneath an inflamed, spasming piriformis muscle in the deep gluteal region.',
    
    symptoms: [
      'Shooting, searing, or electric shock-like pain radiating from the lower back or buttock down the back or side of the leg',
      'Numbness, tingling, or "pins-and-needles" sensations in the calf, outer ankle, or toes',
      'Burning pain deep in the buttock that worsens significantly with prolonged sitting or driving',
      'Increased leg pain when coughing, sneezing, laughing, or straining (positive Valsalva response)',
      'Weakness in the leg or foot, leading to difficulty lifting the toes (early foot drop) or pushing off during walking',
      'Pain that prevents walking more than a short distance before needing to sit or bend forward'
    ],
    
    commonCauses: [
      'Lumbar disc protrusion, herniation, or extrusion (most commonly at the L4-L5 or L5-S1 levels)',
      'Piriformis syndrome: anatomical entrapment or hypertonicity of the piriformis muscle over the sciatic nerve',
      'Lumbar spinal canal stenosis or neuroforaminal narrowing from degenerative bone spurs',
      'Spondylolisthesis (forward slippage of one lumbar vertebra over another, narrowing nerve exit foramina)',
      'Prolonged sitting on hard surfaces or sitting with a thick wallet in the rear trouser pocket ("wallet sciatica")',
      'Sudden heavy lifting combined with lumbar flexion and rotation'
    ],
    
    whenToSeekAssessment: {
      clinicalIndicators: [
        'Radiating pain or numbness extending below the knee that has lasted more than 3 to 5 days',
        'Difficulty sitting at a desk or driving due to intense gluteal and hamstring nerve pulling',
        'Symptoms that do not improve with over-the-counter anti-inflammatory medications',
        'Feeling that the affected leg is weaker or less reliable when negotiating stairs',
        'Pain that forces you to walk with a limp or tilt your upper body away from the painful side'
      ],
      redFlags: [
        'Sudden loss of bowel or bladder control, or difficulty starting urination (CAUDA EQUINA SYNDROME - MEDICAL EMERGENCY)',
        'Loss of sensation or numbness in the saddle area (inner thighs, groin, rectum)',
        'Rapidly progressive motor weakness, such as inability to stand on heels (foot drop) or toes',
        'Sciatic pain accompanied by unremitting high fever or history of cancer with sudden severe back pain',
        'Bilateral severe radiating leg pain with progressive numbness in both lower limbs'
      ]
    },
    redFlags: [
      'Loss of bladder or bowel control, or progressive numbness in the groin/saddle area (CAUDA EQUINA SYNDROME - EMERGENCY)',
      'Sudden foot drop where you cannot lift your toes when walking',
      'Unrelenting night pain accompanied by unexplained weight loss'
    ],
    
    howPhysiotherapyHelps: [
      'Centralizes radiating pain back toward the lumbar spine using directional preference exercises, reducing leg numbness',
      'Restores physiological mobility to the sciatic nerve through neurodynamic sliders and tensioners',
      'Releases deep myofascial entrapment in the piriformis and gluteal muscles with clinical dry needling',
      'Decreases mechanical disc bulge pressure through gentle manual and mechanical decompression protocols',
      'Builds deep core and pelvic stability to permanently protect the lumbar nerve roots from recurrent compression'
    ],
    
    clinicalAssessment: [
      'Straight Leg Raise (SLR / Lasègue test) and Crossed SLR test to evaluate mechanical nerve root tension',
      'Slump test: sensitive neurodynamic maneuver to assess dura and neural mobility from neck to foot',
      'Comprehensive neurological exam: myotomal power (L4 ankle dorsiflexion, L5 great toe extension, S1 calf raise), dermatomal sensation, and Achilles/patellar reflexes',
      'Differential testing for Piriformis Syndrome: FAIR test (Flexion, Adduction, Internal Rotation) and resisted abduction (Pace test)',
      'McKenzie mechanical evaluation: determining whether spinal extension or flexion centralizes symptoms'
    ],
    
    physioTreatmentApproach: [
      'McKenzie Mechanical Diagnosis and Therapy (MDT) extension centralization protocols',
      'Neurodynamic sciatic nerve gliding techniques to reduce intraneural edema and restore glide',
      'Dry needling and deep myofascial release for piriformis, quadratus lumborum, and gluteus medius',
      'Gentle mechanical lumbar traction and pelvic offloading positions',
      'Progressive motor control training: core activation with neutral lumbar spine mechanics'
    ],
    
    rehabPhases: [
      {
        phase: 'Phase 1: Pain Centralization & Nerve Decompression',
        focus: 'Prone press-ups, nerve flossing, trigger point dry needling, anti-inflammatory offloading positions.',
        duration: 'Weeks 1 – 2'
      },
      {
        phase: 'Phase 2: Lumbar-Pelvic Core Stabilization',
        focus: 'Transversus abdominis activation, bridging, bird-dogs, seated ergonomic corrections.',
        duration: 'Weeks 2 – 4'
      },
      {
        phase: 'Phase 3: Functional Loading & Recurrence Prevention',
        focus: 'Deadlift mechanics, hip hinging, gluteal hypertrophy, sustained endurance walking.',
        duration: 'Weeks 4 – 6'
      }
    ],
    
    selfManagement: {
      overview: 'Early sciatica management focuses on avoiding spinal flexion (slumped sitting) and promoting centralization of pain away from the foot and back toward the spine.',
      safeExercises: [
        {
          name: 'Prone Press-Ups (McKenzie Extension)',
          instruction: 'Lie on your stomach. Place hands under shoulders and gently push your chest upward while keeping hips and lower back completely relaxed.',
          frequency: '10 repetitions every 2 to 3 hours',
          purpose: 'Encourages disc material to move anteriorly away from the pinched sciatic nerve root.'
        },
        {
          name: 'Sciatic Nerve Flossing (Seated Slider)',
          instruction: 'Sit on a firm chair. As you gently extend your knee and point your toes up, look up toward the ceiling. As you bend your knee back, lower your chin to your chest.',
          frequency: '10 to 12 gentle repetitions, 2 times daily',
          purpose: 'Gently slides the sciatic nerve through its neural pathway without over-tensioning sensitized tissue.'
        },
        {
          name: 'Gentle Piriformis Stretch (Figure-4)',
          instruction: 'Lie on your back. Cross your affected ankle over the opposite knee. Gently hold the back of the unaffected thigh and draw it toward your chest until a stretch is felt in the buttock.',
          frequency: 'Hold for 20 seconds, repeat 3 times',
          purpose: 'Releases deep gluteal tightness that compresses the sciatic nerve.'
        }
      ],
      dosAndDonts: [
        { do: 'Take short, frequent walks on flat surfaces to maintain circulation around irritated nerve roots', dont: 'Remain in bed for days; immobility increases nerve sensitivity and spinal stiffness' },
        { do: 'Place a lumbar support pillow behind your lower back whenever you must sit', dont: 'Sit on soft, low couches or bucket seats that force your lower back into deep flexion' },
        { do: 'Perform gentle nerve flossing only within a pain-free or mild stretching range', dont: 'Aggressively pull your leg into painful stretches that trigger shooting electric-shock sensations' }
      ],
      ergonomicTips: [
        'Avoid carrying a wallet, smartphone, or keys in your back pocket, which directly compresses the sciatic nerve when seated',
        'When driving, adjust your seat so your knees are at hip level rather than elevated above your pelvis',
        'When standing up from a chair, hinge at your hips while keeping your spine straight instead of rounding your lower back'
      ]
    },
    
    recoveryFactors: [
      'Severity and anatomical level of disc displacement (extrusion vs. contained protrusion)',
      'Speed of symptom centralization (patients who quickly centralize have excellent non-surgical outcomes)',
      'Strict adherence to avoiding aggravating slumped postures during the initial healing window',
      'Consistent practice of prescribed nerve sliders and core stabilization exercises',
      'Overall metabolic health (well-managed blood sugar accelerates peripheral nerve recovery)'
    ],
    expectedRecovery: '70% to 90% of patients experience significant relief from radiating sciatic pain within 3 to 6 weeks of structured manual therapy and McKenzie exercises. Complete resolution of residual numbness may take 8 to 12 weeks as the nerve regenerates.',
    homeVisitSuitability: 'High priority for home care across Mumbai suburbs. Traveling in cars or auto-rickshaws over uneven roads exacerbates acute sciatic nerve compression; in-home therapy brings traction and manual decompression directly to you.',
    
    faqs: [
      {
        question: 'What is the difference between sciatica and general back pain?',
        answer: 'General back pain remains localized in the lumbar spine and muscles, whereas sciatica involves compression of a nerve root, causing pain, tingling, or numbness that travels past the buttock and down the leg into the calf or foot.'
      },
      {
        question: 'Can sciatica heal without surgery?',
        answer: 'Yes. Clinical studies consistently show that over 90% of sciatica cases recover fully with conservative physiotherapy. Non-surgical treatment decompresses the nerve, reduces inflammation, and stabilizes the spine, allowing the disc herniation to resorb naturally.'
      },
      {
        question: 'Why does sitting make my sciatica so much worse?',
        answer: 'Sitting—especially in a slumped posture—increases pressure within lumbar intervertebral discs by over 150% compared to standing. This pressure pushes bulging disc material backward directly onto the adjacent sciatic nerve root.'
      },
      {
        question: 'What should I do if my foot feels weak or drops when walking?',
        answer: 'Foot drop indicates motor nerve fiber compromise (usually L4 or L5 root). You should consult Dr. Pawan Gupta or an orthopedic specialist promptly for an urgent clinical neurological evaluation to prevent permanent muscle weakness.'
      }
    ],
    
    // Required internal linking: Sciatica → Back Pain → Pain Management → Home Physiotherapy
    internalLinkChain: [
      {
        label: 'Sciatica',
        target: 'condition/sciatica',
        type: 'condition',
        contextDescription: 'Current Condition: Nerve root compression, radiating leg pain, and neural mobilization.'
      },
      {
        label: 'Back Pain',
        target: 'condition/back-pain',
        type: 'condition',
        contextDescription: 'Step 1: Treating the underlying lumbar disc or spinal segment causing nerve root irritation.'
      },
      {
        label: 'Pain Management',
        target: 'pain-management',
        type: 'service',
        contextDescription: 'Step 2: Specialized desensitization, neurodynamics, and non-pharmacological relief.'
      },
      {
        label: 'Home Physiotherapy',
        target: 'home-physiotherapy',
        type: 'service',
        contextDescription: 'Step 3: Doorstep bedside decompression across Mumbai residences when commuting is intolerable.'
      }
    ],
    
    relatedServices: [
      { name: 'Pain Management Physiotherapy', pageKey: 'pain-management', reason: 'Targeted nerve desensitization and multimodal pain relief for radiating leg pain.' },
      { name: 'Home Physiotherapy Mumbai', pageKey: 'home-physiotherapy', reason: 'Critical for acute sciatic episodes when sitting in taxis or auto-rickshaws causes excruciating pain.' },
      { name: 'Orthopedic Physiotherapy', pageKey: 'orthopedic-physiotherapy', reason: 'Spinal mechanical assessment and manual therapy for disc protrusions.' },
      { name: 'Physiotherapy in Mumbai', pageKey: 'physiotherapy-mumbai', reason: 'Comprehensive outpatient clinic facilities at Sewri for long-term spinal rehabilitation.' }
    ],
    
    relatedConditions: [
      { name: 'Back Pain', conditionId: 'back-pain', reason: 'Lumbar disc herniations and mechanical spinal dysfunction are the primary root cause of sciatica.' },
      { name: 'Neck Pain & Cervical Spondylosis', conditionId: 'neck-pain', reason: 'Cervical radiculopathy shares similar nerve root compression pathophysiology in the upper limb.' },
      { name: 'Plantar Fasciitis', conditionId: 'plantar-fasciitis', reason: 'Tibial nerve branch irritation can sometimes mimic or co-exist with heel and sole symptoms.' }
    ]
  }
];

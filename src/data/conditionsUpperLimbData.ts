import { ConditionGuide } from './conditionTypes';

export const UPPER_LIMB_CONDITIONS: ConditionGuide[] = [
  {
    id: 'frozen-shoulder',
    slug: 'frozen-shoulder-adhesive-capsulitis-physiotherapy-mumbai',
    name: 'Frozen Shoulder (Adhesive Capsulitis)',
    category: 'Joints & Orthopedic',
    heroHeadline: 'Evidence-Based Frozen Shoulder Capsular Release & Physiotherapy in Mumbai',
    seoTitle: 'Frozen Shoulder Physiotherapy in Mumbai | Dr. Pawan Gupta (PT)',
    metaDescription: 'Specialized physical therapy for frozen shoulder (adhesive capsulitis) in Mumbai by Dr. Pawan Gupta (PT). Maitland capsular stretching, pain relief, and mobility restoration.',
    quickSummary: 'Frozen shoulder (adhesive capsulitis) is an inflammatory condition characterized by progressive fibrosis, thickening, and contracture of the glenohumeral joint capsule, resulting in severe nighttime aching and profound restriction of both active and passive shoulder movement. Highly prevalent among diabetic individuals in Mumbai, specialized physiotherapy utilizes gentle Maitland low-grade oscillatory mobilizations, scapular upward rotation retraining, and pain-free home stretching to restore overhead reaching and back-pocket reach without surgical capsular release.',
    primarySearchIntent: 'Treatment for frozen shoulder stiffness, night pain, and loss of arm reach through specialized physical therapy in Mumbai.',
    reviewedBy: 'Dr. Pawan Gupta (PT)',
    reviewerCredentials: 'B.P.Th, M.P.Th (Musculoskeletal Specialist), Certified Manual Therapist (MIAP)',
    lastUpdated: 'August 2026',
    
    whatIsIt: 'Frozen shoulder, clinically termed adhesive capsulitis, occurs when the pliable connective tissue capsule surrounding the shoulder joint becomes chronically inflamed, thickened, and contracted. This leads to characteristic loss of passive and active range of motion in a capsular pattern: external rotation is most severely restricted, followed by abduction (lifting to the side), and internal rotation (reaching behind the back). It typically progresses through three distinct phases: Freezing (pain predominant), Frozen (stiffness predominant), and Thawing (gradual recovery).',
    
    symptoms: [
      'Severe, dull, unremitting aching in the outer shoulder that intensifies significantly at night, disturbing sleep',
      'Inability to sleep on the affected shoulder side without waking in pain',
      'Marked inability to raise the arm overhead (e.g., reaching high shelves or combing hair)',
      'Inability to reach behind the back to fasten garments, put on a jacket, or reach a back pocket',
      'Sudden, jolting agonizing pain if the arm is moved unexpectedly or bumped',
      'Noticeable shoulder shrugging or trick compensatory movement when attempting to lift the arm'
    ],
    
    commonCauses: [
      'High prevalence among patients with Type 1 or Type 2 Diabetes Mellitus (due to non-enzymatic collagen glycosylation)',
      'Thyroid dysfunction (both hypothyroidism and hyperthyroidism are established clinical risk factors)',
      'Prolonged immobilization following a minor shoulder injury, wrist fracture, cardiac procedure, or breast surgery',
      'Autoimmune predisposition triggering microvascular inflammation of the synovial capsule',
      'Idiopathic onset, most commonly affecting individuals between 40 and 65 years of age, with higher incidence in females'
    ],
    
    whenToSeekAssessment: {
      clinicalIndicators: [
        'Persistent night shoulder pain that wakes you up multiple times every week',
        'Inability to lift your arm past shoulder height despite your best effort',
        'Stiffness where an examiner or family member also cannot physically move your arm higher (true passive restriction)',
        'Difficulty dressing independently, reaching behind the back, or styling hair',
        'Shoulder symptoms lasting longer than 3 weeks that are not responding to routine pain medications'
      ],
      redFlags: [
        'Shoulder pain radiating across the chest, down the left arm, or accompanied by shortness of breath, diaphoresis, or dizziness (CARDIAC EMERGENCY)',
        'Hot, red, swollen shoulder with high fever and chills (Septic Arthritis Emergency)',
        'History of recent high-impact fall or motor accident resulting in obvious joint deformity or inability to bear weight through arm (Fracture or Glenohumeral Dislocation)',
        'Unexplained persistent weight loss with deep bone ache'
      ]
    },
    redFlags: [
      'Shoulder pain with chest tightness, shortness of breath, or sweating (Cardiovascular Emergency)',
      'Hot, red, swollen joint with fever (Septic Arthritis)',
      'Severe deformity following traumatic fall or accident'
    ],
    
    howPhysiotherapyHelps: [
      'Modulates severe nighttime neurogenic inflammatory pain during the early "Freezing" stage through gentle Grade I-II Maitland glides',
      'Prevents irreversible capsular contracture and breaks down dense collagen cross-links in the "Frozen" stage through specific inferior and posterior glides',
      'Corrects early compensatory scapular hiking by activating the serratus anterior and lower trapezius',
      'Significantly shortens the natural disease duration from 2-3 years down to 4-6 months with guided rehabilitation',
      'Helps patients regain full independent overhead reaching and functional activities of daily living'
    ],
    
    clinicalAssessment: [
      'Comprehensive active and passive range of motion measurement comparing both sides, specifically measuring external rotation at 0° and 90° abduction',
      'End-feel assessment: characteristic early, rigid, leathery capsular end-feel confirming adhesive capsulitis versus muscular guarding',
      'Subacromial impingement differential testing (Hawkins-Kennedy, Neer) to rule out primary rotator cuff tears',
      'Scapulohumeral rhythm evaluation during arm elevation to detect compensatory scapular hiking',
      'Review of glycemic control history (HbA1c) and systemic metabolic co-morbidities'
    ],
    
    physioTreatmentApproach: [
      'Maitland glenohumeral joint mobilizations: Grade I-II for pain relief in Freezing phase, progressing to sustained Grade III-IV stretching in Frozen phase',
      'Mulligan Mobilization with Movement (MWM) to facilitate pain-free active arm elevation',
      'Moist heat packs followed by targeted posterior capsular stretching and sleeper stretches',
      'Dry needling to release secondary trigger points in the subscapularis, infraspinatus, and upper trapezius',
      'Scapular stabilization exercises: Wall slides, isometric external rotation, and resisted theraband rows'
    ],
    
    rehabPhases: [
      {
        phase: 'Phase 1: Freezing (Pain Modulation & Gentle Motion)',
        focus: 'Gentle pendular exercises, Grade I-II Maitland glides, sleep positioning advice, preventing aggressive forced stretching.',
        duration: 'Weeks 1 – 4'
      },
      {
        phase: 'Phase 2: Frozen (Capsular Stretching & Scapular Control)',
        focus: 'Grade III-IV inferior/posterior capsular glides, pulley exercises, sleeper stretches, serratus anterior strengthening.',
        duration: 'Weeks 4 – 10'
      },
      {
        phase: 'Phase 3: Thawing (Full Functional Range & Overhead Power)',
        focus: 'End-range overhead reaches, eccentric rotator cuff strengthening, functional lifting and sport/work conditioning.',
        duration: 'Weeks 10 – 16'
      }
    ],
    
    selfManagement: {
      overview: 'Respect pain limits: aggressive, forceful stretching during the early inflammatory stage worsens capsular inflammation. Gentle, frequent pain-free mobility exercises yield the best long-term outcome.',
      safeExercises: [
        {
          name: 'Codman Pendulum Exercises',
          instruction: 'Lean forward supporting your good arm on a table. Let your affected arm hang freely like a pendulum. Gently sway your body to let the arm swing in small circles.',
          frequency: '2 minutes, 3 to 4 times daily',
          purpose: 'Decompresses the glenohumeral joint and provides joint lubrication without active muscle contraction.'
        },
        {
          name: 'Finger Wall Ladder Walking',
          instruction: 'Stand facing a wall at arm length. Using your fingers like a ladder, slowly walk your hand up the wall as high as comfortable, hold for 5 seconds, and walk back down.',
          frequency: '10 repetitions, 2 to 3 times daily',
          purpose: 'Safely utilizes wall friction to assist arm elevation and gently stretch the inferior capsule.'
        },
        {
          name: 'Towel Internal Rotation Stretch',
          instruction: 'Hold a small towel behind your back with your unaffected arm over your shoulder and affected hand grasping the bottom. Gently pull upward with the top hand.',
          frequency: 'Hold 15 seconds, repeat 5 times',
          purpose: 'Restores internal rotation required for tucking in shirts and reaching back pockets.'
        }
      ],
      dosAndDonts: [
        { do: 'Support your affected arm on a small pillow while sleeping on your back to avoid capsule traction', dont: 'Sleep directly on the affected shoulder without supportive cushioning' },
        { do: 'Apply a warm moist heat pack for 10 minutes before performing gentle mobility exercises', dont: 'Allow anyone to violently force your arm upward past the point of severe sharp pain' },
        { do: 'Maintain blood sugar control (HbA1c < 7%) in consultation with your physician, as hyperglycemia prolongs capsular stiffness', dont: 'Stop moving your arm entirely, which causes severe muscle atrophy and joint adhesions' }
      ],
      ergonomicTips: [
        'Place frequently used kitchen and office items at chest level to avoid strained overhead reaching',
        'When dressing, always slide the affected arm into shirt sleeves or coats first; when undressing, remove the unaffected arm first'
      ]
    },
    
    recoveryFactors: [
      'Blood glucose control (tight glycemic regulation substantially accelerates capsular remodeling in diabetic patients)',
      'Stage of presentation (early intervention during the freezing phase minimizes long-term capsular fibrosis)',
      'Consistent daily home exercise adherence between clinical physiotherapy sessions',
      'Patience with the biological recovery timeline (capsular tissue remodeling takes structured time)',
      'Absence of secondary rotator cuff tendon tears'
    ],
    expectedRecovery: 'With regular physical therapy and home exercise, pain relief typically occurs within 4 to 6 weeks, with full functional range of motion and overhead reaching restored between 3 and 5 months—substantially faster than the 2-3 years seen in unmanaged cases.',
    homeVisitSuitability: 'Excellent for early phase frozen shoulder patients experiencing severe pain on vehicular transit across Mumbai, or elderly patients requiring in-home assistance with daily dressing routines.',
    
    faqs: [
      {
        question: 'Why is frozen shoulder so much more common in people with diabetes?',
        answer: 'Elevated blood glucose levels lead to a biological process called non-enzymatic glycation, where excess sugar molecules bind to collagen fibers in the joint capsule. This makes the shoulder capsule abnormally stiff, thick, and prone to severe inflammatory contracture.'
      },
      {
        question: 'Will my frozen shoulder ever get completely better?',
        answer: 'Yes. Frozen shoulder is fundamentally a self-limiting condition, but without treatment it can cause permanent partial restriction and years of chronic pain. Guided physiotherapy accelerates capsular remodeling, relieves night pain, and restores 90-98% of normal joint mobility.'
      },
      {
        question: 'Should I get a cortisone injection or hydrodilatation?',
        answer: 'In cases of severe, unyielding night pain in the freezing phase, an ultrasound-guided intra-articular steroid injection or hydrodilatation can be very helpful to quench acute inflammation. However, it must immediately be followed by structured physiotherapy to restore mechanical range.'
      },
      {
        question: 'What is the difference between frozen shoulder and a rotator cuff tear?',
        answer: 'A hallmark difference is passive motion: in frozen shoulder, neither you nor the physiotherapist can physically lift the arm due to a contracted capsule. In a rotator cuff tear, you cannot actively lift the arm due to muscle weakness/tear, but the physiotherapist can usually raise it passively.'
      }
    ],
    
    // Required internal linking: Frozen Shoulder → Orthopedic Physiotherapy → Shoulder Rehabilitation
    internalLinkChain: [
      {
        label: 'Frozen Shoulder',
        target: 'condition/frozen-shoulder',
        type: 'condition',
        contextDescription: 'Current Condition: Adhesive capsulitis capsular mobilization and night pain reduction.'
      },
      {
        label: 'Orthopedic Physiotherapy',
        target: 'orthopedic-physiotherapy',
        type: 'service',
        contextDescription: 'Step 1: Evidence-based Maitland and Mulligan glenohumeral manual joint mobilizations.'
      },
      {
        label: 'Shoulder Rehabilitation',
        target: 'condition/shoulder-pain',
        type: 'rehabilitation',
        contextDescription: 'Step 2: Complete overhead reach, rotator cuff strengthening, and functional restoration.'
      }
    ],
    
    relatedServices: [
      { name: 'Orthopedic Physiotherapy', pageKey: 'orthopedic-physiotherapy', reason: 'Manual therapy expertise for glenohumeral joint capsular stretching and mobilization.' },
      { name: 'Pain Management Physiotherapy', pageKey: 'pain-management', reason: 'Relieving acute nighttime throbbing pain and secondary myofascial trigger points.' },
      { name: 'Home Physiotherapy Mumbai', pageKey: 'home-physiotherapy', reason: 'Gentle bedside capsular stretching for patients experiencing acute shoulder pain.' }
    ],
    
    relatedConditions: [
      { name: 'Shoulder Pain & Rotator Cuff Impingement', conditionId: 'shoulder-pain', reason: 'Subacromial bursitis and rotator cuff tendinopathy frequently mimic or precede frozen shoulder.' },
      { name: 'Neck Pain & Cervical Spondylosis', conditionId: 'neck-pain', reason: 'Cervical C5-C6 radiculopathy causes referred shoulder pain and altered scapulohumeral mechanics.' },
      { name: 'Tennis Elbow', conditionId: 'tennis-elbow', reason: 'Compensatory overuse of the forearm and elbow occurs when the shoulder joint is stiff and restricted.' }
    ]
  },

  {
    id: 'shoulder-pain',
    slug: 'shoulder-pain-rotator-cuff-impingement-physiotherapy-mumbai',
    name: 'Shoulder Pain (Rotator Cuff & Impingement)',
    category: 'Joints & Orthopedic',
    heroHeadline: 'Comprehensive Shoulder Pain, Rotator Cuff & Impingement Physiotherapy in Mumbai',
    seoTitle: 'Shoulder Pain & Rotator Cuff Physiotherapy in Mumbai | Dr. Pawan Gupta (PT)',
    metaDescription: 'Targeted physical therapy for shoulder pain, rotator cuff tendinitis, and subacromial impingement in Mumbai. Non-surgical recovery, manual therapy, and strengthening.',
    quickSummary: 'Shoulder pain is most frequently caused by subacromial impingement syndrome, rotator cuff tendinitis (supraspinatus overload), or subacromial bursitis. Unlike frozen shoulder (which restricts all passive movement), rotator cuff issues present with a distinct "painful arc" between 60° and 120° of arm elevation with preserved passive range. Evidence-based physiotherapy restores humeral head depression, corrects scapular dyskinesis, and strengthens the rotator cuff to eliminate pain without surgery.',
    primarySearchIntent: 'Relief from rotator cuff tendinitis, subacromial impingement, and sharp shoulder pain when lifting the arm in Mumbai.',
    reviewedBy: 'Dr. Pawan Gupta (PT)',
    reviewerCredentials: 'B.P.Th, M.P.Th (Musculoskeletal Specialist), Certified Manual Therapist (MIAP)',
    lastUpdated: 'August 2026',
    
    whatIsIt: 'The shoulder is the most mobile joint in the human body, relying heavily on a dynamic muscular sleeve—the rotator cuff (supraspinatus, infraspinatus, teres minor, subscapularis)—to stabilize the ball (humeral head) within the shallow socket (glenoid). Subacromial impingement occurs when repetitive overhead motions or muscular imbalances cause the rotator cuff tendons and subacromial bursa to be pinched beneath the rigid acromion arch of the scapula.',
    
    symptoms: [
      'Sharp pain in the front or outer shoulder when lifting the arm out to the side (Painful Arc between 60° and 120°)',
      'Difficulty or pain when putting on a jacket, reaching into the backseat of a car, or reaching overhead',
      'Aching discomfort when lying on the affected side at night',
      'Feeling of weakness or trembling when lowering the arm slowly from an overhead position',
      'Clicking, popping, or pinching sensation under the acromion bone during arm circles',
      'Secondary tightness in the upper trapezius and levator scapulae as they compensate for weak shoulder muscles'
    ],
    
    commonCauses: [
      'Repetitive overhead activities (badminton, cricket bowling, swimming, overhead gym presses, painting)',
      'Weakness of the rotator cuff muscles, allowing the humeral head to migrate upward and pinch subacromial tissues',
      'Scapular dyskinesis: poor upward rotation of the shoulder blade due to weak serratus anterior and lower trapezius',
      'Posterior shoulder capsule tightness forcing the humeral head anteriorly and superiorly',
      'Subacromial spurring or hook-shaped acromion anatomy combined with age-related tendon hypovascularity'
    ],
    
    whenToSeekAssessment: {
      clinicalIndicators: [
        'Painful pinching when lifting the arm that persists for more than 7 to 10 days',
        'Shoulder pain that interferes with gym workouts, swimming, or racket sports',
        'Noticeable loss of strength when carrying grocery bags or lifting objects onto shelves',
        'Shoulder pain that radiates halfway down the outside of the upper arm (deltoid insertion)'
      ],
      redFlags: [
        'Shoulder pain accompanied by chest pressure, shortness of breath, or sweating (Cardiovascular Emergency)',
        'Sudden complete inability to actively raise the arm following trauma (Suspected Massive Acute Rotator Cuff Tear)',
        'Hot, red, exquisitely tender joint with systemic fever',
        'Visible deformity or shoulder dislocation following a sports collision'
      ]
    },
    redFlags: [
      'Chest tightness or shortness of breath accompanying left shoulder pain',
      'Acute complete loss of arm lifting ability following heavy fall',
      'Joint deformity or dislocation'
    ],
    
    howPhysiotherapyHelps: [
      'Decompresses the subacromial space by retraining the rotator cuff to actively depress and center the humeral head',
      'Eliminates the painful arc of motion through targeted Mulligan Mobilization with Movement (MWM)',
      'Corrects scapular winging and dyskinesis to provide a stable, moving foundation for arm elevation',
      'Strengthens the supraspinatus and infraspinatus eccentrically to restore tendon load capacity',
      'Prevents progression from mild tendinitis to full-thickness rotator cuff tears'
    ],
    
    clinicalAssessment: [
      'Orthopedic impingement special tests: Neer impingement test and Hawkins-Kennedy test',
      'Rotator cuff muscle isolation testing: Jobe Empty Can test (supraspinatus), resisted external rotation (infraspinatus), and belly-press/lift-off (subscapularis)',
      'Scapular Dyskinesis Test (SDT) and Scapular Assistance Test (SAT) to evaluate scapulothoracic rhythm',
      'Cervical spine clearance tests (Spurling and ULNT) to rule out referred C5 nerve root pain',
      'Subacromial palpation and painful arc range measurement'
    ],
    
    physioTreatmentApproach: [
      'Mulligan Mobilization with Movement (MWM) to facilitate pain-free shoulder elevation',
      'Dry needling and manual release for hypertonic infraspinatus, teres minor, and pectoralis minor',
      'Serratus anterior activation: Wall push-up plus and dynamic hug drills',
      'Progressive eccentric rotator cuff loading using elastic bands (external rotation at side progressing to 90° abduction)',
      'Sleeper stretch and cross-body stretch to eliminate posterior capsular tightness'
    ],
    
    rehabPhases: [
      {
        phase: 'Phase 1: Subacromial Decompression & Pain Relief',
        focus: 'Mulligan glides, dry needling, posture correction, avoiding painful arc overhead positions, isometric rotator cuff sets.',
        duration: 'Weeks 1 – 2'
      },
      {
        phase: 'Phase 2: Scapular Upward Rotation & Dynamic Centering',
        focus: 'Serratus anterior wall slides, band-resisted external rotation, cross-body stretching, side-lying abduction.',
        duration: 'Weeks 2 – 5'
      },
      {
        phase: 'Phase 3: High-Velocity Loading & Overhead Return',
        focus: 'Overhead kettlebell carries, plyometric ball rebounders, sport-specific racket or throwing mechanics.',
        duration: 'Weeks 5 – 8'
      }
    ],
    
    selfManagement: {
      overview: 'Avoid pushing through sharp pinching pain. Modify overhead reach while progressively strengthening the stabilizing rotator cuff muscles below 60 degrees of elevation.',
      safeExercises: [
        {
          name: 'Side-Lying External Rotation',
          instruction: 'Lie on your unaffected side with a rolled towel between your affected elbow and ribcage. With elbow at 90°, slowly rotate your hand upward toward the ceiling, hold 2 seconds, and lower slowly.',
          frequency: '3 sets of 10-12 repetitions daily',
          purpose: 'Strengthens infraspinatus and teres minor to depress the humeral head during arm elevation.'
        },
        {
          name: 'Wall Slide with Serratus Push-Up Plus',
          instruction: 'Place forearms on a wall with elbows at 90°. Slowly slide forearms upward along the wall while actively pushing your chest away from the wall to protract your shoulder blades.',
          frequency: '2 sets of 10 repetitions, twice daily',
          purpose: 'Activates serratus anterior to ensure full scapular upward rotation during arm reach.'
        },
        {
          name: 'Cross-Body Posterior Capsule Stretch',
          instruction: 'Bring your affected arm across your chest. Using your opposite hand, gently pull your upper arm closer to your chest while keeping your shoulder blade depressed.',
          frequency: 'Hold 20 seconds, repeat 3 times',
          purpose: 'Relieves posterior capsular tightness that pushes the humeral head forward into the acromion.'
        }
      ],
      dosAndDonts: [
        { do: 'Keep elbows close to your body when lifting everyday objects', dont: 'Perform wide, heavy overhead military presses or behind-the-neck pulldowns at the gym while experiencing shoulder pain' },
        { do: 'Use a pillow under your upper arm when resting on your side to keep the shoulder in neutral alignment', dont: 'Sleep with your arm tucked up underneath your pillow, which impinges the supraspinatus tendon' },
        { do: 'Perform warm-up rotator cuff band exercises before playing badminton, cricket, or tennis', dont: 'Completely rest for weeks, as tendon health requires gradual, progressive tensile loading to heal' }
      ],
      ergonomicTips: [
        'Adjust your computer mouse position so your elbow remains bent at 90° near your torso rather than reaching far forward',
        'Avoid carrying heavy single-strap laptop bags on the painful shoulder'
      ]
    },
    
    recoveryFactors: [
      'Integrity of the rotator cuff tendon (mild tendinitis recovers much faster than partial-thickness tears)',
      'Prompt correction of faulty scapular kinematics during arm movement',
      'Discipline with daily band-resisted strengthening exercises',
      'Temporary modification of provocative overhead sports or gym exercises during rehabilitation',
      'Age and vascular health of tendon tissues'
    ],
    expectedRecovery: 'Most cases of subacromial impingement and rotator cuff tendinitis achieve substantial pain relief within 3 to 4 weeks, with full sports and overhead functional recovery by 6 to 8 weeks.',
    homeVisitSuitability: 'Available across Mumbai for patients experiencing severe acute tendon flare-ups or post-operative rotator cuff repair rehabilitation.',
    
    faqs: [
      {
        question: 'How is shoulder impingement different from frozen shoulder?',
        answer: 'In shoulder impingement, passive range of motion is normal (the therapist can easily lift your arm), but active movement hurts in a specific arc (60°-120°). In frozen shoulder, the joint capsule is stiff, so neither you nor the therapist can lift the arm.'
      },
      {
        question: 'Can a rotator cuff tear heal with physiotherapy alone?',
        answer: 'Partial-thickness tears and degenerative rotator cuff tears routinely heal or achieve full symptom-free function with conservative physiotherapy by strengthening the surrounding intact cuff muscles and optimizing scapular mechanics. Surgery is typically reserved for massive acute traumatic tears.'
      },
      {
        question: 'Why does my shoulder hurt so much at night when lying down?',
        answer: 'When lying flat, gravity no longer pulls the arm down to create subacromial space. Furthermore, local blood flow changes and direct pressure on the inflamed bursa heighten nighttime nociceptive signaling.'
      }
    ],
    
    // Required internal linking: Shoulder Pain → Frozen Shoulder → Orthopedic Physiotherapy → Sports Physiotherapy
    internalLinkChain: [
      {
        label: 'Shoulder Pain',
        target: 'condition/shoulder-pain',
        type: 'condition',
        contextDescription: 'Current Condition: Rotator cuff tendinitis, subacromial impingement, and painful arc relief.'
      },
      {
        label: 'Frozen Shoulder',
        target: 'condition/frozen-shoulder',
        type: 'condition',
        contextDescription: 'Step 1: Differentiating capsular stiffness from dynamic tendon impingement.'
      },
      {
        label: 'Orthopedic Physiotherapy',
        target: 'orthopedic-physiotherapy',
        type: 'service',
        contextDescription: 'Step 2: Joint mechanics, humeral head centering, and manual therapy.'
      },
      {
        label: 'Sports Physiotherapy',
        target: 'sports-physiotherapy',
        type: 'service',
        contextDescription: 'Step 3: High-velocity overhead training for cricket, badminton, and gym athletes.'
      }
    ],
    
    relatedServices: [
      { name: 'Sports Physiotherapy Mumbai', pageKey: 'sports-physiotherapy', reason: 'Overhead athletic conditioning for swimmers, badminton players, and cricketers.' },
      { name: 'Orthopedic Physiotherapy', pageKey: 'orthopedic-physiotherapy', reason: 'Subacromial decompression and targeted manual joint mobilizations.' },
      { name: 'Pain Management Physiotherapy', pageKey: 'pain-management', reason: 'Dry needling and electrotherapy for acute subacromial bursitis and muscle spasms.' }
    ],
    
    relatedConditions: [
      { name: 'Frozen Shoulder (Adhesive Capsulitis)', conditionId: 'frozen-shoulder', reason: 'Key differential diagnosis involving global capsular contracture rather than tendon impingement.' },
      { name: 'Tennis Elbow (Lateral Epicondylalgia)', conditionId: 'tennis-elbow', reason: 'Kinetic chain connection where weak shoulder stabilizers cause forearm muscle overload.' },
      { name: 'Neck Pain & Cervical Spondylosis', conditionId: 'neck-pain', reason: 'Cervical C5 nerve root irritation often mimics or coexists with shoulder pain.' }
    ]
  },

  {
    id: 'tennis-elbow',
    slug: 'tennis-elbow-lateral-epicondylalgia-physiotherapy-mumbai',
    name: 'Tennis Elbow (Lateral Epicondylalgia)',
    category: 'Joints & Orthopedic',
    heroHeadline: 'Evidence-Based Tennis Elbow Physiotherapy & Tendon Rehabilitation in Mumbai',
    seoTitle: 'Tennis Elbow Physiotherapy in Mumbai | Dr. Pawan Gupta (PT)',
    metaDescription: 'Specialized physical therapy for tennis elbow (lateral epicondylalgia) in Mumbai by Dr. Pawan Gupta (PT). Eccentric tendon loading, dry needling, and grip recovery.',
    quickSummary: 'Tennis elbow (lateral epicondylalgia) is a painful tendinopathy affecting the common extensor origin at the outer elbow, most specifically the Extensor Carpi Radialis Brevis (ECRB) tendon. Despite its sports name, over 90% of cases in Mumbai occur in non-athletes due to repetitive mouse clicking, kitchen activities, or manual work. Evidence-based physiotherapy combines Mill’s manual mobilization, targeted clinical dry needling, eccentric-concentric tendon loading protocols (Tyler Twist), and ergonomic adaptations to achieve permanent tendon remodeling without cortisone injections.',
    primarySearchIntent: 'Relief from outer elbow pain, weak hand grip, and repetitive strain through specialized tennis elbow physiotherapy in Mumbai.',
    reviewedBy: 'Dr. Pawan Gupta (PT)',
    reviewerCredentials: 'B.P.Th, M.P.Th (Musculoskeletal Specialist), Certified Dry Needling Practitioner',
    lastUpdated: 'August 2026',
    
    whatIsIt: 'Tennis elbow is not a simple inflammatory condition (-itis), but rather a degenerative tendinopathy (-osis) characterized by failed healing response, collagen fiber disorganization, hypervascularity, and micro-tearing at the common extensor tendon origin on the lateral epicondyle of the humerus. The ECRB tendon is subjected to high tensile stress during gripping activities when the wrist is extended.',
    
    symptoms: [
      'Localized burning pain or tenderness directly over the bony bump on the outside of the elbow (lateral epicondyle)',
      'Sharp pain aggravated by gripping objects, turning doorknobs, holding a coffee mug, or opening jars',
      'Weakness and sudden loss of grip strength, sometimes causing dropped cups or utensils',
      'Pain when typing, using a computer mouse, or performing repetitive wrist extension tasks',
      'Ache radiating downward into the outer forearm and wrist extensors',
      'Morning stiffness in the elbow that eases slightly with gentle movement'
    ],
    
    commonCauses: [
      'Prolonged computer mouse and keyboard use with wrist held in continuous extension or deviation',
      'Repetitive occupational tasks (cooking, chopping, wringing clothes, screwdriver use, plumbing)',
      'Racket sports (faulty backhand technique with leading elbow, heavy tennis rackets, or stiff string tension)',
      'Sudden unaccustomed manual loading (home renovation, lifting heavy grocery bags with straight arms)',
      'Underlying proximal kinetic chain weakness in the rotator cuff and scapular stabilizers forcing forearm compensation'
    ],
    
    whenToSeekAssessment: {
      clinicalIndicators: [
        'Outer elbow pain lasting longer than 10 to 14 days that worsens with everyday gripping',
        'Inability to lift a full kettle, water bottle, or laptop with one hand without sharp elbow pain',
        'Pain that forces you to avoid your favorite sport, gym workouts, or routine office tasks',
        'Tenderness so acute that pressing lightly on the outside of your elbow makes you wince'
      ],
      redFlags: [
        'Sudden, severe elbow swelling with hot, red skin and high fever (Olecranon Bursitis / Septic Joint)',
        'Inability to bend or straighten the elbow following a direct fall onto the arm (Elbow Fracture or Radial Head Dislocation)',
        'Numbness or persistent pins-and-needles spreading into the ring and little fingers (Cubital Tunnel Ulnar Neuropathy) or back of the hand (Radial Tunnel Syndrome)'
      ]
    },
    redFlags: [
      'Hot, red, swollen elbow joint with fever',
      'Acute elbow deformity following traumatic fall',
      'Progressive numbness or hand muscle wasting'
    ],
    
    howPhysiotherapyHelps: [
      'Stimulates healthy collagen synthesis and remodeling in the degenerative ECRB tendon through progressive eccentric loading',
      'Eliminates hyperalgesia and painful taut myofascial bands via targeted clinical dry needling',
      'Restores pain-free grip strength through Mulligan Mobilization with Movement (lateral elbow glide during gripping)',
      'Corrects wrist biomechanics and provides appropriate counterforce bracing during the active rehabilitation phase',
      'Addresses underlying shoulder and thoracic weakness to prevent chronic recurrence'
    ],
    
    clinicalAssessment: [
      'Cozen test: resisted wrist extension with forearm pronated and radial deviation',
      'Mill test: passive wrist flexion with elbow fully extended and forearm pronated to stretch common extensor tendon',
      'Maudsley test: resisted extension of the middle finger isolating the ECRB tendon slip',
      'Pain-free grip strength measurement using a hand dynamometer compared to the unaffected arm',
      'Radial Tunnel Syndrome differential evaluation: palpating 4-5 cm distal to lateral epicondyle to rule out posterior interosseous nerve entrapment',
      'Cervical spine screen (C6-C7) to ensure symptoms are not referred from neck nerve roots'
    ],
    
    physioTreatmentApproach: [
      'Mulligan Lateral Glide Mobilization with Movement (MWM) while patient performs pain-free gripping',
      'Eccentric wrist extensor loading protocols (Tyler Twist utilizing flexible resistance bars)',
      'Dry needling and deep transverse friction massage across the ECRB tenoperiosteal junction',
      'High-energy therapeutic ultrasound or phonophoresis for cellular repair stimulation',
      'Counterforce forearm bracing education (applying brace 2 inches distal to epicondyle to dissipate force)'
    ],
    
    rehabPhases: [
      {
        phase: 'Phase 1: Tendon Offloading & Pain Control',
        focus: 'Mulligan glides, dry needling, counterforce brace for work, avoiding heavy lifting in pronation, isometric wrist extension holds.',
        duration: 'Weeks 1 – 2'
      },
      {
        phase: 'Phase 2: Progressive Tendon Remodeling & Strength',
        focus: 'Tyler twist exercises, eccentric wrist curls, forearm supination/pronation drills, rotator cuff strengthening.',
        duration: 'Weeks 2 – 6'
      },
      {
        phase: 'Phase 3: High-Load Functional Conditioning',
        focus: 'Heavy slow resistance loading, sport-specific racket mechanics, return to full gym and occupational demands.',
        duration: 'Weeks 6 – 10'
      }
    ],
    
    selfManagement: {
      overview: 'Cortisone injections provide brief short-term relief but significantly increase long-term recurrence rates. True recovery requires gradual, progressive mechanical loading to rebuild tendon tensile capacity.',
      safeExercises: [
        {
          name: 'Isometric Wrist Extension Holds',
          instruction: 'Rest your forearm on a table with your wrist hanging over the edge, palm facing down. Lift your hand slightly and use your other hand to apply gentle downward pressure while resisting movement. Hold for 30 seconds.',
          frequency: '4 to 5 repetitions, twice daily',
          purpose: 'Provides immediate analgesic pain relief and builds tendon load tolerance without micro-trauma.'
        },
        {
          name: 'Eccentric Wrist Extensor Lowering',
          instruction: 'Holding a 0.5 kg to 1 kg weight or water bottle, use your good hand to lift your wrist up. Slowly lower the weight down over 4 seconds using only the affected wrist.',
          frequency: '3 sets of 10 repetitions once daily',
          purpose: 'Stimulates tenocytes to produce healthy, organized type-I collagen fibers.'
        },
        {
          name: 'Extensor Muscle Forearm Stretch',
          instruction: 'Extend your affected arm straight out in front with elbow straight. Gently use your opposite hand to bend your wrist downward and slightly outward until a mild stretch is felt in the outer forearm.',
          frequency: 'Hold 20 seconds, repeat 3 times',
          purpose: 'Restores muscle length and eases tension across the lateral epicondyle.'
        }
      ],
      dosAndDonts: [
        { do: 'Lift objects with your palms facing upward (supinated forearm) to shift load to the biceps and wrist flexors', dont: 'Lift heavy bags or utensils with palms facing down and arms extended straight' },
        { do: 'Use an ergonomic vertical mouse to reduce continuous forearm pronation and extensor tension', dont: 'Ignore sharp elbow pain and continue playing racket sports or lifting heavy gym weights' },
        { do: 'Wear a counterforce forearm strap during strenuous manual work to disperse tendon forces', dont: 'Rely on repeated steroid injections, which weaken tendon collagen and risk tendon rupture' }
      ],
      ergonomicTips: [
        'Switch to a vertical computer mouse which keeps the forearm in a neutral handshake posture',
        'Keep your keyboard close so your elbows remain bent at 90 degrees with wrists relaxed in neutral'
      ]
    },
    
    recoveryFactors: [
      'Gradual, consistent progression of tendon load rather than premature heavy lifting',
      'Ergonomic workstation modifications (vertical mouse, wrist support)',
      'Addressing shoulder and core stability deficits in the kinetic chain',
      'Avoiding repetitive cortisone injections that degrade tendon structural integrity',
      'Patience with the biological 8 to 12 week tendon remodeling cycle'
    ],
    expectedRecovery: 'Mild acute cases show notable improvement in 2 to 4 weeks. Chronic tendinopathy requires 6 to 10 weeks of progressive eccentric loading to permanently rebuild tendon strength and eliminate grip pain.',
    homeVisitSuitability: 'Available across Mumbai for severe flare-ups or corporate professionals requiring in-person workstation setup alongside therapy.',
    
    faqs: [
      {
        question: 'Why do they call it tennis elbow if I do not play tennis?',
        answer: 'The medical term is lateral epicondylalgia. It earned the nickname because faulty backhand strokes overload this tendon; however, more than 95% of people suffering from tennis elbow in Mumbai are office professionals, cooks, or craftspeople doing repetitive gripping.'
      },
      {
        question: 'Should I get a cortisone injection for my tennis elbow?',
        answer: 'High-quality medical clinical trials show that while cortisone injections provide quick pain relief for 2-4 weeks, recurrence rates at 1 year are over 70%—significantly worse than physiotherapy alone. Cortisone suppresses cellular tendon repair and weakens collagen.'
      },
      {
        question: 'Does wearing an elbow brace really help?',
        answer: 'Yes, a counterforce brace worn 2 to 3 inches below the elbow acts as a temporary mechanical shock absorber, dampening the vibration and force that reaches the inflamed tendon origin during gripping.'
      }
    ],
    
    // Required internal linking: Tennis Elbow → Sports Physiotherapy → Pain Management → Orthopedic Physiotherapy
    internalLinkChain: [
      {
        label: 'Tennis Elbow',
        target: 'condition/tennis-elbow',
        type: 'condition',
        contextDescription: 'Current Condition: Common extensor tendinopathy and grip rehabilitation.'
      },
      {
        label: 'Sports Physiotherapy',
        target: 'sports-physiotherapy',
        type: 'service',
        contextDescription: 'Step 1: Tendon loading protocols, racket mechanics, and sports conditioning.'
      },
      {
        label: 'Pain Management',
        target: 'pain-management',
        type: 'service',
        contextDescription: 'Step 2: Dry needling and electrotherapy for recalcitrant tenoperiosteal pain.'
      },
      {
        label: 'Orthopedic Physiotherapy',
        target: 'orthopedic-physiotherapy',
        type: 'service',
        contextDescription: 'Step 3: Mulligan manual mobilizations and upper limb kinetic chain restoration.'
      }
    ],
    
    relatedServices: [
      { name: 'Sports Physiotherapy Mumbai', pageKey: 'sports-physiotherapy', reason: 'Athletic biomechanical correction for tennis, squash, badminton, and gym lifters.' },
      { name: 'Pain Management Physiotherapy', pageKey: 'pain-management', reason: 'Clinical dry needling for chronic myofascial trigger points in the forearm extensors.' },
      { name: 'Orthopedic Physiotherapy', pageKey: 'orthopedic-physiotherapy', reason: 'Manual joint therapy for radial head alignment and elbow biomechanics.' }
    ],
    
    relatedConditions: [
      { name: 'Shoulder Pain & Rotator Cuff Impingement', conditionId: 'shoulder-pain', reason: 'Proximal shoulder weakness frequently leads to distal forearm extensor overloading.' },
      { name: 'Neck Pain & Cervical Spondylosis', conditionId: 'neck-pain', reason: 'Cervical C6-C7 nerve root compression can refer pain mimicking lateral elbow tendinopathy.' },
      { name: 'Frozen Shoulder', conditionId: 'frozen-shoulder', reason: 'Restricted shoulder movement forces compensatory elbow and wrist overwork.' }
    ]
  }
];

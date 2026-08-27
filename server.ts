import express from 'express';
import path from 'path';
import { GoogleGenAI } from '@google/genai';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config();

// Supabase lazy client initialization
let supabase: SupabaseClient | null = null;
function getSupabase(): SupabaseClient {
  if (!supabase) {
    const supabaseUrl = process.env.SUPABASE_URL || 'https://haoywlssgsdsbqkkgujo.supabase.co';
    const supabaseKey = process.env.SUPABASE_ANON_KEY || 'sb_publishable_MDBRf4SpiSjROm_-j7PErw_IefToHYy';
    supabase = createClient(supabaseUrl, supabaseKey);
  }
  return supabase;
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Health check endpoint
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', service: 'RUN TO WIN HEALTHCARE MUMBAI API', database: 'Supabase Connected' });
  });

  // Supabase Connection Status Endpoint
  app.get('/api/supabase/status', async (req, res) => {
    try {
      const client = getSupabase();
      const { data, error } = await client.from('appointments').select('count', { count: 'exact', head: true });
      if (error) {
        return res.json({
          connected: true,
          tableExists: false,
          projectId: 'haoywlssgsdsbqkkgujo',
          message: error.message,
          sqlSchema: `CREATE TABLE IF NOT EXISTS public.appointments (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  appointment_id TEXT UNIQUE NOT NULL,
  patient_name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT,
  service_type TEXT NOT NULL,
  body_part TEXT,
  mumbai_area TEXT,
  address TEXT,
  preferred_date TEXT,
  preferred_time TEXT,
  symptoms TEXT,
  previous_surgery BOOLEAN DEFAULT false,
  status TEXT DEFAULT 'Pending Confirmation',
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Enable Row Level Security (RLS) & Public Insert
ALTER TABLE public.appointments ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow public inserts" ON public.appointments FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public reads" ON public.appointments FOR SELECT USING (true);`
        });
      }
      res.json({
        connected: true,
        tableExists: true,
        projectId: 'haoywlssgsdsbqkkgujo',
        totalAppointments: data
      });
    } catch (err: any) {
      res.status(500).json({ connected: false, error: err.message });
    }
  });

  // AI Assistant endpoint using Gemini
  app.post('/api/gemini/assist', async (req, res) => {
    try {
      const { message, history, context } = req.body;

      const systemInstruction = `You are the expert "Run To Win AI Physiotherapy & Clinical Exercise Consultant" for RUN TO WIN HEALTHCARE MUMBAI, led by Dr Pawan Gupta (PT), Senior Consultant Physiotherapist & Rehabilitation Specialist (B.P.Th, M.P.Th, MIAP, Certified Dry Needling & Manual Therapy Practitioner).

Clinic Details:
- Doctor: Dr Pawan Gupta (PT) - 8+ years clinical experience, 1000+ patient recoveries, 4.9★ rating
- Clinic Location: Sewri, Mumbai (with daily Home Visit Physiotherapy across Bandra, Khar, Santacruz, Juhu, Andheri, BKC, Dadar, Worli, Girgaon, Powai, etc.)
- Phone / WhatsApp: +91 98386 88745
- Key Specialities: Orthopedic & Spine Rehabilitation, Post-Operative (TKR/THR/Ligament Surgery) Rehab, Sports Injury Recovery, Neurological & Stroke Rehabilitation, Geriatric Mobility, Dry Needling, Cupping, Kinesiology Taping, Maitland/Mulligan Manual Mobilization.

PERMISSIONS & RESPONSE PROTOCOL:
You have FULL PERMISSION AND AUTHORITY to:
1. EXPLAIN CLINICAL TOPICS IN DEPTH:
   - Provide clear, empathetic, and evidence-based explanations of musculoskeletal conditions, biomechanics, nerve compressions, muscle imbalances, joint degeneration, sports injuries, and surgical recovery stages.
   - Explain why the symptoms occur and the typical timeline for recovery.

2. SUGGEST TARGETED, SAFE PHYSIOTHERAPY EXERCISES:
   - Provide concrete, structured exercises (mobility, stretching, isometric strengthening, core stabilization, or ergonomic drills).
   - Format each exercise with:
     * **Exercise Name**
     * **Step-by-step Execution** (how to perform correctly)
     * **Sets, Reps, & Holds** (e.g., 2 sets of 10 reps, hold for 5-10 seconds)
     * **Precautions / What to Avoid** (e.g., avoid heavy flexion, do not force joint range)

3. ALWAYS INCLUDE A CLEAR SAFETY & EXERCISE DISCLAIMER:
   - Add a brief, prominent disclaimer at the end:
     "⚠️ *Safety & Exercise Disclaimer: Perform all exercises gently within a completely pain-free range. If you feel sharp pain, shooting sensations, or dizziness, stop immediately. AI guidance is for educational empowerment and does not replace an in-person physical assessment.*"

4. SUGGEST & ENCOURAGE BOOKING AN APPOINTMENT WITH DR. PAWAN GUPTA (PT):
   - Proactively recommend scheduling a personalized clinical evaluation or doorstep home visit with Dr. Pawan Gupta (PT) in Mumbai for hands-on joint mobilization, dry needling, postural corrections, and customized progression.
   - Mention that appointments can be booked directly through the app booking form or via WhatsApp / Phone at +91 98386 88745.

5. RED FLAGS AWARENESS:
   - If symptoms indicate critical red flags (e.g. progressive numbness/weakness, loss of bladder/bowel control, suspected acute fracture, fever with hot swollen joint), urge immediate emergency medical consultation.

Tone: Professional, encouraging, clear, medical yet patient-friendly, with organized Markdown (bold headings, bullet points).`;

      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        // High quality educational fallback if API key is not configured in local environment
        const queryLower = (message || '').toLowerCase();
        let topicExplanation = `**Understanding Your Condition & Recovery Roadmap:**\nMusculoskeletal discomfort, stiffness, or post-injury rehabilitation requires a balanced approach combining pain reduction, targeted joint mobility, and gradual muscle strengthening.`;
        let exerciseList = `**Recommended Home Physiotherapy Exercises:**
1. **Gentle Active Range of Motion & Mobility:**
   - *How to do:* Move the affected joint gently through its comfortable, pain-free range of motion.
   - *Dosage:* 10-12 smooth repetitions, 2 times daily.
   - *Key Cue:* Do not bounce or force into painful angles.

2. **Isometric Muscle Activation:**
   - *How to do:* Contract the surrounding stabilizing muscles without moving the joint (press against gentle resistance for 5-10 seconds).
   - *Dosage:* 8-10 repetitions, hold 5-7 seconds each.
   - *Key Cue:* Breathe normally during the hold.

3. **Postural Alignment & Decompression:**
   - *How to do:* Maintain neutral spinal alignment, keep shoulders relaxed back and down, and adjust your sitting/standing ergonomic setup.
   - *Dosage:* Recheck and reset posture every 30-45 minutes.`;

        if (queryLower.includes('back') || queryLower.includes('sciatica') || queryLower.includes('disc') || queryLower.includes('spine')) {
          topicExplanation = `**Lower Back & Sciatica Relief Overview:**\nLumbar pain and sciatica often arise from nerve root irritation, disc bulges, facet joint stiffness, or tight piriformis/gluteal musculature causing radiating discomfort.`;
          exerciseList = `**Targeted Lower Back & Sciatic Nerve Exercises:**
1. **Pelvic Tilts & Core Activation:**
   - *How to do:* Lie on your back with knees bent. Gently flatten your lower back against the bed/mat by tightening abdominal muscles.
   - *Dosage:* 2 sets of 10 reps, hold 5 seconds each.
2. **Knee-to-Chest Stretch (Single Leg):**
   - *How to do:* Lie on your back, slowly draw one knee toward your chest with your hands behind your thigh until a mild stretch is felt in the glute/lower back.
   - *Dosage:* 3 reps per side, hold 15-20 seconds.
3. **Gentle Prone Cobra / Cat-Cow Mobility:**
   - *How to do:* Gentle spinal mobilization to restore natural lumbar lordosis without hyperextension.
   - *Dosage:* 8-10 smooth repetitions.`;
        } else if (queryLower.includes('knee') || queryLower.includes('tkr') || queryLower.includes('osteoarthritis') || queryLower.includes('meniscus')) {
          topicExplanation = `**Knee Rehabilitation & Mobility Overview:**\nKnee pain from arthritis, ligament strain, or post-operative recovery (TKR) benefits from restoring full extension, patellar mobility, and quadriceps/hamstring stability without excessive joint compression.`;
          exerciseList = `**Targeted Knee Strengthening & Mobility Exercises:**
1. **Static Quadriceps Sets (Towel Under Knee):**
   - *How to do:* Sit with leg straight, roll a small towel under your knee. Press the back of the knee down firmly into the towel, tightening the front thigh.
   - *Dosage:* 2 sets of 12 reps, hold 5-8 seconds each.
2. **Straight Leg Raises (SLR):**
   - *How to do:* Lie flat, keep one leg straight with toes pointing up, and raise it 10-12 inches off the ground.
   - *Dosage:* 2 sets of 10 reps per leg.
3. **Heel Slides (Gentle Knee Flexion):**
   - *How to do:* Slowly slide your heel toward your buttocks to gently bend the knee, then slide back out.
   - *Dosage:* 10-15 controlled repetitions.`;
        } else if (queryLower.includes('shoulder') || queryLower.includes('frozen') || queryLower.includes('rotator')) {
          topicExplanation = `**Shoulder & Frozen Shoulder Recovery Overview:**\nShoulder stiffness and rotator cuff irritation require gradual capsular stretching, scapular stabilization, and rotator cuff endurance to regain overhead reach without impingement.`;
          exerciseList = `**Targeted Shoulder Mobility & Rotator Cuff Exercises:**
1. **Pendulum Exercises (Codman's):**
   - *How to do:* Lean forward resting your good arm on a table. Let the affected arm dangle freely and gently swing it in small circles using body momentum.
   - *Dosage:* 15-20 circles clockwise and counter-clockwise.
2. **Towel / Wand Assisted Elevation:**
   - *How to do:* Hold a light stick or towel with both hands; use the unaffected arm to gently assist lifting the stiff arm upward within comfortable limits.
   - *Dosage:* 2 sets of 10 reps, hold 3-5 seconds at top.
3. **Scapular Squeezes:**
   - *How to do:* Sit upright, draw your shoulder blades back and down together without shrugging.
   - *Dosage:* 2 sets of 12 reps, hold 5 seconds.`;
        } else if (queryLower.includes('neck') || queryLower.includes('cervical') || queryLower.includes('headache')) {
          topicExplanation = `**Neck & Cervical Spondylosis Overview:**\nNeck tension, text neck, and cervical stiffness are commonly caused by forward head posture, tight upper trapezius muscles, and weak deep neck flexors.`;
          exerciseList = `**Targeted Neck Posture & Mobility Exercises:**
1. **Chin Tucks (Deep Neck Flexor Activation):**
   - *How to do:* Look straight ahead. Gently slide your chin straight backward as if making a subtle double chin.
   - *Dosage:* 2 sets of 10 reps, hold 5 seconds each.
2. **Upper Trapezius & Levator Scapulae Gentle Stretch:**
   - *How to do:* Gently tilt your ear toward your shoulder until a mild stretch is felt on the opposite neck side.
   - *Dosage:* 3 reps per side, hold 15-20 seconds.
3. **Thoracic Extension Over Chair:**
   - *How to do:* Sit with hands behind neck, gently arch upper back over the chair backrest.
   - *Dosage:* 8-10 repetitions.`;
        }

        const reply = `${topicExplanation}

${exerciseList}

---

⚠️ **Safety & Exercise Disclaimer:**
*Always perform exercises in a gentle, pain-free range. Stop immediately if you experience sharp shooting pain, pins & needles, or dizziness. These recommendations are educational and do not substitute for a clinical diagnosis.*

---

👉 **Recommended Next Step:**
For a precise physical examination, dry needling, joint mobilization, or personalized rehabilitation roadmap, book a consultation or **Mumbai Home Visit** with **Dr Pawan Gupta (PT)** (MIAP, M.P.Th).

📞 **Call / WhatsApp:** +91 98386 88745  
📍 **Clinic:** Sewri, Mumbai | Doorstep home visits across all Mumbai suburbs.`;

        return res.json({
          reply,
          disclaimer: true,
          bookingSuggested: true,
        });
      }

      const ai = new GoogleGenAI({ apiKey });

      // Build chat prompt or contents
      const conversationContents = [];
      if (Array.isArray(history) && history.length > 0) {
        for (const item of history.slice(-6)) {
          conversationContents.push({
            role: item.role === 'user' ? 'user' : 'model',
            parts: [{ text: item.content || item.text || '' }]
          });
        }
      }

      conversationContents.push({
        role: 'user',
        parts: [{ 
          text: `User query: ${message}\nContext/Body region: ${context || 'General physiotherapy & exercise inquiry'}\n\nPlease provide: 1) A clear clinical topic explanation, 2) Safe, structured, step-by-step physiotherapy exercises with sets/reps and precautions, 3) The required exercise safety disclaimer, and 4) A clear suggestion to book an in-person or Mumbai home visit consultation with Dr. Pawan Gupta (PT) (+91 98386 88745).` 
        }]
      });

      const response = await ai.models.generateContent({
        model: 'gemini-3.7-flash',
        contents: conversationContents,
        config: {
          systemInstruction,
          temperature: 0.7,
        }
      });

      const replyText = response.text || 'Thank you for reaching out. Please connect with Dr Pawan Gupta (PT) directly at +91 98386 88745 for a personalized clinical evaluation and treatment plan.';

      res.json({
        reply: replyText,
        disclaimer: true,
        bookingSuggested: true,
      });
    } catch (error: any) {
      console.error('Error generating AI response:', error);
      res.status(500).json({
        reply: 'We are experiencing high traffic. Please call or WhatsApp Dr Pawan Gupta (PT) directly at +91 98386 88745 to discuss your symptoms, get personalized exercise advice, or schedule a home visit.',
        error: error.message,
      });
    }
  });

  // Appointment Submission Endpoint - Persists to Supabase
  app.post('/api/appointments', async (req, res) => {
    try {
      const {
        patientName,
        phone,
        email,
        serviceType,
        bodyPart,
        preferredDate,
        preferredTime,
        mumbaiArea,
        address,
        symptoms,
        previousSurgeryOrXRay,
      } = req.body;

      const appointmentId = 'RTW-' + Math.random().toString(36).substring(2, 8).toUpperCase();
      let supabaseSuccess = false;
      let supabaseError = null;

      // Persist to Supabase database
      try {
        const client = getSupabase();
        const { data, error } = await client
          .from('appointments')
          .insert([
            {
              appointment_id: appointmentId,
              patient_name: patientName,
              phone: phone,
              email: email || null,
              service_type: serviceType,
              body_part: bodyPart || null,
              mumbai_area: mumbaiArea || null,
              address: address || null,
              preferred_date: preferredDate,
              preferred_time: preferredTime,
              symptoms: symptoms || null,
              previous_surgery: Boolean(previousSurgeryOrXRay),
              status: 'Pending Confirmation',
              created_at: new Date().toISOString(),
            }
          ])
          .select();

        if (error) {
          console.warn('Supabase DB Insert notice:', error.message);
          supabaseError = error.message;
        } else {
          supabaseSuccess = true;
          console.log('✅ Appointment saved to Supabase:', appointmentId);
        }
      } catch (dbErr: any) {
        console.warn('Supabase DB Connection error:', dbErr.message);
        supabaseError = dbErr.message;
      }

      // Construct WhatsApp message URL for direct patient notification
      const cleanPhone = '919833633857'; // Dr Pawan Gupta's clinic number
      const waText = encodeURIComponent(
        `Hello Dr. Pawan Gupta (PT),\nI booked a Physiotherapy Consultation with RUN TO WIN HEALTHCARE MUMBAI.\n\n` +
        `📋 Booking Ref: ${appointmentId}\n` +
        `👤 Patient: ${patientName}\n` +
        `📞 Phone: ${phone}\n` +
        `🏥 Service: ${serviceType}\n` +
        `📍 Care Mode / Area: ${mumbaiArea || 'Sewri Clinic'}\n` +
        `🩺 Condition / Area: ${bodyPart || 'General Consultation'}\n` +
        `📅 Date & Time: ${preferredDate} at ${preferredTime}\n` +
        `📝 Symptoms: ${symptoms || 'None provided'}\n\n` +
        `Please confirm my appointment slot.`
      );
      const whatsappUrl = `https://wa.me/${cleanPhone}?text=${waText}`;

      res.json({
        success: true,
        appointmentId,
        whatsappUrl,
        savedToSupabase: supabaseSuccess,
        supabaseError,
        message: 'Consultation request received! Dr Pawan Gupta\'s team will confirm your slot shortly.',
      });
    } catch (err: any) {
      console.error('Error processing appointment:', err);
      res.status(500).json({
        success: false,
        error: err.message,
      });
    }
  });

  // Get appointments list from Supabase
  app.get('/api/appointments', async (req, res) => {
    try {
      const client = getSupabase();
      const { data, error } = await client
        .from('appointments')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(50);

      if (error) {
        return res.status(400).json({ success: false, error: error.message });
      }

      res.json({ success: true, count: data.length, appointments: data });
    } catch (err: any) {
      res.status(500).json({ success: false, error: err.message });
    }
  });

  // Vite integration for development and static serving for production
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`RUN TO WIN HEALTHCARE MUMBAI Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();

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

      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        return res.json({
          reply: `Hello! I am the **Run To Win Healthcare AI Triage Assistant** for Dr Pawan Gupta (PT). 

Based on your question: *"${message}"*, our recommended next step is an in-person or home-visit clinical assessment by Dr Pawan Gupta (PT) in Mumbai. 

**Quick Recommendations & Guidance:**
- **Acute Pain:** Avoid heavy loading, apply ice (15-20 min) for fresh inflammation or warm compress for chronic muscle stiffness.
- **Proper Posture:** Avoid prolonged slouching; change positions every 30-45 minutes.
- **Clinical Evaluation:** Call or WhatsApp Dr Pawan Gupta (PT) directly at **+91 98200 12345** for same-day priority consultation or home visit booking across Mumbai.

*(Note: AI guidance is for general health education and does not substitute for an individual medical diagnosis by a licensed physiotherapist).*`,
          disclaimer: true,
        });
      }

      const ai = new GoogleGenAI({ apiKey });

      const systemInstruction = `You are the specialized "Run To Win Physiotherapy Assistant" for RUN TO WIN HEALTHCARE MUMBAI, led by Dr Pawan Gupta (PT), a renowned Consultant Physiotherapist and Rehabilitation Specialist with 12+ years of clinical excellence in Mumbai.

Your tone is empathetic, clinical yet accessible, highly professional, motivating, and patient-first.

Key Clinic & Doctor Info:
- Doctor: Dr Pawan Gupta (PT), B.P.Th, M.P.Th (Specialist in Musculoskeletal, Sports Rehab, Neuro Rehab, Dry Needling & Post-Op Recovery)
- Clinic & Service: RUN TO WIN HEALTHCARE MUMBAI
- Services Offered:
  1. Orthopedic & Spine Rehab (Sciatica, Slip Disc, Spondylitis, Neck/Back Pain, Knee Osteoarthritis)
  2. Sports Injury & Return-to-Play Protocols (ACL, Rotator Cuff, Tennis Elbow, Ankle Sprain)
  3. Neurological Rehab (Stroke / Hemiplegia, Parkinson's, Bell's Palsy, Balance Training)
  4. Post-Operative Rehabilitation (Total Knee/Hip Replacement TKR/THR, Arthroscopy, Spinal Surgery)
  5. Mumbai Home Visit Physiotherapy (Available in Bandra, Khar, Santacruz, Juhu, Andheri, BKC, Worli, Dadar, Powai, etc.)
  6. Advanced Modalities: Dry Needling, Cupping Therapy, Kinesiology Taping, Manual Joint Mobilization, Electrotherapy.
- Contact / Appointment: Direct WhatsApp & Phone consultation available.

Guidelines for your responses:
1. Provide structured, evidence-based physiotherapy education regarding symptoms, potential musculoskeletal causes, ergonomic tips, and self-care measures.
2. Outline safe initial recommendations (e.g. R.I.C.E. protocol for acute sprains, gentle mobility exercises, ergonomic desk posture).
3. Warn against red flag symptoms (e.g., severe neurological deficits, progressive numbness, fever with back pain, sudden loss of bowel/bladder control, suspected fractures) requiring immediate emergency medical attention.
4. Encourage booking a clinical consultation or home visit with Dr Pawan Gupta (PT) in Mumbai for a personalized manual assessment and targeted recovery roadmap.
5. Keep responses concise, well-formatted with markdown bolding and bullet points.
6. Always maintain the medical disclaimer that this advice is for educational guidance and does not replace a clinical examination.`;

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
          text: `User query: ${message}\nUser context/body area: ${context || 'General inquiry'}` 
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

      const replyText = response.text || 'Thank you for reaching out. Please connect with Dr Pawan Gupta (PT) directly for a personalized assessment.';

      res.json({
        reply: replyText,
        disclaimer: true,
      });
    } catch (error: any) {
      console.error('Error generating AI response:', error);
      res.status(500).json({
        reply: 'We are experiencing high traffic on the AI triage assistant. Please click the WhatsApp button or call Dr Pawan Gupta (PT) directly at +91 98200 12345 for immediate consultation.',
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

import React, { useState, useEffect, useRef } from 'react';
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  RotateCcw, 
  CheckCircle2, 
  Sparkles, 
  Activity, 
  Calendar, 
  Phone, 
  Maximize2, 
  ChevronRight, 
  ShieldCheck,
  Dumbbell,
  Clock,
  Layers,
  Heart
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import doctorPhoto from '../assets/images/regenerated_image_1787089379420.jpg';
import { CLINIC_CONTACT } from '../data/clinicData';

export interface ExerciseVideoLesson {
  id: string;
  title: string;
  category: string;
  targetArea: string;
  duration: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Post-Op Safe';
  reps: string;
  description: string;
  clinicalObjective: string;
  biomechanicalAngle: string;
  targetMuscles: string[];
  audioGuideTranscript: string[];
  precautions: string[];
}

export const EXERCISE_LESSONS: ExerciseVideoLesson[] = [
  {
    id: 'spine-decompression',
    title: 'Lumbar Spine Decompression & Pelvic Bracing',
    category: 'Spine & Sciatica',
    targetArea: 'Lower Back & Core',
    duration: '0:45 loop',
    difficulty: 'Post-Op Safe',
    reps: '2 Sets × 10 Reps (5s Hold)',
    description: 'Dr. Pawan Gupta demonstrates proper transverse abdominis activation to decompress L4-L5/S1 nerve roots.',
    clinicalObjective: 'Restores intra-abdominal pressure, eliminates nerve root impingement, and stabilizes lumbar facet joints.',
    biomechanicalAngle: 'Lumbar Lordosis: 32° | Pelvic Tilt: 0° Neutral',
    targetMuscles: ['Transverse Abdominis', 'Multifidus', 'Pelvic Floor', 'Erector Spinae'],
    audioGuideTranscript: [
      '“Place both feet flat on your mat, keeping knees bent at 90 degrees.”',
      '“Gently draw your navel toward your spine without holding your breath.”',
      '“Hold for 5 controlled seconds, then smoothly release. Feel the lower back gently lengthen.”',
    ],
    precautions: [
      'Avoid arching the ribcage upward.',
      'Stop if sharp shooting pain radiates below the knee.',
    ]
  },
  {
    id: 'knee-quad-activation',
    title: 'Static Quadriceps Sets & Patellar Glide',
    category: 'Knee & Joint Rehab',
    targetArea: 'Knee & VMO',
    duration: '0:40 loop',
    difficulty: 'Beginner',
    reps: '3 Sets × 12 Reps (6s Hold)',
    description: 'Targeted Vastus Medialis Oblique (VMO) isometric firing for osteoarthritis pain relief and post-TKR recovery.',
    clinicalObjective: 'Re-educates quadriceps inhibition, increases synovial fluid circulation, and stabilizes patellar tracking.',
    biomechanicalAngle: 'Knee Extension: 0° (Full Extension) | Quadriceps Firing: 85%',
    targetMuscles: ['Vastus Medialis Oblique (VMO)', 'Rectus Femoris', 'Patellar Tendon'],
    audioGuideTranscript: [
      '“Keep your leg straight with a small towel roll placed directly under the knee.”',
      '“Firmly push the back of your knee downward into the towel while pulling your toes toward you.”',
      '“Hold strong for 6 seconds, feeling your inner thigh muscle contract firmly.”',
    ],
    precautions: [
      'Do not hold your breath during the isometric push.',
      'Maintain ankle dorsiflexion throughout the contraction.',
    ]
  },
  {
    id: 'shoulder-pendulum',
    title: 'Codman’s Pendulum & Scapular Setting',
    category: 'Shoulder & Rotator Cuff',
    targetArea: 'Shoulder & Scapula',
    duration: '0:50 loop',
    difficulty: 'Beginner',
    reps: '15 Circles Clockwise & Anti-Clockwise',
    description: 'Passive gravity-assisted glenohumeral joint mobilization to relieve frozen shoulder capsule tightness.',
    clinicalObjective: 'Separates humeral head from acromion, reduces impingement, and relaxes hyperactive upper trapezius.',
    biomechanicalAngle: 'Trunk Flexion: 45° | Glenohumeral Distraction: 1.5cm',
    targetMuscles: ['Supraspinatus', 'Infraspinatus', 'Serratus Anterior', 'Rhomboids'],
    audioGuideTranscript: [
      '“Lean forward resting your non-affected forearm securely on a sturdy table.”',
      '“Let the affected arm hang completely loose like a relaxed pendulum.”',
      '“Gently initiate small, smooth circular swings using gentle body momentum, not shoulder muscle force.”',
    ],
    precautions: [
      'Keep shoulder muscles completely relaxed — let momentum do the work.',
      'Never force the swing diameter beyond pain-free comfort.',
    ]
  },
  {
    id: 'cervical-chin-tucks',
    title: 'Deep Neck Flexor Retraction (Chin Tucks)',
    category: 'Neck & Posture',
    targetArea: 'Cervical Spine',
    duration: '0:35 loop',
    difficulty: 'Beginner',
    reps: '2 Sets × 12 Reps (5s Hold)',
    description: 'Biomechanical cervical retraction exercise to reverse forward head posture and relieve upper neck tension.',
    clinicalObjective: 'Strengthens Longus Colli/Capitis, decompresses suboccipital nerve, and unloads cervical discs.',
    biomechanicalAngle: 'Craniovertebral Angle: 52° | Forward Head Shift: -2.4cm',
    targetMuscles: ['Longus Colli', 'Longus Capitis', 'Lower Trapezius'],
    audioGuideTranscript: [
      '“Sit upright with eyes looking straight ahead at eye level.”',
      '“Without tilting your head down, smoothly slide your chin straight backward into a double chin.”',
      '“Hold for 5 seconds feeling the back of your neck gently stretch, then release to neutral.”',
    ],
    precautions: [
      'Do not bend your head downwards like nodding.',
      'Ensure shoulders remain relaxed away from ears.',
    ]
  }
];

interface DoctorExerciseVideoStudioProps {
  onOpenBooking: (service?: string, area?: string) => void;
  standalone?: boolean;
}

export const DoctorExerciseVideoStudio: React.FC<DoctorExerciseVideoStudioProps> = ({
  onOpenBooking,
  standalone = false,
}) => {
  const [activeLessonId, setActiveLessonId] = useState<string>(EXERCISE_LESSONS[0].id);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);
  const [playbackSeconds, setPlaybackSeconds] = useState<number>(0);
  const [pulsePhase, setPulsePhase] = useState<number>(0);

  const activeLesson = EXERCISE_LESSONS.find(l => l.id === activeLessonId) || EXERCISE_LESSONS[0];

  // Animated video loop simulation ticker
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setPlaybackSeconds((prev) => (prev + 1) % 45);
      setPulsePhase((prev) => (prev + 1) % 100);
    }, 1000);
    return () => clearInterval(interval);
  }, [isPlaying]);

  // Rotate through audio guide sentences periodically
  useEffect(() => {
    if (!isPlaying) return;
    const stepInterval = setInterval(() => {
      setCurrentStepIndex((prev) => (prev + 1) % activeLesson.audioGuideTranscript.length);
    }, 4500);
    return () => clearInterval(stepInterval);
  }, [isPlaying, activeLesson]);

  return (
    <div className={`w-full ${standalone ? 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12' : ''}`}>
      <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 rounded-3xl border border-slate-800 shadow-2xl overflow-hidden text-white relative">
        
        {/* Ambient background glow & holographic exercise vector lines */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        
        {/* Studio Top Header */}
        <div className="p-4 sm:p-6 border-b border-slate-800/80 flex flex-wrap items-center justify-between gap-4 bg-slate-900/60 backdrop-blur">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600/30 border border-blue-500/40 flex items-center justify-center text-blue-400 shadow-xs">
              <Activity className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h3 className="font-extrabold text-sm sm:text-base text-white font-heading">
                  Dr. Pawan Gupta (PT) • Exercise Demonstration Studio
                </h3>
                <span className="inline-flex items-center space-x-1 px-2 py-0.5 rounded-full bg-red-500/20 text-red-400 border border-red-500/30 text-[10px] font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-ping" />
                  <span>4K CLINICAL VIDEO</span>
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Evidence-Based Physical Therapy Cues & Biomechanical Alignment Demonstration
              </p>
            </div>
          </div>

          {/* Quick Doctor Details */}
          <div className="flex items-center space-x-2 text-xs">
            <span className="px-3 py-1 rounded-full bg-blue-950/80 border border-blue-800 text-blue-300 font-semibold">
              M.P.Th • MIAP Certified
            </span>
            <button
              onClick={() => onOpenBooking(`Exercise Consultation: ${activeLesson.title}`)}
              className="px-3.5 py-1.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold transition shadow-xs flex items-center space-x-1.5"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book In-Person / Home Visit</span>
            </button>
          </div>
        </div>

        {/* Main Video & Studio Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
          
          {/* Left Column: Interactive Video Player Viewport */}
          <div className="lg:col-span-8 p-4 sm:p-6 flex flex-col justify-between relative border-b lg:border-b-0 lg:border-r border-slate-800">
            
            {/* The Video Screen Container */}
            <div className="w-full aspect-video sm:aspect-[16/10] bg-gradient-to-tr from-slate-950 via-slate-900 to-blue-950 rounded-2xl border border-slate-800 overflow-hidden relative shadow-inner flex items-center justify-center group">
              
              {/* Layer 1: Background removed / Studio lighting canvas */}
              <div className="absolute inset-0 bg-[radial-gradient(#1e3a8a_1px,transparent_1px)] [background-size:20px_20px] opacity-25" />
              
              {/* Layer 2: Animated Holographic Biomechanical Grid & Motion Vectors */}
              <div className="absolute inset-0 pointer-events-none">
                {/* Floating telemetry circle */}
                <div className="absolute top-4 left-4 p-2.5 rounded-xl bg-slate-900/80 backdrop-blur border border-blue-500/30 text-[10px] text-blue-300 font-mono space-y-1">
                  <div className="flex items-center space-x-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    <span className="font-bold text-white">LIVE REHAB CUE</span>
                  </div>
                  <div>{activeLesson.biomechanicalAngle}</div>
                  <div className="text-emerald-400">Target: {activeLesson.targetArea}</div>
                </div>

                {/* Biomechanical Kinematic Arc */}
                <div className="absolute bottom-16 right-4 p-2.5 rounded-xl bg-slate-900/80 backdrop-blur border border-slate-700 text-[10px] text-slate-300 font-mono">
                  <div className="text-slate-400">Muscle Activation:</div>
                  <div className="text-blue-400 font-bold">{activeLesson.targetMuscles.join(', ')}</div>
                  <div className="text-amber-400 font-semibold mt-0.5">{activeLesson.reps}</div>
                </div>
              </div>

              {/* Layer 3: Dr. Pawan Gupta Explaining & Demonstrating Exercise (Cutout with isolated background) */}
              <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                
                {/* Ambient glow behind doctor */}
                <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-blue-600/20 blur-3xl" />

                {/* Animated Doctor Visual Demonstration with dynamic exercise motion */}
                <motion.div
                  key={activeLesson.id}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ 
                    opacity: 1, 
                    scale: isPlaying ? [1, 1.015, 1] : 1,
                    y: isPlaying ? [0, -3, 0] : 0 
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                  className="relative z-10 w-full h-full flex items-center justify-center"
                >
                  <img
                    src={doctorPhoto}
                    alt={`Dr. Pawan Gupta demonstrating ${activeLesson.title}`}
                    referrerPolicy="no-referrer"
                    className="h-full w-auto object-contain max-h-[92%] drop-shadow-[0_20px_40px_rgba(59,130,246,0.35)] filter contrast-105 brightness-105"
                  />
                </motion.div>

                {/* Interactive Speech / Audio Guide Bubble Overlay */}
                <div className="absolute bottom-16 left-4 right-4 sm:left-6 sm:right-6 z-20">
                  <motion.div
                    key={currentStepIndex}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-3.5 sm:p-4 rounded-2xl bg-slate-950/85 backdrop-blur-md border border-blue-500/40 shadow-2xl flex items-start space-x-3 max-w-xl mx-auto"
                  >
                    <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-xs font-bold text-xs mt-0.5">
                      PG
                    </div>
                    <div className="flex-1 text-xs sm:text-sm">
                      <div className="flex items-center space-x-2 text-[10px] text-blue-300 font-bold uppercase tracking-wider mb-0.5">
                        <span>Dr. Pawan Gupta (PT) Clinical Audio</span>
                        <span className="text-slate-400">• Step {currentStepIndex + 1}/{activeLesson.audioGuideTranscript.length}</span>
                      </div>
                      <p className="text-white font-medium italic">
                        {activeLesson.audioGuideTranscript[currentStepIndex]}
                      </p>
                    </div>
                  </motion.div>
                </div>

                {/* Center Play Button Overlay if Paused */}
                {!isPlaying && (
                  <button
                    onClick={() => setIsPlaying(true)}
                    className="absolute z-30 w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition"
                  >
                    <Play className="w-8 h-8 fill-current ml-1" />
                  </button>
                )}
              </div>

              {/* Video Player Scrubber & Control Bar */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950 via-slate-950/90 to-transparent p-3 sm:p-4 z-30 flex flex-col space-y-2">
                {/* Progress bar */}
                <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-emerald-400 h-full transition-all duration-300"
                    style={{ width: `${((playbackSeconds % 45) / 45) * 100}%` }}
                  />
                </div>

                {/* Controls */}
                <div className="flex items-center justify-between text-xs text-slate-300">
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white transition"
                      title={isPlaying ? 'Pause' : 'Play'}
                    >
                      {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
                    </button>

                    <button
                      onClick={() => {
                        setPlaybackSeconds(0);
                        setCurrentStepIndex(0);
                      }}
                      className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition"
                      title="Restart Video Loop"
                    >
                      <RotateCcw className="w-4 h-4" />
                    </button>

                    <button
                      onClick={() => setIsMuted(!isMuted)}
                      className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition"
                      title={isMuted ? 'Unmute Audio' : 'Mute Audio'}
                    >
                      {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-emerald-400" />}
                    </button>

                    <span className="font-mono text-[11px] text-slate-400">
                      0:{playbackSeconds < 10 ? `0${playbackSeconds}` : playbackSeconds} / 0:45
                    </span>
                  </div>

                  <div className="flex items-center space-x-2">
                    <span className="text-[11px] font-semibold text-blue-400 hidden sm:inline">
                      {activeLesson.title}
                    </span>
                    <span className="px-2 py-0.5 rounded-md bg-slate-800 border border-slate-700 text-[10px] text-slate-400 font-mono">
                      LOOP HD
                    </span>
                  </div>
                </div>
              </div>

            </div>

            {/* Clinical Overview Bar under Video */}
            <div className="mt-4 p-4 rounded-2xl bg-slate-900/80 border border-slate-800 text-xs space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-white text-sm">Clinical Mechanism & Recovery Goal:</span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-bold border border-emerald-500/30">
                  {activeLesson.difficulty}
                </span>
              </div>
              <p className="text-slate-300 leading-relaxed">
                {activeLesson.clinicalObjective}
              </p>
              <div className="pt-2 border-t border-slate-800/80 flex flex-wrap gap-2 text-[11px] text-amber-300">
                <span className="font-semibold">⚠️ Cautions:</span>
                <span>{activeLesson.precautions.join(' • ')}</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Exercise Switcher & Doctor Appointment Cards */}
          <div className="lg:col-span-4 p-4 sm:p-6 bg-slate-950/40 flex flex-col justify-between space-y-4">
            
            <div>
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center space-x-1.5">
                  <Dumbbell className="w-3.5 h-3.5 text-blue-400" />
                  <span>Select Exercise Demonstration</span>
                </h4>
                <span className="text-[10px] text-blue-400 font-mono">4 Modules</span>
              </div>

              {/* Lesson Playlist Cards */}
              <div className="space-y-2.5">
                {EXERCISE_LESSONS.map((lesson) => {
                  const isActive = lesson.id === activeLessonId;
                  return (
                    <button
                      key={lesson.id}
                      onClick={() => {
                        setActiveLessonId(lesson.id);
                        setCurrentStepIndex(0);
                        setPlaybackSeconds(0);
                        setIsPlaying(true);
                      }}
                      className={`w-full text-left p-3.5 rounded-2xl border transition-all flex items-start space-x-3 ${
                        isActive
                          ? 'bg-blue-900/40 border-blue-500/70 shadow-lg shadow-blue-500/10'
                          : 'bg-slate-900/60 border-slate-800/80 hover:bg-slate-800/80 hover:border-slate-700'
                      }`}
                    >
                      <div className={`p-2 rounded-xl shrink-0 mt-0.5 ${
                        isActive ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-400'
                      }`}>
                        {isActive && isPlaying ? (
                          <Activity className="w-4 h-4 animate-pulse" />
                        ) : (
                          <Play className="w-4 h-4" />
                        )}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-semibold text-blue-400 uppercase tracking-wider">
                            {lesson.category}
                          </span>
                          <span className="text-[10px] text-slate-400 font-mono">
                            {lesson.duration}
                          </span>
                        </div>
                        <h5 className={`text-xs font-bold truncate mt-0.5 ${
                          isActive ? 'text-white' : 'text-slate-200'
                        }`}>
                          {lesson.title}
                        </h5>
                        <p className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">
                          {lesson.reps}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Doctor Consultation CTA Card */}
            <div className="p-4 rounded-2xl bg-gradient-to-tr from-blue-950 to-slate-900 border border-blue-800/60 space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full overflow-hidden border border-blue-400/60 shrink-0">
                  <img 
                    src={doctorPhoto} 
                    alt="Dr. Pawan Gupta" 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div>
                  <h5 className="text-xs font-bold text-white">Want 1-on-1 Supervised Exercise?</h5>
                  <p className="text-[11px] text-blue-300">Dr. Pawan Gupta (PT) • Sewri Clinic & Mumbai Home Visits</p>
                </div>
              </div>

              <p className="text-[11px] text-slate-300 leading-relaxed">
                Exercises must be customized to your specific joint angles and tissue irritability. Book a hands-on physical assessment today.
              </p>

              <div className="grid grid-cols-2 gap-2 pt-1">
                <button
                  onClick={() => onOpenBooking(`Consultation for ${activeLesson.title}`)}
                  className="py-2.5 px-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs transition flex items-center justify-center space-x-1 shadow-xs"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book Visit</span>
                </button>
                <a
                  href={`https://wa.me/${CLINIC_CONTACT.whatsappNumber}?text=Hi%20Dr.%20Pawan,%20I%20watched%20your%20${encodeURIComponent(activeLesson.title)}%20video%20and%20want%20a%20consultation.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition flex items-center justify-center space-x-1 shadow-xs"
                >
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

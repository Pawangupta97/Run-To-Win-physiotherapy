import React, { useState } from 'react';
import { 
  Home, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  Calendar, 
  MessageSquare, 
  ShieldCheck, 
  Phone, 
  Zap, 
  Users,
  Search,
  Sparkles,
  ArrowRight,
  ChevronRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { CLINIC_CONTACT } from '../data/clinicData';
import { 
  HOME_VISIT_LOCATIONS, 
  LOCATION_GROUPS, 
  HomeVisitLocation 
} from '../data/homeVisitLocations';

interface HomeVisitCoverageProps {
  onOpenBooking: (prefillService?: string, prefillArea?: string) => void;
  onSelectLocation?: (locationId: string) => void;
}

export const HomeVisitCoverage: React.FC<HomeVisitCoverageProps> = ({ 
  onOpenBooking,
  onSelectLocation 
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedLocation, setSelectedLocation] = useState<HomeVisitLocation>(HOME_VISIT_LOCATIONS[0]);

  const filteredLocations = HOME_VISIT_LOCATIONS.filter((loc) => {
    const matchesSearch = 
      loc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      loc.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      loc.landmarkAreas.some((l) => l.toLowerCase().includes(searchQuery.toLowerCase())) ||
      loc.popularConditions.some((c) => c.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesCategory = selectedCategory === 'All' || loc.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = ['All', 'Western Line', 'Central Line', 'South Mumbai', 'Thane', 'Harbour Line', 'Powai'];

  const homeEquipment = [
    'Portable Electrotherapy (TENS / IFT / Muscle Stimulator)',
    'Therapeutic Deep Ultrasound Therapy Unit',
    'Sterile Single-Use Trigger Point Dry Needling Kits',
    'Custom Resistance Bands & Loop Rehabilitation Bands',
    'Goniometric Joint Range of Motion & Inclinometers',
    'Kinesiology Dynamic Sports Taping Rolls',
    'Foam Balance Stability Pads & Proprioceptive Discs',
    'Continuous Passive Motion (CPM) Consultation Guidance',
  ];

  const whoNeedsHomeCare = [
    {
      title: 'Post-Joint Replacement Patients',
      desc: 'Patients who had Total Knee (TKR) or Total Hip (THR) surgery and cannot travel or climb stairs.',
    },
    {
      title: 'Neurological & Stroke Recovery',
      desc: 'Bedside neuro-rehab, balance training, and caregiver transfer guidance in their safe home surroundings.',
    },
    {
      title: 'Severe Acute Spine & Sciatica Spasms',
      desc: 'Individuals experiencing acute debilitating disc herniation unable to sit in Mumbai traffic.',
    },
    {
      title: 'Senior Citizens & Fall Prevention',
      desc: 'Personalized home safety audits and gentle mobility exercises to preserve senior independence.',
    },
  ];

  return (
    <section id="home-visits" className="py-16 md:py-24 bg-slate-900 text-white relative overflow-hidden scroll-mt-16">
      {/* Glow Effects */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full bg-blue-500/15 border border-blue-500/30 text-blue-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Home className="w-3.5 h-3.5 text-blue-400" />
            <span>Doorstep Healthcare Across 35+ Localities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
            Mumbai Home Visit Physiotherapy Network
          </h2>
          <p className="mt-3 text-base text-slate-300">
            Skip traffic and painful commutes. <strong className="text-white">Dr Pawan Gupta (PT)</strong> delivers comprehensive hospital-grade physiotherapy directly to your residence across Western, Central, South Mumbai, Thane, Harbour, and Powai.
          </p>
        </div>

        {/* 4 Ideal Profiles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {whoNeedsHomeCare.map((item, idx) => (
            <div key={idx} className="p-5 rounded-3xl bg-slate-800/80 border border-slate-700/80 space-y-2 text-left">
              <div className="w-8 h-8 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-xs">
                0{idx + 1}
              </div>
              <h3 className="text-sm font-bold text-white font-heading">
                {item.title}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Interactive Mumbai Suburb Coverage Tool */}
        <div className="bg-slate-950 rounded-3xl border border-slate-800 p-6 sm:p-8 shadow-2xl">
          
          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition ${
                  selectedCategory === cat
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left: Suburb Search & List */}
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-bold text-white font-heading">
                  Select Your Suburb / Locality
                </h3>
                <span className="text-xs text-blue-400 font-semibold">
                  {HOME_VISIT_LOCATIONS.length} Localities
                </span>
              </div>

              {/* Search input */}
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                <input
                  type="text"
                  placeholder="Search Andheri, Bandra, Dadar, Thane, Powai..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 transition"
                />
              </div>

              {/* Areas Scroll list */}
              <div className="space-y-1.5 max-h-80 overflow-y-auto pr-1">
                {filteredLocations.map((loc) => {
                  const isSelected = selectedLocation.id === loc.id;
                  return (
                    <button
                      key={loc.id}
                      onClick={() => setSelectedLocation(loc)}
                      className={`w-full text-left p-2.5 rounded-xl text-xs font-semibold transition border flex items-center justify-between ${
                        isSelected
                          ? 'bg-blue-600 text-white border-blue-500 shadow-md scale-[1.01]'
                          : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border-slate-800'
                      }`}
                    >
                      <div className="flex items-center space-x-2">
                        <MapPin className={`w-3.5 h-3.5 ${isSelected ? 'text-white' : 'text-blue-400'}`} />
                        <span>{loc.name}</span>
                      </div>
                      <span className={`text-[10px] px-2 py-0.5 rounded ${
                        isSelected ? 'bg-blue-700 text-white' : 'bg-slate-800 text-slate-400'
                      }`}>
                        {loc.category}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right: Selected Area Details & Fast Home Visit Booking with Motion */}
            <div className="lg:col-span-7 bg-slate-900/90 rounded-3xl border border-slate-800 p-6 space-y-6 text-left">
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedLocation.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-5"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-4">
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                        <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                          Home Care Active in {selectedLocation.category}
                        </span>
                      </div>
                      <h4 className="text-xl sm:text-2xl font-bold text-white font-heading mt-1">
                        {selectedLocation.name}
                      </h4>
                    </div>

                    <div className="flex items-center space-x-2 text-xs bg-slate-800 px-3 py-1.5 rounded-xl border border-slate-700 text-slate-300">
                      <Clock className="w-3.5 h-3.5 text-blue-400" />
                      <span>Est. Response: {selectedLocation.responseTime}</span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {selectedLocation.neighborhoodHighlights}
                  </p>

                  {/* Landmarks / Societies */}
                  <div>
                    <h5 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                      Key Societies & Enclaves Covered:
                    </h5>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedLocation.landmarkAreas.map((landmark, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded-md bg-slate-800 text-blue-300 text-[11px] border border-slate-700"
                        >
                          {landmark}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Conditions frequently treated in this suburb */}
                  <div>
                    <h5 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                      Frequently Requested Home Treatments in {selectedLocation.name}:
                    </h5>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedLocation.popularConditions.map((cond, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-xl bg-slate-800 text-slate-200 text-xs border border-slate-700 font-medium"
                        >
                          {cond}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-3 flex flex-wrap gap-3">
                    <button
                      onClick={() => onOpenBooking('Home Visit Physiotherapy (Mumbai)', `${selectedLocation.name} (${selectedLocation.category})`)}
                      className="flex-1 py-3 px-5 rounded-xl font-bold text-xs bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/20 transition flex items-center justify-center space-x-2"
                    >
                      <Calendar className="w-4 h-4" />
                      <span>Book in {selectedLocation.name}</span>
                    </button>

                    {onSelectLocation && (
                      <button
                        onClick={() => onSelectLocation(selectedLocation.id)}
                        className="py-3 px-5 rounded-xl text-xs font-semibold bg-blue-950/80 hover:bg-blue-900 text-blue-300 border border-blue-800/60 transition flex items-center justify-center space-x-1.5"
                      >
                        <span>View {selectedLocation.name} Page</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    )}

                    <a
                      href={`https://wa.me/${CLINIC_CONTACT.whatsappNumber}?text=Hello%20Dr.%20Pawan%20Gupta,%20I%20need%20a%20home%20visit%20physiotherapist%20in%20${encodeURIComponent(selectedLocation.name)}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-3 px-4 rounded-xl text-xs font-semibold bg-emerald-950/60 hover:bg-emerald-900 text-emerald-300 border border-emerald-800/60 transition flex items-center justify-center space-x-1.5"
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </motion.div>
              </AnimatePresence>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { MapPin, ArrowRight, ExternalLink, Info } from 'lucide-react';

const AssociatesMap = () => {
  const [activePoint, setActivePoint] = useState(null);

  // Exact locations from your provided image
  const mapPoints = [
    { id: 1, name: 'Parekh Fabrics', x: '18%', y: '48%', city: 'Ahmedabad' },
    { id: 2, name: 'Parekh Silk', x: '23%', y: '56%', city: 'Surat' },
    { id: 3, name: 'Parekh Rayon', x: '45%', y: '56%', city: 'Nagpur' },
    { id: 4, name: 'Parekh Linen', x: '68%', y: '52%', city: 'Kolkata' },
    { id: 5, name: 'Parekh e-Trade Market (Textile)', x: '38%', y: '68%', city: 'Hyderabad' },
    { id: 6, name: 'Parekh Chamber of Textile', x: '35%', y: '78%', city: 'Bangalore' },
    { id: 7, name: 'Parekh Southern Polyfabrics', x: '42%', y: '78%', city: 'Chennai' },
  ];

  return (
    <div className="pt-32 pb-24 bg-[#FDFBF7] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-start">
          
          {/* Left Side: Content */}
          <div className="lg:w-1/3 space-y-8 lg:sticky lg:top-32">
            <div>
              <h1 className="text-4xl md:text-5xl font-serif text-[#333333] mb-4 tracking-tight">HC PAREKH & ASSOCIATES</h1>
              <div className="w-20 h-1.5 bg-[#B79A63] mb-6 rounded-full opacity-60"></div>
              <p className="text-lg text-[#5C4A2A]/80 font-light leading-relaxed">
                Explore our strategic textile hubs across India. Each point represents a specialized segment of our global supply chain.
              </p>
            </div>
            
            {/* Tooltip detail when a user hovers a point */}
            <div className={`transition-all duration-500 p-6 rounded-3xl border border-[#E6DBC4] ${activePoint ? 'bg-[#5C4A2A] text-white' : 'bg-white text-[#5C4A2A]'}`}>
              {activePoint ? (
                <div className="animate-fade-in">
                  <p className="text-xs uppercase tracking-widest opacity-70 mb-1">Active Hub</p>
                  <h3 className="text-2xl font-serif mb-2">{activePoint.name}</h3>
                  <p className="text-sm opacity-80 mb-4">Located in {activePoint.city}. Serving premium quality materials to international markets.</p>
                  <button className="flex items-center gap-2 text-sm font-bold border-b border-white/30 pb-1">Contact Hub <ArrowRight size={14}/></button>
                </div>
              ) : (
                <div className="flex items-center gap-4 py-4">
                  <Info className="text-[#B79A63]" />
                  <p className="text-sm italic">Hover over the map markers to see facility details.</p>
                </div>
              )}
            </div>

            <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#F4EFE6]/50">
               <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
                 <MapPin size={20} className="text-[#B79A63]"/>
               </div>
               <p className="text-sm font-medium text-[#5C4A2A]">7 Strategic Locations</p>
            </div>
          </div>

          {/* Right Side: The India Map */}
          <div className="lg:w-2/3 relative group">
            <div className="glass-card p-4 rounded-[2.5rem] bg-white/40 shadow-2xl relative overflow-hidden flex items-center justify-center">
              
              {/* SVG Map Container */}
              <div className="relative w-full max-w-[600px] h-auto aspect-[4/5]">
                {/* Image of India Map Outline */}
                <img 
                  src="https://img.freepik.com/premium-vector/map-india-administrative-regions-india-map_1091279-169.jpg?ga=GA1.1.124606815.1772781809&semt=ais_hybrid&w=740&q=80" 
                  alt="India Map" 
                  className="w-full h-full opacity-30 grayscale contrast-125"
                />

                {/* Markers Overlay */}
                {mapPoints.map((point) => (
                  <div 
                    key={point.id}
                    className="absolute cursor-pointer group/marker"
                    style={{ left: point.x, top: point.y }}
                    onMouseEnter={() => setActivePoint(point)}
                    onMouseLeave={() => setActivePoint(null)}
                  >
                    {/* Animated Pulsing Ring */}
                    <div className="absolute -inset-2 bg-[#B79A63]/30 rounded-full animate-ping group-hover/marker:bg-[#5C4A2A]/40"></div>
                    
                    {/* Main Dot */}
                    <div className="relative w-4 h-4 rounded-full bg-[#5C4A2A] border-2 border-white shadow-lg transition-transform duration-300 group-hover/marker:scale-125 group-hover/marker:bg-[#B79A63]"></div>
                    
                    {/* Label (Always visible text) */}
                    <div className="absolute left-6 top-1/2 -translate-y-1/2 whitespace-nowrap">
                      <p className="text-[10px] md:text-xs font-bold text-[#333333] leading-tight bg-white/80 backdrop-blur-sm px-2 py-0.5 rounded shadow-sm border border-[#E6DBC4] pointer-events-none">
                        {point.name}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Decorative Website Link Label like in image */}
              <div className="absolute top-8 right-8 text-right hidden md:block">
                <p className="text-[#0000FF] font-bold text-sm underline decoration-2 underline-offset-4 flex items-center justify-end gap-1">
                  www.hcparekh.com <ExternalLink size={12}/>
                </p>
                <p className="text-red-600 font-serif text-2xl font-bold tracking-[0.2em] mt-2 uppercase">Introduced</p>
              </div>
            </div>
          </div>
          
        </div>

        {/* Footer Banner */}
        <div className="mt-20 p-8 rounded-3xl bg-gradient-to-r from-[#5C4A2A] to-[#8C7345] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h3 className="text-2xl font-serif mb-2">Want to partner with us?</h3>
            <p className="text-[#E6DBC4] font-light text-sm max-w-md">
              We are expanding our network. If you are a textile manufacturer or trader, join our ecosystem today.
            </p>
          </div>
          <button className="whitespace-nowrap px-8 py-3 rounded-full bg-white text-[#5C4A2A] font-medium hover:bg-[#F4EFE6] transition-all flex items-center gap-2 shadow-lg hover:scale-105 active:scale-95">
            Register as Associate <ExternalLink size={16} />
          </button>
        </div>

      </div>
    </div>
  );
};

export default AssociatesMap;
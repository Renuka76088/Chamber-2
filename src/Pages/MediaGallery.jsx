import React, { useState } from 'react';
import { Play } from 'lucide-react';

const MediaGallery = () => {
  const [activeTab, setActiveTab] = useState('photos');
  
  const photos = [
    "https://img.freepik.com/premium-photo/textile-factory-workers-are-sewing-colorful-fabrics-machines-blurred-background_1103944-15409.jpg?ga=GA1.1.124606815.1772781809&semt=ais_hybrid&w=740&q=80",
    "https://img.freepik.com/premium-photo/different-fabrics-sewing-material_118124-218757.jpg?ga=GA1.1.124606815.1772781809&semt=ais_hybrid&w=740&q=80",
    "https://img.freepik.com/premium-photo/industrial-sewing-machines-textile-factory_713660-30286.jpg?ga=GA1.1.124606815.1772781809&semt=ais_hybrid&w=740&q=80",
    "https://img.freepik.com/premium-photo/textile-industry-weaving-warping_1028938-198873.jpg?ga=GA1.1.124606815.1772781809&semt=ais_hybrid&w=740&q=80",
    "https://img.freepik.com/premium-photo/colorful-fabric-rolls-stacked-shelves-textile-store-various-patterns-colors_607477-2692.jpg?ga=GA1.1.124606815.1772781809&semt=ais_hybrid&w=740&q=80",
    "https://img.freepik.com/premium-photo/modern-dyeing-facility-where-fabrics-are-treated-with-environmentally-friendly-processes_1314467-227159.jpg?ga=GA1.1.124606815.1772781809&semt=ais_hybrid&w=740&q=80"
  ];

  const videos = [
    { title: "The Art of Jacquard Weaving", img: "https://images.unsplash.com/photo-1520633190412-1fccbece5e73?auto=format&fit=crop&q=80&w=800" },
    { title: "Parekh Silk's Sustainable Farms", img: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&q=80&w=800" },
    { title: "Paris Fashion Week 2026 Showcase", img: "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80&w=800" }
  ];

  return (
    <div className="pt-24 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6">Media Gallery</h1>
          <p className="text-gray-600 font-light text-lg">
            A visual journey through our processes, events, and the exquisite collections 
            crafted from our premium silk.
          </p>
        </div>

        <div className="flex justify-center mb-16">
          <div className="inline-flex bg-gray-50 rounded-full p-2 shadow-inner border border-gray-100">
            <button 
              onClick={() => setActiveTab('photos')}
              className={`px-8 py-3 rounded-full text-sm font-bold tracking-wide uppercase transition-all duration-300 ${activeTab === 'photos' ? 'bg-amber-600 text-white shadow-md' : 'text-gray-500 hover:text-amber-600'}`}
            >
              Photo Gallery
            </button>
            <button 
              onClick={() => setActiveTab('videos')}
              className={`px-8 py-3 rounded-full text-sm font-bold tracking-wide uppercase transition-all duration-300 ${activeTab === 'videos' ? 'bg-amber-600 text-white shadow-md' : 'text-gray-500 hover:text-amber-600'}`}
            >
              Video Archives
            </button>
          </div>
        </div>

        {activeTab === 'photos' && (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {photos.map((url, idx) => (
              <div key={idx} className="aspect-square rounded-2xl overflow-hidden group relative cursor-pointer shadow-md">
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 z-10" />
                <img src={url} alt={`Gallery image ${idx}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
            ))}
          </div>
        )}

        {activeTab === 'videos' && (
          <div className="grid md:grid-cols-3 gap-8">
            {videos.map((vid, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="aspect-video rounded-3xl overflow-hidden relative shadow-md mb-4 border border-gray-100">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors z-10 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center text-white transform group-hover:scale-110 transition-transform">
                      <Play fill="currentColor" size={24} className="ml-1 text-amber-500" />
                    </div>
                  </div>
                  <img src={vid.img} alt={vid.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <h3 className="text-xl font-serif text-gray-900 group-hover:text-amber-600 transition-colors text-center">{vid.title}</h3>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MediaGallery;
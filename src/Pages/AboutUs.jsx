import React from 'react';
import { Target, Heart, Award } from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6">Our Legacy of Threads</h1>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-8 opacity-80 rounded-full"></div>
          <p className="text-lg text-gray-600 font-light leading-relaxed">
            For generations, H.C. Parekh Silk has been at the forefront of crafting the finest textiles. We blend traditional artistry with modern sophistication to bring you fabrics that tell a story.
          </p>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          <div className="bg-white border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 p-10 rounded-[32px] hover:-translate-y-2 group">
            <div className="w-16 h-16 rounded-2xl bg-amber-50 flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform text-amber-500">
              <Target size={32} />
            </div>
            <h2 className="text-2xl font-serif text-gray-900 mb-4">Our Vision</h2>
            <p className="text-gray-600 leading-relaxed font-light">
              To be the global paradigm for luxurious, sustainable, and purely crafted wholesale silk fabrics, setting standards that intertwine beauty with responsibility.
            </p>
          </div>
          <div className="bg-white border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 p-10 rounded-[32px] hover:-translate-y-2 group">
            <div className="w-16 h-16 rounded-2xl bg-amber-50 flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform text-amber-500">
              <Heart size={32} />
            </div>
            <h2 className="text-2xl font-serif text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed font-light">
              We strive to empower local weavers, ensure absolute purity in every yard, and deliver an unmatched tactile experience to global designers and wholesale creators worldwide.
            </p>
          </div>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative h-[500px] w-full group">
            <div className="absolute inset-0 bg-amber-200 rounded-[40px] translate-x-4 translate-y-4 opacity-50 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform duration-500"></div>
            <img 
              src="https://img.freepik.com/premium-photo/pile-different-fabrics-isolated-white_392895-134216.jpg?ga=GA1.1.124606815.1772781809&semt=ais_hybrid&w=740&q=80" 
              alt="Silk weaving machinery" 
              className="absolute inset-0 w-full h-full object-cover rounded-[40px] shadow-2xl"
            />
          </div>
          
          <div className="order-1 lg:order-2 space-y-6">
            <h2 className="text-3xl font-serif text-gray-900">The Journey from Cocoon to Couture</h2>
            <p className="text-gray-600 font-light leading-relaxed">
              It begins in the tranquil farms where the silkworms are nurtured with care. The harvest is a meticulous process, demanding patience and precision for bulk manufacturing.
            </p>
            <p className="text-gray-600 font-light leading-relaxed">
              Our master weavers take these delicate threads and, on cutting-edge looms that marry mass-production with tradition, create continuous flows of liquid gold. Every yard undergoes rigorous quality checks to ensure the sheen, drape, and durability are perfect for B2B export.
            </p>
            <div className="pt-6 flex items-center gap-4">
               <div className="w-14 h-14 rounded-2xl bg-amber-50 border border-amber-100 flex justify-center items-center shadow-inner">
                 <Award className="text-amber-500" size={28}/>
               </div>
               <span className="font-serif text-gray-900 font-bold text-xl">Awarded Excellence in Wholesale Textile Manufacturing</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutUs;
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Sparkles, TrendingUp, Package, Users, MapPin, Phone, Mail } from 'lucide-react';
import MySilkImage from'../assets/Silk.avif'

const LandingPage = () => {
  return (
    <div className="w-full bg-white mt-16 md:mt-0 font-sans text-gray-800">

      {/* 1. Banner Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-white">
        {/* Extremely subtle ambient glows */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-50/50 rounded-full mix-blend-multiply filter blur-[100px] opacity-60"></div>
        <div className="absolute -bottom-32 left-10 w-[400px] h-[400px] bg-yellow-50/50 rounded-full mix-blend-multiply filter blur-[100px] opacity-60"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-10">

          <div className="space-y-8 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-100 bg-white shadow-sm">
              <Sparkles className="text-amber-500" size={16} />
              <span className="text-xs font-bold uppercase tracking-wider text-amber-700">Premium Silk Manufacturer</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-serif text-gray-900 leading-tight">
              H.C. Parekh <br />
              <span className="text-amber-600">Silk Fabric.</span>
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed max-w-xl font-light">
              Your trusted partner in wholesale silk fabric manufacturing. Experience the purity and luxury of our authentic bulk silk collections tailored for B2B excellence.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="/products-gallery" className="px-8 py-3.5 rounded-full bg-amber-600 text-white font-medium hover:bg-amber-700 shadow-lg shadow-amber-200 transition-all duration-300 flex items-center gap-2 group">
                Wholesale Catalog
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/enquiry" className="px-8 py-3.5 rounded-full bg-white border border-gray-200 text-gray-700 font-medium hover:bg-gray-50 transition-all duration-300 shadow-sm">
                Get Bulk Quote
              </Link>
            </div>
          </div>

          <div className="relative hidden lg:block h-[600px] w-full mt-12 lg:mt-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[580px] rounded-[40px] overflow-hidden bg-white border border-gray-100 p-2 shadow-2xl z-10">
             <img
      // --- AB YAHAN LOCAL IMAGE USE HO RAHI HAI ---
      src={MySilkImage} 
      alt="H.C. Parekh Authentic Silk" // Alt text badal dein
      className="w-full h-full object-cover rounded-[32px] transition-transform duration-700 hover:scale-105"
    />
            </div>

            <div className="absolute bottom-16 -left-8 bg-white/80 backdrop-blur-md p-4 rounded-2xl flex items-center gap-4 shadow-xl border border-gray-100 z-20 hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center">
                <Package className="text-amber-600" size={24} />
              </div>
              <div>
                <p className="font-bold text-gray-900">Bulk Supply</p>
                <p className="text-xs text-gray-500">Global Distribution</p>
              </div>
            </div>

            <div className="absolute top-24 -right-10 bg-white/80 backdrop-blur-md px-5 py-3 rounded-full flex items-center gap-3 shadow-xl border border-gray-100 z-20 hover:-translate-y-1 transition-transform duration-300">
              <div className="w-10 h-10 rounded-full bg-amber-500 flex justify-center items-center text-white">
                <TrendingUp size={20} />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-800">Best B2B Rates</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. About Us Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-50 group">
              <img
                src="https://img.freepik.com/free-photo/rose-gold-velvet-fabric_23-2151943843.jpg?t=st=1774256943~exp=1774260543~hmac=ffd9cf7b22e93861c4b75d5c313345937c6e7165bc2b14acb8b0d64b80462ed6"
                alt="Silk weaving loom"
                className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent"></div>
            </div>
            <div className="space-y-8">
              <div>
                <h4 className="text-amber-600 font-semibold tracking-wider uppercase text-sm mb-2">Our Legacy</h4>
                <h2 className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight">Masters of the Silk <br /> Since 1995.</h2>
              </div>
              <p className="text-gray-600 leading-relaxed font-light text-lg">
                At H.C. Parekh Silk Fabric, we bring decades of heritage to modern textile manufacturing. We specialize in producing massive volumes of authentic, unadulterated silk with absolute precision. Our state-of-the-art looming facilities combined with traditional techniques make us the gold standard in the wholesale silk market.
              </p>
              <ul className="space-y-4 text-gray-700 font-medium">
                <li className="flex items-center gap-3"><ShieldCheck className="text-amber-500" size={20} /> Certified authentic silk material</li>
                <li className="flex items-center gap-3"><Users className="text-amber-500" size={20} /> Trusted by 500+ global brands</li>
                <li className="flex items-center gap-3"><Package className="text-amber-500" size={20} /> Wholesale specific packaging & logistics</li>
              </ul>
              <Link to="/about" className="inline-block mt-4 text-amber-600 font-semibold border-b-2 border-amber-200 hover:border-amber-600 transition-colors pb-1">
                Read Our Full Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Products Section */}
      <section className="py-24 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h4 className="text-amber-600 font-semibold tracking-wider uppercase text-sm mb-2">Our Collection</h4>
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6">Premium Wholesale Ranges</h2>
            <p className="text-gray-600 font-light text-lg">
              Explore our diverse portfolio of high-grade silk. Every fabric is crafted to perfection, ready for bulk ordering.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Mulberry Silk', img: 'https://img.freepik.com/free-photo/artificial-materials-texture-close-up_23-2151901051.jpg?ga=GA1.1.124606815.1772781809&semt=ais_hybrid&w=740&q=80' },
              { name: 'Pure Tussar Silk', img: 'https://img.freepik.com/free-photo/close-up-velvet-texture_23-2149305929.jpg?ga=GA1.1.124606815.1772781809&semt=ais_hybrid&w=740&q=80' },
              { name: 'Silk Organza', img: 'https://img.freepik.com/premium-photo/delicate-white-silk-fabric-with-luminous-color-palette-organza-plain-sheet_899449-122098.jpg?ga=GA1.1.124606815.1772781809&semt=ais_hybrid&w=740&q=80' }
            ].map((product, idx) => (
              <div key={idx} className="group rounded-3xl overflow-hidden bg-white shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col">
                <div className="h-64 overflow-hidden relative border-b border-gray-100">
                  <img src={product.img} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-8 text-center bg-white relative z-10 flex-1 flex flex-col justify-center">
                  <h3 className="text-2xl font-serif text-gray-900 mb-3">{product.name}</h3>
                  <Link to="/products" className="text-amber-600 font-bold text-sm uppercase tracking-wide group-hover:underline">View Catalog</Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/products-gallery" className="inline-flex px-8 py-3.5 rounded-full bg-white border border-gray-200 text-gray-800 font-medium hover:bg-gray-50 transition-colors duration-300 shadow-sm">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Why Choose Us Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h4 className="text-amber-600 font-semibold tracking-wider uppercase text-sm mb-2">Our Advantage</h4>
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6">Why Partner With Us?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <ShieldCheck size={28} />,
                title: 'Assured Quality',
                desc: 'Every roll of silk is rigorously inspected to ensure 100% purity, tensile strength, and color fastness before bulk dispatch.'
              },
              {
                icon: <Package size={28} />,
                title: 'Scalable Manufacturing',
                desc: 'Capable of fulfilling massive wholesale orders with rapid turnaround times, ensuring your supply chain never breaks.'
              },
              {
                icon: <Users size={28} />,
                title: 'Dedicated B2B Support',
                desc: 'Our wholesale clients benefit from custom dyeing, exclusive weaves, and a dedicated account manager for seamless communication.'
              }
            ].map((feature, idx) => (
              <div key={idx} className="p-10 rounded-[32px] bg-white border border-gray-100 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group">
                <div className="w-16 h-16 rounded-2xl bg-amber-50 flex items-center justify-center mb-8 group-hover:rotate-6 transition-transform duration-300 text-amber-500">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-serif text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed font-light">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Blog Section */}
      <section className="py-24 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-end mb-12 gap-4">
            <div>
              <h4 className="text-amber-600 font-semibold tracking-wider uppercase text-sm mb-2">Insights</h4>
              <h2 className="text-4xl md:text-5xl font-serif text-gray-900">Latest from the Loom</h2>
            </div>
            <Link to="/blog" className="flex text-gray-600 hover:text-amber-600 font-medium items-center gap-2">
              All Articles <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Blog Post 1 */}
            <Link to="/blog" className="group rounded-3xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col sm:flex-row">
              <div className="sm:w-2/5 h-64 sm:h-auto overflow-hidden">
                <img src="https://img.freepik.com/premium-photo/elegant-charmeuse-plain-sheet-white-gold-with-photorealistic-still-life-design_899449-122355.jpg?ga=GA1.1.124606815.1772781809&semt=ais_hybrid&w=740&q=80" alt="Blog 1" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-8 flex flex-col justify-center sm:w-3/5">
                <span className="text-amber-600 text-xs font-bold uppercase mb-3 tracking-wide">Market Trends</span>
                <h3 className="text-xl font-serif text-gray-900 mb-3 group-hover:text-amber-600 transition-colors">The Future of Sustainable Silk in 2026</h3>
                <p className="text-gray-500 text-sm mb-4 line-clamp-2">Exploring the rise of ethically sourced raw silk and how major brands are adapting their wholesale strategies.</p>
                <div className="mt-auto">
                  <span className="text-gray-400 text-xs font-bold uppercase tracking-wider">March 15, 2026</span>
                </div>
              </div>
            </Link>

            {/* Blog Post 2 */}
            <Link to="/blog" className="group rounded-3xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col sm:flex-row">
              <div className="sm:w-2/5 h-64 sm:h-auto overflow-hidden">
                <img src="https://img.freepik.com/premium-photo/stack-multi-colored-satin-fabric-blue-background-space-text_83196-1323.jpg?ga=GA1.1.124606815.1772781809&semt=ais_hybrid&w=740&q=80" alt="Blog 2" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-8 flex flex-col justify-center sm:w-3/5">
                <span className="text-amber-600 text-xs font-bold uppercase mb-3 tracking-wide">Material Guide</span>
                <h3 className="text-xl font-serif text-gray-900 mb-3 group-hover:text-amber-600 transition-colors">Mulberry vs. Tussar: A Buyer's Guide</h3>
                <p className="text-gray-500 text-sm mb-4 line-clamp-2">A comprehensive breakdown for B2B buyers looking to choose the perfect silk blend for their next collection.</p>
                <div className="mt-auto">
                  <span className="text-gray-400 text-xs font-bold uppercase tracking-wider">March 10, 2026</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Contact Us / Quick Enquiry Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-900 rounded-[40px] overflow-hidden flex flex-col lg:flex-row shadow-2xl">
            {/* Left Info Side */}
            <div className="lg:w-5/12 p-12 lg:p-16 bg-gray-900 text-white relative overflow-hidden flex flex-col justify-center">
              <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl"></div>

              <h2 className="text-4xl font-serif mb-6 relative z-10">Get in Touch</h2>
              <p className="text-gray-400 mb-12 font-light text-lg relative z-10">
                Ready to place a wholesale order or need custom fabric specifications? Our team is available 24/7.
              </p>

              <div className="space-y-8 relative z-10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center shrink-0">
                    <MapPin className="text-amber-500" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-white mb-1">Headquarters</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">123 Silk Avenue, Textile Hub<br />Surat, Gujarat 395002, India</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center shrink-0">
                    <Phone className="text-amber-500" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-white mb-1">Phone & WhatsApp</h4>
                    <p className="text-gray-400 text-sm">+91 98765 43210</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center shrink-0">
                    <Mail className="text-amber-500" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-white mb-1">Email Support</h4>
                    <p className="text-gray-400 text-sm">sales@hcparekhsilk.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form Side */}
            <div className="lg:w-7/12 p-12 lg:p-16 bg-white border border-gray-100">
              <h3 className="text-2xl font-serif text-gray-900 mb-8">Send a Quick Enquiry</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 tracking-wide uppercase">Full Name</label>
                    <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-colors" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 tracking-wide uppercase">Company Name</label>
                    <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-colors" placeholder="Fashion Boutique Inc." />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 tracking-wide uppercase">Email Address</label>
                    <input type="email" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-colors" placeholder="john@example.com" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 tracking-wide uppercase">Phone Number</label>
                    <input type="tel" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-colors" placeholder="+1 (555) 000-0000" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 tracking-wide uppercase">Message / Requirements</label>
                  <textarea rows="4" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-colors resize-none" placeholder="I am looking for bulk Mulberry silk..."></textarea>
                </div>

                <button type="submit" className="w-full sm:w-auto px-10 py-4 bg-amber-600 text-white font-bold tracking-wide uppercase rounded-xl hover:bg-amber-700 shadow-lg shadow-amber-200 transition-all duration-300 transform hover:-translate-y-1">
                  Submit Enquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default LandingPage;

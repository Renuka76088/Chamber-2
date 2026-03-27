import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#5C4A2A] text-[#FDFBF7] pt-16 pb-8 relative overflow-hidden">
      {/* Decorative Silk Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#B79A63] via-[#F4EFE6] to-[#B79A63] opacity-40"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#8C7345] rounded-full mix-blend-multiply filter blur-3xl opacity-20 hidden md:block"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Col */}
          <div className="space-y-6">
              {/* Logo Section */}
                      <Link to="/" className="z-[130] flex items-center no-underline">
                       <div 
                         style={{
                           background: 'linear-gradient(135deg, rgba(113, 127, 224, 0.15) 0%, rgba(113, 127, 224, 0.05) 100%)',
                           boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08), inset 0 1px 1px rgba(255, 255, 255, 0.3)'
                         }}
                         className="w-[42px] h-[42px] md:w-[48px] md:h-[48px] border-2 border-[#C5A27D] rounded-xl flex items-center justify-center mr-3 shrink-0 transition-all duration-300 hover:scale-105"
                       >
                         <span className="text-[#f59e0b] font-black text-2xl md:text-3xl leading-none">P</span>
                       </div>
           
                       <div className="flex flex-col justify-center">
                         <h1 className="flex items-center text-2xl gap-2  md:text-2xl font-black uppercase leading-none">
                           <span className="text-[#fff]">PAREKH</span>
                           <span className="text-[#f59e0b]">SILK</span>
                         </h1>
                         <span className="text-[9px] md:text-[11px] font-bold tracking-[0.3em] text-[white] uppercase mt-1">
                           SURAT • GJ
                         </span>
                       </div>
                     </Link>
            <p className="text-[#E6DBC4] text-sm leading-relaxed">
              Experience the ethereal beauty of 100% pure silk. Woven with passion, crafted with heritage. Your destination for premium textile solutions.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-[#8C7345]/30 flex items-center justify-center hover:bg-[#B79A63] hover:text-[#5C4A2A] transition-colors duration-300">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#8C7345]/30 flex items-center justify-center hover:bg-[#B79A63] hover:text-[#5C4A2A] transition-colors duration-300">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#8C7345]/30 flex items-center justify-center hover:bg-[#B79A63] hover:text-[#5C4A2A] transition-colors duration-300">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#8C7345]/30 flex items-center justify-center hover:bg-[#B79A63] hover:text-[#5C4A2A] transition-colors duration-300">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-xl mb-6 text-[#B79A63]">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-[#E6DBC4] hover:text-white transition-colors text-sm flex items-center gap-2 before:content-[''] before:w-1.5 before:h-1.5 before:bg-[#B79A63] before:rounded-full">Home</Link></li>
              <li><Link to="/about" className="text-[#E6DBC4] hover:text-white transition-colors text-sm flex items-center gap-2 before:content-[''] before:w-1.5 before:h-1.5 before:bg-[#B79A63] before:rounded-full">About Us</Link></li>
              <li><Link to="/products-gallery" className="text-[#E6DBC4] hover:text-white transition-colors text-sm flex items-center gap-2 before:content-[''] before:w-1.5 before:h-1.5 before:bg-[#B79A63] before:rounded-full">Products Gallery</Link></li>
              <li><Link to="/contact" className="text-[#E6DBC4] hover:text-white transition-colors text-sm flex items-center gap-2 before:content-[''] before:w-1.5 before:h-1.5 before:bg-[#B79A63] before:rounded-full">Contact Us</Link></li>
            </ul>
          </div>

          {/* More Pages */}
          <div>
            <h3 className="font-serif text-xl mb-6 text-[#B79A63]">More Information</h3>
            <ul className="space-y-3">
              <li><Link to="/management" className="text-[#E6DBC4] hover:text-white transition-colors text-sm flex items-center gap-2 before:content-[''] before:w-1.5 before:h-1.5 before:bg-[#B79A63] before:rounded-full">Our Management</Link></li>
              <li><Link to="/associates" className="text-[#E6DBC4] hover:text-white transition-colors text-sm flex items-center gap-2 before:content-[''] before:w-1.5 before:h-1.5 before:bg-[#B79A63] before:rounded-full">Our Textile Associates</Link></li>
              <li><Link to="/enquiry" className="text-[#E6DBC4] hover:text-white transition-colors text-sm flex items-center gap-2 before:content-[''] before:w-1.5 before:h-1.5 before:bg-[#B79A63] before:rounded-full">e-Enquiry</Link></li>
              <li><Link to="#" className="text-[#E6DBC4] hover:text-white transition-colors text-sm flex items-center gap-2 before:content-[''] before:w-1.5 before:h-1.5 before:bg-[#B79A63] before:rounded-full">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-xl mb-6 text-[#B79A63]">Get In Touch</h3>
            <ul className="space-y-4">
              <li className="flex gap-3 text-sm text-[#E6DBC4] items-start">
                <MapPin size={20} className="text-[#B79A63] shrink-0" />
                <span>123 Silk weavers lane, Heritage Textile District, Surat, Gujarat 395002</span>
              </li>
              <li className="flex gap-3 text-sm text-[#E6DBC4] items-center">
                <Phone size={20} className="text-[#B79A63] shrink-0" />
                <span>+91 1111 11111</span>
              </li>
              <li className="flex gap-3 text-sm text-[#E6DBC4] items-center">
                <Mail size={20} className="text-[#B79A63] shrink-0" />
                <span>hello@serenitysilk.com</span>
              </li>
            </ul>
          </div>
          
        </div>

        <div className="border-t border-[#8C7345]/40 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#E6DBC4] text-xs">
            © {new Date().getFullYear()} Parekh Silk | Crafted with Elegance
          </p>
          <p className="text-[#E6DBC4]/60 text-xs">
            Designed for the love of textiles
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

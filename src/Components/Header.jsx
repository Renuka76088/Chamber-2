import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [pagesDropdownOpen, setPagesDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setPagesDropdownOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'Blog', path: '/blog' },
    { name: 'Product', path: '/products' },
  ];

  const pageLinks = [
    { name: 'Products Gallery', path: '/products-gallery' },
    { name: 'Our Management', path: '/management' },
    { name: 'Our Textile Associates', path: '/associates' },
    { name: 'Trade Enquiry (e-Form)', path: '/enquiry' },
    { name: 'e-Quotation', path: '/e-quotation' },
    { name: 'e-Auction', path: '/e-auction' },
    { name: 'Tender & Contract', path: '/tender-contract' },
    { name: 'Career Page', path: '/career' },
    { name: 'Circular', path: '/circular' },
    { name: 'Customer Review', path: '/customer-review' },
    { name: 'Visit with Appointment', path: '/appointment' },
    { name: 'Media Gallery', path: '/media-gallery' }
  ];

  const headerBg = isScrolled ? 'glass shadow-sm' : 'bg-transparent';

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${headerBg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          
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
              <h1 className="flex items-center text-xl md:text-2xl font-black tracking-tighter uppercase leading-none">
                <span className="text-[#4A4238]">PAREKH</span>
                <span className="text-[#f59e0b]">SILK</span>
              </h1>
              <span className="text-[9px] md:text-[11px] font-bold tracking-[0.3em] text-[black] uppercase mt-1">
                SURAT • GJ
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.slice(0, 3).map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-[15px] font-medium text-[#5C4A2A] hover:text-[#B79A63] transition-colors relative group"
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-[#B79A63] transition-all duration-300 group-hover:w-full ${location.pathname === link.path ? 'w-full' : ''}`}></span>
              </Link>
            ))}

            {/* Dropdown Menu for Pages */}
            <div 
              className="relative group"
              onMouseEnter={() => setPagesDropdownOpen(true)}
              onMouseLeave={() => setPagesDropdownOpen(false)}
            >
              <button 
                className="flex items-center gap-1 text-[15px] font-medium text-[#5C4A2A] hover:text-[#B79A63] transition-colors py-2"
                aria-expanded={pagesDropdownOpen}
              >
                Pages <ChevronDown size={16} className={`transition-transform duration-300 ${pagesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Content */}
              <div 
                className={`absolute top-full left-1/2 -translate-x-1/2 w-72 max-h-[75vh] overflow-y-auto bg-white/95 backdrop-blur-md border border-[#E6DBC4]/30 shadow-xl rounded-xl py-3 px-2 transition-all duration-300 transform origin-top ${
                  pagesDropdownOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'
                } scrollbar-thin scrollbar-thumb-[#E6DBC4] scrollbar-track-transparent`}
              >
                {pageLinks.map((dropdownLink) => (
                  <Link
                    key={dropdownLink.name}
                    to={dropdownLink.path}
                    className="block px-4 py-2 text-sm text-[#5C4A2A] hover:bg-[#F4EFE6] hover:text-[#8C7345] rounded-lg transition-colors"
                  >
                    {dropdownLink.name}
                  </Link>
                ))}
              </div>
            </div>

            {navLinks.slice(3).map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-[15px] font-medium text-[#5C4A2A] hover:text-[#B79A63] transition-colors relative group"
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-[#B79A63] transition-all duration-300 group-hover:w-full ${location.pathname === link.path ? 'w-full' : ''}`}></span>
              </Link>
            ))}

            <Link to="/enquiry" className="ml-2 px-6 py-2.5 rounded-full bg-[#5C4A2A] text-white text-sm font-medium hover:bg-[#8C7345] transition-colors shadow-md hover:shadow-lg hover:-translate-y-0.5 transform duration-300">
              Get an Estimate
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-[#5C4A2A] p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-[#FDFBF7] border-b border-[#E6DBC4] transition-all duration-300 overflow-y-auto custom-scrollbar ${
          mobileMenuOpen ? 'max-h-[85vh] py-4 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col px-4 gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="py-3 px-4 text-[#5C4A2A] font-medium rounded-lg hover:bg-[#F4EFE6]"
            >
              {link.name}
            </Link>
          ))}
          
          <div className="py-2 px-4 text-[#8C7345] font-serif font-bold text-lg mt-2 border-t border-[#E6DBC4] pt-4">
            More Pages
          </div>
          
          {pageLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="py-2.5 px-6 text-[#5C4A2A] text-sm hover:text-[#8C7345] hover:bg-[#F4EFE6] rounded-lg"
            >
              {link.name}
            </Link>
          ))}
          
          <Link to="/enquiry" className="mt-4 mx-4 px-6 py-3 text-center rounded-xl bg-[#5C4A2A] text-white font-medium">
            Get an Estimate
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

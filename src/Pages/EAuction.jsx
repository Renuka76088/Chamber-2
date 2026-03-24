import React, { useState } from 'react';
import { Gavel, IndianRupee, FileText, ShieldCheck, Send } from 'lucide-react';

const AuctionForm = () => {
  const [formData, setFormData] = useState({
    auctionId: '',
    bidderName: '',
    firmName: '',
    mobile: '',
    email: '',
    initialBid: '',
    paymentId: '',
    document: null
  });

  const inputStyle = "w-full px-4 py-3.5 rounded-xl bg-white/50 border border-[#D8C5A1] focus:ring-2 focus:ring-[#B79A63]/50 focus:border-[#B79A63] text-[#5C4A2A] outline-none transition-all placeholder:text-[#8C7345]/50";
  const labelStyle = "text-sm font-semibold text-[#5C4A2A] mb-1.5 block ml-1";

  return (
    <div className="pt-32 pb-24 bg-[#FDFBF7] min-h-screen relative">
      {/* Background Decorative Element */}
      <div className="absolute top-40 left-0 w-full h-[500px] bg-[#E6DBC4]/20 mix-blend-multiply filter blur-[100px] -z-10"></div>
      
      <div className="max-w-4xl mx-auto px-4">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#5C4A2A]/5 text-[#5C4A2A] text-xs font-bold mb-4 border border-[#5C4A2A]/10 tracking-widest uppercase">
            <Gavel size={14} /> Official e-Bidding Form
          </div>
          <h1 className="text-4xl md:text-5xl font-serif text-[#333333] mb-4">Auction Registration</h1>
          <p className="text-[#5C4A2A]/70 font-light text-lg max-w-xl mx-auto">
            Please provide your bidding credentials and security deposit details to participate in the upcoming textile lot auctions.
          </p>
        </div>

        {/* Main Form Card */}
        <div className="bg-white/40 backdrop-blur-md rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-white/20 relative overflow-hidden">
          {/* Decorative Corner */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#F4EFE6] rounded-bl-full z-0 opacity-40"></div>

          <form className="relative z-10 space-y-8">
            
            {/* Section 1: Auction & Bidder Details */}
            <div>
              <h3 className="text-xl font-serif text-[#5C4A2A] mb-6 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-[#5C4A2A] text-white flex items-center justify-center text-sm">1</span>
                Lot Information
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label className={labelStyle}>Select Auction Lot / ID</label>
                  <select className={inputStyle}>
                    <option>AUC-2026-001: Premium Mulberry Cocoons</option>
                    <option>AUC-2026-002: Raw Tussar Silk Yarn</option>
                    <option>AUC-2026-003: Eri Silk Fabric Rolls</option>
                    <option>Other (Manual Entry)</option>
                  </select>
                </div>

                <div>
                  <label className={labelStyle}>Full Name of Bidder</label>
                  <input type="text" placeholder="Authorized Person Name" className={inputStyle} />
                </div>

                <div>
                  <label className={labelStyle}>Firm / Company Name</label>
                  <input type="text" placeholder="As registered in Chamber" className={inputStyle} />
                </div>

                <div>
                  <label className={labelStyle}>Mobile Number</label>
                  <input type="tel" placeholder="+91 00000 00000" className={inputStyle} />
                </div>

                <div>
                  <label className={labelStyle}>Email Address</label>
                  <input type="email" placeholder="official@company.com" className={inputStyle} />
                </div>
              </div>
            </div>

            <hr className="border-[#E6DBC4]" />

            {/* Section 2: Financial & Bid Details */}
            <div>
              <h3 className="text-xl font-serif text-[#5C4A2A] mb-6 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-[#5C4A2A] text-white flex items-center justify-center text-sm">2</span>
                Bidding & Security Deposit
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className={labelStyle}>Initial Bid Amount (₹)</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8C7345] font-bold">₹</span>
                    <input type="number" placeholder="Enter amount" className={`${inputStyle} pl-10`} />
                  </div>
                </div>

                <div>
                  <label className={labelStyle}>EMD Transaction ID (Security Deposit)</label>
                  <input type="text" placeholder="TXN-9988XXXX" className={inputStyle} />
                </div>

                <div className="md:col-span-2">
                  <label className={labelStyle}>Upload Payment Proof / Bank Guarantee</label>
                  <div className="relative group">
                    <input 
                      type="file" 
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20" 
                    />
                    <div className="w-full px-4 py-8 rounded-xl border-2 border-dashed border-[#D8C5A1] bg-[#FDFBF7]/50 text-center group-hover:border-[#B79A63] transition-colors">
                      <FileText className="mx-auto text-[#B79A63] mb-2" size={32} />
                      <p className="text-[#5C4A2A] font-medium">Click to upload or drag & drop</p>
                      <p className="text-[#8C7345] text-xs mt-1">PDF, JPG, PNG (Max 5MB)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Undertaking Box */}
            <div className="bg-[#F4EFE6]/60 p-6 rounded-2xl border border-[#D8C5A1]/40 flex gap-4">
              <ShieldCheck className="text-[#5C4A2A] shrink-0 mt-1" size={24} />
              <div className="text-sm text-[#5C4A2A] leading-relaxed">
                <p className="font-bold mb-1 underline">Bidder Declaration</p>
                "Main ye ghoshna karta hoon ki upar di gayi sabhi jankari satya hai. Main Auction ke niyam aur sharto (T&C) se sehmati rakhta hoon aur initial bid amount submit karne ke liye taiyaar hoon."
              </div>
            </div>

            {/* Form Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-between items-center">
              <button type="button" className="text-[#8C7345] font-bold hover:text-[#5C4A2A] transition-colors">
                Cancel Registration
              </button>
              
              <div className="flex gap-4 w-full sm:w-auto">
                <button type="button" className="flex-1 sm:px-8 py-4 rounded-full border border-[#5C4A2A] text-[#5C4A2A] font-bold hover:bg-[#5C4A2A] hover:text-white transition-all">
                  Preview Bid
                </button>
                <button type="submit" className="flex-1 sm:px-10 py-4 rounded-full bg-[#B79A63] hover:bg-[#8C7345] text-white font-bold shadow-xl shadow-[#B79A63]/30 transition-all flex items-center justify-center gap-2">
                  Submit Bid <Send size={18} />
                </button>
              </div>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default AuctionForm;
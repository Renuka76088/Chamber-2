import React, { useState } from 'react';
import { PackageSearch, Calculator, Send, CheckCircle } from 'lucide-react';

const TradeEnquiryForm = () => {
  const [step, setStep] = useState(1);

  // Reusable style for inputs to keep the code clean
  const inputStyle = "w-full px-4 py-3.5 rounded-xl bg-white/50 border border-[#D8C5A1] focus:ring-2 focus:ring-[#B79A63]/50 focus:border-[#B79A63] text-[#5C4A2A] outline-none transition-all";

  return (
    <div className="pt-32 pb-24 bg-[#FDFBF7] min-h-screen relative">
      <div className="absolute top-40 left-0 w-full h-[500px] bg-[#E6DBC4]/30 mix-blend-multiply filter blur-[100px] -z-10"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif text-[#333333] mb-4">Apply for Membership</h1>
          <p className="text-[#5C4A2A]/80 font-light text-lg max-w-2xl mx-auto">
            Join the Chamber of Textile. Please fill out the e-form below with your business credentials to begin your application.
          </p>
        </div>

        {/* Progress Tracker */}
        <div className="flex justify-between items-center mb-12 relative max-w-xl mx-auto">
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-[#E6DBC4] -z-10 -translate-y-1/2"></div>
          <div className="absolute top-1/2 left-0 h-0.5 bg-[#B79A63] -z-10 -translate-y-1/2 transition-all duration-500" style={{ width: step === 1 ? '0%' : '100%' }}></div>
          
          <button onClick={() => setStep(1)} className="flex flex-col items-center gap-2 group">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300 ${step >= 1 ? 'bg-[#5C4A2A] text-white shadow-lg shadow-[#5C4A2A]/30' : 'bg-white border-2 border-[#E6DBC4] text-[#8C7345]'}`}>
              <PackageSearch size={20} />
            </div>
            <span className={`text-sm font-medium ${step >= 1 ? 'text-[#333333]' : 'text-[#8C7345]'}`}>Business Details</span>
          </button>
          
          <button onClick={() => setStep(2)} className="flex flex-col items-center gap-2 group">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300 ${step >= 2 ? 'bg-[#5C4A2A] text-white shadow-lg shadow-[#5C4A2A]/30' : 'bg-white border-2 border-[#E6DBC4] text-[#8C7345] group-hover:border-[#B79A63]'}`}>
              <CheckCircle size={20} />
            </div>
            <span className={`text-sm font-medium ${step >= 2 ? 'text-[#333333]' : 'text-[#8C7345]'}`}>Verification</span>
          </button>
        </div>

        {/* Form Container */}
        <div className="glass-card rounded-[2rem] p-8 md:p-12 shadow-2xl relative overflow-hidden bg-white/40 backdrop-blur-md border border-white/20">
          {/* Decorative Corner */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#F4EFE6] rounded-bl-full z-0 opacity-50"></div>

          <div className="relative z-10 transition-all duration-500">
            {step === 1 ? (
              <div className="space-y-6 animate-fade-in-up">
                <h3 className="text-2xl font-serif text-[#333333] mb-8">Applicant Information</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-[#5C4A2A]">Name of Authorized Official</label>
                    <input type="text" placeholder="Enter Official Name" className={inputStyle} />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-[#5C4A2A]">Code No.</label>
                    <input type="text" placeholder="Enter Code Number" className={inputStyle} />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-[#5C4A2A]">Name of the Applicant</label>
                    <input type="text" placeholder="Full Name" className={inputStyle} />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-[#5C4A2A]">Title of the Textile Business</label>
                    <input type="text" placeholder="Company Name" className={inputStyle} />
                  </div>

                  <div className="space-y-2 md:col-span-2">
                    <label className="text-sm font-medium text-[#5C4A2A]">Address of the Business</label>
                    <textarea rows="2" placeholder="Complete Business Address" className={`${inputStyle} resize-none`}></textarea>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-[#5C4A2A]">Mob. No.</label>
                    <input type="tel" placeholder="+91 00000 00000" className={inputStyle} />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-[#5C4A2A]">Email Id</label>
                    <input type="email" placeholder="example@business.com" className={inputStyle} />
                  </div>

                  <div className="space-y-2 md:col-span-2">
                    <label className="text-sm font-medium text-[#5C4A2A]">URL if any</label>
                    <input type="url" placeholder="https://www.yourbusiness.com" className={inputStyle} />
                  </div>
                </div>

                <div className="pt-4 flex justify-end">
                  <button 
                    onClick={() => setStep(2)}
                    className="px-8 py-3.5 rounded-full bg-[#5C4A2A] text-white font-medium hover:bg-[#8C7345] transition-all duration-300 flex items-center gap-2"
                  >
                    Proceed to Categorization
                    <Send size={16} />
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-6 animate-fade-in-up">
                <h3 className="text-2xl font-serif text-[#333333] mb-8">Business Nature & Documents</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-[#5C4A2A]">Nature of the Business</label>
                    <select className={inputStyle}>
                      <option>Retailer</option>
                      <option>Wholesaler</option>
                      <option>Manufacturers</option>
                      <option>Others</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-[#5C4A2A]">Category of the Business</label>
                    <select className={inputStyle}>
                      <option>Proprietorship</option>
                      <option>Partnership</option>
                      <option>LLP</option>
                      <option>Private Limited</option>
                      <option>Ltd.</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div className="space-y-2 md:col-span-2">
                    <label className="text-sm font-medium text-[#5C4A2A]">Upload Document (GST, MSME, Trade License, etc.)</label>
                    <input type="file" className={`${inputStyle} file:mr-4 file:py-1 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#B79A63]/10 file:text-[#5C4A2A] hover:file:bg-[#B79A63]/20`} />
                  </div>
                </div>

                {/* Undertaking Section from Image */}
                <div className="bg-[#F4EFE6]/50 p-6 rounded-xl border border-[#D8C5A1]/40 text-sm text-[#5C4A2A]">
                  <h4 className="font-bold mb-3 underline">Undertaking</h4>
                  <p className="leading-relaxed italic">
                    "I have read the Terms & Conditions of subscription for the membership in the Chamber of Textile. 
                    All the information provided by me and the documents uploaded thereof are true and authentic 
                    to the best of my knowledge and belief."
                  </p>
                </div>

                <div className="pt-4 flex justify-between items-center">
                  <button 
                    onClick={() => setStep(1)}
                    className="px-6 py-3.5 rounded-full text-[#5C4A2A] font-medium hover:bg-[#F4EFE6] transition-all"
                  >
                    Back to Details
                  </button>

                  <div className="flex gap-4">
                    <button className="px-6 py-3.5 rounded-full border border-[#5C4A2A] text-[#5C4A2A] font-medium hover:bg-[#5C4A2A] hover:text-white transition-all">
                      Preview
                    </button>
                    <button className="px-8 py-3.5 rounded-full bg-[#B79A63] hover:bg-[#8C7345] text-white font-medium shadow-lg transition-all">
                      Submit Application
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default TradeEnquiryForm;
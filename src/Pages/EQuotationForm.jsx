import React from "react";
import { 
  FileEdit, 
  Upload, 
  Package, 
  IndianRupee, 
  ClipboardCheck, 
  ShieldCheck, 
  Send, 
  Eye,
  Landmark,
  Layers
} from "lucide-react";

const EQuotationForm = () => {
  const inputStyle = "w-full bg-white border border-gray-300 px-5 py-4 text-[16px] focus:border-[#d97706] outline-none transition-all placeholder:text-gray-300 font-normal text-gray-800 rounded-xl";
  const labelStyle = "block text-[17px] font-bold text-gray-700 mb-3 tracking-wide";

  return (
    <div className="bg-white font-sans pb-24 border-t border-gray-100">
      
      {/* 1. INSTITUTIONAL BANNER */}
      <section className="relative h-[450px] bg-gray-900 text-white flex items-center overflow-hidden">
        {/* Abstract Texture Background */}
        <div className="absolute inset-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1596455607563-ad6193f76b17?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Silk Manufacturing" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Amber Accent Overlays */}
        <div className="absolute right-0 top-0 bottom-0 w-1/4 bg-amber-600 transform translate-x-24 -skew-x-12 opacity-90"></div>
        <div className="absolute left-[-10px] top-1/2 -translate-y-1/2 h-[60%] w-2 bg-amber-500"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full text-center md:text-left">
          <div className="flex items-center gap-3 justify-center md:justify-start mb-6">
            <Layers className="text-amber-400" size={28} />
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-amber-400">Wholesale Portal</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif leading-none mb-6">
            Submit Your <br />
            <span className="text-amber-500 font-sans font-black tracking-tighter uppercase">e-Quotation</span>
          </h1>
          <p className="max-w-xl text-gray-200 text-[17px] leading-relaxed font-light">
            Provide detailed pricing and technical specifications for bulk silk materials, 
            manufacturing machinery, or B2B consultancy services to Parekh Silk Fabric.
          </p>
        </div>
      </section>

      {/* 2. E-QUOTATION FORM SECTION */}
      <div className="max-w-5xl mx-auto px-6 -mt-20 relative z-20">
        <div className="bg-white rounded-[32px] shadow-2xl border border-gray-100 overflow-hidden">
          
          <form className="p-10 md:p-16 space-y-12">
            
            {/* SECTION 1: VENDOR / APPLICANT */}
            <div className="grid md:grid-cols-2 gap-10">
              <div className="md:col-span-2 border-l-4 border-amber-500 pl-4">
                 <h3 className="text-2xl font-serif text-gray-900" >Vendor Information</h3>
                 <p className="text-[14px] text-gray-400 font-bold uppercase tracking-widest mt-1">Company Credentials</p>
              </div>
              <div>
                <label className={labelStyle}>Name of the Applicant</label>
                <input type="text" className={inputStyle} placeholder="Full Legal Name" />
              </div>
              <div>
                <label className={labelStyle}>Business Title</label>
                <input type="text" className={inputStyle} placeholder="Company / Firm Name" />
              </div>
              <div>
                <label className={labelStyle}>Mobile Number</label>
                <input type="tel" className={inputStyle} placeholder="+91 XXXXX XXXXX" />
              </div>
              <div>
                <label className={labelStyle}>Email Address</label>
                <input type="email" className={inputStyle} placeholder="quotes@company.com" />
              </div>
            </div>

            {/* SECTION 2: QUOTATION DETAILS */}
            <div className="grid md:grid-cols-2 gap-10 pt-4">
              <div className="md:col-span-2 border-l-4 border-amber-500 pl-4">
                 <h3 className="text-2xl font-serif text-gray-900">Quotation Specifics</h3>
                 <p className="text-[14px] text-gray-400 font-bold uppercase tracking-widest mt-1">Service & Pricing Details</p>
              </div>
              <div className="md:col-span-2">
                <label className={labelStyle}>Nature of Business / Service</label>
                <select className={inputStyle}>
                   <option>Silk & Textiles</option>
                   <option>Manufacturing Machinery</option>
                   <option>Logistics & Supply Chain</option>
                   <option>Industrial Packaging</option>
                   <option>Other</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className={labelStyle}>Technical Specifications / Description</label>
                <textarea className={`${inputStyle} h-32 resize-none`} placeholder="Describe the fabrics or services being quoted..."></textarea>
              </div>
              <div>
                <label className={labelStyle}>Expected Payment Terms</label>
                <input type="text" className={inputStyle} placeholder="e.g., 50% Advance, 50% on Delivery" />
              </div>
              <div>
                <label className={labelStyle}>Estimated Timeline</label>
                <input type="text" className={inputStyle} placeholder="e.g., 15 Working Days" />
              </div>
            </div>

            {/* SECTION 3: DOCUMENT UPLOAD */}
            <div className="pt-4">
              <label className={labelStyle}>Upload Final Quotation (PDF Only)</label>
              <div className="border-2 border-dashed border-gray-200 rounded-3xl p-12 text-center hover:border-amber-500 transition-all cursor-pointer bg-gray-50 group">
                <Upload className="mx-auto text-amber-500/50 group-hover:text-amber-500 mb-4 transition-colors" size={40} />
                <p className="text-[17px] font-bold text-gray-700">Click to upload your Detailed PDF Quotation</p>
                <p className="text-[13px] text-gray-400 mt-2 uppercase tracking-widest font-bold">Quotation must exclude 3rd Party & GST</p>
              </div>
            </div>

            {/* UNDERTAKING SECTION */}
            <div className="bg-amber-50 rounded-[32px] p-10 border border-amber-100 relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-2 bg-amber-500"></div>
              <div className="flex items-center gap-3 mb-4">
                <ShieldCheck className="text-amber-600" size={30} />
                <h4 className="text-amber-600 text-xl font-bold uppercase tracking-wide">Official Declaration</h4>
              </div>
              <p className="text-[17px] leading-relaxed text-gray-700 font-light italic">
                "I hereby declare that the prices quoted above are true and competitive to the best of my 
                knowledge. All documents uploaded are authentic. I understand that the procurement process 
                involves a formal technical review for final selection by Parekh Silk Fabric."
              </p>
              <div className="mt-8 flex items-center gap-4">
                 <input type="checkbox" className="w-5 h-5 accent-amber-600 cursor-pointer rounded" id="agree-quote" />
                 <label htmlFor="agree-quote" className="text-sm font-bold uppercase tracking-widest text-amber-700 cursor-pointer">I accept the terms and conditions</label>
              </div>
            </div>

            {/* ACTION BUTTONS */}
            <div className="flex flex-col md:flex-row gap-6 pt-10">
              <button type="button" className="flex-1 py-5 rounded-2xl border-2 border-amber-600 text-amber-600 font-bold tracking-wide text-lg uppercase hover:bg-amber-50 transition-all flex items-center justify-center gap-3">
                 Preview Quotation
              </button>
              <button type="submit" className="flex-1 py-5 rounded-2xl bg-amber-600 text-white font-bold tracking-wide text-lg uppercase shadow-xl shadow-amber-200 hover:bg-amber-700 transition-all flex items-center justify-center gap-3">
                 Submit Now <Send size={20} />
              </button>
            </div>
         
          </form>
          
          <div className="bg-gray-50 py-6 text-center border-t border-gray-100">
             <p className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.5em]">Parekh Silk Fabric • Procurement Division</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EQuotationForm;
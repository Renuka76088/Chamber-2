import React from 'react';
import { FileText, CalendarDays } from 'lucide-react';

const Circular = () => {
  const circulars = [
    { title: "Revised Guidelines for Silk Export Subsidies 2026", date: "April 05, 2026", num: "CIR/2026/045" },
    { title: "Notification regarding Quality Certification Standards", date: "March 20, 2026", num: "CIR/2026/042" },
    { title: "Annual General Meeting Announcement - May 2026", date: "March 15, 2026", num: "CIR/2026/039" }
  ];

  return (
    <div className="pt-24 min-h-screen bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-serif text-[#5C4A2A] mb-6">Official Circulars</h1>
          <p className="text-[#8C7345] text-lg">
            Stay informed with the latest updates, industry guidelines, and official announcements 
            from Parekh Silk and associated regulatory bodies.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-[#E6DBC4] overflow-hidden max-w-4xl mx-auto">
          {circulars.map((item, index) => (
            <div key={index} className="p-6 md:p-8 flex flex-col md:flex-row gap-6 justify-between items-start md:items-center border-b border-[#E6DBC4]/30 last:border-0 hover:bg-[#FDFBF7] transition-colors">
              <div className="flex gap-4">
                <div className="hidden md:flex flex-shrink-0 w-12 h-12 bg-[#F4EFE6] rounded-xl items-center justify-center text-[#B79A63]">
                  <FileText size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-[#5C4A2A] mb-2">{item.title}</h3>
                  <div className="flex flex-wrap gap-4 text-sm text-[#8C7345]">
                    <span className="flex items-center gap-1.5"><CalendarDays size={16} /> {item.date}</span>
                    <span className="font-mono text-xs px-2 py-0.5 bg-[#E6DBC4]/50 rounded text-[#5C4A2A]">{item.num}</span>
                  </div>
                </div>
              </div>
              <button className="flex-shrink-0 px-6 py-2 border-2 border-[#B79A63] text-[#B79A63] rounded-full font-medium hover:bg-[#B79A63] hover:text-white transition-colors">
                Read PDF
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Circular;

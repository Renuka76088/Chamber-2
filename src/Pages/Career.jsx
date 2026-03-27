import React from 'react';
import { Briefcase, MapPin, Clock } from 'lucide-react';

const Career = () => {
  const jobs = [
    { title: "Senior Textile Designer", loc: "Mumbai, India", type: "Full-time" },
    { title: "Supply Chain Manager", loc: "Bangalore, India", type: "Full-time" },
    { title: "Quality Control Analyst (Silk)", loc: "Mysore, India", type: "Contract" }
  ];

  return (
    <div className="pt-24 min-h-screen bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-serif text-[#5C4A2A] mb-6">Careers at Parekh Silk</h1>
          <p className="text-[#8C7345] text-lg">
            Weave your future with us. Join a team dedicated to preserving the heritage of silk 
            while innovating for a sustainable tomorrow.
          </p>
        </div>

        <div className="grid gap-6 max-w-5xl mx-auto">
          {jobs.map((job, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-[#E6DBC4] hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                <div>
                  <h3 className="text-2xl font-serif text-[#5C4A2A] mb-3">{job.title}</h3>
                  <div className="flex flex-wrap gap-4 text-sm text-[#8C7345]">
                    <span className="flex items-center gap-1.5"><MapPin size={16} /> {job.loc}</span>
                    <span className="flex items-center gap-1.5"><Briefcase size={16} /> {job.type}</span>
                    <span className="flex items-center gap-1.5"><Clock size={16} /> Posted 2 days ago</span>
                  </div>
                </div>
                <button className="mt-6 md:mt-0 px-8 py-3 bg-[#5C4A2A] text-white rounded-full font-medium hover:bg-[#8C7345] transition-colors shadow-lg shadow-[#5C4A2A]/20">
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Career;

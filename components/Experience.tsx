import React from 'react';
import { RESUME_DATA } from '../constants';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-slate-100 mb-12 flex items-center gap-3">
          <span className="w-12 h-1 bg-emerald-500 rounded-full"></span>
          Professional Experience
        </h2>

        <div className="space-y-8">
          {RESUME_DATA.experience.map((job, idx) => (
            <div key={idx} className="relative pl-8 md:pl-0">
              {/* Timeline connector for larger screens */}
              <div className="hidden md:block absolute left-[24px] top-0 bottom-0 w-px bg-slate-800"></div>
              
              <div className="md:flex gap-8 items-start group">
                {/* Date Bubble (Desktop) */}
                <div className="hidden md:flex flex-col items-center w-12 flex-shrink-0 relative z-10">
                   <div className="w-3 h-3 bg-cyan-500 rounded-full mt-2 ring-4 ring-slate-900"></div>
                </div>

                <div className="flex-1 bg-slate-800/30 rounded-xl p-6 border border-slate-700/50 hover:border-slate-600 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                    <div>
                      <h3 className="text-xl font-bold text-slate-100">{job.role}</h3>
                      <div className="flex items-center gap-2 text-cyan-400 font-medium">
                        <Briefcase size={16} />
                        {job.company}
                      </div>
                    </div>
                    <div className="text-slate-400 text-sm flex flex-col md:items-end gap-1">
                      <span className="flex items-center gap-1"><Calendar size={14}/> {job.period}</span>
                      <span className="flex items-center gap-1"><MapPin size={14}/> {job.location}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-2">
                    {job.points.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2 text-slate-300 text-sm leading-relaxed">
                        <span className="mt-1.5 w-1.5 h-1.5 bg-slate-500 rounded-full flex-shrink-0"></span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
import React from 'react';
import { RESUME_DATA } from '../constants';
import { Layers } from 'lucide-react';

export const Projects: React.FC = () => {
  return (
    <section className="py-20 bg-slate-900 border-t border-slate-800/50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-slate-100 mb-12 flex items-center gap-3">
           <span className="w-12 h-1 bg-purple-500 rounded-full"></span>
          Key Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {RESUME_DATA.projects.map((project, idx) => (
            <div key={idx} className="group bg-slate-800/30 rounded-2xl overflow-hidden border border-slate-700 hover:border-purple-500/40 transition-all flex flex-col h-full">
              <div className="p-6 md:p-8 flex-1">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <h3 className="text-xl font-bold text-slate-100 group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-xs font-mono px-2 py-1 rounded bg-slate-900 text-slate-400 border border-slate-700">
                    {project.period}
                  </span>
                </div>
                
                <div className="mb-4">
                  <div className="w-full h-px bg-slate-700/50"></div>
                </div>

                <ul className="space-y-3">
                  {project.description.map((desc, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-3 text-slate-300 text-sm">
                      <Layers className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" />
                      {desc}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-slate-900/50 p-4 border-t border-slate-700/50">
                <p className="text-xs text-slate-500 font-mono text-center">
                  Embedded Systems • Firmware • C/C++
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
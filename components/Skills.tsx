import React from 'react';
import { RESUME_DATA } from '../constants';
import { Cpu, Code, Network, PenTool, Radio, Terminal } from 'lucide-react';

// Map categories to icons
const getIcon = (category: string) => {
  if (category.includes("Language")) return <Code className="text-cyan-400" />;
  if (category.includes("Microcontrollers")) return <Cpu className="text-emerald-400" />;
  if (category.includes("Protocol")) return <Network className="text-orange-400" />;
  if (category.includes("Hardware")) return <Radio className="text-rose-400" />;
  if (category.includes("Tool")) return <Terminal className="text-purple-400" />;
  return <PenTool className="text-blue-400" />;
};

export const Skills: React.FC = () => {
  return (
    <section className="py-20 bg-slate-900 border-t border-slate-800/50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-slate-100 mb-12 flex items-center gap-3">
          <span className="w-12 h-1 bg-cyan-500 rounded-full"></span>
          Technical Expertise
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {RESUME_DATA.technicalSkills.map((skillGroup, idx) => (
            <div 
              key={idx} 
              className="bg-slate-800/40 p-6 rounded-xl border border-slate-700 hover:border-cyan-500/30 transition-all hover:bg-slate-800/60"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-slate-900 rounded-lg">
                  {getIcon(skillGroup.category)}
                </div>
                <h3 className="text-lg font-semibold text-slate-200">{skillGroup.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skillGroup.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx} 
                    className="px-3 py-1 bg-slate-900/80 text-slate-300 text-sm rounded-md border border-slate-700/50"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
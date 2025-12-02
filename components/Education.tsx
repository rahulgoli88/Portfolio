import React from 'react';
import { RESUME_DATA } from '../constants';
import { GraduationCap, Award } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Education Column */}
          <div>
            <h2 className="text-3xl font-bold text-slate-100 mb-8 flex items-center gap-3">
              <span className="w-8 h-1 bg-cyan-500 rounded-full"></span>
              Education
            </h2>
            <div className="space-y-6">
              {RESUME_DATA.education.map((edu, idx) => (
                <div key={idx} className="bg-slate-800/20 p-6 rounded-xl border border-slate-700">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-cyan-900/20 rounded-lg text-cyan-400">
                      <GraduationCap size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-100">{edu.degree}</h3>
                      <p className="text-cyan-400 font-medium">{edu.institution}</p>
                      <div className="flex justify-between items-center text-sm text-slate-500 mt-2">
                        <span>{edu.location}</span>
                        <span>{edu.period}</span>
                      </div>
                      {edu.details && (
                        <p className="text-sm text-slate-400 mt-3 pt-3 border-t border-slate-700/50">
                          {edu.details}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Column */}
          <div>
            <h2 className="text-3xl font-bold text-slate-100 mb-8 flex items-center gap-3">
              <span className="w-8 h-1 bg-emerald-500 rounded-full"></span>
              Certifications
            </h2>
            <div className="space-y-6">
              {RESUME_DATA.certifications.map((cert, idx) => (
                <div key={idx} className="bg-slate-800/20 p-6 rounded-xl border border-slate-700">
                   <div className="flex items-start gap-4">
                    <div className="p-3 bg-emerald-900/20 rounded-lg text-emerald-400">
                      <Award size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-100">{cert.name}</h3>
                      <p className="text-emerald-400 font-medium">{cert.issuer}</p>
                      <div className="flex justify-between items-center text-sm text-slate-500 mt-2">
                         <span>{cert.period}</span>
                      </div>
                      <p className="text-sm text-slate-400 mt-2">
                        {cert.details}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
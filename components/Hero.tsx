import React from 'react';
import { Mail, Phone, Linkedin, Github, MapPin, Download, ExternalLink, Globe } from 'lucide-react';
import { RESUME_DATA } from '../constants';

export const Hero: React.FC = () => {
  const { name, title, summary, contact } = RESUME_DATA;

  return (
    <header className="relative bg-slate-900 pt-20 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
      {/* Abstract Background Decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-cyan-900/10 -skew-x-12 transform origin-top blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-900/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <h1 className="text-5xl lg:text-7xl font-bold text-slate-100 mb-4 tracking-tight">
            {name}
          </h1>
          <h2 className="text-2xl lg:text-3xl text-cyan-400 font-medium mb-6">
            {title}
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed mb-8 max-w-2xl">
            {summary}
          </p>

          <div className="flex flex-wrap gap-4 text-slate-300 mb-10">
            <a href={`mailto:${contact.email}`} className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
              <Mail size={18} /> {contact.email}
            </a>
            <a href={`tel:${contact.phone}`} className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
              <Phone size={18} /> {contact.phone}
            </a>
            <span className="flex items-center gap-2">
              <MapPin size={18} /> {contact.location}
            </span>
          </div>

          <div className="flex flex-wrap gap-4">
            <a 
              href={`https://${contact.linkedin}`} 
              target="_blank" 
              rel="noreferrer"
              className="bg-cyan-600 hover:bg-cyan-500 text-white px-6 py-3 rounded-lg font-medium transition-all flex items-center gap-2"
            >
              <Linkedin size={20} /> LinkedIn
            </a>
            <a 
              href={`https://${contact.github}`} 
              target="_blank" 
              rel="noreferrer"
              className="bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 px-6 py-3 rounded-lg font-medium transition-all flex items-center gap-2"
            >
              <Github size={20} /> GitHub
            </a>
            
            {contact.naukri && (
              <a 
                href={`https://${contact.naukri}`} 
                target="_blank" 
                rel="noreferrer"
                className="bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 px-6 py-3 rounded-lg font-medium transition-all flex items-center gap-2"
              >
                <ExternalLink size={20} /> Naukri
              </a>
            )}

            {contact.portfolio && (
              <a 
                href={`https://${contact.portfolio}`} 
                target="_blank" 
                rel="noreferrer"
                className="bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 px-6 py-3 rounded-lg font-medium transition-all flex items-center gap-2"
              >
                <Globe size={20} /> Portfolio
              </a>
            )}

            {/* Mock Resume Download */}
             <button 
              className="bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 px-6 py-3 rounded-lg font-medium transition-all flex items-center gap-2"
              onClick={() => alert("Resume download functionality would go here.")}
            >
              <Download size={20} /> Resume
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
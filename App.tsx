import React from 'react';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { AIPlayground } from './components/AIPlayground';

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-100">
      <Hero />
      <Skills />
      <AIPlayground />
      <Experience />
      <Projects />
      <Education />
      
      <footer className="py-8 bg-slate-950 text-center text-slate-500 text-sm">
        <div className="container mx-auto px-6">
          <p>© {new Date().getFullYear()} Rahul Goli. All rights reserved.</p>
          <p className="mt-2">Designed and Built with React, Tailwind, and Gemini AI.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
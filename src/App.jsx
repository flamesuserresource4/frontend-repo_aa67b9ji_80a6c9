import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Work from './components/Work';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* page background accents */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 grid-lines" />
        <div className="absolute inset-0 starfield" />
      </div>

      <Navbar />
      <Hero />
      <Services />
      <Work />
      <Contact />
      <footer className="relative border-t border-white/10 bg-black/60 py-10 backdrop-blur">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-fuchsia-400/0 via-fuchsia-400/50 to-fuchsia-400/0" />
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 text-sm text-white/60">
          <p>© {new Date().getFullYear()} Flux Studio. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-white">Twitter</a>
            <a href="#" className="hover:text-white">Dribbble</a>
            <a href="#" className="hover:text-white">Behance</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;

import React from 'react';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-black/50 backdrop-blur">
      {/* neon top border */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-emerald-400/0 via-emerald-400/50 to-emerald-400/0" />

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="text-lg font-semibold tracking-tight gradient-text">
          Flux Studio
        </a>
        <nav className="hidden items-center gap-6 text-sm text-white/80 sm:flex">
          <a href="#services" className="transition hover:text-white/100 hover:gradient-text">Services</a>
          <a href="#work" className="transition hover:text-white/100 hover:gradient-text">Work</a>
          <a href="#contact" className="transition hover:text-white/100 hover:gradient-text">Contact</a>
          <a
            href="#contact"
            className="relative overflow-hidden rounded-full border border-white/15 bg-white/5 px-4 py-2 text-white hover:bg-white/10 shimmer"
          >
            Start project
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

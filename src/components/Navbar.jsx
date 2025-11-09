import React from 'react';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-black/60 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="text-lg font-semibold tracking-tight text-white">
          Flux Studio
        </a>
        <nav className="hidden items-center gap-6 text-sm text-white/80 sm:flex">
          <a href="#services" className="hover:text-white">Services</a>
          <a href="#work" className="hover:text-white">Work</a>
          <a href="#contact" className="hover:text-white">Contact</a>
          <a
            href="#contact"
            className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-white hover:bg-white/10"
          >
            Start project
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

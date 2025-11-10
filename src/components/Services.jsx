import React from 'react';
import { Code2, Palette, MonitorSmartphone, Sparkles } from 'lucide-react';

const services = [
  {
    icon: Palette,
    title: 'Brand & Visual Identity',
    desc: 'Moodboards, typography, color systems, and scalable design tokens that align with your voice.',
  },
  {
    icon: MonitorSmartphone,
    title: 'Web Design & UX',
    desc: 'Conversion-focused wireframes and responsive layouts, crafted to feel delightful and intuitive.',
  },
  {
    icon: Code2,
    title: 'Web Development',
    desc: 'Modern stacks, fast performance, and maintainable code shipped with care and best practices.',
  },
];

const Services = () => {
  return (
    <section id="services" className="relative border-t border-white/10 bg-gradient-to-b from-black to-gray-950 py-20">
      <div className="pointer-events-none absolute inset-0 starfield" />
      <div className="pointer-events-none absolute -top-16 right-10 h-56 w-56 rounded-full bg-fuchsia-400/20 orb" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex items-center justify-between gap-6">
          <div>
            <h2 className="text-3xl font-semibold sm:text-4xl"><span className="gradient-text">What we do</span></h2>
            <p className="mt-2 max-w-2xl text-white/70">
              A full-stack partner for digital brands — from concept to production and beyond.
            </p>
          </div>
          <div className="hidden rounded-full border border-white/10 glass px-3 py-1 text-sm text-white/80 sm:inline-flex">
            <Sparkles className="mr-2 h-4 w-4 text-emerald-300" /> Premium quality
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:bg-white/[0.06]"
            >
              <div className="pointer-events-none absolute -inset-px bg-gradient-to-br from-emerald-400/0 via-white/0 to-indigo-400/0 opacity-0 transition group-hover:opacity-20" />
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-300 neon-ring">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{desc}</p>
              <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <button className="mt-4 text-sm font-medium text-emerald-300 transition hover:text-emerald-200">
                Learn more →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

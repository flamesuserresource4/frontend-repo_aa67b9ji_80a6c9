import React from 'react';

const items = [
  {
    title: 'Aether Labs',
    tag: 'SaaS Platform',
    image:
      'https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Nova Studio',
    tag: 'Creative Agency',
    image:
      'https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Lumen OS',
    tag: 'Product Website',
    image:
      'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1600&auto=format&fit=crop',
  },
];

const Work = () => {
  return (
    <section id="work" className="relative border-t border-white/10 bg-black py-20">
      <div className="pointer-events-none absolute inset-0 grid-lines" />
      <div className="pointer-events-none absolute left-10 top-10 h-48 w-48 rounded-full bg-cyan-400/20 orb" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-semibold sm:text-4xl"><span className="gradient-text">Selected work</span></h2>
            <p className="mt-2 max-w-2xl text-white/70">
              A snapshot of recent launches. We obsess over details and performance.
            </p>
          </div>
          <a href="#contact" className="hidden text-sm font-medium text-emerald-300 hover:text-emerald-200 sm:inline">
            Start a project →
          </a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <div key={it.title} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={it.image}
                  alt={it.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80" />
              </div>
              <div className="flex items-center justify-between p-5">
                <div>
                  <p className="text-sm text-white/60">{it.tag}</p>
                  <h3 className="text-lg font-semibold text-white">{it.title}</h3>
                </div>
                <span className="text-sm text-emerald-300 opacity-0 transition group-hover:opacity-100">
                  View case →
                </span>
              </div>
              {/* border glow */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
              <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-r from-emerald-400/0 via-emerald-400/10 to-transparent opacity-0 transition group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;

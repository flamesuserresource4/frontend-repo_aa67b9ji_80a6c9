import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Subtle gradient glow */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30" />

      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/80 backdrop-blur">
              <Sparkles className="h-4 w-4 text-emerald-300" />
              <span>Tech-forward web design studio</span>
            </div>

            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
              We design playful, modern websites that convert
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
              From concept to launch, we craft interactive experiences that feel alive.
              Bring your brand to life with a portfolio-worthy site engineered for results.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#work"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 font-medium text-gray-900 transition hover:bg-emerald-100"
              >
                <Rocket className="h-5 w-5" />
                View our work
                <svg
                  className="h-5 w-5 transition-transform group-hover:translate-x-0.5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-3 font-medium text-white/90 backdrop-blur transition hover:bg-white/10"
              >
                Start a project
              </a>
            </div>
          </div>

          {/* Spline 3D scene */}
          <div className="relative h-[420px] w-full rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-1 md:h-[560px]">
            <div className="absolute inset-0 rounded-2xl">
              <Spline
                scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
                style={{ width: '100%', height: '100%' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

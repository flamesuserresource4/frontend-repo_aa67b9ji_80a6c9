import React, { useState } from 'react';
import { Mail, CheckCircle2 } from 'lucide-react';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setEmail('');
    setMessage('');
  };

  return (
    <section id="contact" className="relative border-t border-white/10 bg-gradient-to-b from-gray-950 to-black py-20">
      <div className="pointer-events-none absolute inset-0 starfield" />
      <div className="pointer-events-none absolute -bottom-10 left-10 h-56 w-56 rounded-full bg-emerald-400/20 orb" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 max-w-2xl">
          <h2 className="text-3xl font-semibold sm:text-4xl"><span className="gradient-text">Let’s build something great</span></h2>
          <p className="mt-2 text-white/70">
            Tell us about your goals and timeline. We’ll reply within one business day.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="grid gap-6 rounded-2xl border border-white/10 glass p-6 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label className="block text-sm text-white/70">Email</label>
            <div className="mt-2 flex items-center overflow-hidden rounded-xl border border-white/10 bg-black/40">
              <span className="pl-3 text-white/50">
                <Mail className="h-5 w-5" />
              </span>
              <input
                type="email"
                required
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-transparent p-3 text-white placeholder-white/40 outline-none"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label className="block text-sm text-white/70">Project details</label>
            <textarea
              required
              placeholder="Scope, timeline, budget..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={5}
              className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-black/40 p-3 text-white placeholder-white/40 outline-none"
            />
          </div>

          <div className="sm:col-span-2 flex items-center justify-between gap-4">
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-400 px-6 py-3 font-medium text-gray-900 transition hover:bg-emerald-300 neon-ring"
            >
              Send request
            </button>
            {submitted && (
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-400/10 px-3 py-1 text-emerald-300">
                <CheckCircle2 className="h-4 w-4" />
                Sent! We’ll be in touch.
              </div>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;

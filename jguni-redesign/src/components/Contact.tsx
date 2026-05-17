"use client";
import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <h2 className="text-sm font-bold text-accent tracking-widest uppercase mb-3">Get in Touch</h2>
            <h3 className="text-3xl lg:text-5xl font-display font-bold text-primary mb-6">
              Start Your Application.
            </h3>
            <p className="text-lg text-secondary mb-10">
              Fill out the form below and our admissions team will contact you within 24 hours to guide you through the process.
            </p>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-50 text-accent flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div>
                  <h4 className="font-bold text-primary text-lg">Visit Us</h4>
                  <p className="text-secondary mt-1">Nr. Gurudwara, S.G. Highway, Ahmedabad - 380060, Gujarat, India</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-50 text-accent flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <h4 className="font-bold text-primary text-lg">Email Us</h4>
                  <p className="text-secondary mt-1">info@jguni.in</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-50 text-accent flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                <div>
                  <h4 className="font-bold text-primary text-lg">Call Us</h4>
                  <p className="text-secondary mt-1">+91 79 4050 0500</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-sm border border-border">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">First Name</label>
                  <input type="text" required className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">Last Name</label>
                  <input type="text" required className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all" />
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-sm font-semibold text-primary mb-2">Email Address</label>
                <input type="email" required className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all" />
              </div>
              <div className="mb-6">
                <label className="block text-sm font-semibold text-primary mb-2">Program of Interest</label>
                <select required className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all">
                  <option value="">Select a program</option>
                  <option>BBA / BBA (Hons)</option>
                  <option>BCA / BCA (Hons)</option>
                  <option>B.Com / B.Com (Hons)</option>
                  <option>B.Tech – CSE / IT / AI</option>
                  <option>MBA / MCA</option>
                </select>
              </div>
              <div className="mb-8">
                <label className="block text-sm font-semibold text-primary mb-2">Message</label>
                <textarea rows={4} className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all resize-none"></textarea>
              </div>
              <button type="submit" className="w-full py-4 bg-primary text-white rounded-xl font-bold hover:bg-accent transition-colors">
                {submitted ? "Message Sent!" : "Submit Application"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

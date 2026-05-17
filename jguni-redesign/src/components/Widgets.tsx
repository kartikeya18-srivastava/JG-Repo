"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function FloatingApplyWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => setIsMounted(true), []);

  if (!isMounted) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="mb-4 bg-white rounded-2xl shadow-2xl border border-border overflow-hidden w-80"
          >
            <div className="bg-primary p-4 text-white">
              <h4 className="font-bold">Quick Apply</h4>
              <p className="text-xs text-white/80">Admissions 2025-26 Open</p>
            </div>
            <div className="p-4 space-y-3">
              <input type="text" placeholder="Full Name" className="w-full text-sm px-3 py-2 border border-border rounded-lg focus:outline-none focus:border-accent" />
              <input type="email" placeholder="Email Address" className="w-full text-sm px-3 py-2 border border-border rounded-lg focus:outline-none focus:border-accent" />
              <input type="tel" placeholder="Phone Number" className="w-full text-sm px-3 py-2 border border-border rounded-lg focus:outline-none focus:border-accent" />
              <button className="w-full bg-accent text-white py-2 rounded-lg text-sm font-bold hover:bg-accent-light transition-colors">
                Submit Request
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-accent text-white rounded-full flex items-center justify-center shadow-lg shadow-accent/40 hover:scale-105 transition-transform"
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        ) : (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
        )}
      </button>
    </div>
  );
}

export function AnnouncementTicker() {
  return (
    <div className="bg-primary-light text-white text-xs sm:text-sm py-2 relative z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-light opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
          </span>
          <span className="font-medium text-white/90">
            Admissions Open for UG & PG Programs 2025-26. <a href="#contact" className="text-accent-light hover:underline font-bold ml-1">Apply Now →</a>
          </span>
        </div>
        <div className="hidden md:flex items-center gap-4 text-white/70">
          <a href="#" className="hover:text-white transition-colors">Student Login</a>
          <span>|</span>
          <a href="#" className="hover:text-white transition-colors">Alumni Portal</a>
        </div>
      </div>
    </div>
  );
}

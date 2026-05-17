"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Programmes", href: "#programs" },
    { name: "Campus", href: "#campus" },
    { name: "About", href: "#about" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact Us", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <nav 
        className={`w-full transition-all duration-300 ${
          isScrolled 
            ? "bg-white/90 dark:bg-slate-900/90 backdrop-blur-md py-4 shadow-lg border-b border-slate-200/50 dark:border-slate-800/50" 
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-12 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group relative z-10">
            <img 
              src="https://jguni.in/images/jg-logo.svg" 
              alt="JG University Logo" 
              className="h-10 sm:h-12 w-auto transition-transform duration-300 group-hover:scale-105"
            />
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-semibold text-sm tracking-wide text-slate-800 dark:text-slate-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://jguni.in/admissions.html"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full font-bold text-sm tracking-wide bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Admissions Open
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative z-10 p-2"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`w-full h-0.5 rounded transition-all duration-300 bg-slate-900 dark:bg-white ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`w-full h-0.5 rounded transition-all duration-300 bg-slate-900 dark:bg-white ${isOpen ? "opacity-0" : ""}`} />
              <span className={`w-full h-0.5 rounded transition-all duration-300 bg-slate-900 dark:bg-white ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>

        {/* Mobile Nav Overlay */}
        <div 
          className={`fixed inset-0 bg-slate-900/95 backdrop-blur-lg md:hidden flex flex-col justify-center items-center gap-8 transition-all duration-500 z-0 ${
            isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-white text-2xl font-bold tracking-wide hover:text-blue-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://jguni.in/admissions.html"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="mt-4 px-8 py-3.5 bg-blue-600 text-white rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-lg hover:scale-105"
          >
            Admissions Open
          </a>
        </div>
      </nav>
    </header>
  );
}

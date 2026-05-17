"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-surface -z-20" />
      <div className="absolute inset-0 bg-grid-pattern opacity-50 -z-10" />
      
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 text-center lg:text-left animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-accent text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              Admissions Open 2025-26
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-display font-extrabold text-primary tracking-tight leading-[1.1] mb-6 text-balance">
              Knowledge Beyond the Pages of Books.
            </h1>
            
            <p className="text-lg text-secondary max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed text-balance">
              A UGC-approved, tech-driven university shaping future leaders through industry-aligned education. Explore 60+ programs across management, computing, engineering, and law.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <a href="#programs" className="w-full sm:w-auto px-8 py-4 bg-primary text-white rounded-full font-medium hover:bg-accent transition-colors text-center shadow-lg shadow-primary/20">
                Explore Programs
              </a>
              <a href="#about" className="w-full sm:w-auto px-8 py-4 bg-white text-primary border border-border rounded-full font-medium hover:bg-surface transition-colors text-center">
                About JG University
              </a>
            </div>

            <div className="mt-12 pt-8 border-t border-border flex items-center justify-center lg:justify-start gap-8 sm:gap-12">
              <div>
                <p className="text-3xl font-bold text-primary">17+</p>
                <p className="text-sm text-secondary font-medium mt-1">Colleges</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">60+</p>
                <p className="text-sm text-secondary font-medium mt-1">Programs</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">1965</p>
                <p className="text-sm text-secondary font-medium mt-1">Established</p>
              </div>
            </div>
          </div>
          
          <div className="flex-1 w-full lg:w-auto relative" style={{ animation: "fade-in-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards", opacity: 0 }}>
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] lg:aspect-square shadow-2xl shadow-primary/10 border border-border/50">
              <Image 
                src="https://jguni.in/images/CRM0SCENE.webp" 
                alt="JG University Campus" 
                fill 
                className="object-cover"
                priority
              />
            </div>
            {/* Top Right Widget: Recruiter Ticker */}
            <div className="absolute top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-border/50 hidden md:block w-48">
              <p className="text-xs font-bold text-secondary mb-2 uppercase tracking-wider">Top Recruiters</p>
              <div className="overflow-hidden">
                <div className="flex items-center gap-4 animate-[marquee_10s_linear_infinite] whitespace-nowrap">
                  <span className="font-bold text-slate-800">TCS</span>
                  <span className="font-bold text-blue-600">Infosys</span>
                  <span className="font-bold text-red-600">Oracle</span>
                  <span className="font-bold text-slate-800">TCS</span>
                  <span className="font-bold text-blue-600">Infosys</span>
                </div>
              </div>
            </div>
            
            {/* Bottom Left Widget */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-border/50 hidden md:block">
              <p className="font-bold text-primary mb-1">UGC Approved</p>
              <p className="text-sm text-secondary flex items-center gap-2">
                <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                Nationally Recognized
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, x: -30 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 lg:order-1 relative rounded-2xl overflow-hidden shadow-xl border border-border/50 aspect-[4/3] group"
          >
            <img 
              src="https://jguni.in/images/CRM08261-fin.webp" 
              alt="Students collaborating" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-sm font-bold text-accent tracking-widest uppercase mb-3">About Us</h2>
            <h3 className="text-3xl lg:text-5xl font-display font-bold text-primary mb-6 leading-tight">
              A Legacy of Academic Excellence.
            </h3>
            
            <div className="space-y-6 text-lg text-secondary leading-relaxed">
              <p>
                JG University is a New Age Tech-Driven University offering programmes that evolve as per future industry demand, enabling students to seamlessly enter employment or self-employment.
              </p>
              <p>
                Sponsored by the ASIA Charitable Trust, which has been in the field of education since 1965, managing 17 colleges and 3 schools. We strike an equilibrium between state-of-the-art infrastructure and globally recognised education.
              </p>
            </div>
            
            <div className="mt-10 grid sm:grid-cols-2 gap-6">
              <div>
                <div className="w-10 h-10 bg-blue-50 text-accent rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
                </div>
                <h4 className="font-bold text-primary mb-2">Global Partnerships</h4>
                <p className="text-sm text-secondary">Collaborations with foreign universities for exchange programs.</p>
              </div>
              <div>
                <div className="w-10 h-10 bg-blue-50 text-accent rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <h4 className="font-bold text-primary mb-2">Tech-Driven</h4>
                <p className="text-sm text-secondary">Future-ready infrastructure and smart, modern facilities.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

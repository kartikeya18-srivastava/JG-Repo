export default function CTA() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <div className="bg-primary rounded-3xl overflow-hidden relative shadow-2xl">
          <div className="absolute inset-0 bg-grid-pattern opacity-10" />
          
          <div className="relative px-6 py-16 sm:p-20 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-6">
              Begin Your Journey to Excellence.
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
              Join a community of future leaders, innovators, and change-makers. 
              Applications for the 2025-26 academic year are now open.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#contact" className="w-full sm:w-auto px-8 py-4 bg-accent text-white rounded-full font-bold hover:bg-accent-light transition-colors text-center shadow-lg shadow-accent/30">
                Apply Now
              </a>
              <a href="tel:+917940500500" className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/20 text-white rounded-full font-bold hover:bg-white/5 transition-colors text-center">
                Talk to Admissions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

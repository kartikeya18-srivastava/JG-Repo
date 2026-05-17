"use client";

const testimonials = [
  {
    name: "Jigardan Gadhvi",
    role: "Celebrity Singer & Alumnus",
    text: "As a celebrity singer today, I owe a great deal to JG for shaping me into the person I am. The faculty members were more than just teachers; they served as mentors who supported and guided us at every step.",
  },
  {
    name: "Yatendra Sinh Joddha",
    role: "Technical Head, TCS",
    text: "My education at JG played a pivotal role in shaping my career. The BCA program provided me with a strong foundation in IT, and the focus on giving the best training gave me the opportunity to apply knowledge in real-world scenarios.",
  },
  {
    name: "Krishna Soni",
    role: "Management Professional",
    text: "The Management programme offers cutting-edge course design, top-notch industry teachers, and hands-on experience projects. I was encouraged to uncover skills I had no idea I possessed.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-accent tracking-widest uppercase mb-3">Testimonials</h2>
          <h3 className="text-3xl lg:text-5xl font-display font-bold text-primary mb-6">
            Voices of Our Alumni.
          </h3>
          <p className="text-lg text-secondary">
            Hear from our distinguished graduates about how JG University shaped their careers and lives.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-border flex flex-col h-full relative group hover:shadow-md transition-shadow">
              <svg className="absolute top-8 right-8 w-8 h-8 text-surface-alt group-hover:text-accent/10 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151C7.563 6.068 6 8.789 6 11h4v10H0z" />
              </svg>
              <div className="flex-1">
                <p className="text-secondary leading-relaxed mb-8 relative z-10">
                  "{t.text}"
                </p>
              </div>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-primary">{t.name}</h4>
                  <p className="text-sm text-secondary">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

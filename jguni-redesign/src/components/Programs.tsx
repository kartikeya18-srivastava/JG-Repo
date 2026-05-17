"use client";
import { useState } from "react";

const categories = ["All", "Undergraduate", "Postgraduate", "Doctoral", "Specializations"];

const programs = [
  { name: "BBA", duration: "3 Years", category: "Undergraduate", school: "School of Management" },
  { name: "iMBA", duration: "5 Years", category: "Undergraduate", school: "School of Management" },
  { name: "B.Com", duration: "3 Years", category: "Undergraduate", school: "School of Commerce" },
  { name: "BCA", duration: "3 Years", category: "Undergraduate", school: "School of Computing" },
  { name: "B.Tech - Computer Science", duration: "4 Years", category: "Undergraduate", school: "School of Engineering" },
  { name: "B.Tech - AI & ML", duration: "4 Years", category: "Undergraduate", school: "School of Engineering" },
  { name: "LL.B.", duration: "3 Years", category: "Undergraduate", school: "School of Law" },
  { name: "MBA", duration: "2 Years", category: "Postgraduate", school: "School of Management" },
  { name: "MCA", duration: "2 Years", category: "Postgraduate", school: "School of Computing" },
  { name: "M.Sc. - Cyber Security", duration: "2 Years", category: "Postgraduate", school: "School of Science" },
  { name: "LL.M.", duration: "2 Years", category: "Postgraduate", school: "School of Law" },
  { name: "Ph.D. - Computing", duration: "3-5 Years", category: "Doctoral", school: "Research" },
  { name: "Data Science & AI-ML", duration: "Certification", category: "Specializations", school: "Tech" },
];

export default function Programs() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? programs : programs.filter((p) => p.category === active);

  return (
    <section id="programs" className="py-24 lg:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-accent tracking-widest uppercase mb-3">Academic Programs</h2>
          <h3 className="text-3xl lg:text-5xl font-display font-bold text-primary mb-6">
            Find Your Path to Excellence.
          </h3>
          <p className="text-lg text-secondary">
            60+ industry-aligned programs designed to prepare you for the challenges of tomorrow.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                active === cat
                  ? "bg-primary text-white"
                  : "bg-white text-secondary border border-border hover:border-primary/30"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((prog, i) => (
            <div
              key={prog.name + i}
              className="bg-white p-6 rounded-2xl border border-border hover:border-primary/20 hover:shadow-lg transition-all group"
            >
              <div className="text-xs font-semibold text-accent mb-3 uppercase tracking-wider">
                {prog.school}
              </div>
              <h4 className="text-xl font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                {prog.name}
              </h4>
              <p className="text-secondary text-sm flex items-center justify-between mt-4 pt-4 border-t border-border">
                <span>{prog.duration}</span>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity text-accent font-medium">Learn More →</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

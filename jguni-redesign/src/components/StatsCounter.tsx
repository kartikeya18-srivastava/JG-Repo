"use client";
import { useEffect, useState, useRef } from "react";
import { useInView, motion } from "framer-motion";

function AnimatedNumber({ value }: { value: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const end = value;
    const duration = 1500; // 1.5 seconds
    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * (end - start) + start));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value]);

  return <span ref={ref}>{count}</span>;
}

const stats = [
  { value: 50, label: "Programs Offered", suffix: "+" },
  { value: 100, label: "Placement Assistance", suffix: "%" },
  { value: 17, label: "Institutions Managed", suffix: "+" },
  { value: 200, label: "Industry Partners", suffix: "+" },
];

export default function StatsCounter() {
  return (
    <section className="py-20 bg-primary text-white overflow-hidden relative">
      {/* Background grids/elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 text-center">
          {stats.map((s, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex flex-col items-center justify-center p-4 border border-white/5 bg-white/5 rounded-2xl backdrop-blur-sm"
            >
              <div className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-accent-light mb-2 flex items-center">
                <AnimatedNumber value={s.value} />
                <span>{s.suffix}</span>
              </div>
              <p className="text-sm sm:text-base text-slate-300 font-semibold max-w-[150px] leading-snug">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

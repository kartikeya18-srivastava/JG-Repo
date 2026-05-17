"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const facilities = [
  { name: "IIoT Lab", desc: "Industrial Internet of Things laboratory with cutting-edge equipment for practical learning." },
  { name: "R&D + Incubation", desc: "Research and development center with dedicated startup incubation support for students." },
  { name: "Tech-enabled Library", desc: "Smart library with vast digital resources and comfortable, round-the-clock reading spaces." },
  { name: "Wi-Fi Enabled Campus", desc: "Full campus connectivity with high-speed internet access for uninterrupted learning." },
];

export default function Campus() {
  return (
    <section id="campus" className="py-24 lg:py-32 bg-primary overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-sm font-bold text-accent tracking-widest uppercase mb-3">Campus Life</h2>
            <h3 className="text-3xl lg:text-5xl font-display font-bold text-white mb-6 leading-tight">
              World-Class Infrastructure.
            </h3>
            <p className="text-lg text-slate-300 leading-relaxed mb-10">
              State-of-the-art facilities designed to provide students with 24×7 accessibility and an immersive, engaging learning environment.
            </p>
            
            <div className="space-y-8">
              {facilities.map((f, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="flex gap-4"
                >
                  <div className="w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center shrink-0 font-bold border border-white/20">
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1">{f.name}</h4>
                    <p className="text-slate-400">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, x: 30 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative rounded-2xl overflow-hidden aspect-[3/4] lg:aspect-auto lg:h-[600px] border border-white/10 shadow-2xl group"
          >
            <Image 
              src="https://jguni.in/images/campus/3.jpg" 
              alt="JG University Campus" 
              fill 
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

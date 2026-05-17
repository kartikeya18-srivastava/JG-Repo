import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import StatsCounter from "@/components/StatsCounter";
import Programs from "@/components/Programs";
import Features from "@/components/Features";
import Campus from "@/components/Campus";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { AnnouncementTicker, FloatingApplyWidget } from "@/components/Widgets";

export default function Home() {
  return (
    <main className="min-h-screen">
      <AnnouncementTicker />
      <Navbar />
      <Hero />
      <About />
      <StatsCounter />
      <Programs />
      <Features />
      <Campus />
      <Testimonials />
      <CTA />
      <Contact />
      <Footer />
      <FloatingApplyWidget />
    </main>
  );
}

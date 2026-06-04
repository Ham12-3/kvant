import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { Clients, HighPerformers } from "@/components/Clients";
import Expertise from "@/components/Expertise";
import Services from "@/components/Services";
import { Stats, Testimonials } from "@/components/StatsTestimonials";
import { Contact, Footer } from "@/components/ContactFooter";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Clients />
      <HighPerformers />
      <Expertise />
      <Services />
      <Stats />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}

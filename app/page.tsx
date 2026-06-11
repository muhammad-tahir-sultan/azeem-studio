import { About } from "@/components/About";
import { BookingForm } from "@/components/BookingForm";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Portfolio } from "@/components/Portfolio";
import { Reviews } from "@/components/Reviews";
import { Services } from "@/components/Services";
import { WhyChooseUs } from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-zinc-950 text-white">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Reviews />
      <BookingForm />
      <WhyChooseUs />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}

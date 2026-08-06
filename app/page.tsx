import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Services from "@/sections/Services";
import Portfolio from "@/sections/Portfolio";
import Achievements from "@/sections/Achievements";
import CPCRequest from "@/sections/CPCRequest";
import Testimonials from "@/sections/Testimonials";
import FAQ from "@/sections/FAQ";
import Contact from "@/sections/Contact";
import HomeWrapper from "@/components/HomeWrapper";

/**
 * Homepage — composes all sections in order.
 * Each section is a self-contained client component.
 */
export default function HomePage() {
  return (
    <HomeWrapper>
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Achievements />
      <CPCRequest />
      <Testimonials />
      <FAQ />
      <Contact />
    </HomeWrapper>
  );
}

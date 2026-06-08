import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
import Experience from "@/components/Experience/Experience";
import Expertise from "@/components/Expertise/Expertise";
import FloatingDock from "@/components/FloatingDock/FloatingDock";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Impact from "@/components/Impact/Impact";
import Projects from "@/components/Projects/Projects";
import ScrollProgress from "@/components/ScrollProgress/ScrollProgress";
import Skills from "@/components/Skills/Skills";
import TechMarquee from "@/components/TechMarquee/TechMarquee";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <Impact />
        <About />
        <Expertise />
        <Experience />
        <Skills />
        <TechMarquee />
        <Projects />
        <Contact />
      </main>
      <FloatingDock />
      <Footer />
    </>
  );
}

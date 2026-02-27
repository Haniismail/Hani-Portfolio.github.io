import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Career from "../components/Career";
import Testimonials from "../components/Testimonials";
import Education from "../components/Education";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Chatbot from "../components/Chatbot";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Career />
        <Testimonials />
        <Education />
        <Contact />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Index;

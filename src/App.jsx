// Imports for react to load
import Header from "./features/components/Header.jsx";
import Hero from "./features/main/Hero.jsx";
import Features from "./features/main/Features.jsx";
import CTA from "./features/main/CTA.jsx";
import About from "./features/main/About.jsx";
import Services from "./features/main/Services.jsx";
import Contact from "./features/main/Contact.jsx";
import Footer from "./features/components/Footer.jsx";
// Main App Component
export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <CTA />
        <About />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
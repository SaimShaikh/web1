import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Gallery from './components/Gallery';
import Social from './components/Social';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AuroraBackground from './components/AuroraBackground';

function App() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
      <AuroraBackground />
      <Header />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Blog />
        <Gallery />
        <Social />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
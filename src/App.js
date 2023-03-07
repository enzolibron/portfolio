import './App.css';
import Header from './components/Header';
import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';

import Contact from './components/Contact';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </>
  );
}

export default App;

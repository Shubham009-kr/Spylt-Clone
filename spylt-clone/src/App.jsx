import React from 'react'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import SubHero from './sections/SubHero';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText, ScrollTrigger } from 'gsap/all';
import Flavours from './sections/Flavours';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <SubHero />
      <Flavours />
    </main>
  )
}

export default App
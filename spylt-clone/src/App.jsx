import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import SubHero from './sections/SubHero';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText, ScrollTrigger, ScrollSmoother } from 'gsap/all';
import Flavours from './sections/Flavours';
import Nutrition from './sections/Nutrition';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(SplitText, ScrollTrigger, ScrollSmoother);

const App = () => {
  useGSAP(()=>{
    ScrollSmoother.create({
      smooth:3,
      effects:true,
    });
  });

  return (
    <main>
      <Navbar />
      <div id='smooth-wrapper'>
        <div id='smooth-content'>
          <Hero />
          <SubHero />
          <Flavours />
          <Nutrition />
        </div>
      </div>
      {/* <div className='w-full h-screen'></div> */}
    </main>
  )
}

export default App
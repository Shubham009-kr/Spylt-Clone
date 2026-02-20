import React, { useRef } from 'react'
import { cards } from '../constants'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Testimonial = () => {

    const vdRef = useRef([]);

    useGSAP(()=>{
        gsap.set(".testimonials-section", {
            marginTop:"-140vh",
        });

        const tl = gsap.timeline({
            scrollTrigger:{
                trigger:".testimonials-section",
                start:"top bottom",
                end:"200% top",
                scrub:true,
            },
        });

        tl.to(".testimonials-section .first-title",{
            xPercent:70,
        }).to(".testimonials-section .second-title",{
            xPercent:25,
        }, "<").to(".testimonials-section .third-title",{
            xPercent:-50,
        }, "<");

        const pinVideoTimeline = gsap.timeline({
            scrollTrigger:{
                trigger:".testimonials-section",
                start:"10% top",
                end:"200% top",
                scrub:1.5,
                pin:true,
            },
        });

        pinVideoTimeline.from(".vd-card", {
            yPercent:150,
            stagger:0.2,
            ease:"power1.inOut",
        })
    });

    const handlePlay = (idx) =>{
        const video  = vdRef.current[idx];
        video.play();
    };
    const handlePause = (idx) =>{
        const video  = vdRef.current[idx];
        video.pause();
    };
  return (
    <section className='testimonials-section'>
        <div className='absolute size-full flex flex-col items-center pt-[5vw] '>
            <h1 className='text-black first-title md:text-[12vw] '>What's</h1>
            <h1 className='text-light-brown second-title md:text-[12vw]'>everyone</h1>
            <h1 className='text-black third-title md:text-[12vw]'>talking</h1>
        </div>
        <div className='pin-box'>
            {
                cards.map((card, idx) =>(
                    <div key={idx} className={`vd-card ${card.translation} ${card.rotation}`}>
                        <video ref={(el) =>(vdRef.current[idx] = el)}
                        src={card.src} playsInline muted loop  className='size-full object-cover'
                        onMouseEnter={() => handlePlay(idx)}
                        onMouseLeave={() => handlePause(idx)}/>
                    </div>
                ))
            }
        </div>
    </section>
  )
}

export default Testimonial
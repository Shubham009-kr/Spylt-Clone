import React from 'react'

const Hero = () => {
  return (
    <section className='bg-main-bg '>
        <div className="hero-container">
            <img src="/images/static-img.png" alt="Hero Image" 
            className='absolute left-1/2 bottom-0 -translate-x-1/2 object-auto scale-100 md:scale-150'/>
            <div className='hero-content'>
                <div className='overflow-hidden'>
                    <h1 className="hero-title">Freaking Delicious</h1>
                </div>
                <div style={{
                    clipPath: "polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)",
                }} 
                className="hero-text-scroll">
                    <div className='hero-subtitle'>
                        <h1>Protein + Caffine</h1>
                    </div>
                </div>
                <h2>
                    Live lyf to the fullest with SPYLT, the ultimate blend of protein and caffeine. Shatter boredom and embrace your
                    inner kid with every deliciously smooth chug.
                </h2>
                <div className='hero-button'>
                    <p>Chug a SPYLT</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero
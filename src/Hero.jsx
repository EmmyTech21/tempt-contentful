import React from 'react'
import heroimg from './assets/hero.svg' 
const Hero = () => {
  return (
    <section className='hero'>
       <div className="hero-center">
        <div className="hero-title">
            <h1>Contentful CMS</h1>
            <p>
            I'm baby sustainable JOMO organic gastropub authentic cronut.
             Synth viral fam succulents fixie heirloom marxism tilde plaid. Schlitz glossier single-origin coffee skateboard kinfolk four loko four dollar toast etsy butcher cold-pressed. Fixie small batch marxism vexillologist iPhone 3 wolf moon chartreuse, 
            letterpress celiac pop-up vibecession quinoa green juice.
            </p>
        </div>
        <div className="img-container">
            <img src={heroimg} alt="woman with the browser" className='img' />
        </div>
       </div>
    </section>
  )
}

export default Hero
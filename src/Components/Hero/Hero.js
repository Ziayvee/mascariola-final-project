import React from 'react'
import './Hero.css'
import profile from '../assets/img/profile.png'

const Hero = () => {
  return (
    <section id="hero">
    <div className="introContent">
      <span className='hello'>Hello,</span>
      <span className='introText'>I'm <span className='introName'>Perly Mascariola</span> <br /> Welcome to my Porfolio</span>
      <p className='introPara'> Explore my portfolio to discover the projects that inspire my passion and drive for innovation.
       </p>
      

    </div>
    <img src= {profile} alt="" className="bg" />
    </section>
  )
}

export default Hero;
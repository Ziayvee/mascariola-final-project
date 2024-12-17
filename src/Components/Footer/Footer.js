

import React from 'react'
import './Footer.css'
/*import { FaFigmaSquare } from "react-icons/fa";
import {FaThunkable  } from "react-icons/fa";
import { FaSquareOracle } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";*/


const Footer = () => {
  return (
    <footer id="footer" className='footer'>
      <div className='footerContainer'>
        <h3>Perly Mascariola</h3>
        <h4>Computer Science Student</h4>

      </div>

      <div className='footerContainer'>
        <h3>Navigation links</h3>
        <p>Home</p>
        <p>About</p>
        <p>Portfolio</p>
        <p>Contact</p>
      </div>

      <div className='footerContainer'>
        <h3>Contact me</h3>
        <p>+63 9670796673</p>
        <p>mascariolaperly@gmail.com</p>
        <div className='footerIcons'>
          {/*<FaFigmaSquare />
          <FaThunkable />
          <FaSquareOracle />
          <FaSquareGithub />*/}
        </div>
        
      </div>

      <div className='footerContainer'>
        <h3>Services</h3>
    
          <p>Com-Sci</p>
    
        </div>

        
        

      <hr />


    </footer>
  )
}

export default Footer
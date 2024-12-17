import React from 'react'
import './Portfolio.css'
import graduation from '../assets/img/image11.jpg'
import mypet from '../assets/img/image8.jpg'
import mytwin from '../assets/img/image7.jpg'
import family from '../assets/img/image6.jpg'
import friends from '../assets/img/image15.jpg'
import karate from '../assets/img/image14.jpg'


const Project = () => {
  return (
    <section id="works">
      <h2 className='worksTittle'>My Gallery</h2>
  
     
      <div className="worksImgs">

      <div className='cardContainer'>
        <img src={graduation} alt="" className="workImg" />

        
      </div>

      <div className='cardContainer'>
        <img src={mypet} alt="" className="workImg" />

       
      </div>

      <div className='cardContainer'>
      <img src={mytwin} alt="" className="workImg" />

      
      </div>

      <div className='cardContainer'>
        <img src={family} alt="" className="workImg" />

       
      </div>

     <div className='cardContainer'>
       <img src={friends} alt="" className="workImg" />

      
       </div>

      <div className='cardContainer'>
        <img src={karate} alt="" className="workImg" />

       
      </div>
    </div>

    </section>
    
  )
}

export default Project
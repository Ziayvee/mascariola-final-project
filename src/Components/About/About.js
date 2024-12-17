import React from 'react'
import './About.css'
import position from '../assets/img/position.jpg'
import passion from '../assets/img/passion.jpg'
import skills from '../assets/img/skills.jpg'



const Skill = () => {
  return (
    <section id="skills">
      <span className="skillTittle">Get To Know Me More</span> <br/>
      <span className="skillDesc">Take a moment to explore and get to know me better-my position,passion, and journey.</span>
      <div className="skillBars">
          <div className="skillBar">
          <img src={position} alt="" className='skillBarImg' />
              <div className="skillBarText">
                <h2>Position</h2>
                <p>I am currently a fourth-year student pursuing a Bachelor of Science in Computer Science. I have a solid understanding of programming and am proficient in Microsoft Word, PowerPoint, and Excel.</p>
            </div>
          </div>

          <div className="skillBar">
           <img src={passion} alt="" className='skillBarImg' />
            <div className="skillBarText">
              <h2>Hobby</h2>
              <p>My hobby is playing mobile games, where I enjoy immersing myself in different challenges and strategies.</p>
            </div>
          </div>

          <div className="skillBar">
           <img src={skills} alt="" className='skillBarImg' />
            <div className="skillBarText">
              <h2>Skills</h2>
              <p>My skills lies in cooking and baking, where I enjoy exploring new recipes and perfecting my culinary skills.</p>
            </div>
          </div>


            </div>
    

    </section>
  )
}

export default Skill
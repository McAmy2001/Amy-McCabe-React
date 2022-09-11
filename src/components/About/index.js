import React from 'react';
import amyImage from '../../assets/amycastle.jpg';

function About() {
  return (
    <div id='about' className='about-container'>
      <img src={amyImage} id='amyImage' alt='Amy McCabe' />
      <p className='about' >I have been, and always will be, a dedicated learner in life. I'm currently in the final weeks of a six month Full Stack Developer bootcamp through the University of Minnesota and Trilogy Educational Services. The bootcamp is based in Javascript and the MERN stack, while also hitting on SQL, OOP, TDD, and many other topics and technologies. This has been a major change from my past working lives of massage therapy and patient assistance. I have loved the challenge of it and getting into the flow state while programming.</p>
    </div>
  )
}

export default About;
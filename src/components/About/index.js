import React from 'react';
import amyImage from '../../assets/amycastle.jpg';

function About() {
  return (
    <div className='about-container'>
      <img src={amyImage} id='amyImage' alt='Amy McCabe' />
      <p className='about' >All about me. So much to say. Need I say more? What more can I say? Say what?! What's going on? Going places. </p>
    </div>
  )
}

export default About;
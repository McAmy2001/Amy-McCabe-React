import React from 'react';
import amyImage from '../../assets/amycastle.jpg';

function About() {
  return (
    <div id='about' className='about-container'>
      <img src={amyImage} id='amyImage' alt='Amy McCabe' />
      <p className='about' >Full Stack Web Developer with a background in patient assistance, massage therapy, and anthropology. Certified from the University of Minnesota and Trilogy Education Services coding bootcamp. Making a career change to bring fresh challenges to a puzzle-loving brain. Bringing well developed person-focused communication, time management, and organizational skills from former work and educational experiences. Adding to these new technical skills, strong logic, and a true love for constant learning. Seeking to create, build, maintain, and improve web applications that help people solve problems and do good work in the world.</p>
    </div>
  )
}

export default About;
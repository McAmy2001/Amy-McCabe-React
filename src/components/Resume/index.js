import React from 'react';

function Resume() {
  return(
  <div id='resume'>
    <h1>Resume</h1>
    <a href={require('../../assets/resume.pdf')}download >Download my resume here.</a>
    <ul className='skill-list'>Skills:</ul>
    <li className='skill-list-item'>Javascript</li>
    <li className='skill-list-item'>MERN Stack</li>
    <li className='skill-list-item'>MySQL</li>
    <li className='skill-list-item'>HTML</li>
    <li className='skill-list-item'>CSS</li>
    <li className='skill-list-item'>GraphQL</li>
    <li className='skill-list-item'>TDD</li>
    <li className='skill-list-item'>OOP</li>
    <li className='skill-list-item'>Git</li>
    <li className='skill-list-item'>NPM</li>
  </div>
)}

export default Resume;
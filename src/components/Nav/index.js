import React, { useState } from 'react'
 
function Nav(props) {
  console.log(props);
  console.log(`${props.currentContent === 'About'}`);
  return(
    <nav className='nav'>
        <ul>
          <li id='About' className={`nav-list-item ${props.currentContent === 'About' && 'navActive'}`}>
          <button className={`${props.currentContent === 'About' && 'navActive'}`} onClick={() => props.setCurrentContent('About')}>About Me</button>
          </li>
          <li id='Portfolio' className='nav-list-item'>
            <button onClick={() => props.setCurrentContent('Portfolio')}>Portfolio</button>
          </li>
          <li id='Contact' className='nav-list-item'> 
          <button onClick={() => props.setCurrentContent('Contact')}>Contact Me</button>
          </li>
          <li id='Resume' className='nav-list-item'>
          <button onClick={() => props.setCurrentContent('Resume')}>Resume</button>
          </li>
        </ul>
      </nav>
  )
}



export default Nav;
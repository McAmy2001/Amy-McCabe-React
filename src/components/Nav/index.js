import React from 'react';
 
function Nav(props) {
  //console.log(props);
  return(
    <nav className='nav'>
        <ul>
          <li>
          <button onClick={() => props.setCurrentContent('About')}>About Me</button>
          </li>
          <li>
            <button onClick={() => props.setCurrentContent('Portfolio')}>Portfolio</button>
          </li>
          <li>
          <button onClick={() => props.setCurrentContent('Contact')}>Contact Me</button>
          </li>
          <li>
          <button onClick={() => props.setCurrentContent('Resume')}>Resume</button>
          </li>
        </ul>
      </nav>
  )
}



export default Nav;
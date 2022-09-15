import React from 'react';
import Nav from '../Nav';

function Header(props) {
  return(
    <header className='header'>
      <h1 className='h1'><span>Amy </span><span>McCabe</span></h1>
      <Nav
        contentCategories={props.contentCategories}
        setCurrentContent={props.setCurrentContent}
        currentContent={props.currentContent}
      ></Nav>
    </header>
  )
}

export default Header;
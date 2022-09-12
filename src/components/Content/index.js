import React from 'react';
import About from '../About';
import Portfolio from '../Portfolio';
import Contact from '../Contact';
import Resume from '../Resume';

function renderContent(currentContent) {
  if (currentContent === 'About') {
    return <About></About>
  } else if (currentContent === 'Portfolio') {
    return <Portfolio></Portfolio>
  } else if (currentContent === 'Contact') {
    return <Contact></Contact>
  } else {
    return <Resume></Resume>
  }
}

function Content(props) {
  console.log(props);
  
  return( 
    <div className='content'>
      {renderContent(props.currentContent)}
    </div>
  )
}

export default Content;
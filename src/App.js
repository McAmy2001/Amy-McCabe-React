import React, { useState} from 'react';
import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

function App() {
  const [contentCategories] = useState(['About', 'Portfolio', 'Contact', 'Resume']);
  const [currentContent, setCurrentContent] = useState('About');
  console.log(`${currentContent}`);
  //document.getElementById(`'${currentContent}'`).className = 'navActive';
  return (
    <div>
      <Header
      contentCategories={contentCategories}
      setCurrentContent={setCurrentContent}
      currentContent={currentContent}
      ></Header>
      <Content
      contentCategories={contentCategories}
      setCurrentContent={setCurrentContent}
      currentContent={currentContent}
      ></Content>
      <Footer></Footer>
    </div>
  );
}

export default App;

import React, { Component,Fragment } from 'react';
import logo from './logo.svg';
import './App.css';

import Content from './components/Content';
import Projects from './components/Projects';
import About from './components/About'
function App(){
  return (
    
    <Fragment>
      <Content />
 
      <Projects />

      <About />
    </Fragment>
  );
}

export default App;

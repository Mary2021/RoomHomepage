import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import NavBar from './layouts/NavBar';
import Hero from './layouts/Hero';
import Main from './layouts/Main';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <Main />
      <div>
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>. Coded by <a href="">Your Name Here</a>.
      </div>
      </div>
  );
}

export default App;

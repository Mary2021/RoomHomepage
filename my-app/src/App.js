import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import NavBar from './layouts/NavBar';
import Hero from './layouts/Hero';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
  
    About our furniture
  
    Our multifunctional collection blends design and function to suit your individual taste.
    Make each room unique, or pick a cohesive theme that best express your interests and what
    inspires you. Find the furniture pieces you need, from traditional to contemporary styles
    or anything in between. Product specialists are available to help you create your dream space.
      <div>
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>. Coded by <a href="">Your Name Here</a>.
      </div>
      </div>
  );
}

export default App;

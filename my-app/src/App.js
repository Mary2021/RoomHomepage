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
    </div>
  );
}

export default App;

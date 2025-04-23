import React from 'react';
import logo from './logo.svg';
import './App.css';
import Animecomponent from './Home'
import Cartcomponent from './Cart';
import FooterComponent from './Footer.js';
import HeaderComponent from './Header.js';
// import Image1 from "./Assets";


function App() {
  return (
    <div className="App">
      <HeaderComponent/>
      <Animecomponent/>
      <FooterComponent/>
      <Cartcomponent/>
    </div>
  );
}

export default App;

import Resume from "./Resume";
import "./home.css";
import background from '../../assets/jaguar.jpg'
// import React from 'react';

export default function Home() {
  return (
    <div style={{
      backgroundImage: `url(${background})`,
      backgroundRepeat: 'no-repeat',
      height: '1000px',
      backgroundPosition: '5px',
      backgroundSize: '3000px',
      margin: '0px',
      opacity: '0.6'
    }}>
    <header id="header">
      <div className="container header_container">
        <h4>Hello I'm</h4>
        <h1>Caitlin Ramsey</h1>
        <h4>Full-Stack Developer/Graphic Designer/Photographer</h4>
        <Resume />
      </div>
    </header>
    </div>
  );
}
import Resume from "./Resume";
import "./home.css";
import background from '../../assets/jaguar.jpg'
import navLogo from '../../assets/my-logo-black.png'

export default function Home() {
  return (
    <div style={{
      backgroundImage: `url(${background})`,
      backgroundRepeat: 'no-repeat',
      height: '80vh',
      backgroundPosition: '-400px',
      backgroundSize: '3000px',
      margin: '-10px',
    }}>
    <header id="header">
      <div className="container header_container">
        <h4>Hello I'm</h4>
        <h1>Caitlin Ramsey</h1>
        <h4>Full-Stack Developer/Graphic Designer/Photographer</h4>
        <Resume />

        <h3>Want to see my photography and design? Click the logo.</h3>
        <a href="https://doubledowncreations.com/" className="my_logo">
        <img src={navLogo} alt="image of my logo" />
      </a>
      
      </div>

    </header>
    </div>
  );
}
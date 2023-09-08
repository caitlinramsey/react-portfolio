import Resume from "./Resume";
import "./home.css";
import background from '../../assets/jaguarbw.png'
import Container from 'react-bootstrap/Container';

export default function Home() {
  return (
    <div style={{
      backgroundImage: `url(${background})`,
      backgroundRepeat: 'no-repeat',
      height: '80vh',
      width:'100vw',
      backgroundPosition: '-400px',
      backgroundSize: '3000px',
      marginLeft: '-16px',
    }}>
    <header id="header">
      <Container>
        <div className="header-container text-center">
          <h4>Hello I'm</h4>
          <h1>Caitlin Ramsey</h1>
          <h4 className='pt-3'>Full-Stack Developer/Graphic Designer/Photographer</h4>
          <Resume />
        
        </div>
      </Container>
    </header>
    </div>
  );
}
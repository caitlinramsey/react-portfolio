import Resume from "./Resume";
import "./home.css";
import Container from "react-bootstrap/Container";
import Skills from "../skills/Skills";

export default function Home() {
  return (
    <>
        <header id="header">
          <Container>
            <div className="header-container text-center">
              <h4>Hello I'm</h4>
              <h1>Caitlin Ramsey</h1>
              <h4 className="pt-3">
                Full-Stack Developer/Graphic Designer/Photographer
              </h4>
              <Resume />
            </div>
            <Skills />
          </Container>
        </header>
    </>
  );
}

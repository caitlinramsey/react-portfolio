import Resume from "./Resume";
import "./home.css";

export default function Home() {
  return (
    <header id="header">
      <div className="container header_container">
        <h4>Hello I'm</h4>
        <h1>Caitlin Ramsey</h1>
        <h4>Full-Stack Developer/Graphic Designer/Photographer</h4>
        <Resume />
      </div>
    </header>
  );
}
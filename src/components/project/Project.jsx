import React from "react";
import Container from "react-bootstrap/Container";
import "./project.css";
import project1 from "../../assets/zooquarium.jpg";
import project2 from "../../assets/bugbytes.jpg";
import project3 from "../../assets/borrowhood-mockup.jpg";
import project4 from "../../assets/note-taker.png";
import project5 from "../../assets/weather-forecast.png";
import project6 from "../../assets/workday-scheduler.png";
import { Slide } from "react-awesome-reveal";

const projectInfo = [
  {
    id: 1,
    image: project1,
    title: "Zooquarium",
    description:
      "Introducing Zooquarium, a comprehensive app that empowers users to explore the wonders of the animal kingdom! With Zooquarium, you can effortlessly discover AZA-accredited zoos and aquariums in your vicinity, as well as delve into an extensive library of captivating photos and fascinating facts about a wide array of animals. Unleash your curiosity and immerse yourself in the world of wildlife with Zooquarium today!",
    github: "https://github.com/caitlinramsey/zooquarium",
    demo: "https://caitlinramsey.github.io/zooquarium/",
  },
  {
    id: 2,
    image: project2,
    title: "BUGbytes",
    description:
      "Introducing BUGBytes: The ultimate hub for gamers to connect, collaborate, and conquer challenges together. With BUGBytes, you can create an account and dive into a world of shared insights and creative problem-solving. Tackle bugs in games as a community, enhancing the gaming experience for everyone involved. The live site link is now a video walkthrough due to the dynos getting too expensive.",
    github: "https://github.com/HarrisSte/BUGbytes",
    demo: "https://drive.google.com/file/d/1j85iFsPAVjscj3OAoofXpznVFT4epvQI/view",
  },
  {
    id: 3,
    image: project3,
    title: "Borrowhood",
    description:
      "Borrowhood is an application which allows people to borrow needed items from their neighbors. It also allows neighbors to lend and borrow tools, equipment, and household items with or from one another. It encourages community interaction and sharing of resources which, in turn, minimizes individual purchases and decreases landfill waste. It is easy and fast to sign up and start listing items available for lending or searching for what you need!",
    github: "https://github.com/caitlinramsey/borrowhood-cr",
    demo: "https://borrowhood-cr-f9cdabd8dd11.herokuapp.com/",
  },
  {
    id: 4,
    image: project4,
    title: "Note Taker",
    description:
      "This application is used for creating, saving, and deleting notes.",
    github: "https://github.com/caitlinramsey/note-taker",
    demo: "https://murmuring-eyrie-49522.herokuapp.com/",
  },
  {
    id: 5,
    image: project5,
    title: "WeatherPro",
    description:
      "Introducing WeatherPro, a cutting-edge Weather Dashboard app that provides comprehensive and accurate weather insights for any city in the United States. WeatherPro is your go-to solution for staying informed and prepared for any weather conditions. With WeatherPro, you can easily view the current weather conditions, including temperature, humidity, wind speed, and precipitation. The user-friendly interface makes it simple to navigate and quickly access the information you need.",
    github: "https://github.com/caitlinramsey/weather-forecast",
    demo: "https://caitlinramsey.github.io/weather-forecast/",
  },
  {
    id: 6,
    image: project6,
    title: "Workday Scheduler",
    description:
      "This application makes it easy to schedule tasks for your work day.",
    github: "https://github.com/caitlinramsey/work-day-scheduler",
    demo: "https://caitlinramsey.github.io/work-day-scheduler/",
  },
];

function Project() {
  return (
    <section id="project">
      <h1 className="portfolio pt-5 text-center">Portfolio</h1>
      <hr
        style={{
          background: "black",
          color: "black",
          borderColor: "black",
          height: "3px",
          opacity: "1",
        }}
      />

      <Slide direction="left" triggerOnce>
        <Container className="project-container pb-4 pt-5 text-white">
          {projectInfo.map(
            ({ id, image, title, description, github, demo }) => {
              return (
                <article key={id} className="project-item">
                  <h3 className="project-title text-center fs-1 mb-2">
                    {title}
                  </h3>
                  <div className="project-item-image">
                    <img src={image} alt={title} />
                  </div>
                  <h4 className="project-description fs-5 mt-3 mb-3">
                    {description}
                  </h4>
                  <div className="project-item-links">
                    <a href={github} className="btn github-btn" target="-blank">
                      GitHub
                    </a>
                    <a href={demo} className="btn live-btn" target="-blank">
                      Live Site
                    </a>
                  </div>
                </article>
              );
            }
          )}
        </Container>
      </Slide>
    </section>
  );
}

export default Project;
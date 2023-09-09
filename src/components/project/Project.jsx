import React from 'react';
import Container from 'react-bootstrap/Container';
import './project.css';
import project1 from '../../assets/zooquarium.jpg';
import project2 from '../../assets/bugbytes.jpg';
import project3 from '../../assets/weather-forecast.png';
import project4 from '../../assets/note-taker.png';
import project5 from '../../assets/borrowhood-mockup.png';
import project6 from '../../assets/workday-scheduler.png';
import background from '../../assets/waterfall.jpg';

const projectInfo = [
    {
        id: 1,
        image: project1,
        title: 'Zooquarium',
        description: 'This application allows the user to look up AZA certified zoos and aquariums near them as well as look up photos and facts on individual animals.',
        github: 'https://github.com/caitlinramsey/zooquarium',
        demo: 'https://caitlinramsey.github.io/zooquarium/',
    },
    {
        id: 2,
        image: project2,
        title: 'BUGbytes',
        description: 'Introducing BUGBytes: The ultimate hub for gamers to connect, collaborate, and conquer challenges together. With BUGBytes, you can create an account and dive into a world of shared insights and creative problem-solving. Tackle bugs in games as a community, enhancing the gaming experience for everyone involved.',
        github: 'https://github.com/HarrisSte/BUGbytes',
        demo: 'https://bugbytes-eea33095845f.herokuapp.com/',
    },
    {
        id: 3,
        image: project3,
        title: 'Weather Dashboard',
        description: 'This application allows you to view the current weather and 5 day forecast in any US city.',
        github: 'https://github.com/caitlinramsey/weather-forecast',
        demo: 'https://caitlinramsey.github.io/weather-forecast/',
    },
    {
        id: 4,
        image: project4,
        title: 'Note Taker',
        description: 'This application is used for creating, saving, and deleting notes.',
        github: 'https://github.com/caitlinramsey/note-taker',
        demo: 'https://murmuring-eyrie-49522.herokuapp.com/',
    },
    {
        id: 5,
        image: project5,
        title: 'Borrowhood',
        description: 'Borrowhood is an application which allows people to borrow needed items from their neighbors. It also allows neighbors to lend and borrow tools, equipment, and household items with or from one another. It encourages community interaction and sharing of resources which, in turn, minimizes individual purchases and decreases landfill waste. It is easy and fast to sign up and start listing items available for lending or searching for what you need!',
        github: 'https://github.com/skywalkah/borrowhood',
        demo: 'https://polar-beach-65067-18b2f94f915d.herokuapp.com//',
    },
    {
        id: 6,
        image: project6,
        title: 'Workday Scheduler',
        description: 'This application makes it easy to schedule tasks for your work day.',
        github: 'https://github.com/caitlinramsey/work-day-scheduler',
        demo: 'https://caitlinramsey.github.io/work-day-scheduler/',
    },
];

function Project () {
    return (
        <div style={{
            backgroundImage: `url(${background})`,
            backgroundRepeat: 'no-repeat',
            width:'100vw',
            backgroundPosition: '-400px',
            backgroundSize: '3000px',
            marginLeft: '-16px',
          }}>
            <section id='project'>
                <h1 className='portfolio pt-5 text-center'>Portfolio</h1>

                <Container className='project-container pb-4 pt-5'>
                    {projectInfo.map(({ id, image, title, description, github, demo }) => {
                        return (
                            <article key={id} className='project-item'>
                                <h3 className='project-title text-center fs-2 mb-2'>{title}</h3>
                                <div className='project-item-image'>
                                    <img src={image} alt={title} />
                                </div>
                                <h4 className='project-description mt-3 mb-3'>{description}</h4>
                                <div className='project-item-links'>
                                    <a
                                        href={github}
                                        className='btn github-btn'
                                        target='-blank'
                                    >
                                        GitHub
                                    </a>
                                    <a
                                        href={demo}
                                        className='btn live-btn'
                                        target='-blank'
                                    >
                                        Live Site
                                    </a>
                                </div>
                            </article>
                        );
                    })}
                </Container>
            </section>
        </div>
    );
}

export default Project;
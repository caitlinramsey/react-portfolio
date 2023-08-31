import React from 'react';
import './project.css';
import project1 from '../../assets/zooquarium.jpg';
import project2 from '../../assets/bugbytes.jpg';
import project3 from '../../assets/weather-forecast.png';
import project4 from '../../assets/note-taker.png';
import project5 from '../../assets/borrowhood-mockup.png';
import project6 from '../../assets/workday-scheduler.png';

const projectInfo = [
    {
        id: 1,
        image: project1,
        title: 'Zooquarium',
        github: 'https://github.com/caitlinramsey/zooquarium',
        demo: 'https://caitlinramsey.github.io/zooquarium/',
    },
    {
        id: 2,
        image: project2,
        title: 'BUGbytes',
        github: 'https://github.com/HarrisSte/BUGbytes',
        demo: 'https://bugbytes-eea33095845f.herokuapp.com/',
    },
    {
        id: 3,
        image: project3,
        title: 'Weather Dashboard',
        github: 'https://github.com/caitlinramsey/weather-forecast',
        demo: 'https://caitlinramsey.github.io/weather-forecast/',
    },
    {
        id: 4,
        image: project4,
        title: 'Note Taker',
        github: 'https://github.com/caitlinramsey/note-taker',
        demo: 'https://murmuring-eyrie-49522.herokuapp.com/',
    },
    {
        id: 5,
        image: project5,
        title: 'Borrowhood',
        github: 'https://github.com/skywalkah/borrowhood',
        demo: 'https://polar-beach-65067-18b2f94f915d.herokuapp.com//',
    },
    {
        id: 6,
        image: project6,
        title: 'Workday Scheduler',
        github: 'https://github.com/caitlinramsey/work-day-scheduler',
        demo: 'https://caitlinramsey.github.io/work-day-scheduler/',
    },
];

function Project () {
    return (
        <section id='project'>
            <h1>Portfolio</h1>

            <div className='container project_container'>
                {projectInfo.map(({ id, image, title, github, demo }) => {
                    return (
                        <article key={id} className='project_item'>
                            <div className='project_item-image'>
                                <img src={image} alt={title} />
                            </div>
                            <h3>{title}</h3>
                            <div className='project_item-desc'>
                                <a
                                    href={github}
                                    className='btn github_btn'
                                    target='_blank'
                                >
                                    GitHub
                                </a>
                                <a
                                    href={demo}
                                    className='btn live_btn'
                                    target='_blank'
                                >
                                    Live Site
                                </a>
                            </div>
                        </article>
                    );
                })};
            </div>
        </section>
    );
}

export default Project;
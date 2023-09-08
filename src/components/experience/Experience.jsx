import React from 'react';
import './experience.css';
import { BsCheck2Circle } from "react-icons/bs";
import Container from 'react-bootstrap/Container';
import background from '../../assets/benny.jpg'

function Experience () {
    return (
        <div className='experience-background' style={{
            backgroundImage: `url(${background})`,
            backgroundRepeat: 'no-repeat',
            width:'100vw',
            height: '130vh',
            backgroundSize: '2700px',
            backgroundPositionX: '-100px',
            backgroundPositionY: '-50px',
            marginLeft: '-16px',
          }}>
            <section id='experience' className='experience pt-5'>
                <h3 className='experience text-center'>Experience</h3>
                <h4 className='technical-skills mb-5 text-center'>Technical Skills</h4>
                <Container className='experience-container pb-2 ps-2 pe-2'>
                    <div className='experience-frontend'>
                        <h3 className='front-end text-center mb-4'>Front-end Development</h3>
                        <div className='experience-content'>
                            <article className='experience-details'>
                                <BsCheck2Circle className='experience-details-icon' />
                                <div>
                                    <h4>HTML5</h4>
                                    <medium className='text-light'>Experienced</medium>
                                </div>
                            </article>
                            <article className='experience-details'>
                                <BsCheck2Circle className='experience-details-icon' />
                                <div>
                                    <h4>CSS</h4>
                                    <medium className='text-light'>Experienced</medium>
                                </div>
                            </article>
                            <article className='experience-details'>
                                <BsCheck2Circle className='experience-details-icon' />
                                <div>
                                    <h4>JavaScript</h4>
                                    <medium className='text-light'>Experienced</medium>
                                </div>
                            </article>
                            <article className='experience-details'>
                                <BsCheck2Circle className='experience-details-icon' />
                                <div>
                                    <h4>jQuery</h4>
                                    <medium className='text-light'>Intermediate</medium>
                                </div>
                            </article>
                            <article className='experience-details'>
                                <BsCheck2Circle className='experience-details-icon' />
                                <div>
                                    <h4>Bootstrap</h4>
                                    <medium className='text-light'>Experienced</medium>
                                </div>
                            </article>
                            <article className='experience-details'>
                                <BsCheck2Circle className='experience-details-icon' />
                                <div>
                                    <h4>Bulma</h4>
                                    <medium className='text-light'>Experienced</medium>
                                </div>
                            </article>
                            <article className='experience-details'>
                                <BsCheck2Circle className='experience-details-icon' />
                                <div>
                                    <h4>Tailwind/Daisy CSS</h4>
                                    <medium className='text-light'>Experienced</medium>
                                </div>
                            </article>
                            <article className='experience-details'>
                                <BsCheck2Circle className='experience-details-icon' />
                                <div>
                                    <h4>Handlebars</h4>
                                    <medium className='text-light'>Experienced</medium>
                                </div>
                            </article>
                            <article className='experience-details'>
                                <BsCheck2Circle className='experience-details-icon' />
                                <div>
                                    <h4>React</h4>
                                    <medium className='text-light'>Intermediate</medium>
                                </div>
                            </article>
                        </div>
                    </div>
                {/* Back-end card */}
                    <div className='experience-backend text-black'>
                        <h3 className='back-end text-center mb-4'>Back-end Development</h3>
                        <div className='experience-content'>
                            <article className='experience-details'>
                                <BsCheck2Circle className='experience-details-icon' />
                                <div>
                                    <h4>Node.js</h4>
                                    <medium className='text-light'>Intermediate</medium>
                                </div>
                            </article>
                            <article className='experience-details'>
                                <BsCheck2Circle className='experience-details-icon' />
                                <div>
                                    <h4>Express.js</h4>
                                    <medium className='text-light'>Intermediate</medium>
                                </div>
                            </article>
                            <article className='experience-details'>
                                <BsCheck2Circle className='experience-details-icon' />
                                <div>
                                    <h4>MySQL</h4>
                                    <medium className='text-light'>Experienced</medium>
                                </div>
                            </article>
                            <article className='experience-details'>
                                <BsCheck2Circle className='experience-details-icon' />
                                <div>
                                    <h4>NoSQL</h4>
                                    <medium className='text-light'>Experienced</medium>
                                </div>
                            </article>
                            <article className='experience-details'>
                                <BsCheck2Circle className='experience-details-icon' />
                                <div>
                                    <h4>MongoDB</h4>
                                    <medium className='text-light'>Experienced</medium>
                                </div>
                            </article>
                            <article className='experience-details'>
                                <BsCheck2Circle className='experience-details-icon' />
                                <div>
                                    <h4>Progressive Web Applications</h4>
                                    <medium className='text-light'>Intermediate</medium>
                                </div>
                            </article>
                            <article className='experience-details'>
                                <BsCheck2Circle className='experience-details-icon' />
                                <div>
                                    <h4>Object Oriented Programming</h4>
                                    <medium className='text-light'>Intermediate</medium>
                                </div>
                            </article>
                            <article className='experience-details'>
                                <BsCheck2Circle className='experience-details-icon' />
                                <div>
                                    <h4>Model-View Controller Paraidgm</h4>
                                    <medium className='text-light'>Intermediate</medium>
                                </div>
                            </article>
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    );
}

export default Experience;
import React from 'react';
import './experience.css';
// import { BsCheck2Circle } from "react-icons/bs";

function Experience () {
    return (
        <section id='experience'>
            <h3>Experience</h3>
            <h4>Technical Skills</h4>
            {/* Front-end card */}
            <div className='container experience_container'>
                <div className='experience_frontend'>
                    <h3>Front-end Development</h3>
                    <div className='experience_content'>
                        <article className='experience_details'>
                            {/* <BsCheck2Circle className='experience_details-icon' /> */}
                            <div>
                                <h4>HTML5</h4>
                                <medium className='text-light'>Experienced</medium>
                            </div>
                        </article>
                        <article className='experience_details'>
                            {/* <BsCheck2Circle className='experience_details-icon' /> */}
                            <div>
                                <h4>CSS</h4>
                                <medium className='text-light'>Experienced</medium>
                            </div>
                        </article>
                        <article className='experience_details'>
                            {/* <BsCheck2Circle className='experience_details-icon' /> */}
                            <div>
                                <h4>JavaScript</h4>
                                <medium className='text-light'>Experienced</medium>
                            </div>
                        </article>
                        <article className='experience_details'>
                            {/* <BsCheck2Circle className='experience_details-icon' /> */}
                            <div>
                                <h4>jQuery</h4>
                                <medium className='text-light'>Intermediate</medium>
                            </div>
                        </article>
                        <article className='experience_details'>
                            {/* <BsCheck2Circle className='experience_details-icon' /> */}
                            <div>
                                <h4>Bootstrap</h4>
                                <medium className='text-light'>Experienced</medium>
                            </div>
                        </article>
                        <article className='experience_details'>
                            {/* <BsCheck2Circle className='experience_details-icon' /> */}
                            <div>
                                <h4>Bulma</h4>
                                <medium className='text-light'>Experienced</medium>
                            </div>
                        </article>
                        <article className='experience_details'>
                            {/* <BsCheck2Circle className='experience_details-icon' /> */}
                            <div>
                                <h4>Tailwind/Daisy CSS</h4>
                                <medium className='text-light'>Experienced</medium>
                            </div>
                        </article>
                        <article className='experience_details'>
                            {/* <BsCheck2Circle className='experience_details-icon' /> */}
                            <div>
                                <h4>Handlebars</h4>
                                <medium className='text-light'>Experienced</medium>
                            </div>
                        </article>
                        <article className='experience_details'>
                            {/* <BsCheck2Circle className='experience_details-icon' /> */}
                            <div>
                                <h4>React</h4>
                                <medium className='text-light'>Intermediate</medium>
                            </div>
                        </article>
                    </div>
                </div>
            {/* Back-end card */}
                <div className='experience_backend'>
                    <h3>Back-end Development</h3>
                    <div className='experience_content'>
                        <article className='experience_details'>
                            {/* <BsCheck2Circle className='experience_details-icon' /> */}
                            <div>
                                <h4>Node.js</h4>
                                <medium className='text-light'>Intermediate</medium>
                            </div>
                        </article>
                        <article className='experience_details'>
                            {/* <BsCheck2Circle className='experience_details-icon' /> */}
                            <div>
                                <h4>Express.js</h4>
                                <medium className='text-light'>Intermediate</medium>
                            </div>
                        </article>
                        <article className='experience_details'>
                            {/* <BsCheck2Circle className='experience_details-icon' /> */}
                            <div>
                                <h4>MySQL</h4>
                                <medium className='text-light'>Experienced</medium>
                            </div>
                        </article>
                        <article className='experience_details'>
                            {/* <BsCheck2Circle className='experience_details-icon' /> */}
                            <div>
                                <h4>MongoDB</h4>
                                <medium className='text-light'>Experienced</medium>
                            </div>
                        </article>
                        <article className='experience_details'>
                            {/* <BsCheck2Circle className='experience_details-icon' /> */}
                            <div>
                                <h4>Progressive Web Applications</h4>
                                <medium className='text-light'>Intermediate</medium>
                            </div>
                        </article>
                        <article className='experience_details'>
                            {/* <BsCheck2Circle className='experience_details-icon' /> */}
                            <div>
                                <h4>Object Oriented Programming</h4>
                                <medium className='text-light'>Intermediate</medium>
                            </div>
                        </article>
                        <article className='experience_details'>
                            {/* <BsCheck2Circle className='experience_details-icon' /> */}
                            <div>
                                <h4>Model-View Controller Paraidgm</h4>
                                <medium className='text-light'>Intermediate</medium>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Experience;
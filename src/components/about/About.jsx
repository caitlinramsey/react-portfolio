import React from 'react';
import './about.css';
import Container from 'react-bootstrap/Container';
import { Slide } from 'react-awesome-reveal';

function About() {
    return (
        <Slide direction='right' triggerOnce>
        <section id='about-me' className='about-me pt-5'>
            <h1 className='text-center'>About Me</h1>

            <Container className='about-me-container'>
                <div className='about-me'>
                    <div className='about-me-image'></div>
                </div>

                <div className='about-me-content text-center'>
                    <p>
                        I graduated from Cedar Crest College in May 2019 with a Bachelor of Science in Environmental Conservation and a Bachelor of Arts in New Media. In August of 2023, I graduated from a 6-month course through the University of North Carolina at Chapel Hill with a certificate in Full-Stack Development. I am one class away from completing a graduate certificate in Fisheries Management through Oregon State University.
                        <br/><br/>
                        I am an organized, hard-working, and dependable individual. I am very passionate about being creative and problem-solving. I enjoy the challenge of learning new programming languages and techniques.
                    </p>
                </div>
            </Container>
        </section>
        </Slide>
    );
}

export default About;
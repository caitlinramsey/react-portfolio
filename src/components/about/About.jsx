import React from 'react';
import './about.css';
import background from '../../assets/boysbw.png'
import Container from 'react-bootstrap/Container';

function About() {
    return (
        <div style={{
            backgroundImage: `url(${background})`,
            backgroundRepeat: 'no-repeat',
            width:'100vw',
            backgroundSize: '3000px',
            marginLeft: '-16px',
          }}>
        <section id='about-me' className='about-me pt-5'>
            <h1 className='text-center'>About Me</h1>

            <Container className='about-me-container'>
                <div className='about-me'>
                    <div className='about-me-image'></div>
                </div>

                <div className='about-me-content text-center'>
                    <p>
                        I graduated from Cedar Crest College in May 2019 with a Bachelor of Science in Environmental Conservation and a Bachelor of Arts in New Media. I also graduated from a 6 month course from the University of North Carolina at Chapel Hill with a certificate in Full-Stack Development. I am one class away from completing a graduate certificate in Fisheries Management from Oregon State University.
                        <br/><br/>
                        I am an organized, hard-working, dependable individual. I am very passionate about being creative and problem-solving. 
                    </p>

                    <a href='../Contact' className='btn about-btn fw-bold'>
                        Contact Me
                    </a>
                </div>
            </Container>
        </section>
        </div>
    );
}

export default About;
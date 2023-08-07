import React from 'react';
import './about.css';


function About() {
    return (
        <section id='about_me'>
            <h1>About Me</h1>

            <div className='container about_me_container'>
                <div className='about_me'>
                    <div className='about_me_image'></div>
                </div>

                <div className='about_me_content'>
                    <p>
                        I graduated from Cedar Crest College in May 2019 with a Bachelor of Science in Environmental Conservation and a Bachelor of Arts in New Media. I also graduated from a 6 month course from the University of North Carolina at Chapel Hill with a certificate in Full-Stack Development. I am one class away from completing a graduate certificate in Fisheries Management from Oregon State University.
                        <br/><br/>
                        I am an organized, hard-working, dependable individual. I am very passionate about being creative and problem-solving. 
                    </p>

                    <a href='../Contact' className='btn about_btn'>
                        Contact Me
                    </a>
                </div>
            </div>
        </section>
    );
}

export default About;
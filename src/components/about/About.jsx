import React from 'react';
import './about.css';
import aboutMe from '../../assets/me-and-boys.jpg';


function About() {
    return (
        <section id='about-me'>
            <h1>About Me</h1>

            <div className='container about_me_container'>
                <div className='about_me'>
                    <div className='about_me_image'>
                        <img src={aboutMe} alt='A photo of me and my 2 dogs' />
                    </div>
                </div>

                <div className='about_me_content'>
                    <p>
                        I graduated from Cedar Crest College in May 2019 with a Bachelor of Science in Environmental Conservation and a Bachelor of Arts in New Media. 
                        <br/><br/>
                        I am an organized, hard-working individual.
                    </p>

                    <a href='#contact' className='btn contact_btn'>
                        Contact Me
                    </a>
                </div>
            </div>
        </section>
    );
}

export default About;
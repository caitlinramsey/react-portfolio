import React from 'react';
import './services.css';
import { FaCheckDouble } from 'react-icons/fa6';
import Container from 'react-bootstrap/Container';
import background from '../../assets/mountain.jpg';

function Services () {
    return (
        <div style={{
            backgroundImage: `url(${background})`,
            backgroundRepeat: 'no-repeat',
            width:'100vw',
            backgroundPosition: '-300px',
            backgroundSize: '3000px',
            marginLeft: '-16px',
          }}>
            <section id='services' className='services pt-5'>
                <h1>Services</h1>

                <Container className='services-container'>
                    <article className='service'>
                        <div className='service-header p-4'>
                            <h2>Web Development</h2>
                        </div>

                        <ul className='service-name p-4 pt-5'>
                            <li><FaCheckDouble className='service-name-icon' />
                            <p>Front-end and back-end development with database functionality.</p>
                            </li>
                            <li><FaCheckDouble className='service-name-icon' />
                            <p>Third-party platform development (Squarespace, WordPress, Wix, Weebly).</p>
                            </li>
                            <li><FaCheckDouble className='service-name-icon' />
                            <p>Responsive and semantic website design with accessibility in mind.</p>
                            </li>
                            <li><FaCheckDouble className='service-name-icon' />
                            <p>UX/UI centered design.</p>
                            </li>
                        </ul>
                    </article>

                    <article className='service'>
                        <div className='service-header p-4'>
                            <h2>Graphic Design/Social Media Management</h2>
                        </div>

                        <ul className='service-name p-4 pt-5'>
                            <li><FaCheckDouble className='service-name-icon' />
                            <p>Content creation using Adobe Creative Suite and Canva.</p>
                            </li> 
                            <li><FaCheckDouble className='service-name-icon' />
                            <p>Photography and editing services available.</p>
                            </li> 
                            <li><FaCheckDouble className='service-name-icon' />
                            <p>Experience in managing and creating content for professional Facebook, Instagram, and Twitter accounts.</p>
                            </li>
                            <li><FaCheckDouble className='service-name-icon' />
                            <p>Advertising design services available.</p>
                            </li>
                            <li><FaCheckDouble className='service-name-icon' />
                            <p>Experience managing multiple social media accounts through AgoraPulse.</p>
                            </li> 
                        </ul>
                    </article>
                </Container>
            </section>
        </div>
    )
}

export default Services;
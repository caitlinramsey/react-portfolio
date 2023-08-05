import React from 'react';
import './services.css';
import { FaCheckDouble } from 'react-icons/fa6';

function Services () {
    return (
        <section id='services'>
            <h1>Services</h1>

            <div className='container services_container'>
                <article className='service'>
                    <div className='service_header'>
                        <h2>Web Development</h2>
                    </div>

                    <ul className='service_list'>
                        <li><FaCheckDouble className='service_list-icon' />
                        <p>Front-end and back-end development with database functionality.</p>
                        </li>
                        <li><FaCheckDouble className='service_list-icon' />
                        <p>Third-party platform development (Squarespace, WordPress, Wix, Weebly).</p>
                        </li>
                        <li><FaCheckDouble className='service_list-icon' />
                        <p>Responsive and semantic website design with accessibility in mind.</p>
                        </li>
                        <li><FaCheckDouble className='service_list-icon' />
                        <p>UX/UI centered design.</p>
                        </li>
                    </ul>
                </article>

                <article className='service'>
                    <div className='service_header'>
                        <h2>Graphic Design/Social Media Management</h2>
                    </div>

                    <ul className='service_name'>
                        <li><FaCheckDouble className='service_list-icon' />
                        <p>Content creation using Adobe Creative Suite and Canva.</p>
                        </li> 
                        <li><FaCheckDouble className='service_list-icon' />
                        <p>Photography and editing services available.</p>
                        </li> 
                        <li><FaCheckDouble className='service_list-icon' />
                        <p>Experience in managing and creating content for professional Facebook, Instagram, and Twitter accounts.</p>
                        </li>
                        <li><FaCheckDouble className='service_list-icon' />
                        <p>Advertising design services available.</p>
                        </li>
                        <li><FaCheckDouble className='service_list-icon' />
                        <p>Experience managing multiple social media accounts through AgoraPulse.</p>
                        </li> 
                    </ul>
                </article>
            </div>
        </section>
    )
}

export default Services;
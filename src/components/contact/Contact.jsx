import React from 'react';
import './contact.css';
import { HiOutlineMail } from 'react-icons/hi';
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

function Contact() {
    return (
        <section id='contact'>
            <h1>Contact Me</h1>

            <div className='container contact_container'>
                <div className='contact_options'>
                    <article className='contact_option'>
                        <HiOutlineMail className='contact_option-icon'/>
                        <h3>Email</h3>
                        <a href='caitlinramsey@outlook.com' target='blank' className=''>
                            Email Me
                        </a>
                    </article>
                    <article className='contact_option'>
                        <AiFillLinkedin className='contact_option-icon'/>
                        <h3>LinkedIn</h3>
                        <a href='https://www.linkedin.com/in/caitlin-ramsey/' target='blank' className=''>
                            Want to connect?
                        </a>
                    </article>
                    <article className='contact_option'>
                        <AiFillGithub className='contact_option-icon'/>
                        <h3>GitHub</h3>
                        <a href='https://github.com/caitlinramsey' target='blank' className=''>
                            Check out my projects
                        </a>
                    </article>
                </div>

                <form>
                    <input
                        type='text'
                        name='name'
                        placeholder='Please enter your first and last name'
                        required
                    />
                    <input
                        type='email'
                        name='email'
                        placeholder='Please enter your email address'
                        required
                    />
                    <textarea
                        type='message'
                        rows='8'
                        placeholder='Please enter your message here'
                        required
                    ></textarea>
                    <button type='submit' id='contact_btn' className='btn btn-primary'>
                        Submit
                    </button>
                </form>
            </div>
        </section>
    );
}

export default Contact;
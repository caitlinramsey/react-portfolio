import React, { useState } from 'react';
import './contact.css';
import { HiOutlineMail } from 'react-icons/hi';
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import background from '../../assets/red-panda.jpg'
import { validateEmail } from '../../utils/helpers';

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'name') {
            setName(inputValue);
        } else if (inputType === 'email') {
            setEmail(inputValue);
        } else {
            setMessage(inputValue);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateEmail(email) || !name) {
            setErrorMessage('Invalid email address');
            return;
        }
        alert(`Thank you for your message, ${name}`);

        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div style={{
            backgroundImage: `url(${background})`,
            backgroundRepeat: 'no-repeat',
            height: '100vh',
            backgroundPosition: '-450px',
            backgroundSize: '3000px',
            margin: '-10px',
          }}>
        <section id='contact'>
            <h1>Contact Me</h1>

            <div className='container contact_container'>
                <div className='contact_options'>
                    <article className='contact_option'>
                        <HiOutlineMail className='contact_option-icon'/>
                        <h3>Email</h3>
                        <a href='mailto:caitlinramsey@outlook.com' target='blank' className=''>
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

                <form id='contact_form' onSubmit={handleSubmit}>
                    <input className='input'
                        type='text'
                        name='name'
                        defaultValue={name}
                        onBlur={handleChange}
                        placeholder='Please enter your first and last name'
                        required
                    />
                    <input
                        type='email'
                        name='email'
                        defaultValue={email}
                        onBlur={handleChange}
                        placeholder='Please enter your email address'
                        required
                    />
                    <textarea
                        type='message'
                        rows='8'
                        defaultValue={message}
                        onBlur={handleChange}
                        placeholder='Please enter your message here'
                        required
                    ></textarea>
                    {errorMessage && (
                        <div>
                            <p className='error_message'>{errorMessage}</p>
                        </div>
                    )}
                    <button type='submit' id='submit_btn' className='btn'>
                        Submit
                    </button>
                </form>
            </div>
        </section>
        </div>
    );
}

export default Contact;
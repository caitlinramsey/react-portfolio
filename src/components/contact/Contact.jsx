import React, { useState } from "react";
import emailjs from "emailjs-com";
import { HiOutlineMail } from 'react-icons/hi';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import background from '../../assets/red-panda.jpg'
import './contact.css';

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailSent, setEmailSent] = useState(false);

  const submit = () => {
    if (name && email && message) {
      const serviceId = "service_57xz7l2";
      const templateId = "template_4fk5mag";
      const userId = "tu_0hbMx3lSgm8Ulh";
      const templateParams = {
        name,
        email,
        message,
      };

      emailjs
        .send(serviceId, templateId, templateParams, userId)
        .then((response) => console.log(response))
        .then((error) => console.log(error));

      setName("");
      setEmail("");
      setMessage("");
      setEmailSent(true);
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        height: "100vh",
        backgroundPosition: "-450px",
        backgroundSize: "3000px",
        margin: "-10px",
      }}
    >
      <section id="contact">
        <h1>Contact Me</h1>

        <div className="container contact_container">
          <div className="contact_options">
            <article className="contact_option">
              <HiOutlineMail className="contact_option-icon" />
              <h3>Email</h3>
              <a
                href="mailto:caitlinramsey@outlook.com"
                target="blank"
                className=""
              >
                Email Me
              </a>
            </article>
            <article className="contact_option">
              <AiFillLinkedin className="contact_option-icon" />
              <h3>LinkedIn</h3>
              <a
                href="https://www.linkedin.com/in/caitlin-ramsey/"
                target="blank"
                className=""
              >
                Want to connect?
              </a>
            </article>
            <article className="contact_option">
              <AiFillGithub className="contact_option-icon" />
              <h3>GitHub</h3>
              <a
                href="https://github.com/caitlinramsey"
                target="blank"
                className=""
              >
                Check out my projects
              </a>
            </article>
          </div>

          <div className="contactForm">
            <input
              type="text"
              placeholder="Please enter your first and last name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Please enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              placeholder="Please enter your message here"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <button className='contact-submit' onClick={submit}>Submit</button>
            <span>
            {emailSent ? " Thank you for your message, we'll be in touch!" : ''}
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};



export default Contact;
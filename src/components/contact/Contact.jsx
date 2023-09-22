import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import emailjs from "emailjs-com";
import { HiOutlineMail } from "react-icons/hi";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import navLogo from "../../assets/logo-white-thick.png";
import "./contact.css";
import { Slide } from "react-awesome-reveal";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailSent, setEmailSent] = useState(false);

  const submit = () => {
    if (name && email && message) {
      const serviceId = "service-57xz7l2";
      const templateId = "template-4fk5mag";
      const userId = "tu-0hbMx3lSgm8Ulh";
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
    <Slide direction="right" triggerOnce>
      <section id="contact">
        <h1 className="contact-me pt-5 text-center">Contact Me</h1>

        <Container className="contact-container">
          <div className="contact-form">
            <input
              className="name mb-1"
              type="text"
              placeholder="First & last name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className="email mb-1"
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              placeholder="Please enter your message here"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <button className="contact-submit p-3" onClick={submit}>
              Submit
            </button>
            <span className="email-sent fs-5 fw-bold">
              {emailSent
                ? "Thank you for your message, we'll be in touch!"
                : ""}
            </span>
          </div>

          <div className="contact-options">
            <article className="contact-option">
              <HiOutlineMail className="contact-option-icon" />
              <h3>Email</h3>
              <a
                href="mailto:caitlinramsey@outlook.com"
                target="blank"
                className=""
              >
                Email Me
              </a>
            </article>
            <article className="contact-option">
              <AiFillLinkedin className="contact-option-icon" />
              <h3>LinkedIn</h3>
              <a
                href="https://www.linkedin.com/in/caitlin-ramsey/"
                target="blank"
                className=""
              >
                Want to connect?
              </a>
            </article>
            <article className="contact-option">
              <AiFillGithub className="contact-option-icon" />
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

          <div className="photography text-center">
            <h4 className="footer-photography text-white pb-2">
              Want to see my photography and design? Click the logo.
            </h4>
            <a href="https://doubledowncreations.com/" className="my-logo">
              <img src={navLogo} width="250px" alt="image of my logo" />
            </a>
          </div>
        </Container>
      </section>
    </Slide>
  );
};

export default Contact;

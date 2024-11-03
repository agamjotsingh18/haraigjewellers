// src/pages/Contact.js
import React from "react";
import styled from "styled-components";

const Contact = () => {
  return (
    <ContactSection>
      <h2>Contact Us</h2>
      <p>Feel free to reach out for inquiries or assistance.</p>
      <ContactForm>
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message"></textarea>
        <button type="submit">Send Message</button>
      </ContactForm>
    </ContactSection>
  );
};

export default Contact;

const ContactSection = styled.section`
  text-align: center;
  padding: 2rem;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 400px;
  margin: 0 auto;

  input, textarea {
    padding: 0.5rem;
    border: 1px solid #ddd;
  }

  button {
    padding: 0.7rem;
    background-color: #ffbf00;
    color: #fff;
    border: none;
    cursor: pointer;
  }

  button:hover {
    background-color: #333;
  }
`;

import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact_container">
      <div className="contact_content">
        <h2>Contact Us</h2>
        <form className="contact_form">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

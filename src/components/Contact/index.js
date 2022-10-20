import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import emailjs from '@emailjs/browser';


function ContactForm() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const { name, email, message } = formState;
  const [errorMessage, setErrorMessage] = useState('');

  function handleChange(e) {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      console.log(isValid);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }

    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value })
      console.log(formState);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);

    const templateParams = {
      user_name: name,
      user_email: email,
      message: message
    };

    emailjs.send('contact_service', 'contact_form', templateParams, '1xYivOBsAaSEObHf4')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      }, (err) => {
        console.log('FAILED...', err);
      });


    alert('Thank you for contacting me! I\'ll be in touch soon.');
    setFormState({ name: '', email: '', message: '' });
    document.getElementById('contact-form').reset();
  }

  return (
    <section>
      <h1 data-testid='contact' >Contact me</h1>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label><br />
          <input type="text" defaultValue={name} onBlur={handleChange} name="name" />
        </div>
        <div>
          <label htmlFor='email'>Email address:</label><br />
          <input type="email" defaultValue={email} onBlur={handleChange} name="email" />
        </div>
        <div>
          <label htmlFor='message'>Message:</label><br />
          <textarea name="message" defaultValue={message} onBlur={handleChange} rows="5" />
        </div>

        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}

        <button type="submit" data-testid='submit'>Submit</button>
      </form>
      <br />
    </section>
  )
};

export default ContactForm;
import React, { useState } from "react";
import { validateEmail } from "../utils/helpers";

function Contact() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');

    // This function will sync the internal state of the component formState with the user input from the DOM
    function handleChange(e) { 
        // The setFormState function will update formState
        // The spread operator ... is used to retain the other key-value pairs in this object. Without the spread operator, the formState object would be overwritten to only contain the name: value key pair
        setFormState({...formState, [e.target.name]: e.target.value })
        // The name attribute of the input element matches the property names of formState
        // The value property of the input element matches the property values of formState
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (!errorMessage) {
            console.log('Submit Form', formState);
        }
    }

    // This function will run every time the user interacts with this input field
    function handleBlur(e) {
        if (!e.target.value.length) {
            setErrorMessage(`${e.target.name} is required.`);
        }
        else {
            setErrorMessage('');
        }
    }

    // This function will run every time the user interacts with this input field
    function handleBlurEmail(e) {
        if (!validateEmail(e.target.value)) {
            setErrorMessage('Your email is invalid.');
        }
        else {
            setErrorMessage('');
        }
    }

    return (
        <section>
            <h1 id="contact">Contact Me</h1>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" defaultValue={name} onBlur={handleBlur} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="email">Email Address:</label>
                    <input type="email" name="email" defaultValue={email} onBlur={handleBlurEmail} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" rows="5" defaultValue={message} onBlur={handleBlur} onChange={handleChange} />
                </div>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <button type="submit">Submit</button>
            </form>
        </section>
    );
}

export default Contact;

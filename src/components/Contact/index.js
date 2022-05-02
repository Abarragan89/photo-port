import React, { useState } from 'react';

function ContacthtmlForm() {
    const [formState, setFormState] = useState({name: '', email: '', message: ''})
    const { name, email, message } = formState

    function handleChange(e) {
        // e.target.name refers to the name attribute in the html element
        setFormState({...formState, [e.target.name]: e.target.value})
    }
    function handleSubmit (e) {
        e.preventDefault();
        console.log(formState)
    }
    return (
        <section>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" defaultValue={name} name="name" onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" defaultValue={email} name="email" onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" defaultValue={message} rows="5" onChange={handleChange} />
                </div>
                <button type="submit">Submit</button>
            </form>
        </section>
    );
}

export default ContacthtmlForm;
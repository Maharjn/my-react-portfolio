import React from 'react';
import "./Contact.scss"
import { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

import contactme from "../../assets/contact.jpg"


function Contact() {

    const [message, setMessage] = useState(false)

    const handleSubmit = (e)=> {
        e.preventDefault();
        setMessage(true);
    }


    return (
        <div className="contact" id="contact">
            <div className="left">
            < img src={contactme} alt="Message me" />
           </div>
            <div className="right">
                <h2>Contact</h2>
                <form onSubmit={handleSubmit} >
                    <label for="Email">Email</label>
                    <input type="text" placeholder="Email" name="Email"/>
                    <label>Name</label>
                    <input type="text" placeholder="Name"/>
                    <label>Message</label>
                    <textarea placeholder="Message"></textarea>
                    <button type="submit">Send</button>
                    {message && <span>Thanks, I will be in touch soon</span>}
                </form>
            </div>

        </div>
    );
}

export default Contact;

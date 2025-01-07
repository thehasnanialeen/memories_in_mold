import React from 'react';
import './contact_me.scss';
import Section_Heading from '../Section_Heading/section_heading';

const ContactMe = () => {
    return (
        <div className="contact-me" id='contact'>
            <Section_Heading title="Contact Us" />
            <div className='contact-form-container'>
                <form className='contact-form' >{/* action="https://formspree.io/f/xnqoqzqz" method="POST"> */}
                    <div>
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div>
                        <label htmlFor="phone">Phone Number (optional)</label>
                        <input type="text" id="phone" name="phone" />
                    </div>
                    <div>
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" required></textarea>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>    
    );
};

export default ContactMe;
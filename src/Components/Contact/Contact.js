import React from 'react'
import './styles/Contact.css'

export default function Contact() {
    return (
        <div className="contact-main">
            <section className="contact-container">
                <div className="social-links">
                    <h1>Connect With Me</h1>
                    <div>
                        <a href="https://linkedin.com/in/bxker" target="__blank"><h2>LinkedIn</h2></a>
                        <a href="https://github.com/bxker" target="__blank"><h2>GitHub</h2></a>
                        <a href="https://dev.to/bxker" target="__blank"><h2>Dev.to</h2></a>
                    </div>
                </div>
                <div className="contact-email">
                    <h1>Email me!</h1>
                    <p>Reach out to me with any questions or inquiries.</p>
                    <a href="mailto:hello@jacob.digital"><button>hello@jacob.digital</button></a>
                </div>
            </section>
        </div>
    )
}

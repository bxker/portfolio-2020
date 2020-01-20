import React from 'react'
import './styles/Landing.css'
import Footer from '../Footer/Footer'

export default function Landing() {
    return (
        <>
        <div className="landing-main">
            <div className="landing-container">
                <section className="landing-section-1">
                    <img className="landing-logo" src="https://i.imgur.com/w1WnMcZ.jpg" alt="logo"></img>
                    <p>My name is <a href="https://github.com/bxker" style={{color: 'red', fontWeight: '600'}} target="__blank">Jacob Baker</a> and I am a full-stack web developer. I received a B.S. in Computer Information Technology from <a href="https://www.wku.edu/cit/" style={{color: 'red', fontWeight: '600'}} target="__blank">Western Kentucky University</a> and recently finished studying full-stack web development at <a href="https://www.devmountain.com" style={{color: '#2AABE2', fontWeight: '600'}} target="__blank">DevMountain</a> in Dallas, TX. I am currently a Mentor at <a href="https://www.devmountain.com" style={{color: '#2AABE2', fontWeight: '600'}} target="__blank">DevMountain</a>, helping students learn and grow as developers.</p>
                </section>
            </div>
        </div>
            <Footer />
        </>
    )
}

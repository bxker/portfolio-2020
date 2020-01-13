import React from 'react'
import './styles/Landing.css'

export default function Landing() {
    return (
        <div className="landing-main">
            <div className="landing-container">
                <section className="landing-section-1">
                    <img alt="profile-pic" src="https://images.squarespace-cdn.com/content/v1/5c6ba64aa9ab9567efdb9d58/1570741089542-ET0OWIJ6NLFDV5O1II45/ke17ZwdGBToddI8pDm48kBPuw_JX695-2cnSYY3bO3QUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcxHVwTUfhu8puyvLomnZdXsAUUFMTJOptnZPQAw6VT6R7UK0AuIIvhiO1PJKaEnhF/Jacob_Baker1_50_1_50.jpg"></img>
                </section>
                <section className="landing-section-2">
                    <p>My name is Jacob Baker and I am a full-stack web developer. I recently received a B.S. in Computer Information Technology from Western Kentucky University. I also recently finished studying full-stack web development at DevMountain in Dallas, TX. I am currently a Mentor at DevMountain, helping students learn and grow as developers.</p>
                </section>
            </div>
        </div>
    )
}

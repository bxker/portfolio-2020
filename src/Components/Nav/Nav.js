import React from 'react'
import './styles/Nav.css'
import { Link } from 'react-router-dom'

export default function Nav() {
    return (
        <div className="nav-container">
            <h1><span className="first_name">Jacob</span><span className="last_name">Baker</span></h1>
            <section>
                <Link to="/" style={{textDecoration: 'none'}}><span>About</span></Link>
                <Link to="/projects" style={{textDecoration: 'none'}}><span>Projects</span></Link>
                <Link to="/contact" style={{textDecoration: 'none'}}><span>Contact</span></Link>
            </section>
        </div>
    )
}

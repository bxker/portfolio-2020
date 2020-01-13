import React from 'react'
import './styles/Nav.css'
import { Link } from 'react-router-dom'

export default function Nav() {
    return (
        <div className="nav-container">
            <section>
                <Link to="/" style={{textDecoration: 'none'}}><button>About</button></Link>
                <Link to="/projects" style={{textDecoration: 'none'}}><button>Projects</button></Link>
                <Link to="/contact" style={{textDecoration: 'none'}}><button>Contact</button></Link>
            </section>
        </div>
    )
}

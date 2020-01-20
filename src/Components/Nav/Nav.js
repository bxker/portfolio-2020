import React from 'react'
import './styles/Nav.css'
import { Link, withRouter } from 'react-router-dom'

function Nav(props) {
    const [aboutStatus, setAboutStatus] = React.useState('')
    const [projectStatus, setProjectStatus] = React.useState('')
    const [contactStatus, setContactStatus] = React.useState('')

    //setting classnames for nav links based on pathname 
    React.useEffect(() => {
        if(props.location.pathname === '/'){
            setAboutStatus('about-selected')
            setProjectStatus('')
            setContactStatus('')
        }else if(props.location.pathname === '/projects'){
            setAboutStatus('')
            setProjectStatus('projects-selected')
            setContactStatus('')
        }else if(props.location.pathname === '/contact'){
            setAboutStatus('')
            setProjectStatus('')
            setContactStatus('contact-selected')
        }
    }, [props.location.pathname])

    return (
        <div className="nav-container">
            <h1><span className="first_name">Jacob</span><span className="last_name">Baker</span></h1>
            <section>
                <Link to="/" style={{textDecoration: 'none'}}><span id={aboutStatus}>Home</span></Link>
                <Link to="/projects" style={{textDecoration: 'none'}}><span id={projectStatus}>Projects</span></Link>
                <Link to="/contact" style={{textDecoration: 'none'}}><span id={contactStatus}>Contact</span></Link>
            </section>
        </div>
    )
}

export default withRouter(Nav)

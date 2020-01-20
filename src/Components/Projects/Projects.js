import React from 'react'
import projects from '../../data/projects'
import {Carousel} from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './styles/Projects.css'
import {Link} from 'react-router-dom'
import Footer from '../Footer/Footer'

export default function Projects() {
    return (
        <>
        <div className="projects-main">
            <section className="switch-container">
                <div className="switch-carousel">
                    <Carousel showArrows={true} showThumbs={false}>
                        <div className="switch">
                            <img alt="switch-1" src={projects[0].project_image[0]} />
                            <p className="legend">Switch - Landing</p>
                        </div>
                        <div className="switch">
                            <img alt="switch-2" src={projects[0].project_image[1]} />
                            <p className="legend">Switch - Login</p>
                        </div>
                        <div className="switch">
                            <img alt="switch-3" src={projects[0].project_image[2]} />
                            <p className="legend">Switch - Register</p>
                        </div>
                        <div className="switch">
                            <img alt="switch-4" src={projects[0].project_image[3]} />
                            <p className="legend">Switch - Browse</p>
                        </div>
                        <div className="switch">
                            <img alt="switch-5" src={projects[0].project_image[4]} />
                            <p className="legend">Switch - Profile</p>
                        </div>
                        <div className="switch">
                            <img alt="switch-6" src={projects[0].project_image[5]} />
                            <p className="legend">Switch - Settings</p>
                        </div>
                    </Carousel>
                </div>
                <h1>Switch</h1>
                <Link to={`/project/${projects[0].project_name}`}><button>View Project</button></Link>
            </section>
            <section className="trakd-container">
                <div className="trakd-carousel">
                    <Carousel showArrows={true} showThumbs={false}>
                        <div className="Trakd">
                            <img alt="Trakd-1" src={projects[1].project_image[0]} />
                            <p className="legend">Trakd - Login</p>
                        </div>
                        <div className="Trakd">
                            <img alt="Trakd-2" src={projects[1].project_image[1]} />
                            <p className="legend">Trakd - Register</p>
                        </div>
                        <div className="Trakd">
                            <img alt="Trakd-3" src={projects[1].project_image[2]} />
                            <p className="legend">Trakd - Dashboard</p>
                        </div>
                        <div className="Trakd">
                            <img alt="Trakd-4" src={projects[1].project_image[3]} />
                            <p className="legend">Trakd - Settings</p>
                        </div>
                        <div className="Trakd">
                            <img alt="Trakd-5" src={projects[1].project_image[4]} />
                            <p className="legend">Trakd - About</p>
                        </div>
                    </Carousel>
                </div>
                <h1>Trakd</h1>
                <Link to={`/project/${projects[1].project_name}`}><button>View Project</button></Link>
            </section>
            <section className="asana-clone-container">
                <div className="asana-clone-carousel">
                    <Carousel showArrows={true} showThumbs={false}>
                        <div className="Asana-Clone">
                            <img alt="Asana-Clone-1" src={projects[2].project_image[0]} />
                            <p className="legend">Asana-Clone - Login</p>
                        </div>
                        <div className="Asana-Clone">
                            <img alt="Asana-Clone-2" src={projects[2].project_image[1]} />
                            <p className="legend">Asana-Clone - Register</p>
                        </div>
                        <div className="Asana-Clone">
                            <img alt="Asana-Clone-3" src={projects[2].project_image[2]} />
                            <p className="legend">Asana-Clone - Dashboard</p>
                        </div>
                    </Carousel>
                </div>
                <h1>Asana Clone</h1>
                <Link to={`/project/${projects[2].project_name}`}><button>View Project</button></Link>
            </section>
        </div>
        <Footer />
        </>
    )
}

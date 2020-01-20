import React from 'react'
import projects from '../../../data/projects'
import {Carousel} from 'react-responsive-carousel'
import './styles/Project.css'


export default function Project(props) {
    console.log(props)
    return (
        <div className="project-main">
            {props.match.params.project_name === 'Switch' ?
            <div className="project-container">
                <h1>{projects[0].project_name}</h1>
                <section className="project-middle-container">
                <div id="project-images">
                    <Carousel showArrows={true}>
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
                <section className="project-description">
                    <p >{projects[0].project_description}</p>
                    <div className="post-buttons">
                        <a target="__blank" href="https://switchapp.xyz/#/"><button>Live Site</button></a>
                        <a target="__blank" href="https://github.com/bxker/switch-app"><button>GitHub</button></a>
                    </div>
                </section>
                </section>
            </div>
            :
            props.match.params.project_name === 'Trakd' ?
            <div className="project-container">
                <h1>{projects[1].project_name}</h1>
                <section className="project-middle-container">
                <div id="project-images">
                    <Carousel showArrows={true}>
                        <div className="switch">
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
                <section className="project-description">
                    <p >{projects[1].project_description}</p>
                    <div className="post-buttons">
                        <a target="__blank" href="https://trakd.net/#/"><button>Live Site</button></a>
                        <a target="__blank" href="https://github.com/dm-group-trakd/trakd"><button>GitHub</button></a>
                    </div>
                </section>
                </section>
            </div>
            :
            props.match.params.project_name === 'Asana-Clone' ?
            <div className="project-container">
                <h1>{projects[2].project_name}</h1>
                <section className="project-middle-container">
                <div id="project-images">
                    <Carousel showArrows={true}>
                        <div className="Asana-clone">
                            <img alt="Asana-clone-1" src={projects[2].project_image[0]} />
                            <p className="legend">Asana-clone - Landing</p>
                        </div>
                        <div className="Asana-clone">
                            <img alt="Asana-clone-2" src={projects[2].project_image[1]} />
                            <p className="legend">Asana-clone - Login</p>
                        </div>
                        <div className="Asana-clone">
                            <img alt="Asana-clone-3" src={projects[2].project_image[2]} />
                            <p className="legend">Asana-clone - Register</p>
                        </div>
                    </Carousel>
                </div>
                <section className="project-description">
                    <p >{projects[2].project_description}</p>
                    <div className="post-buttons">
                       <button id="disabled">Live Site</button>
                        <button id="disabled">GitHub</button>
                    </div>
                </section>
                </section>
            </div>
            :null
            }
        </div>
    )
}

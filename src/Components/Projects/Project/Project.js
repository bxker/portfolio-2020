import React from 'react'
import projects from '../../../data/projects'
import {Carousel} from 'react-responsive-carousel'
// import { Link } from 'react-router-dom'


export default function Project(props) {
    return (
        <div>
            {props.match.params.project_name === 'Switch' ?
            <div>
                <h1>{projects[0].project_name}</h1>
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
                <p>{projects[0].project_description}</p>
                <button><a target="__blank" href="https://switchapp.xyz/#/">Live Site</a></button>
                <button><a target="__blank" href="https://github.com/bxker/switch-app">GitHub Repository</a></button>
            </div>
            :
            props.match.params.project_name === 'Trakd' ?
            <div>
                <h1>{projects[1].project_name}</h1>
                <Carousel showArrows={true}>
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
                <p>{projects[1].project_description}</p>
                <button><a target="__blank" href="https://trakd.net/#/">Live Site</a></button>
                <button><a target="__blank" href="https://github.com/dm-group-trakd/trakd">GitHub Repository</a></button>
            </div>
            :null
            }
        </div>
    )
}

import React from 'react'
import projects from '../../data/projects'
import {Carousel} from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './styles/Projects.css'
import { Link } from 'react-router-dom';

console.log(projects[0].project_image)

export default function Projects() {

    let redirectToProject = () => {
        return (
            <Link to={`/projects/${projects[0].project_id}`}/>
        )
    }

    return (
        <div className="projects-main">
            <Carousel showArrows={true} onClickThumb={() => redirectToProject()}>
                <div className="switch">
                    <img src={projects[0].project_image} />
                    <ul className="legend">
                        <li>{projects[0].project_name}</li>
                        
                    </ul>
                </div>
                <div className="trakd">
                    <img src={projects[1].project_image} />
                    <p className="legend">Trakd</p>
                </div>
            </Carousel>
        </div>
    )
}

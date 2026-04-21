import React from "react";
import projectsData from "../data/projects.json"
import {FaGithub, FaExternalLinkAlt} from "react-icons/fa";

const Projects = () => {

    return(
        <section className="projects" id="projects">
            <h2>My Projects</h2>
            <div className="projects-grid">
                {projectsData.map((project, index) => ( //loop through each project and create a card
                    <div className="project-card" key={index}>
                        <div className="project-image">
                            <img src={project.image} alt={project.title} />
                        </div>
                        <div className="project-info">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <div className="project-tags">
                                {project.tags.map((tag) => ( //nested map, a map inside a map. It loops through eag project's tag and creates a small <span> badge for each tag.
                                    <span key={tag} className="tag">{tag}</span>
                                ))}
                            </div>
                            <div className="project-links">
                                <a href={project.github}
                                target= "_blank" //opens the link in a new tab
                                rel="noreferrer" //security measure, so the new page cannot be manipulated.
                                className="project-link"
                                >
                                <FaGithub />GitHub </a>

                                <a
                                href={project.live}
                                target="_blank"
                                rel="noreferrer"
                                className="project-link"
                                >
                                    <FaExternalLinkAlt />Live
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
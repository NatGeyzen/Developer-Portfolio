import React from 'react';
import './Projects.css';
import Project from '../../components/Project/Project';

const Projects = () => {

    const projects = [
        {
            id: 'completed_1',
            hexagonClass: 'hexagon initial',
            demoLink: 'http://nat.geyzen.tech/name-generator',
            title: 'Character Name Generator',
            codeLink: 'https://github.com/NatGeyzen/StoryElementsGenerator-JavaScript',
            description: 'A small, but elegant web application written in Vanilla JavaScript. A simplistic approach to design, with micro-animations for a more pleasant user experience.'
        },
        {
            id: 'completed_2',
            hexagonClass: 'hexagon initial',
            demoLink: 'http://nat.geyzen.tech/memory-game',
            title: 'Memory Game (Toddler Edition)',
            codeLink: 'https://github.com/NatGeyzen/React-Toddler-Town',
            description: 'A single page web application, match from memory game. Originally created as a fun project for me to work on for my son. Currently in v1, but with plans for expansion, combining my passion for teaching and coding by creating games with an educational purpose in mind.'
        },
       {
            id: 'completed_3',    
            hexagonClass: 'hexagon initial',
            title: 'Developer Portfolio',
            codeLink: 'https://github.com/NatGeyzen/Developer-Portfolio',
            description: 'A single page web application consisting of a React front-end and using MongoDB to store dynamic data.  Custom created admin dashboard for CRUD operations.'
        },
        {
            id: 'in-progress_1',
            hexagonClass: 'hexagon initial',
            title: 'LiMa Organizational Tool',
            description: 'A React Native app with a focus on some of the organizational aspects of life, with plans to expand to a multi-platform application.'
        },
        {
            id: 'planned_1',
            hexagonClass: 'hexagon initial',
            title: 'Super (Not So) Secret Project',
            description: 'Not giving away too much quite yet, but it will be a perfect merger of my passion for development and teaching.'
        }
    ];


    return (
        <section className="page-section">
            <h1 className="page-section-title">Projects</h1>
            {projects.map(project =>
                <Project 
                    key={project.id}
                    id={project.id}
                    hexagonClass={project.hexagonClass}
                    demoLink={project.demoLink}
                    title={project.title}
                    codeLink={project.codeLink}
                />
            )}
        </section>
    )
};

export default Projects;
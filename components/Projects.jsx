import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
    return(
        <section id="projects" className="my-60">
            <h1 className="text-center text-4xl font-bold">
                My projects
                <hr className="w-20 h-2 mx-auto my-8 bg-green-600 border-0 rounded"></hr>        
            </h1>
            <ProjectCard/>
        </section>
    )
}

export default Projects
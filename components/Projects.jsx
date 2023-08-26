import React from "react";
import ProjectCard from "./ProjectCard";

const getProjects = async () => {

        const res = await fetch('http://localhost:3000/api/projects', {
            cache: "no-store"
        })
        if(!res.ok){
            throw new Error("Failed to read projects")
        }
        return res.json()
}

export default async function Projects() {
    const {projects} = await getProjects()
    return(
        <section id="projects" className="my-60">
            <h1 className="text-center text-4xl font-bold">
                My projects
                <hr className="w-20 h-2 mx-auto my-8 bg-green-600 border-0 rounded"></hr>        
            </h1>
            <div className="flex flex-col space-y-5">
                {projects.map((p) => (
                    <ProjectCard 
                    project={p}
                    />
                ))}      

            </div>
        </section>
    )
}

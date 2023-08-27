import React from "react";
import Image from "next/image";
import DeleteButton from "./DeleteButton";

const ProjectCard = ({project}) => {
    return(
        <div className="flex flex-row justify-between md:w-1/2 w-4/5 mx-auto space-x-5 shadow-xl rounded-xl bg-gray-200 dark:bg-gray-800">
            <div className="w-1/2"><Image src={project.imagePath} width={300} height={300}/></div>
            <div className="justify-start text-start w-1/2">
                <h3 className="font-semibold text-xl">{project.title}</h3>
                <p>{project.description}</p>
                <div className="flex flex-row justify-start space-x-2">
                    <a href='/' target="_blank">{project.github}</a>
                    <a href='/' target="_blank">{project.website}</a>
                    <DeleteButton id={project._id}/>
                </div>
            </div>          
        </div>
    )
}

export default ProjectCard
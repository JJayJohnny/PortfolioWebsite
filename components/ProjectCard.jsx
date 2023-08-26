import React from "react";
import Image from "next/image";

const ProjectCard = () => {
    return(
        <div className="flex flex-row justify-between md:w-1/2 w-4/5 mx-auto space-x-5 shadow-xl rounded-xl bg-gray-200 dark:bg-gray-800">
            <div className="w-1/2">Project Photo</div>
            <div className="justify-start text-start w-1/2">
                <h3 className="font-semibold text-xl">Project title</h3>
                <p>Project description</p>
                <div className="flex flex-row justify-start space-x-2">
                    <a href='/' target="_blank">SP</a>
                    <a href='/' target="_blank">GH</a>
                </div>
            </div>          
        </div>
    )
}

export default ProjectCard
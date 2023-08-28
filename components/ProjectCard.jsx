"use client"
import React from "react";
import Image from "next/image";
import DeleteButton from "./DeleteButton";
import {DiGithubBadge} from "react-icons/di"
import {CgWebsite} from "react-icons/cg"
import { useSession } from 'next-auth/react'

const ProjectCard = ({project}) => {
    const {data: session} = useSession()
    return(
        <div className="flex flex-row justify-between md:w-1/2 w-4/5 mx-auto space-x-5 shadow-xl rounded-xl bg-gray-200 dark:bg-gray-800">
            <div className="w-1/2"><Image src={project.imagePath} width={300} height={300}/></div>
            <div className="justify-start text-start w-1/2">
                <h3 className="font-semibold text-xl">{project.title}</h3>
                <p>{project.description}</p>
                <div className="flex flex-row justify-start space-x-2">
                    {project.github ? <a href={project.github} target="_blank"><DiGithubBadge size={28}/></a> : null }
                    {project.website ? <a href={project.website} target="_blank"><CgWebsite size={28}/></a> : null }
                    {session ? <DeleteButton id={project._id}/> : null }
                </div>
            </div>          
        </div>
    )
}

export default ProjectCard
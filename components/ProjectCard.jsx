"use client"
import React from "react";
import Image from "next/image";
import DeleteButton from "./DeleteButton";
import {DiGithubBadge} from "react-icons/di"
import {CgWebsite} from "react-icons/cg"
import { useSession } from 'next-auth/react'
import { motion } from 'framer-motion'

const ProjectCard = ({project, idx}) => {
    const {data: session} = useSession()
    return(
        <motion.div className="flex flex-row justify-between lg:w-1/2 w-4/5 mx-auto space-x-5 rounded-xl bg-gray-200/60 dark:bg-gray-800/60 my-5" 
        initial={{x: idx%2 == 0 ? "-100%" : "100%", opacity: 0}} 
        whileInView={{x: 0, opacity: 1,
            transition:{duration: 0.5, delay: 0.5}
        }} 
        viewport={{once: true}} 
        whileHover={{scale: 1.05}}>
            <div className="w-1/2"><img src={project.imageName} width={300} height={300} className="rounded-l-xl" alt={`Image of ${project.title}`}/></div>
            <div className="text-start w-1/2 flex flex-col justify-between p-5">
                <div>
                <div className="flex flex-row">
                    <h3 className="font-semibold text-xl">{project.title}</h3>
                    <h3 className="text-xl ml-auto text-purple-500">{project.year}</h3>
                </div>
                <p>{project.description}</p>
                </div>
                <div className="flex flex-row justify-start space-x-2">
                    {project.github ? <a href={project.github} target="_blank"><DiGithubBadge size={28}/></a> : null }
                    {project.website ? <a href={project.website} target="_blank"><CgWebsite size={28}/></a> : null }
                    {session ? <DeleteButton id={project._id}/> : null }
                </div>
            </div>          
        </motion.div>
    )
}

export default ProjectCard
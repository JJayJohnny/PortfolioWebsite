"use client"
import React from 'react';
import ArrowButtton from './ArrowButton';
import intelLogo from '../public/Logo_Intel.png';
import wakacjeLogo from '../public/Logo_Wakacje.png';
import Image from 'next/image';

const JOBS = [
    {
        company: 'Intel Technology Poland',
        position: 'Graphics Software Development Intern - PreSi CI Team',
        duration: 'Jan. 2024 - now',
        description: 'Configuring and maintaining simulation environments for graphics driver testing. Setting up automatic test execution. Analyzing test results, reporting bugs, and communicating with developers. Creating documentation on testing environment configuration and internal team processes. Developing Python tools to automate repetitive tasks for the PreSi CI team.',
        img: intelLogo,
    },
    {
        company: 'Wakacje.pl',
        position: 'IT technical support assistant',
        duration: 'Aug. 2023 - Feb. 2025',
        description: 'Monitoring the online store\'s sales process for errors, classifying them, and notifying the relevant teams by creating tasks in the Jira system. Creating weekly reports summarizing errors and their occurrences.',
        img: wakacjeLogo,
    }
]

const Experience = () => {
    return (
        <section id="experience" className="my-60">
            <h1 className="text-center text-4xl font-bold">
                Work Experience
                <hr className="w-20 h-2 mx-auto my-8 bg-green-600 border-0 rounded"></hr>
            </h1>
            <div className="flex flex-col space-y-5 overflow-hidden py-3">
                {JOBS.map((job, idx) => {
                    return (
                        <div className="mx-auto rounded-xl bg-gray-300/80 dark:bg-gray-800/60 w-4/5 lg:w-1/2 p-5" key={idx}>
                            <div className="flex sm:flex-row flex-col mb-3">
                                <h3 className="font-semibold text-xl">{job.company}</h3>
                                <h3 className="font-semibold text-xl sm:ml-auto text-purple-500">{job.duration}</h3>
                            </div>
                            <div className="flex flex-row justify-between space-x-5">
                                <div className='sm:w-4/6 w-full'>
                                    <h4 className="font-semibold text-l mb-2 text-green-600">{job.position}</h4>
                                    <div className="text-justify">{job.description}</div>
                                </div>
                                <div className='w-2/6 my-auto sm:block hidden'>
                                    <Image src={job.img} alt={job.company}/>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <ArrowButtton destination={'projects'}/>
        </section>
    );
};

export default Experience;
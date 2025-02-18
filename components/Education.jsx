"use client"
import React from 'react';
import ArrowButtton from "./ArrowButton";
import {FiExternalLink} from "react-icons/fi";
import { motion } from 'framer-motion'
import Image from "next/image";
import pgLogo from '../public/Logo_Gdansk_Tech.svg'
import pgLogoDark from '../public/Logo_Gdansk_Tech_Dark.svg'

const COURSES = [
    {
        name: 'Informatics',
        specialty: 'Computer Systems Architecture',
        degree: 'engineer',
        school: 'Gdańsk Tech',
        duration: 'Oct. 2021 - Feb. 2025',
        grade: '5',
        gpa: '4,581',
        url: 'https://ects.pg.edu.pl/en/courses/14492',
        img: pgLogo,
        imgDark: pgLogoDark,
    },
]

const Education = () => {
    return (
        <section id="education" className="my-60">
            <h1 className="text-center text-4xl font-bold">
                Education
                <hr className="w-20 h-2 mx-auto my-8 bg-green-600 border-0 rounded"></hr>
            </h1>
            <div className="flex flex-col space-y-5 overflow-hidden py-3">
                {COURSES.map((course, idx) => {
                    return (
                        <motion.div className="mx-auto rounded-xl bg-gray-300/80 dark:bg-gray-800/60 w-4/5 lg:w-1/2 xl:w-2/6 p-5" whileHover={{scale: 1.05}}>
                            <div className="flex sm:flex-row flex-col mb-2">
                                <a href={course.url} target="_blank"><h3 className="font-semibold text-xl">{course.name} <FiExternalLink className="inline" size={15}/></h3></a>
                                <h3 className="font-semibold text-xl sm:ml-auto text-purple-500">{course.duration}</h3>
                            </div>
                            <div className="flex flex-row justify-between">
                                <div>
                                    <div><span className='underline'>Specialty</span>: {course.specialty}</div>
                                    <div><span className='underline'>Degree</span>: {course.degree}</div>
                                    <div><span className='underline'>School</span>: {course.school}</div>
                                    <div><span className='underline'>Grade</span>: {course.grade}</div>
                                    <div><span className='underline'>GPA</span>: {course.gpa}</div>
                                </div>
                                <div className='w-2/6 my-auto'>
                                    <Image src={course.img} alt={`Logo of ${course.school}`} className="dark:hidden"/>
                                    <Image src={course.imgDark} alt={`Logo of ${course.school}`} className="hidden dark:block"/>
                                </div>
                            </div>
                        </motion.div>
                    )
                })}
            </div>
            <ArrowButtton destination={'projects'}/>
        </section>
    );
};

export default Education;
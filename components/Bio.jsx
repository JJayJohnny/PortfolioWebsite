import React from "react";
import Image from "next/image";
import profilePicture from '../public/profilePicture.jpg'
import ArrowButtton from "./ArrowButton";

const Bio = () => {
    return(
        <section id="home" className="my-40">
            <div className="flex flex-col text-center items-center justify-center lg:flex-row space-y-3 lg:px-60 px-10 lg:space-x-10">
                <div><Image className="rounded-full shadow-2xl" src={profilePicture} alt="" width={400} height={400} priority={true}/></div>
                <div className="lg:w-1/2">
                    <h1 className="text-4xl font-bold">Hi</h1>
                    <hr className="w-20 h-2 mx-auto my-8 bg-green-600 border-0 rounded"></hr>
                    <p>
                        Welcome to my portfolio website! My name is <b className=" text-green-600">Jan Barczewski</b>. I&apos;m a third-year computer science student, aspiring to become a professional software developer. My main fields of interest are backend development and AI. This page serves as a business card showcasing my experience, projects, and skills.
                    </p>
                </div>
            </div>
            <ArrowButtton destination={'about'}/>
        </section>
    )
}

export default Bio
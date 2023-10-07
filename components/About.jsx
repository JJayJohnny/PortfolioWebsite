import React from "react";
import ArrowButtton from "./ArrowButton";

const SKILLS = ['JavaScript', 'Node.js', 'Python', 'C++', 'Express.js', 'Next.js', 'React', 'HTML', 'CSS', 'TailwindCSS', 'Git', 'Jira', 'Matlab', 'Numpy', 'scikit-learn', 'MongoDB', 'SQL']

const About = () => {
    return(
        <section id="about" className="my-60">
            <h1 className="text-center text-4xl font-bold">
                About me
                <hr className="w-20 h-2 mx-auto my-8 bg-green-600 border-0 rounded"></hr>
            </h1>
            <div className="flex flex-col justify-between lg:space-x-10 lg:flex-row lg:px-60 px-10 max-lg:space-y-10">
                <div className="lg:w-3/5 justify-center lg:text-justify text-center">
                    <p>
                        I've always been interested in computers for as long as I can remember. It all started with playing games and later evolved into an interest in how they actually work, what new things are being developed and a desire to program them myself.
                    </p>
                    <br/>
                    <p>
                        That's why I've decided to study <b className=" text-green-600">computer science</b> at <b className=" text-green-600">Gdańsk University of Technology</b> where I live. I'm currently on the <b className="text-green-600">5th semester</b>, getting really good grades (GPA 4.43🤓), and I'm extremely pleased with my choice of degree. I feel that I have learned a lot of things that will be valuable in my future professional life and have also developed important soft skills.
                    </p>
                    <br/>
                    <p>
                        I wish to gain my first experience in the IT sector, learn the process of software development and work as part of a team on a big project.
                    </p>
                </div>
                <div className="lg:w-2/5">
                    <h2 className="lg:text-left text-center text-2xl font-bold mb-3">My skills:</h2>
                    <div className="flex flex-wrap flex-row justify-center lg:justify-start">
                        {SKILLS.map((skill, idx) => {
                            return (
                                <div className="px-3 py-2 mt-2 mr-2 bg-green-500 rounded font-semibold" key={idx}>{skill}</div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <ArrowButtton destination={'projects'}/>
        </section>
    )
}

export default About
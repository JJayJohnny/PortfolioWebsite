import React from "react";
import ArrowButtton from "./ArrowButton";

const SKILLS = ['Java', 'Spring Boot', 'Jakarta EE', 'JavaScript', 'Node.js', 'Python', 'ASP.NET', 'Express.js', 'C++', 'Next.js', 'React', 'HTML', 'CSS', 'TailwindCSS', 'Git', 'Docker', 'Jira', 'Matlab', 'Numpy', 'scikit-learn', 'MongoDB', 'SQL', 'RaspberryPi']

const About = () => {
    return(
        <section id="about" className="my-60">
            <h1 className="text-center text-4xl font-bold">
                About me
                <hr className="w-20 h-2 mx-auto my-8 bg-green-600 border-0 rounded"></hr>
            </h1>
            <div className="flex flex-col justify-between lg:space-x-10 lg:flex-row lg:px-60 px-10 max-lg:space-y-10">
                <div className="lg:w-3/5 justify-center lg:text-justify text-center dark:bg-gray-800/60 bg-gray-300/80 p-5 rounded-xl">
                    <p>
                        I&apos;ve always been interested in computers for as long as I can remember. It all started with playing games and later evolved into an interest in how they actually work, what new things are being developed and a desire to program them myself.
                    </p>
                    <br/>
                    <p>
                        That's why I've decided to study <b className="text-green-600">Informatics</b> at <b className="text-green-600">Gdańsk University of Technology</b>, where I live. I've obtained an <b className="text-green-600">Engineering degree</b> with honors (GPA 4.58 🤓), and I am currently pursuing a <b className="text-green-600">Master of Engineering degree</b> in the same field. My specialty of choice is <b className="text-green-600">High-Performance Computing and Computational Intelligence</b>. Overall, I feel that these studies have given me a solid foundation for future work in software development, regardless of the career path I choose. I've learned many things that will be valuable in my professional life and have also developed important soft skills.
                    </p>
                    <br/>
                    <p>
                        I've gained my first experience in the IT sector during my internship at <b className="text-green-600">Intel</b>, where I worked as a <b className="text-green-600">Graphics Software Development Intern</b> in the PreSi CI Team. I've learned a lot about test automation, CI/CD processes, industry-standard tools, and the importance of teamwork. I've also had the opportunity to work on a real project with people from different countries, which was a great experience.
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
            <ArrowButtton destination={'education'}/>
        </section>
    )
}

export default About
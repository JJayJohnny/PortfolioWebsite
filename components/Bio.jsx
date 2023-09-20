import React from "react";
import Image from "next/image";
import profilePicture from '../public/profilePicture.jpg'
import ArrowButtton from "./ArrowButton";

const Bio = () => {
    return(
        <section id="home" className="my-40">
            <div className="flex flex-col text-center items-center justify-center lg:flex-row space-y-3 lg:px-60 px-10 lg:space-x-4">
                <div><Image className="rounded-full shadow-2xl" src={profilePicture} alt="" width={400} height={400}/></div>
                <div className="lg:w-1/2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dui felis, cursus dapibus fringilla et, consectetur sed urna. Quisque hendrerit lacinia turpis eget commodo. Phasellus ut finibus erat, quis pulvinar ligula. Quisque eget eleifend lacus. Quisque sit amet neque sed velit porttitor hendrerit. Aenean non condimentum sapien, sed finibus tellus. Nam accumsan tincidunt justo eu sagittis. Sed aliquam nibh vel augue pretium, vitae ultricies mauris tempor. Curabitur molestie suscipit nisi, eget maximus elit tincidunt non. Integer ut convallis arcu.</div>
            </div>
            <ArrowButtton destination={'about'}/>
        </section>
    )
}

export default Bio
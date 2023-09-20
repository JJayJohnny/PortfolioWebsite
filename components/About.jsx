import React from "react";
import Image from "next/image";
import ArrowButtton from "./ArrowButton";

const SKILLS = ['JavaScript', 'Python', 'C++', 'HTML', 'CSS', 'Node.js', 'Git', 'Next.js', 'Matlab', 'Numpy', 'Windows', 'Linux']

const About = () => {
    return(
        <section id="about" className="my-60">
            <h1 className="text-center text-4xl font-bold">
                About me
                <hr className="w-20 h-2 mx-auto my-8 bg-green-600 border-0 rounded"></hr>
            </h1>
            <div className="flex flex-col justify-between lg:space-x-10 lg:flex-row lg:px-60 px-10 max-lg:space-y-10">
                <div className="lg:w-3/5 justify-center lg:text-justify text-center">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec ipsum sapien. Sed neque eros, iaculis eget auctor quis, pellentesque vel arcu. Phasellus semper ex non egestas imperdiet. Etiam iaculis, augue a tristique ornare, nisi orci facilisis nisi, sit amet varius ipsum dolor non sem. Quisque iaculis, purus in eleifend ornare, velit odio malesuada est, ac fringilla justo ipsum vel tellus. Praesent mauris elit, cursus quis ultrices vel, rutrum vitae nisi. Nulla varius nibh sed euismod ultrices. Duis id aliquam lacus, vel molestie velit. Praesent sapien turpis, molestie non lobortis eu, interdum eu elit.
                    </p>
                    <p>Donec interdum at magna in mollis. Nam vitae feugiat tellus, ac maximus est. Pellentesque eget maximus magna. Duis mattis turpis ac libero aliquet, porta rhoncus nisi tincidunt. Integer eget elementum odio. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent at urna at sapien auctor luctus sed in ex. Donec pretium facilisis massa sed malesuada. Nulla et varius felis, sed tempus neque. Duis scelerisque dolor a erat porta condimentum. Ut in facilisis lectus. Etiam ut dui elementum, facilisis massa at, mollis ligula. Mauris auctor sem nec sem placerat, sed elementum purus luctus. Donec quis consectetur tortor. Etiam bibendum elit odio, et eleifend ex cursus ac.
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
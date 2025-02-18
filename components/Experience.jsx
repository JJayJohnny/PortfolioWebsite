"use client"
import React from 'react';
import ArrowButtton from './ArrowButton';

const Experience = () => {
    return (
        <section id="experience" className="my-60">
            <h1 className="text-center text-4xl font-bold">
                Work Experience
                <hr className="w-20 h-2 mx-auto my-8 bg-green-600 border-0 rounded"></hr>
            </h1>
            <div className="flex flex-col space-y-5 overflow-hidden py-3">

            </div>
            <ArrowButtton destination={'projects'}/>
        </section>
    );
};

export default Experience;
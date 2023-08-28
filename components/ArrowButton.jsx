"use client"
import React from "react";
import {Link} from "react-scroll/modules"
import { HiArrowDown } from "react-icons/hi";

const ArrowButtton = ({destination}) => {
    return(
        <div className="mx-auto w-min py-20 animate-bounce">
            <Link to={destination} activeClass="active" spy={true} smooth={true} offset={-150} duration={500} className="cursor-pointer"><HiArrowDown size={40}/></Link>
        </div>
    )
}

export default ArrowButtton
import React from "react";
import {RiMailSendLine} from "react-icons/ri"

const Contact = () => {
    return(
        <section id='contact' className=" my-20">
            <h1 className="text-center text-4xl font-bold">
                Contact
                <hr className="w-20 h-2 mx-auto my-8 bg-green-600 border-0 rounded"></hr>
            </h1>
            <div className="mx-auto p-5 text-center">
                Mail me at:
                <div className="flex flex-row space-x-3 justify-center mt-2">
                    <RiMailSendLine size={28}/> <a href="mailto: jasiek.barczewski@gmail.com"><span className="text-green-600">jasiek.barczewski@gmail.com</span></a>
                </div>
            </div>
        </section>
    )
}

export default Contact
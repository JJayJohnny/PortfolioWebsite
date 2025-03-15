"use client"
import React from "react";
import { useRouter } from "next/navigation";

const Logo = () => {
    const router = useRouter()

    const home = () => {
        router.push('/')
    }
    
    return(
        <div onClick={home} className="font-sacramento text-3xl font-bold text-black dark:text-white hover:cursor-pointer dark:neon neonLight">
            JJayJohnny
        </div>
    )
}

export default Logo
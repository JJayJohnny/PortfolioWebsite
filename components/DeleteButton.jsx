"use client"
import React from "react";
import {HiOutlineTrash} from "react-icons/hi"
import { useRouter } from "next/navigation";

const DeleteButton = ({id}) => {

    const router = useRouter()

    const deleteProject = async () => {
        const confirmed = confirm("Are you sure")

        if(!confirmed){
            return
        }

        const res = await fetch(`http://localhost:3000/api/projects?id=${id}`, {
            method: "DELETE"
        })
        console.log(res)
        router.refresh()
    }

    return(
        <button className="text-red-400" onClick={deleteProject}>
            <HiOutlineTrash/>
        </button>
    )
}

export default DeleteButton
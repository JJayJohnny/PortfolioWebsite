"use client"
import { useSession } from 'next-auth/react'
import { useRouter } from "next/navigation"

export default function adminPanel(){
    const {data: session} = useSession()
    const router = useRouter()

    const addProject = () => {       
        router.push('/addProject')
    }

    if(session){
        return(
            <div className='my-40 mx-auto text-center'>
                <button onClick={addProject}>Add new project</button>
            </div>
        )
    }
    else{
        return(
            <div className='my-40 mx-auto text-center'>
                You don't have access to this page
            </div>
        )
    }
}
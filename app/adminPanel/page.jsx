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
            <div className='my-40 mx-auto text-center flex flex-col space-y-3 w-48'>
                <h1 className=' font-bold text-3xl'>Admin panel</h1>
                <button onClick={addProject} className='bg-slate-100 dark:bg-slate-700 p-2 rounded-xl'>Add new project</button>
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
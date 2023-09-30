"use client"
import { useRef, useState } from "react"
import { useRouter } from "next/navigation"
import { signIn, useSession } from "next-auth/react"

const AddProjectForm = () => {
    const {data: session} = useSession()

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [year, setYear] = useState("")
    const [image, setImage] = useState("")
    const [github, setGithub] = useState("")
    const [website, setWebsite] = useState("")

    const inputRef = useRef()
    const router = useRouter()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try{
            const data = new FormData()
            data.set('title', title)
            data.set('description', description)
            data.set('year', year)
            data.set('image', image)
            data.set('github', github)
            data.set('website', website)
            const res = await fetch(process.env.NEXT_PUBLIC_API_URL + '/projects', {
                method: "POST",
                body: data
            })
            if(res.ok){
                router.push('/')
            }
            else{
                throw new Error("Error creating project")
            }
        }
        catch(error){
            console.log(error)
        }
    }

    return (
        <>
            {session ? (
                <div className="my-40 w-1/2 mx-auto border p-5">
                    <h2 className="text-center font-bold">Add project</h2>
                    <form className="flex flex-col space-y-3" onSubmit={handleSubmit}>
                        <input type="text" placeholder="Title" className="border rounded" required onChange={(e) => setTitle(e.target.value)}/>
                        <input type="text" placeholder="Description" className="border rounded" required onChange={(e) => setDescription(e.target.value)}/>
                        <input type="number" placeholder="Year" min={1000} max={9999} className="border rounded" required onChange={(e) => setYear(e.target.value)}/>
                        <input type="file" placeholder="Photo" className="border rounded" required onChange={() => setImage(inputRef.current.files[0])} ref={inputRef} accept="image/*"/>
                        <input type="text" placeholder="Github page" className="border rounded" onChange={(e) => setGithub(e.target.value)}/>
                        <input type="text" placeholder="Hosted project page" className="border rounded" onChange={(e) => setWebsite(e.target.value)}/>
                        <input type="submit" value={"Add"} className="bg-green-500 rounded"/>
                    </form>
                </div>
            ) : (
                <div className="my-40 mx-auto text-center">
                    <p>You are not permitted to view this page</p>
                    <button onClick={signIn}>Sign in</button>
                </div>
            )}
        </>
    )
}

export default AddProjectForm
"use client"
import React from "react";
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from "next/navigation"

const Footer = () => {
    const { data: session } = useSession()
    const router = useRouter()

    const adminPanel = () => {
        router.push('/adminPanel')
    }

    return (
        <footer className="text-center w-full mt-auto dark:bg-black shadow-inner bg-white">
            <p>
                Copyright &copy; 2023, Jan Barczewski
            </p>
                <>
                    {session ? (
                        <div>
                            Signed in as <button onClick={adminPanel} className=" text-green-500">{session.user.name}</button> <button className=" font-bold underline" onClick={() => {signOut({callbackUrl: '/'})}}>Sign out</button>
                        </div>
                    ) : (
                        <div>
                            Admin? You can <button onClick={signIn} className="font-bold underline">Sign in</button> then
                        </div>
                    )}
                </>
        </footer>
    )
}

export default Footer
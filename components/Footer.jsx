import React from "react";
import { useSession, signIn, signOut } from "next-auth/react"

const Footer = () => {
    const { data: session } = useSession()

    return (
        <footer className="text-center w-full mt-auto dark:bg-black shadow-inner">
            <p>
                Copyright &copy; 2023, Jan Barczewski
            </p>
                <>
                    {session ? (
                        <div>
                            Signed in as <a href="/adminPanel" className=" text-green-500">{session.user.name}</a> <button className=" font-bold underline" onClick={() => {signOut({callbackUrl: '/'})}}>Sign out</button>
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
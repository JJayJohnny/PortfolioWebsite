"use client"
import React, {useState, useEffect} from "react"
import {Link} from "react-scroll/modules"
import {useTheme} from "next-themes"
import {RiMoonFill, RiSunLine} from "react-icons/ri"
import {IoMdMenu, IoMdClose, IoLogoGithub} from "react-icons/io"

const NAV_ITEMS = [
    {
        label: "Home",
        page: "home"
    },
    {
        label: "About",
        page: "about"
    },
    {
        label: "Projects",
        page: "projects"
    }
]

const Navbar = () => {
    const [navbar, setNavbar] = useState(false)
    const [mounted, setMounted] = useState(false)
    const {systemTheme, theme, setTheme} = useTheme()
    const currentTheme = theme === "system" ? systemTheme : theme

    useEffect(() => {setMounted(true)}, [])
    
    if(!mounted){
        return null
    }

    return (
        <header className={`w-full px-32 py-10 font-medium flex max-md:flex-col max-md:space-y-6 flex-row items-center justify-between shadow fixed z-50 top-0 ${currentTheme === 'dark' ? 'bg-black' : 'bg-white'}`}>
            <div className='flex flex-row justify-between max-md:w-full'>
                <h2>Logo</h2>
                <div className="md:hidden">
                    <button onClick={() => setNavbar(!navbar)}>
                        {navbar ? <IoMdClose/> : <IoMdMenu/>}
                    </button>
                </div>
            </div>
            <nav className={`flex space-x-6 ${navbar ? 'max-md:block' : 'max-md:hidden'}`}>
                {NAV_ITEMS.map((item, idx) => {
                    return <Link key={idx} to={item.page} activeClass="active" spy={true} smooth={true} offset={-150} duration={500} className="cursor-pointer group relative" onClick={() => setNavbar(!navbar)}>
                        {item.label}
                        <hr className="mx-auto left-0 w-0 h-0.5 bg-green-600 border-0 group-hover:w-full transition-all duration-300 absolute"></hr>
                    </Link>
                })}
            </nav>
            <nav className={`flex flex-row space-x-4 align-middle ${navbar ? 'max-md:block' : 'max-md:hidden'}`}>
                <a target={"_blank"} href="https://github.com/JJayJohnny" className="inline-block align-bottom" onClick={() => setNavbar(!navbar)}><IoLogoGithub size={28}/></a>
                {currentTheme === "dark" ? (
                    <button onClick={() => setTheme('light')} className="bg-slate-100 p-2 rounded-xl">
                        <RiSunLine color="black"/>
                    </button>
                ) : (
                    <button onClick={() => setTheme('dark')} className="bg-slate-100 p-2 rounded-xl">
                        <RiMoonFill/>
                    </button>
                )}
            </nav>
        </header>
    )
}

export default Navbar
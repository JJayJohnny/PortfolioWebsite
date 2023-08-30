"use client"
import React, {useState, useEffect} from "react"
import {Link as ReactLink} from "react-scroll/modules"
import {useTheme} from "next-themes"
import {IoMdMenu, IoMdClose, IoLogoGithub} from "react-icons/io"
import {motion} from 'framer-motion'
import ThemeSwitcher from "./ThemeSwitcher"

const variants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: "-100%" },
}

const phoneWidthBreakpoint = 768 //like in tailwind css md:

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
    const [navbar, setNavbar] = useState(true)
    const [mounted, setMounted] = useState(false)
    const {systemTheme, theme} = useTheme()
    const currentTheme = theme === "system" ? systemTheme : theme
    const [width, setWidth] = useState(0)

    useEffect(() => {setMounted(true)}, [])

    useEffect(()=> {
        const handleResize = () => {
            setWidth(window.innerWidth)
        }
        window.addEventListener('resize', handleResize)

        handleResize()
     }, [])
    
    if(!mounted){
        return null
    }

    return (
        <header className={`w-full px-32 py-10 font-medium flex max-md:flex-col max-md:space-y-6 flex-row items-center justify-between shadow fixed z-50 top-0 ${currentTheme === 'dark' ? 'bg-black' : 'bg-white'}`}>
            <div className='flex flex-row justify-between max-md:w-full'>
                <h2>Logo</h2>
                <div className="md:hidden">
                    <motion.button onClick={() => setNavbar(!navbar)} whileTap={{ rotate: 90 }} whileHover={{ scale: 1.2 }}>
                        {navbar ? <IoMdClose/> : <IoMdMenu/>}
                    </motion.button>
                </div>
            </div>
            <motion.nav className={`flex space-x-6 ${navbar ? 'max-md:block' : 'max-md:hidden'}`} animate={navbar || width > phoneWidthBreakpoint ? "open" : "closed"} variants={variants} initial="closed">
                {NAV_ITEMS.map((item, idx) => {
                    return <ReactLink key={idx} to={item.page} activeClass="active" spy={true} smooth={true} offset={-150} duration={500} className="cursor-pointer group relative" onClick={() => setNavbar(!navbar)}>
                        {item.label}
                        <hr className="mx-auto left-0 w-0 h-0.5 bg-green-600 border-0 group-hover:w-full transition-all duration-300 absolute"></hr>
                    </ReactLink>
                })}
            </motion.nav>
            <motion.nav className={`flex flex-row space-x-4 ${navbar ? 'max-md:block' : 'max-md:hidden'}`} animate={navbar || width > phoneWidthBreakpoint ? "open" : "closed"} variants={variants} initial="closed">
                <motion.button className="align-bottom" whileHover={{y: "-10%"}}><a target={"_blank"} href="https://github.com/JJayJohnny" rel="noopener noreferrer" onClick={() => setNavbar(!navbar)}><IoLogoGithub size={32}/></a></motion.button>
                <ThemeSwitcher/>
            </motion.nav>
        </header>
    )
}

export default Navbar
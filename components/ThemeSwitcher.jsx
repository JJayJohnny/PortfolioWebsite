import React from "react";
import {RiMoonFill, RiSunLine} from "react-icons/ri"
import {useTheme} from "next-themes"
import {motion} from 'framer-motion'


const ThemeSwitcher = () => {
    const {systemTheme, theme, setTheme} = useTheme()
    const currentTheme = theme === "system" ? systemTheme : theme

    return(
        <motion.button onClick={currentTheme === "dark" ? () => setTheme('light') : () => setTheme('dark')} className="dark:bg-slate-100 bg-black p-2 rounded-2xl" whileTap={{rotate: 360}} whileHover={{y: "-10%"}}>
            <>
                {currentTheme === "dark" ?
                    <RiSunLine color="black"/>
                :
                    <RiMoonFill color="white"/>
                }
            </>
            
        </motion.button>
    )   
}

export default ThemeSwitcher
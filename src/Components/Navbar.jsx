import { useState } from 'react'
import {MdOutlineDarkMode} from 'react-icons/md'
import {MdOutlineLightMode} from 'react-icons/md'
import {GiWorld} from 'react-icons/gi'

export default function Navbar() {

    const [isDark, setIsDark] = useState(false);
    const darkLightToggleHandler = () => {
        setIsDark(isDark => !isDark);
    }
    return (
        <nav className="bg-white flex items-center justify-between py-6 px-6 md:px-12 mb-8 shadow-md">
            <h2 className="text-lg md:text-2xl text-zinc-950 font-bold">Where in the world?</h2>
            <div className="toggle flex items-center space-x-1">
                {
                    isDark ? 
                    <MdOutlineDarkMode className='text-xl text-zinc-900'/> :
                    <MdOutlineLightMode className='text-xl text-zinc-900'/>
                }
                <span className="text-base text-zinc-900 font-bold cursor-pointer">{isDark ? "Dark Mode" : "Light Mode"}</span>
            </div>
        </nav>
    )

}
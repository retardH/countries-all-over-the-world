import { useState } from 'react'
import {MdOutlineDarkMode} from 'react-icons/md'
import {MdOutlineLightMode} from 'react-icons/md'
import {GiWorld} from 'react-icons/gi'

export default function Navbar({toggleTheme, isDark}) {
    return (
        <nav className="bg-white dark:bg-slate-800 flex items-center justify-between py-6 px-6 md:px-12 mb-8 shadow-md">
            <h2 className="text-lg md:text-2xl text-zinc-950 dark:text-white font-bold">Where in the <GiWorld className='inline mr-1 text-4xl'/>?</h2>
            <div className="toggle flex items-center space-x-1x">
                {
                    isDark ? 
                    <MdOutlineDarkMode 
                        className='text-2xl text-zinc-900 dark:text-white cursor-pointer'
                        onClick={toggleTheme}
                    /> :
                    <MdOutlineLightMode 
                        className='text-2xl text-zinc-900 dark:text-white cursor-pointer'
                        onClick={toggleTheme}
                    />
                }
                <span className="text-base text-zinc-900 dark:text-white font-bold ml-2">{isDark ? "Dark Mode" : "Light Mode"}</span>
            </div>
        </nav>
    )

}
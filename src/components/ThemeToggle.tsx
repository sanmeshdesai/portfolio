"use client"

import { Moon, Sun } from 'lucide-react'
import React, { useEffect, useState } from 'react'

const ThemeToggle = () => {

    const [isDark, setIsDark] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const saved = localStorage.getItem('theme')
        console.log(saved)
        if (saved === 'dark') {
            document.documentElement.classList.add('dark');
            setIsDark(true)
        }
        setMounted(true)
    },[])

    if (!mounted) return null

    const toggleTheme = () =>{
      const root = document.documentElement
      const newTheme = !isDark

      root.classList.toggle('dark',newTheme)
      localStorage.setItem('theme', newTheme ? 'dark' : 'light')
      setIsDark(newTheme)
    }

  return (
    <button onClick={toggleTheme} className='p-1.5 sm:p-2 md:p-2.5  rounded-full border border-foreground/20 hover:border-foreground/40 transition duration-200'>
      {isDark ? 
      <Sun className='w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6'/> : 
      <Moon className='w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6'/>}
      
    </button>
  )
}

export default ThemeToggle

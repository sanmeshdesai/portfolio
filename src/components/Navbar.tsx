"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import ThemeToggle from './ThemeToggle'

const Navbar = () => {

  const pathname = usePathname()

  const linkclass = (path: string) => 
    `relative ${
      pathname === path
        ? "text-foreground after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-accent"
        : "text-foreground/70 hover:text-foreground/80 transition"
    }`

  return (
    <nav className='fixed top-5 left-1/2 w-[90%] max-w-7xl -translate-x-1/2  h-16 flex items-center justify-between px-6 rounded-xl backdrop-blur-md z-50'
    style={{ background: 'var(--nav-bg)', border: '1px solid var(--nav-border)', boxShadow: 'var(--nav-shadow)' }}>

        <div className='flex flex-1 gap-4 text-base sm:gap-8 justify-center  font-bold sm:text-lg'>
            <Link className={linkclass('/')} href='/'>Home</Link>
            <Link className={linkclass('/projects')}  href='/projects'>Projects</Link> 
            <Link className={linkclass('/about')} href='/about'>About</Link>
            <Link className={linkclass('/contact')} href='/contact'>Contact</Link>
        </div>
        <div className='ml-auto'>
          <ThemeToggle/>
        </div>
        
    </nav>
  )
}

export default Navbar

import React, { useState, useEffect } from 'react'
import { Link,NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react';

const Navbar = ({open, setOpen}) => {

    

    

  return (
    <nav className="h-[60px] relative w-full px-6 md:px-16 lg:px-24 xl:px-32 flex items-center justify-between z-30 bg-transparent border-b border-white/10
      shadow-md ">
      <NavLink to='/' className='text-2xl'>Sanmesh</NavLink>
    <ul className="md:flex font-medium text-lg hidden items-center gap-10">
        <li><NavLink className={({ isActive }) =>
    `transition hover:text-black/70
     ${isActive ? "text-black font-semibold border-b-2 border-black" : ""}`
  } to='/'>Home</NavLink></li>
        <li><NavLink className={({ isActive }) =>
    `transition hover:text-black/70
     ${isActive ? "text-black font-semibold border-b-2 border-black" : ""}`
  } to='/about'>About</NavLink></li>
        <li><NavLink className={({ isActive }) =>
    `transition hover:text-black/70
     ${isActive ? "text-black font-semibold border-b-2 border-black" : ""}`
  } to='/projects'>Portfolio</NavLink></li>
        <li><NavLink className={({ isActive }) =>
    `transition hover:text-black/70
     ${isActive ? "text-black font-semibold border-b-2 border-black" : ""}`
  } to='/contact'>Pricing</NavLink></li>
    </ul>

    {/* mobile menu */}

    <button onClick={() => setOpen(!open)}
        className="md:hidden text-xl focus:outline-none"
        aria-label="Toggle menu">
       {!open ?  <Menu size={30} /> : <X size={30} /> }
    </button>

    
      <ul className={`fixed top-[60px] right-0 h-full text-lg w-full 
      flex flex-col items-center gap-2 py-4 md:hidden font-medium
      text-lg transition-transform duration-500 ease-in-out
      ${open ? "translate-x-0 " : "translate-x-full "}
      `}>
        <li><Link onClick={() => setOpen(false)} className="hover:text-black/70 transition" to='/'>Home</Link></li>
        <li><Link onClick={() => setOpen(false)} className="hover:text-black/70 transition" to='/about'>About</Link></li>
        <li><Link onClick={() => setOpen(false)} className="hover:text-black/70 transition" to='/'>Portfolio</Link></li>
        <li><Link onClick={() => setOpen(false)} className="hover:text-black/70 transition" to='/'>Pricing</Link></li>
      </ul>
    
    


    </nav>
  )
}

export default Navbar
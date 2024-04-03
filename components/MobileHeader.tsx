"use client";
import { navLinks, socialLinks } from '@/constants';
import { X, Menu, Phone } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'
import NavLink from './NavLink';



const MobileHeader = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
  return (
    <div className='tablet:hidden'>
        <button className='text-gray-700 hover:text-purple transition-colors'
            onClick={toggleMenu}>
            <Menu />
        </button>
        <div className={`w-full h-full flex flex-col bg-peach-600 fixed top-0 left-0 z-50 transition-all duration-300 
        ease-in-out transform
        ${isOpen ?"translate-x-0":"-translate-x-full"}
        `}>

            <div className='flex w-full items-center justify-between h-20 max-width border-b border-peach '>
                <Link href={"/"}>
                    <h5 className='text-purple text-xl font-semibold'>Iliass Ben.</h5>
                </Link>
                <button className='text-gray-700 hover:text-purple transition-colors'
                    onClick={toggleMenu}>
                    
                    <X />
                    
                </button>
            </div>

            <nav className='flex flex-col justify-center flex-1 items-center gap-10'>
            <ul className='flex items-center flex-col gap-5'>
               {navLinks.map((link, index) => (
                    <li key={index}>
                        <NavLink href={link.url} label={link.label} 
                        className='text-3xl'
                        />
                    </li> 
                ))
               }
            </ul>
            <Link href={"/contact"} className='btn btn-primary'>
                <Phone size={24}/>
                Contact me 
            </Link>
        </nav>

        <div className='w-full h-20 flex items-center justify-between max-width border-t border-peach'>
            {socialLinks.map((link, index) => (
                <a 
                key={index}
                href={link.url} 
                className='text-grey-700 hover:text-purple '>
                    {link.label}
                
                </a>
                ))}
        </div>

        </div>
    </div>
    
  )
}

export default MobileHeader
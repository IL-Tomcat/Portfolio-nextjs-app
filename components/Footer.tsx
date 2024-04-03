import { contactDetails, navLinks, socialLinks } from '@/constants'
import Link from 'next/link'
import React from 'react'
import NavLink from './NavLink'

const Footer = () => {
  return (
    <footer className='py-10 bg-black border-t border-purple max-width'>
        <div className='flex items-center justify-between'>
            <Link href={"/"} className='text-white text-xl font-semibold'>
                Iliass Ben.
            </Link>
            <nav className='flex gap-12 max-tablet:hidden'>
                <ul className='flex text-white items-center gap-10'>
                    {navLinks.map((link, index) => (
                        <li key={index} >
                            <NavLink className="text-white" href={link.url} label={link.label} />
                        </li>      
                    ))}
                </ul>
            </nav>
            <div className='flex gap-3'>
                {socialLinks.map((link, index) =>(
                    <a href={link.url} key={index} className='w-10 h-10 pt-2 bg-purple text-white flex item-center justify-center rounded'>
                        <link.icon strokeWidth={0} fill='currentColor'/>
                    </a>
                ))
                }
            </div>
        </div>
        <div className='w-max border border-peach p-5 mx-auto flex gap-5 tablet:gap-10 flex-col tablet:flex-row items-center 
        rounded-lg mt-5'>
            {contactDetails.map((detail, index) =>(
                <div key={index} className='flex gap-3 items-center text-purple'>
                    <detail.icon size={20} />
                    <p className='text-white '>{detail.text}</p>
                </div>
            ))}
        </div>
        <p className='mt-8 text-white text-center text-sm'>
            Copyright © { new Date().getFullYear()} Iliass Benmessaoud. All right reserved
        </p>
    </footer>
  )
}

export default Footer
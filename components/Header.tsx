import Link from 'next/link'
import React from 'react'
import NavLink from './NavLink'
import { Phone } from 'lucide-react'
import MobileHeader from './MobileHeader'
import { navLinks } from '@/constants'

const Header = () => {
  return (
    <header className='flex items-center justify-between h-20 max-width border-b border-peach'>
        <Link href={"/"}>
            <h5 className='text-purple text-xl font-semibold'>Iliass Ben.</h5>
        </Link>
        <nav className='flex items-center gap-12 max-tablet:hidden'>
            <ul className='flex items-center gap-8'>
               {navLinks.map((link, index) => (
                    <li key={index}>
                        <NavLink href={link.url} label={link.label} />
                    </li> 
                ))
               }
            </ul>
            <Link href={"/contact"} className='btn btn-primary'>
                <Phone size={24}/>
                Contact me 
            </Link>
        </nav>
        <MobileHeader/>
    </header>
  )
}

export default Header
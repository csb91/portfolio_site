import { FC } from "react";
import Link from "next/link";
import { Menu } from "react-feather";
import { linkInfo } from "@/interfaces";
import NavbarLinks from "./NavbarLinks";


const links: linkInfo[] = [
  {label: 'About', link: '/about'},
  {label: 'Experience', link: '/experience'},
  {label: 'Projects', link: '/projects'},
  {label: 'Contact', link: '/contact'}
]

const Navbar = () => {
  return (
    <nav className='container purple-orange bg-clip-text text-transparent text-lg h-10 mx-auto px-4 flex items-center justify-between max-w-6xl'>
      <div className=''>
        <Link href='/'>
          CB Logo
        </Link>
      </div>
      <div className='hidden sm:flex'>
        <ul className='flex w-96 justify-evenly '>
          {links.map((link , index) => (
            <NavbarLinks key={index} link={link} />
          ))}
        </ul>
      </div>
      <div className='outline 1px sm:hidden'>
        <svg width="24" height="24" viewBox="0 0 24 24">
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#F472B6" />
              <stop offset="50%" stopColor="#7C3AED" />
              <stop offset="100%" stopColor="#3B82F6" />
            </linearGradient>
          </defs>
          <rect x="0" y="0" width="24" height="24" rx="4" ry="4" fill="url(#gradient)" />
          <Menu className='text-white text-24' />
        </svg>
      </div>
    </nav>
  )
}

export default Navbar;
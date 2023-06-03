import Link from "next/link";
import { Menu } from "react-feather";
import { linkInfo } from "@/lib/interfaces";
import NavbarLinks from "./NavbarLinks";


const links: linkInfo[] = [
  {label: 'About', link: '/about'},
  {label: 'Experience', link: '/experience'},
  {label: 'Projects', link: '/projects'},
  {label: 'Contact', link: '/contact'}
]

const Navbar = () => {
  return (
    <div className='container purple-orange bg-clip-text text-transparent h-10 mx-auto pl-4 flex items-center justify-between max-w-6xl'>
      <div className='text-xl'>
        <Link href='/'>
          CB Logo
        </Link>
      </div>
      <div className='hidden sm:flex'>
        <nav>
          <ul className='flex w-96 justify-evenly'>
            {links.map((link , index) => (
              <NavbarLinks key={index} link={link} />
            ))}
          </ul>
        </nav>
      </div>
      <div className='outline 1px sm:hidden mr-4'>
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
    </div>
  )
}

export default Navbar;
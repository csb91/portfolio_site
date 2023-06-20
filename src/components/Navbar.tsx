'use client'

import Link from "next/link";
import Image from "next/image";
import { linkInfo, HamburgerMenuProps } from "@/lib/interfaces";
import NavbarLinks from "./NavbarLinks";
import HamburgerMenu from "./HamburgerMenu";
import { useState } from "react";
import MW from '../../public/milkyway-favicon.ico'
import clsx from "clsx";
import { MouseEvent } from "react";


const links: linkInfo[] = [
  {label: 'About', link: '/about'},
  {label: 'Experience', link: '/experience'},
  {label: 'Projects', link: '/projects'},
  {label: 'Contact', link: '/contact'}
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    setIsOpen(false);
  }

  return (
    <div className={clsx('container purple-orange bg-clip-text text-transparent  mx-auto pl-4 flex items-center justify-between', isOpen && 'flex-col flex-grow')}>
      <div className='flex flex-row flex-grow justify-between w-full items-center'>
        <div className='flex flex-row justify-between'>
          <Image
            src={MW}
            height={20}
            width={20}
            className='mr-2'
            alt='Milky Way favicon'
          />
          <Link
            href='/'
            onClick={handleClick}
          >
            <div className='text-sm font-bold hover:text-[#EE756A]'>
              Carter Brooks
            </div>
          </Link>
        </div>
        <div className='outline 1px sm:hidden mr-4 z-10'>
          <HamburgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </div>
      <div className={clsx('flex', !isOpen && 'hidden sm:block', isOpen && 'flex-col')}>
        <nav>
          <ul className={clsx('flex w-96 justify-evenly', isOpen && 'flex-col mt-8 sm:mt-0')}>
            {links.map((link , index) => (
              <NavbarLinks key={index} link={link} setIsOpen={setIsOpen} />
            ))}
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Navbar;
'use client'

import { FC } from "react";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { NavbarLinksProps } from "@/lib/interfaces";


const NavbarLinks: FC<NavbarLinksProps> = ({ link, setIsOpen }) => {
  const pathname = usePathname();
  let isActive = false;

  if (pathname === link.link) {
    isActive = true;
  }

  const handleClick = (e) => {
    e.preventDefault();
    setIsOpen(false);
  }

  return (
    <li className={clsx("hover:text-[#756AEE] py-2 px-1.5 sm:p-0", isActive && 'bg-transparent text-[#756AEE]')}>
      <button className='underline' onClick={handleClick}>
        <Link href={link.link}>
          {link.label}
        </Link>
      </button>
    </li>
  )
}

export default NavbarLinks;
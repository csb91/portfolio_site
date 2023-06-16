'use client'

import { FC } from "react";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { NavbarLinksProps } from "@/lib/interfaces";


const NavbarLinks: FC<NavbarLinksProps> = ({ link }) => {
  const pathname = usePathname();
  let isActive = false;

  if (pathname === link.link) {
    isActive = true;
  }

  return (
    <li className={clsx("hover:text-[#756AEE]", isActive && 'bg-transparent text-[#756AEE] underline')}>
      <Link href={link.link}>
        {link.label}
      </Link>
    </li>
  )
}

export default NavbarLinks;
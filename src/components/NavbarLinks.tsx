'use client';
import { FC } from "react";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { NavbarLinksProps } from "@/interfaces";


const NavbarLinks: FC<NavbarLinksProps> = ({ link }) => {
  const pathname = usePathname();
  let isActive = false;

  if (pathname === link.link) {
    isActive = true;
  }
  console.log(pathname, link.link)
  console.log(isActive)

  return (
    <li className={clsx("hover:bg-transparent hover:shadow-lg hover:blur hover:text-purple-500", isActive && 'bg-transparent shadow-lg blur text-purple-500')}>
      <Link href={link.link}>
        {link.label}
      </Link>
    </li>
  )
}

export default NavbarLinks;
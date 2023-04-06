'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavbarLinks = ({ link }) => {
  const pathname = usePathname();

  return (
    <li>
      <Link href={link.link}>
        {link.label}
      </Link>
    </li>
  )
}

export default NavbarLinks;
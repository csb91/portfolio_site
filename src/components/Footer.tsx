import Link from "next/link";
import { Twitter, GitHub, Linkedin } from "react-feather";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  const isFooter = true;

  return (
    <footer className='flex items-center h-40 w-full border-t inset-x-0 bottom-0 z-10 dark:bg-black dark:border-black bg-white'>
      <div className='container text-sm text-[#756AEE] flex items-center justify-between mx-auto px-4 max-w-6xl'>
        <div>
          Carter Brooks | 2023
        </div>
        <SocialLinks classNameContainer='w-36 mr-1' classNameLinks='hover:text-[#EE756A]'/>
      </div>
    </footer>
  )
}

export default Footer;
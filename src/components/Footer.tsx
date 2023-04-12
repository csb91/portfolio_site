import Link from "next/link";
import { Twitter, GitHub, Linkedin} from "react-feather";

const Footer = () => {
  return (
    <footer className='flex items-center h-40 w-full border-t inset-x-0 bottom-0 z-10 dark:bg-black dark:border-black bg-white'>
      <div className='container text-sm text-purple-500 flex items-center justify-between mx-auto px-4 max-w-6xl'>
        <div>
          Carter Brooks | 2023
        </div>
        <div className='flex justify-evenly w-36 mr-1'>
          <Link href='https://twitter.com/CarterBrooksDev' target='_blank' rel='noreferrer'>
            <Twitter className='hover:text-orange-500'/>
          </Link>
          <Link href='https://github.com/csb91' target='_blank' rel='noreferrer'>
            <GitHub className='hover:text-orange-500'/>
          </Link>
          <Link href='https://www.linkedin.com/in/carterbrooks91/' target='_blank' rel='noreferrer'>
            <Linkedin className='hover:text-orange-500'/>
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
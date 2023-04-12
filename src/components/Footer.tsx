import { Twitter, GitHub, Linkedin} from "react-feather";

export default function Footer() {
  return (
    <footer className='flex items-center h-40 w-full border-t inset-x-0 bottom-0 dark:bg-black dark:border-black bg-white drop-shadow-lg'>
      <div className='container flex items-center justify-between mx-auto px-4 max-w-6xl'>
      <div>Designed & Built by Carter Brooks 2023</div>
      <div className='flex justify-evenly w-36'>
        <Twitter />
        <GitHub />
        <Linkedin />
      </div>
      </div>
    </footer>
  )
}


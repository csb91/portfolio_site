import Navbar from './Navbar';

const Header = () => {
  return (
    <header className='flex flex-grow items-center fixed border-b w-full py-4 sm:py-0 sm:h-20 z-40 drop-shadow-lg bg-white dark:bg-black dark:border-black'>
      <Navbar />
    </header>
  )
}

export default Header;
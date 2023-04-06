import Navbar from './Navbar';

const Header = () => {
  return (
    <header className='flex items-center fixed border-b w-full h-20 z-11 drop-shadow-lg bg-white dark:bg-black dark:border-black'>
      <Navbar />
    </header>
  )
}

export default Header;
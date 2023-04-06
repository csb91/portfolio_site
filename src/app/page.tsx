import Link from 'next/link';
import Image from 'next/image';
import profilePic from '../../public/profile-pic.png'
import '../styles/globals.css';

export default async function Home() {

  return (
    <div>
      <div className='purple-orange bg-clip-text text-transparent'>
        <div><h1 className='text-6xl'>Hi, my name is Carter Brooks!</h1></div>
        <div>
          <Link href='/projects'>Checkout My Projects</Link>
        </div>
        <div>
          <Link href='/contact'>Contact Me</Link>
        </div>
        <div className='flex justify-center'>
          <Image
          src={profilePic}
          alt='Carter Brooks Profile Picture'
          priority
          />
        </div>
      </div>
    </div>
  )
}
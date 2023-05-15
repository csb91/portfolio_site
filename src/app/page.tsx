import Link from 'next/link';
import Image from 'next/image';
import profilePic from '../../public/profile-pic.png'


export default async function Home() {

  return (
    <div className='justify-center'>
      <div className='container flex flex-col purple-orange bg-clip-text text-transparent'>
        <div><h1 className='text-6xl'>Hi, my name is Carter Brooks!</h1></div>
        <div className='flex justify-center'>
          <Link href='/projects'>Checkout My Projects</Link>
        </div>
        <div className='flex justify-center'>
          <Link href='/contact'>Contact Me</Link>
        </div>
        <div className='flex justify-center'>
          <Image
          src={profilePic}
          alt='Carter Brooks Profile Picture'
          priority={true}
          className='w-60 h-60'
          />
        </div>
      </div>
    </div>
  )
}
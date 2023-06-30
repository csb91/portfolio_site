import Link from 'next/link';
import Image from 'next/image';
import profilePic from '../../public/profile_pic.png';
import { ChevronRight, ChevronLeft } from 'react-feather';

export const metadata = {
  openGraph: {
    title: 'Carter Brooks',
    description: 'Carter Brooks Software Developer Portfolio',
    url: 'https://carterbrooks.dev',
    siteName: 'Carter Brooks',
    images: [
      {
        url: 'https://carterbrooks.dev/og.png',
        width: 1920,
        height: 1280,
      },
    ],
    locale: 'en-US',
    type: 'website'
  },
}

export default async function Home() {
  return (
    <div className='container flex flex-col-reverse justify-end mb-20 sm:mb-0 lg:flex-row flex-grow mx-auto lg:mt-40 purple-orange bg-clip-text text-transparent lg:justify-evenly max-w-6xl'>
      <div className='flex flex-col px-2 mt-2'>
        <div className='flex justify-center sm:justify-start sm:text-left'>
          <h1 className='text-3xl pb-2 purple-orange bg-clip-text text-transparent'>
            Hi, my name is
          </h1>
        </div>
        <div className='flex justify-center sm:justify-start sm:text-left'>
          <h2 className='text-6xl pb-2 purple-orange bg-clip-text text-transparent'>
            Carter Brooks.
          </h2>
        </div>
        <div className='flex justify-center text-center sm:justify-start sm:text-left'>
          <h3 className='text-6xl pb-2 purple-orange bg-clip-text text-transparent'>
            I&apos;m a Software Engineer.
          </h3>
        </div>
        <div className='flex justify-center text-center sm:justify-start sm:text-left'>
          <p className='text-lg pb-2 purple-orange bg-clip-text text-transparent max-w-2xl'>
            I&apos;m passionate about building innovative web applications and creating seamless user experiences.
            With a strong foundation in both front-end and back-end development,
            I enjoy tackling complex problems and turning them into elegant solutions.
          </p>
        </div >
        <div className='flex flex-row justify-center text-center font-bold sm:justify-start sm:text-left hover:text-[#EE756A]'>
          <ChevronRight className='text-black dark:text-[#756AEE]'/>
          <Link href='/projects'>Checkout My Projects</Link>
          <ChevronLeft className='text-black dark:text-[#756AEE]'/>
        </div>
        <div className='flex flex-row justify-center text-center font-bold sm:justify-start sm:text-left hover:text-[#EE756A]'>
          <ChevronRight className='text-black dark:text-[#756AEE]'/>
          <Link href='/contact'>Contact Me</Link>
          <ChevronLeft className='text-black dark:text-[#756AEE]'/>
        </div>
      </div>
      <div className='flex justify-center'>
        <Image
        src={profilePic}
        alt='Carter Brooks Profile Picture'
        priority={true}
        className='w-60 h-60 sm:w-80 sm:h-80'
        />
      </div>
    </div>
  )
}
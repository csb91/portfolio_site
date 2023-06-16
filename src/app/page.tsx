import Link from 'next/link';
import Image from 'next/image';
import profilePic from '../../public/profile_pic.png'
import { ChevronRight } from 'react-feather';


export default async function Home() {

  return (
    <div className='container flex flex-col-reverse justify-end lg:flex-row flex-grow mx-auto lg:mt-20 purple-orange bg-clip-text text-transparent lg:justify-evenly max-w-6xl'>
      <div className='flex flex-col'>
        <div>
          <h1 className='text-3xl pb-2 purple-orange bg-clip-text text-transparent'>
            Hi, my name is
          </h1>
        </div>
        <div>
          <h2 className='text-6xl pb-2 purple-orange bg-clip-text text-transparent'>
            Carter Brooks.
          </h2>
        </div>
        <div>
          <h3 className='text-6xl pb-2 purple-orange bg-clip-text text-transparent'>
            I&apos;m a Full-Stack Engineer.
          </h3>
        </div>
        <div>
          <p className='text-lg pb-2 purple-orange bg-clip-text text-transparent max-w-2xl'>
            I&apos;m passionate about building innovative web applications and creating seamless user experiences.
            With a strong foundation in both front-end and back-end development,
            I enjoy tackling complex problems and turning them into elegant solutions.
          </p>
        </div>
        <div className='flex'>
          <ChevronRight className='text-black'/>
          <Link href='/projects'>Checkout My Projects</Link>
        </div>
        <div className='flex flex-row'>
          <ChevronRight className='text-black'/>
          <Link href='/contact'>Contact Me</Link>
        </div>
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
  )
}
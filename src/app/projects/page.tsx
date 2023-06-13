import Link from 'next/link';
import Image from 'next/image';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Swan from '../../../public/Swan.gif'
import BlueOcean from '../../../public/blue_ocean.png'
import MVP from '../../../public/mvp_project.png'

export default async function Project() {

  return (
    <div>
      <h1 className='text-4xl text-center'>
        Projects
      </h1>
      <h2 className='text-2xl text-center mt-2 px-4'>
       Technologies Currently Used.
      </h2>
      <Skills />
      <h2 className='text-2xl text-center mt-2 px-4'>
       Check Out Some of My Recent Work.
      </h2>
      <Projects />
      <div className='mt-10 mb-4'>
        <Image
          src={Swan}
          height={500}
          width={500}
          alt='Swan Project Walkthrough gif'
          />
      </div>
      <div className='mt-2 mb-4'>
        <Image
          src={MVP}
          height={500}
          width={500}
          alt='Swan Project Walkthrough gif'
          className=''
          />
      </div>
      <div className='mt-2 mb-4'>
        <Image
          src={BlueOcean}
          height={500}
          width={500}
          alt='Swan Project Walkthrough gif'
          />
      </div>
    </div>
  )
}
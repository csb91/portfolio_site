import Link from 'next/link';
import Image from 'next/image';
import Swan from '../../../public/Swan.gif'
import TwitterOpenAI from '../../../public/gpt3-input.png'
import BlueOcean from '../../../public/blue_ocean.png'

export default async function Project() {

  return (
    <div>
      <h1 className='text-4xl text-center'>
        Projects
      </h1>
      <h2 className='text-2xl text-center mt-2 px-4 md:px-64'>
       Check Out Some of My Recent Work.
      </h2>
      <h2 className='text-2xl text-center mt-2 px-4 md:px-64'>
       Technologies I Currently Use.
      </h2>
      <div className='mt-2 mb-4'>
        <Image
          src={Swan}
          height={600}
          width={600}
          alt='Swan Project Walkthrough gif'
          />
      </div>
      <div className='mt-2 mb-4'>
        <Image
          src={TwitterOpenAI}
          height={600}
          width={600}
          alt='Swan Project Walkthrough gif'
          />
      </div>
      <div className='mt-2 mb-4'>
        <Image
          src={BlueOcean}
          height={600}
          width={600}
          alt='Swan Project Walkthrough gif'
          />
      </div>
    </div>
  )
}
import Image from 'next/image';
import aboutMePic from '../../../public/IMG_5335.jpg'

export default function About() {
  return (
    <div>
      <h1 className='text-4xl text-center'>
        About Me
      </h1>
      <h2 className='text-2xl text-center mt-2'>
        I&apos;m a Full-Stack Software Engineer Focused on Building Modern Web Applications.
      </h2>
      <div className='container flex flex-col-reverse md:flex-row justify-between mx-auto max-w-5xl mt-6 border'>
        <div className='md:w-1/2 px-10'>
            <p className='mb-4'>
            As a former petroleum engineer, I bring a unique perspective to the software engineering field.
            My background in the oil and gas industry has given me a solid understanding of complex systems
            and the ability to think outside the box. My passion for technology and problem-solving led me
            to transition into software engineering, where I am now able to apply my skills to create innovative
            solutions.
            </p>
            <p className='mb-2'>
            I am a strong collaborator and communicator, and have experience working with global teams to
            deliver projects on time and within budget. I am always looking for new opportunities to learn and grow,
            and am excited to continue building my career in the tech industry.
            </p>
            <p>
            When I&apos;m not coding, in my free time I enjoy traveling with my wife, Crystal, finding new music,
            playing video games with my friends, running or spending time with my family.
            </p>
        </div>
        <div className='flex items-center p-2'>
          <Image
          src={aboutMePic}
          width='600'
          height='400'
          alt='Carter Brooks Profile Picture'
          priority
          className='shadow-lg shadow-[#EE756A] rounded-md'
          />
        </div>
      </div>
      <div className='mt-10'>
        Technologies/Skills?
      </div>
      <div className='mt-10'>
        Spotify Recent Played?
      </div>
    </div>
  )
}
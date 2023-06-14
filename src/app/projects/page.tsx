import Skills from '@/components/Skills';
import Projects from '@/components/Projects';

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
    </div>
  )
}
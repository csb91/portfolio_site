import Skills from '@/components/Skills';
import Projects from '@/components/Projects';

export const metadata = {
  title: 'Projects',
  openGraph: {
    title: 'Projects | Carter Brooks',
    description: 'Carter Brooks Software Developer Projects Page',
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


export default async function Project() {
  return (
    <div>
      <h1 className='text-4xl text-center purple-orange bg-clip-text text-transparent'>
        Projects
      </h1>
      <h2 className='text-2xl text-center mt-2 px-4 purple-orange bg-clip-text text-transparent'>
       Technologies Currently Used.
      </h2>
      <Skills />
      <h2 className='text-2xl text-center mt-2 px-4 purple-orange bg-clip-text text-transparent'>
       Check Out Some of My Recent Work.
      </h2>
      <Projects />
    </div>
  )
}
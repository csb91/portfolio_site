import Link from "next/link";
import WorkExperience from "@/components/WorkExperience";

export const metadata = {
  title: 'Experience',
  openGraph: {
    title: 'Experience | Carter Brooks',
    description: 'Carter Brooks Software Developer Experience Page',
    url: 'https://carterbrooks.dev',
    siteName: 'Carter Brooks',
    images: [
      {
        url: 'https://carterbrooks.dev/opengraph-image',
        width: 1920,
        height: 1280,
      },
    ],
    locale: 'en-US',
    type: 'website'
  },
}

export default function Experience() {
  return (
    <div className='flex-col sm:flex-grow px-4 sm:px-0'>
      <h1 className='text-4xl text-center purple-orange bg-clip-text text-transparent'>
        Experience
      </h1>
      <div className='container flex justify-center mt-2'>
        <Link
          href="/files/Carter_Brooks_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          aria-label='Carter Brooks Resume PDF Link'
        >
          <button type='button' className='shadow-purple-blur-2 border-2 rounded-md mt-4 h-16 w-40 bg-white hover:border-[#EE756A] hover:shadow-[#EE756A] dark:bg-zinc-800 dark:text-white'>
            Resume
          </button>
        </Link>
      </div>
      <WorkExperience />
    </div>
  )
}
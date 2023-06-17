import Link from "next/link"
import Image from "next/image"
import WorkExperience from "@/components/WorkExperience"
//import Resume from '../../files/Carter_Brooks_Resume.pdf'


export default function Experience() {
  return (
    <div className='flex-col sm:flex-grow px-4 sm:px-0'>
      <h1 className='text-4xl text-center'>
        Experience
      </h1>
      <div className='container flex justify-center mt-2'>
        <Link
          href="/files/Carter_Brooks_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          aria-label='Carter Brooks Resume PDF Link'
        >
          <button className='shadow-purple-blur-2 border-2 rounded-md mt-4 h-16 w-40 bg-white hover:border-[#EE756A] hover:shadow-[#EE756A]'>
            Resume
          </button>
        </Link>
      </div>
      <WorkExperience />
    </div>
  )
}
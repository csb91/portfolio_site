import Image from "next/image";
import Link from "next/link";
import Swan from '../../public/Swan.gif'
import BlueOcean from '../../public/blue_ocean.png'
import MVP from '../../public/MVP_Project.png'
import { GitHub } from "react-feather";
import clsx from "clsx";
import { ProjectContainerProps } from "@/lib/interfaces";
import { Suspense } from 'react'

const ProjectContainer = ({ title, description, tech, github, image, index }: ProjectContainerProps) => {
  return (
    <div className={clsx('container flex justify-between items-center mt-10 flex-col px-4 dark:text-white',
      index % 2 === 0 && 'md:flex-row',
      index % 2 === 1 && 'md:flex-row-reverse')}
    >
      <div className='sm:hover:scale-125 sm:hover:transition-transform sm:ease-in-out duration-300 delay-150'>
        <Suspense fallback={<p>Loading feed...</p>}>
        <Image
          src={image === 'Swan' ? Swan : image === 'BlueOcean' ? BlueOcean : image === 'MVP' ? MVP : ''}
          width={500}
          height={500}
          alt={`${image} Project Image`}
          className='border-2 border-grey-500 shadow-xl rounded-md'
          priority={title === 'Swan'}
        />
        </Suspense>
      </div>
      <div className={clsx('container flex flex-col justify-center items-center max-w-xl',
          index % 2 === 0 && 'md:pl-20',
          index % 2 === 1 && 'md:pr-20')}>
        <h3 className='text-xl font-bold underline text-[#EE756A] mb-4 mt-1'>
          {title}
        </h3>
        <div className={clsx('container flex justify-center mb-2')}>
          <p className='text-justify'>
            {description}
          </p>
        </div>
        <div className='text-sm text-center text-[#EE756A] font-bold mb-2'>
          {tech}
        </div>
        <div>
          <Link
            href={github}
            target='_blank'
            rel='noopener noreferrer'
            aria-label={`${title} github repo url`}
            className='hover:text-[#EE756A]'
          >
            <GitHub />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProjectContainer;
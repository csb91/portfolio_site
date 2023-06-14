import Image from "next/image";
import Link from "next/link";
import Swan from '../../public/Swan.gif'
import BlueOcean from '../../public/blue_ocean.png'
import MVP from '../../public/mvp_project.png'
import { GitHub } from "react-feather";
import clsx from "clsx";

const ProjectContainer = ({ title, description, tech, github, image, index }) => {
  return (
    <div className={clsx('container flex justify-between mt-10 flex-col', index % 2 === 0 && 'md:flex-row', index % 2 === 1 && 'md:flex-row-reverse')}>
      <div>
        <Image
          src={image === 'Swan' ? Swan : image === 'BlueOcean' ? BlueOcean : image === 'MVP' ? MVP : ''}
          width={500}
          height={500}
          alt={`${image} Project Image`}
          className='border-2 border-grey-500 shadow-xl rounded-md'
        />
      </div>
      <div className='container flex flex-col justify-center items-center max-w-xl'>
        <h3 className='text-lg font-bold mb-6'>
          {title}
        </h3>
        <div className='container flex justify-center mb-2'>
          <p className='text-sm'>
            {description}
          </p>
        </div>
        <div className='mb-2'>
          {tech}
        </div>
        <div>
          <Link
            href={github}
            target='_blank'
            rel='noopener noreferrer'
            aria-label={`${title} github repo url`}
            className='hover:text-cyan-500'
          >
            <GitHub />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProjectContainer;
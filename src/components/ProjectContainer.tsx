import Image from "next/image";
import Link from "next/link";
import Swan from '../../public/Swan.gif'
import BlueOcean from '../../public/blue_ocean.png'
import MVP from '../../public/mvp_project.png'
import clsx from "clsx";

const ProjectContainer = ({ title, description, tech, github, image, index }) => {
  return (
    <div className={clsx('container flex mt-6', index % 2 === 0 && 'flex-row', index % 2 === 1 && 'flex-row-reverse')}>
      <div>
        <Image
          src={image === 'Swan' ? Swan : image === 'BlueOcean' ? BlueOcean : image === 'MVP' ? MVP : ''}
          width={500}
          height={500}
          alt={`${image} Project Image`}
        />
      </div>
      <div className='w-1/4'>
        {title}
        {description}
        {tech}
      </div>
    </div>
  )
}

export default ProjectContainer;
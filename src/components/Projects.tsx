import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import Swan from '../../../public/Swan.gif'
import BlueOcean from '../../../public/blue_ocean.png'
import MVP from '../../../public/mvp_project.png'
import { project } from "@/lib/interfaces";

const projectSpotlight: project[] = [
  {
    title: 'Swan E-commerce',
    description: '',
    tech: '',
    github: 'https://github.com/hr-fec-hyacinth/fec'
  },
  {
    title: 'OpenAI + Twitter',
    description: '',
    tech: '',
    github: 'https://github.com/csb91/openai-tweet-blog'
  },
  {
    title: 'Job Pursuit',
    description: '',
    tech: '',
    github: 'https://github.com/Lake-Natron/Pursuit'
  }
]

const Projects = () => {
  return (
    <div className=''>
      {projectSpotlight.map((project, index) => (
        <div className='' key={index}>
          {project.title}
        </div>
      ))}
    </div>
  )
}

export default Projects;
import ProjectContainer from "./ProjectContainer";
import { project } from "@/lib/interfaces";

const projectSpotlight: project[] = [
  {
    title: 'Swan E-commerce',
    description:
      `A modern and user-friendly online shopping platform, designed to provide a seamless shopping experience through intuitive navigation.
      Features that were implemented to improve the shopping experience were the ability to explore related products,
      create custom outfits for purchase, and access customer reviews and a comprehensive Q&A section for detailed information about the products.`,
    tech: 'React, Tailwind CSS, Express, Webpack, AWS (EC2)',
    github: 'https://github.com/hr-fec-hyacinth/fec',
    image: 'Swan'
  },
  {
    title: 'OpenAI + Twitter',
    description:
      `A Twitter management tool with content generation through OpenAI API.
      Empowers users to organize and schedule tweets according to their preferences.
      Features include storing potential tweets, choosing optimal publishing timing, and easy tracking and management of sent tweets.
      Provides flexibility to delete tweets from Twitter and the tool's internal database.`,
    tech: 'MongoDB, Express, React, NodeJS, MUI, Twitter API, OpenAI API',
    github: 'https://github.com/csb91/openai-tweet-blog',
    image: 'MVP'
  },
  {
    title: 'Job Pursuit',
    description:
      `An employment website designed for both job seekers and employers.
      Employers can easily post job openings, review job applications, and schedule meetings with applicants using their personal calendars.
      Job seekers have access to a comprehensive job search, the ability to apply to job postings, upload their resume, and manage their personal calendar.`,
    tech: 'NextJS, PostgreSQL, Express, NodeJS, Prisma, AWS (EC2)',
    github: 'https://github.com/Lake-Natron/Pursuit',
    image: 'BlueOcean'
  }
]

const Projects = () => {
  return (
    <div className='mt-10 mb-20'>
      {projectSpotlight.map((project, index) => (
        <ProjectContainer
          title={project.title}
          description={project.description}
          tech={project.tech}
          github={project.github}
          image={project.image}
          index={index}
          key={index}
        />
      ))}
    </div>
  )
}

export default Projects;
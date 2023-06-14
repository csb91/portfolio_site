import ProjectContainer from "./ProjectContainer";
import { project } from "@/lib/interfaces";

const projectSpotlight: project[] = [
  {
    title: 'Swan E-commerce',
    description:
      `A modern and user-friendly online shopping platform that offers a seamless shopping experience.
      With a wide range of products and intuitive navigation, customers can easily explore and purchase their desired items.
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
      This tool empowers users to effectively organize and manually send tweets according to their preferences.
      Users can conveniently store a list of potential tweets and choose the optimal timing for publishing them.
      Once a tweet is sent, it is automatically marked for easy tracking and management.
      Users have the flexibility to delete tweets directly from their Twitter account as well as remove them from the tool's internal database.`,
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
    <div className='mt-10'>
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
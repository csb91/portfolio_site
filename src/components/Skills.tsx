import Image from "next/image";
import { skillBadges } from "@/lib/interfaces";

const skills: skillBadges[] = [
  {label: 'Javascript', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg'},
  {label: 'Typescript', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'},
  {label: 'NextJS', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg'},
  {label: 'React', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'},
  {label: 'Tailwind CSS', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg'},
  {label: 'Express', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg'},
  {label: 'NodeJS', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'},
  {label: 'MongoDB', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg'},
  {label: 'MySQL', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg'},
  {label: 'PostgreSQL', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg'},
  {label: 'Amazon Web Services', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg'},
  {label: 'Git', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'},
];

const Skills = () => {
  return (
    <div className='container grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-24 mt-4 mb-10 px-4'>
      {skills.map((skill, ind) => (
        <Image
        src={skill.url}
        width={100}
        height={100}
        alt={`${skill.label} Technology Badge`}
        key={ind}
        />
      ))}
    </div>
  )
}

export default Skills;
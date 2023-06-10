import Image from "next/image";

const Skills = () => {
  return (
    <>
    <div className='flex flex-row justify-between mt-4 mb-4'>
      <div>
        <Image
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg"
          width={100}
          height={100}
          alt='Technology Badge'
        />
      </div>
      <div>
        <Image
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
          width={100}
          height={100}
          alt='Technology Badge'
        />
      </div>
      <div>
        <Image
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
          width={100}
          height={100}
          alt='Technology Badge'
        />
      </div>
      <div>
        <Image
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
          width={100}
          height={100}
          alt='Technology Badge'
        />
      </div>
      <div>
        <Image
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
          width={100}
          height={100}
          alt='Technology Badge'
        />
      </div>
      <div>
        <Image
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
          width={100}
          height={100}
          alt='Technology Badge'
        />
      </div>
    </div>
    <div className='flex flex-row justify-between'>
      <div>
        <Image
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
          width={100}
          height={100}
          alt='Technology Badge'
        />
      </div>
      <div>
        <Image
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
          width={100}
          height={100}
          alt='Technology Badge'
        />
      </div>
      <div>
        <Image
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
          width={100}
          height={100}
          alt='Technology Badge'
        />
      </div>
      <div>
      <Image
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
          width={100}
          height={100}
          alt='Technology Badge'
        />
      </div>
      <div>
        <Image
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg"
          width={100}
          height={100}
          alt='Technology Badge'
        />
      </div>
      <div>
        <Image
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
          width={100}
          height={100}
          alt='Technology Badge'
        />
      </div>
    </div>
    </>
  )
}

export default Skills;
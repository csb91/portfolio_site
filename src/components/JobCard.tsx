import { Cpu, Disc } from "react-feather";

const JobCard = ({ selectedJob, title, company, dates, description}) => {

  return (
    <>
      {company === selectedJob &&
      <div className='flex flex-col flex-grow pl-4 pb-2'>
        <h3 className='text-lg font-bold'>
          {title} @ {company}
        </h3>
        <div className='text-sm'>
          {dates}
        </div>
        <ul className='px-10 py-6 sm:py-10'>
          {description?.map((bulletPoint, index) => (
            <li key={index} className='pb-2 flex flex-row'>
              <Disc className='pr-2 pt-1 h-5 w-5'/>
              <div className='w-5/6'>
                {bulletPoint}
              </div>
            </li>
          ))}
        </ul>
      </div>
      }
    </>
  )
}

export default JobCard;
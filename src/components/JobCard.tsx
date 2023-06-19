import { Cpu, Disc } from "react-feather";
import { JobCardProps } from "@/lib/interfaces";

const JobCard = ({ selectedJob, title, company, dates, description}: JobCardProps) => {

  return (
    <>
      {company === selectedJob &&
      <div className='flex flex-col flex-grow pl-4 pb-2'>
        <h3 className='text-xl font-bold'>
          {title} @ {company}
        </h3>
        <div className='text-sm'>
          {dates}
        </div>
        <ul className='text-lg px-4 py-6 sm:py-10 sm:px-10'>
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
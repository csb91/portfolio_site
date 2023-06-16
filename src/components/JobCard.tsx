const JobCard = ({ selectedJob, title, company, dates, description}) => {

  return (
    <>
      {company === selectedJob &&
      <div className='pl-4 pb-2'>
        <h3 className='text-lg font-bold'>
          {title} @ {company}
        </h3>
        <div className='text-sm'>
          {dates}
        </div>
        <ul className='list-disc px-10 py-6 sm:py-10'>
          {description?.map((bulletPoint, index) => (
            <li key={index} className='pb-2'>
              {bulletPoint}
            </li>
          ))}
        </ul>
      </div>
      }
    </>
  )
}

export default JobCard;
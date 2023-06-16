import clsx from "clsx";

const JobSelector = ({ selectedJob, setSelectedJob, company }) => {
  const handleClick = (e) => {
    e.preventDefault();
    setSelectedJob(company)
  }

  return (
    <div className='flex flex-grow min-w-fit justify-evenly sm:border-b sm:flex-grow-0 sm:h-12'>
      <button onClick={handleClick} className={clsx('px-2', company === selectedJob ? 'font-bold underline' : '')}>
        {company}
      </button>
    </div>
  )
}

export default JobSelector;
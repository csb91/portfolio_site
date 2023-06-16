const JobSelector = ({ selectedJob, setSelectedJob, company }) => {
  const handleClick = (e) => {
    e.preventDefault();
    setSelectedJob(company)
  }

  return (
    <div className='flex min-w-fit'>
      <button onClick={handleClick} className='px-4 md:border-b'>
        {company}
      </button>
    </div>
  )
}

export default JobSelector;
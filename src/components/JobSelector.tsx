const JobSelector = ({ selectedJob, setSelectedJob, company }) => {
  const handleClick = (e) => {
    e.preventDefault();
    setSelectedJob(company)
  }

  return (
    <>
      <button onClick={handleClick} className='sm:border-b sm:h-12'>
        {company}
      </button>
    </>
  )
}

export default JobSelector;
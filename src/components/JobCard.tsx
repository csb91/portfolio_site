const JobCard = ({ title, company, dates, description}) => {
  return (
    <div>
      <div>
        {title}
      </div>
      <div>
        {company}
      </div>
      <div>
        {dates}
      </div>
      <div>
        {description}
      </div>
    </div>
  )
}

export default JobCard;
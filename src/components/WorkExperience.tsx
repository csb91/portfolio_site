import { jonInfo } from "@/lib/interfaces";
import JobCard from './JobCard'

const jobList: jonInfo[] = [
  {
    title: 'Founder',
    company: 'Steria LLC',
    dates: 'December 2021 - August 2022',
    description: [
      `Coordinated hundreds of projects with international teams,
      spanning from one day to multiple weeks, by effectively communicating and
      collaborating with remote team members to achieve goals and deliverables`,
      `Optimized internal workflow by automating ticket management using Jira Service Management,
      resulting in improved efficiency and faster resolution of issues`
    ]
  },
  {
    title: 'Petroleum Engineer',
    company: 'Ventex Oil & Gas',
    dates: 'November 2015 - March 2021',
    description: [
      `Supervised production operations across three states including
      daily communication with 10+ team members, ensured minimal downtime and
      allowed for maximum extraction of hydrocarbons`,
      `Analyzed potential acquisition targets by performing reserve and economic evaluations,
      resulting in the identification of profitable opportunities and increased revenue for the company`,
      `Developed and implemented detailed workover plans and procedures for wells to optimize production`,
      `Oversee regulatory matters with various state and federal government agencies`
    ]
  },
]

const WorkExperience = () => {
  return (
    <div className='container flex flex-col-reverse justify-evenly mx-auto border-2 rounded-md md:flex-row mt-6 mb-6 p-4 rainbow-mesh max-w-5xl shadow-lg'>
      <div>

      </div>
      <div>
        {jobList.map((job, index) => (
          <JobCard
            title={job.title}
            company={job.company}
            dates={job.dates}
            description={job.description}
            key={index}
          />
        ))}
      </div>
    </div>
  )
}

export default WorkExperience;
'use client'

import { useState} from "react";
import { jonInfo } from "@/lib/interfaces";
import JobCard from './JobCard'
import JobSelector from "./JobSelector";

const jobList: jonInfo[] = [
  {
    title: 'Student',
    company: 'Hack Reactor',
    dates: 'October 2022 - January 2023',
    description:[
      `Graduated from the Software Engineering Online Immersive Program,
      completing a total 576 hours of coursework and over 1,000 hours coding.`,
      `Tackled challenges ranging from data structures to algorithms to full-stack development and
      testing processes via pair programming and white boarding.`,
      `Worked on engineering teams to create full-stack apps using Agile methodologies.`
    ]
  },
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
  {
    title: 'Student',
    company: 'Texas A&M University',
    dates: 'September 2010 - May 2015',
    description: [
      'B.S. Petroleum Engineering',
      '2014 Summer Internship - Decision Frameworks',
      '2013 Summer Internship - Petro-Hunt LLC'
    ]
  }
]

const WorkExperience = () => {
  const [selectedJob, setSelectedJob] = useState(jobList[0].company)

  return (
    <div className='container mx-auto flex flex-col justify-between border-2 rounded-md sm:flex-row mt-6 mb-6 p-4 h-[450px] max-w-5xl rainbow-mesh shadow-lg'>
      <div className='container mx-auto flex flex-grow flex-row sm:flex-col border-2 rounded-tl-md rounded-tr-md sm:rounded-bl-md sm:rounded-tr-none sm:w-1/4 md:w-1/4 overflow-x-scroll overflow-y-hidden'>
        {jobList.map((job, index) => (
          <JobSelector
          selectedJob={selectedJob}
          setSelectedJob={setSelectedJob}
          company={job.company}
          key={index}/>
        ))}
      </div>
      <div className='container mx-auto flex flex-grow border-2 border-t-0 rounded-br-md rounded-bl-md h-5/6 sm:h-full sm:border-l-0 sm:border-t-2 sm:rounded-tr-md sm:rounded-bl-none overflow-y-auto'>
        {jobList.map((job, index) => (
          <JobCard
            selectedJob={selectedJob}
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
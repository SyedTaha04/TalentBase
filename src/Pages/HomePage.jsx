import React from 'react'
import Hero from '../components/Hero'
import JobListing from '../components/JobListing'
import ViewAllJobs from '../components/ViewAllJobs'
import DevsAndEmployes from '../components/DevsAndEmployes.jsx'

const HomePage = () => {
  return (
   <>
   <Hero />
   <DevsAndEmployes />
   <JobListing limit={3} heading="Browse Jobs" />
   <ViewAllJobs />

   </>
  )
}

export default HomePage
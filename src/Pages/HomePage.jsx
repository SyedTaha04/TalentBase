import React from 'react'
import Hero from '../components/Hero.jsx'
import HomeCards from '../components/HomeCards.jsx'
import JobListings from '../components/JobListing.jsx'
import ViewAllJobs from '../components/ViewAllJobs.jsx'

const HomePage = () => {
  return (
    <>
      <Hero />
      <HomeCards />
      <JobListings limit={3} />
      <ViewAllJobs />
    </>
  )
}

export default HomePage
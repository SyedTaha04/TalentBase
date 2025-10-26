import React, { use } from 'react'
import SingleJob from './SingleJob'
import { useState, useEffect } from 'react';
import Spinner from './Spinner';


const JobListing = ({limit, heading = "Browse Jobs"}) => {
const [jobs, setJobs] = useState([]);  
const [loading, setLoading] = useState(true);
const limitJobs = limit ? jobs.slice(0, limit) : jobs;

useEffect(() => {
const fetchJobs = async () =>
{
  try
  {
    const response = await fetch('/api/jobs');
    const data = await response.json();
    console.log(data);
    setJobs(data);
    

  }
  catch (error)
  {
    console.log("Error fetching jobs:", error);

  }
  finally
  {
    setLoading(false);
  }
  
  
}
fetchJobs();
}, 
[]);
  return (

    <>
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {heading}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {loading ? (
            <Spinner loading={loading} />
          ) : (
            <>
              {limitJobs.map((job) => (
                <SingleJob key={job.id} job={job} />
              ))}
            </>
          )}
            </div>
          </div>  
    </section>

    
    </>
  )
}

export default JobListing
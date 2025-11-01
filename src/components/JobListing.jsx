import React from 'react'
import { Link } from 'react-router-dom'
import {useState, useEffect} from 'react'
import SingleJobListing from './SingleJobListing'

const JobListing = ({limit, heading = "Browse Jobs"}) => {
    const [jobDetails, setJobDetails] = useState([]);
    const limitJobs = limit ? jobDetails.slice(0, limit) : jobDetails;
    
    
    useEffect(()=>
    {
        const fetchJobs =  async () =>
        {
            try
            {
                const response = await fetch('https://jsonserver-talentbase.onrender.com/jobs');
                const data = await response.json();
                console.log(data);
                setJobDetails(data);
            }
            catch(error)
            {
                console.error('Error fetching job data:', error);

            }
        }
        fetchJobs();
    },
    [])
  return (
    <>
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
         {heading}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/*<!-- Job Listing 1 -->*/}
          {limitJobs.map((job)=>(
            
            <SingleJobListing key={job.id} job={job} />
          ))}
          
        </div>
      </div>
    </section>
    </>
  )
}

export default JobListing
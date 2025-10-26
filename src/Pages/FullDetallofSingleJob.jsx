import React, {useState, useEffect } from 'react'
import { useNavigate, Link, useParams } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const FullDetallofSingleJob = () => {
  const { id } = useParams();
  const [jobDetail, setJobDetail] = useState(null);  
  const navigate = useNavigate();

  useEffect(()=>{
    
    const fetchJobs = async () =>
{
  try
  {
    const response = await fetch(`/api/jobs/${id}`);
   
    const data = await response.json();
    setJobDetail(data)
    

  }
  catch (error)
  {
    console.log("Error fetching jobs:", error);

  }  
}
fetchJobs();
}, 
[id]);

if (!jobDetail) {
  return <p className="text-center mt-10">Loading job details...</p>;
}

const handleDelete = async () =>
{
  try
  { 
    const response = await fetch(`/api/jobs/${id}`,{
      method: "DELETE"
    });
    
    if (response.ok)
    {
      alert("Job deleted successfully");
    }
    navigate('/jobs');
    
    

  }
  catch (error)
  {
    console.log("Error deleting job:", error);
  }

}
const editJob = () => 
{


}




  
  
  
  return (
    <>
     <section>
      <div className="container m-auto py-6 px-6">
        <Link
          to="/jobs"
          className="text-indigo-500 hover:text-indigo-600 flex items-center"
        >
          <FaArrowLeft className='mr-2'/> Back to Job Listings
        </Link>
      </div>
    </section>

    <section className="bg-indigo-50">
      <div className="container m-auto py-10 px-6">
        <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
          <main>
            <div
              className="bg-white p-6 rounded-lg shadow-md text-center md:text-left"
            >
              
              <div className="text-gray-500 mb-4">{jobDetail.type}</div>
              <h1 className="text-3xl font-bold mb-4">
                {jobDetail.title}
              </h1>
              <div
                className="text-gray-500 mb-4 flex align-middle justify-center md:justify-start"
              >
                <i
                  className="fa-solid fa-location-dot text-lg text-orange-700 mr-2"
                ></i>
                <p className="text-orange-700">{jobDetail.location}</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md mt-6">
              <h3 className="text-indigo-800 text-lg font-bold mb-6">
                Job Description
              </h3>

              <p className="mb-4">
                {jobDetail.description}
              </p>

              <h3 className="text-indigo-800 text-lg font-bold mb-2">Salary</h3>

              <p className="mb-4">${jobDetail.salary}/year</p>
            </div>
          </main>

         
          <aside>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-6">Company Info</h3>

              <h2 className="text-2xl">{jobDetail.company.name}</h2>

              <p className="my-2">
                {jobDetail.company.description}
              </p>

              <hr className="my-4" />

              <h3 className="text-xl">Contact Email:</h3>

              <p className="my-2 bg-indigo-100 p-2 font-bold">
                {jobDetail.company.contactEmail}
              </p>

              <h3 className="text-xl">Contact Phone:</h3>

              <p className="my-2 bg-indigo-100 p-2 font-bold">{jobDetail.company.contactPhone}</p>
            </div>

            
            <div className="bg-white p-6 rounded-lg shadow-md mt-6">
              <h3 className="text-xl font-bold mb-6">Manage Job</h3>
              <Link
                to={`/edit-job/${jobDetail.id}`}
                className="bg-indigo-500 hover:bg-indigo-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                >Edit Job</Link
              >
              <button onClick={handleDelete}
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
              >
                Delete Job
              </button>
            </div>
          </aside>
        </div>
      </div>
    </section>
    </>
  )
}

export default FullDetallofSingleJob
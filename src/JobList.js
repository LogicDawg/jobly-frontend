import { useState, useEffect } from "react";
import LoadingScreen from "./LoadingScreen"
import JobDetails from "./JobDetails"
import JoblyApi from "./api/api"
import Search from "./Search";

const Jobs = () => {
    console.debug("JobList");

    const [jobs, setJobs] = useState(null);
  
    useEffect(function getAllJobsOnMount() {
      console.debug("JobList useEffect getAllJobsOnMount");
      search();
    }, []);
  
    /** Triggered by search form submit; reloads jobs. */
    async function search(title) {
      let jobs = await JoblyApi.getJobs(title);
      setJobs(jobs);
    }
  
    if (!jobs) return <LoadingScreen />;
  
    return (
        <div>
        <h1>Jobs Avaiable!</h1>
        <Search searchFor={search} />
        {jobs.length
            ? <JobDetails jobs={jobs} />
            : <p className="lead">Sorry, no results were found!</p>
        }
        </div>
    )
}

export default Jobs;
import Job from '../Job'

const Jobs = ({ jobs }) => (
    <div>
      {jobs.map((job) => (
        <Job
          key={job.id}
          job={job}
        />
      ))}
    </div>
  );
  
  export default Jobs;
  
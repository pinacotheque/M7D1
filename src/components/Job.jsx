import { Card } from "react-bootstrap";

const Job = ({ job }) => (

  <Card style={{ cursor: "pointer", width: "16rem"}} className="d-flex mx-2 my-3 " >
    <Card.Body >
      {/* <img className="job-image" src={job.imageUrl} alt="job cover" /> */}
      <div>
        <Card.Title className="font-weight-bold">{job.title}</Card.Title>
        <Card.Text className="font-weight-bold">{job.company_name}</Card.Text>
        
      </div>
    </Card.Body>
  </Card>
);

export default Job;
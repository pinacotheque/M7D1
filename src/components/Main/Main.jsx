import { Component } from 'react'
import { withRouter } from "react-router-dom";
import { Container, Row, Col, Card, Form, Button, FormControl } from "react-bootstrap"

class Main extends Component {

        state = {
            searchBar:'',
            jobs: [],
        }
    
    searchJob = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch(`https://remotive.io/api/remote-jobs?search=${this.state.searchBar}`) 
            const data = await response.json()
           
            console.log(data);
            if(response.ok){
                this.setState({
                    ...this.state,
                    jobs: data.jobs,
                    
                })
            }
        } catch (error) {
            console.log(error);
        }
    }

    showJob = (job) => {
        this.props.history.push('/jobDetails')
    }

    render() {
        return (
            <Container className="p-0 ">
                
                <h5 className="mt-5">Search Job: </h5> 
                <Row className="mt-2 mb-5" >
                    <Form inline onSubmit={(e)=>this.searchJob(e)}>
                        <FormControl 
                        value={this.state.searchBar}
                        onChange={(e) => this.setState({
                            ...this.state,
                            searchBar: e.target.value
                        })}
                        type="text" 
                        placeholder="Search Title..." />
                        <Button variant="primary" type="submit" className= "ml-2"> Search </Button>
                    </Form>
                </Row>

                {this.state.jobs.lenght > 0 }   
                
                <div className='d-flex flex-wrap' > 
                    {this.state.jobs.map((job) => (
                       <Card onClick={ () => this.showJob(job) } style={{ cursor: "pointer", width: "16rem"}} className="d-flex mx-2 my-3 " >
                       <Card.Body >
                         {/* <img className="job-image" src={job.imageUrl} alt="job cover" /> */}
                         <div>
                           <Card.Title className="font-weight-bold">{job.title}</Card.Title>
                           <Card.Text className="font-weight-bold">{job.company_name}</Card.Text>
                           
                         </div>
                       </Card.Body>
                     </Card>
                    ))}
                </div>
               
            </Container>
        )
    }

}
export default withRouter(Main) 
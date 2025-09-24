import { Row, Col, Card} from 'react-bootstrap';
import Bg from './BgImg';

const Team = () => {
  return (
    <section id="team" className="section-padding container mb-5">
        <Row className="mb-5 p-5" style={{...Bg("https://aurorasystems.sirv.com/729.jpg")}}>
          <Col lg={8} className="mx-auto text-center opacity-bg text-white rounded">
            <h2 className="display-3 fw-bold text-primary-custom m ">
              Meet Our Team
            </h2>
            <p className="">
              Experienced professionals dedicated to your success
            </p>
          </Col>
        </Row>
        
        <Row className=" mb-3 gap-3">
          <Col className='p_bg rounded '>
            <Card className="border-0">
              <Card.Body className="p-5 p_bg  rounded text-white">
                <Row className=''>
                
                  <Col className='' >
                    <h3 className="text-primary-custom mb-2">Innocent Muzanenhamo</h3>
                    <h6 className="text-secondary-custom mb-3">
                      Managing Consultant & Chartered Accountant
                    </h6>
                    <div  className="mb-3 rounded text-dark bg-white p-2">
                      Member of the Institute of Chartered Accountants Zimbabwe (ICAZ)
                    </div>
                    <p className="text-white" >
                      With more than 20 years of experience in financial accounting and reporting, 
                      internal audit, bookkeeping, and taxation, Innocent leads our team with 
                      expertise and dedication to delivering exceptional accounting services.
                    </p>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          
          <Col className='s_bg rounded'>
            <Card className="border-0 text-white ">
              <Card.Body className="p-5 s_bg rounded">
                <h3 className="text-primary-custom ">Our Support Team</h3>
                <p className="text-white mb-4">
                  Our Managing Consultant is supported by qualified part-time bookkeepers 
                  who assist in delivering comprehensive accounting services to our clients.
                </p>
                
                
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className=' d-flex justify-content-center gap-3 align-items-center text-center text-white'>
                  <Col className="mb-3 p_bg p-3 rounded">
                    <div className="h2 text-secondary-custom fw-bold">20+</div>
                    <small >Years Experience</small>
                  </Col>
                  <Col className="mb-3 s_bg p-3 rounded">
                    <div className="h2 text-secondary-custom fw-bold">100%</div>
                    <small >Client Focused</small>
                  </Col>
                  <Col className="mb-3 p_bg p-3 rounded h-100">
                    <div className="h2 text-secondary-custom fw-bold">ICAZ</div>
                    <small >100% Certified</small>
                  </Col>
        </Row>
    </section>
  );
};

export default Team;

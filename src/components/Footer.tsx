import { Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className=" p_bg  container  rounded  text-white ">
      <div className='p_bg  rounded p-5'>

        <Row className="g-4">
          <Col lg={4} md={6}>
            <h5 className="text-secondary-custom mb-4">Champions Accounting Services</h5>
            <p className="text-light opacity-75 mb-4">
              Professional accounting solutions for Zimbabwe's growing businesses. 
              Your trusted partner in financial success.
            </p>
           
          </Col>
          
          <Col lg={2} md={6}>
            <h6 className="text-secondary-custom mb-4">Quick Links</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#about" className="text-light opacity-75 text-decoration-none">About Us</a>
              </li>
              <li className="mb-2">
                <a href="#services" className="text-light opacity-75 text-decoration-none">Services</a>
              </li>
              <li className="mb-2">
                <a href="#team" className="text-light opacity-75 text-decoration-none">Our Team</a>
              </li>
              <li className="mb-2">
                <a href="#contact" className="text-light opacity-75 text-decoration-none">Contact</a>
              </li>
            </ul>
          </Col>
          
          <Col lg={3} md={6}>
            <h6 className="text-secondary-custom mb-4">Services</h6>
            <ul className="list-unstyled">
              <li className="mb-2 text-light opacity-75">IFRS Financial Accounts</li>
              <li className="mb-2 text-light opacity-75">Audit Support</li>
              <li className="mb-2 text-light opacity-75">Tax Advisory</li>
              <li className="mb-2 text-light opacity-75">Business Plans</li>
              <li className="mb-2 text-light opacity-75">Internal Audits</li>
            </ul>
          </Col>
          
          <Col lg={3} md={6}>
            <h6 className="text-secondary-custom mb-4">Contact Info</h6>
            <div className="text-light opacity-75">
              <p className="mb-2">inno.muza@gmail.com</p>
              <p className="mb-2">+263 78 110 7033</p>
              <p className="mb-2">Zimbabwe</p>
              <p className="mb-0">Mon - Fri: 8:00 AM - 5:00 PM</p>
            </div>
          </Col>
        </Row>
        
        <hr className="my-5 opacity-25" />
        
        <Row>
          <Col md={6}>
            <p className="text-light opacity-75 mb-0">
              © 2024 Champions Accounting Services. All rights reserved.
            </p>
          </Col>
          <Col md={6} className="text-md-end">
            <p className="text-light opacity-75 mb-0">
              ICAZ Certified | Professional Accounting Services
            </p>
          </Col>
        </Row>
              </div>

    </footer>
  );
};

export default Footer;

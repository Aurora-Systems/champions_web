import  { useState, type FormEvent, useRef } from 'react';
import { Container, Row, Col, Card, Form,  Alert } from 'react-bootstrap';
import emailjs from '@emailjs/browser';

const Contact = () => {

  const [loading,set_loading] = useState<boolean>(false)
  const [showAlert, setShowAlert] = useState(false);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const form: any = useRef(null)
    const send_application = (e: FormEvent) => {
        e.preventDefault()
        set_loading(true)
        emailjs.sendForm("service_ulefjbv", "template_we57end", form.current, {
            publicKey: "Cgy-GBRmWQRZ6eu1z"
        }).then(() => {
            alert("✅ We received your enquiry, expect a call or an email soon!")
            form.current.reset()
        }).catch(() => {
            alert("⚠️ Message not sent, please try again or send us a message on our email support@aurorasystems.co.zw!")
        }).finally(()=>{
            set_loading(false)
        })
    }

  return (
    <section id="contact" className="section-padding p_bg container rounded  p-5 text-white mb-5">
      <Container>
        <Row className="mb-5">
          <Col lg={8} className="mx-auto text-center">
            <h2 className="display-3 fw-bold">Let's Get In Touch</h2>
            <p>
              Ready to streamline your accounting? Contact us today
            </p>
          </Col>
        </Row>
        
        <Row className="g-5">
          <Col lg={6}>
            <div className="pe-lg-4">
              <h3 className="h2 text-secondary-custom mb-4">Get Started Today</h3>
              <p className="mb-5 opacity-90" style={{lineHeight: '1.8', fontSize: '1.1rem'}}>
                Contact Champions Accounting Services to discuss how we can help your business 
                grow with professional accounting solutions.
              </p>
              
              <div className="mb-4">
                <div className="d-flex align-items-center mb-3">
                 
                  <div>
                    <h6 className="mb-1 text-secondary-custom">Email</h6>
                    <a 
                      href="mailto:info@championsaccounting.co.zw" 
                      className="text-white text-decoration-none fs-5"
                    >
                      info@championsaccounting.co.zw
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mb-4">
                <div className="d-flex align-items-center">
                  
                  <div>
                    <h6 className="mb-1 text-secondary-custom">Phone & WhatsApp</h6>
                    <a 
                      href="tel:+263781107033" 
                      className="text-white text-decoration-none fs-5"
                    >
                      +263 78 110 7033
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          
          <Col lg={6}>
            <Card className="border-0 shadow-lg">
              <Card.Body className="p-5">
                <h4 className="text-primary-custom mb-4">Send Us a Message</h4>
                
                {showAlert && (
                  <Alert variant="success" dismissible onClose={() => setShowAlert(false)}>
                    Thank you! Your message has been sent successfully.
                  </Alert>
                )}
                
                <Form onSubmit={send_application} ref={form}>
              
                   <Row>
                    <Col className="mb-3">
                      <Form.Group>
                        <Form.Label className="text-primary-custom fw-semibold">
                          Full Name *
                        </Form.Label>
                        <Form.Control
                          type="text"
                          name="full_name"
                        
                          placeholder="Enter your full name"
                          required
                          className="rounded-custom"
                        />
                      </Form.Group>
                    </Col>
                    </Row>
                   <Row>
                    <Col className="mb-3">
                      <Form.Group>
                        <Form.Label className="text-primary-custom fw-semibold">
                          Email *
                        </Form.Label>
                        <Form.Control
                          type="text"
                          name="email"
                          placeholder="Enter your full name"
                          required
                          className="rounded-custom"
                        />
                      </Form.Group>
                    </Col>
                    </Row>
                   <Row>
                    <Col className="mb-3">
                      <Form.Group>
                        <Form.Label className="text-primary-custom fw-semibold">
                          Contact Number *
                        </Form.Label>
                        <Form.Control
                          type="text"
                          name="contact_number"
                          placeholder="Enter your full name"
                          required
                          className="rounded-custom"
                        />
                      </Form.Group>
                    </Col>
                    </Row>
                  <Form.Group className="mb-4">
                    <Form.Label className="text-primary-custom fw-semibold">
                      Message *
                    </Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={5}
                      name="message"
                    
                      placeholder="Tell us about your accounting needs..."
                      required
                      className="rounded-custom"
                    />
                  </Form.Group>
                  
                  <button
                    type="submit" 
                    className="w-100 btn p-btn "
                  >
                    {loading?"Sending...":"Send Message"}
                  </button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;

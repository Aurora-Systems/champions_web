import { Container, Row, Col, Card } from 'react-bootstrap';

const Services = () => {
  const services = [
    {
      number: "01",
      title: "IFRS Compliant Financial Accounts",
      description: "Assisting clients with the preparation of International Financial Reporting Standards compliant financial accounts ensuring accuracy and compliance."
    },
    {
      number: "02", 
      title: "External Audit Support",
      description: "Engagement with clients' external auditors during audits, providing seamless coordination and comprehensive documentation."
    },
    {
      number: "03",
      title: "Tax Advisory & Filing",
      description: "Comprehensive tax advisory services and assistance with the filing of tax returns, ensuring compliance with Zimbabwe's tax regulations."
    },
    {
      number: "04",
      title: "Business Plans & Proposals",
      description: "Professional development of business plans and proposals to help your business secure funding and strategic direction."
    },
    {
      number: "05",
      title: "Internal Audits",
      description: "Thorough internal audit services to identify risks, improve controls, and enhance operational efficiency."
    }
  ];

  return (
    <section id="services" className="section-padding mb-5">
      <Container>
        <Row className="">
          <Col lg={8} className="mx-auto text-center">
            <h2 className="display-3 fw-bold text-primary-custom">
              Our Services
            </h2>
            <p className="">
              Comprehensive accounting solutions tailored to your business needs
            </p>
          </Col>
        </Row>
        
        <Row className="g-4 d-flex justify-content-center">
          {services.map((service, index) => (
            <Col key={index} lg={4} md={6}>
              <Card className="border-0 h-100 text-center shadow">
                <Card.Body className="p-4">
                  <div 
                    className={`service-number text-white mb-4 ${
                      index % 2 === 0 ? 's_bg' : 's_bg'
                    }`}
                  >
                    {service.number}
                  </div>
                  <h5 className="text-primary-custom mb-3">{service.title}</h5>
                  <p className="text-muted" style={{lineHeight: '1.7'}}>
                    {service.description}
                  </p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;

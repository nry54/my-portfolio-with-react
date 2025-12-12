import { Row, Col, Card } from "react-bootstrap";

const Services = () => {
  return (
    <>
      <h2 className="sectionTitle">Services</h2>

      <div className="services-container">
        <Row xs={1} sm={2} md={2} lg={4} className="g-4">
          <Col>
            <Card className="service-card">
              <Card.Img
                variant="top"
                src="/src/assets/images/web-development.png"
                className="service-card-img"
              />
              <Card.Body>
                <Card.Title>Web Development</Card.Title>
                <Card.Text>
                  User-Friendly, High-Performance and Aesthetic Web Experiences
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="service-card">
              <Card.Img
                variant="top"
                src="/src/assets/images/ai-solutions.jpeg"
                className="service-card-img"
              />
              <Card.Body>
                <Card.Title>AI Solutions</Card.Title>
                <Card.Text>
                  Advanced AI Solutions for a Seamless User Experience
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="service-card">
              <Card.Img
                variant="top"
                src="/src/assets/images/modernisation.png"
                className="service-card-img"
              />
              <Card.Body>
                <Card.Title>Modernisation</Card.Title>
                <Card.Text>
                  Just-in-Time Modernisation for Project Success
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="service-card">
              <Card.Img
                variant="top"
                src="/src/assets/images/consulting.jpg"
                className="service-card-img"
              />
              <Card.Body>
                <Card.Title>Consulting</Card.Title>
                <Card.Text>
                  Expert Advice and Guidance for Your Project Success
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Services;

import { Row, Col, Card } from "react-bootstrap";

const Services = () => {
  return (
    <>
      <h2 className="sectionTitle">Services</h2>

      <Row xs={1} md={2} className="g-4">
        <Col>
          <Card>
            <Card.Img
              variant="top"
              src="/src/assets/images/web-development.jpeg"
            />
            <Card.Body>
              <Card.Title>Web Development</Card.Title>
              <Card.Text>
                User-Friendly, High-Performance and Aesthetic Web Experiences
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Services;

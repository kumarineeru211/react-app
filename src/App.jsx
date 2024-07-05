import React from 'react';
import { Container, Row, Col, Form, Button, Accordion, Carousel, Card } from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <Container fluid>
      <Row>
        <Col md={7} className="left-banner">
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Banner"
            className="img-fluid banner-image"
          />
          <h2 className="banner-title">Food App</h2>
        </Col>
        <Col md={5} className="form-section">
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your full name" />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>
            <Form.Group controlId="formPhone">
              <Form.Label>Phone</Form.Label>
              <Form.Control type="phone" placeholder="Enter your phone number" />
            </Form.Group>
            <Form.Group controlId="address">
              <Form.Label>Address</Form.Label>
              <Form.Control type="address" placeholder="Enter your address" />
            </Form.Group>
            <Form.Group controlId="formMessage">
              <Form.Label>Note</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Write your message" />
            </Form.Group>
            <Button variant="primary" type="submit" style={{ marginTop: '1rem' }}>
              Submit
            </Button>
          </Form>
        </Col>
      </Row>

      <Row>
        <Col>

        <h2 className="faq-heading">Frequently Asked Questions</h2>
        <Accordion defaultActiveKey="0" className="mt-3">
            <Accordion.Item eventKey="0">
              <Accordion.Header>What are the delivery hours?</Accordion.Header>
              <Accordion.Body>
                Our delivery hours are from 10 AM to 10 PM every day, including weekends.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Do you offer vegetarian options?</Accordion.Header>
              <Accordion.Body>
                Yes, we offer a wide range of vegetarian options to cater to different dietary preferences.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>How can I track my order?</Accordion.Header>
              <Accordion.Body>
                You can track your order through our app by going to the 'Order History' section and clicking on the 'Track Order' button.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>What payment methods do you accept?</Accordion.Header>
              <Accordion.Body>
                We accept all major credit cards, debit cards, and online payment methods such as PayPal and Apple Pay.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>Can I cancel or modify my order?</Accordion.Header>
              <Accordion.Body>
                Yes, you can cancel or modify your order within 15 minutes of placing it by contacting our customer service or through the app.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>


          <Carousel className="mt-3">
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1481931098730-318b6f776db0?q=80&w=1890&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First Food Item</h3>
                <p>Description of the first food item.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Second slide"
              />
              <Carousel.Caption>
                <h3>Second Food Item</h3>
                <p>Description of the second food item.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>Third Food Item</h3>
                <p>Description of the third food item.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>

          <div className="testimonials mt-3">
            <h3>Testimonials</h3>
            <Row>
              <Col md={4}>
                <Card className="testimonial-card">
                  <Card.Img
                    variant="top"
                    src="https://via.placeholder.com/150"
                    className=" rounded-circle testimonial-img"
                  />
                  <Card.Body>
                    <Card.Title>John Doe</Card.Title>
                    <Card.Text>
                      Great food and amazing service!
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="testimonial-card">
                  <Card.Img
                    variant="top"
                    src="https://via.placeholder.com/150"
                    className="rounded-circle testimonial-img"
                  />
                  <Card.Body>
                    <Card.Title>Jane Smith</Card.Title>
                    <Card.Text>
                      I love this place!
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="testimonial-card">
                  <Card.Img
                    variant="top"
                    src="https://via.placeholder.com/150"
                    className="rounded-circle testimonial-img"
                  />
                  <Card.Body>
                    <Card.Title>Sam Wilson</Card.Title>
                    <Card.Text>
                      A must-visit for food lovers.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>

          <footer className="mt-3">
          <div className="footer">
          <div class="footer-container">
            <div class="footer-section">
              <h2>Product</h2>
              <p>Features</p>
              <p>Integrations</p>
              <p>Pricing</p>
            </div>
            <div class="footer-section">
              <h2>Resources</h2>
              <p>Content hub</p>
              <p>API Documentation</p>
              <p>Help Center</p>
            </div>
            <div class="footer-section">
              <h2>Company</h2>
              <p>About</p>
              <p>Contact us</p>
              <p>Partnerships</p>
            </div>
            <div class="footer-section">
              <h2>Legal</h2>
              <p>Terms & Conditions</p>
              <p>Privacy policy</p>
              <p>Refund policy</p>
              <p>Cookie policy</p>
            </div>
            <div class="footer-logo">
             <div><h1 className="text">Made with❤️ from 🇮🇳 for the world   </h1></div>
              <h1>Logo here</h1>
            </div>
          </div>
          <p>&copy; 2024 Food App. All rights reserved.</p>
        </div>

            
            
          </footer>
        </Col>
      </Row>
    </Container>
  );
}

export default App;

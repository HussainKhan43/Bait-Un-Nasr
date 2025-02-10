import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import nodir from "../assets/nodir.png";

import "../pages/Home.css";

function ExDirectors() {
  return (
    <>
      {/* Banner Section */}
      <section className="banner-img bg-dark text-light py-5">
        <Container>
          <Row>
            <Col className="text-center">
              <h1 className="pt-5 mt-5 display-4">Ex-Directors</h1>
              <p className="lead mt-3">
                Explore our memorable moments and key milestones.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* {board of directors} */}

      <section className="mt-5">
        <Container>
          <Row className="text-center mb-5">
            <h2> EX-Board of Directors</h2>
            <hr/>
            <p>The Society was fortunate to draw on the knowledge and expertise of many dedicated, dynamic and selfless individuals from various professional and social backgrounds who served on its Board of Directors at different times. To them goes the credit for the constantly excellent performance of the Society. Prominent among them were..</p>
          </Row>
          <Row className="d-flex justify-content-center">
            <Col xs={12} sm={6} md={4} className="mb-4">
              <Card className="director-card">
                <div className="director-image-container">
                  <Card.Img variant="top" src={nodir} />
                </div>
                <Card.Body className="text-center">
                  <Card.Title>Mr. Mohammed Husain Khatkhatay</Card.Title>
                  <Card.Text>Director</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={4} className="mb-4">
              <Card className="director-card">
                <div className="director-image-container">
                  <Card.Img variant="top" src={nodir} />
                </div>
                <Card.Body className="text-center">
                  <Card.Title>Mr. Mohd. Ibrahim Noor Mohd Ansari</Card.Title>
                  <Card.Text>Director</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={4} className="mb-4">
              <Card className="director-card">
                <div className="director-image-container">
                  <Card.Img variant="top" src={nodir} />
                </div>
                <Card.Body className="text-center">
                  <Card.Title>Mr. Mohd. Salim Kazi</Card.Title>
                  <Card.Text>Director</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col xs={12} sm={6} md={4} className="mb-4">
              <Card className="director-card">
                <div className="director-image-container">
                  <Card.Img variant="top" src={nodir} />
                </div>
                <Card.Body className="text-center">
                  <Card.Title>Mr. Abdul Rashid Abdul Rehman Shaikh</Card.Title>
                  <Card.Text>Director</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={4} className="mb-4">
              <Card className="director-card">
                <div className="director-image-container">
                  <Card.Img variant="top" src={nodir} />
                </div>
                <Card.Body className="text-center">
                  <Card.Title>Mr. Salim Khan</Card.Title>
                  <Card.Text>Director</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={4} className="mb-4">
              <Card className="director-card">
                <div className="director-image-container">
                  <Card.Img variant="top" src={nodir} />
                </div>
                <Card.Body className="text-center">
                  <Card.Title>Mr. Sayed Iqbal Mir Hussain</Card.Title>
                  <Card.Text>Director</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col xs={12} sm={6} md={4} className="mb-4">
              <Card className="director-card">
                <div className="director-image-container">
                  <Card.Img variant="top" src={nodir} />
                </div>
                <Card.Body className="text-center">
                  <Card.Title>Mr. Mohd. Ilyas Kasam Hungund</Card.Title>
                  <Card.Text>Director</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={4} className="mb-4">
              <Card className="director-card">
                <div className="director-image-container">
                  <Card.Img variant="top" src={nodir} />
                </div>
                <Card.Body className="text-center">
                  <Card.Title>Mr. Sayed Siddique Haroon</Card.Title>
                  <Card.Text>Director</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={4} className="mb-4">
              <Card className="director-card">
                <div className="director-image-container">
                  <Card.Img variant="top" src={nodir} />
                </div>
                <Card.Body className="text-center">
                  <Card.Title>Mr. Mohammed Ashraf Mohammedy</Card.Title>
                  <Card.Text>Director</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col xs={12} sm={6} md={4} className="mb-4">
              <Card className="director-card">
                <div className="director-image-container">
                  <Card.Img variant="top" src={nodir} />
                </div>
                <Card.Body className="text-center">
                  <Card.Title>Dr. Mohd. Salim Ansar</Card.Title>
                  <Card.Text>Director</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={4} className="mb-4">
              <Card className="director-card">
                <div className="director-image-container">
                  <Card.Img variant="top" src={nodir} />
                </div>
                <Card.Body className="text-center">
                  <Card.Title>Dr. Mohd. Salim Ansar</Card.Title>
                  <Card.Text>Director</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={4} className="mb-4">
              <Card className="director-card">
                <div className="director-image-container">
                  <Card.Img variant="top" src={nodir} />
                </div>
                <Card.Body className="text-center">
                  <Card.Title>Dr. Mohd. Salim Ansar</Card.Title>
                  <Card.Text>Director</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col xs={12} sm={6} md={4} className="mb-4">
              <Card className="director-card">
                <div className="director-image-container">
                  <Card.Img variant="top" src={nodir} />
                </div>
                <Card.Body className="text-center">
                  <Card.Title>Dr. Mohd. Salim Ansar</Card.Title>
                  <Card.Text>Director</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={4} className="mb-4">
              <Card className="director-card">
                <div className="director-image-container">
                  <Card.Img variant="top" src={nodir} />
                </div>
                <Card.Body className="text-center">
                  <Card.Title>Dr. Mohd. Salim Ansar</Card.Title>
                  <Card.Text>Director</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={4} className="mb-4">
              <Card className="director-card">
                <div className="director-image-container">
                  <Card.Img variant="top" src={nodir} />
                </div>
                <Card.Body className="text-center">
                  <Card.Title>Dr. Mohd. Salim Ansar</Card.Title>
                  <Card.Text>Director</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col xs={12} sm={6} md={4} className="mb-4">
              <Card className="director-card">
                <div className="director-image-container">
                  <Card.Img variant="top" src={nodir} />
                </div>
                <Card.Body className="text-center">
                  <Card.Title>Dr. Mohd. Salim Ansar</Card.Title>
                  <Card.Text>Director</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={4} className="mb-4">
              <Card className="director-card">
                <div className="director-image-container">
                  <Card.Img variant="top" src={nodir} />
                </div>
                <Card.Body className="text-center">
                  <Card.Title>Dr. Mohd. Salim Ansar</Card.Title>
                  <Card.Text>Director</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={4} className="mb-4">
              <Card className="director-card">
                <div className="director-image-container">
                  <Card.Img variant="top" src={nodir} />
                </div>
                <Card.Body className="text-center">
                  <Card.Title>Dr. Mohd. Salim Ansar</Card.Title>
                  <Card.Text>Director</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col xs={12} sm={6} md={4} className="mb-4">
              <Card className="director-card">
                <div className="director-image-container">
                  <Card.Img variant="top" src={nodir} />
                </div>
                <Card.Body className="text-center">
                  <Card.Title>Dr. Mohd. Salim Ansar</Card.Title>
                  <Card.Text>Director</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={4} className="mb-4">
              <Card className="director-card">
                <div className="director-image-container">
                  <Card.Img variant="top" src={nodir} />
                </div>
                <Card.Body className="text-center">
                  <Card.Title>Dr. Mohd. Salim Ansar</Card.Title>
                  <Card.Text>Director</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={4} className="mb-4">
              <Card className="director-card">
                <div className="director-image-container">
                  <Card.Img variant="top" src={nodir} />
                </div>
                <Card.Body className="text-center">
                  <Card.Title>Dr. Mohd. Salim Ansar</Card.Title>
                  <Card.Text>Director</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col xs={12} sm={6} md={4} className="mb-4">
              <Card className="director-card">
                <div className="director-image-container">
                  <Card.Img variant="top" src={nodir} />
                </div>
                <Card.Body className="text-center">
                  <Card.Title>Dr. Mohd. Salim Ansar</Card.Title>
                  <Card.Text>Director</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={4} className="mb-4">
              <Card className="director-card">
                <div className="director-image-container">
                  <Card.Img variant="top" src={nodir} />
                </div>
                <Card.Body className="text-center">
                  <Card.Title>Dr. Mohd. Salim Ansar</Card.Title>
                  <Card.Text>Director</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={4} className="mb-4">
              <Card className="director-card">
                <div className="director-image-container">
                  <Card.Img variant="top" src={nodir} />
                </div>
                <Card.Body className="text-center">
                  <Card.Title>Dr. Mohd. Salim Ansar</Card.Title>
                  <Card.Text>Director</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col xs={12} sm={6} md={4} className="mb-4">
              <Card className="director-card">
                <div className="director-image-container">
                  <Card.Img variant="top" src={nodir} />
                </div>
                <Card.Body className="text-center">
                  <Card.Title>Dr. Mohd. Salim Ansar</Card.Title>
                  <Card.Text>Director</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={4} className="mb-4">
              <Card className="director-card">
                <div className="director-image-container">
                  <Card.Img variant="top" src={nodir} />
                </div>
                <Card.Body className="text-center">
                  <Card.Title>Dr. Mohd. Salim Ansar</Card.Title>
                  <Card.Text>Director</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default ExDirectors;

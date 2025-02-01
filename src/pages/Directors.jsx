import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import dir1 from "../assets/dir1.jpg";
import dir2 from "../assets/dir2.jpg";
import dir3 from "../assets/dir3.png";
import dir4 from "../assets/dir4.jpg";
import dir5 from "../assets/dir5.jpg";
import dir6 from "../assets/dir6.jpg";
import dir7 from "../assets/dir7.jpg";
import dir8 from "../assets/dir8.jpg";
import dir9 from "../assets/dir9.png";
import dir10 from "../assets/dir10.jpg";

import "../pages/Home.css";

function Directors() {
  return (
    <>
      {/* Banner Section */}
      <section className="banner-img bg-primary text-light py-5">
        <Container>
          <Row>
            <Col className="text-center">
              <h1 className="pt-5 mt-5 display-4">Directors</h1>
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
            <h2>Board of Directors</h2>
          </Row>
          <Row className="d-flex justify-content-center">
            <Col xs={12} sm={6} md={4} className="mb-4">
              <Card className="director-card">
                <div className="director-image-container">
                  <Card.Img variant="top" src={dir1} />
                </div>
                <Card.Body className="text-center">
                  <Card.Title>Mr. Mohammed Husain Khatkhatay</Card.Title>
                  <Card.Text>Chief Advisor and Consultant</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={4} className="mb-4">
              <Card className="director-card">
                <div className="director-image-container">
                  <Card.Img variant="top" src={dir2} />
                </div>
                <Card.Body className="text-center">
                  <Card.Title>Mr. Mohd. Ibrahim Noor Mohd Ansari</Card.Title>
                  <Card.Text>Chairman</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={4} className="mb-4">
              <Card className="director-card">
                <div className="director-image-container">
                  <Card.Img variant="top" src={dir3} />
                </div>
                <Card.Body className="text-center">
                  <Card.Title>Mr. Mohd. Salim Kazi</Card.Title>
                  <Card.Text>Managing Director</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col xs={12} sm={6} md={4} className="mb-4">
              <Card className="director-card">
                <div className="director-image-container">
                  <Card.Img variant="top" src={dir4} />
                </div>
                <Card.Body className="text-center">
                  <Card.Title>Mr. Abdul Rashid Abdul Rehman Shaikh</Card.Title>
                  <Card.Text>Director Operations</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={4} className="mb-4">
              <Card className="director-card">
                <div className="director-image-container">
                  <Card.Img variant="top" src={dir5} />
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
                  <Card.Img variant="top" src={dir6} />
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
                  <Card.Img variant="top" src={dir7} />
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
                  <Card.Img variant="top" src={dir8} />
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
                  <Card.Img variant="top" src={dir9} />
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
                  <Card.Img variant="top" src={dir10} />
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

export default Directors;

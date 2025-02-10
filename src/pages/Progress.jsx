import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import pgreport from "../assets/pgreport.png";

function Progress() {
  return (
    <>
      {/* Banner Section */}
      <section className="banner-img bg-dark text-light py-5">
        <Container>
          <Row>
            <Col className="text-center">
              <h1 className="pt-5 mt-5 display-4 display-sm-3 display-md-2">Progress Report</h1>
              <p className="lead mt-3">
                Explore our memorable moments and key milestones.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col>
              <img src={pgreport} alt="Progress Report" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Progress;

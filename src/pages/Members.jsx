import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../pages/Home.css";

function Members() {
  return (
    <>
      {/* Banner Section */}
      <section className="banner-img bg-dark text-light py-5">
        <Container>
          <Row>
            <Col className="text-center">
              <h1 className="pt-5 mt-5 display-4">Membership</h1>
              <p className="lead mt-3">
                Explore our memorable moments and key milestones.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Section with text and image */}
      <section className="section-padding mt-5">
        <Container>
          <Row className="align-items-center">
            <Col >
              <h2 className="latest-news-title">Membership - Share Holding</h2>
              <hr />
              <p>
                A person wishing to be associated with the Society as its
                shareholder, depositor, borrower or guarantor has to become a
                member by paying an entrance fee of Rs. 10/- and by purchasing
                at least one share of Rs. 100/- each of the Society of total
                value of Rs. 100/-. A person's membership can be discontinued by
                surrendering his shares to the society, after a minimum period
                of 2 year's association.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Members;

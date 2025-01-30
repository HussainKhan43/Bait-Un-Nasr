import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../pages/Home.css";

function Activities() {
  return (
    <>
      {/* Banner Section */}
      <section className="banner-img bg-success text-light py-5">
        <Container>
          <Row>
            <Col className="text-center">
              <h1 className="pt-5 mt-5 display-4">Activities</h1>
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
            <Col>
              <h2 className="latest-news-title">Activities</h2>
              <hr />
              <p>
                The main activities of the Society is inculcating saving habits
                among the poor, lower middle, as well as middle class persons of
                the community and helping the needy amongst them through a
                system of interest-free credit. Its objects also encompassed
                providing low-cost houses to persons from the lower and middle
                income groups of the community. The operations of Bait-un-Nasr
                aimed at ultimately creating an interest free niche in the
                economy.
              </p>
            </Col>
          </Row>
          <br/><br/>
          <Row className="align-items-center">
            <Col>
              <h2 className="latest-news-title">Our Other Activities</h2>
              <hr />
              <p>
                Bait-un-Nas'r planning to extend the facility of accepting
                electricity and telephone bills of its customers for payment,
                through all its branch offices, by charging nominal service
                charges. Any person or member can get details of this facility
                from the Manager of a branch office of Bait-Un-Nas'r in the
                vicinity of their activities
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Activities;

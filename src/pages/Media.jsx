import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import media1 from "../assets/media1.jpg";
import media2 from "../assets/media2.jpg";
import media3 from "../assets/media3.jpg";
import media4 from "../assets/media4.jpg";
import media5 from "../assets/media5.jpg";

function Media() {
  return (
    <>
      {/* Banner Section */}
      <section className="banner-img bg-success text-light py-5">
        <Container>
          <Row>
            <Col className="text-center">
              <h1 className="pt-5 mt-5 display-4">Media</h1>
              <p className="lead mt-3">
                Explore our memorable moments and key milestones.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Gallery Section */}
      <section className="gallery-section py-5">
        <Container>
        <h2 className="latest-news-title text-center"> Our Media</h2>
          {/* Gallery Row */}
          <Row className="mt-5">
            {/* Gallery Item */}
            <Col lg={4}>
              <img src={media1} alt="Gallery Image 1" height={420} />
            </Col>
            <Col lg={4}>
              <img src={media2} alt="Gallery Image 2" height={420} />
            </Col>
            <Col lg={4}>
              <img src={media3} alt="Gallery Image 3" height={420} />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="gallery-section py-5">
        <Container>
          <Row className="">
            <Col lg={4}>
              <img src={media4} alt="Gallery Image 1" height={420} />
            </Col>
            <Col lg={4}>
              <img src={media5} alt="Gallery Image 2" height={420} />
            </Col>
            <Col lg={4}>
              <img src={media2} alt="Gallery Image 3" height={420} />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Media;

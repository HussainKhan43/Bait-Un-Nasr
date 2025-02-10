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
      <section className="banner-img bg-dark text-light py-5">
        <Container>
        <Row>
            <Col className="text-center">
              <h1 className="pt-5 mt-5 display-4">Media</h1>
              <p className="lead mt-3">Explore the Deposit options available for you to achieve your financial goals.</p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Gallery Section */}
      <section className="gallery-section py-5">
        <Container>
          <h2 className="text-center fw-bold mb-5">Our Media</h2>
          {/* First Gallery Row */}
          <Row className="gy-4">
            <Col xs={12} md={6} lg={4} className="d-flex justify-content-center">
              <img
                src={media1}
                alt="Gallery Image 1"
                className="img-fluid rounded shadow"
                style={{ height: "420px", objectFit: "cover", width: "100%" }}
              />
            </Col>
            <Col xs={12} md={6} lg={4} className="d-flex justify-content-center">
              <img
                src={media2}
                alt="Gallery Image 2"
                className="img-fluid rounded shadow"
                style={{ height: "420px", objectFit: "cover", width: "100%" }}
              />
            </Col>
            <Col xs={12} md={6} lg={4} className="d-flex justify-content-center">
              <img
                src={media3}
                alt="Gallery Image 3"
                className="img-fluid rounded shadow"
                style={{ height: "420px", objectFit: "cover", width: "100%" }}
              />
            </Col>
          </Row>

          {/* Second Gallery Row */}
          <Row className="gy-4 mt-4">
            <Col xs={12} md={6} lg={4} className="d-flex justify-content-center">
              <img
                src={media4}
                alt="Gallery Image 4"
                className="img-fluid rounded shadow"
                style={{ height: "420px", objectFit: "cover", width: "100%" }}
              />
            </Col>
            <Col xs={12} md={6} lg={4} className="d-flex justify-content-center">
              <img
                src={media5}
                alt="Gallery Image 5"
                className="img-fluid rounded shadow"
                style={{ height: "420px", objectFit: "cover", width: "100%" }}
              />
            </Col>
            <Col xs={12} md={6} lg={4} className="d-flex justify-content-center">
              <img
                src={media2}
                alt="Gallery Image 6"
                className="img-fluid rounded shadow"
                style={{ height: "420px", objectFit: "cover", width: "100%" }}
              />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Media;
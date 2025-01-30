import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import logo from "../assets/logo.jpg";
import facebook from "../assets/facebook-img.png";

function Footer() {
  return (
    <footer className="bg-success text-light mt-auto py-5">
      <Container>
        <Row className="align-items-start">
          {/* Logo and Button */}
          <Col xs={12} md={6} lg={3} className="text-center text-md-start mb-4">
            <img src={logo} alt="Company Logo" height={50} className="mb-3" />
            <p className="mb-3">
              The main purpose of the Society is to provide banking facilities
              to its members on Islamic lines. It accepts deposits from<br /> its
               members on an interest-free basis.
            </p>
            <Button variant="dark" className="mt-2">
              KNOW MORE
            </Button>
          </Col>

          {/* Popular Sites */}
          <Col xs={12} md={6} lg={3} className="text-center text-md-start mb-4">
            <h4 className="mb-3">POPULAR SITES</h4>
            <ul className="list-unstyled">
              <li>
                <a href="/" className="text-light text-decoration-none">
                  Home
                </a>
              </li>
              <li>
                <a href="/" className="text-light text-decoration-none">
                  About
                </a>
              </li>
              <li>
                <a href="/services" className="text-light text-decoration-none">
                  Services
                </a>
              </li>
              <li>
                <a href="/gallery" className="text-light text-decoration-none">
                  Gallery
                </a>
              </li>
              <li>
                <a href="/contact" className="text-light text-decoration-none">
                  Contact
                </a>
              </li>
            </ul>
          </Col>

          {/* Location and Contact */}
          <Col xs={12} md={6} lg={3} className="text-center text-md-start mb-4">
            <h4 className="mb-3">LOCATION</h4>
            <p className="mb-2">
              Shop No. 3, Farida Apartment,
              <br />
              Shop No.2, L. J. Cross Road No.2,
              <br />
              Mahim, Mumbai – 400016
            </p>
            <h5 className="mb-1">Call Us:</h5>
            <p>
              <i className="fa-solid fa-phone"></i> +91 8928611405
            </p>
            <p>
              <i className="fa-solid fa-envelope"></i> info@bait-un-nasr.org
            </p>
          </Col>

          {/* Social Media */}
          <Col xs={12} md={6} lg={3} className="text-center text-md-start">
            <h4 className="mb-3">FOLLOW US</h4>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={facebook}
                alt="Facebook"
                className="img-fluid mb-3"
                style={{ maxHeight: "100px" }}
              />
            </a>
            <div
              className="d-flex justify-content-center justify-content-md-start mt-3"
              style={{ fontSize: "2rem", gap: "15px" }}
            >
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light"
              >
                <i className="fa-brands fa-facebook-square"></i>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light"
              >
                <i className="fa-brands fa-twitter-square"></i>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light"
              >
                <i className="fa-brands fa-instagram-square"></i>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light"
              >
                <i className="fa-brands fa-youtube-square"></i>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </div>
          </Col>
        </Row>

        {/* Footer Bottom Text */}
        <Row className="mt-5">
          <Col className="text-center">
            <hr />
            <h6 className="mb-0">
              © Copyright 2025. BAIT-UN-NASR | Developed by Hussain Khan
            </h6>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;

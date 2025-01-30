import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Contact() {
  return (
    <>
      {/* Banner Section */}
      <section className="banner-img bg-success text-light py-5">
        <Container>
          <Row>
            <Col className="text-center">
              <h1 className="pt-5 mt-5 display-4">CONTACT US</h1>
              <p className="lead mt-3">We are here to assist you. Reach out for any queries or assistance!</p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contact Section */}
      <section className="pt-5 pb-5 contact-part">
        <Container>
          <Row className="gy-4">
            {/* Contact Form */}
            <Col lg={6} className="mb-4">
              <h2 className="mb-3">Get in Touch</h2>
              <p className="text-muted">Please fill out the form below, and we’ll get back to you soon.</p>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="Your Name"
                    className="py-3"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="email"
                    placeholder="Your Email Address"
                    className="py-3"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="tel"
                    placeholder="Your Mobile Number"
                    className="py-3"
                  />
                </Form.Group>
                <Form.Group className="mb-4">
                  <Form.Control
                    as="textarea"
                    placeholder="Your Message"
                    rows={5}
                    className="py-3"
                  />
                </Form.Group>
                <Button variant="success" className="btn-lg w-100 mb-4">
                  Send Message
                </Button>
              </Form>
            </Col>

            {/* Google Map */}
            <Col lg={6}>
              <div className="mt-4">
                <h4 className="mb-3">Find Us on the Map</h4>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.539204681813!2d72.83738317497635!3d19.040016182157224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c92d94b9972f%3A0x7b4a782f46c88fb8!2sBait-un-Nasr!5e0!3m2!1sen!2sin!4v1737868320195!5m2!1sen!2sin"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Map"
                ></iframe>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Branch Details Section */}
      <section className="pt-5 pb-5 branch-details">
        <Container>
          <Row>
            <h2 className="mb-3 text-center">Our Branches</h2>
            <p className="text-muted text-center mb-4">Visit or contact any of our branches listed below for assistance.</p>

            <div className="d-flex flex-wrap justify-content-between">
              {/* Individual Branches */}
              {[
                { title: "Head Office", address: "Shop No. 3, Farida Apartment, L.J. Cross Road No.2, Mahim, Mumbai–400016.", tel: "89286 11405" },
                { title: "Mahim", address: "Shop No. 2, Farida Apartment, L.J. Cross Road No.2, Mahim, Mumbai–400016.", tel: "93242 27146" },
                { title: "Bandra (W)", address: "Shop No. 24, Zarina Co-op. Hsg. Soc., Bazar Road, Bandra (West), Mumbai – 400050.", tel: "93243 13546" },
                { title: "Dharavi", address: "Shop No. 5, Nagree Apartments, Dharavi Main Road, Near Dharavi Jama Masjid, Mumbai – 400017.", tel: "87794 73045" },
                { title: "Morland Road", address: "Qayyum Manzil, Shop No.7, Near Rehmani Mosque, Off Moreland Road, Madanpura, Mumbai – 400008.", tel: "93242 16471" },
                { title: "Memonwada", address: "68/A, 'Nas'r House', Memonwada Road, Near Chuna Bhatti Masjid, Mumbai – 400003.", tel: "89280 65364" },
                { title: "Jogeshwari (W)", address: "Shop No. 32-33, Heena Arcade, S.V. Road, Near Deewan Center, Jogeshwari (West), Mumbai – 400102.", tel: "88508 63469" },
                { title: "Jogeshwari (E)", address: "'Nasr Spot', House No. KEM 1008, Janta Quarters, Colaba Plot, Near Jhula Maidan, Jogeshwari East, Mumbai – 400060.", tel: "96536 89680" },
                { title: "Jogeshwari (E)", address: "'Nasr Spot', House No. KEM 1008, Janta Quarters, Colaba Plot, Near Jhula Maidan, Jogeshwari East, Mumbai – 400060.", tel: "96536 89680" },

              ].map((branch, index) => (
                <Col md={6} lg={4} key={index} className="mb-4">
                  <div className="branch-card p-4 border">
                    <h5 className="fw-bold">{branch.title}</h5>
                    <p>{branch.address}</p>
                    <p><i className="fa-solid fa-phone text-success me-2"></i>Tel.: {branch.tel}</p>
                    <Button variant="link" className="p-0 text-success">Get Direction</Button>
                  </div>
                </Col>
              ))}
            </div>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Contact;

import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Card from 'react-bootstrap/Card';
import gallery1 from "../assets/gallery1.jpg";
import gallery2 from "../assets/gallery2.jpg";
import gallery3 from "../assets/gallery3.jpg";
import gallery4 from "../assets/gallery4.jpg";
import gallery5 from "../assets/gallery5.jpg";
import gallery6 from "../assets/gallery6.jpg";
import gallery7 from "../assets/gallery7.jpg";
import gallery8 from "../assets/gallery8.jpg";
import img1 from "../assets/img1.jpeg";
import img2 from "../assets/img2.jpg";
import dir1 from "../assets/dir1.jpg";
import dir2 from "../assets/dir2.jpg";
import dir3 from "../assets/dir3.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import '../pages/Home.css';

function Home() {
  // Inline style for captions (same as before)
  const captionStyle = {
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)", // Adds shadow for better readability
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "white",
    textAlign: "center",
  };

  // Carousel Item background styles
  const itemStyle = (image) => ({
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100%", // Adjust the height as needed
    width: "100%", // Adjust the width as needed
    position: "relative",
    borderRadius: "10px", // Rounded corners for a softer look
  });

  return (
    <>
      <section>
        <Carousel interval={5000}> {/* Auto-rotate every 5 seconds */}
          <Carousel.Item className="carousel-item-custom" style={{ backgroundImage: `url(${gallery1})` }}>
            <Carousel.Caption className="carousel-caption-custom">
              <h3>MAHIM BRANCH</h3>
              <p>MAKING YOUR FUTURE OUR BUSINESS.</p>
              <Button variant="success">KNOW MORE</Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="carousel-item-custom" style={{ backgroundImage: `url(${gallery2})` }}>
            <Carousel.Caption className="carousel-caption-custom">
              <h3>DHARAVI BRANCH</h3>
              <p>MAKING YOUR FUTURE OUR BUSINESS.</p>
              <Button variant="success">KNOW MORE</Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="carousel-item-custom" style={{ backgroundImage: `url(${gallery3})` }}>
            <Carousel.Caption className="carousel-caption-custom">
              <h3>MORLAND ROAD BRANCH</h3>
              <p>MAKING YOUR FUTURE OUR BUSINESS.</p>
              <Button variant="success">KNOW MORE</Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="carousel-item-custom" style={{ backgroundImage: `url(${gallery4})` }}>
            <Carousel.Caption className="carousel-caption-custom">
              <h3>MEMONWADA BRANCH</h3>
              <p>MAKING YOUR FUTURE OUR BUSINESS.</p>
              <Button variant="success">KNOW MORE</Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="carousel-item-custom" style={{ backgroundImage: `url(${gallery5})` }}>
            <Carousel.Caption className="carousel-caption-custom">
              <h3>JOGESHWARI WEST BRANCH</h3>
              <p>MAKING YOUR FUTURE OUR BUSINESS.</p>
              <Button variant="success">KNOW MORE</Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="carousel-item-custom" style={{ backgroundImage: `url(${gallery6})` }}>
            <Carousel.Caption className="carousel-caption-custom">
              <h3>BANDRA BRANCH</h3>
              <p>MAKING YOUR FUTURE OUR BUSINESS.</p>
              <Button variant="success">KNOW MORE</Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="carousel-item-custom" style={{ backgroundImage: `url(${gallery7})` }}>
            <Carousel.Caption className="carousel-caption-custom">
              <h3>JOGESHWARI EAST BRANCH</h3>
              <p>MAKING YOUR FUTURE OUR BUSINESS.</p>
              <Button variant="success">KNOW MORE</Button>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>

      {/* Section with text and image */}
      <section className="section-padding mt-5">
        <Container>
          <Row className="align-items-center">
            <Col lg={7}>
              <h2 className="latest-news-title">Welcome to BAIT-UN-NASR</h2>
              <hr />
              <p>
                The Management of Bait-un-Nasr welcomes you to the world of India's premier Islamic financial institution. We are sure that as you read about the institution, you too will feel enthused with the achievements of the Society and want to share the sense of pride that comes with associating with the activities of this growing institution.
              </p>
              <p>
                Registered in 1976 as an Urban Co-operative Credit Society under The Maharashtra Co-operative Societies Act, 1960, the main purpose of the Society is to provide banking facilities to its members on Islamic lines. It accepts deposits from its members on an interest-free basis and extends loans to them on the basis of recovery of the actual cost of operation and under other Shariah-compliant formats. Membership of the Society is open to all citizens residing in its area of operation, irrespective of caste or creed.
              </p>
            </Col>
            <Col lg={5}>
              <img
                src={img1}
                alt="Bait-Un-Nasr"
                className="welcome-img"
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Latest News Section */}
      <section className="section-padding section-bg-light">
        <Container>
          <Row className="align-items-center">
            {/* Left Column */}
            <Col lg={4}>
              <h6 className="latest-news-header">18-June-2015</h6>
              <h2 className="latest-news-title">Latest News</h2>
              <p className="latest-news-description">
                6th Branch of the Society opened at Jogeshwari West
              </p>
            </Col>

            {/* Right Column with Images */}
            <Col lg={8}>
              <div className="d-flex-custom">
                {/* Image 1 */}
                <img
                  src={img2}
                  alt="Branch Opening"
                  className="latest-news-img"
                />
                {/* Image 2 */}
                <img
                  src={gallery8}
                  alt="Branch Opening"
                  className="latest-news-img"
                />
                {/* Image 3 */}
                <img
                  src={gallery1}
                  alt="Branch Opening"
                  className="latest-news-img"
                />
              </div>
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
            <Card.Text>
              Chief Advisor and Consultant
            </Card.Text>
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
            <Card.Text>
              Chairman
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col xs={12} sm={6} md={4} className="mb-4">
        <Card className="director-card">
          <div className="director-image-container">
            <Card.Img variant="top" src={dir3} />
          </div>
          <Card.Body className="text-center">
            <Card.Title >Mr. Mohd. Salim Kazi</Card.Title>
            <Card.Text>
              Managing Director
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    <Row className="text-center">
      <Col>
        <Button variant="success" size="lg" className="mx-auto d-block mt-4">READ MORE</Button>
      </Col>
    </Row>
  </Container>
</section>


{/* Gallery Section */}
<section className="gallery-section py-5 mt-5">
        <Container>
          <h2 className="mb-4 text-center">Our Gallery</h2>

          {/* Gallery Row */}
          <Row className="gy-4">
            {/* Gallery Item */}
            <Col lg={3} md={4} sm={6} xs={12}>
              <div className="gallery-card">
                <img src={gallery1} alt="Gallery Image 1" className="img-fluid rounded" />
                <div className="gallery-card-text">
                  <p>Resumption of operations of Mahim Branch Office on 1st March 2014</p>
                </div>
              </div>
            </Col>
            <Col lg={3} md={4} sm={6} xs={12}>
              <div className="gallery-card">
                <img src={gallery2} alt="Gallery Image 2" className="img-fluid rounded" />
                <div className="gallery-card-text">
                  <p>Resumption of operations of Dharavi Branch Office on 16 June 2014</p>
                </div>
              </div>
            </Col>
            <Col lg={3} md={4} sm={6} xs={12}>
              <div className="gallery-card">
                <img src={gallery3} alt="Gallery Image 3" className="img-fluid rounded" />
                <div className="gallery-card-text">
                  <p>Resumption of operations of Moreland Office on 1st December 2014</p>
                </div>
              </div>
            </Col>
            <Col lg={3} md={4} sm={6} xs={12}>
              <div className="gallery-card">
                <img src={gallery4} alt="Gallery Image 4" className="img-fluid rounded" />
                <div className="gallery-card-text">
                  <p>Resumption of operations of Memonwada Branch Office on 13th February 2015</p>
                </div>
              </div>
            </Col>
          </Row>

          <Row className="gy-4">
            <Col lg={3} md={4} sm={6} xs={12}>
              <div className="gallery-card">
                <img src={gallery5} alt="Gallery Image 5" className="img-fluid rounded" />
                <div className="gallery-card-text">
                  <p>Resumption of operations of Jogeshwari West Branch Office on 15th June 2015</p>
                </div>
              </div>
            </Col>
            <Col lg={3} md={4} sm={6} xs={12}>
              <div className="gallery-card">
                <img src={gallery6} alt="Gallery Image 6" className="img-fluid rounded" />
                <div className="gallery-card-text">
                  <p>Resumption of operations of Bandra Branch Office on 11th April 2014</p>
                </div>
              </div>
            </Col>
            <Col lg={3} md={4} sm={6} xs={12}>
              <div className="gallery-card">
                <img src={gallery7} alt="Gallery Image 7" className="img-fluid rounded" />
                <div className="gallery-card-text">
                  <p>Resumption of operations of Jogeshwari East Branch Office on 20th Aug 2016</p>
                </div>
              </div>
            </Col>
            <Col lg={3} md={4} sm={6} xs={12}>
              <div className="gallery-card">
                <img src={gallery8} alt="Gallery Image 8" className="img-fluid rounded" />
                <div className="gallery-card-text">
                  <p>Resumption of operations of Mahim Branch Office on 1st March 2014</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

    </>
  );
}

export default Home;

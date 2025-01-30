import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import gallery1 from '../assets/gallery1.jpg'
import gallery2 from '../assets/gallery2.jpg'
import gallery3 from '../assets/gallery3.jpg'
import gallery4 from '../assets/gallery4.jpg'
import gallery5 from '../assets/gallery5.jpg'
import gallery6 from '../assets/gallery6.jpg'
import gallery7 from '../assets/gallery7.jpg'
import gallery8 from '../assets/gallery8.jpg'

function Gallery() {
  return (
    <>
      {/* Banner Section */}
      <section className="banner-img bg-success text-light py-5">
        <Container>
          <Row>
            <Col className="text-center">
              <h1 className="pt-5 mt-5 display-4">GALLERY</h1>
              <p className="lead mt-3">Explore our memorable moments and key milestones.</p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Gallery Section */}
      <section className="gallery-section py-5">
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
  )
}

export default Gallery;

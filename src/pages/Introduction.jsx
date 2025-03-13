import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../pages/Home.css";
import about1 from "../assets/about1.png";
import about2 from "../assets/about2.jpg";
import about3 from "../assets/about3.jpg";

function Introduction() {
  return (
    <>
      {/* Banner Section */}
      <section className="banner-img bg-dark text-light py-5">
        <Container>
          <Row>
            <Col className="text-center">
              <h1 className="pt-5 mt-5 display-4">ABOUT US</h1>
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
            <Col lg={7}>
              <h2 className="latest-news-title">ABOUT US</h2>
              <hr />
              <p>
                Bait-Un-Nas'r was set up as an Urban Co-operative Credit
                Society, on Friday, 1st October 1976, under the Maharashtra
                Co-op. Societies Act, 1960. It was registered with the Registrar
                of Co-operative Societies to operate on banking lines, but
                without interest, with the registration number BOM/RSR/786 OF
                1976. Since its registration, the Society has come a long way.
                It commenced its operations, from the office of MESCO, a
                socio-educational organization, with a meagre fund of Rs.
                12,000/- only.
              </p>
              <br />
              <br />
              <p>
                The Society functioned with dedication to the ideals of
                co-operation and provided interest-free thrift and credit
                services to members for a period of about 25 years. By May 2000,
                it had branches in 19 localities in the region of Greater Mumbai
                and its share capital had reached Rs.1.29 crores and its
                deposits had crossed Rs. 15.15 crores its operations were
                running very smoothly and it was rendering excellent services to
                its members and depositors.
              </p>
            </Col>
            <Col lg={5}>
              <img src={about1} alt="Bait-Un-Nasr" className="welcome-img" />
            </Col>
          </Row>
          <Row className="mt-5 pt-4">
            <hr />
            <p>
              During this period of 25 years there was no instance of
              irregularity or failure to meet its obligations on the part of the
              Society. The Society was considered as one of the leading
              co-operative credit societies of Mumbai and was constantly awarded
              wi <br /> <br />
              Unfortunately in 2000, the Society had to suspend its operations.
              The Society was occasioned by the unfortunate circulation of
              unfounded rumours. Members and depositors falling victim to false
              news reports about the society published by a local newspaper,
              approached the branch offices of the Society en masse, demanding
              the return of their money.
              <br />
              <br /> The management of the Society made concerted efforts for
              immediate return of deposits. However, in spite of all liquidity
              with the management being consumed and efforts to call in
              outstanding loans and mobilize additional funds, the pressure of
              the members continued unabated. In some cases, on not being repaid
              their deposits immediately, depositors, turned violent. Observing
              several offices being attacked, the staff of the Society became
              fearful and refused to report for duty. Due to the violent
            </p>
          </Row>
        </Container>
      </section>

      {/* Section with text and image */}
      <section className="section-padding mt-5">
        <Container>
          <Row className="align-items-center">
            <Col lg={7}>
              <h2 className="latest-news-title">The Revival of the Society</h2>
              <hr />
              <p>
                In year 2012, some members with the intention of seeing the
                Society re-start its operations so that the members could again
                reap the benefits which they had enjoyed from it earlier,
                approached the dysfunctional Board of Directors of the Society,
                seeking their co-operation in the mission of re-starting the
                Society. Since most of the Directors in past 12 years, reached
                an advanced age and were no longer in a position to take up the
                enormous responsibility of reconstructing and again running the
                S
              </p>
              <br />
              <br />
              <p>
                Most of the senior staff members had been earlier associated
                with the Society for long periods of the order of 20 years of
                selfless and sincere service. They had excellent relations with
                the ordinary members and were well versed with the functioning
                of the Society and its rules as well as the regulations
                governing the operations of the Society. They were also fully
                aware of the genesis of the problem that had led to the
                suspension of operations and hence best suited to lead the
                efforts for re-s
              </p>
            </Col>
            <Col lg={5}>
              <img src={about2} alt="Bait-Un-Nasr" className="welcome-img" />
            </Col>
          </Row>
          <Row className="mt-5 pt-4">
  <Col lg={7}>
    <hr />
    <p className="pt-5">
      The Liquidator and Dy. Registrar agreed for the revival of the
      Society and called a Special General Meeting of the members on 7th
      Nov 2012 and presented the revival scheme to pay off the
      liabilities of the depositors and creditors by selling some excess
      real estate assets of the Society, barring any branch premises
      which was approved by the members present. The members present in
      the meeting also elected a new Board of Directors for implementing
      the revival scheme under the Chairmanship of Mr.
    </p>
  </Col>
  <Col lg={5}>
    <img src={about3} alt="Bait-Un-Nasr" className="welcome-img" />
  </Col>
</Row>

        </Container>
      </section>
    </>
  );
}

export default Introduction;

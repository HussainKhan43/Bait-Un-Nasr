import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Loan() {
  return (
    <>
      {/* Banner Section */}
      <section className="banner-img bg-primary text-light py-5">
        <Container>
          <Row>
            <Col className="text-center">
              <h1 className="pt-5 mt-5 display-4">Services</h1>
              <p className="lead mt-3">
                Explore the loan options available for you to achieve your financial goals.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Loan Schemes Section */}
      <Container className="py-5">
        <h2 className="mb-4">Details of the Various Loan Schemes of the Society</h2>
        <ol style={{listStyleType: 'none'}}>
          <li>
            <h3>1. Loan Against Security</h3>
            <p>
              The Society extends loans to individual members or their families to the maximum of Rs. 5,00,000 against full security of:
              <ul>
                <li>Gold Ornaments</li>
                <li>Society’s own deposits</li>
                <li>Equity Shares of listed public limited companies</li>
                <li>Hypothecation of Vehicles</li>
              </ul>
            </p>
          </li>

          <li>
            <h3>2. Installment Purchase Scheme</h3>
            <p>
              The Society finances the purchase of home appliances and vehicles like two-wheelers, auto-rickshaws, taxis, and private cars under its Vehicle Loan policies.
            </p>
          </li>

          <li>
            <h3>3. Loan Repayment</h3>
            <p>
              Depending upon the type of loan and the repayment capacity of the borrower, the loan is repayable in 10, 24, or 36 installments.
            </p>
          </li>

          <li>
            <h3>4. Service Charges</h3>
            <p>
              The Society levies quarterly service charges on all loans, which are less than or equal to the expenses incurred for running the Society. These service charges are payable along with the installment and are calculated using a scientific system based on Islamic principles.
            </p>
          </li>

          <li>
            <h3>5. Profit-sharing Loans</h3>
            <p>
              The Society extends Profit-sharing Loans for business activities to encourage entrepreneurship among its members. Applicants for these loans must submit a Profit-sharing Loan Proposal along with a Project Report. 
              <ul>
                <li>The loan can be sanctioned if the proposal is found to be viable after detailed assessment and due diligence of both the business and the member’s abilities and antecedents.</li>
                <li>These borrowers are not charged service charges, but they are required to share a specified percentage of the business profit with the Society.</li>
              </ul>
            </p>
          </li>
        </ol>
      </Container>
    </>
  );
}

export default Loan;

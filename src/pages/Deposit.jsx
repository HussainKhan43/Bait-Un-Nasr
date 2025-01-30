import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Deposit() {
  return (
    <>
      {/* Banner Section */}
      <section className="banner-img bg-success text-light py-5">
        <Container>
          <Row>
            <Col className="text-center">
              <h1 className="pt-5 mt-5 display-4">Services</h1>
              <p className="lead mt-3">Explore the Deposit options available for you to achieve your financial goals.</p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Deposit Schemes */}
      <Container className="py-5">
        <ol style={{ listStyleType: 'none' }}>
          {/* Current / Spot Deposits */}
          <li>
            <h2>1. Current / Spot Deposits</h2>
            <p>
              These deposit accounts are like current deposit accounts in a bank. However, unlike in banks, these accounts are serviced daily by the Society’s Pigmy Deposit Agents through electronic collection machines at the doorstep of the depositor. The minimum amount to be deposited is Rs. 50/-. No withdrawals are permitted for one month from the date of opening of the account. Thereafter, withdrawals can be made from the concerned branch office against a withdrawal slip. However, a minimum balance of Rs. 500/- must be maintained in the account.
            </p>
          </li>

          {/* Saving Deposits */}
          <li>
            <h2>2. Saving Deposits</h2>
            <p>
              These deposit accounts are like saving bank accounts in a bank. The minimum amount to be deposited is Rs. 500/-. Unlike in banks, there is no limit on the number of withdrawals that can be made in a week. However, a minimum balance of Rs. 500/- is always to be maintained in the account.
            </p>
          </li>

          {/* Recurring Deposits */}
          <li>
            <h2>3. Recurring Deposits</h2>
            <p>
              These are term deposit accounts serviced through the Society’s Agents in which a minimum amount of Rs. 100/- is to be deposited every month. The account should be continued for a term of two to three years without withdrawals before the date of maturity. However, the account-holder can avail of a loan against the balance in his account in case of emergency.
            </p>
          </li>

          {/* Haj - Umrah Deposits */}
          <li>
            <h2>4. Haj - Umrah Deposits</h2>
            <p>
              Haj Umrah deposit scheme is a special type of deposit account which enables a member, particularly in the fixed income group, to save by depositing an agreed fixed sum of money daily, weekly, or monthly over a stipulated period. Persons eager to perform Haj may build-up savings through the Haj Umrah Deposit Scheme. The goal is to enable a person to perform Haj / Umrah with their own micro-savings deposited on a daily basis with the Society after a stipulated time period.
            </p>
          </li>
        </ol>
      </Container>
    </>
  );
}

export default Deposit;

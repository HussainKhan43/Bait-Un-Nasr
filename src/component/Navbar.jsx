import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../assets/logo.jpg";
import { Link } from "react-router-dom";

function AppNavbar() {
  return (
    <>
      <Navbar expand="lg" className="bg-light fixed-top shadow-sm">
        <Container>
          <Navbar.Brand href="#">
            <img src={logo} alt="" height={40} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0"
              style={{ maxHeight: "400px" }}
              navbarScroll
            >
              <Nav.Link as={Link} to="/Home" className="mx-2">
                HOME
              </Nav.Link>

              {/* ABOUT Dropdown */}
              <NavDropdown title="ABOUT" id="navbarScrollingDropdown" className="mx-2">
                <NavDropdown.Item as={Link} to="/Introduction">
                  Introduction
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/Members">
                  Members
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/Directors">
                  Directors
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/ExDirectors">
                  Ex-Directors
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/Activities">
                  Activities
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/Media">
                  Media
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/Progress">
                  Progress Report
                </NavDropdown.Item>
              </NavDropdown>

              {/* SERVICES Dropdown */}
              <NavDropdown title="SERVICES" id="navbarScrollingDropdown" className="mx-2">
                <NavDropdown.Item as={Link} to="/Deposit">
                  Deposit Schemes
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/Loan">
                  Loan Schemes
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to="/Gallery" className="mx-2">
                GALLERY
              </Nav.Link>
              <Nav.Link as={Link} to="/Contact" className="mx-2">
                CONTACT
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Button variant="outline-primary" className="ms-2">
                Login
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default AppNavbar;
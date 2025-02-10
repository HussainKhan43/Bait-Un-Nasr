import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "../component/navbar.css";

function AppNavbar() {
  return (
    <>
      {/* Top Black Bar */}
      <div className="top-bar">
        <span>
          📧 info@bait-un-nasr.org
        </span>
        <span>📍 Find nearest branch</span>
      </div>

      {/* Main Navbar */}
      <Navbar expand="lg" className="main-navbar">
        <Container>
          <Navbar.Brand as={Link} to="/" className="navbar-brand">
            <img src={logo} alt="Logo" className="navbar-logo" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/" className="nav-item">
                Home
              </Nav.Link>

              {/* ABOUT Dropdown */}
              <NavDropdown
                title="ABOUT"
                id="navbarScrollingDropdown"
                className="mx-2"
              >
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
              <NavDropdown
                title="SERVICES"
                id="navbarScrollingDropdown"
                className="mx-2"
              >
                <NavDropdown.Item as={Link} to="/Deposit">
                  Deposit Schemes
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/Loan">
                  Loan Schemes
                </NavDropdown.Item>
              </NavDropdown>

              {/* Branches Dropdown */}
              <NavDropdown
                title="BRANCHES"
                id="navbarScrollingDropdown"
                className="mx-2"
              >
                <NavDropdown.Item as={Link} to="/Mahim">
                  Mahim Branch
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/Bandra">
                  Bandra Branch
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/Dharavi">
                  Dharavi Branch
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/Morland">
                  Morland Branch
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/Memonwada">
                  Memonwada Branch
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/JogeshwariE">
                  Jogeshwari(E) Branch
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/JogeshwariW">
                  Jogeshwari(W) Branch
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/Mumbra">
                  Mumbra Branch
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/Miraroad">
                  Miraroad Branch
                </NavDropdown.Item>
              </NavDropdown>

              <Nav.Link as={Link} to="/Gallery" className="nav-item">
                GALLERY
              </Nav.Link>
              <Nav.Link as={Link} to="/Contact" className="nav-item">
                CONTACT
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default AppNavbar;

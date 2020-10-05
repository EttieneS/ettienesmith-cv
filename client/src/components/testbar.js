import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

export default function App() {
  return (
    //<>
      <Container>
        <Navbar fixed="top">
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#foo">foo</Nav.Link>
            <Nav.Link href="#bar">bar</Nav.Link>
          </Nav>
        </Navbar>
      </Container>
    </>
  );
}

export default testbar;

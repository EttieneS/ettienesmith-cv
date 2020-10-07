import React, { Component } from 'react';
import styled from 'styled-components';
import { Navbar,Nav,NavDropdown } from 'react-bootstrap';


class NavBar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-primary flex-nowrap">
        <a className="navbar-brand d-flex w-50" href="#">Ettiene Smith - Technical C.V</a>
        <div className="w-100 justify-content-center">
          <ul className="navbar-nav mx-auto;">
            <NavDropdown title="Customers" id="basic-nav-dropdown">
              <NavDropdown.Item href="/customers">View All</NavDropdown.Item>
              <NavDropdown.Item href="/customers/create">Add</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Vehicles" id="basic-nav-dropdown">
              <NavDropdown.Item href="/vehicles">View All</NavDropdown.Item>
              <NavDropdown.Item href="/vehicles/create">Add</NavDropdown.Item>
            </NavDropdown>
          </ul>
        </div>
      </nav>
    )
  }
}

export default NavBar;

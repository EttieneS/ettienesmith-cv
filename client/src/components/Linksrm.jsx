import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Navbar,Nav,NavDropdown } from 'react-bootstrap';

const Collapse = styled.div.attrs({className: 'collapse navbar-collapse',}) ``;
const List = styled.div.attrs({className: 'navbar-nav mr-auto',}) ``;
const Item = styled.div.attrs({className: 'collpase navbar-collapse',}) ``;

class Links extends Component {
    render() {
      return (
        <React.Fragment>
          <Link to="/" className="navbar-brand">
            Ettiene Smith's technical C.V.
          </Link>
          <Collapse>
            <List>
              <Item>
                <Link to="/vehicles" className="nav-link">
                  Vehicles
                </Link>
              </Item>
              <Item>
                <Link to="/vehicles/create" className="nav-link">
                  Create Vehicle
                </Link>
              </Item>
            </List>
          </Collapse>
        </React.Fragment>
      )
    }
}

export default Links;

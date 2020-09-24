import React, { Component } from 'react'
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
    MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from "mdbreact";
    import { BrowserRouter as Router } from 'react-router-dom';
export class CustomNavBar extends Component {
    state = {
        isOpen: false
      };
      
      toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
      }
    render() {
        return (
    <Router>
      <MDBNavbar color="pink" dark expand="md">
        <MDBNavbarBrand>
          <strong className="white-text"><img src="logo.png" alt="" width="100" height="100"/></strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem active>
              <MDBNavLink to="/">Home</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#!">Features</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#!">Pricing</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <div className="d-none d-md-inline">Shop</div>
                </MDBDropdownToggle>
                <MDBDropdownMenu className="pink">
                  <MDBDropdownItem href="#!">watches</MDBDropdownItem>
                  <MDBDropdownItem href="#!">shoes</MDBDropdownItem>
                  <MDBDropdownItem href="#!">bags</MDBDropdownItem>
                  <MDBDropdown> <MDBDropdownToggle caret color="gray" >clothes</MDBDropdownToggle>
                  <MDBDropdownMenu className="pink">
                  <MDBDropdownItem href="#!">skirts</MDBDropdownItem>
                  <MDBDropdownItem href="#!">trouser</MDBDropdownItem>
                  <MDBDropdownItem href="#!">dresses</MDBDropdownItem>
                  </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>
          <MDBNavItem>
              <MDBDropdown dropleft>
                <MDBDropdownToggle nav caret>
                  <MDBIcon icon="user" />
                </MDBDropdownToggle >
                <MDBDropdownMenu className="pink">
                  <MDBDropdownItem color="dark" href="#!">Action</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light" to="#!">
                <MDBIcon fab icon="twitter" />
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light" to="#!">
                <MDBIcon fab icon="google-plus-g" />
              </MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    </Router>
            
        );
    }
}


export default CustomNavBar

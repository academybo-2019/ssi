import React, {Component} from 'react';
import {Collapse, Jumbotron, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem} from 'reactstrap';
import {NavLink} from 'react-router-dom'
class HeaderComponent extends Component {
    render() {
        return (
/*agrupa varios elementos sin necesidad de un div su forma abreviada es <></>*/
            <React.Fragment>
                <Navbar dark className="navbar-dark"  expand="md">
                <NavbarBrand href="/">
                    
                    <img src="assets/images/safetylogo.png" alt="SSI" width="40" height="40"/>
                    SSI
                </NavbarBrand>
                <Nav navbar>
                    <NavItem>
                        <NavLink className="nav-link"  to='/home'><span className="fa fa-home fa-lg"></span> Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to='/aboutus'><span className="fa fa-info fa-lg"></span> About Us</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link"  to='/catalog'><span className="fa fa-list fa-lg"></span> Catalog</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to='/contact'><span className="fa fa-address-card fa-lg"></span> Contact Us</NavLink>
                    </NavItem>
                </Nav>

            </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Sistema de Seguridad industrial</h1>
                                <p>We take inspiration from the World's best safety practices, and create a unique
                                    fusion experience. Our awesome safety protection items will tickle your safety
                                    vision!</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </React.Fragment>
        );
    }
}

export default HeaderComponent;

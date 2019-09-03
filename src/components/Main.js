import React, { Component } from 'react';
import {Collapse, Jumbotron, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem} from 'reactstrap';

import CatalogComponent from './CatalogComponent';
import {ITEMS} from '../shared/items';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import {Switch, Route, Redirect} from 'react-router-dom';


class Main extends Component {
    constructor(props, context) {
        super(props, context);
        this.state={
            items: ITEMS
        }
    }
    render() {

        const CatalogRoute = ()=>{
            return (
                <CatalogComponent items={this.state.items}></CatalogComponent>
            );
        }

        return (
            <div>
            
            <Header></Header>
            <Switch>
            <Route path="/home" component={Home}></Route>
            <Route path="/catalog" component={CatalogRoute}></Route>
            <Route path="/contact" component={Contact}></Route>
            <Redirect to="/home"/>
            </Switch>
            <Footer></Footer>
            </div>
        );
    }
}

export default Main;
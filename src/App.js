import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Navbar, NavbarBrand} from 'reactstrap';
import CatalogComponent from './components/CatalogComponent';
import {ITEMS} from './shared/items';

class App extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state={
        items: ITEMS
    }
}

  render(){
    return (
      <div className="App">
            <Navbar dark color="primary">
              <div className="container">
                <NavbarBrand href="/">Sistema de Seguridad Industrial</NavbarBrand>
              </div>
            </Navbar>
            <CatalogComponent items={this.state.items}></CatalogComponent>
          </div>
  
    );
  }
}

export default App;

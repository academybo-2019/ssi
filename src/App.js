import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Navbar, NavbarBrand} from 'reactstrap';
import CatalogComponent from './components/CatalogComponent';

function App() {
  return (
    <div className="App">
          <Navbar dark color="primary">
            <div className="container">
              <NavbarBrand href="/">Sistema de Seguridad Industrial</NavbarBrand>
            </div>
          </Navbar>
          <CatalogComponent></CatalogComponent>
        </div>

  );
}

export default App;

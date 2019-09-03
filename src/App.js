import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Navbar, NavbarBrand} from 'reactstrap';
import CatalogComponent from './components/CatalogComponent';
import {ITEMS} from './shared/items';
import Main from './components/Main';
import {BrowserRouter} from 'react-router-dom';

class App extends React.Component {

  constructor(props, context) {
    super(props, context);
    
}

  render(){
    return (
      <div className="App">
        <BrowserRouter>
            <Main></Main>
        </BrowserRouter>
          </div>
  
    );
  }
}

export default App;

import React, { Component } from 'react';
import HeaderComponent from './HeaderComponent'
import FooterComponent from './FooterComponent'
import CatalogComponent from './CatalogComponent'
import {ITEMS} from '../shared/items';
import {COMMENTS} from '../shared/comments';
import {EMPLOYEES} from '../shared/employees'
import HomeComponent from './HomeComponent';
import ContactComponent from './ContactComponent';
import {Switch,Route,Redirect} from 'react-router-dom';
import ItemDetailsComponent from './ItemDetail';

class Main extends Component {

    constructor(props,context) {
        super(props,context)
        this.state={
            items:  ITEMS,
            comments: COMMENTS, 
            employees: EMPLOYEES
        }
    }

    render() {

        const HomeComponentRoute = () =>{
            
            const employee = this.state.employees.filter(item=> item.featured)[0];
            const item = this.state.items.filter(element=> element.featured)[0];

            return (
                <HomeComponent employee={employee} item={item}></HomeComponent>
            );
        }

        const CatalogComponentRoute = () => {
            return (
                <CatalogComponent items={this.state.items}></CatalogComponent>
            );
        };

        const ItemDetailComponentRoute = ({match}) =>{
            const itemSelected = this.state.items.filter(element => element.id === parseInt(match.params.id))[0];
            const commentsSelected = this.state.comments.filter(element => element.itemId === parseInt(match.params.id));
            return (<ItemDetailsComponent item={itemSelected} comments={commentsSelected}></ItemDetailsComponent>);
        }

        return (
            <div>
                <HeaderComponent></HeaderComponent>
                <Switch>
                    <Route path="/home" component={HomeComponentRoute}></Route>
                    <Route exact path="/catalog" component={CatalogComponentRoute}></Route>
                    <Route exact path="/catalog/:id" component={ItemDetailComponentRoute}></Route>
                    <Route path="/contact" component={ContactComponent}></Route>
                    <Redirect to="/home"></Redirect>
                </Switch>
                <FooterComponent></FooterComponent>
            </div>
        );
    }
}

export default Main;

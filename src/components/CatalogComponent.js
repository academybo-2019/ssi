import React, { Component } from 'react';
import {Media, Card, CardImg, CardImgOverlay, CardTitle, CardBody, CardText} from 'reactstrap';
import ItemDetail from './ItemDetail';
class CatalogComponent extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            selectedItem: null
        }
    }
    
    onItemSelect(item){
        this.setState({
            selectedItem:item
        })
    }

    
    

    render() {
        const imgStyle = {
            maxHeight: 128,
            maxWidth: 128
        };

        
        var catalog= this.props.items.map((item,index )=> {
            return (
                <div key={index} className="col-12 col-md-5 m-1">
            <Card onClick={()=>{this.onItemSelect(item)}}>
                    <CardImg width="100%" src={item.image} alt={item.name}/>
                <CardImgOverlay>
                    <CardTitle>{item.name}</CardTitle>
                </CardImgOverlay>
            </Card>
        </div>

            );
        });
        

        return (
              <div className="container">
                <div className="row">
                        {catalog}
                </div>
                <div className="row">
                    <ItemDetail selectedItem={this.state.selectedItem}></ItemDetail>
                </div>
            </div>

        );
    }
}

export default CatalogComponent;
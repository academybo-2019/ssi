import React, { Component } from 'react';
import {Media, Card, CardImg, CardImgOverlay, CardTitle, CardBody, CardText} from 'reactstrap';
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

    renderItem(item) {
        if (item != null) {
            return (
                <Card className="col-5">
                    <CardImg width="100%" src={item.image} alt={item.name}/>
                    <CardBody>
                        <CardTitle>{item.name}</CardTitle>
                        <CardText>{item.description}</CardText>
                    </CardBody>
                </Card>
            );
    
        } else {
            return (
                <div/>
            );
        }
    
    }
    

    render() {
        const imgStyle = {
            maxHeight: 128,
            maxWidth: 128
        };

        
        var catalog= this.props.items.map(item => {
            return (
                <div key={item.id} className="col-12 col-md-5 m-1">
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
                {this.renderItem(this.state.selectedItem)}
                </div>
            </div>

        );
    }
}

export default CatalogComponent;
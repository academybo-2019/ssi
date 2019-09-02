import React, { Component } from 'react';
import {Media, Card, CardImg, CardImgOverlay, CardTitle} from 'reactstrap';
class CatalogComponent extends Component {

    constructor(props, context) {
        super(props, context);
    
    }
    

    render() {
        const imgStyle = {
            maxHeight: 128,
            maxWidth: 128
        };

        
        var catalog= this.props.items.map(item => {
            return (
                <div key={item.id} className="col-12 col-md-5 m-1">
            <Card>
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
            </div>

        );
    }
}

export default CatalogComponent;
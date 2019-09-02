import React, { Component } from 'react';
import {Media} from 'reactstrap';
class CatalogComponent extends Component {

    constructor(props, context) {
        super(props, context);
    
        this.state={
            items:[
                {
                    name: 'Helmet',
                    image: '/assets/images/helmet.jpg',
                    category: 'safety',
                    label: 'ultra safe',
                    price: '4.99',
                    description: 'Un casco de seguridad útil para proteger en ámbitos como la construcción, fabricas y otros'
                },
                {
                    name: 'Audio protector',
                    image: '/assets/images/audio.jpg',
                    category: 'safety',
                    label: 'noise filter',
                    price: '12.99',
                    description: 'Protege de ruidos auditivos por encima de los decibeles considerados aceptables'
                },
                {
                    name: 'Glasses',
                    image: '/assets/images/glasses.jpg',
                    category: 'safety',
                    label: 'New technology',
                    price: '31.99',
                    description: 'Permite filtrar rayos ultravioleta, material anti rayas, anti caidas'
                },
                {
                    name: 'Gloves',
                    image: '/assets/images/gloves.jpg',
                    category: 'safety',
                    label: '',
                    price: '12.99',
                    description: 'Hechos de algodón con goma antideslizante, especial para industria química.'
                }
                
            ]
        }
    }
    

    render() {
        const imgStyle = {
            maxHeight: 128,
            maxWidth: 128
        };

        
        var catalog= this.state.items.map(item => {
            return (
                <div key={item.id} className="col-12 mt-5">
                    <Media tag="li">
                        <Media left middle>
                            <Media object src={item.image} alt={item.name} style={imgStyle} />
                        </Media>
                        <Media body className="ml-5">
                            <Media heading>{item.name}</Media>
                            <p>{item.description}</p>
                        </Media>
                    </Media>
                </div>
            );
        });
        

        return (
              <div className="container">
                <div className="row">
                    <Media list>
                        {catalog}
                    </Media>
                </div>
            </div>

        );
    }
}

export default CatalogComponent;
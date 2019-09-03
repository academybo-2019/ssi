import React, { Component } from 'react';
import {Card, CardImg, CardImgOverlay, CardTitle, Row} from 'reactstrap';
import ItemDetailsComponent from './ItemDetail';
import {Breadcrumb, BreadcrumbItem} from 'reactstrap'
import {Link} from 'react-router-dom';

class CatalogComponent extends Component {

    constructor(props,context) {
        super(props,context)
    }


    renderItem(item) {
        
        if(item != null){
            console.log(item.comments);
            return(
                <div className="col-12 col-md-5 mt-5">
                    <Card>
                        <CardImg width="100%" src={item.image} alt={item.name}/>
                        <CardImgOverlay>
                            <CardTitle>{item.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        }else{
            return(<div></div>);
        }
    }

    render() {
        const catalog = this.props.items.map((item,index)=>{
            return (
                <div key={index} className="col-12 col-md-5 mt-5" >
                    <Card>
                        <Link to={`/catalog/${item.id}`}>
                        <CardImg width="100%" src={item.image} alt={item.name}/>
                        <CardImgOverlay>
                            <CardTitle>{item.name}</CardTitle>
                        </CardImgOverlay>
                        </Link>
                    </Card>
                </div>
            );
        });

        return (
            <div className="container">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Catalog</BreadcrumbItem>
                </Breadcrumb>
                <div className="row">
                    {catalog}
                </div>
            </div>
        );
    }
}

export default CatalogComponent;

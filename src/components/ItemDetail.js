import React, { Component } from 'react';
import {Card, CardImg, CardTitle, CardImgOverlay, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom';

class ItemDetail extends Component {

    constructor(props, context){
        super(props, context)    
    }

    renderItem(item) {
        
        if(item != null){
            console.log(item.comments);
            return(
                    <Card>
                        <CardImg width="100%" src={item.image} alt={item.name}/>
                        <CardImgOverlay>
                            <CardTitle>{item.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
            );
        }else{
            return(<div></div>);
        }
    }

    renderComments(comments) {
        
        if(comments != null){
            const resume = comments.map((c,index)=>{
                return(
                    <li key={index}>
                        {c.comment}-{c.author}
                    </li>
                );
            });
            return(
                <ul>
                    {resume}
                </ul>
            );
        }else{
            return(<div></div>);
        }
    }

    render() {
        return (
            <div className="container">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/catalog">Catalog</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{this.props.item.name}</BreadcrumbItem>
                </Breadcrumb>

                <div className="col-12 col-md-5">
                    {this.renderItem(this.props.item?this.props.item:null)}
                </div>
                <div className="col-12 col-md-5 ">
                    {this.renderComments(this.props.comments?this.props.comments:null)}
                </div>
            </div>
        );
    }
}

export default ItemDetail;

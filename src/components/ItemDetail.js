import React, { Component } from 'react';
import {Media, Card, CardImg, CardImgOverlay, CardTitle, CardBody, CardText} from 'reactstrap';
class ItemDetail extends Component {

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

    renderComments(comments){
        if(comments != null) {
            const listComments = comments.map((c,index)=>{
                return (
                    <li key={index}>{c.comment} - {c.author}</li>
                );
            });
            return (
                <ul>
                    {listComments}
                </ul>
            );
        }else{
            return <div></div>
;        }
    }
    render() {
        return (
            <>
                {this.renderItem(this.props.selectedItem?this.props.selectedItem:null)}
            <div className="col-12 col-md-5 m-1">
                {this.renderComments(this.props.selectedItem?this.props.selectedItem.comments:null)}
            </div>
            </>
        );
    }
}

export default ItemDetail;
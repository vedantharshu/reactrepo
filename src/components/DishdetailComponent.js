import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';


class DishDetail extends Component {


    renderDish(dish){
        return (
            <div className="col=12 col-md-5 m-1">
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} /> 
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }

    renderComments(comments){
        const commentlist = comments.map((comment) => {
            return(
                <div key={comment.id}>
                    <p>{comment.comment}</p>
                    <p>--{comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day:'2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                </div>
            )
        });
        
        return(commentlist)

    }

    render(){

        if(this.props.detail != null){
            return(
                <div class = "container">
                    <div className="row">
                        {this.renderDish(this.props.detail)}
                        <div className="col=12 col-md-5 m-1">
                            <h4>Comments</h4>
                            {this.renderComments(this.props.detail.comments)}
                        </div>
                    </div>
                </div>
            );
        }
        else{
            return(<div></div>)
        }
    }
    

}

export default DishDetail;
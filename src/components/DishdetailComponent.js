import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';


    const DishDetail= (props) => {
        if(props.dish != null){
            return(
                    <div class = "container">
                        <div className="row">
                    
                         <RenderDish dish={props.dish} />
                            <div className="col-12 col-md-5 m-1 ">
                             <h4>Comments</h4>
                             .<ul className="list-unstyled">
                             <RenderComments comments = {props.dish.comments} />
                             </ul>
                        </div>
                    
                        </div>
                    </div>
                );
        }
        else{
            return(
                <div></div>);
        }
    }    
    function RenderComments({comments}){
        const cmnt=comments.map((comment) => {
            return(
                    <div key={comment.id} className="row" >
                        <p width="100%">{comment.comment}</p>
                        <p>--{comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day:'2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                    </div>
                );
        });
        return (cmnt);
    }
    function RenderDish({dish}) {
        if (dish != null)
            return(
                <Card className="col-lg-5">
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody >
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>

                </Card>

            );
        else
            return(
                <div></div>
            );
    }


export default DishDetail;
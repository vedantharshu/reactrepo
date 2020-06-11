import React from 'react';
import { Card, CardImg, Breadcrumb, BreadcrumbItem, CardText, CardBody, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';
import Comment from './CommentForm';

    const DishDetail= (props) => {
        if(props.dish != null){
            return(
                    <div class = "container">
                         <div className="row">
                            <Breadcrumb>
                                <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                                <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                            </Breadcrumb>
                        <div className="col-12">
                            <h3>{props.dish.name}</h3>
                            <hr />
                        </div>                
                        </div>
                        <div className="row">
                            
                                <RenderDish dish={props.dish} />
                            
                            <div className="col-12 col-md-5 m-1 ">
                             <h4>Comments</h4>
                             .<ul className="list-unstyled">
                             <RenderComments comments = {props.comments} />
                             <Comment />
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
import React ,{ Component } from 'react';
import { Card, CardImg, Breadcrumb, BreadcrumbItem, CardText, CardBody, CardTitle, Button, Modal, ModalHeader, ModalBody, Row, Label } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
class Comment extends Component{

    constructor(props){
        super(props);
        this.state={
            isModalOpen:false
        };
        this.handleLogin = this.handleLogin.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal() {
        this.setState({
          isModalOpen: !this.state.isModalOpen
        });
      }
    handleLogin(values) {
        this.toggleModal();
        console.log('Current State is: ' + JSON.stringify(values));
        alert('Current State is: ' + JSON.stringify(values));
        //event.preventDefault();

    }

    render(){
        return(
            <div>
                <Button outline color="secondary" onClick={this.toggleModal}>
                        <span className="fa fa-edit fa-lg m-1"/>
                            Submit Comment
                </Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                <ModalBody>
                <LocalForm onSubmit={(v) => this.handleLogin(v)}>
                        <Row className="form-group">
                            <Label htmlFor="rating">Rating</Label>
                                    <Control.select model=".rating" id="rating" name="rating"
                                        className="form-control">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="username">Your Name</Label>
                            <Control.text model=".username" id="username" name="username"
                                placeholder="username"
                                className="form-control" 
                                validators={{
                                    required, minLength: minLength(3), maxLength: maxLength(15)
                                }} />
                                <Errors
                                        className="text-danger"
                                        model=".username"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                />
                        </Row>
                        <Row className="form-group">
                                <Label htmlFor="message" md={2}>Comment</Label>
                                    <Control.textarea model=".message" id="message" name="message"
                                        rows="6"
                                        className="form-control" />
                            </Row>
                        <Button type="submit" value="submit" color="primary">Submit</Button>
                    </LocalForm>
                </ModalBody>
            </Modal>
            </div>
        );
    }

}
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
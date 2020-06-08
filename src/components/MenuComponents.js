import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';


        function RenderMenuItem({dish}){
          return(
          <Card key={dish.id}>
                  <CardImg width="100%" src={dish.image} alt={dish.name} />
                  <CardImgOverlay>
                      <CardTitle>{dish.name}</CardTitle>
                  </CardImgOverlay>
                </Card>
                );
        }

        const Menu = (props) => {
          const menu = props.dishes.map((dish) => {
            return (
              <div  className="col-12 col-md-5 m-1">
                <RenderMenuItem dish={dish} />
              </div>
            );
        });

          return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
            </div>
        );
        }
        

export default Menu;
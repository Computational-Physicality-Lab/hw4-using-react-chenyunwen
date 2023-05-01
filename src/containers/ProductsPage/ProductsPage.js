import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'reactstrap';

import appRoutes from '../../shared/appRoutes';
import shirtList from '../../shared/shirts';

import './ProductsPage.css';

function ProductsPage() {
    return (
      <div className="products">
        <Container>
          <p className="headerStyle">Our T-Shirts</p>
          <Row>
            {shirtList.map((shirt, index) => {
              let colorNum = (shirt.colors) ? Object.keys(shirt.colors).length : null;
              if(!colorNum) {
                return;
              }
              let temp = (colorNum > 1) ? "colors" : "color";
              let v = Object.values(shirt.colors)[0];
              let pic = (v.front) ? v.front : shirt.default.front;
              let name = shirt.name ? shirt.name : "Not Found :("; 
              return (
                <Col
                  key={shirt.name}
                  // tag={Link}
                  to={`${appRoutes.products}/${index}`}
                  lg={4}
                  md={6}
                  sm={12}
                  className='t-shirt-block'
                >
                  <Link to={`${appRoutes.products}/${index}`}><img src={pic} alt={name} /></Link>
                  <p className="t-shirt-title">{`${name}`}</p>
                  <p className="t-shirt-text">Available in {`${colorNum} ${temp}`}</p>
                  <Button href={`${appRoutes.products}/${index}`} className='product-btn'>See Page</Button>
                </Col>
              );
            })}
          </Row>
        </Container>

      </div>
    );
}
  
  export default ProductsPage;
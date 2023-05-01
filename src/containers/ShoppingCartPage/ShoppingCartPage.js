import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import { Container, Row, Col, Button } from 'reactstrap';

// import appRoutes from '../../../shared/appRoutes';
import shirtList from '../../shared/shirts';
import default_shirt_front from '../../assets/shirt_images/default-w-front.png'
import default_shirt_back from '../../assets/shirt_images/default-w-back.png'

import './ShoppingCartPage.css';

function ShoppingCartPage(prop) {
    
    return (
      <div className="shopping-cart-page">
        <Container style={{marginBottom: '10px'}}>
            <p className="product-name">{`My Cart(${prop.total_quantity})`}</p>
            <p className="product-name">{prop.total_quantity === 0 ? 'Your Cart is Empty' : ''}</p>
            <Row>
                <Col lg={8} md={12} sm={12} className=''>
                    <hr className='shopping-cart-line'/>
                    <Row>
                        <Col lg={4} md={4} sm={12}>
                        {/* <hr className='shopping-cart-line'/> */}
                        
                        </Col>
                        <Col lg={8} md={8} sm={12}>
                        <hr className='shopping-cart-line'/>
                        </Col>
                    </Row>
                </Col>
                <Col lg={4} md={12} sm={12} className=''>
                    
                </Col>
            </Row>
        </Container>
      </div>
    );
}

export default ShoppingCartPage;
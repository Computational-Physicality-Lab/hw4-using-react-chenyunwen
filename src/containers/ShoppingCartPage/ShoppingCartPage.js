import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import { Container, Row, Col, Button } from 'reactstrap';

import appRoutes from '../../shared/appRoutes';
import shirtList from '../../shared/shirts';
import default_shirt_front from '../../assets/shirt_images/default-w-front.png'
import default_shirt_back from '../../assets/shirt_images/default-w-back.png'

import './ShoppingCartPage.css';

function ShoppingCartPage(prop) {

    const Quantitys = Array.from({length: 20}, (_, i) => i + 1);
    let subtotal_price = Number(Number(prop.subtotal_price).toFixed(2));
    const print_subtotal_price = subtotal_price === 0 ? '0.00' : (subtotal_price*100%100 === 0)? subtotal_price + '.00' : (subtotal_price*100%10 === 0)? subtotal_price + '0' : subtotal_price;
    console.log(print_subtotal_price);
    subtotal_price += subtotal_price === 0 ? 0 : 6.95;
    subtotal_price = Number(subtotal_price.toFixed(2));
    const print_total_price = subtotal_price === 0 ? '0.00' : (subtotal_price*100%100 === 0)? subtotal_price + '.00' : (subtotal_price*100%10 === 0)? subtotal_price + '0' : subtotal_price;
    console.log(print_total_price);
    
    return (
      <div className="shopping-cart-page">
        <Container style={{marginBottom: '10px'}}>
            <p className="product-name">{`My Cart(${prop.total_quantity})`}</p>
            
            <Row>
                <Col lg={6} md={12} sm={12} className=''>
                    <p className="cart-product-name" style={{fontSize: '28pt'}}>{prop.total_quantity === 0 ? 'Your Cart is Empty' : ''}</p>
                    {prop.cart.map((cart_obj, idx)=>{
                        console.log("idx: " + idx);
                        const shirt = shirtList[Number(cart_obj.index)];
                        const { name, price, colors} = shirt;
                        const pic = colors[cart_obj.color]['front']? colors[cart_obj.color]['front']:default_shirt_front;
                        return(
                            <Row key={idx} style={{marginBottom: '10px'}}>
                                <hr className='shopping-cart-line'/>
                                <p className="cart-product-name">{`${name}`}</p>
                                <Col lg={4} md={4} sm={12}>
                                    <Link to={`${appRoutes.products}/${cart_obj.index}`}>
                                        <img src={pic} alt={name} style={{width:'100%'}}/>
                                    </Link>
                                </Col>

                                <Col lg={8} md={8} sm={12}>
                                <div className='option-container'>
                                    <span className="t-shirt-text">Quantity:</span>
                                    <select className='quantity-sel' onChange={(e) => {prop.change_cart_obj(idx, e.target.value)}}>
                                    {Quantitys.map((q) => {
                                        return(Number(cart_obj.quantity) === q ? <option key={q} value={q} selected="faultValue` ">{`${q}`}</option> : <option key={q} value={q}>{`${q}`}</option>)
                                    })}
                                    </select>
                                </div>
                                <div className='option-container'>
                                    <span className="t-shirt-text">Color:</span>
                                    <span className="t-shirt-text" style={{color: '#c51230'}}>{cart_obj.color}</span>
                                </div>
                                <div className='option-container'>
                                    <span className="t-shirt-text">Size:</span>
                                    <span className="t-shirt-text" style={{color: '#c51230'}}>{cart_obj.size}</span>
                                </div>
                                <div className='option-container'>
                                    <span className="t-shirt-text">Price:</span>
                                    <span className="t-shirt-text" style={{color: '#c51230'}}>{price}</span>
                                </div>
                                </Col>
                            </Row>
                        )
                        
                    })}
                    
                </Col>
                <Col lg={6} md={12} sm={12} className=''>
                <div className='price-box'>
                    <span className='price-box-title'>Order Summary</span>
                    <Row>
                        <Col lg={8} md={8} sm={8}>
                            <span className="t-shirt-text price-text">Subtotal:</span>
                        </Col>
                        <Col lg={4} md={4} sm={4}>
                            <span className="t-shirt-text price-text price">{`$${print_subtotal_price}`}</span>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={8} md={8} sm={8}>
                            <span className="t-shirt-text price-text">Est. Shipping:</span>
                        </Col>
                        <Col lg={4} md={4} sm={4}>
                        <span className="t-shirt-text price-text price">{`$${prop.subtotal_price == 0? '0.00' : '6.95'}`}</span>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={8} md={8} sm={8}></Col>
                        <Col lg={4} md={4} sm={4}>
                            <hr className='shopping-cart-line'/>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={8} md={8} sm={8}>
                            <span className="t-shirt-text" style={{fontSize: '24px'}}>Total:</span>
                        </Col>
                        <Col lg={4} md={4} sm={4}>
                        <span className="t-shirt-text price" style={{fontSize: '24px'}}>{`$${print_total_price}`}</span>
                        </Col>
                    </Row>
                    
                </div>
                </Col>
            </Row>
        </Container>
      </div>
    );
}

export default ShoppingCartPage;
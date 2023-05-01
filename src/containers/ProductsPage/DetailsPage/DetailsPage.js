import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import { Container, Row, Col, Button } from 'reactstrap';

// import appRoutes from '../../../shared/appRoutes';
import shirtList from '../../../shared/shirts';

import './DetailsPage.css';

function DetailsPage() {
    const { name } = useParams();
    const shirt = shirtList.filter((srt) => srt.name === name)[0];
    const { description, price, colors } = shirt;

    const [cur_site, setSite] = useState('front');
    const [cur_color, setColor] = useState(Object.keys(colors)[0]);
    const [pic, setPic] = useState(colors[cur_color][cur_site]);
    const [quantity, setQuantity] = useState(1);
    const [size, setSize] = useState('Size');

    function change_site(site){
        setSite(site);
        setPic(colors[cur_color][site]);
    }

    function change_color(color){
        setColor(color);
        setPic(colors[color][cur_site])
    }

    const Quantity = price ? Array.from({length: 20}, (_, i) => i + 1):Array.from({length: 0}, (_, i) => 0);
    function change_quantity(e){
      setQuantity(e.target.value);
    }

    function change_size(e){
      setSize(e.target.value);
    }
 
    const Size = ['Size',
                  'Women’s XS', 'Women’s S', 'Women’s M', 'Women’s L', 'Women’s XL', 'Women’s 2XL', 
                  'Men’s XS', 'Men’s S', 'Men’s M', 'Men’s L', 'Men’s XL', 'Men’s 2XL']

    return (
      <div className="details">
        <Container style={{marginBottom: '10px'}}>
        <p className="product-name">{`${name}`}</p>
          <Row>
            <Col lg={4} md={6} sm={12} className=''>
                <img src={`${pic}`} alt="shirt" style={{width:'100%'}}/>
            </Col>
            <Col lg={8} md={6} sm={12} className=''>
                <p className='t-shirt-title'>{`${price}`}</p>
                <p className='t-shirt-description'>{`${description}`}</p>
                <div className='option-container'>
                    <span className="t-shirt-text">Side:</span>
                    <Button className='product-btn' onClick={() => change_site('front')}>Front</Button>
                    <Button className='product-btn' onClick={() => change_site('back')}>Back</Button>
                </div>
                <div className='option-container'>
                    <span className="t-shirt-text">Color:</span>
                    {Object.keys(colors).map((color, index) => { 
                        return(
                            <Button key={color} className='product-btn color-btn' style={{background: color}} onClick={() => change_color(color)}>{`${color}`}</Button>
                        )
                    })}
                </div>
                <div className='option-container'>
                    <span className="t-shirt-text">Quantity:</span>
                    <select className='quantity-sel' onChange={change_quantity}>
                      {Quantity.map((q) => {
                          return(<option key={q} value={q}>{`${q}`}</option>)
                      })}
                    </select>
                </div>
                <div className='option-container'>
                    <span className="t-shirt-text">Size:</span>
                    <select className='size-sel' onChange={change_size}>
                      {Size.map((s) => {
                          return(<option key={s} value={s} >{`${s}`}</option>)
                      })}
                    </select>
                </div>

                <div className='option-container' id='add-to-cart'>
                  <Button className='product-btn' disabled={size == 'Size' ? true : false}>Add To Cart</Button>
                </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
}

export default DetailsPage;



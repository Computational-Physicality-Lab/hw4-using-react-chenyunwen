import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import { Container, Row, Col, Button } from 'reactstrap';

// import appRoutes from '../../../shared/appRoutes';
import shirtList from '../../../shared/shirts';
import default_shirt_front from '../../../assets/shirt_images/default-w-front.png'
import default_shirt_back from '../../../assets/shirt_images/default-w-back.png'

import './DetailsPage.css';

function DetailsPage() {
    const { index } = useParams();
    // console.log(index)
    const shirt = shirtList[Number(index)]; //.filter((srt) => srt.name === name)[0];
    const { name, description, price, colors } = shirt;

    const [cur_site, setSite] = useState('front');
    const [cur_color, setColor] = useState(Object.keys(colors)[0]);
    const [pic, setPic] = useState(colors[cur_color][cur_site]);
    const [quantity, setQuantity] = useState(price? 1 : 0);
    const [size, setSize] = useState('Size');

    function change_site(site){
        setSite(site);
        setPic(colors[cur_color][site]? colors[cur_color][site] : site === 'front'? default_shirt_front:default_shirt_back);
    }

    function change_color(color){
        setColor(color);
        setPic(colors[color][cur_site]? colors[color][cur_site]: cur_site === 'front'? default_shirt_front:default_shirt_back)
    }

    const Quantitys = price ? Array.from({length: 20}, (_, i) => i + 1):Array.from({length: 1}, (_, i) => 0);
    function change_quantity(e){
      setQuantity(e.target.value);
    }

    function change_size(e){
      setSize(e.target.value);
    }
 
    function add_to_cart(){
      
    }
    // useEffect(() => {
    //     localStorage.setItem("myData", JSON.stringify(data));
    // }, [data]);

    const Size = ['Size',
                  'Women’s XS', 'Women’s S', 'Women’s M', 'Women’s L', 'Women’s XL', 'Women’s 2XL', 
                  'Men’s XS', 'Men’s S', 'Men’s M', 'Men’s L', 'Men’s XL', 'Men’s 2XL']

    return (
      <div className="details">
        <Container style={{marginBottom: '10px'}}>
        <p className="product-name">{`${name}`}</p>
          <Row>
            <Col lg={4} md={6} sm={12} className=''>
                <img src={`${pic ? pic : default_shirt_front}`} alt="shirt" style={{width:'100%'}}/>
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
                      {Quantitys.map((q) => {
                          return(quantity === 0 ? <option key={0} value={0}>0</option>: <option key={q} value={q}>{`${q}`}</option>)
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
                  <Button className='product-btn' disabled={(quantity === 0 || size === 'Size') ? true : false} onClick={() => add_to_cart()}>Add To Cart</Button>
                </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
}

export default DetailsPage;



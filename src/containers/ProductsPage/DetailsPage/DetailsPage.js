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

    // let cur_color = Object.values(colors)[0];
    // let pic = (cur_color.front) ? cur_color.front : shirt.default.front;
    const [cur_site, setSite] = useState('front');
    const [cur_color, setColor] = useState(Object.keys(colors)[0]);
    const [pic, setPic] = useState(colors[cur_color][cur_site]);

    function change_site(site){
        setSite(site);
        setPic(colors[cur_color][site]);
    }

    function change_color(color){
        setColor(color);
        setPic(colors[color][cur_site])
    }

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
            </Col>
          </Row>
        </Container>
        
        
      </div>
    );
}
  
  export default DetailsPage;
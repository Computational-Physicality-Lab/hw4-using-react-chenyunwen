import React from 'react';
import { Container } from 'reactstrap';
// import Vader from '../../assets/imgs/darth-banner.jpg';
// import YouTube from 'react-youtube';
import banner from '../../assets/images/banner.png';
import './HomePage.css';

function HomePage() {
    return (
      <div className="Home">
        <div className='Banner'>
            <img src={banner} alt="home banner"/>
        </div>
        
         {/* Text Box */}
        <div className='text-box-container'>
        {/* <Container> */}
            <div className='text-box'>
                <p className='text-box-title'>Discover Your Perfect Style Here!</p>
                <p className='text-box-text'>Welcome to our fashion-forward clothing shopping website! Here, you can find the latest fashion trends with diverse styles suitable for any occasion and personal preference. Whether you want to showcase your fashion taste or need a comfortable casual outfit, we have got you covered.</p>
            </div>
            <div className='text-box'>
                <p className='text-box-title'>Get Your Perfect Outfit Here!</p>
                <p className='text-box-text'>Our exceptional clothing line is crafted with premium materials and superior workmanship to provide unparalleled comfort and confidence throughout your day. Additionally, we offer an extensive selection of styles to accommodate a diverse range of individuals.</p>
            </div>
        {/* </Container> */}
            
        </div>

      </div>
    );
}
  
  export default HomePage;
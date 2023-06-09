import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import appRoutes from '../../shared/appRoutes';
import './Footer.css';

function Footer(args) {

  return (
    <div className='footer'>
        <Link to={appRoutes.not_implemented} className='footer-font'>Contact Us</Link>
        <Link to={appRoutes.not_implemented} className='footer-font'>Site Map</Link>
        <Link to={appRoutes.not_implemented} className='footer-font'>Privacy Policy</Link>
        <Link to={appRoutes.not_implemented} className='footer-font'>Careers</Link>
        <Link to={appRoutes.not_implemented} className='footer-font'>Reviews</Link>
        <span className="footer-font" style={{color: 'white'}}>Designed by Yun-Wen, Chen</span>
    </div>
  );
}

export default Footer;
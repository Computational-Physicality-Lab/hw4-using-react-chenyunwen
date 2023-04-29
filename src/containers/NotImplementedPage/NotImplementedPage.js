import React from 'react';
import scotty from '../../assets/images/scotty.png';
import './NotImplementedPage.css';

function NotImplementedPage() {
    return (
      <div className="Not-Implemented-Page">

        <div className ='background-404'>
            <div><img src={scotty} alt="" height="400px" style={{opacity: '0.5'}}/></div>
            <div className='text-404'>Oops, this page doesn't exist yet... how about a shirt from the last page?</div>
        </div>

      </div>
    );
}
  
  export default NotImplementedPage;
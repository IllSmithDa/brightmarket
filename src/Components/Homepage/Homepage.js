import React from 'react';
import Navbar from '../Navbar/Navbar'
import './Homepage.css';

const Homepage = () => {
    return(
        <div className='homepage-container'>
            <div>
            <Navbar />
            </div>
          
            <div>
            <p>Welcome to the Bright Market</p>
            </div>
        </div>
    );
}

export default Homepage
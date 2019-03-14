import React from 'react';
import Navbar from '../Navbar/Navbar';
import PopularItems from '../PopularItems/PopularItems';
import './Homepage.css';
import '../../App.css';

const Homepage = () => {
    return(
        <div>
            <Navbar />
            <PopularItems />
        </div>
    );
}

export default Homepage
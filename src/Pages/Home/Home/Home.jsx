import React from 'react';


import Category from '../Category/Category';

import Gallery from '../../../components/Gallery';
import Review from '../../../components/Review';

import useTitle from '../../../hooks/useTitle';


const Home = () => {
    useTitle('Home')
    return (
        <div>
            
            <Category></Category>
            
            <Gallery></Gallery>
            <Review></Review>
            
        </div>
    );
};

export default Home;
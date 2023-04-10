import React from 'react';
import LatestNews from '../components/LatestNews';
import PopularByCategory from '../components/PopularByCategory';
import CategoryNames from '../components/CategoryNames';

const Home = () => {
    return (
        <>
            <LatestNews />
            <PopularByCategory />
            <CategoryNames />
        </>
    );
};

export default Home;

import React from 'react';
import Heading from '../UI/Heading';
import { Link } from 'react-router-dom';
import SingleCategory from './SingleCategory';
import { allCategories } from '../customData';

const CategoryNames = () => {
    return (
        <section className=''>
            <div className='mb-4'>
                <Heading>Откройте для себя больше тем</Heading>
            </div>
            <ul className='flex flex-wrap items-center gap-4'>
                {allCategories.map((item, index) => (
                    <Link to={`/category/${item.value}`} key={index}>
                        <SingleCategory givenCategory={item.name} />
                    </Link>
                ))}
            </ul>
        </section>
    );
};

export default CategoryNames;

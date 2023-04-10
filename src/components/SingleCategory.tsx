import React from 'react';
import { capitalizeFirstLetter } from '../utils/utils';

interface SingleCategoryProps {
    givenCategory: string;
}

const SingleCategory = ({ givenCategory }: SingleCategoryProps) => {
    return (
        <li className='cursor-pointer rounded-md border border-gray-300 px-4 py-2 text-sm font-medium'>
            {capitalizeFirstLetter(givenCategory)}
        </li>
    );
};

export default SingleCategory;

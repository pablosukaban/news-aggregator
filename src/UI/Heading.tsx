import React from 'react';

interface HeadingProps {
    children: React.ReactNode;
}

const Heading = ({ children }: HeadingProps) => {
    return <h1 className='mb-4 text-2xl font-bold'>{children}</h1>;
};

export default Heading;

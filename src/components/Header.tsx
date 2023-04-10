import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { BiBookOpen } from 'react-icons/bi';
import Autohrise from './Autohrise';

const Header = () => {
    return (
        <header className=' fixed z-50 w-full border-b border-b-gray-300 bg-white shadow-sm'>
            <div className='container mx-auto h-16 '>
                <nav className='flex h-full items-center justify-between'>
                    <Link to='/'>
                        <div className='flex items-center gap-1 text-xl text-gray-600 transition hover:text-gray-500'>
                            <BiBookOpen />
                            <div className=''>Новости</div>
                        </div>
                    </Link>
                    <div>
                        <Link to='/search'>Поиск</Link>
                    </div>
                    <Autohrise />
                </nav>
            </div>
        </header>
    );
};

export default Header;

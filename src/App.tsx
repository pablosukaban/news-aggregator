import React from 'react';
import Home from './pages/HomePage';
import { Routes, Route } from 'react-router-dom';
import CategoryPage from './pages/CategoryPage';
import Header from './components/Header';
import Footer from './components/Footer';
import SearchPage from './pages/SearchPage';

const App = () => {
    return (
        <div className=' font-roboto'>
            <Header />
            <div className='container mx-auto min-h-screen py-20'>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/category/:name' element={<CategoryPage />} />
                    <Route path='/search' element={<SearchPage />} />
                </Routes>
            </div>
            <Footer />
        </div>
    );
};

export default App;

import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Home/Navbar';
import Footer from '../Home/Footer';

const MainLayout = () => {
    return (
        <div className='max-w-[1520px] mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;
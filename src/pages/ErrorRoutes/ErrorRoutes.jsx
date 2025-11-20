import React from 'react';
import Error from '../../components/Error/Error';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const ErrorRoutes = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Error></Error>
            <Footer></Footer>
        </div>
    );
};

export default ErrorRoutes;
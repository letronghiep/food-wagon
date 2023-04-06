import React, { Fragment } from 'react'
import Navigation from './Navigation'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

function MainLayout() {
    return (
        <>
            <Navigation />
            <Outlet />
            <Footer />
        </>
    );
}

export default MainLayout

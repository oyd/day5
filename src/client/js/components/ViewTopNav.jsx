import React from 'react';
import Container from 'react-bootstrap/Container';
import { Outlet } from 'react-router-dom';
import TopNav from './TopNav';

const ViewTopNav = () => {
    return (
        <Container className="view-top-nav">
            <TopNav />
            <Outlet />
        </Container>
    );
};

export default ViewTopNav;

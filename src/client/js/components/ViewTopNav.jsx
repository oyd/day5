import React from 'react';
import Container from 'react-bootstrap/Container';
import { Outlet } from 'react-router-dom';
import Navpanel from './Navpanel';

const ViewTopNav = () => {
    return (
        <Container className="view-top-nav">
            <Navpanel />
            <Outlet />
        </Container>
    );
};

export default ViewTopNav;

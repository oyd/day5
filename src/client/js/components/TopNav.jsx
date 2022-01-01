import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Links from '@components/Links';

const TopNav = () => (
    <Navbar className="top-nav">
        <Nav>
            <Links links={['day', 'settings', 'about']} />
        </Nav>
    </Navbar>
);

export default TopNav;

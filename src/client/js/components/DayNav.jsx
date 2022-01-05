import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Links from '@components/Links';

const DayNav = () => (
    <Nav variant="pills" className="day-nav flex-column">
        <Links links={['overview', 'off']} />
    </Nav>
);

export default DayNav;

import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';

const Navpanel = () => {
    const links = [
        { url: 'day', text: 'День' },
        { url: 'settings', text: 'Настройки' },
        { url: 'about', text: 'О программе' },
    ];

    function renderLinks() {
        return links.map((link) => (
            <Nav.Link to={link.url} as={NavLink} key={link.url}>
                {link.text}
            </Nav.Link>
        ));
    }

    return (
        <Navbar className="navpanel">
            <Nav>{renderLinks()}</Nav>
        </Navbar>
    );
};


export default Navpanel;

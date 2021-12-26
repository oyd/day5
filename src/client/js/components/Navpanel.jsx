import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

const Navpanel = () => {
    const { t } = useTranslation();
    const links = ['day', 'settings', 'about'];

    function renderLinks() {
        return links.map((link) => (
            <Nav.Link to={link} as={NavLink} key={link}>
                {t('link.' + link)}
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

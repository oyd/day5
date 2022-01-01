import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Links = ({ links }) => {
    const { t } = useTranslation();

    return links.map((link) => (
        <Nav.Link to={link} as={NavLink} key={link}>
            {t('link.' + link)}
        </Nav.Link>
    ));
};

export default Links;

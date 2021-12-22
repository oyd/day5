import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link, useLocation, useParams } from 'react-router-dom';
import { matchPathParts } from '../other/utils';

const Navpanel = () => {
    const { pathname } = useLocation();
    const links = [
        { url: 'day', text: 'День' },
        { url: 'settings', text: 'Настройки' },
        { url: 'about', text: 'О программе' },
    ];
    const urls = links.map((link) => link.url);
    const activeKey = matchPathParts(pathname, urls, '/');
    /*------ */
    /*const params = useParams();
    console.log(params);*/

    function renderLinks() {
        return links.map((link) => (
            <Nav.Link to={link.url} as={Link} eventKey={link.url} key={link.url}>
                {link.text}
            </Nav.Link>
        ));
    }

    return (
        <Navbar className="navpanel">
            <Nav activeKey={activeKey}>{renderLinks()}</Nav>
        </Navbar>
    );
};

/*
                <LinkContainer to="/day">
                    <Nav.Link href="/day" as={Link}>День</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/about">
                    <Nav.Link href="/about" as={Link}>О программе</Nav.Link>
                </LinkContainer>

*/

/*
import NavDropdown from 'react-bootstrap/NavDropdown';
<NavDropdown title="Отчеты" id="reportsMenu">
                    <NavDropdown.Item href='/#reports-by-weeks'>Отчет по неделям</NavDropdown.Item>
                </NavDropdown>
*/

export default Navpanel;

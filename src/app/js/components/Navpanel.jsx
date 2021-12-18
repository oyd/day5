import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';

const Navpanel = () => {
    return (
        <Navbar className="navpanel">
            <Nav>
                <Nav.Link href="/#day">☀️ День</Nav.Link>
                <Nav.Link href="/#about">О программе</Nav.Link>
            </Nav>
        </Navbar>
    );
};

/*
<NavDropdown title="Отчеты" id="reportsMenu">
                    <NavDropdown.Item href='/#reports-by-weeks'>Отчет по неделям</NavDropdown.Item>
                </NavDropdown>
*/

export default Navpanel;

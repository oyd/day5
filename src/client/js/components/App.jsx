import React from 'react';
import Container from 'react-bootstrap/Container';
import { Outlet } from 'react-router-dom';
import Navpanel from './Navpanel';

const App = () => {
    return (
        <Container className="app">
            <Navpanel />
            <Outlet />
        </Container>
    );
};

export default App;

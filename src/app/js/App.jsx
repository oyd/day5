import React from 'react';
import ReactDom from 'react-dom';
import './../sass/styles.scss';
import Container from 'react-bootstrap/Container';
import Navpanel from './components/Navpanel';
import Calendar from './components/Calendar';

function App() {
    return (
        <Container className="app">
            <Navpanel />
            <Calendar />
            <h1>17 декабря 2021 г.</h1>
        </Container>
    );
}

ReactDom.render(
    <App />,
    document.body.appendChild(document.createElement('div'))
);

import React from 'react';
import ReactDom from 'react-dom';
import { Settings } from 'luxon';
import './../sass/styles.scss';
import Container from 'react-bootstrap/Container';
import Navpanel from './components/Navpanel';
import Day from './components/Day';

function App() {
    return (
        <Container className="app">
            <Navpanel />
            <Day />
        </Container>
    );
}

Settings.defaultLocale = 'ru';

ReactDom.render(<App />, document.body.appendChild(document.createElement('div')));

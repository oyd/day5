import React from 'react';
import ReactDom from 'react-dom';
import './../sass/styles.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
    return (
        <Container>
            <Row>
                <Col>hello</Col>
                <Col>world!</Col>
            </Row>
            <Row>
                <Col>1 of 3</Col>
                <Col>2 of 3</Col>
                <Col>3 of 3</Col>
            </Row>
        </Container>
    );
}

ReactDom.render(<App />, document.getElementById('app-placeholder'));

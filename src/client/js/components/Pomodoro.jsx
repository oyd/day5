import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const Pomodoro = () => {
    return (
        <Row className="justify-content-center">
            <Col className="pomodoro" md={4}>
                <Row>
                    <Col sm={6}>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Link>Помодоро</Nav.Link>
                            <Nav.Link>Короткий перерыв</Nav.Link>
                            <Nav.Link>Длинный перерыв</Nav.Link>
                        </Nav>
                    </Col>
                    <Col sm={6}>
                        <time className='float-end'>25:00</time>
                        <ButtonGroup className='float-end'>
                            <Button variant="outline-primary">Start</Button>
                            <Button variant="outline-primary">Clear</Button>
                        </ButtonGroup>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
};

export default Pomodoro;
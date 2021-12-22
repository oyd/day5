import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

const Settings = () => {
    return (
        <Row className="settings justify-content-center">
            <Col md={4}>
                <Form>
                    <Form.Group className="mb-3" controlId="formGroupLaguage">
                        <Form.Label>Language</Form.Label>
                        <Form.Select aria-label="Language Select">
                            <option value="en">English</option>
                            <option value="ru">Russian</option>
                        </Form.Select>
                    </Form.Group>
                </Form>
            </Col>
        </Row>
    );
};

export default Settings;

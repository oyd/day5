import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const LayoutCenter = ({ children }) => {
    return (
        <Row className="layout-center">
            <Col>{children}</Col>
        </Row>
    );
};

export default LayoutCenter;

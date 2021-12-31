import React from 'react';
import { DateTime } from 'luxon';
import { useParams } from 'react-router-dom';
import Col from 'react-bootstrap/Col';

const ViewDaySwitch = () => {
    const { date } = useParams();

    return (
        <>
            <Col md={8}>
                <h1>{DateTime.fromISO(date).toLocaleString(DateTime.DATE_FULL)}</h1>
                <h2>{date}</h2>
            </Col>
            <Col md={2}>Additional Navigation</Col>
        </>
    );
};

export default ViewDaySwitch;

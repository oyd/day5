import React, { useEffect } from 'react';
import { DateTime } from 'luxon';
import { useParams, useNavigate } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import useUIStore from '../stores/useUIStore';

const Day = () => {
    const date = useUIStore((state) => state.date);
    const setDate = useUIStore((state) => state.setDate);
    const params = useParams();
    const navigate = useNavigate();

    // Runs every time when renders (better if it's dependent on params.date?)
    useEffect(() => {
        if (date !== params.date) setDate(params.date);
    });

    return (
        <>
            <Col md={8}>
                <h1>{DateTime.fromISO(date).toLocaleString(DateTime.DATE_FULL)}</h1>
                <h2>{date}</h2>
                <button onClick={() => navigate('/day/2022-12-12')}>To 2022!</button>
            </Col>
            <Col md={2}>Additional Navigation</Col>
        </>
    );
};

export default Day;

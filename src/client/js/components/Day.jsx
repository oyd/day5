import React, { useEffect } from 'react';
import { DateTime } from 'luxon';
import { useParams } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import useUIStore from '../stores/useUIStore';
import useNavigateDate from '../hooks/useNavigateDate';

const Day = () => {
    const date = useUIStore((state) => state.date);
    const params = useParams();
    const navigateDate = useNavigateDate();

    // Validate :date parameter
    useEffect(() => {
        if (date !== params.date) navigateDate(params.date);
    }, [params.date]);

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

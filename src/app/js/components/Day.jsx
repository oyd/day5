import React from 'react';
import { DateTime } from 'luxon';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Calendar from './Calendar';
import useAppStore from '../stores/useAppStore';

const Day = () => {
    const day = useAppStore(state => state.day);
    const setDay = useAppStore(state => state.setDay);
    return(
        <Row className='day'>
            <Col md={2}>
                <Calendar onSelectDate={setDay} />
            </Col>
            <Col md={8}>
                <h1>{DateTime.fromISO(day).toLocaleString(DateTime.DATE_FULL)}</h1>
            </Col>
        </Row>
    );
};

export default Day;
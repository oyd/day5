import React from 'react';
import { Outlet } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Calendar from './Calendar';
import useUIStore from '../stores/useUIStore';
import useNavigateDate from '../hooks/useNavigateDate';

const DaySelect = () => {
    const date = useUIStore((state) => state.date);
    const navigateDate = useNavigateDate();
    const highlights = [
        { category: 'holiday', dates: ['2021-12-25', '2022-01-01', '2022-01-02', '2022-01-17'] },
        { category: 'vacation', dates: ['2022-01-05', '2022-01-06', '2022-01-07'] },
    ];

    return (
        <Row className="day">
            <Col md={2}>
                <Calendar selectedDate={date} onSelectDate={navigateDate} highlights={highlights} />
            </Col>
            <Outlet />
        </Row>
    );
};

export default DaySelect;

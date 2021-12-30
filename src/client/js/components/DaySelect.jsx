import React, { useCallback, useEffect } from 'react';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Calendar from './Calendar';
import useUIStore from '../stores/useUIStore';
import { isValidDate } from '../other/utils';

function DefaultDateRedirect() {
    const navigate = useNavigate();
    const date = useUIStore((state) => state.date);
    useEffect(() => navigate(date, {replace: true}), []);
    return null;
}

const DaySelect = () => {
    const setDate = useUIStore((state) => state.setDate);
    const navigate = useNavigate();
    const { date } = useParams();

    const highlights = [
        { category: 'holiday', dates: ['2021-12-25', '2022-01-01', '2022-01-02', '2022-01-17'] },
        { category: 'vacation', dates: ['2022-01-05', '2022-01-06', '2022-01-07'] },
    ];

    const navDate = useCallback((dStr) => {
        setDate(dStr);
        navigate(dStr);
    });

    if (typeof date === 'undefined' || !isValidDate(date)) return (<DefaultDateRedirect />);

    return (
        <Row>
            <Col md={2}>
                <Calendar selectedDate={date} onSelectDate={navDate} highlights={highlights} />
            </Col>
            <Outlet />
        </Row>
    );
};

export default DaySelect;

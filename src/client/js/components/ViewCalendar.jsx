import React, { useEffect } from 'react';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Calendar from './Calendar';
import useUIStore from '@stores/useUIStore';
import { isValidDate } from '@other/utils';
import { setDocumentTitle } from '@hooks/useDocumentTitle';

function DefaultDateRedirect() {
    const navigate = useNavigate();
    const date = useUIStore((state) => state.date);
    useEffect(() => navigate(date, { replace: true }), []);
    return null;
}

const ViewCalendar = () => {
    const setDate = useUIStore((state) => state.setDate);
    const navigate = useNavigate();
    const { date } = useParams();
    setDocumentTitle(date);

    const highlights = [
        { category: 'holiday', dates: ['2021-12-25', '2022-01-01', '2022-01-02', '2022-01-17'] },
        { category: 'vacation', dates: ['2022-01-05', '2022-01-06', '2022-01-07'] },
    ];

    // Validate date and save it in UIStore
    if (typeof date === 'undefined' || !isValidDate(date)) return <DefaultDateRedirect />;
    setDate(date);

    return (
        <Row>
            <Col md={2}>
                <Calendar selectedDate={date} onSelectDate={navigate} highlights={highlights} />
            </Col>
            <Outlet />
        </Row>
    );
};

export default ViewCalendar;

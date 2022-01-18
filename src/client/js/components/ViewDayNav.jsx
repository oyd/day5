import React, { useEffect } from 'react';
import { DateTime } from 'luxon';
import { Outlet, useNavigate, useParams, useMatch } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import useUIStore from '@stores/useUIStore';
import useDayStore from '@stores/useDayStore';
import DayNav from '@components/DayNav';

function DefaultViewRedirect() {
    const navigate = useNavigate();
    const dayView = useUIStore((state) => state.dayView);
    useEffect(() => navigate(dayView, { replace: true }), []);
    return null;
}

const ViewDayNav = () => {
    const { date } = useParams();
    const setDayView = useUIStore((state) => state.setDayView);
    const loadDay = useDayStore((state) => state.loadDay);
    const match = useMatch('/day/:date/:view');

    if (!match) return <DefaultViewRedirect />;
    setDayView(match.params.view);
    loadDay(date);

    return (
        <>
            <Col md={8}>
                <h1>{DateTime.fromISO(date).toLocaleString(DateTime.DATE_FULL)}</h1>
                <Outlet />
            </Col>
            <Col md={2}>
                <DayNav />
            </Col>
        </>
    );
};

export default ViewDayNav;

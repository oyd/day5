import React, { useEffect } from 'react';
import { Outlet, useNavigate, useParams, useMatch } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import useUIStore from '@stores/useUIStore';
import useDayStore from '@stores/useDayStore';
import DayNav from '@components/DayNav';
import DayTitle from '@components/DayTitle';

function DefaultViewRedirect() {
    const navigate = useNavigate();
    const dayView = useUIStore(({ dayView }) => dayView);
    useEffect(() => navigate(dayView, { replace: true }), []);
    return null;
}

const ViewDayNav = () => {
    const { date } = useParams();
    const setDayView = useUIStore(({ setDayView }) => setDayView);
    const loadDay = useDayStore(({ load }) => load);
    const match = useMatch('/day/:date/:view');

    if (!match) return <DefaultViewRedirect />;
    setDayView(match.params.view);
    loadDay(date);

    return (
        <>
            <Col md={8}>
                <DayTitle />
                <Outlet />
            </Col>
            <Col md={2}>
                <DayNav />
            </Col>
        </>
    );
};

export default ViewDayNav;

import React from 'react';
import { DateTime } from 'luxon';
import { useParams, useNavigate, Outlet } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Calendar from './Calendar';
import useAppStore from '../stores/useAppStore';

const DaySelect = () => {
    /*const date = useAppStore((state) => state.date);
    
    const params = useParams();
    const navigate = useNavigate();
    console.log("date from AppStore: " + date);
    console.log("params.date: " + params.date);
    if (date !== params.date) setDate(params.date);*/
    //const date = params.date;
    const date = useAppStore((state) => state.date);
    const setDate = useAppStore((state) => state.setDate);
    const navigate = useNavigate();

    function selectDate(dStr) {
        setDate(dStr);
        navigate(dStr);
    }

    return (
        <Row className="day">
            <Col md={2}>
                <Calendar selectedDate={date} onSelectDate={selectDate} />
            </Col>
            <Outlet />
        </Row>
    );
};

export default DaySelect;

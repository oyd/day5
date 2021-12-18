import React, { useState } from 'react';
import { DateTime, Info } from 'luxon';

const Calendar = () => {
    const [displayDate, setDisplayDate] = useState(
        DateTime.now().startOf('month').toISO()
    );
    const [displayMode, setDisplayMode] = useState('month'); // Other values could be 'year' or 'decade'

    function up() {
        if (displayMode === 'month') {
            setDisplayMode('year');
        }
        if (displayMode === 'year') {
            setDisplayMode('decade');
        }
    }

    function renderMonthView() {
        return <tr><td colSpan={7}><h4>Month</h4></td></tr>;
    }

    function renderYearView() {
        return <tr><td colSpan={7}><h4>Year</h4></td></tr>;
    }

    function renderDecadeView() {
        return <tr><td colSpan={7}><h4>Decade</h4></td></tr>;
    }

    return (
        <table className="calendar">
            <thead>
                <tr>
                    <th className="prev">&laquo;</th>
                    <th className="up"colSpan="5" onClick={up}>Up</th>
                    <th className="next">&raquo;</th>
                </tr>
            </thead>
            <tbody>
                {displayMode === 'month' && renderMonthView()}
                {displayMode === 'year' && renderYearView()}
                {displayMode === 'decade' && renderDecadeView()}
                <tr><td colSpan={7}><h4>{displayDate}</h4></td></tr>
            </tbody>
        </table>

    );
};

export default Calendar;

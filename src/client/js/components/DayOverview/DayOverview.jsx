import React from 'react';
import DayOverviewPomodoro from './DayOverviewPomodoro';

const DayOverview = () => {
    return (
        <table className="day-overview-table">
            <tbody>
                <DayOverviewPomodoro />
            </tbody>
        </table>
    );
};

export default DayOverview;

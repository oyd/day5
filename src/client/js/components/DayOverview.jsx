import React from 'react';
import { DashCircle, PlusCircle } from 'react-bootstrap-icons';

const DayOverview = () => {
    return (
        <table className="day-overview-table">
            <tbody>
                <tr>
                    <th>Pomodoro</th>
                    <td>
                        <span>🍅🍅🍅</span>
                    </td>
                    <td className="controls">
                        <button className="btn-add">
                            <PlusCircle />
                        </button>
                        <button className="btn-remove">
                            <DashCircle />
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    );
};

export default DayOverview;

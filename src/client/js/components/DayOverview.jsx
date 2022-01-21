import React from 'react';
import { DashCircle, PlusCircle } from 'react-bootstrap-icons';
import useDayStore from '@stores/useDayStore';

const DayOverview = () => {
    const pomodoros = useDayStore(({ pomodoros }) => pomodoros);
    const addPomodoro = useDayStore(({ addPomodoro }) => addPomodoro);
    const removePomodoro = useDayStore(({ removePomodoro }) => removePomodoro);

    function renderPomodoros() {
        const pomStr = pomodoros > 0 ? '🍅'.repeat(pomodoros) : '—';
        return <span>{pomStr}</span>;
    }

    return (
        <table className="day-overview-table">
            <tbody>
                <tr>
                    <th>Pomodoro</th>
                    <td>{renderPomodoros()}</td>
                    <td className="controls">
                        <button className="btn-add" onClick={addPomodoro}>
                            <PlusCircle />
                        </button>
                        <button className="btn-remove" onClick={removePomodoro}>
                            <DashCircle />
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    );
};

export default DayOverview;

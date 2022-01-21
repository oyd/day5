import React from 'react';
import { DashCircle, PlusCircle } from 'react-bootstrap-icons';
import useDayStore from '@stores/useDayStore';

const DayOverviewPomodoro = () => {
    const pomodoros = useDayStore(({ pomodoros }) => pomodoros);
    const addPomodoro = useDayStore(({ addPomodoro }) => addPomodoro);
    const removePomodoro = useDayStore(({ removePomodoro }) => removePomodoro);

    function renderPomodoros() {
        const pomStr = pomodoros > 0 ? '🍅'.repeat(pomodoros) : '—';
        return <td>{pomStr}</td>;
    }

    return (
        <tr>
            <th>Pomodoro</th>
            {renderPomodoros()}
            <td className="controls">
                <button className="btn-add" onClick={addPomodoro}>
                    <PlusCircle />
                </button>
                <button className="btn-remove" onClick={removePomodoro}>
                    <DashCircle />
                </button>
            </td>
        </tr>
    );
};

export default DayOverviewPomodoro;

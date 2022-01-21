import React from 'react';
import { DashCircle, PlusCircle } from 'react-bootstrap-icons';
import useDayStore from '@stores/useDayStore';
import { useTranslation } from 'react-i18next';

const DayOverviewPomodoro = () => {
    const { t } = useTranslation();
    const pomodoros = useDayStore(({ pomodoros }) => pomodoros);
    const addPomodoro = useDayStore(({ addPomodoro }) => addPomodoro);
    const removePomodoro = useDayStore(({ removePomodoro }) => removePomodoro);

    function renderPomodoros() {
        const pomStr = pomodoros > 0 ? '🍅'.repeat(pomodoros) : '—';
        return <td>{pomStr}</td>;
    }

    return (
        <tr>
            <th>{t('pomodoro.pomodoro')}</th>
            {renderPomodoros()}
            <td className="controls">
                <button className="btn-add" onClick={addPomodoro}>
                    <PlusCircle />
                </button>
                {pomodoros > 0 && (
                    <button className="btn-remove" onClick={removePomodoro}>
                        <DashCircle />
                    </button>
                )}
            </td>
        </tr>
    );
};

export default DayOverviewPomodoro;

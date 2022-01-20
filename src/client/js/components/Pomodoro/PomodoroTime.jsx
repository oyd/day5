import React from 'react';
import usePomodoroStore from '@stores/usePomodoroStore';

const PomodoroTime = () => {
    const countdown = usePomodoroStore(({ countdown }) => countdown);
    const pad = (n, z = 2) => ('00' + n).slice(-z);

    function renderTime() {
        const seconds = countdown % 60;
        const minutes = (countdown - seconds) / 60;
        return `${pad(minutes)}:${pad(seconds)}`;
    }

    return <time>{renderTime()}</time>;
};

export default PomodoroTime;

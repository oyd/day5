import React from 'react';
import usePomodoroStore from '@stores/usePomodoroStore';
import { setTranslatedTitle } from '@hooks/useDocumentTitle';
import LayoutCenter from '@components/LayoutCenter';
import PomodoroNav from './PomodoroNav';
import PomodoroButtons from './PomodoroButtons';
import PomodoroTime from './PomodoroTime';

const Pomodoro = () => {
    const mode = usePomodoroStore(({ mode }) => mode);
    setTranslatedTitle('pomodoro');

    return (
        <LayoutCenter>
            <div className={['pomodoro', mode].join(' ')}>
                <PomodoroNav />
                <PomodoroTime />
                <PomodoroButtons />
            </div>
        </LayoutCenter>
    );
};

export default Pomodoro;

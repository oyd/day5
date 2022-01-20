import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Play, Pause, Eraser } from 'react-bootstrap-icons';
import { useTranslation } from 'react-i18next';
import usePomodoroStore from '@stores/usePomodoroStore';

const PomodoroButtons = () => {
    const { t } = useTranslation();
    const started = usePomodoroStore(({ started }) => started);
    const paused = usePomodoroStore(({ paused }) => paused);
    const start = usePomodoroStore(({ start }) => start);
    const pause = usePomodoroStore(({ pause }) => pause);
    const reset = usePomodoroStore(({ reset }) => reset);

    function renderIcon(icon) {
        switch (icon) {
            case 'start':
                return <Play />;
            case 'pause':
                return <Pause />;
            case 'reset':
                return <Eraser />;
            default:
                return null;
        }
    }

    function renderButton(btn, handle, disabled) {
        return (
            <Button onClick={handle} disabled={disabled}>
                {renderIcon(btn)}
                {t('pomodoro.' + btn)}
            </Button>
        );
    }

    return (
        <ButtonGroup>
            {renderButton('start', start, !paused)}
            {renderButton('pause', pause, paused)}
            {renderButton('reset', reset, !started)}
        </ButtonGroup>
    );
};

export default PomodoroButtons;

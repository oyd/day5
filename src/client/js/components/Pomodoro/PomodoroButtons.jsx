import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Play, Pause, Eraser } from 'react-bootstrap-icons';
import { useTranslation } from 'react-i18next';
import usePomodoroStore from '@stores/usePomodoroStore';

const PomodoroButtons = () => {
    const { t } = useTranslation();
    const started = usePomodoroStore((state) => state.started);
    const paused = usePomodoroStore((state) => state.paused);
    const start = usePomodoroStore((state) => state.start);
    const pause = usePomodoroStore((state) => state.pause);
    const reset = usePomodoroStore((state) => state.reset);

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

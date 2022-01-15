import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Play, Pause, Eraser } from 'react-bootstrap-icons';
import { useTranslation } from 'react-i18next';
import { pad } from '@other/utils';
import useInterval from '@hooks/useInterval';

const Pomodoro = () => {
    const countdowns = {
        work: 25 * 60,
        short: 5,
        long: 30 * 60,
    };
    const [mode, setMode] = useState('work');
    const [countdown, setCountdown] = useState(countdowns['work']);
    const [started, setStarted] = useState(false);
    const [paused, setPaused] = useState(true);
    const [cycles, setCycles] = useState(0);
    const { t } = useTranslation();

    useInterval(
        () => {
            if (countdown > 0) {
                setCountdown(countdown - 1);
            } else {
                setCycles(cycles + 1);
                setStarted(false);
                setPaused(true);
                setCountdown(countdowns[mode]);
            }
        },
        paused ? null : 1000
    );

    // Actions

    function handleSelectMode(mode) {
        setMode(mode);
        setCountdown(countdowns[mode]);
    }

    function handleStart() {
        setStarted(true);
        setPaused(false);
    }

    function handlePause() {
        setPaused(true);
    }

    function handleReset() {
        setStarted(false);
        setPaused(true);
        setCountdown(countdowns[mode]);
    }

    function handleTimerOff() {}

    // Renders

    function renderNav() {
        return (
            <Nav variant="pills" className="justify-content-center" activeKey={mode} onSelect={handleSelectMode}>
                {Object.keys(countdowns).map((c) => (
                    <Nav.Link eventKey={c} key={c} disabled={started}>
                        {t('pomodoro.' + c)}
                    </Nav.Link>
                ))}
            </Nav>
        );
    }

    function renderCountdown() {
        const seconds = countdown % 60;
        const minutes = ((countdown - seconds) / 60) % 60;
        return <time>{`${pad(minutes, 2)}:${pad(seconds, 2)}`}</time>;
    }

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

    function renderButton(btn, handle) {
        return (
            <Button onClick={handle}>
                {renderIcon(btn)}
                {t('pomodoro.' + btn)}
            </Button>
        );
    }

    function renderButtons() {
        return (
            <ButtonGroup>
                {paused ? renderButton('start', handleStart) : renderButton('pause', handlePause)}
                {renderButton('reset', handleReset)}
            </ButtonGroup>
        );
    }

    return (
        <Row className="justify-content-center">
            <Col className="text-center">
                <div className={['pomodoro', mode].join(' ')}>
                    {renderNav()}
                    {renderCountdown()}
                    {renderButtons()}
                </div>
            </Col>
        </Row>
    );
};

export default Pomodoro;

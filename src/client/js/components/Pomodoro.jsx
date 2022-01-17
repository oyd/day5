import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Play, Pause, Eraser } from 'react-bootstrap-icons';
import { useTranslation } from 'react-i18next';
import usePomodoroStore from '@stores/usePomodoroStore';
import { setTranslatedTitle } from '@hooks/useDocumentTitle';

const Pomodoro = () => {
    const { mode, started, paused, modes, getTime, selectMode, start, pause, reset } = usePomodoroStore();
    const { t } = useTranslation();
    setTranslatedTitle('pomodoro');

    // Renders

    function renderNav() {
        return (
            <Nav variant="pills" className="justify-content-center" activeKey={mode} onSelect={selectMode}>
                {modes().map((c) => (
                    <Nav.Link eventKey={c} key={c} disabled={started}>
                        {t('pomodoro.' + c)}
                    </Nav.Link>
                ))}
            </Nav>
        );
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

    function renderButton(btn, handle, disabled) {
        return (
            <Button onClick={handle} disabled={disabled}>
                {renderIcon(btn)}
                {t('pomodoro.' + btn)}
            </Button>
        );
    }

    function renderButtons() {
        return (
            <ButtonGroup>
                {renderButton('start', start, !paused)}
                {renderButton('pause', pause, paused)}
                {renderButton('reset', reset, !started)}
            </ButtonGroup>
        );
    }

    return (
        <Row className="justify-content-center">
            <Col className="text-center">
                <div className={['pomodoro', mode].join(' ')}>
                    {renderNav()}
                    <time>{getTime()}</time>
                    {renderButtons()}
                </div>
            </Col>
        </Row>
    );
};

export default Pomodoro;

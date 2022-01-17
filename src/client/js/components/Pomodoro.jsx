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
    const state = usePomodoroStore();
    const { t } = useTranslation();
    setTranslatedTitle('pomodoro');

    // Renders

    function renderNav() {
        return (
            <Nav variant="pills" className="justify-content-center" activeKey={state.mode} onSelect={state.selectMode}>
                {state.modes().map((c) => (
                    <Nav.Link eventKey={c} key={c} disabled={state.started}>
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
                {state.paused ? renderButton('start', state.start) : renderButton('pause', state.pause)}
                {renderButton('reset', state.reset)}
            </ButtonGroup>
        );
    }

    return (
        <Row className="justify-content-center">
            <Col className="text-center">
                <div className={['pomodoro', state.mode].join(' ')}>
                    {renderNav()}
                    <time>{state.getTime()}</time>
                    {renderButtons()}
                </div>
            </Col>
        </Row>
    );
};

export default Pomodoro;

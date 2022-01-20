import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import usePomodoroStore from '@stores/usePomodoroStore';
import { setTranslatedTitle } from '@hooks/useDocumentTitle';
import PomodoroNav from './PomodoroNav';
import PomodoroButtons from './PomodoroButtons';
import PomodoroTime from './PomodoroTime';

const Pomodoro = () => {
    const mode = usePomodoroStore(({ mode }) => mode);
    setTranslatedTitle('pomodoro');

    return (
        <Row>
            <Col className="text-center">
                <div className={['pomodoro', mode].join(' ')}>
                    <PomodoroNav />
                    <PomodoroTime />
                    <PomodoroButtons />
                </div>
            </Col>
        </Row>
    );
};

export default Pomodoro;

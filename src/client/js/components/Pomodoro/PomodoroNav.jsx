import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { useTranslation } from 'react-i18next';
import usePomodoroStore from '@stores/usePomodoroStore';

const PomodoroNav = () => {
    const { t } = useTranslation();
    const mode = usePomodoroStore(({ mode }) => mode);
    const started = usePomodoroStore(({ started }) => started);
    const selectMode = usePomodoroStore(({ selectMode }) => selectMode);
    const modes = usePomodoroStore(({ modes }) => modes);
    return (
        <Nav variant="pills" className="justify-content-center" activeKey={mode} onSelect={selectMode}>
            {modes().map((c) => (
                <Nav.Link eventKey={c} key={c} disabled={started}>
                    {t('pomodoro.' + c)}
                </Nav.Link>
            ))}
        </Nav>
    );
};

export default PomodoroNav;

import '../sass/styles.scss';
import React, { useEffect } from 'react';
import ReactDom from 'react-dom';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import '@other/i18n';
import useSettingsStore from '@stores/useSettingsStore';
import { ViewTopNav, ViewCalendar, ViewDayNav, About, Settings, Pomodoro, Waiting, DayOverview } from '@components';

function DayRoutes() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<ViewTopNav />}>
                    <Route path="day" element={<ViewCalendar />}>
                        <Route path=":date" element={<ViewDayNav />}>
                            <Route path="overview" element={<DayOverview />} />
                            <Route path="off" element={<h4>Vacation and Holidays</h4>} />
                        </Route>
                    </Route>
                    <Route path="pomodoro" element={<Pomodoro />} />
                    <Route path="settings" element={<Settings />} />
                    <Route path="about" element={<About />} />
                    <Route index element={<Navigate to="day" />} />
                    <Route path="*" element={<Navigate to="day" />} />
                </Route>
            </Routes>
        </HashRouter>
    );
}

function Index() {
    const settingLoaded = useSettingsStore((state) => state.loaded);
    const loadSettings = useSettingsStore((state) => state.loadSettings);

    useEffect(() => {
        loadSettings();
    }, []);

    return settingLoaded ? <DayRoutes /> : <Waiting />;
}

ReactDom.render(<Index />, document.body.appendChild(document.createElement('div')));

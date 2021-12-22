import '../sass/styles.scss';
import React from 'react';
import ReactDom from 'react-dom';
import { Settings as luxonSettings } from 'luxon';
import { HashRouter, Routes, Route, Navigate, Outlet, useParams } from 'react-router-dom';
import App from './components/App';
import Day from './components/Day';
import About from './components/About';
import useAppStore from './stores/useAppStore';
import DaySelect from './components/DaySelect';
import Settings from './components/Settings';

function Index() {
    const defaultDate = useAppStore((state) => state.date);
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route path="day" element={<DaySelect />}>
                        <Route path=":date" element={<Day />} />
                        <Route index element={<Navigate to={defaultDate} />} />
                    </Route>
                    <Route path="settings" element={<Settings />} />
                    <Route path="about" element={<About />} />
                    <Route index element={<Navigate to="day" />} />
                    <Route path="*" element={<Navigate to="day" />} />
                </Route>
            </Routes>
        </HashRouter>
    );
}

luxonSettings.defaultLocale = 'ru';

ReactDom.render(<Index />, document.body.appendChild(document.createElement('div')));

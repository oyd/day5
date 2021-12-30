import '../sass/styles.scss';
import React from 'react';
import ReactDom from 'react-dom';
import { HashRouter, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import './other/i18n';
import ViewTopNav from './components/ViewTopNav';
import Day from './components/Day';
import About from './components/About';
import DaySelect from './components/DaySelect';
import Settings from './components/Settings';
import selectLanguage from './other/selectLanguage';

function Index() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<ViewTopNav />}>
                    <Route path="day" element={<DaySelect />}>
                        <Route path=":date" element={<Day />} />
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

selectLanguage('en');

ReactDom.render(<Index />, document.body.appendChild(document.createElement('div')));

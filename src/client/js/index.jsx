import '../sass/styles.scss';
import React, { useEffect } from 'react';
import ReactDom from 'react-dom';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import './other/i18n';
import ViewTopNav from './components/ViewTopNav';
import Day from './components/Day';
import About from './components/About';
import DaySelect from './components/DaySelect';
import Settings from './components/Settings';
import selectLanguage from './other/selectLanguage';
import useNavigateDate from './hooks/useNavigateDate';

function NavigateDate() {
    const navigateDate = useNavigateDate();
    useEffect(() => navigateDate(),[]);
    return null;
}

function Index() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<ViewTopNav />}>
                    <Route path="day" element={<DaySelect />}>
                        <Route path=":date" element={<Day />} />
                        <Route index element={<NavigateDate />} />
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

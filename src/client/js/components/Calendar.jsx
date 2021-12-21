import React, { useState, useEffect } from 'react';
import { DateTime, Info } from 'luxon';

const Calendar = (props) => {
    const [displayDate, setDisplayDate] = useState(DateTime.fromISO(props.selectedDate).startOf('month'));
    const [displayMode, setDisplayMode] = useState('month'); // Other values could be 'year' or 'decade'
    //const firstDayOfWeek = i18n.g.firstDayOfWeek;
    const firstDayOfWeek = 0; // 0 - Monday, 6 - Sunday

    useEffect(() => {
        setDisplayDate(DateTime.fromISO(props.selectedDate).startOf('month'));
    }, [props.selectedDate]);

    // Helper functions

    function _startOfDecade() {
        const year = displayDate.year;
        return year - (year % 10);
    }

    function _endOfDecade() {
        return _startOfDecade() + 9;
    }

    function _startOfWeek(d) {
        const days = (6 + d.weekday - firstDayOfWeek) % 7;
        return d.minus({ days: days });
    }

    function _endOfWeek(d) {
        const days = (7 - d.weekday + firstDayOfWeek) % 7;
        return d.plus({ days: days });
    }

    function _getDuration() {
        switch (displayMode) {
            case 'month':
                return { months: 1 };
            case 'year':
                return { years: 1 };
            case 'decade':
                return { years: 10 };
        }
    }

    // Events handling

    function up() {
        if (displayMode === 'month') {
            setDisplayMode('year');
        }
        if (displayMode === 'year') {
            setDisplayMode('decade');
        }
    }

    function next() {
        setDisplayDate(displayDate.plus(_getDuration()));
    }

    function prev() {
        setDisplayDate(displayDate.minus(_getDuration()));
    }

    function selectMonth(month) {
        setDisplayDate(displayDate.set({ month: month + 1 }));
        setDisplayMode('month');
    }

    function selectYear(year) {
        setDisplayDate(displayDate.set({ year: year }));
        setDisplayMode('year');
    }

    // Rendering

    function renderTitle() {
        switch (displayMode) {
            case 'month':
                return displayDate.toFormat('LLLL yyyy');
            case 'year':
                return displayDate.toFormat('yyyy');
            case 'decade':
                return _startOfDecade() + '-' + _endOfDecade();
        }
    }

    function renderDayOfWeek(day) {
        return (
            <th className="dow" key={day}>
                {Info.weekdays('short')[day].substring(0, 2)}
            </th>
        );
    }

    function renderDoWRow() {
        const dayNames = [...Array(7)].map((value, i) => renderDayOfWeek((i + firstDayOfWeek) % 7));
        return <tr key="dow">{dayNames}</tr>;
    }

    function renderMonthView() {
        var today = DateTime.local().startOf('day'),
            firstDateOfMonth = displayDate.startOf('month'),
            lastDateOfMonth = displayDate.endOf('month'),
            firstDisplayDate = _startOfWeek(firstDateOfMonth),
            lastDisplayDate = _endOfWeek(lastDateOfMonth),
            weeksCount = Math.round(lastDisplayDate.diff(firstDisplayDate, 'weeks').weeks),
            highlightedDays = [6, 7]; // Highlight Sunday and Saturday

        //weeks.push(renderDoWRow());
        const weeks = [...Array(weeksCount)].map((value, i) => {
            const weekRow = [...Array(7)].map((value, j) => {
                const d = firstDisplayDate.plus({ days: i * 7 + j });
                const dStr = d.toISODate();
                let styles = ['day'];
                if (highlightedDays.indexOf(d.weekday) > -1) {
                    styles.push('highlighted');
                }
                /*if (d.toISODate() in this.state.holidays) {
                    styles.push('holiday');
                }*/
                if (d < firstDateOfMonth) {
                    styles.push('old');
                }
                if (d > lastDateOfMonth) {
                    styles.push('new');
                }
                if (+d === +today) {
                    styles.push('today');
                }
                if (props.selectedDate === dStr) {
                    styles.push('selected');
                }
                return (
                    <td className={styles.join(' ')} key={d.valueOf()} onClick={() => props.onSelectDate(dStr)}>
                        {d.day}
                    </td>
                );
            });
            return <tr key={i}>{weekRow}</tr>;
        });
        return [renderDoWRow(), ...weeks];
    }

    function renderYearView() {
        const months = Array.from(Array(12).keys()).map((value, i) => (
            <span className="month" key={i} onClick={() => selectMonth(i)}>
                {Info.months('short')[i]}
            </span>
        ));
        return (
            <tr>
                <td className="months" colSpan={7}>
                    {months}
                </td>
            </tr>
        );
    }

    function renderYearLabel(year) {
        let styles = ['year'];
        if (year < _startOfDecade()) {
            styles.push('old');
        }
        if (year > _endOfDecade()) {
            styles.push('new');
        }
        return (
            <span className={styles.join(' ')} key={year} onClick={() => selectYear(year)}>
                {year}
            </span>
        );
    }

    function renderDecadeView() {
        const startOfDecade = _startOfDecade();
        const years = Array.from(Array(12).keys()).map((value, i) => renderYearLabel(startOfDecade + i - 1));
        return (
            <tr>
                <td className="years" colSpan={7}>
                    {years}
                </td>
            </tr>
        );
    }

    return (
        <table className="calendar">
            <tr>
                <th className="prev" onClick={prev}>
                    🡠
                </th>
                <th className="up" colSpan="5" onClick={up}>
                    {renderTitle()}
                </th>
                <th className="next" onClick={next}>
                    🡢
                </th>
            </tr>
            {displayMode === 'month' && renderMonthView()}
            {displayMode === 'year' && renderYearView()}
            {displayMode === 'decade' && renderDecadeView()}
        </table>
    );
};

export default Calendar;

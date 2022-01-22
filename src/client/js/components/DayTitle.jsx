import React from 'react';
import { DateTime } from 'luxon';
import { useTranslation } from 'react-i18next';
import useDayStore from '@stores/useDayStore';

const DayTitle = () => {
    const { t } = useTranslation();
    const day = useDayStore(({ day }) => day);
    const off = useDayStore(({ off }) => off);
    const offTitle = off.length ? ' — ' + off.map((o) => t('off.' + o)).join('. ') : '';
    return (
        <h1>
            {DateTime.fromISO(day).toLocaleString(DateTime.DATE_FULL)}
            {offTitle}
        </h1>
    );
};

export default DayTitle;

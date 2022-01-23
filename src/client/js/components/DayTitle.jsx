import React from 'react';
import { DateTime } from 'luxon';
import { useTranslation } from 'react-i18next';
import useDayStore from '@stores/useDayStore';

const DayTitle = () => {
    const { t } = useTranslation();
    const day = useDayStore(({ day }) => day);
    const holidays = useDayStore(({ holidays }) => holidays);
    const holidaysTitle = holidays.length ? ' — ' + holidays.map((h) => t('holidays.' + h)).join('. ') : '';
    return (
        <h1>
            {DateTime.fromISO(day).toLocaleString(DateTime.DATE_FULL)}
            {holidaysTitle}
        </h1>
    );
};

export default DayTitle;

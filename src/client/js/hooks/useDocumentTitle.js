import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const setDocumentTitle = (title) => {
    const { t } = useTranslation();
    useEffect(() => {
        document.title = t('link.day') + ' | ' + title;
    });
};

const setTranslatedTitle = (title) => {
    const { t } = useTranslation();
    setDocumentTitle(t('link.' + title));
};

export { setDocumentTitle, setTranslatedTitle };

import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const useDocumentTitle = () => {
    const { t } = useTranslation();
    const setDocumentTitle = (title) => {
        useEffect(() => {
            document.title = t('link.day') + ' | ' + title;
        });
    };
    const setTranslatedTitle = (title) => {
        setDocumentTitle(t('link.' + title));
    };

    return { setDocumentTitle, setTranslatedTitle };
};

export default useDocumentTitle;

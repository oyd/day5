import React from 'react';
import Form from 'react-bootstrap/Form';
import { useTranslation } from 'react-i18next';
import { setTranslatedTitle } from '@hooks/useDocumentTitle';
import useSettingsStore from '@stores/useSettingsStore';
import LayoutCenter from '@components/LayoutCenter';

const Settings = () => {
    const { t, i18n } = useTranslation();
    setTranslatedTitle('settings');
    const saveSettings = useSettingsStore((state) => state.saveSettings);
    const setLanguage = useSettingsStore((state) => state.setLanguage);
    const languages = ['en', 'ru', 'es'];

    function handleSelectLanguage(lng) {
        setLanguage(lng);
        saveSettings();
    }

    return (
        <LayoutCenter>
            <Form className="settings">
                <Form.Group className="mb-3" controlId="formGroupLaguage">
                    <Form.Label>{t('language.lng')}</Form.Label>
                    <Form.Select
                        aria-label="Language Select"
                        value={i18n.language}
                        onChange={(e) => handleSelectLanguage(e.target.value)}
                    >
                        {languages.map((l) => (
                            <option value={l} key={l}>
                                {t('language.' + l)}
                            </option>
                        ))}
                    </Form.Select>
                </Form.Group>
            </Form>
        </LayoutCenter>
    );
};

export default Settings;

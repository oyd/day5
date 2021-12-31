import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { useTranslation } from 'react-i18next';
import useDocumentTitle from '@hooks/useDocumentTitle';
import useSettingsStore from '@stores/useSettingsStore';

const Settings = () => {
    const { t, i18n } = useTranslation();
    const { setTranslatedTitle } = useDocumentTitle();
    setTranslatedTitle('settings');
    const saveSettings = useSettingsStore((state) => state.saveSettings);
    const setLanguage = useSettingsStore((state) => state.setLanguage);
    const languages = ['en', 'ru', 'es'];

    function handleSelectLanguage(lng) {
        setLanguage(lng);
        saveSettings();
    }

    return (
        <Row className="settings justify-content-center">
            <Col md={4}>
                <Form>
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
            </Col>
        </Row>
    );
};

export default Settings;

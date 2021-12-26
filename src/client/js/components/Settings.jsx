import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { Settings as luxonSettings } from 'luxon';
import { useTranslation } from 'react-i18next';

const Settings = () => {
    const { t, i18n } = useTranslation();
    const languages = ['en', 'ru', 'es'];
    function selectLanguage(e) {
        const lng = e.target.value;
        i18n.changeLanguage(lng);
        luxonSettings.defaultLocale = lng;
    }
    return (
        <Row className="settings justify-content-center">
            <Col md={4}>
                <Form>
                    <Form.Group className="mb-3" controlId="formGroupLaguage">
                        <Form.Label>{t('language.lng')}</Form.Label>
                        <Form.Select aria-label="Language Select" value={i18n.language} onChange={selectLanguage}>
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

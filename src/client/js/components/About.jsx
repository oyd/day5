import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useTranslation } from 'react-i18next';
import { setTranslatedTitle } from '@hooks/useDocumentTitle';

const About = () => {
    const { t } = useTranslation();
    setTranslatedTitle('about');
    return (
        <Row>
            <Col>
                <table className="about">
                    <tbody>
                        <tr>
                            <th>{t('about.version')}</th>
                            <td>Day 5.0.0</td>
                        </tr>
                        <tr>
                            <th>{t('about.author')}</th>
                            <td>{t('about.authorName')}</td>
                        </tr>
                        <tr>
                            <th>{t('about.license')}</th>
                            <td>MIT</td>
                        </tr>
                    </tbody>
                </table>
            </Col>
        </Row>
    );
};

export default About;

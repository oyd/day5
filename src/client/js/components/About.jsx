import React from 'react';
import { useTranslation } from 'react-i18next';
import { setTranslatedTitle } from '@hooks/useDocumentTitle';
import LayoutCenter from '@components/LayoutCenter';

const About = () => {
    const { t } = useTranslation();
    setTranslatedTitle('about');
    return (
        <LayoutCenter>
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
        </LayoutCenter>
    );
};

export default About;

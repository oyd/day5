import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false,
    },
    resources: {
        en: {
            translation: {
                link: {
                    day: 'Day',
                    settings: 'Settings',
                    about: 'About',
                },
                language: {
                    lng: 'Language',
                    en: 'English',
                    ru: 'Russian',
                    es: 'Spanish',
                },
            },
        },
        ru: {
            translation: {
                link: {
                    day: 'День',
                    settings: 'Настройки',
                    about: 'О программе',
                },
                language: {
                    lng: 'Язык',
                    en: 'Английский',
                    ru: 'Русский',
                    es: 'Испанский',
                },
            },
        },
        es: {
            translation: {
                language: {
                    lng: 'Idioma',
                    en: 'Inglés',
                    ru: 'Russo',
                    es: 'Español',
                },
            },
        },
    },
});

export default i18n;

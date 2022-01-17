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
                    pomodoro: 'Pomodoro',
                    settings: 'Settings',
                    about: 'About',
                    overview: 'Overview',
                    off: 'Vacation and Holidays',
                },
                language: {
                    lng: 'Language',
                    en: 'English',
                    ru: 'Russian',
                    es: 'Spanish',
                },
                pomodoro: {
                    pomodoro: 'Pomodoro',
                    start: 'Start',
                    pause: 'Pause',
                    reset: 'Reset',
                    work: 'Pomodoro',
                    short: 'Short Break',
                    long: 'Long Break',
                },
                about: {
                    version: 'Version',
                    author: 'Author',
                    authorName: 'Oleg Dolzhanskiy',
                    license: 'License',
                },
            },
        },
        ru: {
            translation: {
                link: {
                    day: 'День',
                    pomodoro: 'Помодоро',
                    settings: 'Настройки',
                    about: 'О программе',
                    overview: 'Обзор',
                    off: 'Отпуск и праздники',
                },
                language: {
                    lng: 'Язык',
                    en: 'Английский',
                    ru: 'Русский',
                    es: 'Испанский',
                },
                pomodoro: {
                    pomodoro: 'Помодоро',
                    start: 'Старт',
                    pause: 'Пауза',
                    reset: 'Сбросить',
                    work: 'Помодоро',
                    short: 'Короткий перерыв',
                    long: 'Длинный перерыв',
                },
                about: {
                    version: 'Версия',
                    author: 'Автор',
                    authorName: 'Олег Должанский',
                    license: 'Лицензия',
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

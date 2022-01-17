import create from 'zustand';
import axios from 'axios';
import { Settings as luxonSettings } from 'luxon';
import i18n from '@other/i18n';

const useSettingsStore = create((set, get) => ({
    loaded: false,
    setLanguage: (language) => {
        i18n.changeLanguage(language);
        luxonSettings.defaultLocale = language;
    },
    loadSettings: () => {
        axios
            .get('/api/settings')
            .then((response) => {
                get().setLanguage(response.data.language);
                set({ loaded: true });
            })
            .catch((error) => {
                console.log(error);
            });
    },
    saveSettings: () => {
        const request = {
            language: i18n.language,
        };
        axios
            .put('/api/settings', request)
            .then((response) => {})
            .catch((error) => {
                console.log(error);
            });
    },
}));

export default useSettingsStore;

import i18n from './i18n';
import { Settings as luxonSettings } from 'luxon';

export default function selectLanguage(lng) {
    i18n.changeLanguage(lng);
    luxonSettings.defaultLocale = lng;
}
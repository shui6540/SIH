import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: require('../public/locales/en.json')
    },
    hi: {
      translation: require('../public/locales/hi.json')
    }
  },
  lng: 'en', // default language
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false
  }
});

export default i18n;

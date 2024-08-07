import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from '../locales/en/translation.json';
import translationIT from '../locales/it/translation.json';

const resources = {
  en: {
    translation: translationEN,
  },
  it: {
    translation: translationIT,
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem('selectedLanguage') || 'it',
    fallbackLng: 'it',
    interpolation: {
      escapeValue: false,
    },
  });

export const changeLanguage = (lng) => {
  i18n.changeLanguage(lng);
  localStorage.setItem('selectedLanguage', lng);
};

export default i18n;

// i18n.js

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Importa i file di traduzione
import translationEN from '../locales/en/translation.json'; // Percorso relativo aggiustato
import translationIT from '../locales/it/translation.json'; // Percorso relativo aggiustato

// Configura i18next con le traduzioni
i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: translationEN,
      },
      it: {
        translation: translationIT,
      },
    },
    lng: 'it', // Lingua di default
    fallbackLng: 'it', // Lingua di fallback nel caso la lingua richiesta non sia disponibile
    interpolation: {
      escapeValue: false, // Evita la fuga automatica di valori HTML
    },
    react: {
      wait: true,
    },
  });

export const changeLanguage = (lng) => {
  i18n.changeLanguage(lng);
};

export default i18n;

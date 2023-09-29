import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import translationEN from '../lang/enUS.json';
import translationES from '../lang/esES.json';
import {languageByDefault} from './config';

export const resources = {
  enUS: {
    translation: translationEN,
  },
  esES: {
    translation: translationES,
  },
};

const languageDefault = 'enUS';

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources,
  lng: languageDefault,
  fallbackLng: languageDefault,
  interpolation: {
    escapeValue: false,
  },
});

export const changeLanguage = (language: string) => {
  i18n.changeLanguage(language);
};

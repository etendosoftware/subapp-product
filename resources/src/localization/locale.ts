import i18n from 'i18n-js';
// @ts-ignore
import {enUS, esES, format, parseISO} from 'date-fns';

import ES from '../lang/esES.json';
import EN from '../lang/enUS.json';

const supportedLocales: any = {
  'en-US': EN,
  'es-ES': ES,
};

const Localization = {
  locale: 'en-US',
};

const fallbackLanguage = 'en-US';
const fallbackDateLocale = enUS;
const dateLocales: any = {enUS, esES};

const locale = {
  currentDateLocale: null,

  i18n,
  init() {
    i18n.locale = 'en-US';
    i18n.fallbacks = true;
    i18n.defaultLocale = fallbackLanguage;
    i18n.translations = supportedLocales;

    // Load fallback translation
    if (supportedLocales[Localization.locale]) {
      i18n.translations[Localization.locale] =
        supportedLocales[Localization.locale];
      this.currentDateLocale =
        dateLocales[Localization.locale.replace('-', '')];
    } else {
      i18n.translations[fallbackLanguage] = supportedLocales[fallbackLanguage];
      this.currentDateLocale = dateLocales[fallbackLanguage.replace('-', '')];
    }
  },

  t(trl: any, params?: any): string {
    return i18n.t(trl, params);
  },

  setCurrentLanguage(input: any) {
    const newLocal = input.replace('_', '-');
    i18n.locale = newLocal;
    i18n.translations = {};
    if (supportedLocales[newLocal]) {
      i18n.translations[newLocal] = supportedLocales[newLocal];
    }
  },

  formatDate(date: any, formatStr: any) {
    try {
      return format(date, formatStr, {locale: this.getDeviceLocaleForDate()});
    } catch (error: any) {
      throw new Error(
        `${error.message} - Params: Date: ${date} - Format String: ${formatStr}`,
      );
    }
  },

  parseISODate(date: any) {
    return parseISO(date);
  },

  getDeviceLocale() {
    if (supportedLocales[Localization.locale]) {
      i18n.translations[Localization.locale] =
        supportedLocales[Localization.locale].loadTranslations;
      return i18n.locale;
    } else {
      i18n.translations[fallbackLanguage] =
        supportedLocales[fallbackLanguage].loadTranslations;
      return fallbackLanguage;
    }
  },

  getDeviceLocaleForDate() {
    return this.currentDateLocale || fallbackDateLocale;
  },
  formatLanguageUnderscore(language: string, dash?: boolean): string {
    switch (language) {
      case 'en':
      case 'en-US':
      case 'en_US':
        return dash ? 'en-US' : 'en_US';
      case 'es':
      case 'es-ES':
      case 'es_ES':
        return dash ? 'es-ES' : 'es_ES';
      default:
        return dash ? 'en-US' : 'en_US';
    }
  },
  getLanguageName(language: string) {
    const formattedLanguage = this.formatLanguageUnderscore(language, true);
    return supportedLocales[formattedLanguage]
      ? supportedLocales[formattedLanguage].name
      : null;
  },
  languageByDefault() {
    return this.formatLanguageUnderscore('', true);
  },
};

export default locale;

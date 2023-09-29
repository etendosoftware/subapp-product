export const supportedLocales = {
  'en-US': {
    name: 'English (USA)',
    loadTranslations: () => require('../lang/enUS.json'),
  },
  'es-ES': {
    name: 'Spanish (Spain)',
    loadTranslations: () => require('../lang/esES.json'),
  },
};

export const formatLanguageUnderscore = (
  language: string,
  dash?: boolean,
  simple?: boolean,
): string => {
  switch (language) {
    case 'en':
    case 'en-US':
    case 'en_US':
      return simple ? 'enUS' : dash ? 'en-US' : 'en_US';
    case 'es':
    case 'es-ES':
    case 'es_ES':
      return simple ? 'esES' : dash ? 'es-ES' : 'es_ES';
    default:
      return simple ? 'enUS' : dash ? 'en-US' : 'en_US';
  }
};

export const languageByDefault = () => {
  return formatLanguageUnderscore('', false, true);
};

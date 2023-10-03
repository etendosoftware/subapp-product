import { i18n-js } from "i18n-js";
import en from '../lang/enUS.json'
import es from '../lang/esES.json'


const i18n = new I18n({
  'en-US':  {
   en
  },
  'es-ES': {es}
});

i18n.defaultLocale = "en-US";

export default i18n;

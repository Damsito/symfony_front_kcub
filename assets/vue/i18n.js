import { createI18n } from "vue-i18n";
import { fr } from "./locales/fr";
import { en } from "./locales/en";

export const translation = createI18n({
  locale: process.env.VUE_APP_I18N_LOCALE,
  fallbackLocale: process.env.VUE_APP_I18N_LOCALE,
  messages: {
    fr,
    en,
  },
});

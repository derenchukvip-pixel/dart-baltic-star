import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "./locales/en";
import ru from "./locales/ru";
import lt from "./locales/lt";

export const languages = [
  { code: "en", label: "EN" },
  { code: "ru", label: "RU" },
  { code: "lt", label: "LT" },
] as const;

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      ru: { translation: ru },
      lt: { translation: lt },
    },
    fallbackLng: "en",
    supportedLngs: ["en", "ru", "lt"],
    interpolation: { escapeValue: false },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
    returnObjects: true,
  });

export default i18n;
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

export const currentLang = localStorage.getItem("language");

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: currentLang,
    supportedLngs: ["en", "fr", "rw"],
    fallbackLng: "en",
    preload: ["en", "fr", "rw"],
    keySeparator: ".",
    detection: {
      order: ["localStorage", "path", "htmlTag", "subdomain"],
      caches: ["localStorage"],
    },
    backend: {
      loadPath: "./assets/locales/{{lng}}/translation.json",
    },
    react: {
      useSuspense: true,
    },
  });

export default i18n;

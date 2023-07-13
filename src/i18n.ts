import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Import translations
import translationEN from "./locales/english.json";
import translationHeb from "./locales/hebrew.json";
import LanguageDetector from 'i18next-browser-languagedetector';
import backend from "i18next-http-backend";

// Set up i18n
i18n.use(initReactI18next)
    .use(backend)
    .use(LanguageDetector)
    .init({
    resources: {
        en: {
            translation: translationEN,
        },
        heb: {
            translation: translationHeb,
        }
    },
    lng: "en", // Default language
    debug: true,
    fallbackLng: "en", // Fallback language
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;

import i18next, { InitOptions, Resource } from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from '../../assets/locales/en.json'; 
import fr from '../../assets/locales/fr.json';

// Define the structure of your language resources
interface LanguageResources {
  [key: string]: {
    translation: string;
  };
}

// Language resources with TypeScript typing
export const languageResources: Resource = {
  en: { translation: en },
  fr: { translation: fr },
};

// i18next initialization options with TypeScript typing
const i18nConfig: InitOptions = {
  compatibilityJSON: 'v3',
  lng: 'fr',               // Set the default language
  fallbackLng: 'en',       // Fallback language if a translation is missing
  resources: languageResources, // Language resources
};

i18next.use(initReactI18next).init(i18nConfig);

export default i18next;

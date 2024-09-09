"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.languageResources = exports["default"] = void 0;
var _i18next = _interopRequireDefault(require("i18next"));
var _reactI18next = require("react-i18next");
var _en = _interopRequireDefault(require("../../assets/locales/en.json"));
var _fr = _interopRequireDefault(require("../../assets/locales/fr.json"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
// Define the structure of your language resources

// Language resources with TypeScript typing
var languageResources = exports.languageResources = {
  en: {
    translation: _en["default"]
  },
  fr: {
    translation: _fr["default"]
  }
};

// i18next initialization options with TypeScript typing
var i18nConfig = {
  compatibilityJSON: 'v3',
  lng: 'fr',
  // Set the default language
  fallbackLng: 'en',
  // Fallback language if a translation is missing
  resources: languageResources // Language resources
};
_i18next["default"].use(_reactI18next.initReactI18next).init(i18nConfig);
var _default = exports["default"] = _i18next["default"];
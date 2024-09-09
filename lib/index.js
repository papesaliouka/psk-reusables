"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _Button = _interopRequireDefault(require("./components/Button/Button"));
var _Loader = _interopRequireDefault(require("./components/Loader/Loader"));
var _Report = _interopRequireDefault(require("./components/Report/Report"));
var _login = require("./services/login/login.context");
var _reactI18next = require("react-i18next");
var _reactNative = require("react-native");
var _storage = _interopRequireDefault(require("./services/storage/storage"));
var _Login = _interopRequireDefault(require("./pages/Login"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
// Define types for props (if you're using React Navigation)
var _default = exports["default"] = {
  LoginScreen: _Login["default"],
  Button: _Button["default"],
  Loader: _Loader["default"],
  Report: _Report["default"],
  AuthenticationContext: _login.AuthenticationContext,
  useTranslation: _reactI18next.useTranslation,
  Linking: _reactNative.Linking,
  StorageUtils: _storage["default"]
};
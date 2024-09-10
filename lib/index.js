"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "AuthenticationContext", {
  enumerable: true,
  get: function get() {
    return _login.AuthenticationContext;
  }
});
Object.defineProperty(exports, "AuthenticationContextProvider", {
  enumerable: true,
  get: function get() {
    return _login.AuthenticationContextProvider;
  }
});
Object.defineProperty(exports, "Button", {
  enumerable: true,
  get: function get() {
    return _Button["default"];
  }
});
Object.defineProperty(exports, "Header", {
  enumerable: true,
  get: function get() {
    return _Header["default"];
  }
});
Object.defineProperty(exports, "Loader", {
  enumerable: true,
  get: function get() {
    return _Loader["default"];
  }
});
Object.defineProperty(exports, "LoginScreen", {
  enumerable: true,
  get: function get() {
    return _Login["default"];
  }
});
Object.defineProperty(exports, "Profile", {
  enumerable: true,
  get: function get() {
    return _Profile["default"];
  }
});
Object.defineProperty(exports, "Report", {
  enumerable: true,
  get: function get() {
    return _Report["default"];
  }
});
Object.defineProperty(exports, "StorageUtils", {
  enumerable: true,
  get: function get() {
    return _storage["default"];
  }
});
Object.defineProperty(exports, "i18next", {
  enumerable: true,
  get: function get() {
    return _i18next["default"];
  }
});
Object.defineProperty(exports, "styles", {
  enumerable: true,
  get: function get() {
    return _style["default"];
  }
});
var _Button = _interopRequireDefault(require("./components/Button/Button"));
var _Loader = _interopRequireDefault(require("./components/Loader/Loader"));
var _Report = _interopRequireDefault(require("./components/Report/Report"));
var _Header = _interopRequireDefault(require("./components/Header/Header"));
var _Profile = _interopRequireDefault(require("./components/Profile/Profile"));
var _login = require("./services/login/login.context");
var _storage = _interopRequireDefault(require("./services/storage/storage"));
var _Login = _interopRequireDefault(require("./pages/Login"));
var _i18next = _interopRequireDefault(require("./services/i18next/i18next"));
var _style = _interopRequireDefault(require("./infrastructure/theme/style"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
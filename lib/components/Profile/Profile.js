"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _reactNativePaper = require("react-native-paper");
var _Ionicons = _interopRequireDefault(require("react-native-vector-icons/Ionicons"));
var _native = require("@react-navigation/native");
var _reactI18next = require("react-i18next");
var _login = require("../../services/login/login.context");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
// Define types for the style prop

// Define types for the component props

var Profile = function Profile(_ref) {
  var style = _ref.style,
    icon = _ref.icon,
    arrow = _ref.arrow,
    navigatoToSetting = _ref.navigatoToSetting;
  var _useTranslation = (0, _reactI18next.useTranslation)(),
    t = _useTranslation.t;
  var _ref2 = (0, _react.useContext)(_login.AuthenticationContext) || {},
    user = _ref2.user,
    isConnected = _ref2.isConnected;
  var navigation = (0, _native.useNavigation)();
  return /*#__PURE__*/_react["default"].createElement(_reactNative.View, {
    style: isConnected ? style.container : container
  }, /*#__PURE__*/_react["default"].createElement(_reactNative.View, {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/_react["default"].createElement(_reactNativePaper.Avatar.Icon, {
    size: 60,
    icon: "account",
    style: {
      backgroundColor: '#00522A'
    }
  }), /*#__PURE__*/_react["default"].createElement(_reactNative.View, {
    style: {
      width: 20,
      height: 20,
      backgroundColor: isConnected ? '#00522A' : 'pink',
      borderRadius: 50,
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      left: 45,
      top: 45
    }
  }, /*#__PURE__*/_react["default"].createElement(_Ionicons["default"], {
    style: {
      borderRadius: 16
    },
    name: "wifi",
    size: 16,
    color: isConnected ? 'white' : '#93000A'
  }))), /*#__PURE__*/_react["default"].createElement(_reactNative.View, {
    style: style.textContainer
  }, /*#__PURE__*/_react["default"].createElement(_reactNative.Text, {
    style: style.greeting
  }, t('Greeting')), /*#__PURE__*/_react["default"].createElement(_reactNative.Text, {
    style: style.username
  }, user === null || user === void 0 ? void 0 : user.nom_agence)), icon && /*#__PURE__*/_react["default"].createElement(_reactNative.TouchableOpacity, {
    onPress: navigatoToSetting
  }, /*#__PURE__*/_react["default"].createElement(_Ionicons["default"], {
    name: "settings-sharp",
    size: 24,
    color: "#00522A"
  })));
};

// Default container styles
var container = {
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  justifyContent: 'space-around',
  alignItems: 'center',
  height: 'auto',
  paddingHorizontal: 16,
  paddingBottom: 20,
  paddingTop: 12,
  backgroundColor: '#FFFFFF'
};
var _default = exports["default"] = Profile;
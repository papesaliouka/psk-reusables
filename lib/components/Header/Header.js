"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNativePaper = require("react-native-paper");
var _login = require("../../services/login/login.context");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
// Define the props interface

var Header = function Header(_ref) {
  var navigation = _ref.navigation,
    title = _ref.title,
    search = _ref.search,
    wifi = _ref.wifi,
    icon = _ref.icon;
  // You can replace this with actual context if needed
  var _ref2 = (0, _react.useContext)(_login.AuthenticationContext),
    isConnected = _ref2.isConnected;
  return /*#__PURE__*/_react["default"].createElement(_reactNativePaper.Appbar.Header, {
    style: {
      backgroundColor: '#005D3A'
    }
  }, /*#__PURE__*/_react["default"].createElement(_reactNativePaper.Appbar.BackAction, {
    onPress: function onPress() {
      return navigation.goBack();
    },
    color: "white"
  }), /*#__PURE__*/_react["default"].createElement(_reactNativePaper.Appbar.Content, {
    title: title,
    color: "white"
  }), wifi && /*#__PURE__*/_react["default"].createElement(_reactNativePaper.Appbar.Action, {
    icon: isConnected ? 'wifi' : 'wifi-off',
    color: isConnected ? 'white' : 'pink'
  }), icon && /*#__PURE__*/_react["default"].createElement(_reactNativePaper.Appbar.Action, {
    icon: icon,
    color: "white"
  }), search && /*#__PURE__*/_react["default"].createElement(_reactNativePaper.Appbar.Action, {
    icon: "account-search",
    color: "white"
  }));
};
var _default = exports["default"] = Header;
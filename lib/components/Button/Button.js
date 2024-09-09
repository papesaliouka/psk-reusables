"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _reactNativePaper = require("react-native-paper");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
// Define the props interface for type safety

// Functional component with TypeScript types
var ButtonComponent = function ButtonComponent(_ref) {
  var title = _ref.title,
    onPress = _ref.onPress,
    _ref$style = _ref.style,
    style = _ref$style === void 0 ? {} : _ref$style,
    icon = _ref.icon,
    _ref$loading = _ref.loading,
    loading = _ref$loading === void 0 ? false : _ref$loading,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled;
  return /*#__PURE__*/_react["default"].createElement(_reactNative.Pressable, {
    style: {
      width: '100%'
    },
    onPress: onPress,
    disabled: disabled
  }, /*#__PURE__*/_react["default"].createElement(_reactNativePaper.Button, {
    disabled: disabled,
    loading: loading,
    icon: icon,
    labelStyle: style.labelStyle,
    textColor: style.textColor,
    mode: "contained",
    style: style
  }, title));
};
var _default = exports["default"] = ButtonComponent;
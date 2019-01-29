"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EmptyUser = function EmptyUser(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ viewBox: "0 0 96 96", width: "1em", height: "1em" }, props),
    _react2.default.createElement(
      "g",
      { fill: "none", fillRule: "evenodd" },
      _react2.default.createElement("circle", { fill: "#E0E0E0", cx: 48, cy: 48, r: 48 }),
      _react2.default.createElement("path", {
        d: "M21.158 64.54A8.235 8.235 0 0 1 21 63c0-7.18 12.088-13 27-13 14.795 0 26.81 5.73 26.998 12.832C69.24 71.946 59.078 78 47.5 78c-10.838 0-20.437-5.305-26.342-13.46zM47 42c-6.627 0-12-5.373-12-12s5.373-12 12-12 12 5.373 12 12-5.373 12-12 12z",
        fill: "#BDBDBD"
      })
    )
  );
};

exports.default = EmptyUser;
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = buttonProp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _button = require('../atoms/button');

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function buttonProp(action) {
  var overrides = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (!action) return null;
  if (action.type === _button2.default) return _react2.default.cloneElement(action, overrides);

  if ((typeof action === 'undefined' ? 'undefined' : _typeof(action)) === 'object') {
    return _react2.default.createElement(
      _button2.default,
      _extends({ icon: action.icon, onClick: action.handler }, overrides),
      action.label
    );
  }

  throw new Error('button prop must be object or type Button');
}
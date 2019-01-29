'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n  position: absolute;\n  font-family: \'Roboto Mono\';\n  font-size: 12px;\n  color: rgb(168, 168, 168);\n  top: 1.5em;\n  left: 2em;\n  line-height: 1.6;\n'], ['\n  position: absolute;\n  font-family: \'Roboto Mono\';\n  font-size: 12px;\n  color: rgb(168, 168, 168);\n  top: 1.5em;\n  left: 2em;\n  line-height: 1.6;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  padding: 4.5rem 3rem 3rem 3rem;\n  position: relative;\n  border: 1px solid rgb(236, 236, 236);\n  margin-bottom: 1rem;\n  border-radius: 3px;\n  line-height: inherit;\n\n  &.align-center {\n    display: flex;\n    flex-wrap: nowrap;\n    align-content: center;\n    justify-content: center;\n  }\n\n  background: ', ';\n  color: ', ';\n'], ['\n  padding: 4.5rem 3rem 3rem 3rem;\n  position: relative;\n  border: 1px solid rgb(236, 236, 236);\n  margin-bottom: 1rem;\n  border-radius: 3px;\n  line-height: inherit;\n\n  &.align-center {\n    display: flex;\n    flex-wrap: nowrap;\n    align-content: center;\n    justify-content: center;\n  }\n\n  background: ', ';\n  color: ', ';\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styled = require('../styled');

var _styled2 = _interopRequireDefault(_styled);

var _tokens = require('../tokens');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Title = _styled2.default.div(_templateObject);

var Wrapper = _styled2.default.div(_templateObject2, function (props) {
  return props.background === 'dark' ? _tokens.colors.base.default : _tokens.colors.base.white;
}, function (props) {
  return props.background === 'dark' ? _tokens.colors.base.white : _tokens.colors.text.default;
});

var Example = function Example(props) {
  return _react2.default.createElement(
    Wrapper,
    _extends({ className: props.align === 'center' ? 'align-center' : null }, props),
    _react2.default.createElement(
      Title,
      null,
      props.title
    ),
    props.children
  );
};

exports.default = Example;
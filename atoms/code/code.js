'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n  color: rgba(0, 0, 0, 0.86);\n  font-family: ', ';\n  font-size: 90%;\n  padding: 0 6px;\n  display: inline-block;\n  background-color: ', ';\n  border-radius: 3px;\n  line-height: 18px;\n  word-break: break-all;\n'], ['\n  color: rgba(0, 0, 0, 0.86);\n  font-family: ', ';\n  font-size: 90%;\n  padding: 0 6px;\n  display: inline-block;\n  background-color: ', ';\n  border-radius: 3px;\n  line-height: 18px;\n  word-break: break-all;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styled = require('../../styled');

var _styled2 = _interopRequireDefault(_styled);

var _cosmosTokens = require('@auth0/cosmos-tokens');

var _automationAttribute = require('../../_helpers/automation-attribute');

var _automationAttribute2 = _interopRequireDefault(_automationAttribute);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Code = function Code(props) {
  return _react2.default.createElement(
    Code.Element,
    _extends({}, (0, _automationAttribute2.default)('code'), props),
    props.children
  );
};

Code.Element = _styled2.default.span(_templateObject, _cosmosTokens.fonts.family.code, _cosmosTokens.colors.base.blueLightest);

Code.propTypes = {};

Code.defaultProps = {};

exports.default = Code;
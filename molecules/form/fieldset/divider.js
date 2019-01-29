'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  font-size: 14px;\n  letter-spacing: 0.5px;\n  font-weight: ', ';\n  border-bottom: 1px solid ', ';\n  padding-bottom: ', ';\n  margin-bottom: ', ';\n  margin-top: 0;\n  width: 100%;\n  color: ', ';\n'], ['\n  font-size: 14px;\n  letter-spacing: 0.5px;\n  font-weight: ', ';\n  border-bottom: 1px solid ', ';\n  padding-bottom: ', ';\n  margin-bottom: ', ';\n  margin-top: 0;\n  width: 100%;\n  color: ', ';\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styled = require('../../../styled');

var _styled2 = _interopRequireDefault(_styled);

var _cosmosTokens = require('@auth0/cosmos-tokens');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Divider = function Divider(props) {
  return _react2.default.createElement(Divider.Element, props);
};

Divider.Element = _styled2.default.div(_templateObject, _cosmosTokens.fonts.weight.medium, _cosmosTokens.colors.form.divider, _cosmosTokens.spacing.xsmall, _cosmosTokens.spacing.large, _cosmosTokens.colors.text.default);

exports.default = Divider;
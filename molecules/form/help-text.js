'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  font-size: 13px;\n  line-height: 1.8;\n  color: ', ';\n  margin-top: ', ';\n  margin-bottom: ', ';\n'], ['\n  font-size: 13px;\n  line-height: 1.8;\n  color: ', ';\n  margin-top: ', ';\n  margin-bottom: ', ';\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styled = require('../../styled');

var _styled2 = _interopRequireDefault(_styled);

var _cosmosTokens = require('@auth0/cosmos-tokens');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledHelpText = _styled2.default.div(_templateObject, _cosmosTokens.colors.text.secondary, _cosmosTokens.spacing.xsmall, _cosmosTokens.spacing.xsmall);

var HelpText = function HelpText(props) {
  return _react2.default.createElement(
    StyledHelpText,
    null,
    props.children
  );
};

exports.default = HelpText;
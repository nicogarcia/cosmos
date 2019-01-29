'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  font-size: 13px;\n  color: ', ';\n  margin-top: ', ';\n'], ['\n  font-size: 13px;\n  color: ', ';\n  margin-top: ', ';\n']);

var _styled = require('../../styled');

var _styled2 = _interopRequireDefault(_styled);

var _cosmosTokens = require('@auth0/cosmos-tokens');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Error = _styled2.default.div(_templateObject, _cosmosTokens.colors.text.error, _cosmosTokens.spacing.xsmall);
exports.default = Error;
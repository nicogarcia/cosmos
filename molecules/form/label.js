'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  display: block;\n\n  color: ', ';\n  font-weight: ', ';\n'], ['\n  display: block;\n\n  color: ', ';\n  font-weight: ', ';\n']);

var _styled = require('../../styled');

var _styled2 = _interopRequireDefault(_styled);

var _cosmosTokens = require('@auth0/cosmos-tokens');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledLabel = _styled2.default.label(_templateObject, _cosmosTokens.colors.text.default, _cosmosTokens.fonts.weight.medium);

exports.default = StyledLabel;
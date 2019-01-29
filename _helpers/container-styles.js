'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  line-height: ', ';\n'], ['\n  line-height: ', ';\n']);

var _styled = require('../styled');

var _cosmosTokens = require('@auth0/cosmos-tokens');

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var containerStyles = (0, _styled.css)(_templateObject, _cosmosTokens.misc.lineHeight);

exports.default = containerStyles;
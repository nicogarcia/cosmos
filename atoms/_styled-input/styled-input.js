'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledInput = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  ', ';\n  width: 100%;\n  box-sizing: border-box;\n\n  background: ', ';\n  border: 1px solid;\n  border-color: ', ';\n  border-radius: ', ';\n\n  font-family: ', ';\n  font-size: ', ';\n  color: ', ';\n\n  padding: ', ' ', ';\n\n  cursor: ', ';\n  transition: border-color ', ', box-shadow ', ';\n\n  &:hover {\n    border-color: ', ';\n  }\n  &:focus {\n    border-color: ', ';\n    box-shadow: 0px 0px 0 1px ', ';\n    outline: none;\n  }\n  &::-webkit-input-placeholder {\n    color: ', ';\n  }\n'], ['\n  ', ';\n  width: 100%;\n  box-sizing: border-box;\n\n  background: ', ';\n  border: 1px solid;\n  border-color: ', ';\n  border-radius: ', ';\n\n  font-family: ', ';\n  font-size: ', ';\n  color: ', ';\n\n  padding: ', ' ', ';\n\n  cursor: ', ';\n  transition: border-color ', ', box-shadow ', ';\n\n  &:hover {\n    border-color: ', ';\n  }\n  &:focus {\n    border-color: ', ';\n    box-shadow: 0px 0px 0 1px ', ';\n    outline: none;\n  }\n  &::-webkit-input-placeholder {\n    color: ', ';\n  }\n']);

var _styled = require('../../styled');

var _styled2 = _interopRequireDefault(_styled);

var _cosmosTokens = require('@auth0/cosmos-tokens');

var _containerStyles = require('../../_helpers/container-styles');

var _containerStyles2 = _interopRequireDefault(_containerStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var config = {
  basic: {
    background: _cosmosTokens.colors.input.background,
    border: _cosmosTokens.colors.input.border,
    hoverBorder: _cosmosTokens.colors.input.borderHover,
    focusBorder: _cosmosTokens.colors.input.borderFocus,
    placeholder: _cosmosTokens.colors.input.placeholder
  },
  readOnly: {
    background: _cosmosTokens.colors.input.backgroundReadOnly,
    border: _cosmosTokens.colors.input.border,
    hoverBorder: _cosmosTokens.colors.input.border,
    focusBorder: _cosmosTokens.colors.input.border,
    placeholder: _cosmosTokens.colors.input.placeholderReadOnly
  },
  error: {
    background: _cosmosTokens.colors.input.background,
    border: _cosmosTokens.colors.input.borderError,
    hoverBorder: _cosmosTokens.colors.input.borderError,
    focusBorder: _cosmosTokens.colors.input.borderError
  }
};

var getAttributes = function getAttributes(props) {
  if (props.readOnly) return config.readOnly;else if (props.hasError || props.error) return config.error;else return config.basic;
};

var StyledInput = _styled2.default.input(_templateObject, _containerStyles2.default, function (props) {
  return getAttributes(props).background;
}, function (props) {
  return getAttributes(props).border;
}, _cosmosTokens.misc.radius, function (props) {
  return props.code ? _cosmosTokens.fonts.family.code : 'inherit';
}, function (props) {
  return props.code ? '13px' : 'inherit';
}, _cosmosTokens.colors.text.inputs, _cosmosTokens.misc.inputs.padding, _cosmosTokens.spacing.small, function (props) {
  return props.readOnly ? 'not-allowed' : 'auto';
}, _cosmosTokens.misc.animationDuration, _cosmosTokens.misc.animationDuration, function (props) {
  return getAttributes(props).hoverBorder;
}, function (props) {
  return getAttributes(props).focusBorder;
}, function (props) {
  return getAttributes(props).focusBorder;
}, function (props) {
  return getAttributes(props).placeholder;
});

exports.StyledInput = StyledInput;
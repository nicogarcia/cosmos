'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Strong = exports.StyledTextSubdued = exports.StyledTextAllCaps = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n  color: ', ';\n  font-size: 13px;\n  font-weight: ', ';\n'], ['\n  color: ', ';\n  font-size: 13px;\n  font-weight: ', ';\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  font-size: 12px;\n  color: ', ';\n  letter-spacing: 1px;\n  text-transform: uppercase;\n'], ['\n  font-size: 12px;\n  color: ', ';\n  letter-spacing: 1px;\n  text-transform: uppercase;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  font-weight: ', ';\n'], ['\n  font-weight: ', ';\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styled = require('../../styled');

var _styled2 = _interopRequireDefault(_styled);

var _automationAttribute = require('../../_helpers/automation-attribute');

var _automationAttribute2 = _interopRequireDefault(_automationAttribute);

var _cosmosTokens = require('@auth0/cosmos-tokens');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Text = function Text(props) {
  if (props.type === 'subdued') {
    return _react2.default.createElement(
      Text.Subdued,
      _extends({}, (0, _automationAttribute2.default)('text'), props),
      props.children
    );
  }
  if (props.type === 'allcaps') {
    return _react2.default.createElement(
      Text.AllCaps,
      _extends({}, (0, _automationAttribute2.default)('text'), props),
      props.children
    );
  }
  if (props.type === 'strong') {
    return _react2.default.createElement(
      Text.Strong,
      _extends({}, (0, _automationAttribute2.default)('text'), props),
      props.children
    );
  }
  return props.children;
};

Text.Subdued = _styled2.default.span(_templateObject, _cosmosTokens.colors.text.secondary, _cosmosTokens.fonts.weight.normal);

Text.AllCaps = _styled2.default.span(_templateObject2, _cosmosTokens.colors.text.secondary);

Text.Strong = _styled2.default.strong(_templateObject3, _cosmosTokens.fonts.weight.bold);

Text.propTypes = {
  type: _propTypes2.default.oneOf(['allcaps', 'subdued', 'strong'])
};

Text.defaultProps = {};

exports.default = Text;


var StyledTextAllCaps = Text.AllCaps;
var StyledTextSubdued = Text.Subdued;
var Strong = Text.Strong;

exports.StyledTextAllCaps = StyledTextAllCaps;
exports.StyledTextSubdued = StyledTextSubdued;
exports.Strong = Strong;
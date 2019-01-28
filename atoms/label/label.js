'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledLabel = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n  font-size: 11px;\n  color: ', ';\n  padding: 2px 8px;\n  border: 1px solid ', ';\n  border-radius: ', ';\n'], ['\n  font-size: 11px;\n  color: ', ';\n  padding: 2px 8px;\n  border: 1px solid ', ';\n  border-radius: ', ';\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styled = require('../../styled');

var _styled2 = _interopRequireDefault(_styled);

var _text = require('../text');

var _cosmosTokens = require('@auth0/cosmos-tokens');

var _automationAttribute = require('../../_helpers/automation-attribute');

var _automationAttribute2 = _interopRequireDefault(_automationAttribute);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Label = function Label(props) {
  return _react2.default.createElement(
    Label.Element,
    _extends({}, (0, _automationAttribute2.default)('label'), props),
    props.children
  );
};

Label.Element = (0, _styled2.default)(_text.StyledTextAllCaps)(_templateObject, function (props) {
  return _cosmosTokens.colors.status[props.appearance];
}, function (props) {
  return _cosmosTokens.colors.status[props.appearance];
}, _cosmosTokens.misc.radius);

var StyledLabel = Label.Element;

Label.propTypes = {
  /** The visual style used to convey the label's purpose */
  appearance: _propTypes2.default.oneOf(['default', 'information', 'success', 'warning', 'danger'])
};

Label.defaultProps = {
  appearance: 'default'
};

exports.default = Label;
exports.StyledLabel = StyledLabel;
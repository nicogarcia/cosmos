'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledBadge = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n  display: inline-block;\n  vertical-align: middle;\n  font-size: 13px;\n  font-weight: ', ';\n  line-height: 1;\n  color: #fff;\n  padding: 4px 8px;\n  background: ', ';\n  border-radius: 21px;\n'], ['\n  display: inline-block;\n  vertical-align: middle;\n  font-size: 13px;\n  font-weight: ', ';\n  line-height: 1;\n  color: #fff;\n  padding: 4px 8px;\n  background: ', ';\n  border-radius: 21px;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styled = require('../../styled');

var _styled2 = _interopRequireDefault(_styled);

var _cosmosTokens = require('@auth0/cosmos-tokens');

var _automationAttribute = require('../../_helpers/automation-attribute');

var _automationAttribute2 = _interopRequireDefault(_automationAttribute);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Badge = function Badge(props) {
  return _react2.default.createElement(
    Badge.Element,
    _extends({}, (0, _automationAttribute2.default)('badge'), props),
    props.children
  );
};

Badge.Element = _styled2.default.span(_templateObject, _cosmosTokens.fonts.weight.medium, function (props) {
  return _cosmosTokens.colors.status[props.appearance];
});

// Backwards compatibility (will be removed in 1.0)
var StyledBadge = Badge.Element;

Badge.propTypes = {
  /** The visual style used to convey the label's purpose */
  appearance: _propTypes2.default.oneOf(['default', 'information', 'success', 'warning', 'danger'])
};

Badge.defaultProps = {
  appearance: 'default'
};

exports.default = Badge;
exports.StyledBadge = StyledBadge;
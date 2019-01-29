'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledLink = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n  color: ', ';\n  text-decoration: none;\n  &:hover {\n    color: ', ';\n  }\n'], ['\n  color: ', ';\n  text-decoration: none;\n  &:hover {\n    color: ', ';\n  }\n']);

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

var Link = function Link(props) {
  return _react2.default.createElement(
    Link.Element,
    _extends({}, (0, _automationAttribute2.default)('link'), props),
    props.children
  );
};

Link.Element = _styled2.default.a(_templateObject, _cosmosTokens.colors.link.default, _cosmosTokens.colors.link.defaultHover);

var StyledLink = Link.Element;

Link.propTypes = {
  /** URL to follow */
  href: _propTypes2.default.string,
  /** specifies where to open the linked document */
  target: _propTypes2.default.oneOf(['_blank', '_self', '_parent', '_top']),
  /** function to be called on click */
  onClick: _propTypes2.default.func
};

Link.defaultProps = {
  target: '_self'
};

exports.default = Link;
exports.StyledLink = StyledLink;
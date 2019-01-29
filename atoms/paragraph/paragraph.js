'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledParagraph = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n  ', ';\n  margin: 1em 0;\n  color: ', ';\n  font-size: 14px;\n  font-weight: ', ';\n'], ['\n  ', ';\n  margin: 1em 0;\n  color: ', ';\n  font-size: 14px;\n  font-weight: ', ';\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styled = require('../../styled');

var _styled2 = _interopRequireDefault(_styled);

var _containerStyles = require('../../_helpers/container-styles');

var _containerStyles2 = _interopRequireDefault(_containerStyles);

var _automationAttribute = require('../../_helpers/automation-attribute');

var _automationAttribute2 = _interopRequireDefault(_automationAttribute);

var _cosmosTokens = require('@auth0/cosmos-tokens');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Paragraph = function Paragraph(props) {
  return _react2.default.createElement(
    Paragraph.Element,
    _extends({}, (0, _automationAttribute2.default)('paragraph'), props),
    props.children
  );
};

Paragraph.Element = _styled2.default.p(_templateObject, _containerStyles2.default, _cosmosTokens.colors.text.default, _cosmosTokens.fonts.weight.normal);

var StyledParagraph = Paragraph.Element;

Paragraph.propTypes = {};

Paragraph.defaultProps = {};

exports.default = Paragraph;
exports.StyledParagraph = StyledParagraph;
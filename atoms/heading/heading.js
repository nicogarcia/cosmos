'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BaseHeading = exports.StyledHeading = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n  margin: 1em 0;\n  color: ', ';\n  font-weight: ', ';\n  line-height: 1.3;\n'], ['\n  margin: 1em 0;\n  color: ', ';\n  font-weight: ', ';\n  line-height: 1.3;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  font-size: 36px;\n'], ['\n  font-size: 36px;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  font-size: 24px;\n  font-weight: ', ';\n'], ['\n  font-size: 24px;\n  font-weight: ', ';\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  font-size: 18px; /* TO-DO: tokenize */\n  font-weight: ', ';\n'], ['\n  font-size: 18px; /* TO-DO: tokenize */\n  font-weight: ', ';\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  font-size: 14px;\n  font-weight: ', ';\n'], ['\n  font-size: 14px;\n  font-weight: ', ';\n']);

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

var BaseHeading = _styled2.default.h1(_templateObject, _cosmosTokens.colors.text.default, _cosmosTokens.fonts.weight.normal);

var Heading = function Heading(props) {
  var Component = Heading.Element[props.size];
  return _react2.default.createElement(
    Component,
    _extends({}, (0, _automationAttribute2.default)('heading'), props),
    props.children
  );
};

Heading.Element = [];

Heading.Element[1] = (0, _styled2.default)(BaseHeading.withComponent('h1'))(_templateObject2);

Heading.Element[2] = (0, _styled2.default)(BaseHeading.withComponent('h2'))(_templateObject3, _cosmosTokens.fonts.weight.medium);

Heading.Element[3] = (0, _styled2.default)(BaseHeading.withComponent('h3'))(_templateObject4, _cosmosTokens.fonts.weight.bold);

Heading.Element[4] = (0, _styled2.default)(BaseHeading.withComponent('h4'))(_templateObject5, _cosmosTokens.fonts.weight.medium);

var StyledHeading = Heading.Element;

Heading.propTypes = {
  size: _propTypes2.default.oneOf([1, 2, 3, 4]),
  children: _propTypes2.default.string
};

Heading.defaultProps = {
  size: 1,
  children: null
};

exports.default = Heading;
exports.StyledHeading = StyledHeading;
exports.BaseHeading = BaseHeading;
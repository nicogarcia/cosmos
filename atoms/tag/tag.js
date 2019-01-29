'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledTag = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n  display: inline-block;\n  font-size: ', ';\n  color: ', ';\n  line-height: 1;\n  padding: ', ' ', ';\n  background: ', ';\n  border: 1px solid ', ';\n  border-radius: ', ';\n  cursor: ', ';\n\n  ', ' {\n    cursor: pointer;\n    stroke: ', ';\n    margin-left: ', ';\n  }\n'], ['\n  display: inline-block;\n  font-size: ', ';\n  color: ', ';\n  line-height: 1;\n  padding: ', ' ', ';\n  background: ', ';\n  border: 1px solid ', ';\n  border-radius: ', ';\n  cursor: ', ';\n\n  ', ' {\n    cursor: pointer;\n    stroke: ', ';\n    margin-left: ', ';\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  ', ' {\n    margin-right: ', ';\n    &:last-child {\n      margin-right: 0;\n    }\n  }\n'], ['\n  ', ' {\n    margin-right: ', ';\n    &:last-child {\n      margin-right: 0;\n    }\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styled = require('../../styled');

var _styled2 = _interopRequireDefault(_styled);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

var _cosmosTokens = require('@auth0/cosmos-tokens');

var _automationAttribute = require('../../_helpers/automation-attribute');

var _automationAttribute2 = _interopRequireDefault(_automationAttribute);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Tag = function Tag(props) {
  var icon = void 0;

  if (props.onRemove) {
    var handleRemove = function handleRemove(evt) {
      evt.stopPropagation();
      props.onRemove(evt);
    };
    icon = _react2.default.createElement(
      'a',
      _extends({ onClick: handleRemove }, (0, _automationAttribute2.default)('tag.remove')),
      _react2.default.createElement(_icon2.default, { name: 'close', size: 9 })
    );
  }

  return _react2.default.createElement(
    Tag.Element,
    _extends({}, (0, _automationAttribute2.default)('tag'), props),
    props.children,
    icon
  );
};

Tag.Element = _styled2.default.span(_templateObject, _cosmosTokens.fonts.size.small, _cosmosTokens.colors.tag.text, _cosmosTokens.spacing.xxsmall, _cosmosTokens.spacing.xsmall, _cosmosTokens.colors.tag.background, _cosmosTokens.colors.tag.border, _cosmosTokens.misc.radius, function (props) {
  return props.onClick ? 'pointer' : 'inherit';
}, _icon2.default.Element, _cosmosTokens.colors.tag.text, _cosmosTokens.spacing.xsmall);

Tag.Group = function (props) {
  return _react2.default.createElement(
    Tag.Group.Element,
    _extends({}, (0, _automationAttribute2.default)('tag.group'), props),
    props.children
  );
};

Tag.Group.Element = _styled2.default.div(_templateObject2, Tag.Element, _cosmosTokens.spacing.xsmall);

Tag.propTypes = {
  /** The function to call when a user clicks the tag */
  onClick: _propTypes2.default.func,
  /** The function to call when a user clicks the tag's remove icon */
  onRemove: _propTypes2.default.func
};

Tag.defaultProps = {};

var StyledTag = Tag.Element;

exports.default = Tag;
exports.StyledTag = StyledTag;
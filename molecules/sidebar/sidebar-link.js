'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n  display: block;\n  cursor: pointer;\n  color: ', ';\n  text-decoration: none;\n  font-size: 13px;\n  line-height: 1;\n  padding: calc(', ' / 2) 0;\n  margin-bottom: 10px;\n  &:hover\xA0 {\n    color: ', ';\n    ', ' path {\n      fill: ', ';\n    }\n  }\n  ', ' {\n    margin-right: ', ';\n  }\n  span {\n    display: inline-block;\n    vertical-align: middle;\n  }\n'], ['\n  display: block;\n  cursor: pointer;\n  color: ', ';\n  text-decoration: none;\n  font-size: 13px;\n  line-height: 1;\n  padding: calc(', ' / 2) 0;\n  margin-bottom: 10px;\n  &:hover\xA0 {\n    color: ', ';\n    ', ' path {\n      fill: ', ';\n    }\n  }\n  ', ' {\n    margin-right: ', ';\n  }\n  span {\n    display: inline-block;\n    vertical-align: middle;\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styled = require('../../styled');

var _styled2 = _interopRequireDefault(_styled);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _automationAttribute = require('../../_helpers/automation-attribute');

var _automationAttribute2 = _interopRequireDefault(_automationAttribute);

var _cosmosTokens = require('@auth0/cosmos-tokens');

var _icon = require('../../atoms/icon');

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var SidebarLink = function SidebarLink(props) {
  return _react2.default.createElement(
    SidebarLink.Element,
    _extends({
      href: props.url,
      onClick: props.onClick,
      selected: props.selected
    }, (0, _automationAttribute2.default)('sidebar.link'), props),
    _react2.default.createElement(_icon2.default, {
      name: props.icon ? props.icon : 'arrow-right',
      size: 18,
      color: props.selected ? _cosmosTokens.colors.icon.sidebarFocus : _cosmosTokens.colors.icon.sidebar
    }),
    _react2.default.createElement(
      'span',
      null,
      props.label
    )
  );
};

SidebarLink.Element = _styled2.default.a(_templateObject, function (props) {
  return props.selected ? _cosmosTokens.colors.link.sidebarFocus : _cosmosTokens.colors.link.sidebar;
}, _cosmosTokens.spacing.xsmall, _cosmosTokens.colors.link.sidebarHover, _icon2.default.Element, _cosmosTokens.colors.link.sidebarHover, _icon2.default.Element, _cosmosTokens.spacing.xsmall);

SidebarLink.propTypes = {
  label: _propTypes2.default.string.isRequired,
  icon: _propTypes2.default.oneOf(_icon.__ICONNAMES__),
  onClick: _propTypes2.default.func,
  selected: _propTypes2.default.bool,
  url: _propTypes2.default.string
};

SidebarLink.defaultProps = {};

exports.default = SidebarLink;
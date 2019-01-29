'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n  float: left;\n  width: 160px;\n  ', ' {\n    margin-right: ', ';\n    vertical-align: middle;\n  }\n'], ['\n  float: left;\n  width: 160px;\n  ', ' {\n    margin-right: ', ';\n    vertical-align: middle;\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styled = require('../../styled');

var _styled2 = _interopRequireDefault(_styled);

var _sidebarLink = require('./sidebar-link');

var _sidebarLink2 = _interopRequireDefault(_sidebarLink);

var _sidebarLinkGroup = require('./sidebar-link-group');

var _sidebarLinkGroup2 = _interopRequireDefault(_sidebarLinkGroup);

var _automationAttribute = require('../../_helpers/automation-attribute');

var _automationAttribute2 = _interopRequireDefault(_automationAttribute);

var _cosmosTokens = require('@auth0/cosmos-tokens');

var _icon = require('../../atoms/icon');

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Sidebar = function Sidebar(props) {
  return _react2.default.createElement(Sidebar.Element, _extends({}, (0, _automationAttribute2.default)('sidebar'), props));
};

Sidebar.Element = _styled2.default.div(_templateObject, _icon2.default.Element, _cosmosTokens.spacing.xsmall);

Sidebar.Link = _sidebarLink2.default;
Sidebar.LinkGroup = _sidebarLinkGroup2.default;

Sidebar.propTypes = {};

Sidebar.defaultProps = {};

exports.default = Sidebar;
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n  margin: 0 ', ';\n'], ['\n  margin: 0 ', ';\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  margin-right: ', ';\n'], ['\n  margin-right: ', ';\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  ', ';\n\n  /* overrides for link */\n  ', ' {\n    color: ', ';\n    font-size: 13px;\n    font-weight: ', ';\n    &:hover {\n      cursor: pointer;\n      color: ', ';\n      ', ' path {\n        fill: ', ';\n      }\n    }\n  }\n\n  /* last link should be inactive: */\n  ', ':last-child {\n    color: ', ';\n    cursor: default;\n  }\n\n  /* sometimes there\'s just one link = first = last, let\'s override that */\n  ', ':first-child {\n    color: ', ';\n    cursor: pointer;\n    &:hover {\n      color: ', ';\n    }\n  }\n\n  /* fix alignment with text for all icons (including separator) */\n  ', ', ', ' {\n    position: relative;\n    top: -2px;\n  }\n\n  ', ':last-child ', ' {\n    display: none;\n  }\n  ', ' {\n    top: -2px;\n  }\n  ', ' {\n    top: -1px;\n  }\n\n  ', ':last-child ', ' {\n    display: none;\n  }\n'], ['\n  ', ';\n\n  /* overrides for link */\n  ', ' {\n    color: ', ';\n    font-size: 13px;\n    font-weight: ', ';\n    &:hover {\n      cursor: pointer;\n      color: ', ';\n      ', ' path {\n        fill: ', ';\n      }\n    }\n  }\n\n  /* last link should be inactive: */\n  ', ':last-child {\n    color: ', ';\n    cursor: default;\n  }\n\n  /* sometimes there\'s just one link = first = last, let\'s override that */\n  ', ':first-child {\n    color: ', ';\n    cursor: pointer;\n    &:hover {\n      color: ', ';\n    }\n  }\n\n  /* fix alignment with text for all icons (including separator) */\n  ', ', ', ' {\n    position: relative;\n    top: -2px;\n  }\n\n  ', ':last-child ', ' {\n    display: none;\n  }\n  ', ' {\n    top: -2px;\n  }\n  ', ' {\n    top: -1px;\n  }\n\n  ', ':last-child ', ' {\n    display: none;\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styled = require('../../styled');

var _styled2 = _interopRequireDefault(_styled);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _automationAttribute = require('../../_helpers/automation-attribute');

var _automationAttribute2 = _interopRequireDefault(_automationAttribute);

var _cosmosTokens = require('@auth0/cosmos-tokens');

var _containerStyles = require('../../_helpers/container-styles');

var _containerStyles2 = _interopRequireDefault(_containerStyles);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

var _link = require('../link');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Separator = (0, _styled2.default)(_icon2.default)(_templateObject, _cosmosTokens.spacing.small);

var LinkIcon = (0, _styled2.default)(_icon2.default)(_templateObject2, _cosmosTokens.spacing.xsmall);

var Breadcrumb = function Breadcrumb(props) {
  return _react2.default.createElement(Breadcrumb.Element, _extends({}, (0, _automationAttribute2.default)('breadcrumb'), props));
};

Breadcrumb.Element = _styled2.default.div(_templateObject3, _containerStyles2.default, _link2.default.Element, _cosmosTokens.colors.base.grayDarkest, _cosmosTokens.fonts.weight.medium, _cosmosTokens.colors.link.default, LinkIcon, _cosmosTokens.colors.link.default, _link2.default.Element, _cosmosTokens.colors.base.default, _link2.default.Element, _cosmosTokens.colors.base.grayDarkest, _cosmosTokens.colors.link.default, LinkIcon, Separator, _link2.default.Element, Separator, LinkIcon, Separator, _link2.default.Element, Separator);

Breadcrumb.Link = function (props) {
  return _react2.default.createElement(
    _link2.default,
    _extends({}, (0, _automationAttribute2.default)('breadcrumb.link'), props),
    props.icon && _react2.default.createElement(LinkIcon, { name: props.icon, size: 12, color: 'grayDarkest' }),
    props.children,
    _react2.default.createElement(Separator, { name: 'chevron-right-fill', size: 12, color: 'grayMedium' })
  );
};

Breadcrumb.propTypes = {
  children: _propTypes2.default.node
};

Breadcrumb.Link.propTypes = {
  link: _propTypes2.default.string
};

exports.default = Breadcrumb;
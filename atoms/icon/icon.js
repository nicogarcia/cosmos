'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__ICONNAMES__ = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n  display: inline-block;\n  line-height: 1;\n  width: ', 'px;\n  height: ', 'px;\n'], ['\n  display: inline-block;\n  line-height: 1;\n  width: ', 'px;\n  height: ', 'px;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  display: inline-block;\n  vertical-align: middle;\n  line-height: 1;\n  width: ', 'px;\n  height: ', 'px;\n  path {\n    fill: ', ';\n  }\n'], ['\n  display: inline-block;\n  vertical-align: middle;\n  line-height: 1;\n  width: ', 'px;\n  height: ', 'px;\n  path {\n    fill: ', ';\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styled = require('../../styled');

var _styled2 = _interopRequireDefault(_styled);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _cosmosTokens = require('@auth0/cosmos-tokens');

var _icons = require('./icons.json');

var _automationAttribute = require('../../_helpers/automation-attribute');

var _automationAttribute2 = _interopRequireDefault(_automationAttribute);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Icon = function Icon(props) {
  // If the icon name isn't found, show a question mark instead.
  var icon = _icons.icons[props.name] || _icons.icons.help;

  // Use an icon name from tokens, fallback to hexcode (without validation)
  var color = _cosmosTokens.colors.base[props.color] || props.color;

  return _react2.default.createElement(
    Icon.Element,
    _extends({}, (0, _automationAttribute2.default)('icon'), props),
    _react2.default.createElement(
      Image,
      {
        width: props.size,
        height: props.size,
        viewBox: '0 0 ' + icon.width + ' ' + icon.height,
        color: color
      },
      icon.paths.map(function (path, index) {
        return _react2.default.createElement('path', { key: index, d: path });
      })
    )
  );
};

Icon.Element = _styled2.default.i(_templateObject, function (props) {
  return props.size;
}, function (props) {
  return props.size;
});
var Image = _styled2.default.svg(_templateObject2, function (imageProps) {
  return imageProps.width;
}, function (imageProps) {
  return imageProps.height;
}, function (imageProps) {
  return imageProps.color;
});

var __ICONNAMES__ = Object.keys(_icons.icons);
var __COLORS__ = Object.keys(_cosmosTokens.colors.base);

Icon.propTypes = {
  /** Icon name */
  name: _propTypes2.default.oneOf(__ICONNAMES__).isRequired,
  /** Icon size */
  size: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
  /** Icon foreground color */
  color: _propTypes2.default.oneOf(__COLORS__)
};

Icon.defaultProps = {
  size: 20,
  color: 'default'
};

exports.default = Icon;
exports.__ICONNAMES__ = __ICONNAMES__;
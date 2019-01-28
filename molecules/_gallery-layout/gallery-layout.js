'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n  display: grid;\n  grid-template-columns: ', ';\n  grid-gap: ', ';\n\n  ', ';\n'], ['\n  display: grid;\n  grid-template-columns: ', ';\n  grid-gap: ', ';\n\n  ', ';\n']),
    _templateObject2 = _taggedTemplateLiteral([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styled = require('../../styled');

var _styled2 = _interopRequireDefault(_styled);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _automationAttribute = require('../../_helpers/automation-attribute');

var _automationAttribute2 = _interopRequireDefault(_automationAttribute);

var _transformLayoutChildren = require('../../_helpers/transform-layout-children');

var _transformLayoutChildren2 = _interopRequireDefault(_transformLayoutChildren);

var _layoutMarginReset = require('../../_helpers/layout-margin-reset');

var _layoutMarginReset2 = _interopRequireDefault(_layoutMarginReset);

var _cosmosTokens = require('@auth0/cosmos-tokens');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var gutterOptions = {
  none: '0',
  condensed: _cosmosTokens.spacing.small,
  default: _cosmosTokens.spacing.medium,
  spacious: _cosmosTokens.spacing.xlarge
};

var galleryOptions = {
  small: 'repeat(auto-fill, minmax(150px, 1fr))',
  medium: 'repeat(auto-fill, minmax(250px, 1fr))',
  large: 'repeat(auto-fill, minmax(450px, 1fr))'
};

var GalleryLayout = function GalleryLayout(props) {
  return _react2.default.createElement(
    GalleryLayout.Element,
    _extends({}, props, (0, _automationAttribute2.default)('gallery-layout')),
    (0, _transformLayoutChildren2.default)(props, GalleryLayout.Item, 'gallery-layout.item')
  );
};

GalleryLayout.Element = _styled2.default.ul(_templateObject, function (props) {
  return galleryOptions[props.size];
}, function (props) {
  return gutterOptions[props.gutter];
}, (0, _layoutMarginReset2.default)());

GalleryLayout.Item = _styled2.default.li(_templateObject2);

GalleryLayout.propTypes = {
  /** Regulates the size of the gutter betwen each column */
  gutter: _propTypes2.default.oneOf(['none', 'default', 'condensed', 'spacious']),
  /** Regulates the size of the flexible columns */
  size: _propTypes2.default.oneOf(['small', 'medium', 'large']),
  /** Resets the margins of the component within the layout to generate consistent spaces. */
  disableMarginReset: _propTypes2.default.bool
};

GalleryLayout.defaultProps = {
  size: 'medium',
  gutter: 'default'
};

exports.default = GalleryLayout;
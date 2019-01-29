'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n  display: block;\n  height: ', ';\n  width: ', ';\n  max-width: ', ';\n  object-fit: ', ';\n'], ['\n  display: block;\n  height: ', ';\n  width: ', ';\n  max-width: ', ';\n  object-fit: ', ';\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styled = require('../../styled');

var _styled2 = _interopRequireDefault(_styled);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _automationAttribute = require('../../_helpers/automation-attribute');

var _automationAttribute2 = _interopRequireDefault(_automationAttribute);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var imageFit = {
  contain: 'contain',
  cover: 'cover',
  none: 'unset',
  'scale-down': 'scale-down'
};

var Image = function Image(props) {
  return _react2.default.createElement(Image.Element, _extends({ src: props.source, alt: props.alt }, (0, _automationAttribute2.default)('image'), props));
};

Image.Element = _styled2.default.img(_templateObject, function (props) {
  return props.height ? props.height : 'auto';
}, function (props) {
  return props.width ? props.width : 'auto';
}, function (props) {
  return props.disableResponsive ? 'auto' : '100%';
}, function (props) {
  return imageFit[props.fit];
});

Image.propTypes = {
  /** URL of the image */
  source: _propTypes2.default.string.isRequired,
  /** Alt text is mandatory, please read the accessibility section */
  alt: _propTypes2.default.string,
  /** Image height, can be any length unit, absolute or relative */
  height: _propTypes2.default.string,
  /** Image width, can be any length unit, absolute or relative */
  width: _propTypes2.default.string,
  /** Sets how the content of the image is been resized to fit its container. */
  fit: _propTypes2.default.oneOf(['none', 'contain', 'cover', 'scale-down']),
  /** Sets the image width to auto */
  disableResponsive: _propTypes2.default.bool
};

Image.defaultProps = {
  source: null,
  alt: null,
  width: null,
  height: null,
  fit: 'none'
};

exports.default = Image;
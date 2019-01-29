'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledAvatar = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n  min-width: ', ';\n  width: ', ';\n  height: ', ';\n  background-color: ', ';\n  border: ', ';\n  border-radius: ', ';\n\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n\n  /* This allows to pass an SVG tag to the image prop and it will render correctly. This is not needed. We can remove this if we change the "image" prop to only accept a string */\n  img,\n  svg {\n    height: 100%;\n    width: 100%;\n  }\n\n  ', ' {\n    line-height: 0;\n    /* Try to remove line-height and set display: inline-flex; */\n  }\n'], ['\n  min-width: ', ';\n  width: ', ';\n  height: ', ';\n  background-color: ', ';\n  border: ', ';\n  border-radius: ', ';\n\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n\n  /* This allows to pass an SVG tag to the image prop and it will render correctly. This is not needed. We can remove this if we change the "image" prop to only accept a string */\n  img,\n  svg {\n    height: 100%;\n    width: 100%;\n  }\n\n  ', ' {\n    line-height: 0;\n    /* Try to remove line-height and set display: inline-flex; */\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styled = require('../../styled');

var _styled2 = _interopRequireDefault(_styled);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ = require('../..');

var _cosmosTokens = require('@auth0/cosmos-tokens');

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

var _avatarUrl = require('../../_helpers/avatar-url');

var _avatarUrl2 = _interopRequireDefault(_avatarUrl);

var _automationAttribute = require('../../_helpers/automation-attribute');

var _automationAttribute2 = _interopRequireDefault(_automationAttribute);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var PLACEHOLDERS = {
  USER: 'https://cdn.auth0.com/website/cosmos/avatar-user-default.svg',
  RESOURCE: 'https://cdn.auth0.com/website/cosmos/avatar-resource-default.svg'
};

var iconSizes = {
  xsmall: 14,
  small: 16,
  medium: 20,
  large: 24,
  xlarge: 36,
  xxlarge: 52
};

var getImageForAvatar = function getImageForAvatar(props) {
  if (props.icon) return _react2.default.createElement(_icon2.default, { name: props.icon, size: iconSizes[props.size] });
  if (props.email && props.initials) return _react2.default.createElement(_.Image, {
    width: '100%',
    height: '100%',
    fit: 'cover',
    source: (0, _avatarUrl2.default)(props.image, props.email, props.initials)
  });
  if (typeof props.image === 'string') {
    return _react2.default.createElement(_.Image, { width: '100%', height: '100%', fit: 'cover', source: props.image });
  }

  if (!props.image) return _react2.default.createElement(_.Image, {
    width: '100%',
    height: '100%',
    fit: 'cover',
    source: props.type === 'user' ? PLACEHOLDERS.USER : PLACEHOLDERS.RESOURCE
  });

  return props.image;
};

var Avatar = function Avatar(props) {
  var image = getImageForAvatar(props);

  return _react2.default.createElement(
    Avatar.Element,
    _extends({ type: props.type, size: props.size }, (0, _automationAttribute2.default)('avatar'), props),
    image
  );
};

Avatar.Element = _styled2.default.span(_templateObject, function (props) {
  return _cosmosTokens.misc.avatar[props.size];
}, function (props) {
  return _cosmosTokens.misc.avatar[props.size];
}, function (props) {
  return _cosmosTokens.misc.avatar[props.size];
}, _cosmosTokens.colors.base.grayLightest, function (props) {
  return props.type === 'resource' ? '1px solid ' + _cosmosTokens.colors.base.grayLight : 'none';
}, function (props) {
  return props.type === 'resource' ? '3px' : '50%';
}, _icon2.default.Element);

// Backwards compatibility (will be removed in 1.0)
var StyledAvatar = Avatar.Element;

Avatar.propTypes = {
  /** An icon to display. */
  icon: _propTypes2.default.oneOf(_icon.__ICONNAMES__),
  /** An image URL or Image component. */
  image: _propTypes2.default.node,
  /** The size of the avatar. */
  size: _propTypes2.default.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge', 'xxlarge']),
  /** The type of item represented by the avatar. */
  type: _propTypes2.default.oneOf(['user', 'resource']).isRequired,
  /** Initials of the user */
  initials: _propTypes2.default.string,
  /** E-mail of the user */
  email: _propTypes2.default.string
};

Avatar.defaultProps = {
  size: 'medium',
  type: 'user'
};

exports.default = Avatar;
exports.StyledAvatar = StyledAvatar;
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledAvatarBlock = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n  margin-left: ', ';\n'], ['\n  margin-left: ', ';\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  line-height: normal;\n  color: ', ';\n  font-weight: ', ';\n\n  ', ' {\n    line-height: normal;\n  }\n'], ['\n  line-height: normal;\n  color: ', ';\n  font-weight: ', ';\n\n  ', ' {\n    line-height: normal;\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  line-height: normal;\n  color: ', ';\n  margin-top: ', ';\n  display: ', ';\n'], ['\n  line-height: normal;\n  color: ', ';\n  margin-top: ', ';\n  display: ', ';\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  ', ';\n\n  display: flex;\n  align-items: center;\n  justify-content: start;\n'], ['\n  ', ';\n\n  display: flex;\n  align-items: center;\n  justify-content: start;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styled = require('../../styled');

var _styled2 = _interopRequireDefault(_styled);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ = require('../..');

var _cosmosTokens = require('@auth0/cosmos-tokens');

var _icon = require('../../atoms/icon');

var _customValidations = require('../../_helpers/custom-validations');

var _containerStyles = require('../../_helpers/container-styles');

var _containerStyles2 = _interopRequireDefault(_containerStyles);

var _automationAttribute = require('../../_helpers/automation-attribute');

var _automationAttribute2 = _interopRequireDefault(_automationAttribute);

var _link = require('../../atoms/link');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/* TODO: Find a good way to override: https://github.com/auth0/cosmos/issues/347 */


var avatarSizes = {
  compact: 'small',
  default: 'medium',
  large: 'large'
};

var textSpacing = '12px';

var Text = _styled2.default.div(_templateObject, textSpacing);

var Title = _styled2.default.span(_templateObject2, _cosmosTokens.colors.text.default, _cosmosTokens.fonts.weight.medium, _link.StyledLink);

var Subtitle = _styled2.default.span(_templateObject3, _cosmosTokens.colors.text.secondary, _cosmosTokens.spacing.xxsmall, function (props) {
  return props.size === 'compact' ? 'none' : 'block';
});

var getLinkedElement = function getLinkedElement(props) {
  return function (element) {
    var link = props.href || props.link;

    if (!link) return element;

    if (typeof link === 'string') {
      link = { href: link, target: '_blank' };
    }

    return _react2.default.createElement(
      _.Link,
      link,
      element
    );
  };
};

var getTitle = function getTitle(props) {
  return _react2.default.createElement(
    Title,
    null,
    getLinkedElement(props)(props.title)
  );
};

var getAvatar = function getAvatar(props) {
  return getLinkedElement(props)(_react2.default.createElement(_.Avatar, {
    icon: props.icon,
    image: props.image,
    size: avatarSizes[props.size],
    type: props.type
  }));
};

var AvatarBlock = function AvatarBlock(props) {
  var title = getTitle(props);
  var avatar = getAvatar(props);
  var subtitle = void 0;

  if (props.subtitle) {
    subtitle = _react2.default.createElement(
      Subtitle,
      { size: props.size },
      props.subtitle
    );
  }

  return _react2.default.createElement(
    AvatarBlock.Element,
    _extends({}, (0, _automationAttribute2.default)('avatar-block'), props),
    avatar,
    _react2.default.createElement(
      Text,
      null,
      title,
      subtitle
    )
  );
};

AvatarBlock.Element = _styled2.default.span(_templateObject4, _containerStyles2.default);

AvatarBlock.propTypes = {
  /** An icon to display. */
  icon: _propTypes2.default.oneOf(_icon.__ICONNAMES__),
  /** An image URL to display. */
  image: _propTypes2.default.string,
  /** The primary line of text to display. */
  title: _propTypes2.default.string.isRequired,
  /** The type of item represented by the avatar block. */
  type: _propTypes2.default.oneOf(['user', 'resource']).isRequired,
  /** The size of the avatar block. */
  size: _propTypes2.default.PropTypes.oneOf(['compact', 'default', 'large']),
  /** The secondary line of text to display. */
  subtitle: _propTypes2.default.string,
  /** @deprecated:link If specified, the main text will be rendered as a hyperlink */
  href: _propTypes2.default.string,
  /** If specified, the main text will be rendered as a hyperlink */
  link: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.shape({
    href: _propTypes2.default.string,
    target: _propTypes2.default.string
  })]),

  _deprecation_href: function _deprecation_href(props) {
    return (0, _customValidations.deprecate)(props, { name: 'href', replacement: 'link' });
  }
};

AvatarBlock.defaultProps = {
  size: 'default'
};

var StyledAvatarBlock = AvatarBlock.Element;

exports.default = AvatarBlock;
exports.StyledAvatarBlock = StyledAvatarBlock;
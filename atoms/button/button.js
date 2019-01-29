'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n  display: inline-flex;\n  vertical-align: middle;\n  align-items: center;\n  justify-content: center;\n\n  min-width: ', ';\n  min-height: ', ';\n  line-height: ', ';\n\n  /* Safari button margins reset */\n  /* See https://github.com/google/material-design-lite/issues/4008 */\n  margin-top: 0;\n  margin-left: 0;\n\n  text-transform: uppercase;\n  white-space: nowrap;\n  letter-spacing: 1px;\n  font-size: 13px;\n  font-weight: ', ';\n\n  background: ', ';\n  border: 1px solid ', ';\n  border-radius: ', ';\n\n  color: ', ';\n\n  padding: 0 ', ';\n\n  opacity: ', ';\n  cursor: ', ';\n  pointer-events: ', ';\n  transition: border-color ', ', background ', ';\n\n  > *:not(:last-child):not(:only-child) {\n    margin-right: ', ';\n  }\n\n  ', ' {\n    color: ', ';\n  }\n\n  &:hover {\n    color: ', ';\n    background: ', ';\n    border-color: ', ';\n  }\n\n  &:focus {\n    background: ', ';\n    border-color: ', ';\n    outline: none;\n  }\n\n  &:active {\n    background: ', ';\n    border-color: ', ';\n    outline: none;\n  }\n'], ['\n  display: inline-flex;\n  vertical-align: middle;\n  align-items: center;\n  justify-content: center;\n\n  min-width: ', ';\n  min-height: ', ';\n  line-height: ', ';\n\n  /* Safari button margins reset */\n  /* See https://github.com/google/material-design-lite/issues/4008 */\n  margin-top: 0;\n  margin-left: 0;\n\n  text-transform: uppercase;\n  white-space: nowrap;\n  letter-spacing: 1px;\n  font-size: 13px;\n  font-weight: ', ';\n\n  background: ', ';\n  border: 1px solid ', ';\n  border-radius: ', ';\n\n  color: ', ';\n\n  padding: 0 ', ';\n\n  opacity: ', ';\n  cursor: ', ';\n  pointer-events: ', ';\n  transition: border-color ', ', background ', ';\n\n  > *:not(:last-child):not(:only-child) {\n    margin-right: ', ';\n  }\n\n  ', ' {\n    color: ', ';\n  }\n\n  &:hover {\n    color: ', ';\n    background: ', ';\n    border-color: ', ';\n  }\n\n  &:focus {\n    background: ', ';\n    border-color: ', ';\n    outline: none;\n  }\n\n  &:active {\n    background: ', ';\n    border-color: ', ';\n    outline: none;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  display: inline-block;\n  vertical-align: middle;\n  line-height: normal;\n  /* Sub-pixel position adjustment */\n  /* See: https://github.com/auth0/cosmos/pull/947 */\n  /* See: https://github.com/auth0/cosmos/pull/1045 */\n  margin-top: 1px;\n'], ['\n  display: inline-block;\n  vertical-align: middle;\n  line-height: normal;\n  /* Sub-pixel position adjustment */\n  /* See: https://github.com/auth0/cosmos/pull/947 */\n  /* See: https://github.com/auth0/cosmos/pull/1045 */\n  margin-top: 1px;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  text-decoration: none;\n'], ['\n  text-decoration: none;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styled = require('../../styled');

var _styled2 = _interopRequireDefault(_styled);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _pixelCalc = require('../../_helpers/pixel-calc');

var _cosmosTokens = require('@auth0/cosmos-tokens');

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

var _spinner = require('../spinner');

var _spinner2 = _interopRequireDefault(_spinner);

var _tooltip = require('../tooltip');

var _tooltip2 = _interopRequireDefault(_tooltip);

var _automationAttribute = require('../../_helpers/automation-attribute');

var _automationAttribute2 = _interopRequireDefault(_automationAttribute);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var appearances = {
  default: {
    text: _cosmosTokens.colors.button.default.text,
    icon: _cosmosTokens.colors.button.default.icon,
    background: _cosmosTokens.colors.button.default.background,
    border: _cosmosTokens.colors.button.default.border,
    hoverBackground: _cosmosTokens.colors.button.default.backgroundHover,
    hoverBorder: _cosmosTokens.colors.button.default.borderHover,
    focusBackground: _cosmosTokens.colors.button.default.backgroundFocus,
    focusBorder: _cosmosTokens.colors.button.default.borderFocus,
    activeBackground: _cosmosTokens.colors.button.default.backgroundActive,
    activeBorder: _cosmosTokens.colors.button.default.borderActive,
    loadingInverse: false
  },
  primary: {
    text: _cosmosTokens.colors.button.primary.text,
    icon: _cosmosTokens.colors.button.primary.icon,
    background: _cosmosTokens.colors.button.primary.background,
    border: _cosmosTokens.colors.button.primary.border,
    hoverBackground: _cosmosTokens.colors.button.primary.backgroundHover,
    hoverBorder: _cosmosTokens.colors.button.primary.borderHover,
    focusBackground: _cosmosTokens.colors.button.primary.backgroundFocus,
    focusBorder: _cosmosTokens.colors.button.primary.borderFocus,
    activeBackground: _cosmosTokens.colors.button.primary.backgroundActive,
    activeBorder: _cosmosTokens.colors.button.primary.borderActive,
    loadingInverse: true
  },
  secondary: {
    text: _cosmosTokens.colors.button.secondary.text,
    icon: _cosmosTokens.colors.button.secondary.icon,
    background: _cosmosTokens.colors.button.secondary.background,
    border: _cosmosTokens.colors.button.secondary.border,
    hoverBackground: _cosmosTokens.colors.button.secondary.backgroundHover,
    hoverBorder: _cosmosTokens.colors.button.secondary.borderHover,
    focusBackground: _cosmosTokens.colors.button.secondary.backgroundFocus,
    focusBorder: _cosmosTokens.colors.button.secondary.borderFocus,
    activeBackground: _cosmosTokens.colors.button.secondary.backgroundActive,
    activeBorder: _cosmosTokens.colors.button.secondary.borderActive,
    loadingInverse: false
  },
  cta: {
    text: _cosmosTokens.colors.button.cta.text,
    icon: _cosmosTokens.colors.button.cta.icon,
    background: _cosmosTokens.colors.button.cta.background,
    border: _cosmosTokens.colors.button.cta.border,
    hoverBackground: _cosmosTokens.colors.button.cta.backgroundHover,
    hoverBorder: _cosmosTokens.colors.button.cta.borderHover,
    focusBackground: _cosmosTokens.colors.button.cta.backgroundFocus,
    focusBorder: _cosmosTokens.colors.button.cta.borderFocus,
    activeBackground: _cosmosTokens.colors.button.cta.backgroundActive,
    activeBorder: _cosmosTokens.colors.button.cta.borderActive,
    loadingInverse: true
  },
  destructive: {
    text: _cosmosTokens.colors.button.destructive.text,
    icon: _cosmosTokens.colors.button.destructive.icon,
    background: _cosmosTokens.colors.button.destructive.background,
    border: _cosmosTokens.colors.button.destructive.border,
    hoverBackground: _cosmosTokens.colors.button.destructive.backgroundHover,
    hoverBorder: _cosmosTokens.colors.button.destructive.borderHover,
    focusBackground: _cosmosTokens.colors.button.destructive.backgroundFocus,
    focusBorder: _cosmosTokens.colors.button.destructive.borderFocus,
    activeBackground: _cosmosTokens.colors.button.destructive.backgroundActive,
    activeBorder: _cosmosTokens.colors.button.destructive.borderActive,
    loadingInverse: true
  },
  link: {
    text: _cosmosTokens.colors.button.link.text,
    icon: _cosmosTokens.colors.button.link.icon,
    background: 'transparent',
    border: 'transparent',
    hoverText: _cosmosTokens.colors.button.link.hover,
    hoverBackground: 'transparent',
    hoverBorder: 'transparent',
    focusText: _cosmosTokens.colors.button.link.focus,
    focusBackground: 'transparent',
    focusBorder: 'transparent',
    loadingInverse: false
  }
};

var states = {
  success: {
    text: _cosmosTokens.colors.button.success.text,
    icon: _cosmosTokens.colors.button.success.icon,
    background: _cosmosTokens.colors.button.success.background,
    border: _cosmosTokens.colors.button.success.border,
    hoverBackground: _cosmosTokens.colors.button.success.backgroundHover,
    hoverBorder: _cosmosTokens.colors.button.success.borderHover,
    focusBackground: _cosmosTokens.colors.button.success.backgroundFocus,
    focusBorder: _cosmosTokens.colors.button.success.borderFocus,
    activeBackground: _cosmosTokens.colors.button.success.backgroundActive,
    activeBorder: _cosmosTokens.colors.button.success.borderActive
  }
};

var sizes = {
  large: {
    lineHeight: _cosmosTokens.misc.button.large.height,
    minWidth: '96px',
    padding: _cosmosTokens.spacing.medium
  },
  default: {
    lineHeight: _cosmosTokens.misc.button.default.height,
    minWidth: '96px',
    padding: _cosmosTokens.spacing.small
  },
  compressed: {
    lineHeight: _cosmosTokens.misc.button.compressed.height,
    minWidth: 'auto',
    padding: _cosmosTokens.spacing.small
  },
  small: {
    lineHeight: _cosmosTokens.misc.button.small.height,
    minWidth: 'auto',
    padding: _cosmosTokens.spacing.xsmall
  }
};

var getAttributes = function getAttributes(props) {
  // Get the styles for the button's selected appearance.
  var appearanceStyles = appearances[props.appearance] ? appearances[props.appearance] : appearances.default;

  // Get the styles for the button's selected size.
  var sizeStyles = sizes[props.size] ? sizes[props.size] : sizes.default;

  // Merge the two style hashes together to create the base styles.
  var styles = _extends({}, appearanceStyles, sizeStyles);

  // If the success state is set, override some of the styles.
  if (props.success) {
    styles = _extends({}, styles, states.success);
  }

  // If the loading state is set, override some of the styles.
  if (props.loading) {
    styles.background = styles.hoverBackground;
    styles.focusBackground = styles.hoverBackground;
    styles.activeBackground = styles.hoverBackground;
    styles.border = styles.hoverBorder;
    styles.focusBorder = styles.hoverBorder;
    styles.activeBorder = styles.hoverBorder;
  }

  // If the button contains only an icon and no text, override some of the styles.
  if (props.icon && !props.text) {
    styles.padding = _cosmosTokens.spacing.xsmall;
    styles.minWidth = '36px';
    styles.icon = _cosmosTokens.colors.button.link.icon;
  }

  return styles;
};

var ButtonContent = function ButtonContent(props) {
  var content = [];

  var icon = props.success ? 'check' : props.icon;
  var iconNode = icon ? _react2.default.createElement(_icon2.default, { key: 'icon', size: 16, name: icon, color: getAttributes(props).icon }) : null;

  // Button left icon or loading
  if (props.loading) content.push(_react2.default.createElement(_spinner2.default, { key: 'spinner', inverse: getAttributes(props).loadingInverse }));else if (iconNode && props.iconAlign === 'left') content.push(iconNode);

  // Button text
  if (props.text) content.push(_react2.default.createElement(
    Button.Text,
    { key: 'text' },
    props.text
  ));

  // Button right icon
  if (iconNode && props.iconAlign === 'right') content.push(iconNode);

  var Element = props.href ? Button.LinkElement : Button.Element;

  return _react2.default.createElement(
    Element,
    props,
    content
  );
};

var Button = function Button(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ['children']);

  var button = _react2.default.createElement(ButtonContent, _extends({}, (0, _automationAttribute2.default)('button'), props, { text: children }));

  // If a label was specified, wrap the Button in a Tooltip.
  if (props.label) {
    return _react2.default.createElement(
      _tooltip2.default,
      { content: props.label, defaultVisible: props.labelDefaultVisible },
      button
    );
  }

  return button;
};

Button.Element = _styled2.default.button(_templateObject, function (props) {
  return getAttributes(props).minWidth;
}, function (props) {
  return getAttributes(props).lineHeight;
}, function (props) {
  return getAttributes(props).lineHeight;
}, _cosmosTokens.fonts.weight.medium, function (props) {
  return getAttributes(props).background;
}, function (props) {
  return getAttributes(props).border;
}, _cosmosTokens.misc.radius, function (props) {
  return getAttributes(props).text;
}, function (props) {
  return getAttributes(props).padding;
}, function (props) {
  return props.disabled ? 0.5 : 1;
}, function (props) {
  return props.disabled ? 'not-allowed' : 'pointer';
}, function (props) {
  return props.disabled || props.loading || props.success ? 'none' : null;
}, _cosmosTokens.misc.animationDuration, _cosmosTokens.misc.animationDuration, function (props) {
  return props.text ? _cosmosTokens.spacing.xsmall : 0;
}, _icon2.default.Element, function (props) {
  return getAttributes(props).text;
}, function (props) {
  return getAttributes(props).hoverText || getAttributes(props).text;
}, function (props) {
  return getAttributes(props).hoverBackground;
}, function (props) {
  return getAttributes(props).hoverBorder;
}, function (props) {
  return getAttributes(props).focusBackground;
}, function (props) {
  return getAttributes(props).focusBorder;
}, function (props) {
  return getAttributes(props).activeBackground;
}, function (props) {
  return getAttributes(props).activeBorder;
});

Button.Text = _styled2.default.span(_templateObject2);

Button.LinkElement = (0, _styled2.default)(Button.Element.withComponent('a'))(_templateObject3);

Button.propTypes = {
  /** The size of the button */
  size: _propTypes2.default.oneOf(['default', 'large', 'small', 'compressed']),

  /** The visual style used to convey the button's purpose */
  appearance: _propTypes2.default.oneOf(['default', 'primary', 'secondary', 'cta', 'link', 'destructive']),

  /** Name of icon */
  icon: _propTypes2.default.oneOf(_icon.__ICONNAMES__),

  /** Name of icon */
  iconAlign: _propTypes2.default.oneOf(['left', 'right']),

  /** Tooltip to show when the user hovers over the button */
  label: _propTypes2.default.string,

  /** The URL to navigate to when the button is clicked */
  href: _propTypes2.default.string,

  /** Specifies where to open the navigated document */
  target: _propTypes2.default.oneOf(['_blank', '_self', '_parent', '_top']),

  /** Disables the button, changing the visual style and make it unable to be pressed */
  disabled: _propTypes2.default.bool,

  /** Loading state when waiting for an action to complete */
  loading: _propTypes2.default.bool,

  /** Successful state when action is completed successfuly */
  success: _propTypes2.default.bool,

  /** Type of button */
  type: _propTypes2.default.oneOf(['submit', 'button', 'reset']),

  /** Handler to be called when the button is clicked */
  onClick: _propTypes2.default.func
};

Button.defaultProps = {
  size: 'default',
  appearance: 'default',
  icon: null,
  iconAlign: 'left',
  disabled: false,
  loading: false,
  success: false
};

exports.default = Button;
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  color: ', ';\n  text-decoration: underline;\n  &:hover {\n    text-decoration: none;\n  }\n  margin-left: ', ';\n'], ['\n  color: ', ';\n  text-decoration: underline;\n  &:hover {\n    text-decoration: none;\n  }\n  margin-left: ', ';\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  cursor: pointer;\n  font-size: 1.5em;\n  line-height: 1;\n  &:after {\n    content: \'\xD7\';\n    font-weight: ', ';\n  }\n'], ['\n  cursor: pointer;\n  font-size: 1.5em;\n  line-height: 1;\n  &:after {\n    content: \'\xD7\';\n    font-weight: ', ';\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  padding-right: ', ';\n'], ['\n  padding-right: ', ';\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  ', ';\n  padding: ', ' ', ';\n  ', ';\n\n  background-color: ', ';\n  color: ', ';\n  border-radius: 3px;\n  position: relative;\n  display: flex;\n  ', ' {\n    margin-right: 12px;\n    position: relative;\n    top: 1px;\n    path {\n      fill: ', ';\n    }\n  }\n  ', ' {\n    color: ', ';\n    text-decoration: underline;\n    &:hover {\n      text-decoration: none;\n    }\n  }\n  ', ' {\n    position: absolute;\n    right: 0;\n    top: 0;\n    color: ', ';\n    opacity: 0.3;\n    padding: ', ' ', ';\n    &:hover {\n      opacity: 0.5;\n    }\n  }\n'], ['\n  ', ';\n  padding: ', ' ', ';\n  ', ';\n\n  background-color: ', ';\n  color: ', ';\n  border-radius: 3px;\n  position: relative;\n  display: flex;\n  ', ' {\n    margin-right: 12px;\n    position: relative;\n    top: 1px;\n    path {\n      fill: ', ';\n    }\n  }\n  ', ' {\n    color: ', ';\n    text-decoration: underline;\n    &:hover {\n      text-decoration: none;\n    }\n  }\n  ', ' {\n    position: absolute;\n    right: 0;\n    top: 0;\n    color: ', ';\n    opacity: 0.3;\n    padding: ', ' ', ';\n    &:hover {\n      opacity: 0.5;\n    }\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styled = require('../../styled');

var _styled2 = _interopRequireDefault(_styled);

var _cosmosTokens = require('@auth0/cosmos-tokens');

var _link = require('../link');

var _link2 = _interopRequireDefault(_link);

var _text = require('../text');

var _text2 = _interopRequireDefault(_text);

var _freeText = require('../../_helpers/free-text');

var _freeText2 = _interopRequireDefault(_freeText);

var _customValidations = require('../../_helpers/custom-validations');

var _automationAttribute = require('../../_helpers/automation-attribute');

var _automationAttribute2 = _interopRequireDefault(_automationAttribute);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

var _containerStyles = require('../../_helpers/container-styles');

var _containerStyles2 = _interopRequireDefault(_containerStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ReadMoreLink = (0, _styled2.default)(_link2.default)(_templateObject, function (props) {
  return _cosmosTokens.colors.alert[props.type].text;
}, _cosmosTokens.spacing.xxsmall);

var Alert = function (_React$Component) {
  _inherits(Alert, _React$Component);

  function Alert(props) {
    _classCallCheck(this, Alert);

    var _this = _possibleConstructorReturn(this, (Alert.__proto__ || Object.getPrototypeOf(Alert)).call(this, props));

    _this.dismiss = function () {
      _this.setState({ visible: false });
      if (typeof _this.props.onDismiss === 'function') _this.props.onDismiss();
    };

    _this.state = { visible: true };
    return _this;
  }

  _createClass(Alert, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.dismissAfterSeconds) {
        /* timer to auto dismiss the component */
        this.timer = window.setTimeout(this.dismiss, this.props.dismissAfterSeconds * 1000);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      /*
        clear timer on unmount
        we need to do this in case the user dismisses
        the alert before the timer gets to it
        otherwise we would try to setState on an unmounted
        component
      */
      if (this.timer) window.clearTimeout(this.timer);
    }
  }, {
    key: 'render',
    value: function render() {
      if (this.state.visible) {
        return _react2.default.createElement(
          Alert.Element,
          _extends({
            type: this.props.type,
            dismissible: this.props.dismissible
          }, (0, _automationAttribute2.default)('alert'), this.props),
          this.props.icon && _react2.default.createElement(_icon2.default, { name: this.props.icon, color: iconColorMap[this.props.type] }),
          _react2.default.createElement(
            'span',
            null,
            _react2.default.createElement(
              _text2.default,
              { type: 'strong' },
              this.props.title
            ),
            ' ',
            _react2.default.createElement(_freeText2.default, this.props),
            this.props.link && _react2.default.createElement(
              ReadMoreLink,
              { type: 'default', href: this.props.link, target: '_blank' },
              'Read more'
            )
          ),
          this.props.dismissible && _react2.default.createElement(Cross, _extends({ onClick: this.dismiss }, (0, _automationAttribute2.default)('alert.dismiss')))
        );
      } else return null;
    }
  }]);

  return Alert;
}(_react2.default.Component);

var Cross = _styled2.default.a(_templateObject2, _cosmosTokens.fonts.weight.bold);

var styledForCross = (0, _styled.css)(_templateObject3, _cosmosTokens.spacing.large);

Alert.Element = _styled2.default.div(_templateObject4, _containerStyles2.default, _cosmosTokens.spacing.small, _cosmosTokens.spacing.small, function (props) {
  return props.dismissible && styledForCross;
}, function (props) {
  return _cosmosTokens.colors.alert[props.type].background;
}, function (props) {
  return _cosmosTokens.colors.alert[props.type].text;
}, _icon2.default.Element, function (props) {
  return _cosmosTokens.colors.alert[props.type].text;
}, _link.StyledLink, function (props) {
  return _cosmosTokens.colors.alert[props.type].text;
}, Cross, function (props) {
  return _cosmosTokens.colors.alert[props.type].text;
}, _cosmosTokens.spacing.small, _cosmosTokens.spacing.small);

/*
  Icon only accepts colors from colors.base
  This is a map between alert types and base colors
*/
var iconColorMap = {
  default: 'default',
  information: 'blueDarker',
  success: 'greenDarker',
  warning: 'yellow',
  danger: 'redDarker'
};

Alert.propTypes = {
  /** Style of alert to show */
  type: _propTypes2.default.oneOf(['default', 'information', 'success', 'warning', 'danger']).isRequired,

  /** Name of icon */
  icon: _propTypes2.default.oneOf(_icon.__ICONNAMES__),

  /** Title text (in bold) */
  title: _propTypes2.default.string,

  /** @deprecated:children Details */
  text: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node]),

  /** Link to documentation */
  link: _propTypes2.default.string,

  /** Allow user to dismiss this alert */
  dismissible: _propTypes2.default.bool,

  /** Function to call on dismissal */
  onDismiss: _propTypes2.default.func,

  /** Automatically dismiss after N seconds */
  dismissAfterSeconds: _propTypes2.default.number,

  _error: function _error(props) {
    return (0, _customValidations.deprecate)(props, { name: 'text', replacement: 'children' });
  }
};

Alert.defaultProps = {
  type: 'default',
  dismissible: true
};

exports.default = Alert;
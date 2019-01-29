'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledSpinner = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n  0% { transform: rotate(0deg) }\n  100% { transform: rotate(1turn) }\n'], ['\n  0% { transform: rotate(0deg) }\n  100% { transform: rotate(1turn) }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  display: inline-block;\n  border-top: 2px solid ', ';\n  border-right: 2px solid ', ';\n  border-bottom: 2px solid ', ';\n  border-left: 2px solid ', ';\n  border-radius: 50%;\n  vertical-align: text-bottom;\n  width: ', 'px;\n  height: ', 'px;\n  animation: ', ' 0.8s infinite linear;\n'], ['\n  display: inline-block;\n  border-top: 2px solid ', ';\n  border-right: 2px solid ', ';\n  border-bottom: 2px solid ', ';\n  border-left: 2px solid ', ';\n  border-radius: 50%;\n  vertical-align: text-bottom;\n  width: ', 'px;\n  height: ', 'px;\n  animation: ', ' 0.8s infinite linear;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  position: relative;\n  width: ', 'px;\n  height: ', 'px;\n\n  ', ' {\n    position: absolute;\n    top: 52%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n  }\n'], ['\n  position: relative;\n  width: ', 'px;\n  height: ', 'px;\n\n  ', ' {\n    position: absolute;\n    top: 52%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styled = require('../../styled');

var _styled2 = _interopRequireDefault(_styled);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _logo = require('../logo');

var _logo2 = _interopRequireDefault(_logo);

var _defaultPropChange = require('../../_helpers/default-prop-change');

var _defaultPropChange2 = _interopRequireDefault(_defaultPropChange);

var _automationAttribute = require('../../_helpers/automation-attribute');

var _automationAttribute2 = _interopRequireDefault(_automationAttribute);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var rotate = (0, _styled.keyframes)(_templateObject);

var getColor = function getColor(props, highlight) {
  var color = '0, 0, 0';
  var opacity = highlight ? 0.4 : 0.08;

  if (props.inverse) {
    color = '255, 255, 255';
    opacity = highlight ? 0.85 : 0.2;
  }

  return 'rgba(' + color + ', ' + opacity + ')';
};

var spinners = {
  small: {
    logo: null,
    width: 14
  },
  medium: {
    logo: 'tiny',
    width: 40
  },
  large: {
    logo: 'small',
    width: 60
  }
};

var spinnerWithLogo = function spinnerWithLogo(variant, props) {
  var iconColor = props.inverse ? 'light' : 'dark';

  return _react2.default.createElement(
    Spinner.Container,
    { variant: variant },
    _react2.default.createElement(Spinner.Element, _extends({}, (0, _automationAttribute2.default)('spinner'), props, { width: variant.width })),
    _react2.default.createElement(_logo2.default, { size: variant.logo, color: iconColor })
  );
};

var Spinner = function Spinner(props) {
  (0, _defaultPropChange2.default)(Spinner, 'size', props.size, 'medium', '1.0.0');

  var variant = spinners[props.size];

  return variant.logo ? spinnerWithLogo(variant, props) : _react2.default.createElement(Spinner.Element, _extends({}, (0, _automationAttribute2.default)('spinner'), props, { width: variant.width }));
};

Spinner.Element = _styled2.default.span(_templateObject2, function (props) {
  return getColor(props);
}, function (props) {
  return getColor(props);
}, function (props) {
  return getColor(props);
}, function (props) {
  return getColor(props, true);
}, function (props) {
  return props.width;
}, function (props) {
  return props.width;
}, rotate);

Spinner.Container = _styled2.default.div(_templateObject3, function (p) {
  return p.variant.width;
}, function (p) {
  return p.variant.width;
}, _logo2.default.Element);

Spinner.propTypes = {
  /** Invert for dark background */
  inverse: _propTypes2.default.bool,
  size: _propTypes2.default.oneOf(['small', 'medium', 'large'])
};

Spinner.defaultProps = {
  inverse: false,
  size: 'small'
};

var StyledSpinner = Spinner.Element;

exports.default = Spinner;
exports.StyledSpinner = StyledSpinner;
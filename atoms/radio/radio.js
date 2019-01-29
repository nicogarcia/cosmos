'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledRadioOption = exports.StyledRadio = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral([''], ['']),
    _templateObject2 = _taggedTemplateLiteral(['\n  position: relative;\n  cursor: pointer;\n  padding-left: ', ';\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  vertical-align: middle;\n  pointer-events: ', ';\n\n  input {\n    position: absolute;\n    opacity: 0;\n    cursor: pointer;\n  }\n\n  ', ' {\n    opacity: ', ';\n  }\n\n  ', ' {\n    position: absolute;\n    top: 50%;\n    left: 0;\n    transform: translateY(-50%);\n    height: 16px;\n    width: 16px;\n    background-color: ', ';\n    border: 1px solid\n      ', ';\n    box-shadow: inset 0 1px 2px 0\n      ', ';\n    border-radius: 50%;\n  }\n\n  &:hover input ~ ', ' {\n    box-shadow: inset 0 1px 4px 0 ', ';\n  }\n\n  input:checked ~ ', ' {\n    background-color: ', ';\n    border: 1px solid ', ';\n  }\n\n  input:focus ~ ', ' {\n    box-shadow: inset 0 1px 4px 0 ', ', 0 0 0 2px ', ';\n  }\n\n  ', ':after {\n    content: \'\';\n    position: absolute;\n    display: none;\n  }\n\n  input:checked ~ ', ':after {\n    display: block;\n  }\n\n  ', ':after {\n    background-color: ', ';\n    width: 6px;\n    height: 6px;\n    border-radius: 50%;\n    box-shadow: 0 1px 2px 0 ', ';\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n  }\n'], ['\n  position: relative;\n  cursor: pointer;\n  padding-left: ', ';\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  vertical-align: middle;\n  pointer-events: ', ';\n\n  input {\n    position: absolute;\n    opacity: 0;\n    cursor: pointer;\n  }\n\n  ', ' {\n    opacity: ', ';\n  }\n\n  ', ' {\n    position: absolute;\n    top: 50%;\n    left: 0;\n    transform: translateY(-50%);\n    height: 16px;\n    width: 16px;\n    background-color: ', ';\n    border: 1px solid\n      ', ';\n    box-shadow: inset 0 1px 2px 0\n      ', ';\n    border-radius: 50%;\n  }\n\n  &:hover input ~ ', ' {\n    box-shadow: inset 0 1px 4px 0 ', ';\n  }\n\n  input:checked ~ ', ' {\n    background-color: ', ';\n    border: 1px solid ', ';\n  }\n\n  input:focus ~ ', ' {\n    box-shadow: inset 0 1px 4px 0 ', ', 0 0 0 2px ', ';\n  }\n\n  ', ':after {\n    content: \'\';\n    position: absolute;\n    display: none;\n  }\n\n  input:checked ~ ', ':after {\n    display: block;\n  }\n\n  ', ':after {\n    background-color: ', ';\n    width: 6px;\n    height: 6px;\n    border-radius: 50%;\n    box-shadow: 0 1px 2px 0 ', ';\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  ', ' {\n    display: ', ';\n    ', ';\n\n    &:last-child {\n      margin: 0;\n    }\n  }\n'], ['\n  ', ' {\n    display: ', ';\n    ', ';\n\n    &:last-child {\n      margin: 0;\n    }\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styled = require('../../styled');

var _styled2 = _interopRequireDefault(_styled);

var _cosmosTokens = require('@auth0/cosmos-tokens');

var _automationAttribute = require('../../_helpers/automation-attribute');

var _automationAttribute2 = _interopRequireDefault(_automationAttribute);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var CheckMark = _styled2.default.span(_templateObject);
var Label = _styled2.default.span(_templateObject);

var justifyContent = {
  horizontal: 'margin-right: ' + _cosmosTokens.spacing.medium,
  vertical: 'margin-bottom: ' + _cosmosTokens.spacing.xsmall
};

var Radio = function Radio(props) {
  return _react2.default.createElement(
    Radio.Element,
    _extends({}, props, (0, _automationAttribute2.default)('radio')),
    _react2.default.Children.map(props.children, function (child) {
      return _react2.default.cloneElement(child, {
        name: props.name,
        checked: props.selected === child.props.value,
        readOnly: props.readOnly || child.props.readOnly
      });
    })
  );
};

Radio.Option = function (_ref) {
  var readOnly = _ref.readOnly,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ['readOnly', 'children']);

  return _react2.default.createElement(
    Radio.Option.Element,
    { readOnly: props.readOnly },
    _react2.default.createElement('input', _extends({}, (0, _automationAttribute2.default)('radio.option'), { type: 'radio', readOnly: true }, props)),
    _react2.default.createElement(CheckMark, null),
    _react2.default.createElement(
      Label,
      null,
      children
    )
  );
};

Radio.Option.Element = _styled2.default.label(_templateObject2, _cosmosTokens.spacing.medium, function (props) {
  return props.readOnly ? 'none' : null;
}, Label, function (props) {
  return props.readOnly ? 0.5 : null;
}, CheckMark, function (props) {
  return props.readOnly ? _cosmosTokens.colors.radio.backgroundDisabled : _cosmosTokens.colors.radio.background;
}, function (props) {
  return props.readOnly ? _cosmosTokens.colors.radio.borderDisabled : _cosmosTokens.colors.radio.border;
}, function (props) {
  return props.readOnly ? _cosmosTokens.colors.radio.shadowDisabled : _cosmosTokens.colors.radio.shadow;
}, CheckMark, _cosmosTokens.colors.radio.shadow, CheckMark, _cosmosTokens.colors.radio.backgroundSelected, _cosmosTokens.colors.radio.borderSelected, CheckMark, _cosmosTokens.colors.radio.shadow, _cosmosTokens.colors.base.blue, CheckMark, CheckMark, CheckMark, _cosmosTokens.colors.base.white, _cosmosTokens.colors.radio.shadow);

Radio.Element = _styled2.default.div(_templateObject3, Radio.Option.Element, function (props) {
  return props.align === 'horizontal' ? 'inline-block' : 'table';
}, function (props) {
  return justifyContent[props.align];
});

Radio.propTypes = {
  /** The direction in which the options should be laid out */
  align: _propTypes2.default.oneOf(['horizontal', 'vertical']),
  /** The name of the radio */
  name: _propTypes2.default.string.isRequired,
  /** The value of the currently-selected option */
  selected: _propTypes2.default.string,
  /** If true, all options in the group will be disabled */
  readOnly: _propTypes2.default.bool,
  /** Callback function which is called when the user selects an option */
  onChange: _propTypes2.default.func
};

Radio.defaultProps = {
  align: 'vertical'
};

var StyledRadio = Radio.Element;
var StyledRadioOption = Radio.Option.Element;

exports.default = Radio;
exports.StyledRadio = StyledRadio;
exports.StyledRadioOption = StyledRadioOption;
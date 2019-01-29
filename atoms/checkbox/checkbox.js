'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledCheckboxOption = exports.StyledCheckbox = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral([''], ['']),
    _templateObject2 = _taggedTemplateLiteral(['\n  ', ';\n\n  position: relative;\n  cursor: pointer;\n  margin-bottom: 0;\n  font-weight: ', ';\n  padding-left: ', ';\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  vertical-align: middle;\n  pointer-events: ', ';\n\n  input {\n    position: absolute;\n    opacity: 0;\n    cursor: pointer;\n  }\n\n  ', ' {\n    opacity: ', ';\n  }\n\n  ', ' {\n    position: absolute;\n    top: 50%;\n    left: 0;\n    transform: translateY(-50%);\n    height: 16px;\n    width: 16px;\n    background-color: ', ';\n    border: 1px solid\n      ', ';\n    box-shadow: inset 0 1px 2px 0\n      ', ';\n    border-radius: 2px;\n  }\n\n  &:hover input ~ ', ' {\n    box-shadow: inset 0 1px 4px 0 ', ';\n  }\n\n  input:checked ~ ', ' {\n    background-color: ', ';\n    border: 1px solid ', ';\n  }\n\n  input:focus ~ ', ' {\n    box-shadow: inset 0 1px 4px 0 ', ', 0 0 0 2px ', ';\n  }\n\n  ', ':after {\n    content: \'\';\n    position: absolute;\n    display: none;\n  }\n\n  input:checked ~ ', ':after {\n    display: block;\n  }\n\n  ', ':after {\n    box-sizing: content-box;\n    width: 4px;\n    height: 8px;\n    border: solid ', ';\n    border-width: 0 2px 2px 0;\n    transform: rotate(45deg) translate(-50%, -50%);\n    left: 20%;\n    top: 50%;\n  }\n'], ['\n  ', ';\n\n  position: relative;\n  cursor: pointer;\n  margin-bottom: 0;\n  font-weight: ', ';\n  padding-left: ', ';\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  vertical-align: middle;\n  pointer-events: ', ';\n\n  input {\n    position: absolute;\n    opacity: 0;\n    cursor: pointer;\n  }\n\n  ', ' {\n    opacity: ', ';\n  }\n\n  ', ' {\n    position: absolute;\n    top: 50%;\n    left: 0;\n    transform: translateY(-50%);\n    height: 16px;\n    width: 16px;\n    background-color: ', ';\n    border: 1px solid\n      ', ';\n    box-shadow: inset 0 1px 2px 0\n      ', ';\n    border-radius: 2px;\n  }\n\n  &:hover input ~ ', ' {\n    box-shadow: inset 0 1px 4px 0 ', ';\n  }\n\n  input:checked ~ ', ' {\n    background-color: ', ';\n    border: 1px solid ', ';\n  }\n\n  input:focus ~ ', ' {\n    box-shadow: inset 0 1px 4px 0 ', ', 0 0 0 2px ', ';\n  }\n\n  ', ':after {\n    content: \'\';\n    position: absolute;\n    display: none;\n  }\n\n  input:checked ~ ', ':after {\n    display: block;\n  }\n\n  ', ':after {\n    box-sizing: content-box;\n    width: 4px;\n    height: 8px;\n    border: solid ', ';\n    border-width: 0 2px 2px 0;\n    transform: rotate(45deg) translate(-50%, -50%);\n    left: 20%;\n    top: 50%;\n  }\n']),
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

var _containerStyles = require('../../_helpers/container-styles');

var _containerStyles2 = _interopRequireDefault(_containerStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var CheckMark = _styled2.default.span(_templateObject);
var Label = _styled2.default.span(_templateObject);

var justifyContent = {
  horizontal: 'margin-right: ' + _cosmosTokens.spacing.medium,
  vertical: 'margin-bottom: ' + _cosmosTokens.spacing.small
};

var Checkbox = function Checkbox(props) {
  return _react2.default.createElement(
    Checkbox.Option,
    _extends({ readOnly: props.readOnly }, (0, _automationAttribute2.default)('checkbox'), props),
    _react2.default.createElement('input', _extends({
      type: 'checkbox',
      name: props.name,
      value: props.value,
      checked: props.checked,
      defaultChecked: props.defaultChecked,
      onChange: props.onChange,
      readOnly: true
    }, (0, _automationAttribute2.default)('checkbox.input'))),
    _react2.default.createElement(CheckMark, null),
    _react2.default.createElement(
      Label,
      null,
      props.children
    )
  );
};

Checkbox.Option = _styled2.default.label(_templateObject2, _containerStyles2.default, _cosmosTokens.fonts.weight.normal, _cosmosTokens.spacing.medium, function (props) {
  return props.readOnly ? 'none' : null;
}, Label, function (props) {
  return props.readOnly ? 0.5 : null;
}, CheckMark, function (props) {
  return props.readOnly ? _cosmosTokens.colors.radio.backgroundDisabled : _cosmosTokens.colors.radio.background;
}, function (props) {
  return props.readOnly ? _cosmosTokens.colors.radio.borderDisabled : _cosmosTokens.colors.radio.border;
}, function (props) {
  return props.readOnly ? _cosmosTokens.colors.radio.shadowDisabled : _cosmosTokens.colors.radio.shadow;
}, CheckMark, _cosmosTokens.colors.radio.shadow, CheckMark, _cosmosTokens.colors.radio.backgroundSelected, _cosmosTokens.colors.radio.borderSelected, CheckMark, _cosmosTokens.colors.radio.shadow, _cosmosTokens.colors.base.blue, CheckMark, CheckMark, CheckMark, _cosmosTokens.colors.base.white);

Checkbox.Element = _styled2.default.div(_templateObject3, Checkbox.Option, function (props) {
  return props.align === 'horizontal' ? 'inline-block' : 'table';
}, function (props) {
  return justifyContent[props.align];
});

Checkbox.Group = function (props) {
  return _react2.default.createElement(
    Checkbox.Element,
    _extends({}, props, (0, _automationAttribute2.default)('checkbox.group')),
    _react2.default.Children.map(props.children, function (child) {
      return _react2.default.cloneElement(child, {
        name: props.name,
        defaultChecked: props.selected.indexOf(child.props.value) > -1,
        checked: props.checked,
        readOnly: props.readOnly || child.props.readOnly,
        onChange: props.onChange
      });
    })
  );
};

// Backwards compatibility (will be removed in 1.0)
var StyledCheckbox = Checkbox.Element;
var StyledCheckboxOption = Checkbox.Option;

Checkbox.propTypes = {
  /** The direction in which the options should be laid out */
  align: _propTypes2.default.oneOf(['horizontal', 'vertical']),
  /** The name of the checkbox */
  name: _propTypes2.default.string.isRequired,
  /** The value of the currently-selected option */
  selected: _propTypes2.default.arrayOf(_propTypes2.default.string),
  /** If true, all options in the group will be disabled */
  readOnly: _propTypes2.default.bool,
  /** Callback function which is called when the user selects an option */
  onChange: _propTypes2.default.func
};

Checkbox.defaultProps = {
  align: 'vertical'
};

exports.default = Checkbox;
exports.StyledCheckbox = StyledCheckbox;
exports.StyledCheckboxOption = StyledCheckboxOption;
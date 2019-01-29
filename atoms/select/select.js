'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n  appearance: none;\n\n  padding-right: ', ';\n\n  height: ', ';\n  opacity: ', ';\n  background-color: ', ';\n'], ['\n  appearance: none;\n\n  padding-right: ', ';\n\n  height: ', ';\n  opacity: ', ';\n  background-color: ', ';\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  position: relative;\n  display: flex;\n  align-items: center;\n'], ['\n  position: relative;\n  display: flex;\n  align-items: center;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  position: absolute;\n  right: 12px;\n  pointer-events: none;\n\n  svg {\n    display: block;\n  }\n'], ['\n  position: absolute;\n  right: 12px;\n  pointer-events: none;\n\n  svg {\n    display: block;\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _automationAttribute = require('../../_helpers/automation-attribute');

var _automationAttribute2 = _interopRequireDefault(_automationAttribute);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

var _styled = require('../../styled');

var _styled2 = _interopRequireDefault(_styled);

var _cosmosTokens = require('@auth0/cosmos-tokens');

var _styledInput = require('../_styled-input');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var selectOpacity = {
  default: 1,
  disabled: 0.5
};
var PLACEHOLDER_VALUE = '__select_placeholder';

var isGroup = function isGroup(option) {
  return option.groupName && option.items;
};
var renderOption = function renderOption(option, idx) {
  if (isGroup(option)) {
    return _react2.default.createElement(
      'optgroup',
      _extends({ key: idx, label: option.groupName }, (0, _automationAttribute2.default)('select.optgroup')),
      option.items.map(renderOption)
    );
  }

  return _react2.default.createElement(
    'option',
    _extends({
      key: idx,
      value: option.value,
      readOnly: option.disabled,
      disabled: option.disabled
    }, (0, _automationAttribute2.default)('select.option')),
    option.text
  );
};

var Select = function Select(_ref) {
  var options = _ref.options,
      props = _objectWithoutProperties(_ref, ['options']);

  /*
    select boxes do not support readonly like input boxes,
    but they do have disabled. we need the style of readOnly input
    and functionality of select disabled
  */
  if (!(props.value || props.defaultValue)) props.value = PLACEHOLDER_VALUE;

  return _react2.default.createElement(
    Select.Wrapper,
    null,
    _react2.default.createElement(Select.ArrowIcon, { name: 'dropdown-fill', size: '14', color: 'default' }),
    _react2.default.createElement(
      Select.Element,
      _extends({}, props, (0, _automationAttribute2.default)('select')),
      _react2.default.createElement(
        'option',
        _extends({ disabled: true, hidden: true, value: PLACEHOLDER_VALUE }, (0, _automationAttribute2.default)('select.option')),
        props.placeholder
      ),
      options.map(renderOption)
    )
  );
};

Select.Element = (0, _styled2.default)(_styledInput.StyledInput.withComponent('select'))(_templateObject, _cosmosTokens.spacing.large, _cosmosTokens.misc.input.default.height, function (props) {
  return props.disabled ? selectOpacity.disabled : selectOpacity.default;
}, function (props) {
  return props.disabled ? _cosmosTokens.colors.input.backgroundReadOnly : _cosmosTokens.colors.input.background;
});

Select.Wrapper = _styled2.default.div(_templateObject2);

Select.ArrowIcon = (0, _styled2.default)(_icon2.default)(_templateObject3);

var selectOptionShape = _propTypes2.default.shape({
  text: _propTypes2.default.string.isRequired,
  value: _propTypes2.default.any.isRequired,
  disabled: _propTypes2.default.bool
});

Select.propTypes = {
  /** Options to render inside select */
  options: _propTypes2.default.arrayOf(_propTypes2.default.oneOfType([selectOptionShape, _propTypes2.default.shape({
    groupName: _propTypes2.default.string.isRequired,
    items: _propTypes2.default.arrayOf(selectOptionShape)
  })])),
  /** Value selected by default */
  value: _propTypes2.default.any,
  /** onChange transparently passed to select */
  onChange: _propTypes2.default.func,
  /** String to show when the first empty choice is selected */
  placeholder: _propTypes2.default.string,
  /** Determines if the select should be disabled */
  disabled: _propTypes2.default.bool
};

Select.defaultProps = {
  options: [],
  placeholder: ''
};

exports.default = Select;
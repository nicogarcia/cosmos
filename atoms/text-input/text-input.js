'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledInput = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n  height: ', ';\n'], ['\n  height: ', ';\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styled = require('../../styled');

var _styled2 = _interopRequireDefault(_styled);

var _cosmosTokens = require('@auth0/cosmos-tokens');

var _styledInput = require('../_styled-input');

var _automationAttribute = require('../../_helpers/automation-attribute');

var _automationAttribute2 = _interopRequireDefault(_automationAttribute);

var _customValidations = require('../../_helpers/custom-validations');

var _inputWithActions = require('../_input-with-actions');

var _inputWithActions2 = _interopRequireDefault(_inputWithActions);

var _actionShape = require('../../_helpers/action-shape');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/* Helpers */


/* Input with actions */


var TextInput = function TextInput(props) {
  var defaultValue = props.defaultValue,
      placeholder = props.placeholder,
      readOnly = props.readOnly,
      restOfTheProps = _objectWithoutProperties(props, ['defaultValue', 'placeholder', 'readOnly']);

  /*
    override placeholder and readOnly for masked
     masked is like a readOnly field but with the values replaced with *
    (like password, but without the value underneath)
  */


  if (props.masked) {
    var length = props.defaultValue ? props.defaultValue.length : 8;
    placeholder = new Array(length).join('•');
    readOnly = true;
    defaultValue = null;
  }

  var Input = _react2.default.createElement(TextInput.Element, _extends({}, (0, _automationAttribute2.default)('text-input'), {
    defaultValue: defaultValue,
    placeholder: placeholder,
    readOnly: readOnly
  }, restOfTheProps));

  if (!props.actions.length) return Input;else {
    /* Input is not a component, just JSX, hence wrapper in {} */
    return _react2.default.createElement(
      _inputWithActions2.default,
      { actions: props.actions, size: props.size },
      Input
    );
  }
};

TextInput.Element = (0, _styled2.default)(_styledInput.StyledInput)(_templateObject, function (props) {
  return _cosmosTokens.misc.input[props.size].height;
});

TextInput.propTypes = {
  /** Hide input, similar to passwords but for other private information. Implies readOnly. */
  masked: _propTypes2.default.bool,
  /** Make input readOnly if it does not validate constraint */
  readOnly: _propTypes2.default.bool,
  /** Use when the expected input is code */
  code: _propTypes2.default.bool,
  /** Pass hasError to show error state */
  hasError: _propTypes2.default.bool,
  /** @deprecated:hasError Pass error string directly to show error state */
  error: _propTypes2.default.string,
  /** onChange transparently passed to the input */
  onChange: _propTypes2.default.func,
  /** Text to display when the input is empty */
  placeholder: _propTypes2.default.string,
  /** The default value for the field */
  defaultValue: _propTypes2.default.string,
  /** The (HTML) type for the input. */
  type: _propTypes2.default.string,
  /** The size of the input. */
  size: _propTypes2.default.oneOf(['default', 'large', 'small', 'compressed']),
  /** Actions to be attached to the input */
  actions: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.element), _propTypes2.default.arrayOf(_actionShape.actionShapeWithRequiredIcon)]),

  /** deprecate error string prop */
  _error: function _error(props) {
    return (0, _customValidations.deprecate)(props, { name: 'error', replacement: 'hasError' });
  }
};

TextInput.defaultProps = {
  readOnly: false,
  code: false,
  error: null,
  onChange: null,
  type: 'text',
  size: 'default',
  actions: []
};

exports.default = TextInput;
exports.StyledInput = _styledInput.StyledInput;
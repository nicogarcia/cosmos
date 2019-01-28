'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledTextArea = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/* Input with actions */


var _templateObject = _taggedTemplateLiteral(['\n  resize: ', ';\n  font-size: ', ';\n  display: block;\n'], ['\n  resize: ', ';\n  font-size: ', ';\n  display: block;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styled = require('../../styled');

var _styled2 = _interopRequireDefault(_styled);

var _styledInput = require('../_styled-input');

var _customValidations = require('../../_helpers/custom-validations');

var _automationAttribute = require('../../_helpers/automation-attribute');

var _automationAttribute2 = _interopRequireDefault(_automationAttribute);

var _inputWithActions = require('../_input-with-actions');

var _inputWithActions2 = _interopRequireDefault(_inputWithActions);

var _actionShape = require('../../_helpers/action-shape');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var TextArea = function TextArea(props) {
  var Input = _react2.default.createElement(TextArea.Element, _extends({ rows: props.length }, props, (0, _automationAttribute2.default)('text-area')));

  if (!props.actions.length) return Input;else {
    /* Input is not a component, just JSX, hence wrapped in {} */
    return _react2.default.createElement(
      _inputWithActions2.default,
      { actions: props.actions },
      Input
    );
  }
};

TextArea.Element = (0, _styled2.default)(_styledInput.StyledInput.withComponent('textarea'))(_templateObject, function (props) {
  return props.resizable ? 'vertical' : 'none';
}, function (props) {
  return props.code ? '13px' : 'inherit';
});

var StyledTextArea = TextArea.Element;

TextArea.propTypes = {
  /** Length of the textarea in rows */
  length: _propTypes2.default.number,
  /** Make input readOnly if it does not validate constraint */
  readOnly: _propTypes2.default.bool,
  /** Use when the expected input is code */
  code: _propTypes2.default.bool,
  /** Pass hasError to show error state */
  hasError: _propTypes2.default.bool,
  /** @deprecated:hasError Pass error string directly to show error state */
  error: _propTypes2.default.string,
  /** Allow resizing of the textarea */
  resizable: _propTypes2.default.bool,
  /** onChange transparently passed to the input */
  onChange: _propTypes2.default.func,
  /** Actions to be attached to the input */
  actions: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.element), _propTypes2.default.arrayOf(_actionShape.actionShapeWithRequiredIcon)]),

  /** deprecate error string prop */
  _error: function _error(props) {
    return (0, _customValidations.deprecate)(props, { name: 'error', replacement: 'hasError' });
  }
};

TextArea.defaultProps = {
  length: 3,
  readOnly: false,
  code: false,
  error: null,
  resizable: true,
  onChange: null,
  actions: []
};

exports.default = TextArea;
exports.StyledTextArea = StyledTextArea;
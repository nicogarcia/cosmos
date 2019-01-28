'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _automationAttribute = require('../../_helpers/automation-attribute');

var _automationAttribute2 = _interopRequireDefault(_automationAttribute);

var _textInput = require('../../atoms/text-input');

var _textInput2 = _interopRequireDefault(_textInput);

var _textarea = require('../../atoms/textarea');

var _textarea2 = _interopRequireDefault(_textarea);

var _select = require('../../atoms/select');

var _select2 = _interopRequireDefault(_select);

var _switch = require('../../atoms/switch');

var _switch2 = _interopRequireDefault(_switch);

var _radio = require('../../atoms/radio');

var _radio2 = _interopRequireDefault(_radio);

var _field = require('./field');

var _field2 = _interopRequireDefault(_field);

var _actions = require('./actions');

var _actions2 = _interopRequireDefault(_actions);

var _fieldset = require('./fieldset');

var _fieldset2 = _interopRequireDefault(_fieldset);

var _formContext = require('./form-context');

var _formContext2 = _interopRequireDefault(_formContext);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Form = function Form(props) {
  return _react2.default.createElement(
    _formContext2.default.Provider,
    { value: { layout: props.layout } },
    _react2.default.createElement('form', _extends({}, props, (0, _automationAttribute2.default)('form')))
  );
};

Form.Field = function (props) {
  return _react2.default.createElement(_field2.default, props);
};
Form.TextInput = function (props) {
  return _react2.default.createElement(_field2.default, _extends({}, props, { fieldComponent: _textInput2.default }));
};
Form.TextArea = function (props) {
  return _react2.default.createElement(_field2.default, _extends({}, props, { fieldComponent: _textarea2.default }));
};
Form.Select = function (props) {
  return _react2.default.createElement(_field2.default, _extends({}, props, { fieldComponent: _select2.default }));
};
Form.Switch = function (props) {
  return _react2.default.createElement(_field2.default, _extends({}, props, { fieldComponent: _switch2.default }));
};
Form.Radio = function (props) {
  return _react2.default.createElement(_field2.default, _extends({}, props, { fieldComponent: _radio2.default }));
};
Form.Radio.Option = _radio2.default.Option;
Form.Actions = _actions2.default;
Form.FieldSet = _fieldset2.default;

Form.propTypes = {
  /** Two options for controlling form layout */
  layout: _propTypes2.default.oneOf(['label-on-left', 'label-on-top'])
};

Form.defaultProps = {
  layout: 'label-on-left'
};

exports.default = Form;
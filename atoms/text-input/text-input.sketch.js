'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _ = require('../..');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('TextInput', module).add('text', function () {
  return _react2.default.createElement(_.TextInput, { type: 'text', defaultValue: 'This is plain text field value' });
});

(0, _react3.storiesOf)('TextInput', module).add('password', function () {
  return _react2.default.createElement(_.TextInput, { type: 'password', defaultValue: 'This is a code field' });
});

(0, _react3.storiesOf)('TextInput', module).add('number', function () {
  return _react2.default.createElement(_.TextInput, { type: 'number', defaultValue: '1' });
});

(0, _react3.storiesOf)('TextInput', module).add('code', function () {
  return _react2.default.createElement(_.TextInput, { code: true, defaultValue: 'DUq0xuJZAD7RvezvqCrA6hpJVb6iDUip' });
});

(0, _react3.storiesOf)('TextInput', module).add('readOnly', function () {
  return _react2.default.createElement(_.TextInput, { readOnly: true, placeholder: 'Field is disabled' });
});

(0, _react3.storiesOf)('TextInput', module).add('masked', function () {
  return _react2.default.createElement(_.TextInput, { defaultValue: 'secret-client-hash', masked: true });
});
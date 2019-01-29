'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _ = require('../..');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('TextArea', module).add('default', function () {
  return _react2.default.createElement(_.TextArea, { length: 1, placeholder: 'Small TextArea' });
});

(0, _react3.storiesOf)('TextArea', module).add('longer', function () {
  return _react2.default.createElement(_.TextArea, { length: 7, placeholder: 'Really long TextArea' });
});

(0, _react3.storiesOf)('TextArea', module).add('not resizable', function () {
  return _react2.default.createElement(_.TextArea, { resizable: false, placeholder: 'Can\'t resize this' });
});

(0, _react3.storiesOf)('TextArea', module).add('readOnly', function () {
  return _react2.default.createElement(_.TextArea, { readOnly: true, placeholder: 'Field is disabled' });
});
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _ = require('../..');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('Switch', module).add('default', function () {
  return _react2.default.createElement(_.Switch, { onToggle: function onToggle(value) {
      return console.log(value);
    } });
});

(0, _react3.storiesOf)('Switch', module).add('on state', function () {
  return _react2.default.createElement(_.Switch, { on: true, onToggle: function onToggle(value) {
      return console.log(value);
    } });
});

(0, _react3.storiesOf)('Switch', module).add('readOnly', function () {
  return _react2.default.createElement(_.Switch, { readOnly: true, onToggle: function onToggle(value) {
      return console.log(value);
    } });
});

(0, _react3.storiesOf)('Switch', module).add('on + readOnly', function () {
  return _react2.default.createElement(_.Switch, { on: true, readOnly: true, onToggle: function onToggle(value) {
      return console.log(value);
    } });
});

(0, _react3.storiesOf)('Switch', module).add('custom labels', function () {
  return _react2.default.createElement(_.Switch, { accessibleLabels: ['ON', 'OFF'], onToggle: function onToggle(value) {
      return console.log(value);
    } });
});
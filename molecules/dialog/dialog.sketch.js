'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _ = require('../..');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* how do we pass open to the underlying overlay here? */
(0, _react3.storiesOf)('Dialog', module).add('default', function () {
  return _react2.default.createElement(
    _.Dialog,
    {
      title: 'Example Dialog',
      onClose: function onClose() {},
      actions: [new _.Dialog.Action('OK', function () {}, 'primary'), new _.Dialog.Action('Cancel', function () {})]
    },
    'Are you sure?'
  );
});
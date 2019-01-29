'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _ = require('../..');

var _2 = require('./');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_2.__ICONNAMES__.map(function (name) {
  (0, _react3.storiesOf)('Icon', module).add(name, function () {
    return _react2.default.createElement(_.Icon, { name: name });
  });
});
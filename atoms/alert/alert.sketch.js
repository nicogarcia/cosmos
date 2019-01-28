'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _ = require('../..');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('Alert', module).add('default', function () {
  return _react2.default.createElement(_.Alert, {
    type: 'default',
    title: 'Notice!',
    text: 'This is an important message!',
    link: 'https://auth0.com'
  });
});

(0, _react3.storiesOf)('Alert', module).add('information', function () {
  return _react2.default.createElement(_.Alert, {
    type: 'information',
    title: 'Notice!',
    text: 'This is an important message!',
    link: 'https://auth0.com'
  });
});

(0, _react3.storiesOf)('Alert', module).add('success', function () {
  return _react2.default.createElement(_.Alert, {
    type: 'success',
    title: 'Notice!',
    text: 'This is an important message!',
    link: 'https://auth0.com'
  });
});

(0, _react3.storiesOf)('Alert', module).add('warning', function () {
  return _react2.default.createElement(_.Alert, {
    type: 'warning',
    title: 'Notice!',
    text: 'This is an important message!',
    link: 'https://auth0.com'
  });
});

(0, _react3.storiesOf)('Alert', module).add('danger', function () {
  return _react2.default.createElement(_.Alert, {
    type: 'danger',
    title: 'Notice!',
    text: 'This is an important message!',
    link: 'https://auth0.com'
  });
});
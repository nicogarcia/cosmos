'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _ = require('../../..');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('Button', module).add('default', function () {
  return _react2.default.createElement(
    _.Button,
    null,
    'Button'
  );
});
(0, _react3.storiesOf)('Button', module).add('primary', function () {
  return _react2.default.createElement(
    _.Button,
    { appearance: 'primary' },
    'Button'
  );
});
(0, _react3.storiesOf)('Button', module).add('seconadary', function () {
  return _react2.default.createElement(
    _.Button,
    { appearance: 'seconadary' },
    'Button'
  );
});
(0, _react3.storiesOf)('Button', module).add('link', function () {
  return _react2.default.createElement(
    _.Button,
    { appearance: 'link' },
    'Button'
  );
});
(0, _react3.storiesOf)('Button', module).add('destructive', function () {
  return _react2.default.createElement(
    _.Button,
    { appearance: 'destructive' },
    'Button'
  );
});
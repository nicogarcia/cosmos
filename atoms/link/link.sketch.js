'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _ = require('../..');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('Link', module).add('default', function () {
  return _react2.default.createElement(
    _.Link,
    { href: 'https://auth0.com' },
    'Click me!'
  );
});
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _ = require('../..');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('Text', module).add('default', function () {
  return _react2.default.createElement(
    _.Text,
    null,
    'Good old text'
  );
});

(0, _react3.storiesOf)('Text', module).add('all caps', function () {
  return _react2.default.createElement(
    _.Text,
    { type: 'allcaps' },
    'All caps text'
  );
});

(0, _react3.storiesOf)('Text', module).add('subdued', function () {
  return _react2.default.createElement(
    _.Text,
    { type: 'subdued' },
    'subdued text'
  );
});
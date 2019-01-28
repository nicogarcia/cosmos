'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _ = require('../..');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('Paragraph', module).add('default', function () {
  return _react2.default.createElement(
    _.Paragraph,
    null,
    'Application metadata are custom string keys and values (max 255 characters each), set on a per application basis.'
  );
});
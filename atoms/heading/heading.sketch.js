'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _ = require('../..');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('Heading', module).add('size 1', function () {
  return _react2.default.createElement(
    _.Heading,
    { size: 1 },
    'Heading 1'
  );
});
(0, _react3.storiesOf)('Heading', module).add('size 2', function () {
  return _react2.default.createElement(
    _.Heading,
    { size: 2 },
    'Heading 2'
  );
});
(0, _react3.storiesOf)('Heading', module).add('size 3', function () {
  return _react2.default.createElement(
    _.Heading,
    { size: 3 },
    'Heading 3'
  );
});
(0, _react3.storiesOf)('Heading', module).add('size 4', function () {
  return _react2.default.createElement(
    _.Heading,
    { size: 4 },
    'Heading 4'
  );
});
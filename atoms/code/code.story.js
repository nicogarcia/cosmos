'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _storyHelpers = require('../../_helpers/story-helpers');

var _ = require('../..');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('Code', module).add('default', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    { title: 'Code' },
    'This is a ',
    _react2.default.createElement(
      _.Code,
      null,
      'special'
    ),
    ' word'
  );
});
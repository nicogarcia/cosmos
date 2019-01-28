'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _storyHelpers = require('../../_helpers/story-helpers');

var _ = require('../..');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('Heading', module).add('sizes', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    { title: 'Sizes' },
    _react2.default.createElement(
      _.Heading,
      { size: 1 },
      'Good design is good business'
    ),
    _react2.default.createElement(
      _.Heading,
      { size: 2 },
      'Good design is good business'
    ),
    _react2.default.createElement(
      _.Heading,
      { size: 3 },
      'Good design is good business'
    ),
    _react2.default.createElement(
      _.Heading,
      { size: 4 },
      'Good design is good business'
    )
  );
});
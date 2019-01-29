'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _storyHelpers = require('../../_helpers/story-helpers');

var _ = require('../..');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('Text', module).add('default', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    { title: 'Text' },
    _react2.default.createElement(
      _.Text,
      null,
      'Good design is good business'
    )
  );
});

(0, _react3.storiesOf)('Text', module).add('allcaps', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    { title: 'Text' },
    _react2.default.createElement(
      _.Text,
      { type: 'allcaps' },
      'Good design is good business'
    )
  );
});

(0, _react3.storiesOf)('Text', module).add('subdued', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    { title: 'Text' },
    _react2.default.createElement(
      _.Text,
      { type: 'subdued' },
      'Good design is good business'
    )
  );
});
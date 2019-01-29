'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _storyHelpers = require('../../_helpers/story-helpers');

var _storyLayoutPlaceholder = require('../../_helpers/story-layout-placeholder');

var _storyLayoutPlaceholder2 = _interopRequireDefault(_storyLayoutPlaceholder);

var _ = require('../..');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('Row Layout', module).add('default', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    { title: 'default' },
    _react2.default.createElement(
      _.RowLayout,
      null,
      _react2.default.createElement(_storyLayoutPlaceholder2.default, null),
      _react2.default.createElement(_storyLayoutPlaceholder2.default, null),
      _react2.default.createElement(_storyLayoutPlaceholder2.default, null),
      _react2.default.createElement(_storyLayoutPlaceholder2.default, null)
    )
  );
});

(0, _react3.storiesOf)('Row Layout', module).add('condensed', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    { title: 'condensed' },
    _react2.default.createElement(
      _.RowLayout,
      { gutter: 'condensed' },
      _react2.default.createElement(_storyLayoutPlaceholder2.default, null),
      _react2.default.createElement(_storyLayoutPlaceholder2.default, null),
      _react2.default.createElement(_storyLayoutPlaceholder2.default, null),
      _react2.default.createElement(_storyLayoutPlaceholder2.default, null)
    )
  );
});

(0, _react3.storiesOf)('Row Layout', module).add('spacious', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    { title: 'spacious' },
    _react2.default.createElement(
      _.RowLayout,
      { gutter: 'spacious' },
      _react2.default.createElement(_storyLayoutPlaceholder2.default, null),
      _react2.default.createElement(_storyLayoutPlaceholder2.default, null),
      _react2.default.createElement(_storyLayoutPlaceholder2.default, null),
      _react2.default.createElement(_storyLayoutPlaceholder2.default, null)
    )
  );
});

// Grid Test
(0, _react3.storiesOf)('Row & Column Grid', module).add('test', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    { title: 'test' },
    _react2.default.createElement(
      _.ColumnLayout,
      { distribution: '2/4 1/4 1/4' },
      _react2.default.createElement(
        _.RowLayout,
        null,
        _react2.default.createElement(_storyLayoutPlaceholder2.default, null),
        _react2.default.createElement(
          _.ColumnLayout,
          { distribution: '1/3 2/3' },
          _react2.default.createElement(_storyLayoutPlaceholder2.default, null),
          _react2.default.createElement(_storyLayoutPlaceholder2.default, null)
        ),
        _react2.default.createElement(_storyLayoutPlaceholder2.default, null)
      ),
      _react2.default.createElement(_storyLayoutPlaceholder2.default, null),
      _react2.default.createElement(_storyLayoutPlaceholder2.default, null)
    )
  );
});
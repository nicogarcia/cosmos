'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _storyHelpers = require('../../_helpers/story-helpers');

var _storyLayoutPlaceholder = require('../../_helpers/story-layout-placeholder');

var _storyLayoutPlaceholder2 = _interopRequireDefault(_storyLayoutPlaceholder);

var _ = require('../..');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('Column Layout', module).add('1/2 1/2', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    { title: '1/2 1/2' },
    _react2.default.createElement(
      _.ColumnLayout,
      { distribution: '1/2 1/2' },
      _react2.default.createElement(_storyLayoutPlaceholder2.default, null),
      _react2.default.createElement(_storyLayoutPlaceholder2.default, null),
      _react2.default.createElement(_storyLayoutPlaceholder2.default, null),
      _react2.default.createElement(_storyLayoutPlaceholder2.default, null)
    )
  );
});

(0, _react3.storiesOf)('Column Layout', module).add('1/3 1/3 1/3', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    { title: '1/3 1/3 1/3' },
    _react2.default.createElement(
      _.ColumnLayout,
      { distribution: '1/3 1/3 1/3' },
      _react2.default.createElement(_storyLayoutPlaceholder2.default, null),
      _react2.default.createElement(_storyLayoutPlaceholder2.default, null),
      _react2.default.createElement(_storyLayoutPlaceholder2.default, null),
      _react2.default.createElement(_storyLayoutPlaceholder2.default, null),
      _react2.default.createElement(_storyLayoutPlaceholder2.default, null),
      _react2.default.createElement(_storyLayoutPlaceholder2.default, null)
    )
  );
});

(0, _react3.storiesOf)('Column Layout', module).add('1/3 2/3', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    { title: '1/3 2/3' },
    _react2.default.createElement(
      _.ColumnLayout,
      { distribution: '1/3 2/3' },
      _react2.default.createElement(_storyLayoutPlaceholder2.default, null),
      _react2.default.createElement(_storyLayoutPlaceholder2.default, null),
      _react2.default.createElement(_storyLayoutPlaceholder2.default, null),
      _react2.default.createElement(_storyLayoutPlaceholder2.default, null)
    )
  );
});

(0, _react3.storiesOf)('Column Layout', module).add('2/3 1/3', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    { title: '2/3 1/3' },
    _react2.default.createElement(
      _.ColumnLayout,
      { distribution: '2/3 1/3' },
      _react2.default.createElement(_storyLayoutPlaceholder2.default, null),
      _react2.default.createElement(_storyLayoutPlaceholder2.default, null),
      _react2.default.createElement(_storyLayoutPlaceholder2.default, null),
      _react2.default.createElement(_storyLayoutPlaceholder2.default, null)
    )
  );
});

(0, _react3.storiesOf)('Column Layout', module).add('1/4 1/4 1/4 1/4', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    { title: '1/4 1/4 1/4 1/4' },
    _react2.default.createElement(
      _.ColumnLayout,
      { distribution: '1/4 1/4 1/4 1/4' },
      _react2.default.createElement(_storyLayoutPlaceholder2.default, null),
      _react2.default.createElement(_storyLayoutPlaceholder2.default, null),
      _react2.default.createElement(_storyLayoutPlaceholder2.default, null),
      _react2.default.createElement(_storyLayoutPlaceholder2.default, null),
      _react2.default.createElement(_storyLayoutPlaceholder2.default, null),
      _react2.default.createElement(_storyLayoutPlaceholder2.default, null),
      _react2.default.createElement(_storyLayoutPlaceholder2.default, null),
      _react2.default.createElement(_storyLayoutPlaceholder2.default, null)
    )
  );
});

(0, _react3.storiesOf)('Column Layout', module).add('2/4 1/4 1/4', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    { title: '2/4 1/4 1/4' },
    _react2.default.createElement(
      _.ColumnLayout,
      { distribution: '2/4 1/4 1/4' },
      _react2.default.createElement(_storyLayoutPlaceholder2.default, null),
      _react2.default.createElement(_storyLayoutPlaceholder2.default, null),
      _react2.default.createElement(_storyLayoutPlaceholder2.default, null),
      _react2.default.createElement(_storyLayoutPlaceholder2.default, null),
      _react2.default.createElement(_storyLayoutPlaceholder2.default, null),
      _react2.default.createElement(_storyLayoutPlaceholder2.default, null)
    )
  );
});

(0, _react3.storiesOf)('Column Layout', module).add('1/4 2/4 1/4', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    { title: '1/4 2/4 1/4' },
    _react2.default.createElement(
      _.ColumnLayout,
      { distribution: '1/4 2/4 1/4' },
      _react2.default.createElement(_storyLayoutPlaceholder2.default, null),
      _react2.default.createElement(_storyLayoutPlaceholder2.default, null),
      _react2.default.createElement(_storyLayoutPlaceholder2.default, null),
      _react2.default.createElement(_storyLayoutPlaceholder2.default, null),
      _react2.default.createElement(_storyLayoutPlaceholder2.default, null),
      _react2.default.createElement(_storyLayoutPlaceholder2.default, null)
    )
  );
});

(0, _react3.storiesOf)('Column Layout', module).add('1/4 1/4 2/4', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    { title: '1/4 1/4 2/4' },
    _react2.default.createElement(
      _.ColumnLayout,
      { distribution: '1/4 1/4 2/4' },
      _react2.default.createElement(_storyLayoutPlaceholder2.default, null),
      _react2.default.createElement(_storyLayoutPlaceholder2.default, null),
      _react2.default.createElement(_storyLayoutPlaceholder2.default, null),
      _react2.default.createElement(_storyLayoutPlaceholder2.default, null),
      _react2.default.createElement(_storyLayoutPlaceholder2.default, null),
      _react2.default.createElement(_storyLayoutPlaceholder2.default, null)
    )
  );
});

(0, _react3.storiesOf)('Column Layout', module).add('1/4 3/4', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    { title: '1/4 3/4' },
    _react2.default.createElement(
      _.ColumnLayout,
      { distribution: '1/4 3/4' },
      _react2.default.createElement(_storyLayoutPlaceholder2.default, null),
      _react2.default.createElement(_storyLayoutPlaceholder2.default, null),
      _react2.default.createElement(_storyLayoutPlaceholder2.default, null),
      _react2.default.createElement(_storyLayoutPlaceholder2.default, null)
    )
  );
});

(0, _react3.storiesOf)('Column Layout', module).add('3/4 1/4', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    { title: '3/4 1/4' },
    _react2.default.createElement(
      _.ColumnLayout,
      { distribution: '3/4 1/4' },
      _react2.default.createElement(_storyLayoutPlaceholder2.default, null),
      _react2.default.createElement(_storyLayoutPlaceholder2.default, null),
      _react2.default.createElement(_storyLayoutPlaceholder2.default, null),
      _react2.default.createElement(_storyLayoutPlaceholder2.default, null),
      _react2.default.createElement(_storyLayoutPlaceholder2.default, null),
      _react2.default.createElement(_storyLayoutPlaceholder2.default, null)
    )
  );
});

(0, _react3.storiesOf)('Column Layout', module).add('condensed', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    { title: 'condensed' },
    _react2.default.createElement(
      _.ColumnLayout,
      { distribution: '1/2 1/2', gutter: 'condensed' },
      _react2.default.createElement(_storyLayoutPlaceholder2.default, null),
      _react2.default.createElement(_storyLayoutPlaceholder2.default, null),
      _react2.default.createElement(_storyLayoutPlaceholder2.default, null),
      _react2.default.createElement(_storyLayoutPlaceholder2.default, null)
    )
  );
});

(0, _react3.storiesOf)('Column Layout', module).add('spacious', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    { title: 'spacious' },
    _react2.default.createElement(
      _.ColumnLayout,
      { distribution: '1/2 1/2', gutter: 'spacious' },
      _react2.default.createElement(_storyLayoutPlaceholder2.default, null),
      _react2.default.createElement(_storyLayoutPlaceholder2.default, null),
      _react2.default.createElement(_storyLayoutPlaceholder2.default, null),
      _react2.default.createElement(_storyLayoutPlaceholder2.default, null)
    )
  );
});
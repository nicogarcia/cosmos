'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _storyHelpers = require('../../_helpers/story-helpers');

var _ = require('../..');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('Radio', module).add('default', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    null,
    _react2.default.createElement(
      _.Radio,
      { name: 'example1', selected: 'one' },
      _react2.default.createElement(
        _.Radio.Option,
        { value: 'one' },
        'Option 1'
      ),
      _react2.default.createElement(
        _.Radio.Option,
        { value: 'two' },
        'Option 2'
      ),
      _react2.default.createElement(
        _.Radio.Option,
        { value: 'three', readOnly: true },
        'Option 3'
      )
    )
  );
});

(0, _react3.storiesOf)('Radio', module).add('layout horizontal', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    null,
    _react2.default.createElement(
      _.Radio,
      { name: 'example1', selected: 'two', align: 'horizontal' },
      _react2.default.createElement(
        _.Radio.Option,
        { value: 'one' },
        'Option 1'
      ),
      _react2.default.createElement(
        _.Radio.Option,
        { value: 'two' },
        'Option 2'
      ),
      _react2.default.createElement(
        _.Radio.Option,
        { value: 'three', readOnly: true },
        'Option 3'
      )
    )
  );
});

(0, _react3.storiesOf)('Radio', module).add('read-only', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    null,
    _react2.default.createElement(
      _.Radio,
      { name: 'example1', selected: 'three', readOnly: true },
      _react2.default.createElement(
        _.Radio.Option,
        { value: 'one' },
        'Option 1'
      ),
      _react2.default.createElement(
        _.Radio.Option,
        { value: 'two' },
        'Option 2'
      ),
      _react2.default.createElement(
        _.Radio.Option,
        { value: 'three' },
        'Option 3'
      )
    )
  );
});
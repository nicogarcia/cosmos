'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _storyHelpers = require('../../_helpers/story-helpers');

var _ = require('../..');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CheckBoxExample = function CheckBoxExample() {
  return _react2.default.createElement(
    _.Checkbox.Group,
    { name: 'example1', selected: ['one', 'two'] },
    _react2.default.createElement(
      _.Checkbox,
      { name: 'one', value: 'one' },
      'Option 1'
    ),
    _react2.default.createElement(
      _.Checkbox,
      { name: 'two', value: 'two' },
      'Option 2'
    ),
    _react2.default.createElement(
      _.Checkbox,
      { name: 'three', value: 'three' },
      'Option 3'
    ),
    _react2.default.createElement(
      _.Checkbox,
      { name: 'four', value: 'four' },
      'Option 4'
    )
  );
};

(0, _react3.storiesOf)('Checkbox', module).add('light', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    null,
    _react2.default.createElement(CheckBoxExample, null)
  );
});

(0, _react3.storiesOf)('Checkbox', module).add('dark', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    { background: 'dark' },
    _react2.default.createElement(CheckBoxExample, null)
  );
});
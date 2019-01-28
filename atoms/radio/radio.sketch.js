'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _ = require('../..');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('Radio', module).add('default', function () {
  return _react2.default.createElement(
    _.Radio,
    { name: 'example', selected: 'one' },
    _react2.default.createElement(
      _.Radio.Option,
      { value: 'one' },
      'Option 1'
    ),
    _react2.default.createElement(
      _.Radio.Option,
      { value: 'two' },
      'Option 2'
    )
  );
});

(0, _react3.storiesOf)('Radio', module).add('readOnly', function () {
  return _react2.default.createElement(
    _.Radio,
    { name: 'example', selected: 'one', readOnly: true },
    _react2.default.createElement(
      _.Radio.Option,
      { value: 'one' },
      'Option 1'
    ),
    _react2.default.createElement(
      _.Radio.Option,
      { value: 'two' },
      'Option 2'
    )
  );
});
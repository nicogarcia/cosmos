'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _ = require('../..');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('Tabs', module).add('default', function () {
  return _react2.default.createElement(
    _.Tabs,
    null,
    _react2.default.createElement(
      _.Tabs.Tab,
      { label: 'Tab 1' },
      'This is tab 1'
    ),
    _react2.default.createElement(
      _.Tabs.Tab,
      { label: 'Tab 2' },
      'You can render anything you want here'
    ),
    _react2.default.createElement(
      _.Tabs.Tab,
      { label: 'Tab 3' },
      'Third tab\'s the charm!'
    )
  );
});
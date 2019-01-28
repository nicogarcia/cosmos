'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _storyHelpers = require('../../../_helpers/story-helpers');

var _ = require('../../..');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('Button', module).add('disabled state', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    { title: 'Disabled state', align: 'center' },
    _react2.default.createElement(
      _storyHelpers.Stack,
      null,
      _react2.default.createElement(
        _.Button,
        { disabled: true },
        'Default'
      ),
      _react2.default.createElement(
        _.Button,
        { disabled: true, appearance: 'primary' },
        'Primary'
      ),
      _react2.default.createElement(
        _.Button,
        { disabled: true, appearance: 'secondary' },
        'Secondary'
      ),
      _react2.default.createElement(
        _.Button,
        { disabled: true, appearance: 'link' },
        'Link'
      ),
      _react2.default.createElement(
        _.Button,
        { disabled: true, appearance: 'destructive' },
        'Destructive'
      )
    )
  );
});
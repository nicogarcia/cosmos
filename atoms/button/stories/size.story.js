'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _storyHelpers = require('../../../_helpers/story-helpers');

var _ = require('../../..');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('Button', module).add('size', function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _storyHelpers.Example,
      { title: 'Button Sizes', align: 'center' },
      _react2.default.createElement(
        _storyHelpers.Stack,
        null,
        _react2.default.createElement(
          _.Button,
          { size: 'large' },
          'Large'
        ),
        _react2.default.createElement(
          _.Button,
          null,
          'Default'
        ),
        _react2.default.createElement(
          _.Button,
          { size: 'compressed' },
          'Compressed'
        ),
        _react2.default.createElement(
          _.Button,
          { size: 'small' },
          'Small'
        )
      )
    ),
    _react2.default.createElement(
      _storyHelpers.Example,
      { title: 'Button Sizes + loading', align: 'center' },
      _react2.default.createElement(
        _storyHelpers.Stack,
        null,
        _react2.default.createElement(
          _.Button,
          { loading: true, size: 'large' },
          'Large'
        ),
        _react2.default.createElement(
          _.Button,
          { loading: true },
          'Default'
        ),
        _react2.default.createElement(
          _.Button,
          { loading: true, size: 'compressed' },
          'Compressed'
        ),
        _react2.default.createElement(
          _.Button,
          { loading: true, size: 'small' },
          'Small'
        )
      )
    ),
    _react2.default.createElement(
      _storyHelpers.Example,
      { title: 'Button Sizes + success', align: 'center' },
      _react2.default.createElement(
        _storyHelpers.Stack,
        null,
        _react2.default.createElement(
          _.Button,
          { success: true, size: 'large' },
          'Large'
        ),
        _react2.default.createElement(
          _.Button,
          { success: true },
          'Default'
        ),
        _react2.default.createElement(
          _.Button,
          { success: true, size: 'compressed' },
          'Compressed'
        ),
        _react2.default.createElement(
          _.Button,
          { success: true, size: 'small' },
          'Small'
        )
      )
    )
  );
});
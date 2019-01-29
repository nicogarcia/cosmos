'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _storyHelpers = require('../../../_helpers/story-helpers');

var _ = require('../../..');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('Button', module).add('with icon', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    { title: 'Button with icon', align: 'center' },
    _react2.default.createElement(
      _storyHelpers.Stack,
      null,
      _react2.default.createElement(
        _.Button,
        { appearance: 'primary', icon: 'plus' },
        'Create Client'
      ),
      _react2.default.createElement(
        _.Button,
        { appearance: 'secondary', icon: 'play-circle' },
        'Tutorial'
      ),
      _react2.default.createElement(_.Button, { appearance: 'link', icon: 'copy' }),
      _react2.default.createElement(_.Button, { icon: 'copy', label: 'Copy to Clipboard' }),
      _react2.default.createElement(_.Button, { icon: 'copy', href: 'https://auth0.com', label: 'Copy to Clipboard' }),
      _react2.default.createElement(
        _.Button,
        { icon: 'chevron-left' },
        'Previous page'
      ),
      _react2.default.createElement(
        _.Button,
        { iconAlign: 'right', icon: 'chevron-right' },
        'Next page'
      )
    )
  );
});
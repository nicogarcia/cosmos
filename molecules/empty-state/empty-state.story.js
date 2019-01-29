'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _storyHelpers = require('../../_helpers/story-helpers');

var _ = require('../..');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('EmptyState', module).add('default', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    { title: 'default' },
    _react2.default.createElement(_.EmptyState, {
      title: 'Clients',
      text: 'Add some clients to get started',
      icon: 'users',
      helpUrl: 'https://auth0.com',
      action: {
        icon: 'plus',
        label: 'Create Client',
        handler: function handler() {}
      }
    })
  );
});

(0, _react3.storiesOf)('EmptyState', module).add('stressed', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    { title: 'stressed - 119 characters in title and text' },
    _react2.default.createElement(_.EmptyState, {
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vehicula massa augue, in consectetur tellus tristique ut.',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vehicula massa augue, in consectetur tellus tristique ut.',
      icon: 'users',
      helpUrl: 'https://auth0.com',
      action: {
        icon: 'plus',
        label: 'Create Client',
        handler: function handler() {}
      }
    })
  );
});
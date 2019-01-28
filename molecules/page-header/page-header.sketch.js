'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _ = require('../..');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('PageHeader', module).add('default', function () {
  return _react2.default.createElement(_.PageHeader, {
    title: 'Clients',
    description: {
      text: 'Setup a mobile, web or IoT application to use Auth0 for Authentication.',
      learnMore: '/clients'
    },
    primaryAction: {
      label: 'Create Client',
      icon: 'plus',
      handler: function handler() {}
    },
    secondaryAction: {
      label: 'Tutorial',
      icon: 'play-circle',
      handler: function handler() {}
    }
  });
});
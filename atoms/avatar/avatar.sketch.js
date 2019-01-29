'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _ = require('../..');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('Avatar', module).add('small', function () {
  return _react2.default.createElement(_.Avatar, { image: 'https://cdn.auth0.com/website/cosmos/cosmos-logo.svg', size: 'small', name: 'Cosmos' });
});
(0, _react3.storiesOf)('Avatar', module).add('medium', function () {
  return _react2.default.createElement(_.Avatar, {
    image: 'https://cdn.auth0.com/website/cosmos/cosmos-logo.svg',
    size: 'medium',
    name: 'Cosmos'
  });
});
(0, _react3.storiesOf)('Avatar', module).add('large', function () {
  return _react2.default.createElement(_.Avatar, { image: 'https://cdn.auth0.com/website/cosmos/cosmos-logo.svg', size: 'large', name: 'Cosmos' });
});
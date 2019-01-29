'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _ = require('../..');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('Image', module).add('default', function () {
  return _react2.default.createElement(_.Image, {
    source: 'https://cdn.auth0.com/website/assets/pages/press/img/resources/auth0-logo-monotone-black-f9bf0aaf29.svg',
    alt: 'auth0 logo'
  });
});
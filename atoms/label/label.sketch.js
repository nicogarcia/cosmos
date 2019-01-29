'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _ = require('../..');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('Label', module).add('default', function () {
  return _react2.default.createElement(
    _.Label,
    { appearance: 'default' },
    'Default'
  );
});
(0, _react3.storiesOf)('Label', module).add('information', function () {
  return _react2.default.createElement(
    _.Label,
    { appearance: 'information' },
    'Information'
  );
});
(0, _react3.storiesOf)('Label', module).add('success', function () {
  return _react2.default.createElement(
    _.Label,
    { appearance: 'success' },
    'Success'
  );
});
(0, _react3.storiesOf)('Label', module).add('warning', function () {
  return _react2.default.createElement(
    _.Label,
    { appearance: 'warning' },
    'Warning'
  );
});
(0, _react3.storiesOf)('Label', module).add('danger', function () {
  return _react2.default.createElement(
    _.Label,
    { appearance: 'danger' },
    'Danger'
  );
});
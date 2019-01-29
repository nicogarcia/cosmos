'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _ = require('../..');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('Stack', module).add('simple', function () {
  return _react2.default.createElement(
    _.Stack,
    null,
    _react2.default.createElement(
      _.Button,
      null,
      'One'
    ),
    _react2.default.createElement(
      _.Button,
      null,
      'Two'
    ),
    _react2.default.createElement(
      _.Button,
      null,
      'Three'
    )
  );
});

(0, _react3.storiesOf)('Stack', module).add('inline form', function () {
  return _react2.default.createElement(
    _.Stack,
    null,
    _react2.default.createElement(
      'div',
      null,
      'Login'
    ),
    _react2.default.createElement(_.TextInput, { type: 'email', placeholder: 'email' }),
    _react2.default.createElement(_.TextInput, { type: 'password', placeholder: 'password' }),
    _react2.default.createElement(_.Switch, { on: true, accessibleLabels: ['Remember  me', 'Dont remember me'] })
  );
});

(0, _react3.storiesOf)('Stack', module).add('align left', function () {
  return _react2.default.createElement(
    _.Stack,
    { align: 'left' },
    _react2.default.createElement(
      _.Button,
      null,
      'One'
    ),
    _react2.default.createElement(
      _.Button,
      null,
      'Two'
    ),
    _react2.default.createElement(
      _.Button,
      null,
      'Three'
    )
  );
});

(0, _react3.storiesOf)('Stack', module).add('align right', function () {
  return _react2.default.createElement(
    _.Stack,
    { align: 'right' },
    _react2.default.createElement(
      _.Button,
      null,
      'One'
    ),
    _react2.default.createElement(
      _.Button,
      null,
      'Two'
    ),
    _react2.default.createElement(
      _.Button,
      null,
      'Three'
    )
  );
});

(0, _react3.storiesOf)('Stack', module).add('custom widths', function () {
  return _react2.default.createElement(
    _.Stack,
    { widths: [10, 30, 30, 30] },
    _react2.default.createElement(
      'div',
      null,
      'Login'
    ),
    _react2.default.createElement(_.TextInput, { type: 'email', placeholder: 'email' }),
    _react2.default.createElement(_.TextInput, { type: 'password', placeholder: 'password' }),
    _react2.default.createElement(_.Switch, { on: true, accessibleLabels: ['Remember  me', 'Dont remember me'] })
  );
});
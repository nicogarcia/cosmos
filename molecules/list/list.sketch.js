'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _ = require('../..');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('List', module).add('simple', function () {
  return _react2.default.createElement(
    _.List,
    null,
    _react2.default.createElement(
      'div',
      null,
      'one'
    ),
    _react2.default.createElement(
      'div',
      null,
      'two'
    ),
    _react2.default.createElement(
      'div',
      null,
      'three'
    )
  );
});

(0, _react3.storiesOf)('List', module).add('with label', function () {
  return _react2.default.createElement(
    _.List,
    { label: 'Short List' },
    _react2.default.createElement(
      'div',
      null,
      'one'
    ),
    _react2.default.createElement(
      'div',
      null,
      'two'
    ),
    _react2.default.createElement(
      'div',
      null,
      'three'
    )
  );
});

(0, _react3.storiesOf)('List', module).add('list with multiple columns', function () {
  return _react2.default.createElement(
    _.List,
    { label: 'Social' },
    _react2.default.createElement(
      _.Stack,
      null,
      _react2.default.createElement(
        'div',
        null,
        'github'
      ),
      _react2.default.createElement(
        'div',
        null,
        'GitHub'
      ),
      _react2.default.createElement(
        'a',
        { href: 'https://github.com' },
        'github.com'
      )
    ),
    _react2.default.createElement(
      _.Stack,
      null,
      _react2.default.createElement(
        'div',
        null,
        'google-oauth2'
      ),
      _react2.default.createElement(
        'div',
        null,
        'Google'
      ),
      _react2.default.createElement(
        'a',
        { href: 'https://google.com' },
        'google.com'
      )
    )
  );
});
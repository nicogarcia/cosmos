'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _storyHelpers = require('../../_helpers/story-helpers');

var _ = require('../..');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('Badge', module).add('appearances', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    { title: 'appearances' },
    _react2.default.createElement(
      _storyHelpers.Stack,
      null,
      _react2.default.createElement(
        _.Badge,
        { appearance: 'default' },
        '123'
      ),
      _react2.default.createElement(
        _.Badge,
        { appearance: 'information' },
        '99'
      ),
      _react2.default.createElement(
        _.Badge,
        { appearance: 'success' },
        '345'
      ),
      _react2.default.createElement(
        _.Badge,
        { appearance: 'warning' },
        '6'
      ),
      _react2.default.createElement(
        _.Badge,
        { appearance: 'danger' },
        '55'
      )
    )
  );
});

(0, _react3.storiesOf)('Badge', module).add('no appearance specified', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    { title: 'no appearance specified' },
    _react2.default.createElement(
      _.Badge,
      null,
      '99'
    )
  );
});

(0, _react3.storiesOf)('Badge', module).add('stressed', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    { title: 'stressed' },
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        _.Badge,
        { appearance: 'default' },
        '100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000'
      )
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        _.Badge,
        { appearance: 'information' },
        '100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000'
      )
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        _.Badge,
        { appearance: 'success' },
        '100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000'
      )
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        _.Badge,
        { appearance: 'warning' },
        '100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000'
      )
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        _.Badge,
        { appearance: 'danger' },
        '100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000'
      )
    )
  );
});
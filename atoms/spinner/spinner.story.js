'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _storyHelpers = require('../../_helpers/story-helpers');

var _ = require('../..');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('Spinner', module).add('default', function () {
  return _react2.default.createElement(
    _react2.default.Fragment,
    null,
    _react2.default.createElement(
      _storyHelpers.Example,
      { title: 'Spinner \u2013 default' },
      _react2.default.createElement(_.Spinner, { size: 'small' })
    ),
    _react2.default.createElement(
      _storyHelpers.Example,
      { title: 'Spinner \u2013 medium' },
      _react2.default.createElement(_.Spinner, { size: 'medium' })
    ),
    _react2.default.createElement(
      _storyHelpers.Example,
      { title: 'Spinner \u2013 large' },
      _react2.default.createElement(_.Spinner, { size: 'large' })
    )
  );
});

(0, _react3.storiesOf)('Spinner', module).add('dark background', function () {
  return _react2.default.createElement(
    _react2.default.Fragment,
    null,
    _react2.default.createElement(
      _storyHelpers.Example,
      { title: 'Spinner \u2013 small', background: 'dark' },
      _react2.default.createElement(_.Spinner, { inverse: true, size: 'small' })
    ),
    _react2.default.createElement(
      _storyHelpers.Example,
      { title: 'Spinner \u2013 default', background: 'dark' },
      _react2.default.createElement(_.Spinner, { inverse: true, size: 'medium' })
    ),
    _react2.default.createElement(
      _storyHelpers.Example,
      { title: 'Spinner \u2013 large', background: 'dark' },
      _react2.default.createElement(_.Spinner, { inverse: true, size: 'large' })
    )
  );
});
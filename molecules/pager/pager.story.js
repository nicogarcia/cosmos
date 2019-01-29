'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _storyHelpers = require('../../_helpers/story-helpers');

var _ = require('../..');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('Pager', module).add('default', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    null,
    _react2.default.createElement(_.Pager, { items: 20372, perPage: 10, page: 3 })
  );
});

(0, _react3.storiesOf)('Pager', module).add('without items', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    null,
    _react2.default.createElement(_.Pager, { perPage: 10, page: 3 })
  );
});
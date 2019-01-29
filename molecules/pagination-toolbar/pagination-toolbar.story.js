'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _storyHelpers = require('../../_helpers/story-helpers');

var _ = require('../..');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('Pagination Toolbar', module).add('default', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    null,
    _react2.default.createElement(_.PaginationToolbar, { items: 20372, perPage: 10, page: 3 })
  );
});

(0, _react3.storiesOf)('Pagination Toolbar', module).add('first page', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    null,
    _react2.default.createElement(_.PaginationToolbar, { items: 20372, perPage: 10, page: 1 })
  );
});

(0, _react3.storiesOf)('Pagination Toolbar', module).add('last page', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    null,
    _react2.default.createElement(_.PaginationToolbar, { items: 20372, perPage: 10, page: 2038 })
  );
});

(0, _react3.storiesOf)('Pagination Toolbar', module).add('not enough items', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    null,
    _react2.default.createElement(
      'div',
      null,
      'toolbar should not be visible if there are not enough items for multiple pages'
    ),
    _react2.default.createElement(_.PaginationToolbar, { items: 5, perPage: 10 }),
    _react2.default.createElement(_.PaginationToolbar, { items: 0, perPage: 10 })
  );
});
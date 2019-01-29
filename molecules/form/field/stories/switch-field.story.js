'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _storyHelpers = require('../../../../_helpers/story-helpers');

var _ = require('../../../..');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('Form', module).add('switch field', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    { title: 'switch field' },
    _react2.default.createElement(
      _.Form,
      null,
      _react2.default.createElement(
        _.Form.Field,
        { label: 'Subscribe' },
        _react2.default.createElement(_.Switch, { on: true })
      )
    )
  );
});

(0, _react3.storiesOf)('Form', module).add('switch field + error', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    { title: 'switch field + error' },
    _react2.default.createElement(
      _.Form,
      null,
      _react2.default.createElement(
        _.Form.Field,
        { label: 'Subscribe', error: 'Everything is broken' },
        _react2.default.createElement(_.Switch, { on: true })
      )
    )
  );
});

(0, _react3.storiesOf)('Form', module).add('switch field - old API', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    { title: 'old API' },
    _react2.default.createElement(
      _.Form,
      null,
      _react2.default.createElement(_.Form.Switch, { on: true, label: 'Subscribe', error: 'Everything is broken' })
    )
  );
});
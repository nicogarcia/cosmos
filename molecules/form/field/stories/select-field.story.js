'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _storyHelpers = require('../../../../_helpers/story-helpers');

var _ = require('../../../..');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('Form', module).add('select field', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    { title: 'select field' },
    _react2.default.createElement(
      _.Form,
      null,
      _react2.default.createElement(
        _.Form.Field,
        { label: 'Options list' },
        _react2.default.createElement(_.Select, {
          options: [{ text: 'First option', value: '1', defaultSelected: true }, { text: 'Second option', value: '2' }, { text: 'Third option', value: '3' }, { text: 'Fourth option', value: '4' }]
        })
      )
    )
  );
});

(0, _react3.storiesOf)('Form', module).add('select field + error', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    { title: 'select field + error' },
    _react2.default.createElement(
      _.Form,
      null,
      _react2.default.createElement(
        _.Form.Field,
        { label: 'Options list', error: 'Everything is broken' },
        _react2.default.createElement(_.Select, {
          hasError: true,
          options: [{ text: 'First option', value: '1', defaultSelected: true }, { text: 'Second option', value: '2' }, { text: 'Third option', value: '3' }, { text: 'Fourth option', value: '4' }]
        })
      )
    )
  );
});

(0, _react3.storiesOf)('Form', module).add('select field - old API', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    { title: 'old API' },
    _react2.default.createElement(
      _.Form,
      null,
      _react2.default.createElement(_.Form.Select, {
        label: 'Options list',
        error: 'Everything is broken',
        options: [{ text: 'First option', value: '1', defaultSelected: true }, { text: 'Second option', value: '2' }, { text: 'Third option', value: '3' }, { text: 'Fourth option', value: '4' }]
      })
    )
  );
});
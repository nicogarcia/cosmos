'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _storyHelpers = require('../../_helpers/story-helpers');

var _ = require('../..');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('Form', module).add('layouts', function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _storyHelpers.Example,
      { title: 'label-on-left' },
      _react2.default.createElement(
        _.Form,
        null,
        _react2.default.createElement(_.Form.TextInput, { label: 'Field label', type: 'text', placeholder: 'Enter something' }),
        _react2.default.createElement(_.Form.Actions, { primaryAction: { label: 'Save Changes', handler: function handler() {} } })
      )
    ),
    _react2.default.createElement(
      _storyHelpers.Example,
      { title: 'label-on-top' },
      _react2.default.createElement(
        _.Form,
        { layout: 'label-on-top' },
        _react2.default.createElement(_.Form.TextInput, { label: 'Field label', type: 'text', placeholder: 'Enter something' }),
        _react2.default.createElement(_.Form.Actions, { primaryAction: { label: 'Save Changes', handler: function handler() {} } })
      )
    )
  );
});
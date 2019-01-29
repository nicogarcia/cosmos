'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _ = require('../../..');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('Form Fieldset', module).add('with groups', function () {
  return _react2.default.createElement(
    _.Form,
    null,
    _react2.default.createElement(
      _.Form.FieldSet,
      { label: 'Group 1' },
      _react2.default.createElement(_.Form.TextInput, { label: 'Field label', type: 'text', placeholder: 'Enter something' }),
      _react2.default.createElement(_.Form.TextArea, { label: 'Long input', placeholder: 'Add a lot of text here' })
    ),
    _react2.default.createElement(
      _.Form.FieldSet,
      { label: 'Group 2' },
      _react2.default.createElement(_.Form.TextInput, { label: 'Field label', type: 'text', placeholder: 'Enter something' }),
      _react2.default.createElement(_.Form.TextInput, { label: 'Field label', type: 'text', placeholder: 'Enter something' })
    )
  );
});
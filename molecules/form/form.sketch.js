'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _ = require('../..');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('Form', module).add('all fields', function () {
  return _react2.default.createElement(
    _.Form,
    null,
    _react2.default.createElement(_.Form.TextInput, {
      label: 'Field label',
      type: 'text',
      placeholder: 'Enter something',
      helpText: 'This is some helper text'
    }),
    _react2.default.createElement(_.Form.TextArea, {
      label: 'Long input',
      placeholder: 'Add a lot of text here',
      error: 'Can\'t leave this empty'
    }),
    _react2.default.createElement(_.Form.Select, {
      label: 'Options list',
      options: [{ text: 'First option', value: '1', defaultSelected: true }, { text: 'Second option', value: '2' }, { text: 'Third option', value: '3' }, { text: 'Fourth option', value: '4' }]
    }),
    _react2.default.createElement(_.Form.Switch, { label: 'Single Sign On', on: true, onToggle: function onToggle(value) {
        return alert(value);
      } }),
    _react2.default.createElement(
      _.Form.Radio,
      { name: 'Radio', selected: 'one' },
      _react2.default.createElement(
        _.Form.Radio.Option,
        { value: 'React' },
        'React'
      ),
      _react2.default.createElement(
        _.Form.Radio.Option,
        { value: 'html' },
        'HTML + Liquid'
      )
    ),
    _react2.default.createElement(_.Form.Actions, {
      primaryAction: { label: 'Save Changes', handler: function handler() {} },
      secondaryActions: [{ label: 'Clear', handler: function handler() {} }, { label: 'Cancel', handler: function handler() {} }]
    })
  );
});

(0, _react3.storiesOf)('Form', module).add('with fieldsets', function () {
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
    ),
    _react2.default.createElement(_.Form.Actions, { primaryAction: { label: 'Save Changes', handler: function handler() {} } })
  );
});
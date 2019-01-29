'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _ = require('../../..');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('Form Field', module).add('text input', function () {
  return _react2.default.createElement(
    _.Form,
    null,
    _react2.default.createElement(_.Form.TextInput, {
      label: 'Field label',
      type: 'text',
      placeholder: 'Enter something',
      actions: [{ icon: 'copy', handler: function handler() {}, label: 'Copy to clipboard' }]
    })
  );
});

(0, _react3.storiesOf)('Form Field', module).add('text input + help text', function () {
  return _react2.default.createElement(
    _.Form,
    null,
    _react2.default.createElement(_.Form.TextInput, {
      label: 'Field label',
      type: 'text',
      placeholder: 'Enter something',
      helpText: 'Help text to give some context to the user',
      actions: [{ icon: 'copy', handler: function handler() {}, label: 'Copy to clipboard' }]
    })
  );
});

(0, _react3.storiesOf)('Form Field', module).add('text input + error', function () {
  return _react2.default.createElement(
    _.Form,
    null,
    _react2.default.createElement(_.Form.TextInput, {
      label: 'Field label',
      type: 'text',
      placeholder: 'Enter something',
      helpText: 'Help text to give some context to the user',
      error: 'This value cannot be blank',
      actions: [{ icon: 'copy', handler: function handler() {}, label: 'Copy to clipboard' }]
    })
  );
});

(0, _react3.storiesOf)('Form Field', module).add('text area', function () {
  return _react2.default.createElement(
    _.Form,
    null,
    _react2.default.createElement(_.Form.TextArea, { label: 'Long input', placeholder: 'Add a lot of text here' })
  );
});

(0, _react3.storiesOf)('Form Field', module).add('text area + help text', function () {
  return _react2.default.createElement(
    _.Form,
    null,
    _react2.default.createElement(_.Form.TextArea, {
      label: 'Long input',
      placeholder: 'Add a lot of text here',
      helpText: 'Help text to give some context to the user'
    })
  );
});

(0, _react3.storiesOf)('Form Field', module).add('text area + error', function () {
  return _react2.default.createElement(
    _.Form,
    null,
    _react2.default.createElement(_.Form.TextArea, {
      label: 'Long input',
      placeholder: 'Add a lot of text here',
      helpText: 'Help text to give some context to the user',
      error: 'This value cannot be blank'
    })
  );
});

(0, _react3.storiesOf)('Form Field', module).add('select', function () {
  return _react2.default.createElement(
    _.Form,
    null,
    _react2.default.createElement(_.Form.Select, {
      label: 'Options list',
      options: [{ text: 'First option', value: '1', defaultSelected: true }, { text: 'Second option', value: '2' }, { text: 'Third option', value: '3' }, { text: 'Fourth option', value: '4' }]
    })
  );
});

(0, _react3.storiesOf)('Form Field', module).add('select + help text', function () {
  return _react2.default.createElement(
    _.Form,
    null,
    _react2.default.createElement(_.Form.Select, {
      label: 'Options list',
      options: [{ text: 'First option', value: '1', defaultSelected: true }, { text: 'Second option', value: '2' }, { text: 'Third option', value: '3' }, { text: 'Fourth option', value: '4' }],
      helpText: 'Help text to give some context to the user'
    })
  );
});

(0, _react3.storiesOf)('Form Field', module).add('select + error', function () {
  return _react2.default.createElement(
    _.Form,
    null,
    _react2.default.createElement(_.Form.Select, {
      label: 'Options list',
      options: [{ text: 'First option', value: '1', defaultSelected: true }, { text: 'Second option', value: '2' }, { text: 'Third option', value: '3' }, { text: 'Fourth option', value: '4' }],
      helpText: 'Help text to give some context to the user',
      error: 'This value cannot be blank'
    })
  );
});

(0, _react3.storiesOf)('Form Field', module).add('switch', function () {
  return _react2.default.createElement(
    _.Form,
    null,
    _react2.default.createElement(_.Form.Switch, { label: 'Subscribe', on: true })
  );
});

(0, _react3.storiesOf)('Form Field', module).add('switch + help text', function () {
  return _react2.default.createElement(
    _.Form,
    null,
    _react2.default.createElement(_.Form.Switch, { label: 'Subscribe', on: true, helpText: 'Help text to give some context to the user' })
  );
});

(0, _react3.storiesOf)('Form Field', module).add('switch + error', function () {
  return _react2.default.createElement(
    _.Form,
    null,
    _react2.default.createElement(_.Form.Switch, {
      label: 'Subscribe',
      on: true,
      helpText: 'Help text to give some context to the user',
      error: 'You are not allowed to enable this'
    })
  );
});

(0, _react3.storiesOf)('Form Field', module).add('radio', function () {
  return _react2.default.createElement(
    _.Form,
    null,
    _react2.default.createElement(
      _.Form.Radio,
      { name: 'example1', selected: 'one' },
      _react2.default.createElement(
        _.Form.Radio.Option,
        { value: 'one' },
        'One'
      ),
      _react2.default.createElement(
        _.Form.Radio.Option,
        { value: 'two' },
        'Two'
      )
    )
  );
});

(0, _react3.storiesOf)('Form Field', module).add('radio + help text', function () {
  return _react2.default.createElement(
    _.Form,
    null,
    _react2.default.createElement(
      _.Form.Radio,
      {
        name: 'example1',
        selected: 'one',
        helpText: 'Help text to give some context to the user'
      },
      _react2.default.createElement(
        _.Form.Radio.Option,
        { value: 'one' },
        'One'
      ),
      _react2.default.createElement(
        _.Form.Radio.Option,
        { value: 'two' },
        'Two'
      )
    )
  );
});
(0, _react3.storiesOf)('Form Field', module).add('radio + error', function () {
  return _react2.default.createElement(
    _.Form,
    null,
    _react2.default.createElement(
      _.Form.Radio,
      {
        name: 'example1',
        selected: 'one',
        helpText: 'Help text to give some context to the user',
        error: 'Please select at least one option'
      },
      _react2.default.createElement(
        _.Form.Radio.Option,
        { value: 'one' },
        'One'
      ),
      _react2.default.createElement(
        _.Form.Radio.Option,
        { value: 'two' },
        'Two'
      )
    )
  );
});
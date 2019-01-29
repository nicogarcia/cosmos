'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _storyHelpers = require('../../../../_helpers/story-helpers');

var _2 = require('../../../..');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('Form').add('all the fields', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    { title: 'all the fields' },
    _react2.default.createElement(
      _2.Form,
      null,
      _react2.default.createElement(
        _2.Form.Field,
        { label: 'Field label' },
        _react2.default.createElement(_2.TextInput, {
          type: 'text',
          placeholder: 'Enter something',
          actions: [{ icon: 'copy', handler: function handler() {}, label: 'Copy to clipboard' }]
        })
      ),
      _react2.default.createElement(
        _2.Form.Field,
        { label: 'Long input' },
        _react2.default.createElement(_2.TextArea, { placeholder: 'Add a lot of text here' })
      ),
      _react2.default.createElement(
        _2.Form.Field,
        { label: 'Options list' },
        _react2.default.createElement(_2.Select, {
          options: [{ text: 'First option', value: '1', defaultSelected: true }, { text: 'Second option', value: '2' }, { text: 'Third option', value: '3' }, { text: 'Fourth option', value: '4' }]
        })
      ),
      _react2.default.createElement(
        _2.Form.Field,
        { label: 'Subscribe' },
        _react2.default.createElement(_2.Switch, { on: true })
      ),
      _react2.default.createElement(
        _2.Form.Field,
        { label: 'Agree' },
        _react2.default.createElement(
          _2.Radio,
          { name: 'example1', selected: 'one', onChange: function onChange(_) {} },
          _react2.default.createElement(
            _2.Radio.Option,
            { value: 'one' },
            'One'
          ),
          _react2.default.createElement(
            _2.Radio.Option,
            { value: 'two' },
            'Two'
          )
        )
      ),
      _react2.default.createElement(
        _2.Form.Field,
        { label: 'Framework' },
        _react2.default.createElement(
          _2.Checkbox.Group,
          { name: 'example1', selected: ['one', 'two'] },
          _react2.default.createElement(
            _2.Checkbox,
            { name: 'one', value: 'one' },
            'Option 1'
          ),
          _react2.default.createElement(
            _2.Checkbox,
            { name: 'two', value: 'two' },
            'Option 2'
          )
        )
      ),
      _react2.default.createElement(
        _2.Form.Field,
        { label: 'Custom field' },
        _react2.default.createElement('input', { type: 'date' })
      ),
      _react2.default.createElement(
        _2.Form.Field,
        { label: 'Height', helpText: 'How tall are you?', error: 'Show only in the first field' },
        _react2.default.createElement(
          _2.Stack,
          null,
          _react2.default.createElement(_2.TextInput, { placeholder: 'Value', hasError: true }),
          _react2.default.createElement(_2.Select, {
            options: [{ text: 'centimetres', value: 'cm' }, { text: 'inches', value: 'in' }]
          }),
          _react2.default.createElement(_2.Button, { appearance: 'link', icon: 'copy', label: 'Copy value', onClick: function onClick(e) {
              return console.log(e);
            } })
        )
      )
    )
  );
});
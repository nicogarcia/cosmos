'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _storyHelpers = require('../../_helpers/story-helpers');

var _ = require('../..');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('TextInput', module).add('simple', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    { title: 'simple' },
    _react2.default.createElement(_.TextInput, { type: 'text', placeholder: 'Enter some text' })
  );
});

(0, _react3.storiesOf)('TextInput', module).add('default value', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    { title: 'default value' },
    _react2.default.createElement(_.TextInput, { type: 'text', defaultValue: 'This is plain text field value' })
  );
});

(0, _react3.storiesOf)('TextInput', module).add('password', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    { title: 'password' },
    _react2.default.createElement(_.TextInput, { type: 'password', defaultValue: 'password' })
  );
});

(0, _react3.storiesOf)('TextInput', module).add('code', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    { title: 'password' },
    _react2.default.createElement(_.TextInput, { code: true, defaultValue: 'DUq0xuJZAD7RvezvqCrA6hpJVb6iDUip' })
  );
});

(0, _react3.storiesOf)('TextInput', module).add('readonly', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    { title: 'password' },
    _react2.default.createElement(_.TextInput, { readOnly: true, placeholder: 'Placeholder text' }),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(_.TextInput, { readOnly: true, defaultValue: 'Default value' })
  );
});

(0, _react3.storiesOf)('TextInput', module).add('masked', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    { title: 'masked' },
    _react2.default.createElement(_.TextInput, { defaultValue: 'secret-client-hash', masked: true })
  );
});

(0, _react3.storiesOf)('TextInput', module).add('sizes', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    { title: 'sizes' },
    _react2.default.createElement(
      _storyHelpers.Stack,
      { style: { marginBottom: '1em' } },
      _react2.default.createElement(_.TextInput, { size: 'large', defaultValue: 'Size large' }),
      _react2.default.createElement(
        _.Button,
        { size: 'large', appearance: 'primary' },
        'Button'
      )
    ),
    _react2.default.createElement(
      _storyHelpers.Stack,
      { style: { marginBottom: '1em' } },
      _react2.default.createElement(_.TextInput, { label: 'This field has text', defaultValue: 'Size normal' }),
      _react2.default.createElement(
        _.Button,
        { appearance: 'primary' },
        'Button'
      )
    ),
    _react2.default.createElement(
      _storyHelpers.Stack,
      { style: { marginBottom: '1em' } },
      _react2.default.createElement(_.TextInput, { size: 'compressed', defaultValue: 'Size compressed' }),
      _react2.default.createElement(
        _.Button,
        { size: 'compressed', appearance: 'primary' },
        'Button'
      )
    ),
    _react2.default.createElement(
      _storyHelpers.Stack,
      { style: { marginBottom: '1em' } },
      _react2.default.createElement(_.TextInput, { size: 'small', defaultValue: 'Size small' }),
      _react2.default.createElement(
        _.Button,
        { size: 'small', appearance: 'primary' },
        'Button'
      )
    )
  );
});

(0, _react3.storiesOf)('TextInput').add('with actions as shape', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    { title: 'with actions as shape' },
    _react2.default.createElement(_.TextInput, {
      type: 'text',
      placeholder: 'Enter some text',
      actions: [{ icon: 'copy', label: 'Copy URL', handler: function handler(e) {
          return console.log(e);
        } }, { icon: 'delete', label: 'Delete URL', handler: function handler(e) {
          return console.log(e);
        } }]
    })
  );
});

(0, _react3.storiesOf)('TextInput').add('with actions as buttons', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    { title: 'with actions as buttons' },
    _react2.default.createElement(_.TextInput, {
      type: 'text',
      placeholder: 'Enter some text',
      actions: [_react2.default.createElement(_.Button, { icon: 'copy', onClick: function onClick(e) {
          return console.log(e);
        } }), _react2.default.createElement(_.Button, { icon: 'delete', onClick: function onClick(e) {
          return console.log(e);
        } })]
    })
  );
});
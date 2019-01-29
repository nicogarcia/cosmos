'use strict';

var _templateObject = _taggedTemplateLiteral(['\n  min-height: 800px;\n'], ['\n  min-height: 800px;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styled = require('../../styled');

var _styled2 = _interopRequireDefault(_styled);

var _react3 = require('@storybook/react');

var _storyHelpers = require('../../_helpers/story-helpers');

var _2 = require('../..');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledExample = (0, _styled2.default)(_storyHelpers.Example)(_templateObject);

(0, _react3.storiesOf)('Dialog', module).add('default', function () {
  return _react2.default.createElement(
    StyledExample,
    { title: 'default' },
    _react2.default.createElement(
      _2.Dialog,
      {
        open: true,
        title: 'Example Dialog',
        role: 'destructive',
        onClose: function onClose() {},
        actions: [new _2.Dialog.Action('OK', function () {}, 'primary'), new _2.Dialog.Action('Cancel', function () {}, 'secondary')]
      },
      'Are you sure?'
    )
  );
});

(0, _react3.storiesOf)('Dialog', module).add('with primary button only', function () {
  return _react2.default.createElement(
    StyledExample,
    { title: 'with primary button only' },
    _react2.default.createElement(
      _2.Dialog,
      {
        open: true,
        title: 'Example Dialog',
        onClose: function onClose() {},
        actions: [_react2.default.createElement(
          _2.Button,
          { onClick: function onClick() {}, appearance: 'primary' },
          'OK'
        )]
      },
      'Are you sure?'
    )
  );
});

(0, _react3.storiesOf)('Dialog', module).add('without footer', function () {
  return _react2.default.createElement(
    StyledExample,
    { title: 'without footer' },
    _react2.default.createElement(
      _2.Dialog,
      { open: true, title: 'Example Dialog', onClose: function onClose() {} },
      'Some information'
    ),
    _react2.default.createElement(
      _2.Button,
      null,
      'test'
    )
  );
});

(0, _react3.storiesOf)('Dialog', module).add('with form', function () {
  return _react2.default.createElement(
    StyledExample,
    { title: 'with form' },
    _react2.default.createElement(
      _2.Dialog,
      {
        open: true,
        title: 'Example Dialog',
        role: 'form',
        onClose: function onClose() {},
        actions: [_react2.default.createElement(
          _2.Button,
          { onClick: function onClick() {}, appearance: 'primary' },
          'OK'
        ), _react2.default.createElement(
          _2.Button,
          { onClick: function onClick() {}, appearance: 'secondary' },
          'Cancel'
        )],
        width: 600
      },
      _react2.default.createElement(
        _2.Form,
        { layout: 'label-on-top' },
        _react2.default.createElement(
          _2.Form.Field,
          { label: 'First Name' },
          _react2.default.createElement(_2.TextInput, { type: 'text', placeholder: 'John' })
        ),
        _react2.default.createElement(
          _2.Form.Field,
          { label: 'Last Name' },
          _react2.default.createElement(_2.TextInput, { type: 'text', placeholder: 'Doe' })
        ),
        _react2.default.createElement(
          _2.Form.Field,
          { label: 'Email Address' },
          _react2.default.createElement(_2.TextInput, { type: 'text', placeholder: 'john.doe@auth0.com' })
        )
      )
    )
  );
});

(0, _react3.storiesOf)('Dialog', module).add('with introduction + form', function () {
  return _react2.default.createElement(
    StyledExample,
    { title: 'with introduction + form' },
    _react2.default.createElement(
      _2.Dialog,
      {
        open: true,
        title: 'Example Dialog',
        onClose: function onClose() {},
        actions: [_react2.default.createElement(
          _2.Button,
          { onClick: function onClick() {}, appearance: 'primary' },
          'OK'
        ), _react2.default.createElement(
          _2.Button,
          { onClick: function onClick() {}, appearance: 'secondary' },
          'Cancel'
        )],
        width: 600
      },
      _react2.default.createElement(
        _2.Paragraph,
        null,
        'This is a brief introduction to the form. This is a short text that goes before the form starts and may include ',
        _react2.default.createElement(
          _2.Link,
          { href: '#' },
          'links to other sites'
        ),
        ' and/or',
        ' ',
        _react2.default.createElement(
          _2.Text,
          { type: 'strong' },
          'bold'
        ),
        ' text.'
      ),
      _react2.default.createElement(
        _2.Form,
        { layout: 'label-on-top' },
        _react2.default.createElement(
          _2.Form.Field,
          { label: 'First Name' },
          _react2.default.createElement(_2.TextInput, { type: 'text', placeholder: 'John' })
        ),
        _react2.default.createElement(
          _2.Form.Field,
          { label: 'Last Name' },
          _react2.default.createElement(_2.TextInput, { type: 'text', placeholder: 'Doe' })
        ),
        _react2.default.createElement(
          _2.Form.Field,
          { label: 'Email Address' },
          _react2.default.createElement(_2.TextInput, { type: 'text', placeholder: 'john.doe@auth0.com' })
        )
      )
    )
  );
});

(0, _react3.storiesOf)('Dialog', module).add('stressed', function () {
  return _react2.default.createElement(
    StyledExample,
    { title: 'stressed' },
    _react2.default.createElement(
      _2.Dialog,
      {
        open: true,
        title: 'Thisisaverylongstringoftexttotestworkbreakandoverlowingofthecomponentwhenithasaverylongstringoftest',
        onClose: function onClose() {},
        actions: [_react2.default.createElement(
          _2.Button,
          { onClick: function onClick() {}, appearance: 'primary' },
          'OK'
        ), _react2.default.createElement(
          _2.Button,
          { onClick: function onClick() {}, appearance: 'secondary' },
          'Cancel'
        )]
      },
      'Thisisaverylongstringoftexttotestworkbreakandoverlowingofthecomponentwhenithasaverylongstringoftest This is a brief introduction to the form. This is a short text that goes before the form starts and may include ',
      _react2.default.createElement(
        _2.Link,
        { href: '#' },
        'links to other sites'
      ),
      ' and/or',
      ' ',
      _react2.default.createElement(
        _2.Text,
        { type: 'strong' },
        'bold'
      ),
      ' text.',
      _react2.default.createElement(
        _2.Paragraph,
        null,
        'This is a brief introduction to the form. This is a short text that goes before the form starts and may include ',
        _react2.default.createElement(
          _2.Link,
          { href: '#' },
          'links to other sites'
        ),
        ' and/or',
        ' ',
        _react2.default.createElement(
          _2.Text,
          { type: 'strong' },
          'bold'
        ),
        ' text.'
      ),
      _react2.default.createElement(
        _2.Paragraph,
        null,
        'This is a brief introduction to the form. This is a short text that goes before the form starts and may include ',
        _react2.default.createElement(
          _2.Link,
          { href: '#' },
          'links to other sites'
        ),
        ' and/or',
        ' ',
        _react2.default.createElement(
          _2.Text,
          { type: 'strong' },
          'bold'
        ),
        ' text.'
      ),
      _react2.default.createElement(
        _2.Paragraph,
        null,
        'This is a brief introduction to the form. This is a short text that goes before the form starts and may include ',
        _react2.default.createElement(
          _2.Link,
          { href: '#' },
          'links to other sites'
        ),
        ' and/or',
        ' ',
        _react2.default.createElement(
          _2.Text,
          { type: 'strong' },
          'bold'
        ),
        ' text.'
      ),
      _react2.default.createElement(
        _2.Paragraph,
        null,
        'This is a brief introduction to the form. This is a short text that goes before the form starts and may include ',
        _react2.default.createElement(
          _2.Link,
          { href: '#' },
          'links to other sites'
        ),
        ' and/or',
        ' ',
        _react2.default.createElement(
          _2.Text,
          { type: 'strong' },
          'bold'
        ),
        ' text.'
      ),
      _react2.default.createElement(
        _2.Paragraph,
        null,
        'This is a brief introduction to the form. This is a short text that goes before the form starts and may include ',
        _react2.default.createElement(
          _2.Link,
          { href: '#' },
          'links to other sites'
        ),
        ' and/or',
        ' ',
        _react2.default.createElement(
          _2.Text,
          { type: 'strong' },
          'bold'
        ),
        ' text.'
      ),
      _react2.default.createElement(
        _2.Paragraph,
        null,
        'This is a brief introduction to the form. This is a short text that goes before the form starts and may include ',
        _react2.default.createElement(
          _2.Link,
          { href: '#' },
          'links to other sites'
        ),
        ' and/or',
        ' ',
        _react2.default.createElement(
          _2.Text,
          { type: 'strong' },
          'bold'
        ),
        ' text.'
      ),
      _react2.default.createElement(
        _2.Paragraph,
        null,
        'This is a brief introduction to the form. This is a short text that goes before the form starts and may include ',
        _react2.default.createElement(
          _2.Link,
          { href: '#' },
          'links to other sites'
        ),
        ' and/or',
        ' ',
        _react2.default.createElement(
          _2.Text,
          { type: 'strong' },
          'bold'
        ),
        ' text.'
      ),
      _react2.default.createElement(
        _2.Paragraph,
        null,
        'This is a brief introduction to the form. This is a short text that goes before the form starts and may include ',
        _react2.default.createElement(
          _2.Link,
          { href: '#' },
          'links to other sites'
        ),
        ' and/or',
        ' ',
        _react2.default.createElement(
          _2.Text,
          { type: 'strong' },
          'bold'
        ),
        ' text.'
      ),
      _react2.default.createElement(
        _2.Paragraph,
        null,
        'This is a brief introduction to the form. This is a short text that goes before the form starts and may include ',
        _react2.default.createElement(
          _2.Link,
          { href: '#' },
          'links to other sites'
        ),
        ' and/or',
        ' ',
        _react2.default.createElement(
          _2.Text,
          { type: 'strong' },
          'bold'
        ),
        ' text.'
      ),
      _react2.default.createElement(
        _2.Paragraph,
        null,
        'This is a brief introduction to the form. This is a short text that goes before the form starts and may include ',
        _react2.default.createElement(
          _2.Link,
          { href: '#' },
          'links to other sites'
        ),
        ' and/or',
        ' ',
        _react2.default.createElement(
          _2.Text,
          { type: 'strong' },
          'bold'
        ),
        ' text.'
      ),
      _react2.default.createElement(
        _2.Paragraph,
        null,
        'This is a brief introduction to the form. This is a short text that goes before the form starts and may include ',
        _react2.default.createElement(
          _2.Link,
          { href: '#' },
          'links to other sites'
        ),
        ' and/or',
        ' ',
        _react2.default.createElement(
          _2.Text,
          { type: 'strong' },
          'bold'
        ),
        ' text.'
      ),
      _react2.default.createElement(
        _2.Paragraph,
        null,
        'This is a brief introduction to the form. This is a short text that goes before the form starts and may include ',
        _react2.default.createElement(
          _2.Link,
          { href: '#' },
          'links to other sites'
        ),
        ' and/or',
        ' ',
        _react2.default.createElement(
          _2.Text,
          { type: 'strong' },
          'bold'
        ),
        ' text.'
      ),
      _react2.default.createElement(
        _2.Paragraph,
        null,
        'This is a brief introduction to the form. This is a short text that goes before the form starts and may include ',
        _react2.default.createElement(
          _2.Link,
          { href: '#' },
          'links to other sites'
        ),
        ' and/or',
        ' ',
        _react2.default.createElement(
          _2.Text,
          { type: 'strong' },
          'bold'
        ),
        ' text.'
      ),
      _react2.default.createElement(
        _2.Paragraph,
        null,
        'This is a brief introduction to the form. This is a short text that goes before the form starts and may include ',
        _react2.default.createElement(
          _2.Link,
          { href: '#' },
          'links to other sites'
        ),
        ' and/or',
        ' ',
        _react2.default.createElement(
          _2.Text,
          { type: 'strong' },
          'bold'
        ),
        ' text.'
      )
    )
  );
});

(0, _react3.storiesOf)('Dialog', module).add('dialog with tabs', function () {
  return _react2.default.createElement(
    StyledExample,
    { title: 'dialog with tabs' },
    _react2.default.createElement(
      _2.Dialog,
      {
        open: true,
        title: 'Example Dialog',
        role: 'destructive',
        onClose: function onClose() {},
        actions: [new _2.Dialog.Action('OK', function () {}, 'primary'), new _2.Dialog.Action('Cancel', function () {}, 'secondary')]
      },
      _react2.default.createElement(
        _2.Tabs,
        { selected: 0, onSelect: function onSelect(_) {} },
        _react2.default.createElement(
          _2.Tabs.Tab,
          { label: 'Tab 1' },
          'This is tab 1'
        ),
        _react2.default.createElement(
          _2.Tabs.Tab,
          { label: 'Tab 2' },
          'You can render anything you want here'
        ),
        _react2.default.createElement(
          _2.Tabs.Tab,
          { label: 'Tab 3' },
          'Look, third tab is selected by default!'
        )
      )
    )
  );
});
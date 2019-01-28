'use strict';

var _templateObject = _taggedTemplateLiteral(['\n    margin-top: 20px;\n    min-height: 80px;\n\n    p {\n      font-family: monospace;\n      margin-bottom: ', ';\n      opacity: 0.5;\n    }\n\n    & > div {\n      margin-left: ', ';\n    }\n  '], ['\n    margin-top: 20px;\n    min-height: 80px;\n\n    p {\n      font-family: monospace;\n      margin-bottom: ', ';\n      opacity: 0.5;\n    }\n\n    & > div {\n      margin-left: ', ';\n    }\n  ']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _storyHelpers = require('../../_helpers/story-helpers');

var _styled = require('../../styled');

var _styled2 = _interopRequireDefault(_styled);

var _ = require('../..');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var positions = ['top', 'left', 'right', 'bottom'];

var ExampleContainer = function ExampleContainer(_ref) {
  var children = _ref.children,
      position = _ref.position,
      noMargins = _ref.noMargins;

  var Container = _styled2.default.div(_templateObject, position === 'top' && !noMargins ? '50px' : '10px', position === 'left' && !noMargins ? '120px' : 0);

  return _react2.default.createElement(
    Container,
    null,
    _react2.default.createElement(
      'p',
      null,
      position
    ),
    _react2.default.createElement(
      'div',
      null,
      children
    )
  );
};

(0, _react3.storiesOf)('Tooltip', module).add('hidden by default', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    { title: 'hidden by default' },
    _react2.default.createElement(
      _.Tooltip,
      { content: 'Can you see me?' },
      _react2.default.createElement(
        _.Button,
        null,
        'Button'
      )
    )
  );
});

(0, _react3.storiesOf)('Tooltip', module).add('with button', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    { title: 'with button' },
    positions.map(function (position) {
      return _react2.default.createElement(
        ExampleContainer,
        { position: position, key: position },
        _react2.default.createElement(
          _.Tooltip,
          { position: position, content: 'Inner content ' + position, defaultVisible: true },
          _react2.default.createElement(
            _.Button,
            null,
            'Something'
          )
        )
      );
    })
  );
});

(0, _react3.storiesOf)('Tooltip', module).add('with button group', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    { title: 'with button group' },
    positions.map(function (position) {
      return _react2.default.createElement(
        ExampleContainer,
        { position: position, noMargins: true },
        _react2.default.createElement(
          _.ButtonGroup,
          null,
          _react2.default.createElement(
            _.Button,
            null,
            'Something'
          ),
          _react2.default.createElement(
            _.Tooltip,
            { position: position, content: 'Inner content ' + position, defaultVisible: true },
            _react2.default.createElement(
              _.Button,
              null,
              'Something'
            )
          ),
          _react2.default.createElement(
            _.Button,
            null,
            'Something'
          )
        )
      );
    })
  );
});

(0, _react3.storiesOf)('Tooltip', module).add('with compressed button group', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    { title: 'with compressed button group' },
    positions.map(function (position) {
      return _react2.default.createElement(
        ExampleContainer,
        { position: position, noMargins: true },
        _react2.default.createElement(
          _.ButtonGroup,
          { compressed: true },
          _react2.default.createElement(
            _.Button,
            null,
            'Something'
          ),
          _react2.default.createElement(
            _.Tooltip,
            { position: position, content: 'Inner content ' + position, defaultVisible: true },
            _react2.default.createElement(
              _.Button,
              null,
              'Something'
            )
          ),
          _react2.default.createElement(
            _.Button,
            null,
            'Something'
          )
        )
      );
    })
  );
});

(0, _react3.storiesOf)('Tooltip', module).add('with icon only button', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    { title: 'with icon only button' },
    _react2.default.createElement(
      ExampleContainer,
      { position: 'top' },
      _react2.default.createElement(_.Button, { icon: 'analytics', label: 'this is the label', labelDefaultVisible: true })
    )
  );
});

(0, _react3.storiesOf)('Tooltip', module).add('long text', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    { title: 'with long text' },
    _react2.default.createElement(
      ExampleContainer,
      { position: 'top' },
      _react2.default.createElement(_.Button, {
        icon: 'help',
        label: 'This is a very long text. Please try to keep it no longer than 4 lines. The tooltip should be a short and helpful text.',
        labelDefaultVisible: true
      })
    )
  );
});

(0, _react3.storiesOf)('Tooltip', module).add('in a small container', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    { title: 'in a small container (#951)' },
    _react2.default.createElement(
      'div',
      { style: { overflow: 'hidden', padding: 20, border: '1px solid black' } },
      _react2.default.createElement(
        _.Tooltip,
        { content: 'here is some text' },
        'Hover over me'
      )
    )
  );
});

(0, _react3.storiesOf)('Tooltip', module).add('inside a dialog', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    { title: 'inside a dialog (#1367)' },
    _react2.default.createElement(
      _.Dialog,
      { open: true, title: 'Test case for #1367' },
      _react2.default.createElement(
        'div',
        null,
        'plenty of room for the tooltip',
        ' ',
        _react2.default.createElement(
          _.Tooltip,
          { content: 'I have enough space', position: 'right', defaultVisible: true },
          _react2.default.createElement(_.Icon, { name: 'help', size: '15', color: 'default' })
        )
      ),
      _react2.default.createElement('br', null),
      _react2.default.createElement('br', null),
      _react2.default.createElement(
        'div',
        null,
        'just a lot of text which leaves no room for the tooltip inside the dialog',
        ' ',
        _react2.default.createElement(
          _.Tooltip,
          {
            position: 'right',
            content: 'no worries, I can float on top of the dialog',
            defaultVisible: true
          },
          _react2.default.createElement(_.Icon, { name: 'help', size: '15', color: 'default' })
        )
      ),
      _react2.default.createElement('br', null),
      _react2.default.createElement('br', null),
      _react2.default.createElement(
        'div',
        null,
        'if you resize the window, the tooltip will not have any space outside the dialog as well',
        _react2.default.createElement(
          _.Tooltip,
          {
            position: 'right',
            content: 'I would open on the left when there\'s no space left on the right',
            defaultVisible: true
          },
          _react2.default.createElement(_.Icon, { name: 'help', size: '15', color: 'default' })
        )
      )
    )
  );
});

(0, _react3.storiesOf)('Tooltip', module).add('with an input', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    { title: 'with an input' },
    _react2.default.createElement(
      _.Tooltip,
      { content: 'Here\'s some help', position: 'bottom' },
      _react2.default.createElement(_.TextInput, { placeholder: 'Enter something' })
    )
  );
});
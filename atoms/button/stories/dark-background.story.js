'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _storyHelpers = require('../../../_helpers/story-helpers');

var _ = require('../../..');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('Button', module).add('dark background', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    { title: 'Dark background', background: 'dark' },
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        _storyHelpers.Stack,
        null,
        _react2.default.createElement(
          _.Button,
          null,
          'Button'
        ),
        _react2.default.createElement(
          _.Button,
          { appearance: 'primary' },
          'Primary'
        ),
        _react2.default.createElement(
          _.Button,
          { appearance: 'secondary' },
          'Secondary'
        ),
        _react2.default.createElement(
          _.Button,
          { appearance: 'link' },
          'Link'
        ),
        _react2.default.createElement(
          _.Button,
          { appearance: 'destructive' },
          'Destructive'
        )
      )
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        _storyHelpers.Stack,
        null,
        _react2.default.createElement(
          _.Button,
          { disabled: true },
          'Button'
        ),
        _react2.default.createElement(
          _.Button,
          { disabled: true, appearance: 'primary' },
          'Primary'
        ),
        _react2.default.createElement(
          _.Button,
          { disabled: true, appearance: 'secondary' },
          'Secondary'
        ),
        _react2.default.createElement(
          _.Button,
          { disabled: true, appearance: 'link' },
          'Link'
        ),
        _react2.default.createElement(
          _.Button,
          { disabled: true, appearance: 'destructive' },
          'Destructive'
        )
      )
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        _storyHelpers.Stack,
        null,
        _react2.default.createElement(
          _.Button,
          { loading: true },
          'Button'
        ),
        _react2.default.createElement(
          _.Button,
          { loading: true, appearance: 'primary' },
          'Primary'
        ),
        _react2.default.createElement(
          _.Button,
          { loading: true, appearance: 'secondary' },
          'Secondary'
        ),
        _react2.default.createElement(
          _.Button,
          { loading: true, appearance: 'link' },
          'Link'
        ),
        _react2.default.createElement(
          _.Button,
          { loading: true, appearance: 'destructive' },
          'Destructive'
        )
      )
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        _storyHelpers.Stack,
        null,
        _react2.default.createElement(_.Button, { icon: 'delete' }),
        _react2.default.createElement(_.Button, { appearance: 'primary', icon: 'delete' }),
        _react2.default.createElement(_.Button, { appearance: 'link', icon: 'delete' }),
        _react2.default.createElement(_.Button, { appearance: 'secondary', icon: 'delete' }),
        _react2.default.createElement(_.Button, { appearance: 'destructive', icon: 'delete' })
      )
    )
  );
});
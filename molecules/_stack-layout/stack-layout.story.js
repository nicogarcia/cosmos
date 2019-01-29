'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _storyHelpers = require('../../_helpers/story-helpers');

var _ = require('../..');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('Stack Layout', module).add('Resource list', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    { title: 'Resource list' },
    _react2.default.createElement(
      _.StackLayout,
      { distribution: 'spaceBetween', space: [1, 1.5, 'none'] },
      _react2.default.createElement(
        _.StackLayout,
        { space: ['none', 1] },
        _react2.default.createElement(_.Avatar, { type: 'resource', icon: 'clients', size: 'large' }),
        _react2.default.createElement(
          _.RowLayout,
          { gutter: 'none' },
          _react2.default.createElement(
            _.Heading,
            { size: 3 },
            'Heading'
          ),
          _react2.default.createElement(
            _.Paragraph,
            null,
            'This is a subtitle text'
          )
        )
      ),
      _react2.default.createElement(
        _.StackLayout,
        { gutter: 'condensed', space: ['none', 1] },
        _react2.default.createElement(_.Icon, { name: 'copy', size: '20', color: 'default' }),
        _react2.default.createElement(
          _.Code,
          null,
          'Some_sort_of_code_goes_here'
        )
      ),
      _react2.default.createElement(
        _.StackLayout,
        { gutter: 'condensed' },
        _react2.default.createElement(_.Button, {
          size: 'default',
          appearance: 'default',
          icon: 'brand-instagram',
          iconAlign: 'left',
          label: 'action'
        }),
        _react2.default.createElement(_.Button, {
          size: 'default',
          appearance: 'default',
          icon: 'brand-instagram',
          iconAlign: 'left',
          label: 'action'
        })
      )
    )
  );
});

(0, _react3.storiesOf)('Stack Layout', module).add('Toolbar', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    { title: 'tool bar' },
    _react2.default.createElement(
      _.StackLayout,
      { gutter: 'spacious', distribution: 'spaceBetween' },
      _react2.default.createElement(
        _.StackLayout,
        { gutter: 'spacious' },
        _react2.default.createElement(
          _.ButtonGroup,
          { compressed: true },
          _react2.default.createElement(_.Button, { icon: 'pencil' }),
          _react2.default.createElement(_.Button, { icon: 'copy' }),
          _react2.default.createElement(_.Button, { icon: 'delete' })
        ),
        _react2.default.createElement(
          _.StackLayout,
          { gutter: 'condensed' },
          _react2.default.createElement(
            _.Button,
            { size: 'default', appearance: 'default', iconAlign: 'left' },
            'Button'
          ),
          _react2.default.createElement(
            _.Button,
            { size: 'default', appearance: 'default', iconAlign: 'left' },
            'Button'
          )
        )
      ),
      _react2.default.createElement(_.TextInput, { placeholder: 'Search', type: 'text', size: 'default' })
    )
  );
});
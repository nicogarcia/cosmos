'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _storyHelpers = require('../../_helpers/story-helpers');

var _ = require('../..');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('ButtonGroup', module).add('default', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    { title: 'default' },
    _react2.default.createElement(
      _.ButtonGroup,
      null,
      _react2.default.createElement(
        _.Button,
        { appearance: 'primary' },
        'Save changes'
      ),
      _react2.default.createElement(
        _.Button,
        { appearance: 'secondary', icon: 'play' },
        'Try'
      )
    )
  );
});

(0, _react3.storiesOf)('ButtonGroup', module).add('alignment', function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _storyHelpers.Example,
      { title: 'default/left' },
      _react2.default.createElement(
        _.ButtonGroup,
        { align: 'left' },
        _react2.default.createElement(
          _.Button,
          { appearance: 'primary' },
          'Save changes'
        ),
        _react2.default.createElement(
          _.Button,
          { appearance: 'secondary', icon: 'play' },
          'Try'
        )
      )
    ),
    _react2.default.createElement(
      _storyHelpers.Example,
      { title: 'right' },
      _react2.default.createElement(
        _.ButtonGroup,
        { align: 'right' },
        _react2.default.createElement(
          _.Button,
          { appearance: 'primary' },
          'Save changes'
        ),
        _react2.default.createElement(
          _.Button,
          { appearance: 'secondary', icon: 'play' },
          'Try'
        )
      )
    )
  );
});

(0, _react3.storiesOf)('ButtonGroup', module).add('single button margin', function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _storyHelpers.Example,
      { title: 'left single' },
      _react2.default.createElement(
        _.ButtonGroup,
        { align: 'left' },
        _react2.default.createElement(
          _.Button,
          { appearance: 'secondary' },
          'Save changes'
        )
      )
    ),
    _react2.default.createElement(
      _storyHelpers.Example,
      { title: 'left' },
      _react2.default.createElement(
        _.ButtonGroup,
        { align: 'left' },
        _react2.default.createElement(
          _.Button,
          { appearance: 'secondary' },
          'Save changes'
        ),
        _react2.default.createElement(
          _.Button,
          { appearance: 'secondary' },
          'Save changes'
        )
      )
    ),
    _react2.default.createElement(
      _storyHelpers.Example,
      { title: 'right single' },
      _react2.default.createElement(
        _.ButtonGroup,
        { align: 'right' },
        _react2.default.createElement(
          _.Button,
          { appearance: 'secondary' },
          'Save changes'
        )
      )
    ),
    _react2.default.createElement(
      _storyHelpers.Example,
      { title: 'right' },
      _react2.default.createElement(
        _.ButtonGroup,
        { align: 'right' },
        _react2.default.createElement(
          _.Button,
          { appearance: 'secondary' },
          'Save changes'
        ),
        _react2.default.createElement(
          _.Button,
          { appearance: 'secondary' },
          'Save changes'
        )
      )
    )
  );
});

(0, _react3.storiesOf)('ButtonGroup', module).add('icons', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    { title: 'Icons' },
    _react2.default.createElement(
      _.ButtonGroup,
      null,
      _react2.default.createElement(_.Button, { icon: 'pencil' }),
      _react2.default.createElement(_.Button, { icon: 'copy' }),
      _react2.default.createElement(_.Button, { icon: 'delete' })
    )
  );
});

(0, _react3.storiesOf)('ButtonGroup', module).add('compressed', function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _storyHelpers.Example,
      { title: 'Compressed buttons' },
      _react2.default.createElement(
        _.ButtonGroup,
        { compressed: true },
        _react2.default.createElement(
          _.Button,
          null,
          'Copy'
        ),
        _react2.default.createElement(
          _.Button,
          null,
          'Paste'
        )
      )
    ),
    _react2.default.createElement(
      _storyHelpers.Example,
      { title: 'compressed icons' },
      _react2.default.createElement(
        _.ButtonGroup,
        { compressed: true },
        _react2.default.createElement(_.Button, { icon: 'pencil' }),
        _react2.default.createElement(_.Button, { icon: 'copy' }),
        _react2.default.createElement(_.Button, { icon: 'delete' })
      )
    )
  );
});
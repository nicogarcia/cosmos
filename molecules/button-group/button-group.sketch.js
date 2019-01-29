'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _ = require('../..');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('ButtonGroup', module).add('default', function () {
  return _react2.default.createElement(
    _.ButtonGroup,
    null,
    _react2.default.createElement(
      _.Button,
      null,
      'Button one'
    ),
    _react2.default.createElement(
      _.Button,
      null,
      'Button two'
    ),
    _react2.default.createElement(
      _.Button,
      null,
      'Button three'
    )
  );
});

(0, _react3.storiesOf)('ButtonGroup', module).add('icon set', function () {
  return _react2.default.createElement(
    _.ButtonGroup,
    null,
    _react2.default.createElement(_.Button, { icon: 'pencil' }),
    _react2.default.createElement(_.Button, { icon: 'copy' }),
    _react2.default.createElement(_.Button, { icon: 'delete' })
  );
});

(0, _react3.storiesOf)('ButtonGroup', module).add('compressed', function () {
  return _react2.default.createElement(
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
  );
});
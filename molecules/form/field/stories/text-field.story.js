'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _storyHelpers = require('../../../../_helpers/story-helpers');

var _ = require('../../../..');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('Form', module).add('text field', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    { title: 'text field' },
    _react2.default.createElement(
      _.Form,
      null,
      _react2.default.createElement(
        _.Form.Field,
        { label: 'Field label' },
        _react2.default.createElement(_.TextInput, { type: 'text', placeholder: 'Enter something' })
      )
    )
  );
});

(0, _react3.storiesOf)('Form', module).add('text field + error', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    { title: 'text field + error' },
    _react2.default.createElement(
      _.Form,
      null,
      _react2.default.createElement(
        _.Form.Field,
        { label: 'Field label', error: 'Everything is broken' },
        _react2.default.createElement(_.TextInput, { type: 'text', placeholder: 'Enter something', hasError: true })
      )
    )
  );
});

var textInputForSize = function textInputForSize(size) {
  return _react2.default.createElement(
    _.Form.Field,
    { label: 'Field label' },
    _react2.default.createElement(_.TextInput, {
      type: 'text',
      size: size,
      placeholder: 'Enter something',
      actions: [_react2.default.createElement(_.Button, { icon: 'copy', onClick: function onClick(e) {
          return console.log(e);
        } }), _react2.default.createElement(_.Button, { icon: 'delete', onClick: function onClick(e) {
          return console.log(e);
        } })]
    })
  );
};

(0, _react3.storiesOf)('Form', module).add('text field + actions', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    { title: 'text field + actions' },
    _react2.default.createElement(
      _.Form,
      null,
      textInputForSize('default'),
      textInputForSize('large'),
      textInputForSize('small'),
      textInputForSize('compressed')
    )
  );
});

(0, _react3.storiesOf)('Form', module).add('text field - old API', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    { title: 'old API' },
    _react2.default.createElement(
      _.Form,
      null,
      _react2.default.createElement(_.Form.TextInput, {
        label: 'Field label',
        error: 'Everything is broken',
        type: 'text',
        placeholder: 'Enter something',
        actions: [{ icon: 'copy', handler: function handler() {}, label: 'Copy to clipboard' }, { icon: 'delete', handler: function handler() {}, label: 'Delete' }]
      })
    )
  );
});
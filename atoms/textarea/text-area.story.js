'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _storyHelpers = require('../../_helpers/story-helpers');

var _ = require('../..');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('TextArea', module).add('simple', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    { title: 'simple' },
    _react2.default.createElement(_.TextArea, { placeholder: 'Small text area' })
  );
});

(0, _react3.storiesOf)('TextArea', module).add('longer text area', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    { title: 'longer text area' },
    _react2.default.createElement(_.TextArea, { length: 7, placeholder: 'Small text area' })
  );
});

(0, _react3.storiesOf)('TextArea', module).add('disable resize', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    { title: 'disable resize' },
    _react2.default.createElement(_.TextArea, { resizable: false, placeholder: 'Can\'t resize this' })
  );
});

(0, _react3.storiesOf)('TextArea', module).add('readonly', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    { title: 'readonly' },
    _react2.default.createElement(_.TextArea, { readOnly: true, placeholder: 'Field is disabled' })
  );
});

(0, _react3.storiesOf)('TextArea').add('with actions as shape', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    { title: 'with actions as shape' },
    _react2.default.createElement(_.TextArea, {
      placeholder: 'Small text area',
      actions: [{ icon: 'copy', label: 'Copy URL', handler: function handler(e) {
          return console.log(e);
        } }, { icon: 'delete', label: 'Delete URL', handler: function handler(e) {
          return console.log(e);
        } }]
    })
  );
});

(0, _react3.storiesOf)('TextArea').add('with actions as buttons', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    { title: 'with actions as buttons' },
    _react2.default.createElement(_.TextArea, {
      placeholder: 'Small text area',
      actions: [_react2.default.createElement(_.Button, { icon: 'copy', onClick: function onClick(e) {
          return console.log(e);
        } }), _react2.default.createElement(_.Button, { icon: 'delete', onClick: function onClick(e) {
          return console.log(e);
        } })]
    })
  );
});
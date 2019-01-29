'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _storyHelpers = require('../../../_helpers/story-helpers');

var _ = require('../../..');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('Form', module).add('fieldset', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    { title: 'fieldset' },
    _react2.default.createElement(
      _.Form,
      null,
      _react2.default.createElement(
        _.Form.FieldSet,
        { label: 'Group 1' },
        _react2.default.createElement(
          _.Form.Field,
          { label: 'Field label' },
          _react2.default.createElement(_.TextInput, { type: 'text', placeholder: 'Enter something' })
        ),
        _react2.default.createElement(
          _.Form.Field,
          { label: 'Long input' },
          _react2.default.createElement(_.TextArea, { placeholder: 'Add a lot of text here' })
        )
      ),
      _react2.default.createElement(
        _.Form.FieldSet,
        { label: 'Group 2' },
        _react2.default.createElement(
          _.Form.Field,
          { label: 'Field label' },
          _react2.default.createElement(_.TextInput, { type: 'text', placeholder: 'Enter something' })
        ),
        _react2.default.createElement(
          _.Form.Field,
          { label: 'Field label' },
          _react2.default.createElement(_.TextInput, { type: 'text', placeholder: 'Enter something' })
        )
      )
    )
  );
});
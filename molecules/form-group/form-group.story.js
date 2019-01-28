'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _storyHelpers = require('../../_helpers/story-helpers');

var _ = require('../..');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('Form Group', module).add('default', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    { title: 'default' },
    _react2.default.createElement(
      _.FormGroup,
      null,
      _react2.default.createElement(
        _.Form,
        null,
        _react2.default.createElement(
          _.Form.FieldSet,
          { label: 'iOS Settings' },
          _react2.default.createElement(
            _.Form.Field,
            { label: 'Field label' },
            _react2.default.createElement(_.TextInput, { type: 'text', placeholder: 'Enter something' })
          ),
          _react2.default.createElement(_.Form.Actions, { primaryAction: { label: 'Save Changes', handler: function handler() {} } })
        )
      ),
      _react2.default.createElement(
        _.Form,
        { layout: 'label-on-top' },
        _react2.default.createElement(
          _.Form.FieldSet,
          { label: 'Android Settings' },
          _react2.default.createElement(
            _.Form.Field,
            { label: 'Field label' },
            _react2.default.createElement(_.TextInput, { type: 'text', placeholder: 'Enter something' })
          ),
          _react2.default.createElement(_.Form.Actions, { primaryAction: { label: 'Save Changes', handler: function handler() {} } })
        )
      )
    )
  );
});
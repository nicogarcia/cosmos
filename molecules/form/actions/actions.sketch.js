'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _ = require('../../..');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('Form Actions', module).add('only primary', function () {
  return _react2.default.createElement(
    _.Form,
    null,
    _react2.default.createElement(_.Form.Actions, { primaryAction: { label: 'Save Changes', handler: function handler() {} } })
  );
});

(0, _react3.storiesOf)('Form Actions', module).add('primary + secondary actions', function () {
  return _react2.default.createElement(
    _.Form,
    null,
    _react2.default.createElement(_.Form.Actions, {
      primaryAction: { label: 'Save Changes', handler: function handler() {} },
      secondaryActions: [{ label: 'Clear', handler: function handler() {} }, { label: 'Cancel', handler: function handler() {} }]
    })
  );
});
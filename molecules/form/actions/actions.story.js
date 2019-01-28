'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _storyHelpers = require('../../../_helpers/story-helpers');

var _ = require('../../..');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('Form', module).add('actions: primary', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    { title: 'primary' },
    _react2.default.createElement(
      _.Form,
      null,
      _react2.default.createElement(_.Form.Actions, { primaryAction: { label: 'Save Changes', handler: function handler() {} } })
    )
  );
});

(0, _react3.storiesOf)('Form', module).add('actions: primary + secondary', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    { title: 'primary + secondary' },
    _react2.default.createElement(
      _.Form,
      null,
      _react2.default.createElement(_.Form.Actions, {
        primaryAction: { label: 'Save Changes', handler: function handler() {} },
        secondaryActions: [{ label: 'Try', icon: 'play', handler: function handler() {} }, { label: 'Play', icon: 'play', handler: function handler() {} }]
      })
    )
  );
});

(0, _react3.storiesOf)('Form', module).add('actions: primary + destructive', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    { title: 'primary + destructive' },
    _react2.default.createElement(
      _.Form,
      null,
      _react2.default.createElement(_.Form.Actions, {
        primaryAction: { label: 'Save Changes', handler: function handler() {} },
        destructiveAction: { label: 'Delete', icon: 'delete', handler: function handler() {} }
      })
    )
  );
});
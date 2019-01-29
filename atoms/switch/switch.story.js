'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _storyHelpers = require('../../_helpers/story-helpers');

var _ = require('../..');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('Switch', module).add('default', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    { title: 'Switch' },
    _react2.default.createElement(_.Switch, { onToggle: function onToggle(value) {
        return console.log(value);
      } })
  );
});

(0, _react3.storiesOf)('Switch', module).add('left label', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    { title: 'Switch' },
    _react2.default.createElement(_.Switch, { onToggle: function onToggle(value) {
        return console.log(value);
      }, labelPosition: 'left' })
  );
});

(0, _react3.storiesOf)('Switch', module).add('on', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    { title: 'Switch' },
    _react2.default.createElement(_.Switch, { on: true, onToggle: function onToggle(value) {
        return console.log(value);
      } })
  );
});

(0, _react3.storiesOf)('Switch', module).add('readonly', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    { title: 'Switch' },
    _react2.default.createElement(_.Switch, { readOnly: true }),
    _react2.default.createElement(_.Switch, { on: true, readOnly: true })
  );
});

(0, _react3.storiesOf)('Switch', module).add('accessibility labels', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    { title: 'Switch' },
    _react2.default.createElement(_.Switch, { accessibleLabels: [], onToggle: function onToggle() {} }),
    _react2.default.createElement(_.Switch, { accessibleLabels: ['ON', 'OFF'], onToggle: function onToggle() {} }),
    _react2.default.createElement(_.Switch, { on: true, accessibleLabels: ['ON', 'OFF'], onToggle: function onToggle() {} })
  );
});

(0, _react3.storiesOf)('Switch', module).add('hidden accessibility labels', function () {
  return _react2.default.createElement(
    _storyHelpers.Example,
    { title: 'Switch' },
    _react2.default.createElement(_.Switch, { hideAccessibleLabels: true, onToggle: function onToggle() {} })
  );
});
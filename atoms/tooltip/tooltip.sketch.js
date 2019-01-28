'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _ = require('../..');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('Tooltip', module).add('top', function () {
  return _react2.default.createElement(
    _.Tooltip,
    { position: 'top', content: 'Tooltip', defaultVisible: true },
    _react2.default.createElement('div', null)
  );
});

(0, _react3.storiesOf)('Tooltip', module).add('bottom', function () {
  return _react2.default.createElement(
    _.Tooltip,
    { position: 'bottom', content: 'Tooltip', defaultVisible: true },
    _react2.default.createElement('div', null)
  );
});
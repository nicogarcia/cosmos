'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icon = require('../atoms/icon');

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (prop) {
  if (typeof prop === 'string') {
    console.warn('Passing icons as string has been deprecated and will be removed in Cosmos 1.0.');
    console.log('Please replace \'icon="' + prop + '"\' with \'icon={<Icon name="' + prop + '"/>}\'');
    return _react2.default.createElement(_icon2.default, { name: prop });
  }
  return prop;
};
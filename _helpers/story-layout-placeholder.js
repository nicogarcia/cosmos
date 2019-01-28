'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  border: 2px dashed black;\n  padding: 10px;\n  height: 100%;\n'], ['\n  border: 2px dashed black;\n  padding: 10px;\n  height: 100%;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styled = require('../styled');

var _styled2 = _interopRequireDefault(_styled);

var _automationAttribute = require('./automation-attribute');

var _automationAttribute2 = _interopRequireDefault(_automationAttribute);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledPlaceholder = _styled2.default.div(_templateObject);

exports.default = function () {
  return _react2.default.createElement(
    StyledPlaceholder,
    (0, _automationAttribute2.default)('layout-placeholder-helper'),
    'Component'
  );
};
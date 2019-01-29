'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Clear = exports.Right = exports.Left = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  float: left;\n'], ['\n  float: left;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  float: right;\n'], ['\n  float: right;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  clear: both;\n'], ['\n  clear: both;\n']);

var _styled = require('../styled');

var _styled2 = _interopRequireDefault(_styled);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Left = _styled2.default.div(_templateObject);
var Right = _styled2.default.div(_templateObject2);
var Clear = _styled2.default.div(_templateObject3);

exports.Left = Left;
exports.Right = Right;
exports.Clear = Clear;
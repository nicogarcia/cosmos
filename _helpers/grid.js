'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Column = exports.Grid = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  display: flex;\n  justify-content: space-between;\n'], ['\n  display: flex;\n  justify-content: space-between;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  width: ', ';\n'], ['\n  width: ', ';\n']);

var _styled = require('../styled');

var _styled2 = _interopRequireDefault(_styled);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Grid = _styled2.default.div(_templateObject);

var Column = _styled2.default.div(_templateObject2, function (props) {
  return props.width || '50%';
});

exports.Grid = Grid;
exports.Column = Column;
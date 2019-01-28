'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shapeForDocs = exports.actionShapeWithoutRequiredHandler = exports.actionShapeWithRequiredIcon = exports.actionShape = undefined;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _icon = require('../atoms/icon');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var shapeForDocs = { label: 'string', icon: 'enum', handler: 'func' };

var actionShape = _propTypes2.default.shape({
  label: _propTypes2.default.string.isRequired,
  icon: _propTypes2.default.oneOf(_icon.__ICONNAMES__),
  handler: _propTypes2.default.func.isRequired
});

var actionShapeWithoutRequiredHandler = _propTypes2.default.shape({
  label: _propTypes2.default.string.isRequired,
  icon: _propTypes2.default.oneOf(_icon.__ICONNAMES__),
  handler: _propTypes2.default.func
});

var actionShapeWithRequiredIcon = _propTypes2.default.shape({
  label: _propTypes2.default.string.isRequired,
  icon: _propTypes2.default.oneOf(_icon.__ICONNAMES__).isRequired,
  handler: _propTypes2.default.func.isRequired
});

exports.actionShape = actionShape;
exports.actionShapeWithRequiredIcon = actionShapeWithRequiredIcon;
exports.actionShapeWithoutRequiredHandler = actionShapeWithoutRequiredHandler;
exports.shapeForDocs = shapeForDocs;
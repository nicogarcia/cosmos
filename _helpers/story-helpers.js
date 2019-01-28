'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IconStoryBox = exports.Stack = exports.Example = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  width: 15%;\n  display: inline-block;\n  text-align: center;\n  padding: 10px;\n'], ['\n  width: 15%;\n  display: inline-block;\n  text-align: center;\n  padding: 10px;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styled = require('../styled');

var _styled2 = _interopRequireDefault(_styled);

var _storyExample = require('./story-example');

var _storyExample2 = _interopRequireDefault(_storyExample);

var _storyStack = require('./story-stack');

var _storyStack2 = _interopRequireDefault(_storyStack);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var IconStoryBox = _styled2.default.div(_templateObject);

exports.Example = _storyExample2.default;
exports.Stack = _storyStack2.default;
exports.IconStoryBox = IconStoryBox;
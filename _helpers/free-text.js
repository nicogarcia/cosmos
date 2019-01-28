'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  margin: 0;\n'], ['\n  margin: 0;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styled = require('../styled');

var _styled2 = _interopRequireDefault(_styled);

var _paragraph = require('../atoms/paragraph');

var _paragraph2 = _interopRequireDefault(_paragraph);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledText = (0, _styled2.default)(_paragraph2.default)(_templateObject);

/**
 * Returns either a string with styles
 * or the raw text prop depending on its type.
 */
var FreeText = function FreeText(_ref) {
  var text = _ref.text,
      children = _ref.children,
      _ref$useParagraph = _ref.useParagraph,
      useParagraph = _ref$useParagraph === undefined ? false : _ref$useParagraph;

  if (children) {
    if (useParagraph) return _react2.default.createElement(
      StyledText,
      null,
      children
    );
    return children;
  }

  if (typeof text === 'string') {
    if (useParagraph) return _react2.default.createElement(
      StyledText,
      null,
      text
    );
    return text;
  }

  if (text) return text;

  return null;
};

exports.default = FreeText;
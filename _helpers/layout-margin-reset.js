'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.applyLayoutChildClass = exports.LAYOUT_CHILDREN_CLASS_NAME = undefined;

var _templateObject = _taggedTemplateLiteral(['\n      .cosmos-layout-child > * {\n        margin: ', ';\n      }\n\n      .cosmos-layout-child > * > *:last-child {\n        margin-bottom: ', ';\n      }\n\n      .cosmos-layout-child > * > *:first-child {\n        margin-top: ', ';\n      }\n    '], ['\n      .cosmos-layout-child > * {\n        margin: ', ';\n      }\n\n      .cosmos-layout-child > * > *:last-child {\n        margin-bottom: ', ';\n      }\n\n      .cosmos-layout-child > * > *:first-child {\n        margin-top: ', ';\n      }\n    ']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styled = require('../styled');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var LAYOUT_CHILDREN_CLASS_NAME = exports.LAYOUT_CHILDREN_CLASS_NAME = 'cosmos-layout-child';

var applyLayoutChildClass = exports.applyLayoutChildClass = function applyLayoutChildClass(children) {
  return _react2.default.Children.map(children, function (child) {
    return _react2.default.cloneElement(child, { className: LAYOUT_CHILDREN_CLASS_NAME });
  });
};

/**
 * Applies the margin reset depending on the prop value that comes
 * from the parent component.
 *
 * Layout's Items direct children has to have their margin cleared so it doesn't generate double spacings.
 * This is a fix that will last until we remove margins from components.
 */
var applyMarginReset = function applyMarginReset() {
  var propName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'disableMarginReset';
  return function (props) {
    var propValue = props[propName];
    var matchingValue = propValue !== 'undefined' ? '0' : null;

    if (matchingValue) return (0, _styled.css)(_templateObject, matchingValue, matchingValue, matchingValue);
    return '';
  };
};

exports.default = applyMarginReset;
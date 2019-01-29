'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _automationAttribute = require('./automation-attribute');

var _automationAttribute2 = _interopRequireDefault(_automationAttribute);

var _layoutMarginReset = require('./layout-margin-reset');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var transformChildren = function transformChildren(props, ChildWrapperElement, automationAttributeName) {
  var transformChild = function transformChild(child, index) {
    return _react2.default.createElement(
      ChildWrapperElement,
      _extends({
        className: _layoutMarginReset.LAYOUT_CHILDREN_CLASS_NAME,
        key: index
      }, (0, _automationAttribute2.default)(automationAttributeName)),
      child
    );
  };

  if (props.children.constructor.name === 'Array') {
    return props.children.map(transformChild);
  }

  return transformChild(props.children);
};

exports.default = transformChildren;
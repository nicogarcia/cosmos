'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n  ', ';\n\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  align-items: ', ';\n  justify-content: ', ';\n  > * {\n    flex: ', ';\n    margin-right: ', ';\n  }\n  > *:last-child {\n    margin-right: 0;\n  }\n'], ['\n  ', ';\n\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  align-items: ', ';\n  justify-content: ', ';\n  > * {\n    flex: ', ';\n    margin-right: ', ';\n  }\n  > *:last-child {\n    margin-right: 0;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  flex-basis: ', '%;\n'], ['\n  flex-basis: ', '%;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styled = require('../../styled');

var _styled2 = _interopRequireDefault(_styled);

var _automationAttribute = require('../../_helpers/automation-attribute');

var _automationAttribute2 = _interopRequireDefault(_automationAttribute);

var _containerStyles = require('../../_helpers/container-styles');

var _containerStyles2 = _interopRequireDefault(_containerStyles);

var _cosmosTokens = require('@auth0/cosmos-tokens');

var _customValidations = require('../../_helpers/custom-validations');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var alignItems = {
  top: 'flex-start',
  center: 'center',
  bottom: 'flex-end'
};

var justifyContent = {
  fill: 'space-between',
  'space-between': 'space-between',
  left: 'flex-start',
  right: 'flex-end'

  /*
  wrap children in col
  flex-basis makes flex redundant, have one
  accept widths on parent = Stack
  */

};var Stack = function Stack(props) {
  var children = void 0;
  if (props.align === 'fill' || props.align === 'space-between') {
    children = _react2.default.Children.map(props.children, function (child, index) {
      var width = 0;
      if (props.widths) width = '' + props.widths[index] || 0;

      return _react2.default.createElement(
        Stack.Item,
        _extends({ width: width }, (0, _automationAttribute2.default)('stack.item')),
        child
      );
    });
  } else {
    children = props.children;
  }

  return _react2.default.createElement(
    Stack.Element,
    _extends({}, props, { align: props.align }, (0, _automationAttribute2.default)('stack')),
    children
  );
};

Stack.Element = _styled2.default.div(_templateObject, _containerStyles2.default, function (props) {
  return alignItems[props.alignVertical];
}, function (props) {
  return justifyContent[props.align];
}, function (props) {
  return props.align === 'fill' ? 1 : 'none';
}, function (props) {
  return props.align === 'fill' ? _cosmosTokens.spacing.xsmall : 0;
});

Stack.Item = _styled2.default.div(_templateObject2, function (props) {
  return props.width;
});

Stack.propTypes = {
  /** Use align for stacking elements without margin between them */
  align: _propTypes2.default.oneOf(['fill', 'left', 'right', 'space-between']),
  /** Vertically align */
  alignVertical: _propTypes2.default.oneOf(['top', 'center', 'bottom']),
  /** Element widths in % */
  widths: _propTypes2.default.arrayOf(_propTypes2.default.number),

  /* internal props only used for validation */
  /* sum of width values should be 100% */
  _sum: function _sum(props) {
    return (0, _customValidations.sumOfElements)(props.widths, 100);
  },
  /* the number of widths should match number of children */
  _numberOfValues: function _numberOfValues(props) {
    return (0, _customValidations.numberOfValues)(props.widths, _react2.default.Children.count(props.children));
  }
};

Stack.defaultProps = {
  align: 'fill',
  alignVertical: 'center'
};

exports.default = Stack;
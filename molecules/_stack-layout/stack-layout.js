'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n  display: flex;\n  align-items: ', ';\n  justify-content: ', ';\n\n  flex-wrap: ', ';\n  > *:not(:last-child) {\n    margin-right: ', ';\n  }\n  ', ';\n'], ['\n  display: flex;\n  align-items: ', ';\n  justify-content: ', ';\n\n  flex-wrap: ', ';\n  > *:not(:last-child) {\n    margin-right: ', ';\n  }\n  ', ';\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  flex: ', ';\n\n  /* Avoids any component to be larger than it\'s parent */\n  max-width: 100%;\n  }\n'], ['\n  flex: ', ';\n\n  /* Avoids any component to be larger than it\'s parent */\n  max-width: 100%;\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styled = require('../../styled');

var _styled2 = _interopRequireDefault(_styled);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _automationAttribute = require('../../_helpers/automation-attribute');

var _automationAttribute2 = _interopRequireDefault(_automationAttribute);

var _layoutMarginReset = require('../../_helpers/layout-margin-reset');

var _layoutMarginReset2 = _interopRequireDefault(_layoutMarginReset);

var _transformLayoutChildren = require('../../_helpers/transform-layout-children');

var _transformLayoutChildren2 = _interopRequireDefault(_transformLayoutChildren);

var _cosmosTokens = require('@auth0/cosmos-tokens');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var gutterOptions = {
  none: '0',
  condensed: _cosmosTokens.spacing.small,
  default: _cosmosTokens.spacing.medium,
  spacious: _cosmosTokens.spacing.xlarge
};

var alignmentOptions = {
  center: 'center',
  end: 'flex-end',
  start: 'flex-start'
};

var distributionOptions = {
  spaceBetween: 'space-between',
  center: 'center',
  start: 'flex-start',
  end: 'flex-end'
};

var resolveSpace = function resolveSpace(props, child, index) {
  if (!props.space) return child;

  return _react2.default.cloneElement(child, { space: props.space[index] });
};

var StackLayout = function StackLayout(props) {
  return _react2.default.createElement(
    StackLayout.Element,
    _extends({}, props, (0, _automationAttribute2.default)('stack-layout')),
    _react2.default.Children.map((0, _transformLayoutChildren2.default)(props, StackLayout.Item, 'stack-layout.item'), resolveSpace.bind(undefined, props))
  );
};

StackLayout.Element = _styled2.default.div(_templateObject, function (props) {
  return alignmentOptions[props.alignment];
}, function (props) {
  return distributionOptions[props.distribution];
}, function (props) {
  return props.wrap ? 'nowrap' : 'wrap';
}, function (props) {
  return gutterOptions[props.gutter];
}, (0, _layoutMarginReset2.default)());

StackLayout.Item = _styled2.default.div(_templateObject2, function (props) {
  return props.space;
});

function spaceItemProp(props, propName) {
  var throwError = function throwError() {
    return new Error('Space value must be a number between 1 and 10 or "none"');
  };

  var value = props[propName];

  if (typeof value === 'number' && value < 1 && value > 10) return throwError();
  if (typeof value === 'string' && value !== 'none') return throwError();
}

StackLayout.propTypes = {
  /** Resets the margins of the component within the layout to generate consistent spaces. */
  disableMarginReset: _propTypes2.default.bool,
  /** Regulates the size of the gutter between flexed items*/
  gutter: _propTypes2.default.oneOf(['none', 'default', 'condensed', 'spacious']),
  /** Vertically align the components within the stack. applyes to `align-items` */
  alignment: _propTypes2.default.oneOf(['center', 'start', 'end']),
  /** Horizontally distribute the components within the stack. applyes to `justify-content` */
  distribution: _propTypes2.default.oneOf(['spaceBetween', 'center', 'start', 'end']),
  /** Flex wrap */
  wrap: _propTypes2.default.bool,
  /** Defines how much space each item within the stack container will take in relation to the others. For example and array of {[1, 2, 'none']} will make the third item follow the with of its content, and the second item take double the remind space than the first one. */
  space: _propTypes2.default.arrayOf(spaceItemProp)
};

StackLayout.defaultProps = {
  gutter: 'default',
  alignment: 'center',
  distribution: 'start'
};

exports.default = StackLayout;
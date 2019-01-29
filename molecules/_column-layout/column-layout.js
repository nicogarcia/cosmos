'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n  display: grid;\n  grid-gap: ', ';\n  grid-template-columns: 1fr;\n\n  /* Placeholder width media feature until we have global variables for breakpoints */\n  @media (min-width: 768px) {\n    grid-template-columns: ', ';\n  }\n\n  ', ';\n'], ['\n  display: grid;\n  grid-gap: ', ';\n  grid-template-columns: 1fr;\n\n  /* Placeholder width media feature until we have global variables for breakpoints */\n  @media (min-width: 768px) {\n    grid-template-columns: ', ';\n  }\n\n  ', ';\n']),
    _templateObject2 = _taggedTemplateLiteral([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styled = require('../../styled');

var _styled2 = _interopRequireDefault(_styled);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _automationAttribute = require('../../_helpers/automation-attribute');

var _automationAttribute2 = _interopRequireDefault(_automationAttribute);

var _transformLayoutChildren = require('../../_helpers/transform-layout-children');

var _transformLayoutChildren2 = _interopRequireDefault(_transformLayoutChildren);

var _layoutMarginReset = require('../../_helpers/layout-margin-reset');

var _layoutMarginReset2 = _interopRequireDefault(_layoutMarginReset);

var _cosmosTokens = require('@auth0/cosmos-tokens');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var gridTemplateColumns = {
  '1/2 1/2': 'repeat(2, 1fr)',
  '1/3 1/3 1/3': 'repeat(3, 1fr)',
  '2/3 1/3': '2fr 1fr',
  '1/3 2/3': '1fr 2fr',
  '1/4 1/4 1/4 1/4': 'repeat(4, 1fr)',
  '2/4 1/4 1/4': '2fr 1fr 1fr',
  '1/4 2/4 1/4': '1fr 2fr 1fr',
  '1/4 1/4 2/4': '1fr 1fr 2fr',
  '3/4 1/4': '3fr 1fr',
  '1/4 3/4': '1fr 3fr'
};

var gutterOptions = {
  none: '0',
  condensed: _cosmosTokens.spacing.small,
  default: _cosmosTokens.spacing.medium,
  spacious: _cosmosTokens.spacing.xlarge
};

var ColumnLayout = function ColumnLayout(props) {
  return _react2.default.createElement(
    ColumnLayout.Element,
    _extends({
      gutter: props.gutter,
      distribution: props.distribution
    }, (0, _automationAttribute2.default)('column-layout')),
    (0, _transformLayoutChildren2.default)(props, ColumnLayout.Item, 'column-layout.item')
  );
};

ColumnLayout.Element = _styled2.default.div(_templateObject, function (props) {
  return gutterOptions[props.gutter];
}, function (props) {
  return gridTemplateColumns[props.distribution];
}, (0, _layoutMarginReset2.default)());

ColumnLayout.Item = _styled2.default.div(_templateObject2);

ColumnLayout.propTypes = {
  /** Regulates the size of the gutter betwen each column */
  gutter: _propTypes2.default.oneOf(['none', 'default', 'condensed', 'spacious']),
  /** Defines the distribution and amount of columns */
  distribution: _propTypes2.default.oneOf(['1/2 1/2', '1/3 1/3 1/3', '2/3 1/3', '1/3 2/3', '1/4 1/4 1/4 1/4', '2/4 1/4 1/4', '1/4 2/4 1/4', '1/4 1/4 2/4', '3/4 1/4', '1/4 3/4']),
  /** Resets the margins of the component within the layout to generate consistent spaces. */
  disableMarginReset: _propTypes2.default.bool
};

ColumnLayout.defaultProps = {
  gutter: 'default',
  distribution: '1/2 1/2'
};

exports.default = ColumnLayout;
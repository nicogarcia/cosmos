'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-gap: ', ';\n\n  ', ';\n'], ['\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-gap: ', ';\n\n  ', ';\n']),
    _templateObject2 = _taggedTemplateLiteral([''], ['']);

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

var _cosmosTokens = require('@auth0/cosmos-tokens');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var PageLayout = function PageLayout(props) {
  return _react2.default.createElement(
    PageLayout.Element,
    _extends({}, props, (0, _automationAttribute2.default)('page-layout')),
    (0, _layoutMarginReset.applyLayoutChildClass)(props.children)
  );
};

PageLayout.Element = _styled2.default.div(_templateObject, _cosmosTokens.spacing.xlarge, (0, _layoutMarginReset2.default)());

PageLayout.Header = _styled2.default.div(_templateObject2);

PageLayout.Content = _styled2.default.div(_templateObject2);

PageLayout.propTypes = {
  /** Resets the margins of the component within the layout to generate consistent spaces. */
  disableMarginReset: _propTypes2.default.bool
};

exports.default = PageLayout;